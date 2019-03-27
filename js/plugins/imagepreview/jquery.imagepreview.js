/*----------------------------------------
* Copyright (c) 2017 菠萝工作室
* 网站：http://www.0non0.com
* Date: 2017-5-18
* Creater:Cqy
----------------------------------------*/

/*------通用的控件库 by:cqy 2017-5-18------*/
/*------处理参数比较多的控件------*/
(function ($) {

      /*--- 图片操作封装（缩放、旋转、移动）Start-------*/
      $.fn.addHandler = function (type, handler) {
        $(this).each(function(){
            var element = this;
            if (window.addEventListener) {
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent('on' + type, handler);
            } else {
                element['on' + type] = handler;
            }
        })  
    }
       /*上下翻页*/
    $.fn.calculatethumbBox = function (settings) {
        var defaultSettings = {
            isall: false,
            index: 0,
            pagesize: 8,
            animation: true,
            thumbWidth: 55,
            disableshow: false,
            direction: 0, //0:横向 1:竖直
            prevEl: $("#js-thumb-prev"),
            nextEl: $("#js-thumb-next"),
            thumbList: $("#js-thumbList-ctn li"),
            thumb: $("#js-thumbList-ctn"),
            thumbWrap: $("#js-viewer-container")
        }
        var options = $.extend(true, defaultSettings, settings);
        var isall = options.isall
        , index = options.index
        , pagesize = options.pagesize
        , animation = options.animation
        , thumbWidth = options.thumbWidth
        , imglist = $(options.thumbList)
        , container = $(options.thumbWrap)
        , thumbList = $(options.thumb)
        , prevEl = $(options.prevEl)
        , nextEl = $(options.nextEl)
        , currentleft = -(index * thumbWidth)
        , total = imglist.length;
        if (options.direction == 1) {
            thumbList.height(total * thumbWidth);
            thumbList.parent().height(pagesize * thumbWidth);
            if (animation)
                thumbList.animate({ top: currentleft }, "fast");
            else
                thumbList.css({ top: currentleft });
        } else {
            thumbList.width(total * thumbWidth);
            thumbList.parent().width(pagesize * thumbWidth);
            if (animation)
                thumbList.animate({ left: currentleft }, "fast");
            else
                thumbList.css({ left: currentleft });
        }

        //根据index的位置判断上下页按钮状态
        {
            if (!options.disableshow) prevEl.hide();
            prevEl.addClass("predisable");
            if (total <= pagesize) {
                if (!options.disableshow) nextEl.hide();
                nextEl.addClass("nextdisable");
                return;
            }
            if (currentleft < 0) {
                prevEl.show();
                prevEl.removeClass("predisable");
            }
            else {
                nextEl.show();
                nextEl.removeClass("nextdisable");
            }

            var currenttotal = parseInt(index) + parseInt(pagesize);
            if (currenttotal < total) {
                nextEl.show();
                nextEl.removeClass("nextdisable");
            }
            else {
                if (!options.disableshow) nextEl.hide();
                nextEl.addClass("nextdisable");
            }
        }

        nextEl.unbind("click").click(function () {
            if ($(this).hasClass("nextdisable"))
                return;
            if (options.direction == 1) {
                var left = thumbList.css("top").replace("px", "");
            } else {
                var left = thumbList.css("left").replace("px", "");
            }
            var index = -left / thumbWidth;
            if (isall) {
                var nextindex = parseInt(index) + parseInt(pagesize);
                options.index = nextindex;
                options.pagesize = pagesize;
                $.fn.calculatethumbBox(options);
            } else {
                var total = imglist.length;
                var oversize = total % pagesize;
                var totalindex = total - oversize;
                var nextindex = parseInt(index) + parseInt(pagesize);
                if (nextindex >= totalindex && nextindex <= total) {
                    nextindex = total - pagesize;
                }
                options.index = nextindex;
                options.pagesize = pagesize;
                $.fn.calculatethumbBox(options);
            }

        });

        prevEl.unbind("click").click(function () {
            if ($(this).hasClass("predisable"))
                return;
            if (options.direction == 1) {
                var left = thumbList.css("top").replace("px", "");
            } else {
                var left = thumbList.css("left").replace("px", "");
            }
            var index = -left / thumbWidth;
            var nextindex = parseInt(index) - parseInt(pagesize);
            if (nextindex < 0) {
                nextindex = 0;
            }
            options.index = nextindex;
            options.pagesize = pagesize;
            $.fn.calculatethumbBox(options);

        });
    }

     $.IMAGETOOL = function () {
        //变换的方法(旋转和缩放等)
        window.imagesview_width = 0;
        window.imagesview_height = 0;
        window.imagesview_fix_width = 0;
        window.imagesview_fix_height = 0;
        window.imagesview_fix_left = 0;
        window.imagesview_fix_top = 0;
        window.imagesbox_radian = 0;
        window.imagesbox_scalex = 1;
        window.imagesbox_scaley = 1;
        window.imagesbox_zoom = .1;
        var IMAGEBOX = {
            _initValue: function () {
                imagesview_width = 0;
                imagesview_height = 0;
                imagesview_fix_width = 0;
                imagesview_fix_height = 0;
                imagesview_fix_left = 0;
                imagesview_fix_top = 0;
                imagesbox_radian = 0;
                imagesbox_scalex = 1;
                imagesbox_scaley = 1;
                imagesbox_zoom = .1;
            },
            img: null,
            jimg: null,
            container: null,
            _init: function (selector) {
                this.jimg = $(selector);
                this.img = this.jimg[0];
                this.container = this.jimg.parent()[0];
                this.jimg.easydrag(true);
                this._init_mousewheel();
            },
            getMatrix: function () {
                var matrix = this._getMatrix(imagesbox_radian, imagesbox_scalex, imagesbox_scaley);
                return matrix;
            },
            _getMatrix: function (radian, x, y) {
                var Cos = Math.cos(radian), Sin = Math.sin(radian);
                return {
                    M11: Cos * x, M12: -Sin * y,
                    M21: Sin * x, M22: Cos * y
                };
            },
            _Css3Transform: function (css3Transform) {
                //使用css3
                var matrix = this.getMatrix();
                var matrixValue = "matrix(" + matrix.M11.toFixed(16) + "," + matrix.M21.toFixed(16) + "," + matrix.M12.toFixed(16) + "," + matrix.M22.toFixed(16) + ", 0, 0)";
                this.img.style[css3Transform] = matrixValue;
            },
            _MatrixTransform: function () {
                //计算中心位置
                var center_top = this.jimg.position().top + (this.img.offsetHeight / 2);
                var center_left = this.jimg.position().left + (this.img.offsetWidth / 2);

                //使用滤镜
                this.img.style.filter = "progid:DXImageTransform.Microsoft.Matrix(SizingMethod='auto expand')";
                var Pos = this.getMatrix();
                ananas.extend(this.img.filters.item("DXImageTransform.Microsoft.Matrix"), Pos);
                //保持居中
                var real_top = center_top - (this.img.offsetHeight / 2);
                var real_left = center_left - (this.img.offsetWidth / 2);
                this.img.style.top = real_top + "px";
                this.img.style.left = real_left + "px";
            },
            _show: function () {
                var css3Transform,
                style = document.createElement("div").style,
                isCss3 = false;
                $.each(["transform", "MozTransform", "webkitTransform", "OTransform"], function (n, css) {
                    if (css in style) {
                        css3Transform = css;
                        isCss3 = true;
                        return false;
                    }
                });
                if (isCss3)
                    this._Css3Transform(css3Transform);
                else
                    this._MatrixTransform();
            },
            _init_mousewheel: function () {
                mousewheel = /firefox/.test(navigator.userAgent.toLowerCase()) ? "DOMMouseScroll" : "mousewheel";
                //设置滚动事件
                $(this.container).addHandler(mousewheel, this._mousewheel_zoom);
            },
            _ScrollUpDown: function (delta) {
                var top = this.img.style.top.replace("px", "");
                var space = 20;
                this.img.style.top = (top - (delta * space)) + "px";
            },
            _mousewheel_scroll: function (e) {
                var delta = e.wheelDelta ? e.wheelDelta / (-120) : (e.detail || 0) / 3;
                IMAGEBOX._ScrollUpDown(delta);
            },
            //滚轮缩放函数
            _mousewheel_zoom: function (e) {
                var value = (e.wheelDelta ? e.wheelDelta / (-120) : (e.detail || 0) / 3) * Math.abs(imagesbox_zoom);
                //console.log(value+":"+imagesbox_scaley);
                IMAGEBOX.TRANSFORMS.scale(-value);
                IMAGEBOX._show();
                e.preventDefault();
            },
            TRANSFORMS: {
                //垂直翻转
                imagesbox_show: function () {
                    IMAGEBOX._show();
                },
                //垂直翻转
                vertical: function () {
                    imagesbox_radian = Math.PI - imagesbox_radian;
                    imagesbox_scaley *= -1;
                    this.imagesbox_show();
                },
                //水平翻转
                horizontal: function () {
                    imagesbox_radian = Math.PI - imagesbox_radian;
                    imagesbox_scalex *= -1;
                    this.imagesbox_show();
                },
                //向左转90度
                left: function () {
                    imagesbox_radian -= Math.PI / 2;
                    this.imagesbox_show();
                },
                //向右转90度
                right: function () {
                    imagesbox_radian += Math.PI / 2;
                    this.imagesbox_show();
                },
                //缩放
                scale: function () {
                    var getZoom = function (scale, imagesbox_zoom) {
                        return scale > 0 && scale > -imagesbox_zoom ? imagesbox_zoom :
                            scale < 0 && scale < imagesbox_zoom ? -imagesbox_zoom : 0;
                    }
                    return function (imagesbox_zoom) {
                        if (imagesbox_zoom) {
                            var hZoom = getZoom(imagesbox_scaley, imagesbox_zoom),
                            vZoom = getZoom(imagesbox_scalex, imagesbox_zoom);
                            if (hZoom && vZoom) {
                                imagesbox_scaley += hZoom; imagesbox_scalex += vZoom;
                                if(imagesbox_zoom<0&&imagesbox_scalex<0.1){
                                    imagesbox_scaley = 0.1; imagesbox_scalex = 0.1;
                                }
                            }
                        }
                    }
                } (),
                //放大
                zoomin: function () {
                    this.scale(Math.abs(imagesbox_zoom));
                    this.imagesbox_show();
                },
                //缩小
                zoomout: function () {
                    this.scale(-Math.abs(imagesbox_zoom));
                    this.imagesbox_show();
                },
                reset: function () {
                    imagesbox_scalex = imagesbox_scaley = 1;
                    imagesbox_radian = 0;
                    this.imagesbox_show();
                },
                original_size: function () {
                    imagesbox_scalex = imagesbox_scalex > 0 ? 1 : -1;
                    imagesbox_scaley = imagesbox_scaley > 0 ? 1 : -1;
                    this.imagesbox_show();
                },
                zoomAuto: function () {
                    IMAGEBOX.jimg.width(imagesview_fix_width);
                    IMAGEBOX.jimg.height(imagesview_fix_height);
                    IMAGEBOX.img.style.top = imagesview_fix_top + "px";
                    IMAGEBOX.img.style.left = imagesview_fix_left + "px";
                },
                zoomFix: function () {
                    IMAGEBOX.jimg.width(imagesview_width);
                    IMAGEBOX.jimg.height(imagesview_height);
                    IMAGEBOX.img.style.top = (IMAGEBOX.container.clientHeight - imagesview_height) / 2 + "px";
                    IMAGEBOX.img.style.left = (IMAGEBOX.container.clientWidth - imagesview_width) / 2 + "px";
                }
            }
        }
        return IMAGEBOX;
    };

    $.IMAGEPREVIEW = function (options) {
        var defaults = {
            paging:false,
            host:parent.host,
            ListUrl:parent.host+"/api/WebAPI/GetFileList",
            EditUrl: "EditInfo",
            boxScale:1.49,
            boxFigureW:300,
            boxSize:[10,10],
            autoSize:false,
            showThumb:true
        }
        var opt = $.extend({},defaults, options);
        var photolist = {
            IMAGETOOL: null,
            initOptions:function(){
                this.boxScale=opt.boxScale;
                this.boxFigureW=opt.boxFigureW;
                this.boxSize=opt.boxSize;
                this.autoSize=opt.autoSize;
                this.showThumb=opt.showThumb;
                if(this.showThumb){
                    $("#js-thumb-ctn").show();
                }else
                {
                    $("#js-thumb-ctn").hide();
                }

                if(this.boxFigureW==0){
                    $("#js-sidebar-ctn").hide();
                    $("#js-hander-button").addClass("icon-left");
                    $("#js-hander-button").find(".fa").html("&#xe63c;");
                }

                if(!this.autoSize){
                    $("#js-large-button").attr("title", "小图模式");
                    $("#js-large-button i").removeClass("icon-big-view").addClass("icon-small-view");
                }
            },
            init: function () {
                this.IMAGETOOL = $.IMAGETOOL();
                this.initOptions();
                this.loadImage(function(data){
                    photolist.initEvent();
                });
            },
            getBase64:function(img,thumbnailWidth,thumbnailHeight){
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
                      var resizeInfo=resize(image,thumbnailWidth,thumbnailHeight);
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
                      ctx.drawImage(image, (_ref = resizeInfo.srcX) != null ? _ref : 0, (_ref1 = resizeInfo.srcY) != null ? _ref1 : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, (_ref2 = resizeInfo.trgX) != null ? _ref2 : 0, (_ref3 = resizeInfo.trgY) != null ? _ref3 : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
                      thumbnail = canvas.toDataURL("image/png");
                      deferred.resolve(thumbnail);
                  }
                  return deferred.promise();
                }
            },
            loadImage:function(callback){
                $.ajax({
                    type: "POST",
                    url:opt.ListUrl,
                    success: function(data){
                        if(data.IsSuccess){
                           var uploadFilesObj=data.BaseData;
                            $.each(uploadFilesObj,function(n,item){
                                var file={id:item.AttachID,name:item.AttachName,size:item.AttachSize,type:item.AttachType,url:opt.host+item.AttachPath};
                                var li='<li class="js-thumb-item"><a href="javascript:void(0)" class="mini_img_link js_fade_in">'+
                                '<img class="js-thumbNail-img" src="/js/plugins/upload/loading.gif" data-src="'+file.url+'" data-title="'+file.name+'" data-id="'+file.id+'"  data-desc="" data-datetime="" alt="" /></a></li>';
                                $("#js-thumbList-ctn").append(li);
                                photolist.getBase64(file.url,50,50).then(function(base64){
                                    $("#js-thumbList-ctn").find(".js-thumbNail-img:eq("+n+")").attr("src",base64);
                                },function(err){
                                    console.log(err);
                                });  
                            });
                            callback(data);
                        }else{
                            alert(data.Message);
                        }
                    }
                });  
            },
            PreviewInit:function(index){
                photolist.resize();
                photolist.initPreview(index);
                $("#js-viewer-container").show();
            },
            initEvent: function () {
                //关闭
                $(".photo_layer_close").click(function () {
                    $("#js-viewer-container").hide();
                    //清空图片预览
                    $("#js-image-ctn").empty();
                    $("#js-thumbList-ctn li").removeClass("on");
                    $("#js-thumbList-ctn").css({ left: 0 });
                    $("#js-desc-editor").find(".titletext").html("");
                    $("#js-desc-editor").find(".desctext").html("")
                });

                /*图片预览s*/
                var photopreview = $("#js-viewer-container");
                var editor = $("#js-desc-editor");
                var editinput = editor.find(".js-title-editor").find("input");
                var edittextarea = editor.find(".js-desc-cont").find("textarea");
                var imglist = $("#js-thumbList-ctn li");
                //修改描述
                editor.find(".js-change-desctitle").click(function () {
                    var titlehtml = editor.find(".titletext").html();
                    var deschtml = editor.find(".desctext").html();
                    editinput.val(titlehtml);
                    edittextarea.val(deschtml);
                    editor.find(".js-desc-title-currword").html(titlehtml.length);
                    editor.find(".js-desc-currword").html(deschtml.length);
                    photolist.desContentshow();
                });

                //取消修改
                editor.find(".js-desc-cancel").click(function () {
                    photolist.desContenthide();
                });

                //确定修改
                editor.find(".js-desc-ok").click(function () {
                    var titlehtml = editinput.val();
                    var deschtml = edittextarea.val();
                    var photoData = {};
                    photoData.id = editor.find("input[name='hidePhotoId']").val();
                    photoData.describe = deschtml;
                    photoData.name = titlehtml;
                    $.ajax({
                        url:opt.EditUrl,
                        data: photoData,
                        type: "post",
                        dataType: "json",
                        success: function (data) {
                            if (!data.IsSuccess) {
                                alert("修改出错!");
                                return;
                            }
                            //修改预览窗口的标题和描述
                            editor.find(".titletext").html(titlehtml);
                            editor.find(".desctext").html(deschtml);
                            $("#js-ctn-infoBar .js-album-name").attr("title", titlehtml);
                            $("#js-ctn-infoBar .js-album-name").html(titlehtml);
                            var onimg = $("#js-thumbList-ctn li.on").find("img");
                            onimg.attr("data-title", titlehtml);
                            onimg.attr("data-desc", deschtml);
                            photolist.desContenthide();
                            //修改页面的标题
                            var index = $("#js-thumbList-ctn li img").index(onimg);
                            var currenteditor = $(".photoslist").children().children().eq(index);
                            currenteditor.find(".clickname span").text(titlehtml);
                            currenteditor.find(".clickname span").attr("title", titlehtml);
                        }
                    });
                });

                //input输入框值改变
                editinput.bind("input propertychange", function () {
                    editor.find(".js-desc-title-currword").html(editinput.val().length);
                });

                //textarea输入框值改
                edittextarea.bind("input propertychange", function () {
                    editor.find(".js-desc-currword").html(edittextarea.val().length);
                });

                /*上下页操作s*/
                $("#js-viewer-imgWraper").bind('mouseenter', function () {
                    $("#js-figure-area").show();
                    $("#js-btn-prevPhoto").show();
                    $("#js-btn-nextPhoto").show();
                });

                $("#js-viewer-imgWraper").bind('mouseleave', function () {
                    $("#js-figure-area").hide();
                    $("#js-btn-prevPhoto").hide();
                    $("#js-btn-nextPhoto").hide();
                });

                $("#js-btn-prevPhoto").bind('mouseenter', function () {
                    var currentindex = $("#js-viewer-container").attr("currentindex");
                    if (currentindex > 0)
                        $(this).addClass("arrow-pre-hover");
                });

                $("#js-btn-prevPhoto").bind('mouseleave', function () {
                    $(this).removeClass("arrow-pre-hover");
                });

                $("#js-btn-nextPhoto").bind('mouseenter', function () {
                    var currentindex = $("#js-viewer-container").attr("currentindex");
                    if (currentindex < imglist.length - 1)
                        $(this).addClass("arrow-next-hover");
                });

                $("#js-btn-nextPhoto").bind('mouseleave', function () {
                    $(this).removeClass("arrow-next-hover");
                });

                $("#js-btn-prevPhoto").click(function () {
                    var currentindex = $("#js-viewer-container").attr("currentindex");
                    var preindex = parseInt(currentindex) - 1;
                    //滚动缩略区域
                    if (currentindex > 0) {
                        photolist.initPreview(preindex);
                    }
                    if (preindex == 0) {
                        $(this).removeClass("arrow-pre-hover");
                    }
                });

                $("#js-btn-nextPhoto").click(function () {
                    var currentindex = $("#js-viewer-container").attr("currentindex");
                    var nextindex = parseInt(currentindex) + 1;
                    //滚动缩略区域
                    if (nextindex < imglist.length) {
                        photolist.initPreview(nextindex);
                    }

                    if (nextindex == imglist.length - 1) {
                        $(this).removeClass("arrow-next-hover");
                    }
                });

                /*上下页操作e*/
                imglist.click(function () {
                    var index = imglist.index(this);
                    photolist.initPreview(index);
                });
                /*图片预览e*/

                //窗口自适应
                $(window).resize(function () {
                    photolist.resize();
                });

                //图片操作按钮
                //放大
                var transforms = this.IMAGETOOL.TRANSFORMS;
                $("#js-btn-zoomIn").click(function () {
                    transforms.zoomin();
                });
                //缩小
                $("#js-btn-zoomOut").click(function () {
                    transforms.zoomout();
                });
                //实际大小
                $("#js-btn-zoomFix").click(function () {
                    transforms.reset();
                    transforms.zoomFix();
                });
                //旋转
                $("#js-btn-rotateRight").click(function () {
                    transforms.right();
                });
                //重置
                $("#js-btn-zoomReset").click(function () {
                    transforms.reset();
                    transforms.zoomAuto();
                });
                //全屏
                $("#js-large-button").click(function () {
                    var icon = $(this).children();
                    if (icon.hasClass("icon-big-view")) {
                        $(this).attr("title", "小图模式");
                        icon.removeClass("icon-big-view").addClass("icon-small-view");
                        photolist.autoSize=false;
                        transforms.reset();
                        photolist.resize();
                        //alert("全屏模式");
                    }
                    else {
                        $(this).attr("title", "全屏模式");
                        icon.removeClass("icon-small-view").addClass("icon-big-view");
                        photolist.autoSize=true;
                        transforms.reset();
                        photolist.resize();
                        //alert("小图模式");
                    }

                });

                $("#js-hander-button").click(function () {
                    var currentIcon = $(this);
                    if (currentIcon.hasClass("icon-left")) {
                        currentIcon.removeClass("icon-left");
                        currentIcon.find(".fa").html("&#xe620;");
                        $("#js-sidebar-ctn").show();
                        photolist.boxFigureW=300;
                        transforms.reset();
                        photolist.resize();
                    } else {
                        currentIcon.addClass("icon-left");
                        currentIcon.find(".fa").html("&#xe63c;");
                        $("#js-sidebar-ctn").hide();
                        photolist.boxFigureW=0;
                        transforms.reset();
                        photolist.resize();
                    }
                });
            },
            initPreview: function (index) {
                this.IMAGETOOL._initValue();
                var imglist = $("#js-thumbList-ctn li");
                var editor = $("#js-desc-editor");
                $("#js-ctn-infoBar span").html((index + 1) + "/" + imglist.length);
                //设置图片选中
                imglist.removeClass("on");
                imglist.eq(index).addClass("on");
                //获取比当前选中的标题和描述
                var currentimg = imglist.eq(index).find("img");
                var titlehtml = currentimg.attr("data-title");
                titlehtml = typeof (titlehtml) == "undefined" ? "默认图片" : titlehtml;
                var deschtml = currentimg.attr("data-desc");
                deschtml = typeof (titlehtml) == "undefined" ? "" : deschtml;
                var imgUrl = currentimg.attr("data-src");
                //增加Id和日期
                var id = currentimg.attr("data-id");
                var datetime = currentimg.attr("data-datetime");
                editor.find(".datetime").html(datetime);
                editor.find("input[name='hidePhotoId']").val(id);
                //加载标题和描述
                photolist.desContenthide();
                editor.find(".titletext").html(titlehtml);
                editor.find(".desctext").html(deschtml);
                $("#js-ctn-infoBar .js-album-name").attr("title", titlehtml);
                $("#js-ctn-infoBar .js-album-name").html(titlehtml);
                //加载图片
                $("#js-img-loading").show();
                photolist.sImage(imgUrl);
                $("#js-viewer-container").attr("currentindex", index);
                //操作缩略图区域
                photolist.initThumbPostion(index, true);
            },
            imgComplete: function (img) {
                $("#js-img-loading").hide();
                $("#js-image-ctn").show();
                var newcss = this.calculateImage(img);
                $(img).css(newcss);
                $("#js-image-ctn").html("").append(img);
                this.IMAGETOOL._init("#js-image-ctn img");
            },
            calculateImage: function (img) {
                var originalWidth = img.width;
                var originalHeight = img.height;
                var leftmargin = 60;
                var imgWrapWidth = $("#js-viewer-imgWraper").width() - leftmargin * 2;
                var imgWrapHeight = $("#js-viewer-imgWraper")[0].scrollHeight;
                var newWidth = 0;
                var newHeight = 0;
                if (originalWidth <= imgWrapWidth && originalHeight <= imgWrapHeight) {
                    newWidth = originalWidth;
                    newHeight = originalHeight;
                } else {
                    //高比宽大
                    if (originalHeight >= originalWidth) {
                        newWidth = (originalWidth) / (originalHeight / imgWrapHeight);
                        newHeight = "100%";
                    }
                    //宽比高大
                    if (originalHeight < originalWidth) {
                        newWidth = imgWrapWidth;
                        newHeight = (originalHeight) / (originalWidth / imgWrapWidth);
                    }
                }
                var left = ((imgWrapWidth - newWidth) / 2) + leftmargin;
                var top = newHeight == "100%" ? 0 : (imgWrapHeight - newHeight) / 2;
                newWidth = newWidth + "px";
                newHeight = newHeight == "100%" ? "100%" : newHeight + "px";
                imagesview_width = originalWidth;
                imagesview_height = originalHeight;
                imagesview_fix_width = newWidth;
                imagesview_fix_height = newHeight;
                imagesview_fix_left = left;
                imagesview_fix_top = top;
                return { left: left + "px", top: top + "px", width: newWidth, height: newHeight }
            },
            sImage: function (url) {
                //图片加载
                var img = new Image();
                var appname = navigator.appName.toLowerCase();
                if (appname.indexOf("netscape") == -1) {
                    //ie
                    img.onreadystatechange = function () {
                        if (img.readyState == "complete") {
                            photolist.imgComplete(img);
                        }
                    };
                } else {
                    //非ie
                    img.onload = function () {
                        if (img.complete == true) {
                            photolist.imgComplete(img);
                        }
                    }
                }
                img.src = url;
                return img;
            },
            desContenthide: function () {
                var editor = $("#js-desc-editor");
                editor.find(".js-title-editor").hide();
                editor.find(".js-desc-cont").hide();
                editor.find(".info-submit").hide();
                editor.find(".js-change-desctitle").show();
                editor.find(".titletext").show();
                editor.find(".desctext").show();
            },
            desContentshow: function () {
                var editor = $("#js-desc-editor");
                editor.find(".titletext").hide();
                editor.find(".desctext").hide();
                editor.find(".js-change-desctitle").hide();
                editor.find(".js-title-editor").show();
                editor.find(".js-desc-cont").show();
                editor.find(".info-submit").show();
            },
            resize: function () {
                //根据浏览器尺寸设置图片预览宽的尺寸
                photolist.calculatePageSize();
                photolist.calculatePreviewBox();
                //根据图片预览框的高设置垂直居中
                var browsheight = $(window).height();
                var mainheight = $("#js-viewer-main").outerHeight();
                if(photolist.autoSize){
                    var margintop = (browsheight - mainheight) / 2;
                    margintop=margintop<0?0:margintop;
                }else{
                    var margintop=photolist.boxSize[0];
                }
                $("#js-viewer-container").css('padding', margintop + "px" + " 0 0 0");
                //重新加载图片
                var imglist = $("#js-thumbList-ctn li");
                var selectedli = $("#js-thumbList-ctn li.on");
                if (selectedli.length == 0)
                    return;
                var url = selectedli.find("img").attr("data-src");
                var index = imglist.index(selectedli);
                photolist.sImage(url);
                //重新操作缩略图区域
                photolist.initThumbPostion(index, true);

            },
            calculatePageSize: function () {
                //根据浏览器窗口大小计算缩略图的页数
                var browswidth = $(window).width();
                var browsheight = $(window).height();
                var browsmarginSize = [160, 60];
                var pagesize = 8;
                var browsscale = browswidth / browsheight;
                var scale = photolist.autoSize?photolist.boxScale:browsscale;
                var thumbSpace=14+30;
                if(photolist.autoSize){
                    if (browsscale > scale) {
                        var imgheight = browsheight - browsmarginSize[0];
                        var imgwidth = imgheight * scale;
                        var browsimgwidth = browswidth - photolist.boxFigureW;
                        var thumbwidth = Math.min(imgwidth, browsimgwidth) + 2 * 10 - thumbSpace*2 - browsmarginSize[1];
                        pagesize = Math.ceil(thumbwidth / 55);
                    } else {
                        var imgwidth = browswidth - photolist.boxFigureW - browsmarginSize[1];
                        var thumbwidth = imgwidth - thumbSpace*2;
                        pagesize = Math.ceil(thumbwidth / 55);
                    }
                }else
                {
                    var imgwidth = browswidth - photolist.boxFigureW - photolist.boxSize[1]*2;
                    var thumbwidth = imgwidth - thumbSpace*2;
                    pagesize = Math.floor(thumbwidth / 55);
                }
                if (pagesize < 4)
                    pagesize = 4;
                $("#js-viewer-container").attr("pagesize", pagesize);
            },
            calculatePreviewBox: function () {
                var pagesize = $("#js-viewer-container").attr("pagesize");
                var browsheight = $(window).height();
                var browswidth = $(window).width();
                var thumbSize = [55, 50];//缩略图的尺寸
                var figureW =photolist.boxFigureW;
                var scale = photolist.boxScale;
                var thumbListstageW = thumbSize[0] * pagesize;
                var thumbctnH=photolist.showThumb?thumbSize[1]:5;
                var thumbSpace=14+30;
                var thumbctnW = thumbListstageW + 30 * 2 + 14 * 2 + figureW;
                var figureAreaW = thumbListstageW + 30 * 2 + 14 * 2 - 10 * 2;
                if(photolist.autoSize){
                    var thumbctnW = thumbListstageW + thumbSpace*2 + figureW;
                    var figureAreaW = thumbListstageW + thumbSpace*2 - 10 * 2;
                    var figureAreaH = Math.ceil(figureAreaW / scale);
                    var figureMainH = Math.ceil(figureAreaH + 10 + thumbctnH);
                    $("#js-thumb-ctn").width(thumbctnW);
                    
                }else
                {
                    var thumbctnW = browswidth-photolist.boxSize[1]*2;
                    var figureAreaW = thumbctnW-figureW-10*2;
                    var figureAreaH = Math.ceil(browsheight-photolist.boxSize[0]*2-16-10-thumbctnH);
                    var figureMainH = Math.ceil(browsheight-photolist.boxSize[0]*2-16);
                    var thumbWrap=thumbListstageW + thumbSpace*2 + figureW;
                    $("#js-thumb-ctn").width(thumbWrap);
                }
                $("#js-thumbList-stage").width(thumbListstageW);
                $("#js-thumb-ctn").height(thumbctnH);
                $("#js-viewer-main").width(thumbctnW);
                $("#js-viewer-imgWraper").width(figureAreaW);
                $("#js-viewer-main").height(figureMainH);
                $("#js-sidebar-ctn").height(figureMainH);
                $("#js-viewer-imgWraper").height(figureAreaH);
            },
            initThumbPostion: function (index, animation) {
                var pagesize = $("#js-viewer-container").attr("pagesize");
                var imglist = $("#js-thumbList-ctn li");
                var total = imglist.length;
                if (total <= pagesize) {
                    $.fn.calculatethumbBox({ index: 0, pagesize: pagesize, animation: animation });
                    return;
                }
                var oversize = total % pagesize;
                var totalindex = total - oversize;
                var nextindex = index;
                if (nextindex >= totalindex && nextindex <= total) {
                    nextindex = total - pagesize;
                } else {
                    nextindex = Math.floor(index / pagesize) * pagesize;
                }
                $.fn.calculatethumbBox({ index: nextindex, pagesize: pagesize, animation: animation });
            }

        }
        photolist.init();
        return photolist;
    };
    /*--- 图片操作封装（缩放、旋转、移动）End-------*/


})(jQuery);


/*------元素拖动控件------*/
(function ($) {
    var isMouseDown = false;
    var currentElement = null;
    var dropCallbacks = {};
    var dragCallbacks = {};
    var lastMouseX;
    var lastMouseY;
    var lastElemTop;
    var lastElemLeft;
    var dragStatus = {};
    $.getMousePosition = function (e) {
        var posx = 0;
        var posy = 0;
        if (!e) var e = window.event;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY
        } else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop
        }
        return {
            'x': posx,
            'y': posy
        }
    };
    $.updatePosition = function (e) {
        var pos = $.getMousePosition(e);
        var spanX = (pos.x - lastMouseX);
        var spanY = (pos.y - lastMouseY);
        $(currentElement).css("top", (lastElemTop + spanY));
        $(currentElement).css("left", (lastElemLeft + spanX))
    };
    $(document).mousemove(function (e) {
        if (isMouseDown && dragStatus[currentElement.id] == 'on') {
            $.updatePosition(e);
            if (dragCallbacks[currentElement.id] != undefined) {
                dragCallbacks[currentElement.id](e, currentElement)
            }
            return false
        }
    });
    $(document).mouseup(function (e) {
        if (isMouseDown && dragStatus[currentElement.id] == 'on') {
            isMouseDown = false;
            if (dropCallbacks[currentElement.id] != undefined) {
                dropCallbacks[currentElement.id](e, currentElement)
            }
            return false
        }
    });
    $.fn.ondrag = function (callback) {
        return this.each(function () {
            dragCallbacks[this.id] = callback
        })
    };
    $.fn.ondrop = function (callback) {
        return this.each(function () {
            dropCallbacks[this.id] = callback
        })
    };
    $.fn.dragOff = function () {
        return this.each(function () {
            dragStatus[this.id] = 'off'
        })
    };
    $.fn.dragOn = function () {
        return this.each(function () {
            dragStatus[this.id] = 'on'
        })
    };
    $.fn.easydrag = function (allowBubbling) {
        return this.each(function () {
            if (undefined == this.id || !this.id.length) this.id = "easydrag" + (new Date().getTime());
            dragStatus[this.id] = "on";
            $(this).css("cursor", "move");
            $(this).mousedown(function (e) {
                $(this).css("position", "absolute");
                isMouseDown = true;
                currentElement = this;
                var pos = $.getMousePosition(e);
                lastMouseX = pos.x;
                lastMouseY = pos.y;
                lastElemTop = this.offsetTop;
                lastElemLeft = this.offsetLeft;
                $.updatePosition(e);
                return allowBubbling ? true : false
            })
        })
    }
})(jQuery);
