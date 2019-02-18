/* 标准方法：上传插件加载方法。
-----------------------------------------------------------------------------*/
(function ($) {
    window.Uploader = function () {
        this.Dropzone.init();
        return this;
    };
    
    Uploader.prototype.Dropzone={
        id:"#my-dropzone",
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
        getBase64:function(img){
              var  resize=function(img,thumbnailWidth,thumbnailHeight){
                var info, srcRatio, trgRatio;
                info = {
                    srcX: 0,
                    srcY: 0,
                    srcWidth: img.width,
                    srcHeight:img.height
                  };
                  srcRatio =img.width / img.height;
                  info.optWidth = thumbnailWidth;
                  info.optHeight = thumbnailHeight;
                  if ((info.optWidth == null) && (info.optHeight == null)) {
                    info.optWidth = info.srcWidth;
                    info.optHeight = info.srcHeight;
                  } else if (info.optWidth == null) {
                    info.optWidth = srcRatio * info.optHeight;
                  } else if (info.optHeight == null) {
                    info.optHeight = (1 / srcRatio) * info.optWidth;
                  }
                  trgRatio = info.optWidth / info.optHeight;
                  if (img.height < info.optHeight || img.width < info.optWidth) {
                    info.trgHeight = info.srcHeight;
                    info.trgWidth = info.srcWidth;
                  } else {
                    if (srcRatio > trgRatio) {
                      info.srcHeight = img.height;
                      info.srcWidth = info.srcHeight * trgRatio;
                    } else {
                      info.srcWidth = img.width;
                      info.srcHeight = info.srcWidth / trgRatio;
                    }
                  }
                  info.srcX = (img.width - info.srcWidth) / 2;
                  info.srcY = (img.height - info.srcHeight) / 2;
                  return info;
              }
              var image = new Image();
              image.crossOrigin = "*";
              image.src = img;
              var deferred=$.Deferred();
              if(img){
                image.onload =function (){
                    var canvas, ctx, resizeInfo, thumbnail, _ref, _ref1, _ref2, _ref3;
                    var resizeInfo=resize(image,120,120);
                    if (resizeInfo.trgWidth == null) {
                        resizeInfo.trgWidth = resizeInfo.optWidth;
                    }
                    if (resizeInfo.trgHeight == null) {
                        resizeInfo.trgHeight = resizeInfo.optHeight;
                    }
                    canvas = document.createElement("canvas");
                    ctx = canvas.getContext("2d");
                    canvas.width = resizeInfo.trgWidth;
                    canvas.height = resizeInfo.trgHeight;
                    Dropzone.drawImageIOSFix(ctx, image, (_ref = resizeInfo.srcX) != null ? _ref : 0, (_ref1 = resizeInfo.srcY) != null ? _ref1 : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, (_ref2 = resizeInfo.trgX) != null ? _ref2 : 0, (_ref3 = resizeInfo.trgY) != null ? _ref3 : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
                    thumbnail = canvas.toDataURL("image/png");
                    deferred.resolve(thumbnail);
                }
                return deferred.promise();
              }
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
                firstDone:function(file){
                    $(file.previewElement).find(".dz-progress").remove();
                    $(file.previewElement).find(".dz-download").attr("href",file.url);
                    $(file.previewElement).find(".dz-image img").attr("alt",file.name).attr("src","/js/plugins/upload/loading.gif");
                    el.getBase64(file.url).then(function(base64){
                        $(file.previewElement).find(".dz-image img").attr("src",base64);
                    },function(err){
                          console.log(err);
                    });        
                    $(file.previewElement).data("file_Path", file.url);
                    $(file.previewElement).data("file_ID", file.id);
                    $(file.previewElement).attr("title",file.name);
                    if(file.type.indexOf("image")!= -1)
                    $(file.previewElement).addClass("dz-image-preview").removeClass("dz-file-preview");
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
                        $(file.previewElement).attr("title",file.name);
                    }else
                    {
                        $(file.previewElement).remove();
                        alert(item.msg);
                    }
                },
                removedfile: function(file) {
                    //删除服务器的文件
                    if(file.status!="success"){
                        $(file.previewElement).remove();
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
                                $(file.previewElement).remove();
                                //alert("删除成功");
                            }else{
                                alert(data.Message);
                            }
                        }
                        if(window.confirm("是否删除文件？")){
                            $.ajax({
                                type: "POST",
                                async:false,
                                url: deleteUrl,
                                data: {file_Path: filepath,file_ID:fileid},
                                success:  deleteSucess
                            });
                        }else{
                            return false;
                        }
                    }else
                    {
                        $(file.previewElement).remove();
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
                      
                }
            };

            this.Dropzone=new Dropzone(this.id,dzoptions);

        }
    }

})(jQuery);