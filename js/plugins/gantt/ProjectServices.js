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
            //创建列
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
             //创建右键菜单
            var menu = new ProjectMenu();
            project.setContextMenu(menu);
        },
        setCustomColumns:function(){
              //创建列
              PlusProject.IDColumn = function ($) {
                return mini.copyTo({
                    name: "ID",
                    header: "序号",
                    field: "UID",
                    width: 50,
                    cellCls: "mini-indexcolumn",
                    align: "center",
                    allowDrag: true,
                    cellStyle: "cursor:move;"
                });
            };

            var NameColumn = {
                header: "<center>名称</center>", field: "Name", width: 100, editor: { type: "textbox" }, renderer: function (J) {
                    
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

        },
        setSetting:function(){
             project.on('taskdblclick', function(e){});
             project.on('taskclick', function(e){});
             project.on("drawcell", function (e) {
                var task = e.record, column = e.column, field = e.field;
             });
             project.on("cellbeginedit", function (e) {});
             project.on("CellCommitEdit", function (e) {});
             project.on("itemdragstart", function (e) {e.cancel = true;});
             //自定义条形图label内容
             project.on("drawitem", function (e) {});
        },
        loadJSONProject:function(){
            //project.loading();
            project.mask("数据加载中，请稍后...");
            $.ajax({
                url:"/js/plugins/gantt/project.txt",
                cache: false,
                success: function (text) {
                    var dataProject = mini.decode(text);
                    project.loadData(dataProject);
                    project.unmask();
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert("加载失败, 错误码：" + textStatus);
                    project.unmask();
                }
            });
        }
    }

    PS.prototype.init=function(){
        this.setStyle();
        this.setDefaultColumns();
        project.render(document.getElementById("viewCt"));
        this.loadJSONProject();
        this.initToolbar();
        this.initEvent();
    }

    //接口
    PS.prototype.Extend={
        //判断节点的层级
        isLimitTask:function(task){
            var taskparent = project.getTaskByID(1);
            var childtask = project.getChildTasks(taskparent);
            if (task == taskparent)
                return 1;
            else if ($.inArray(task, childtask) >= 0)
                return 2;
            else
                return -1;
        }
    }
    PS.prototype.initToolbar=function(){
        var el=this;
          //升级
          this.toolbar.find(".upgrade").on("click",function(){
            var task = project.getSelected();
            var level = el.Extend.isLimitTask(project.getParentTask(task));
            if (level == 1 || level == 2) {
                alert("无法升级");
                return;
            }
            if (task) {
                project.upgradeTask(task);
            } else {
                alert("请选选中任务");
            }
        })
        //降级
        this.toolbar.find(".downgrade").on("click",function(){
            var task = project.getSelected();
            var level = el.Extend.isLimitTask(task);
            if (level == 1 || level == 2) {
                alert("无法降级");
                return;
            }
            if (task) {
                project.downgradeTask(task);
            } else {
                alert("请选选中任务");
            }
        })
        //锁定列
        this.toolbar.find(".lock").on("click",function(){
            var checked = $(this).hasClass("mini-button-checked");
            if (!checked) {
                project.frozenColumn(0, 2);
            } else {
                project.unfrozenColumn();
            }
        })
        //放大
        this.toolbar.find(".zoomin").on("click",function(){
            project.zoomIn();
        })
        //缩小
        this.toolbar.find(".zoomout").on("click",function(){
            project.zoomOut();
        })
         //创建任务面板 
         this.toolbar.find(".taskwin").on("click",function(){
            var task = project.getSelected();
            if (task) {
                if (!taskWindow) {
                    taskWindow = new TaskWindow();
                }
                taskWindow.setTitle("编辑任务");
                taskWindow.show();
                taskWindow.setData(task, project,
                    function (action) {
        
                        if (action == 'ok') {
                            try {
                                var taskData = taskWindow.getData();
                                project.updateTask(task, taskData);
                            } catch (ex) {
                                alert("error:" + ex.message);
                                return false;
                            }
                        }
                    }
                );
            } else {
                alert("请先选择任务");
            }
         })

         //日历面板
         this.toolbar.find(".datewin").on("click",function(){
            if (!calendarWindow) {
                calendarWindow = new CalendarWindow();
            }
            calendarWindow.show();
            calendarWindow.setData(project.getCalendars(), project,
                function (action) {
                    if (action == "ok") {
        
                        var calendars = calendarWindow.getData();
                        var calendarUID = calendarWindow.CalendarsCombo.getValue();
        
                        project.beginUpdate();
                        project.setCalendars(calendars);
                        project.setCalendarUID(calendarUID);
                        project.endUpdate();
                    }
                }
            );
         })
    }
    //项目
    var taskWindow = null;
    var calendarWindow = null;
    PS.prototype.initEvent=function(){
        var el=this;
        $(window).on("resize",function(e){
            el.setStyle();
         });
    }


} ());