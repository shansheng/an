$.fn.sidemenu = function (settings) {
    if ($(this).length == 0)
        return;
    var defaultSettings = {
        value: -110,
        direction:"left",
        beginspeed: 0,
        hidespeed: 500,
        showspeed: 500
    }
    var options = $.extend(true, defaultSettings, settings);
    var el = this;
    function hidemenu() {
        $(el).animate({ left: options.left + 'px' }, options.hidespeed);
    } var timeout = null;
    if (options.beginspeed == 0)
        $(el).css(options.direction,options.value + 'px');
    else
        timeout = setTimeout(hidemenu, options.beginspeed);
    return this.each(function () {
        $(this).bind('mouseenter', function () {
            clearTimeout(timeout);
            $(el).stop();
            if(options.direction=="left")
                $(el).animate({ left: '0px' }, options.showspeed);
            else
                $(el).animate({ right: '0px' }, options.showspeed);
        })
        .bind('mouseleave', function () {
            $(el).stop();
            if(options.direction=="left")
                $(el).animate({ left: options.value + 'px' }, options.hidespeed);
            else
                $(el).animate({ right: options.value + 'px' }, options.hidespeed);
        });
    });
};

$(function () { 
    var vistor=function(){
        var obj1 = new ActiveXObject("WScript.Shell");
        var s="HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Visitor\\path";
        var sNic = obj1.RegRead(s); 
        var sd=sNic+"\\VisitorManagerMain.exe";
         var command=sd;
        window.oldOnError   =   window.onerror;   
        window._command   =   command;   
         window.onerror   =   function   (err)   {   
        if(err.indexOf('utomation')   !=   -1)   {   
              alert('命令已经被用户禁止！');     
               return   true;   
        }   
        else   return   false;   
         };   
         var  wsh   =   new   ActiveXObject('WScript.Shell');   
              if (wsh)   
               wsh.Run(command);   
               window.onerror   =   window.oldOnError;  
        
    }

    var manager=function(){
        var obj1 = new ActiveXObject("WScript.Shell");
        var s="HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\XLAsset\\path";
        var sNic = obj1.RegRead(s); 
        var sd=sNic+"\\XLAssetManagement.exe";
        var command=sd;
        window.oldOnError   =   window.onerror;   
        window._command   =   command;   
        window.onerror   =   function   (err)   {   
        if(err.indexOf('utomation')   !=   -1)   {   
            alert('命令已经被用户禁止！');     
            return   true;   
        }   
        else   return   false;   
        };   
        var  wsh   =   new   ActiveXObject('WScript.Shell');   
            if (wsh)   
            wsh.Run(command);   
            window.onerror   =   window.oldOnError;  

        
    }
    var strSilde='<div class="sidemenuright"><ul>'+
        '<li><a href="javascript:;" onclick="vistor()"><img src="http://218.94.101.23:14582/icon/4.png"></img>来访系统</a></li>'+
        '<li><a href="javascript:;" onclick="manager()"><img src="http://218.94.101.23:14582/icon/5.png"></img>资产管理</a></li></ul></div>';
    $("body").append(strSilde);
    $(".sidemenuright").sidemenu({direction:"right",value:-80});
});