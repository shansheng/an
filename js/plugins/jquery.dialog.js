/*----------------------------------------
* Copyright (c) 2014 菠萝工作室
* 网站：http://www.0non0.com
* Date: 2014-11-28
* Creater:Cqy
----------------------------------------*/

/*------通用的方法库 by:cqy 2015-2-28------*/

(function () {
    /*------ananas.调用方法和属性-----------*/
    window.ananas = ananas = {};
    ananas.VAR = {};
    ananas.CONST = {
        domains: { host: "" }
    };
    /*---ajax封装-------
    例：ananas.ajaxHandler("file/GetImageLists", { type: "TxImage" }).done(function (data) {}).fail(function (res) { });
    ---------------*/
    ananas.ajaxHandler = function (url, param) {
        var _host = ananas.host();
        return $.post(_host + url + "?time=" + (new Date()).getTime(), param).then(function (data) {
            if (data.IsSuccess) {
                return data.BaseData;
            } else {
                return $.Deferred().reject(data);
            }
        }, function (err) {
            // 失败回调
            console.log(err.status); // 打印状态码
        });
    };

    /*------an()调用方法和属性-----------*/
    /*------使用an()调用方法，处理传递参数比较少的控件*/
    window.an = function (q) {
        return new _ananas(q);
    };

    //_ananas对象
    var _ananas = function (q) {
        this.el = $(q);
    };

    /*---tWindow封装start-------*/
    _ananas.prototype.tWindow = function (onClose, parm) {
        var el = this.el;
        if (typeof (parm) != "undefined") {
            el.tWindow(parm);
        } else {
            el.tWindow({ effects: { list: [{ name: 'toggle' }, { name: 'property', properties: ['opacity']}], openDuration: 200, closeDuration: 200 }, modal: true, resizable: false, draggable: true, onClose: onClose });
        }
        // tWindow的resize事件
        $(window).resize(function () {
            if (el.length != 0) {
                el.data('tWindow').center();
            }
        });
        return el.data('tWindow');
    };




} ());




