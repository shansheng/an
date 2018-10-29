/*----------------------------------------
* Copyright (c) 2017 菠萝工作室
* 网站：http://www.0non0.com
* Date: 2017-5-18
* Creater:Cqy
----------------------------------------*/

/*------通用的控件库 by:cqy 2017-5-18------*/
/*------处理参数比较多的控件------*/
(function ($) {
$.fn.backTop = function (settings) {
        var el = $(this);
        if (el.length == 0) return;
        var defaultSettings = {
            defaultV: null
        }
        var options = $.extend(true, defaultSettings, settings);
    };

})(jQuery);