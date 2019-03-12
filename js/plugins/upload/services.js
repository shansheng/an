/* 标准方法：上传插件加载方法。
-----------------------------------------------------------------------------*/
(function ($) {
    window.tUploader = function (options) {
        this.tUpload.host=parent.host;
        this.tUpload.id="#attachments";
        this.tUpload.getFileListUrl=parent.host+"/api/WebAPI/GetFileList";
        this.tUpload.uploadFileUrl=parent.host+"/api/WebAPI/Upload";
        this.tUpload.deleteFileUrl=parent.host+"/api/WebAPI/DeleteFile";
        for(var i in options) {
          this.tUpload[i]=options[i];
        }
        this.tUpload.init();
        return this;
    };
    
    tUploader.prototype.tUpload={
        init:function(){
            this.list();
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
              var el=this;
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
                    $.drawImageIOSFix(ctx, image, (_ref = resizeInfo.srcX) != null ? _ref : 0, (_ref1 = resizeInfo.srcY) != null ? _ref1 : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, (_ref2 = resizeInfo.trgX) != null ? _ref2 : 0, (_ref3 = resizeInfo.trgY) != null ? _ref3 : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
                    thumbnail = canvas.toDataURL("image/png");
                    deferred.resolve(thumbnail);
                }
                return deferred.promise();
              }
        },
        _uploadSuccess: function (e) {
           var data=e.response;
           window.location.reload();
        },
        _uploadSelect: function (e) {

        },
        upload:function(){
            var upload=$(this.id).find("input[type='file']");
            upload.tUpload({ 
                async: { "saveUrl": this.uploadFileUrl, "autoUpload": true }, 
                showFileList: false, 
                onSelect: this._uploadSelect, 
                onSuccess: this._uploadSuccess
             });
        },
        list:function(disable){
            var el=this;
            var imagelist=$(this.id).find("ul");
            $.ajax({
                type: "POST",
                url:el.getFileListUrl,
                success: function(data){
                    if(data.IsSuccess){
                        $.each(data.BaseData,function(n,item){
                            var url=el.host+item.AttachPath;
                            var imgli=$(' <li class="fl " style="margin:0 20px 20px 0;border: 1px solid #ddd;height: 80px;min-width:80px;" >'+
                            '<img src="/js/plugins/upload/loading.gif"/></li> ');
                            imagelist.append(imgli);
                            el.getBase64(url).then(function(base64){
                              imgli.find("img").attr("src",base64)
                            },function(err){
                                console.log(err);
                            });      
                        });
                    }else{
                        alert(data.Message);
                    }
                }
            });  
        }
    }

    $.drawImageIOSFix = function(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh){
      var detectVerticalSquash = function(image) {
          var alpha, canvas, ctx, data, ey, ih, iw, py, ratio, sy;
          iw = image.naturalWidth;
          ih = image.naturalHeight;
          canvas = document.createElement("canvas");
          canvas.width = 1;
          canvas.height = ih;
          ctx = canvas.getContext("2d");
          ctx.drawImage(image, 0, 0);
          data = ctx.getImageData(0, 0, 1, ih).data;
          sy = 0;
          ey = ih;
          py = ih;
          while (py > sy) {
            alpha = data[(py - 1) * 4 + 3];
            if (alpha === 0) {
              ey = py;
            } else {
              sy = py;
            }
            py = (ey + sy) >> 1;
          }
          ratio = py / ih;
          if (ratio === 0) {
            return 1;
          } else {
            return ratio;
          }
      }
      var vertSquashRatio = detectVerticalSquash(img);
      return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
  }

})(jQuery);