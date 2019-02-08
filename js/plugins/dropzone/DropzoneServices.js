/* 标准方法：上传插件加载方法。
-----------------------------------------------------------------------------*/
(function ($) {
    window.Uploader = function () {
        this.Dropzone.init();
        return this;
    };
    
    Uploader.prototype.Dropzone={
        Dropzone:null,
        uploadFilesObj:[],
        host:parent.host,
        getFileListUrl:parent.host+"/api/WebAPI/GetFileList",
        uploadFileUrl:parent.host+"/api/WebAPI/Upload",
        deleteFileUrl:parent.host+"/api/WebAPI/DeleteFile",
        init:function(){
            this.DropzoneClear();
            this.uploadFilesObj=null;
            this.upload();
        },
        LoadDropzoneData:function(data){
           this.uploadFilesObj=data;
        },
        ValidatorDropzone:function(){
            var jsonstr=this.uploadFilesObj?JSON.stringify(this.uploadFilesObj):null;
            $("#hidden_attachList").val(jsonstr);
        },
        DropzoneClear:function(){
            if(this.Dropzone)
            {
                $(this.Dropzone.previewsContainer).find(".dz-preview").remove();
                this.Dropzone.files=[];
                this.Dropzone.destroy();
                this.Dropzone.emit("reset");
            }
        },
        upload:function(disable){
            disable=typeof(disable)=="undefined"?true:disable;
            var el=this;
            //Dropzone的初始化
            var dzoptions= {
                //指定上传图片的路径
                url: el.uploadFileUrl,
                //添加上传取消和删除预览图片的链接，默认不添加
                addRemoveLinks: disable,
                clickable: disable,
                //关闭自动上传功能，默认会true会自动上传
                //也就是添加一张图片向服务器发送一次请求
                autoProcessQueue: true,
                //允许上传多个照片
                uploadMultiple: true,
                //每次上传的最多文件数，经测试默认为2，坑啊
                //记得修改web.config 限制上传文件大小的节
                parallelUploads: 5,
                dictResponseError: '文件上传失败!',
                dictRemoveFile:"删除",
                dictCancelUpload:"取消上传",
                dictCancelUploadConfirmation:"你确定想要取消这个上传？",
                layer:true,
                isGoOn:function(file){
                  var name=file.name;
                  var arry=$.grep(el.uploadFilesObj,function(n,i){
                     return n.AttachName==name;
                  })
                  if(arry.length>0)
                  {
                    alert("该文件名已存在");
                    return false;
                  }else
                  {
                    return true;
                  }
                 
                },
                success: function(file, data,e,i) {
                    var item = data;
                    if (item.upload_State) {
                        var filePath=el.host+item.file_Path;
                        var newitem = {AttachID:item.file_ID,AttachName: item.file_Name, AttachPath: filePath,AttachSize:file.size,AttachType:file.type};
                        el.uploadFilesObj=el.uploadFilesObj?el.uploadFilesObj:[];
                        el.uploadFilesObj.push(newitem);
                        $(file.previewElement).find(".dz-download").attr("href",filePath);
                        $(file.previewElement).data("file_Path", filePath);
                        $(file.previewElement).data("file_ID", item.file_ID);
                    }else
                    {
                        alert(item.msg);
                    }
                },
                removedfile: function(file) {
                    //删除服务器的文件
                    if(file.status!="success"){
                        file.previewElement.remove();
                        return;
                    }
                    var filepath=$(file.previewElement).data("file_Path").replace(el.host,"");
                    var fileid=$(file.previewElement).data("file_ID");
                    var deleteUrl=el.deleteFileUrl;
                    if(typeof(filepath)!="undefined") {
                        var deleteSucess = function (data) {
                            if(data.IsSuccess){
                                var index=$(file.previewElement).index()-2;
                                el.uploadFilesObj.splice(index, 1);
                                file.previewElement.remove();
                                alert("删除成功");
                            }else{
                                alert(data.Message);
                            }
                        }
                        $.ajax({
                            type: "POST",
                            url: deleteUrl,
                            data: {file_Path: filepath,file_ID:fileid},
                            success:  deleteSucess
                        });
                    }else
                    {
                        file.previewElement.remove();
                    }
                    
                },
                init: function () {
                    var dropzone=this;
                    $.ajax({
                        type: "POST",
                        url:el.getFileListUrl,
                        success: function(data){
                            if(data.IsSuccess){
                                el.uploadFilesObj=data.BaseData;
                                $.each(el.uploadFilesObj,function(n,item){
                                    var file={id:item.AttachID,name:item.AttachName,size:item.AttachSize,status:"success",type:item.AttachType,url:el.host+item.AttachPath,showfirst:true};
                                    dropzone.files.push(file);
                                    dropzone.emit("addedfile", file);
                                });
                            }else{
                                alert(data.Message);
                            }
                        }
                    });
                    // $.each(el.uploadFilesObj,function(n,item){
                    //     var file={id:item.AttachID,name:item.AttachName,size:item.AttachSize,status:"success",type:item.AttachType,url:item.AttachPath,showfirst:true};
                    //     dropzone.files.push(file);
                    //     dropzone.emit("addedfile", file);
                    // });

                }
            };

            this.Dropzone=new Dropzone("#my-dropzone",dzoptions);

        }
    }

})(jQuery);