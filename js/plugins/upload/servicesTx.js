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
        preview:{
          imgWrapWidth:360,
          imgWrapHeight:360,
          jcrop_api:null,
          boundx:null,
          boundy:null
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
          $("a[action-button='okClick']",el).click(function(){
            $(".t-upload-selected",el).click();
          });
          $("a[action-button='reloadClick']",el).click(function(){
            dom.clear();
          });
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
            var loadingDom= $("[node-type='local_loading']",el);
            var onSuccessUpload = function (e) {
                alert(1);
           
                var jcrop_api=dom.preview.jcrop_api,boundx=dom.preview.boundx,boundy=dom.preview.boundy;
                if (jcrop_api != null) {
                 var select = jcrop_api.tellSelect();
                 var dw = 180, dh = 180;
                 var rx = dw / select.w;
                 var ry = dh / select.h;
                 var width = Math.round(rx * boundx);
                 var height = Math.round(ry * boundy);
                 var w = dw;
                 var h = dh;
                 var x = Math.round(rx * select.x);
                 var y = Math.round(ry * select.y);
                
                }
            }
            var onSelectUpload = function (e) {
                loadingDom.show();
                var file=e.files[0].rawFile;
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function (e) {
                    var database64 = e.target.result;
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