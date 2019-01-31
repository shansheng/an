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
        uploadFileUrl:"https://www.kaoshicat.com/api/WebAPI/FileUpLoad",
        deleteFileUrl:"/Attach/DelAttachFile",
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
                success: function(file, data,e,i) {
                    var item = data.fileState[i];
                    if (item.upload_State) {
                        var newitem = {AttachName: item.file_Name, AttachPath: item.file_Path,AttachSize:file.size+";"+file.type};
                        el.uploadFilesObj=el.uploadFilesObj?el.uploadFilesObj:[];
                        el.uploadFilesObj.push(newitem);
                        $(file.previewElement).find(".dz-download").attr("href",item.file_Path);
                        $(file.previewElement).data("file_Path", item.file_Path);
                    }
                },
                removedfile: function(file) {
                    //删除服务器的文件
                    var filepath=$(file.previewElement).data("file_Path");
                    var fileid=$(file.previewElement).data("file_ID");
                    var deleteUrl=el.deleteFileUrl;
                    if(typeof(filepath)!="undefined") {
                        var deleteSucess = function (data) {
                            var index=$(file.previewElement).index()-2;
                            el.uploadFilesObj.splice(index, 1);
                            file.previewElement.remove();
                            alert("删除成功");
                        }
                        $.fn.ajaxHandler({url: deleteUrl, data: {file_Path: filepath,AttachGuid:fileid}}).done(deleteSucess);

                    }else
                    {
                        file.previewElement.remove();
                    }
                },
                init: function () {
                    var dropzone=this;
                    $.each(el.uploadFilesObj,function(n,item){
                        var arrySize=item.AttachSize?item.AttachSize.split(";"):[0,"未知"];
                        var file={id:item.AttachGuid,name:item.AttachName,size:arrySize[0],status:"success",type:arrySize[1],url:item.AttachPath,showfirst:true};
                        dropzone.files.push(file);
                        dropzone.emit("addedfile", file);
                    });

                }
            };

            this.Dropzone=new Dropzone("#my-dropzone",dzoptions);

        }
    }

})(jQuery);