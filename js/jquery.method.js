/*----------------------------------------
* Copyright (c) 2017 菠萝工作室
* 网站：https://609a.com:3000
* Date: 2017-5-18
* Creater:Cqy
----------------------------------------*/

/*------通用的控件库 by:cqy 2017-5-18------*/
/*------处理参数比较多的控件------*/
(function ($) {
    // $.fn.objectDemo = function (options) {
    //     var el = $(this);
    //     if (el.length == 0) return;
    //     var defaults = {
    //         defaultV: null
    //     }
    //     var opt = $.extend(true, defaults,options);
    // };

    // $.staticDemo=function(options){
    //     var defaults = {
    //         defaultV: null
    //     }
    //     var opt = $.extend({},defaults, options);
    // }
    
    
    /*--- Tab控件封装（需要引入esyui的相关tab插件） Start -------*/
    $.addTab=function(title, url){
        if ($('#tabs').tabs('exists', title)){
            $('#tabs').tabs('select', title);//选中并刷新
            var currTab = $('#tabs').tabs('getSelected');
            var url = currTab.find("iframe").attr("src");
            var title=currTab.panel('options').title;
            if(url != undefined) {
                $('#tabs').tabs('updateIframeTab',{'which':title,iframe:{src:url}});
            }
        } else {
            $('#tabs').tabs('addIframeTab',{
                tab:{title:title,closable:true},
                iframe:{src:url}
            });
        }
    }

    $.loadIframe = function (options) {
        var defaults = {
            loadImage:'/js/plugins/easyui/themes/default/images/loading1.gif',
            message:"正在加载,请稍候 ...",
            delay:"0",
            //src:"http://www.609a.com"
            containter:$(".content")
        }
        var opt = $.extend(true, defaults,options);
        $tabBody=opt.containter;
         //销毁已有的遮罩层
         var loadDiv=$(".mask-message");
         loadDiv.remove();
        //销毁已有的iframe
        var $frame=$('iframe', $tabBody);
        if($frame.length>0){
            try{//跨域会拒绝访问，这里处理掉该异常
                $frame[0].contentWindow.document.write('');
                $frame[0].contentWindow.close();
            }catch(e){
                //Do nothing
            }
            $frame.remove();
            if(/msie/.test(navigator.userAgent.toLowerCase())){
                CollectGarbage();
            }
        }
        $tabBody.html('');
        $tabBody.css({'overflow':'hidden','position':'relative'});
        var $maskMessage = $('<div class="mask-message" style="z-index:3;width:auto;height:16px;line-height:16px;position:absolute;top:50%;left:50%;margin-top:-20px;margin-left:-92px;border:2px solid #d4d4d4;padding: 12px 5px 10px 45px;'+
        'background: #ffffff url('+opt.loadImage+') no-repeat scroll 5px center">' + (opt.message) + '</div>').prependTo($tabBody);
        $containter=$('<div style="width: 100%; height: 100%; overflow: hidden;"><iframe src="'+opt.src+'" frameborder="no" scrolling="auto" allowtransparency="true" width="100%" height="100%"></iframe></div>').appendTo($tabBody);
        var iframe=$('iframe', $tabBody)[0];
        if (iframe.attachEvent){
            iframe.attachEvent("onload", function(){
                $maskMessage.fadeOut(opt.delay,function(){
                    $(this).remove();
                });
            });
        } else {
            iframe.onload = function(){
                $maskMessage.fadeOut(opt.delay,function(){
                    $(this).remove();
                });
            }; 
        }
    };

    /**
    * @author {CaoGuangHui}
    * tabs的扩展方法
    */
    $.extend($.fn.tabs.methods, {
        /**
         * 加载iframe内容
         * @param  {jq Object} jq     [description]
         * @param  {Object} params    params.which:tab的标题或者index;params.iframe:iframe的相关参数
         * @return {jq Object}        [description]
         */
        loadTabIframe:function(jq,params){
            this.bindTabEvent();
            this.bindMenuEvent();
            return jq.each(function(){
                var $tab = $(this).tabs('getTab',params.which);
                if($tab==null) return;

                var $tabBody = $tab.panel('body');
                $.loadIframe({
                    src:params.iframe.src,
                    containter:$tabBody
                });
            });
        },
        bindTabEvent:function(){
             /*双击关闭TAB选项卡*/
            $(".tabs-inner").dblclick(function(){
                var subtitle = $(this).children(".tabs-closable").text();
                $('#tabs').tabs('close',subtitle);
            });

              /*为选项卡绑定右键*/
            $(".tabs-inner").bind('contextmenu',function(e){
                $('#mm').menu('show', {
                    left: e.pageX,
                    top: e.pageY
                });

                var subtitle =$(this).children(".tabs-closable").text();

                $('#mm').data("currtab",subtitle);
                $('#tabs').tabs('select',subtitle);
                return false;
            });
        },
        bindMenuEvent:function(){
            //刷新
            $('#mm-tabupdate').click(function(){
                var currTab = $('#tabs').tabs('getSelected');
                var url = currTab.find("iframe").attr("src");
                var title=currTab.panel('options').title;
                if(url != undefined) {
                    $('#tabs').tabs('updateIframeTab',{'which':title,iframe:{src:url}});
                }
            })
            //关闭当前
            $('#mm-tabclose').click(function(){
                var currtab_title = $('#mm').data("currtab");
                $('#tabs').tabs('close',currtab_title);
            });

            //全部关闭
            $('#mm-tabcloseall').click(function(){
                $('.tabs-inner span').each(function(i,n){
                    var t = $(n).text();
                    var tab=$('#tabs').tabs('getTab',t);
                    var index = $('#tabs').tabs('getTabIndex',tab);
                    if(index != 0) {
                        $('#tabs').tabs('close',t);
                    }
                });
            });

            //关闭除当前之外的TAB
            $('#mm-tabcloseother').click(function(){
                var prevall = $('.tabs-selected').prevAll();
                var nextall = $('.tabs-selected').nextAll();
                if(prevall.length>0){
                    prevall.each(function(i,n){
                        var t=$('a:eq(0) span',$(n)).text();
                        var tab=$('#tabs').tabs('getTab',t);
                        var index = $('#tabs').tabs('getTabIndex',tab);
                        if(index != 0) {
                            $('#tabs').tabs('close',t);
                        }
                    });
                }
                if(nextall.length>0) {
                    nextall.each(function(i,n){
                        var t=$('a:eq(0) span',$(n)).text();
                        var tab=$('#tabs').tabs('getTab',t);
                        var index = $('#tabs').tabs('getTabIndex',tab);
                        if(index != 0) {
                            $('#tabs').tabs('close',t);
                        }
                    });
                }
                return false;
            });
            //关闭当前右侧的TAB
            $('#mm-tabcloseright').click(function(){
                var nextall = $('.tabs-selected').nextAll();
                if(nextall.length==0){
                    //msgShow('系统提示','后边没有啦~~','error');
                    alert('后边没有啦~~');
                    return false;
                }
                nextall.each(function(i,n){
                    var t=$('a:eq(0) span',$(n)).text();
                    $('#tabs').tabs('close',t);
                });
                return false;
            });

            //关闭当前左侧的TAB
            $('#mm-tabcloseleft').click(function(){
                var prevall = $('.tabs-selected').prevAll();
                if(prevall.length==0){
                    alert('到头了，前边没有啦~~');
                    return false;
                }
                prevall.each(function(i,n){
                    var t=$('a:eq(0) span',$(n)).text();
                    $('#tabs').tabs('close',t);
                });
                return false;
            });

            //退出
            $("#mm-exit").click(function(){
                $('#mm').menu('hide');
            })
        },
        /**
         * 增加iframe模式的标签页
         * @param {[type]} jq     [description]
         * @param {[type]} params [description]
         */
        addIframeTab:function(jq,params){
            return jq.each(function(){
                if(params.tab.href){
                    delete params.tab.href;
                }
                $(this).tabs('add',params.tab);
                $(this).tabs('loadTabIframe',{'which':params.tab.title,'iframe':params.iframe});
            });
        },
        /**
         * 更新tab的iframe内容
         * @param  {jq Object} jq     [description]
         * @param  {Object} params [description]
         * @return {jq Object}        [description]
         */
        updateIframeTab:function(jq,params){
            return jq.each(function(){
                params.iframe = params.iframe || {};
                if(!params.iframe.src){
                    var $tab = $(this).tabs('getTab',params.which);
                    if($tab==null) return;
                    var $tabBody = $tab.panel('body');
                    var $iframe = $tabBody.find('iframe');
                    if($iframe.length===0) return;
                    $.extend(params.iframe,{'src':$iframe.attr('src')});
                }
                $(this).tabs('loadTabIframe',params);
            });
        }
    });

    /*--- Tab控件封装 End-------*/

})(jQuery);