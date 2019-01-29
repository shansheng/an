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
        setStyle:function(){
            var h=$("body").height()-(this.toolbar.height() + 17); //17为分割线高度;
            project.setStyle("width:100%;height:"+h+"px");
        },
        setDefaultColumns:function(){
            //默认
            project.setColumns([
                new PlusProject.IDColumn(),
                new PlusProject.StatusColumn(),
                new PlusProject.NameColumn(),
                new PlusProject.PredecessorLinkColumn(),
                new PlusProject.PercentCompleteColumn(),
                new PlusProject.DurationColumn(),
                new PlusProject.StartColumn(),
                new PlusProject.FinishColumn(),
                new PlusProject.WorkColumn(),
                new PlusProject.DepartmentColumn(),
                new PlusProject.PrincipalColumn(),
                new PlusProject.AssignmentsColumn()
            ]);
        },
        setCustomSetting:function(){
              //创建列
             PlusProject.IDColumn = function ($) {
                return mini.copyTo({
                    name: "ID",
                    header: "序号",
                    field: "ID",
                    width: 50,
                    cellCls: "mini-indexcolumn",
                    align: "center",
                    allowDrag: true,
                    cellStyle: "cursor:move;"
                });
            };

            var NameColumn = {
                header: "<center>名称</center>", field: "Name", width: 100, editor: { type: "textbox" }, renderer: function (J) {
                    PorjectPlanDefault.CurrentForcusTaskID = J.record.ID;
                }
            };

            var NumberColumn  = {
                header: "数量", field: "Number", width: 45, editor: {
                    type: "spinner", minValue: 0,
                    maxValue: 100000000000
                }, renderer: function (J) {
                    if (J.record.ID == 1 || J.value < 0) {
                        return "";
                    } else {
                        return J.value;
                    }
                }
            };

            var columns = [
                    new PlusProject.IDColumn(),
                    NameColumn,
                    NumberColumn,
                    new PlusProject.StartColumn(),
                    new PlusProject.FinishColumn(),
                    new PlusProject.DurationColumn()
                ];
            project.setColumns(columns);

             //创建右键菜单
             var menu = new ProjectMenu();
             project.setContextMenu(menu);
             menu.edit.on("click", function (e) {});
             project.on('taskdblclick', function(e){});
             project.on('taskclick', function(e){});
             project.on("drawcell", function (e) {
                var task = e.record, column = e.column, field = e.field;
             });

             project.on("cellbeginedit", function (e) {
                var task = e.record, column = e.column, field = e.field;
             });

             project.on("CellCommitEdit", function (e) {
                var task = e.record, column = e.column, field = e.field, value = e.value;
             });

             project.on("itemdragstart", function (e) {
                e.cancel = true;
             });
             //自定义条形图label内容
             project.on("drawitem", function (e) {});
        
        }
    }

    PS.prototype.init=function(){
        this.setStyle();
        this.setCustomSetting();
        project.render(document.getElementById("viewCt"));
        this.initEvent();
    }

    //项目
    PS.prototype.initEvent=function(){
        var el=this;
        $(window).on("resize",function(e){
            el.setStyle();
         });
    }

} ());