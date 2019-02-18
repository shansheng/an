/* 标准方法：上传插件加载方法。
-----------------------------------------------------------------------------*/
(function ($) {
    
    window.txUploader = function () {
        this.txUpload.init();
        return this;
    };
    
    txUploader.prototype.txUpload={
        host:parent.host,
        id:"#txUp",
        getFileListUrl:parent.host+"/api/WebAPI/GetFileList",
        uploadFileUrl:parent.host+"/api/WebAPI/Upload",
        deleteFileUrl:parent.host+"/api/WebAPI/DeleteFile",
        uploader:null,
        preview:{
          src:null,
          imgWrapWidth:360,
          imgWrapHeight:360,
          jcrop_api:null,
          boundx:null,
          boundy:null,
          thumbnailWidth:180,
          thumbnailHeight: 180
        },
        init:function(){
            this.clear();
            this.list();
            this.upload();
            this.initEvent();
        },
        clear:function(){
            var el=$(this.id);
            var jcrop_api=this.preview.jcrop_api;
            $(".choose_pic",el).show();
            $(".edit_pic",el).hide();
            $("[node-type='local_loading']",el).hide();
            if (jcrop_api != null) {
                jcrop_api.destroy();
            }
        },
        initEvent:function(){
          var dom=this;
          var el=$(this.id);
          //切换tab页
          $("a[action-type='switchTab']",el).click(function(){dom._switchTabClick(this,dom)});
          $("a[action-button='okClick']",el).click(function(){dom._saveTxImageClick(this,dom)});
          $("a[action-button='reloadClick']",el).click(function(){
            dom.clear();
          });
        },
        _saveTxImageClick:function(c,dom){
            var p=dom.preview;
            var jcrop_api=p.jcrop_api;
            if (jcrop_api != null) {
                var select = jcrop_api.tellSelect();
                var dw =p.thumbnailWidth,dh=p.thumbnailHeight,
                boundx=p.boundx,boundy=p.boundy;
                var rx = dw / select.w;
                var ry = dh / select.h;
                var width = Math.round(rx * boundx);
                var height = Math.round(ry * boundy);
                var w = dw;
                var h = dh;
                var x = Math.round(rx * select.x);
                var y = Math.round(ry * select.y);
                //dom.uploader.data('tUpload').async.saveUrl ="";
                dom.getBase64(p.src).then(function(base64){
                    $("#testTX").attr("src",base64)
                  },function(err){
                      console.log(err);
                  });      
                //$(".t-upload-selected",el).click();
            }
        },
        _switchTabClick:function(c,dom){
            var el=$(dom.id);
            $(".minitb_item",el).removeClass("current");
            $(c).parent().addClass("current");
            var type = $(c).parent().attr("node-type");
            if (type == "local_tab") {
                $("[node-type='local']",el).show();
                $("[node-type='photobook']",el).hide();
            } else {
                $("[node-type='local']",el).hide();
                $("[node-type='photobook']",el).show();
            }
        },
        detectVerticalSquash:function(img) {
            var alpha, canvas, ctx, data, ey, ih, iw, py, ratio, sy;
            iw = img.naturalWidth;
            ih = img.naturalHeight;
            canvas = document.createElement("canvas");
            canvas.width = 1;
            canvas.height = ih;
            ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
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
        },
        drawImageIOSFix:function(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh){
            var vertSquashRatio;
            vertSquashRatio = this.detectVerticalSquash(img);
            return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
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
                    el.drawImageIOSFix(ctx, image, (_ref = resizeInfo.srcX) != null ? _ref : 0, (_ref1 = resizeInfo.srcY) != null ? _ref1 : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, (_ref2 = resizeInfo.trgX) != null ? _ref2 : 0, (_ref3 = resizeInfo.trgY) != null ? _ref3 : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
                    thumbnail = canvas.toDataURL("image/png");
                    deferred.resolve(thumbnail);
                }
                return deferred.promise();
              }
        },
        _sImage: function (url) {
          //图片加载
          var img = new Image();
          var dom=this;
          var appname = navigator.appName.toLowerCase();
          if (appname.indexOf("netscape") == -1) {
              //ie
              img.onreadystatechange = function () {
                  if (img.readyState == "complete") {
                    dom._imgComplete(img, url);
                  }
              };
          } else {
              //非ie
              img.onload = function () {
                  if (img.complete == true) {
                    dom._imgComplete(img, url);
                  }
              }
          }
          img.src = url;
          return img;
        },
        _imgComplete: function (img, url) {
          var dom=this,preview=this.preview,el=$(dom.id);
          var pcnt = el.find('.preview-container');
          var pimg = el.find('.preview-container img');
          var target =  $("img[name='target']",el);
          var ptarget1= $("img[name='preview-target1']",el);
          var ptarget2= $("img[name='preview-target2']",el);
          var ptarget3= $("img[name='preview-target3']",el);
          var newcss = $.fn.calculateImage({ img: img, imgWrapWidth:preview.imgWrapWidth, imgWrapHeight: preview.imgWrapHeight });
          target.attr("src", url);
          target.width(newcss.width).height(newcss.height);
          ptarget1.attr("src", url);
          ptarget2.attr("src", url);
          ptarget3.attr("src", url);
          var arrysize = [];
          preview.boundx = newcss.width;
          preview.boundy = newcss.height;
          pcnt.each(function () {
              var item = { "xsize": $(this).width(), "ysize": $(this).height() };
              arrysize.push(item);
          });

          var updatePreview = function (c) {
              if (parseInt(c.w) > 0) {
                  $.each(arrysize, function (n, item) {
                      var rx = item.xsize / c.w;
                      var ry = item.ysize / c.h;
                      $(pimg[n]).css({
                          width: Math.round(rx * preview.boundx) + 'px',
                          height: Math.round(ry * preview.boundy) + 'px',
                          marginLeft: '-' + Math.round(rx * c.x) + 'px',
                          marginTop: '-' + Math.round(ry * c.y) + 'px'
                      });
                  });
              }
          };

          target.Jcrop({
              bgFade: true,
              allowSelect: false,
              bgOpacity: .5,
              onChange: updatePreview,
              onSelect: updatePreview,
              aspectRatio: 1,
              setSelect: [0, 0, 200, 200]
          }, function () {
              preview.jcrop_api = this;
              $(".choose_pic").hide();
              $(".edit_pic").show();
              $(".jcrop-holder").css({ left: newcss.left, top: newcss.top });
          });
        },
        upload:function(){
            var dom=this;
            var el=$(dom.id);
            var upload=$("input[type='file']",el);
            dom.uploader=upload;
            var loadingDom= $("[node-type='local_loading']",el);
            var onSuccessUpload = function (e) {
               alert("上传成功！")
            }
            var onSelectUpload = function (e) {
                loadingDom.show();
                var file=e.files[0].rawFile;
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function (e) {
                    var database64 = e.target.result;
                    dom.preview.src=database64;
                    dom._sImage(database64);
                    loadingDom.hide();
                }
            }
            upload.tUpload({ 
                async: { "saveUrl": this.uploadFileUrl, "autoUpload": false }, 
                multiple: false,
                showUploadButton:false,
                localization: { "select": "","uploadSelectedFiles":"确定" }, 
                showFileList: false, 
                onSelect: onSelectUpload, onSuccess: onSuccessUpload
             });
        },
        list:function(){
            var el=this;
            var imagelist=$(this.id).find("ul");
            $.ajax({
                type: "POST",
                url:el.getFileListUrl,
                success: function(data){
                    if(data.IsSuccess){
                        $.each(data.BaseData,function(n,item){
                            var url=el.host+item.AttachPath;    
                        });
                    }else{
                        alert(data.Message);
                    }
                }
            });  
        }
    }


      /*按原比例缩放图片设置相对位置*/
      $.fn.calculateImage = function (settings) {
        var defaultSettings = {
            img: null,
            imgWrapWidth: 0,
            imgWrapHeight: 0
        }
        var options = $.extend(true, defaultSettings, settings);
        var img = options.img
        , originalWidth = img.width
        , originalHeight = img.height
        , imgWrapWidth = options.imgWrapWidth
        , imgWrapHeight = options.imgWrapHeight
        , newWidth = 0
        , newHeight = 0;
        if (originalWidth <= imgWrapWidth && originalHeight <= imgWrapHeight) {
            newWidth = originalWidth;
            newHeight = originalHeight;
        } else {
            //高比宽大
            if (originalHeight >= originalWidth) {
                newWidth = (originalWidth) / (originalHeight / imgWrapHeight);
                newHeight = imgWrapHeight;
            }
            //宽比高大
            if (originalHeight < originalWidth) {
                newWidth = imgWrapWidth;
                newHeight = (originalHeight) / (originalWidth / imgWrapWidth);
            }
        }
        var left = ((imgWrapWidth - newWidth) / 2);
        var top = newHeight == imgWrapHeight ? 0 : (imgWrapHeight - newHeight) / 2;
        newWidth = newWidth;
        newHeight = newHeight == imgWrapHeight ? imgWrapHeight : newHeight;
        return { left: left, top: top, width: newWidth, height: newHeight };
    };

})(jQuery);