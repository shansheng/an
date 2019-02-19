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
          thumbnailWidth:80,
          thumbnailHeight: 80
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
                CollectGarbage();
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
        resize:function(jcrop_api){
            var select = jcrop_api.tellSelect();
        },
        _saveTxImageClick:function(c,dom){
            var p=dom.preview;
            var jcrop_api=p.jcrop_api;
            if (jcrop_api != null) {
               var imgSrc=p.src,dw =p.thumbnailWidth,dh=p.thumbnailHeight,boundx=p.boundx,boundy=p.boundy;
               var select = jcrop_api.tellSelect();
               var image = new Image();
               image.crossOrigin = "*";
               image.src =imgSrc;
               var imgWidth=image.width,imgHeight=image.height;
               var Ratio=imgWidth/boundx;
               var srcWidth=Math.round(Ratio * select.w);
               var srcHeight=Math.round(Ratio * select.h);
               var srcX=Math.round(Ratio * select.x);
               var srcY=Math.round(Ratio * select.y);
               var size={sx:srcX, sy:srcY, sw:srcWidth, sh:srcHeight, dx:0, dy:0, dw:dw, dh:dh}
               dom.getBase64(p.src,size).then(function(base64){
                   $("#testTX").attr("src",base64)
                },function(err){
                    console.log(err);
                });  
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
        getBase64:function(img,size){
              var image = new Image();
              image.crossOrigin = "*";
              image.src = img;
              var deferred=$.Deferred();
              if(img){
                image.onload =function (){
                    var canvas, ctx, thumbnail;
                    canvas = document.createElement("canvas");
                    ctx = canvas.getContext("2d");
                    canvas.width = size.dw;
                    canvas.height =  size.dh;
                    ctx.drawImage(image,size.sx, size.sy, size.sw, size.sh, size.dx, size.dy, size.dw, size.dh);
                    thumbnail = canvas.toDataURL();
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