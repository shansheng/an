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

    PS.prototype.initEvent=function(){
        var el=this;
        $(window).on("resize",function(e){
            el.setStyle();
         });
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
    var taskWindow = null;
    var calendarWindow = null;
    PS.prototype.fn={
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
        },
        //显示任务窗口
        ShowTaskWindow:function(project){
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
        },
        //显示日历窗口
        ShowCalendarWindow:function(project){
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
        },
        createBaseline:function(){
            var tasklist = project.getTaskList();
            for (var i = 0, l = tasklist.length; i < l; i++) {
                var task = tasklist[i];
                if (!task.Start || !task.Finish) continue;
        
                var baseline0 = {
                    Start: new Date(task.Start.getTime()),
                    Finish: new Date(task.Finish.getTime())
                };
        
                task.Baseline = [];
                task.Baseline.push(baseline0);
            }
            project.refresh();
        },
        clearBaseline:function(){
            var tasklist = project.getTaskList();
            for (var i = 0, l = tasklist.length; i < l; i++) {
                var task = tasklist[i];
                delete task.Baseline;
            }
            project.refresh();
        },
        sortByStart:function(){
            project.sort(function (task1, task2) {
                if (!task1.Start) return -1;
                if (!task2.Start) return 1;
                var t1 = task1.Start.getTime(), t2 = task2.Start.getTime();
                if (t1 < t2) return 1;
                else if (t1 == t2) return 0;
                else return -1;
            });
        }
    }
    PS.prototype.initToolbar=function(){
        var el=this;
        //加载
        this.toolbar.find(".load").on("click",function(){
           
        })
        //保存
        this.toolbar.find(".save").on("click",function(){
           
        })
        //新增
        this.toolbar.find(".add").on("click",function(){
            var newTask = project.newTask();
            newTask.Name = '<新增任务>';    //初始化任务属性
    
            var selectedTask = project.getSelected();
            if (selectedTask) {
                project.addTask(newTask, "before", selectedTask);   //插入到到选中任务之前
                //project.addTask(newTask, "add", selectedTask);       //加入到选中任务之内            
            } else {
                project.addTask(newTask);
            }
        })
        //修改
        this.toolbar.find(".edit").on("click",function(){
            el.fn.ShowTaskWindow(project);
        })
        //删除
        this.toolbar.find(".remove").on("click",function(){
            var task = project.getSelected();
            if (task) {
                if (confirm("确定删除任务 \"" + task.Name + "\" ？")) {
                    project.removeTask(task);
                }
            } else {
                alert("请选中任务");
            }
        })
        //升级
        this.toolbar.find(".upgrade").on("click",function(){
            var task = project.getSelected();
            if (task) {
                project.upgradeTask(task);
            } else {
                alert("请选选中任务");
            }
        })
        //降级
        this.toolbar.find(".downgrade").on("click",function(){
            var task = project.getSelected();
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
           el.fn.ShowTaskWindow(project);
         })

         //日历面板
         this.toolbar.find(".datewin").on("click",function(){
            el.fn.ShowCalendarWindow(project);
         })
         //顶层时间刻度
         this.toolbar.find(".toptime").on("change",function(){
            project.setTopTimeScale(this.value);
         })

         //底层时间刻度
         this.toolbar.find(".bottomtime").on("change",function(){
            project.setBottomTimeScale(this.value);
         })

         //筛选工期
         this.toolbar.find(".filter").on("click",function(){
            var checked = $(this).hasClass("mini-button-checked");
            if (!checked) {
                project.filter(function (task) {
                    if (task.Duration == 0) return true;
                    else return false;
                });
            } else {
                project.clearFilter();
            }
        })
         //基准线比较
         this.toolbar.find(".trackcheck").on("click",function(){
            var checked = this.checked;
            project.setViewModel(checked ? "track" : "gantt");
            if (checked) {
                el.fn.createBaseline();
            } else {
                el.fn.clearBaseline();
            }
         })

         //显示隐藏关键路劲
         this.toolbar.find(".criticalcheck").on("click",function(){
            var checked = this.checked;
            if (checked) {
                var taskList = project.getTaskList();
                for (var i = 0, l = taskList.length; i < l; i++) {
                    var task = taskList[i];
                    task.Critical2 = 1;
                }
                project.setShowCriticalPath(true);
                project.refresh();
            } else {
                project.setShowCriticalPath(false);
                project.refresh();
            }
         })

         //任务排序
         this.toolbar.find(".sortstartcheck").on("click",function(){
            var checked = this.checked;
            if (checked) {
                el.fn.sortByStart()
            } else {
                project.clearSort();
            }
         })

         //加载列名
         var columns=project.getColumns();
         for(j = 0,len=columns.length; j < len; j++) {
            var object=columns[j];
            var header=object.header,name=object.name
            if(header){
                var option='<option value="'+name+'">'+header+'</option>';
                this.toolbar.find(".columnselect").append(option);
            }
         }
         //隐藏列
         this.toolbar.find(".togglecolumn").on("click",function(){
            var value=el.toolbar.find(".columnselect").val();
            if(value=="all")return;
            var column = project.getColumn(value);
            var visible=column.visible;
            
            if(visible){
                project.updateColumn(column, {
                    visible: false
                });
            }else
            {
                project.updateColumn(column, {
                    visible: true
                });
            }
          
        })

        //展开全部
        this.toolbar.find(".expandall").on("click",function(){
            var checked = $(this).hasClass("mini-button-checked");
            if (!checked) {
                project.collapseAll();
            } else {
                project.expandAll();
            }
        })
    }

} ());