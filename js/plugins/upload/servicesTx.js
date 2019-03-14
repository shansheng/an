/* 标准方法：上传插件加载方法。
-----------------------------------------------------------------------------*/
(function ($) {
    
    window.txUploader = function (options) {
        this.txUpload.host=parent.host;
        this.txUpload.id="#txUp";
        this.txUpload.getFileListUrl=parent.host+"/api/WebAPI/GetFileList";
        this.txUpload.uploadFileUrl=parent.host+"/api/WebAPI/Upload";
        this.txUpload.deleteFileUrl=parent.host+"/api/WebAPI/DeleteFile";
        this.txUpload.preview={
            image:null,
            degree:0,
            imgWrapWidth:360,
            imgWrapHeight:360,
            jcrop_api:null,
            boundx:null,
            boundy:null,
            thumbnailWidth:80,
            thumbnailHeight: 80
          };
        for(var i in options) {
            this.txUpload[i]=options[i];
        }
        this.txUpload.init();
        return this;
    };
    
    txUploader.prototype.txUpload={
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
                CollectGarbage();
            }
        },
        initEvent:function(){
          var dom=this;
          var el=$(this.id);
          //切换tab页
          $("a[action-type='switchTab']",el).click(function(){dom._switchTabClick(this,dom)});
          $("a[action-button='okClick']",el).click(function(){dom._saveTxImageClick(this,dom)});
          //$("a[action-button='okClick']",el).click(function(){$(".t-upload-selected").click();});
          $("a[action-button='reloadClick']",el).click(function(){
            dom.clear();
          });
        },
        resize:function(jcrop_api){
            var select = jcrop_api.tellSelect();
        },
        _saveTxImageClick:function(c,dom){
            var p=dom.preview;
            var jcrop_api=p.jcrop_api;
            if (jcrop_api != null) {
               var image = p.image,degree=p.degree,
               thumbnailWidth=p.thumbnailWidth,thumbnailHeight=p.thumbnailHeight,boundx=p.boundx;
               var select = jcrop_api.tellSelect();
               //degree为0正常尺寸
               if(degree!=0){
                 var iosbase64=this.rotateIosImage(image,degree);
                 var iosimage = new Image();
                 iosimage.onload =function (){
                    var size=dom.getCutSize(iosimage,thumbnailWidth,thumbnailHeight,boundx,select);
                    dom.drawCanvasImage(iosimage,size).then(function(base64){
                        $("#testTX").attr("src",base64);
                     },function(err){
                         console.log(err);
                     }); 
                 }
                 iosimage.src=iosbase64;
               }else
               {    
                    
                    var size=dom.getCutSize(image,thumbnailWidth,thumbnailHeight,boundx,select);
                    dom.drawCanvasImage(image,size).then(function(base64){
                        $("#testTX").attr("src",base64);
                    },function(err){
                        console.log(err);
                    }); 
               }
                //触发上传
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
        getCutSize:function(image,dw,dh,boundx,select){
            var imgWidth=image.width;
            var Ratio=imgWidth/boundx;
            var srcWidth=Math.round(Ratio * select.w);
            var srcHeight=Math.round(Ratio * select.h);
            var srcX=Math.round(Ratio * select.x);
            var srcY=Math.round(Ratio * select.y);
            var size={sx:srcX, sy:srcY, sw:srcWidth, sh:srcHeight, dx:0, dy:0, dw:dw, dh:dh};
            return size;
        },
        rotateIosImage:function(image,degree){
            if(image)
            {
                var canvas, ctx,w = width = image.width,h = height = image.height;
                canvas = document.createElement("canvas");
                ctx = canvas.getContext("2d");
                canvas.width = w;
                canvas.height =  h;
                switch (degree) {
                    case 180:
                        w = -width;
                        h = -height;
                        break;
                    case 90:
                       canvas.width = height;
                       canvas.height = width;
                       w = width;
                       h = -height;
                       break;
                    case 270:
                       canvas.width = height;
                       canvas.height = width;
                       w = -width;
                       h = height;
                       break;
                }
                ctx.rotate(degree * Math.PI / 180);
                ctx.drawImage(image,0,0,w,h);
                base64 = canvas.toDataURL();
                return base64;
            }
        },
        drawCanvasImage:function(image,size){
            var deferred=$.Deferred();
            if(image)
            {
                var canvas, ctx, thumbnail;
                canvas = document.createElement("canvas");
                ctx = canvas.getContext("2d");
                canvas.width = size.dw;
                canvas.height =  size.dh;
                ctx.drawImage(image,size.sx, size.sy, size.sw, size.sh, size.dx, size.dy, size.dw, size.dh);
                thumbnail = canvas.toDataURL("image/png");
                deferred.resolve(thumbnail);
            }
            return deferred.promise();
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
          var newcss = $.calculateImage({ img: img, imgWrapWidth:preview.imgWrapWidth, imgWrapHeight: preview.imgWrapHeight });
          preview.degree=newcss.degree;
          target.attr("src", url);
          $("[node-type='local_loading']",el).hide();
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
            var loadingDom= $("[node-type='local_loading']",el);
            var onSuccessUpload = function (e) {
               alert("上传成功！")
            }
            var onSelectUpload = function (e) {
                loadingDom.show();
                var file=e.files[0].rawFile;
                $.FixIosSize(file).then(function(base64){
                    dom.preview.image=dom._sImage(base64);
                },function(err){
                    console.log(err);
                });   
                
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

     $.FixIosSize =function (file) {
        var deferred=$.Deferred(); 
        if(file){
            var orientation;
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {
                var dataURL = e.target.result;
                deferred.resolve(dataURL);
            }
            return deferred.promise();
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

      /*按原比例缩放图片设置相对位置*/
      $.calculateImage = function (settings) {
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
        , newHeight = 0
        , degree=0;
        var isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
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
        if(isiOS){
            var orientation,w=newWidth,h=newHeight;
            EXIF.getData(img, function() {
                orientation = EXIF.getTag(this, 'Orientation');
            });
            //判断图片方向，重置大小，确定旋转角度，iphone默认的是home键在右方的横屏拍摄方式
            switch (orientation) {
                //iphone横屏拍摄，此时home键在右侧orientation为1，不需要变换
                //iphone横屏拍摄，此时home键在左侧
                case 3:
                    degree = 180;
                    break;
                //iphone竖屏拍摄，此时home键在下方(正常拿手机的方向)
                case 6:
                    degree = 90;
                    newWidth=h;
                    newHeight=w;
                    break;
                //iphone竖屏拍摄，此时home键在上方
                case 8:
                    degree = 270;
                    newWidth=h;
                    newHeight=w;
                    break;
            }
        }
        var left = ((imgWrapWidth - newWidth) / 2);
        var top = newHeight == imgWrapHeight ? 0 : (imgWrapHeight - newHeight) / 2;
        newWidth = newWidth;
        newHeight = newHeight == imgWrapHeight ? imgWrapHeight : newHeight;
        return { left: left, top: top, width: newWidth, height: newHeight,degree:degree};
    };

})(jQuery);