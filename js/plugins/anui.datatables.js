/*----------------------------------------
* Copyright (c) 2017 菠萝工作室
* 网站：http://www.0non0.com
* Date: 2017-5-18
* Creater:Cqy
----------------------------------------*/

/*------通用的控件库 by:cqy 2017-5-18------*/
/*------处理参数比较多的控件------*/
(function ($) {
    $.fn.objectDemo = function (options) {
        var el = $(this);
        if (el.length == 0) return;
        var defaults = {
            defaultV: null
        }
        var opt = $.extend(true, defaults,options);
    };

    $.staticDemo=function(options){
        var defaults = {
            defaultV: null
        }
        var opt = $.extend({},defaults, options);
    }

})(jQuery);