/* 标准方法：加载、保存、调试项目，弹出任务面板、日历面板。
-----------------------------------------------------------------------------*/
(function () {
    window.PS = function () {
        return new PS();
    };
    var PS = function () {
        this.toolbar = $("#mini-toolbar");
        this.init();
        return this;
    };
    
    //初始化甘特图
    mini.parse();
    var project = new PlusProject();

    PS.prototype={
        setWH:function(){
            var h=$("body").height()-(this.toolbar.height() + 17); //17为分割线高度;
            project.setStyle("width:100%;height:"+h+"px");
        }
    }

    PS.prototype.init=function(){
        this.setWH();
        project.render(document.getElementById("viewCt"));
        this.initEvent();
    }

    //项目
    PS.prototype.events={
        resize:function(e){
           el.setWH();
        }
    }
    PS.prototype.initEvent=function(){
        $(window).on("resize",this.events.resize);
    }

} ());