/* 创建项目甘特图对象，设置列配置，创建右键菜单和任务面板
-----------------------------------------------------------------------------*/
mini.parse();

if (project) {
    project = null;
}

var project = new PlusProject();

//控制单元格是否可编辑
var originalTaskNameValue = "";
var originalTaskValue = "";
var originalStart = "";
function initialGantt() {
    //自定义列
    //checkbox列
    //var CheckBoxColumn = {
    //    header: "", field: "", width: 30, editor: { type: "checkbox" }
    //};
    //锁定列

    //责任部门
    var NameColumn = {
        header: "工作内容", field: "Name", width: 100, editor: { type: "textbox" }, renderer: function (J) {
            PorjectPlanDefault.CurrentForcusTaskID = J.record.ID;
        }
    };

    var LockColumn = {
        header: "<center>锁定</center>", field: "", width: 50, editor: { type: "spinner" }
    };

    //任务比重列
    var TaskPercentColumn = {
        header: "任务比重", field: "", width: 100, editor: { type: "textbox" }
    };

    //责任部门
    var ResponsibleDeptColumn = {
        header: "责任部门", field: "Department", width: 200
    };
    //序号列
    PlusProject.IDColumn = function ($) {
        return mini.copyTo({
            name: "ID",
            header: "",
            field: "ID",
            width: 30,
            cellCls: "mini-indexcolumn",
            align: "center",
            allowDrag: true,
            cellStyle: "cursor:move;"
        });
    };

    //计划量
    var PlanWorkColumn = {
        header: "计划量", field: "PlanWork", width: 45, editor: {
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

    //计划量
    var PlanWorkNotEditColumn = {
        header: "计划量", field: "PlanWork", width: 45
    };
    //变更量
    var ChangeValueColumn = {
        header: "变更量", field: "ChangeValue", width: 45, editor: {
            type: "spinner", minValue: -100000000000,
            maxValue: 100000000000
        }, renderer: function (J) {
            if (J.record.ID == 1) {
                return "";
            } else {
                return J.value;
            }
        }
    };

    //变更后
    var ChangedValueColumn = {
        header: "变更后", field: "ChangedValue", width: 45
    };
    //完成量
    var FinishWorkColumn = {
        header: "实际完成量", field: "FinishWork", width: 70, editor: { type: "spinner" }, renderer: function (J) {
            if (J.record.ID == 1 || J.value < 0) {
                return "";
            } else {
                return J.value;
            }
        }
    };

    //计划量
    var UnitColumn = {
        header: "单位", field: "Unit", width: 40, editor: { type: "textbox" }
    };

    var PercentCompleteColumn = {
        header: "进度",
        field: "PercentComplete",
        width: 50,
        renderer: function (J) {
            if (J.value <= 0) {
                return "0%";
            } else {
                return J.value + "%";
            }
        }

    };

    //开始日期列
    //PlusProject.StartColumn = function ($) {
    //    return mini.copyTo({
    //        name: "Start",
    //        header: "开始日期",
    //        field: "Start",
    //        renderer: function (_) {
    //            var $ = _.value;
    //            if ($)
    //                return $.getFullYear() + "-" + ($.getMonth() + 1) + "-" + $.getDate();
    //            else return ""
    //        },
    //        editor: {
    //            type: "datepicker",
    //            minValue: "2013-1-1",
    //            maxValue: "2013-12-12"
    //        }
    //    });
    //};
    var columns = null;
/*    if (PorjectPlanDefault.ProjectTotalFlag) {

        UnitColumn = {
            name: "Unit",
            header: "单位",
            field: "Unit",
            width: 50,
            editor: {
                type: "combobox",
                valueField: "Name",
                displayField: "Name",
                multiSelect: false,
                showCheckIcon: true
            },
            renderer: function (J) {
                return J.value;
            },
            oncellbeginedit: function (B) {
                if (!PorjectPlanDefault.HeadObj.UnitSource) {
                    PorjectPlanDefault.HeadObj.Init();

                }
                var $$ = B.source,
                    A = $$.owner,
                    _ = PorjectPlanDefault.HeadObj.UnitSource;
                B.editor["load"](_);

            }
        };

        columns = [
        //CheckBoxColumn,
          new PlusProject.IDColumn(),
        //    LockColumn,
        //new PlusProject.StatusColumn(), //任务标记
        new PlusProject.NameColumn(),

               UnitColumn,
            PlanWorkColumn,
            ChangeValueColumn,
            ChangedValueColumn,
            FinishWorkColumn,
            PercentCompleteColumn,

            new PlusProject.StartColumn(),
            new PlusProject.FinishColumn(),
            new PlusProject.DurationColumn()
        //ResponsibleDeptColumn,
        //new PlusProject.PrincipalColumn(),
        //new PlusProject.PredecessorLinkColumn(),
        //TaskPercentColumn
        ];

    } else {

        var NameColumn = {
            name: "Name",
            header: "工作内容",
            field: "Name",
            width: 150,
            editor: {
                type: "combobox",
                valueField: "UID",
                displayField: "NameText",
                multiSelect: false,
                showCheckIcon: true
            },
            renderer: function (J) {

                PorjectPlanDefault.CurrentForcusTaskID = J.record.ID;

                var result = "";
                if (J.record.ID == 1 || J.value == ironman3.ProjectPlan.DefaultTaskName) {
                    result = J.value;
                } else {
                    var thisTask = PorjectPlanDefault.TaskObj.GetTaskByUID(J.value);
                    if (thisTask) {
                        J.record.SelectTaskNameUID = J.value;
                        result = thisTask.Name;
                        project.updateTask(J.record, "Unit", thisTask.Unit);
                    } else {
                        J.record.Name = J.value;
                        return J.value;
                    }
                }
                J.record.Name = result;
                return result;

            },
            oncellbeginedit: function (B) {
                if (!PorjectPlanDefault.TaskObj.TaskNameJson) {
                    InitiProjectPlanTaskDefault();

                }
                var $$ = B.source,
                    A = $$.owner,
                    _ = PorjectPlanDefault.TaskObj.TaskNameJson;
                B.editor["load"](_);

            }
        };
        columns = [
        //CheckBoxColumn,
            new PlusProject.IDColumn(),
        // LockColumn,
        // new PlusProject.StatusColumn(), //任务标记
            NameColumn,
            UnitColumn,
            PlanWorkColumn,
            ChangeValueColumn,
            ChangedValueColumn,
            FinishWorkColumn,
            PercentCompleteColumn,

            new PlusProject.StartColumn(),
            new PlusProject.FinishColumn(),
            new PlusProject.DurationColumn()
        //ResponsibleDeptColumn,
        //new PlusProject.PrincipalColumn(),
        //new PlusProject.PredecessorLinkColumn(),
        // TaskPercentColumn
        ];
    }*/

   /* if (!PorjectPlanDefault.ChangeFlag) {
        columns.splice(4, 2);
    } else {
        columns.splice(3, 1, PlanWorkNotEditColumn);
        columns.splice(7, 1);
    }*/
    project.setColumns(columns);
    //控件设置
    //project.setGanttViewExpanded(false);//是否显示甘特图

    //创建右键菜单
    //var menu = new ProjectMenu();

    //project.setContextMenu(menu);
    //menu.edit.on("click", function (e) {

    //    ShowTaskWindow(project);
    //});



    function onTaskDblClick(e) {
        //	        var project = e.source;
        //            var task = e.task;
        // ShowTaskWindow(project);
        //e是事件对象, 具体请看每个事件的"参数类型"
    }

    ///总计划 无需Task点击事件

    project.on('taskdblclick', onTaskDblClick);
    project.on('taskclick', onTaskClick);


    project.on("drawcell", function (e) {
        var task = e.record, column = e.column, field = e.field;
        //project.addTaskCls(project.getTaskByID(1), "displanNone");

        //    //单元格样式
        //    if (column.name == "Name") {
        //        e.cellCls = "mycellcls";
        //    }

        //    //行样式
        //    if (task.Summary == 1) {
        //        e.rowCls = "myrowcls";
        //    }

        //    ////自定义单元格Html。如果是工期列, 并且工期大与5天, 显示红色
        //    if (field == "Name" && task.Duration > 5) {
        //        e.cellHtml = '<b style="color:red;">' + task.Name + '</b>';
        //    }
        //    if (field == "Name" && task.Duration <= 2) {
        //        e.cellHtml = '<span style="color:blue;">' + task.Name + '</span>';
        //    }
        //    if (field == "Name" && task.GridDetailType == ironman3.operationState.added) {
        //        e.cellHtml = '<b style="color:green;">' + task.Name + '</b>';
        //        // e.rowCls = "addtask";
        //    }
        //    if (field == "Name" && task.GridDetailType == ironman3.operationState.changed) {
        //        e.cellHtml = '<b style="color:blue;">' + task.Name + '</b>';
        //        // e.rowCls = "changetask";
        //    }
        //    if (field == "Name" && task.GridDetailType == ironman3.operationState.deleted) {
        //        e.cellHtml = '<b style="color:red;">' + task.Name + '</b>';
        //        // e.rowCls = "deletetask";
        //    }
    });

    project.on("cellbeginedit", function (e) {
        var task = e.record, column = e.column, field = e.field;
        if (PorjectPlanDefault.CostTotalFlag || PorjectPlanDefault.CostMonthFlag || (typeof task.children != "undefined" && task.children.length > 0) || PorjectPlanDefault.Mode == "View" || PorjectPlanDefault.Mode == "Audit") {
            e.cancel = true; //成本计划 无需变更节点
        }
        if (task.ID == 1) {
            e.cancel = true;
        }
        // if (Mode != "Change") {
        //    if (MultiSelObj.ProjectDepts.join(",").indexOf(e.record.Name) > -1) {
        //        e.cancel = true; //工程和责任部门（默认两个节点）不能编辑
        //    }
        if (e.field == "PercentComplete" || e.field == "Duration" || e.field == "FinishWork" || (PorjectPlanDefault.ProjectMonthFlag && e.field == "Unit")) {
            e.cancel = true; //工程和责任部门（默认两个节点）\工期\  不能编辑
        }
        if (e.field == "PlanWork" && PorjectPlanDefault.ProjectMonthFlag) {

            PorjectPlanDefault.TaskObj.OriginalPlanValue = e.value;
        }
        if (e.field == "Name" && PorjectPlanDefault.ProjectMonthFlag) {
            originalTaskNameValue = e.value;
        }
        if (e.field == "Start" && PorjectPlanDefault.contentType == 1) {
            originalStart = e.value;
        }
        originalTaskValue = e.value;
        //    } else {
        //        e.cancel = true;
        //    }
    });
    project.on("CellCommitEdit", function (e) {

        var task = e.record, column = e.column, field = e.field, planValue = e.value;


        if (!CompareValue(e.value, originalTaskValue)) {
            if (task.operationState != ironman3.operationState.added) {
                task.operationState = ironman3.operationState.modified;
                project.getTaskByID(1).operationState = ironman3.operationState.modified; //暂为父节点也跟随变化
            }


            //        if (e.field == "Start" || e.field == "Finish") {
            //            project.getTaskByID(1).operationState = ironman3.operationState.modified;
            //        }
        }

        if ((e.value == "" || e.value == null) && e.value != 0) {

            return false;
        }


        if (e.field == "Name" && PorjectPlanDefault.ProjectMonthFlag && e.value != originalTaskNameValue) {
            project.updateTask(task, "PlanWork", 0);
        }

        if (e.field == "Name" && task.operationState == ironman3.operationState.added && PorjectPlanDefault.ChangeFlag) {
            project.updateTask(task, "PlanWork", 0);
        }

        PorjectPlanDefault.TaskObj.GetTask(task.Name);
        if ((PorjectPlanDefault.TaskObj.EditedTask == null && field != "Name" && PorjectPlanDefault.ProjectMonthFlag)) {
            alert("请先选择任务节点!");
            e.cancel = true;
            return false;
        }
        if (task.Name == ironman3.ProjectPlan.DefaultTaskName && field != "Name" && PorjectPlanDefault.ProjectMonthFlag) {
            alert("请先选择任务节点!");
            e.cancel = true;
            return false;
        }
        if (e.field == "Finish" && PorjectPlanDefault.contentType == 1) {
            //  if (pageData.FinishDate < e.value) {
            //    e.cancel = true;
            //   return false;
            //}
        }
        if (e.field == "Finish" && PorjectPlanDefault.rangeType == 2) {
            var newMonth = new Date(e.value).getMonth() + 1;
            var monthNum = new Date(PorjectPlanDefault.Month).getMonth() + 1;
            if (newMonth != monthNum) {
                e.cancel = true;
                return false;
            }
        }

        if (e.field == "Start" && PorjectPlanDefault.contentType == 1) {
            //        var workingDays = project._Calendar.getWorkingDays(originalStart, e.value) - 1;
            //        if (pageData.FinishDate < new Date(Date.parse(task.Finish) + (86400000 * workingDays))) {
            //            project.updateTask(project.getSelected(), "Finish", pageData.FinishDate);

            //            // alert("当前完成日期已经超过工程的竣工日期!");
            //            e.cancel = true;
            //            return false;
            //        }
        }
        if (e.field == "ChangeValue") {

            task.PlanWork = task.PlanWork ? task.PlanWork : 0;

            var changedValue = task.PlanWork + e.value;
            var finishWork = task.FinishWork ? task.FinishWork : 0;
            if (task.PlanWork == 0 && e.value < 0) {
                alert("新增的变更量不能小于0");
                e.cancel = true;
                return false;
            }
            if (changedValue < finishWork) {
                alert("变更后的计划工程量不能小于实际完成工程量");
                e.cancel = true;
                return false;
            }
            project.updateTask(task, "ChangedValue", changedValue);
        }
        return true;
        //    if (e.field == "PlanWork" && PorjectPlanDefault.ProjectMonthFlag) {
        //        var thisTask = PorjectPlanDefault.TaskObj.GetTask(task.Name);
        //        var originalValue = PorjectPlanDefault.TaskObj.OriginalPlanValue;
        //        var addValue = 0;

        //        if (task.operationState == ironman3.operationState.added) {
        //            addValue = parseFloat(planValue);
        //        }
        //        if (task.operationState == ironman3.operationState.modified) {
        //            addValue = parseFloat(planValue) - parseFloat(originalValue);
        //        }
        //        var remainValue = PorjectPlanDefault.TaskObj.GetTask(PorjectPlanDefault.TaskObj.EditedTask.Name);
        //        if (remainValue.ChildPlanValue == null) {
        //            remainValue.ChildPlanValue = 0;
        //        }
        //        var selfTaskTotalPlanWork = $.ProjectPlanTotalValidate.GetSelfTaskTotalPlanWork(PorjectPlanDefault.TaskObj.EditedTask.Name, task.UID);

        //        if (parseFloat(remainValue.PlanWork) - remainValue.ChildPlanValue - selfTaskTotalPlanWork < addValue) {
        //            alert("该节点的计划量已经超过!");
        //            e.cancel = true;
        //            return false;
        //        }

        //        //remainValue.ChildPlanValue = remainValue.ChildPlanValue+addValue;
        //    }
        //    if (typeof(task.operationState != 'undefined')) {
        //        task.operationState = ironman3.operationState.modified;
        //    } else {
        //        task.operationState = ironman3.operationState.added;
        //    }
        //task.operationState = ironman3.operationState.modified;
        //    if (e.field == "Start" && PorjectPlanDefault.Mode != "TotalPlan") {
        //        if (!project._Calendar.isWorkingDate(e.value)) {
        //            alert("这一天不是工作日!");
        //            e.cancel = true;
        //            return false;
        //        }
        //        if (e.value > new Date(ChangeDate(MultiSelObj.ProjectEndDate))) {
        //            alert("开始日期不能大于工程计划的完成日期!");
        //            e.cancel = true;
        //            return false;
        //        }
        //        var task = e.record, column = e.column, field = e.field;
        //        var newDate = dateFormat(e.value, "isoDate");
        //        var date = new Date(newDate);
        //        var dateArray = newDate.split("-");
        //        var currentMonthDay = getDaysInMonth(dateArray[0], dateArray[1]);

        //        var lastDay = new Date(dateArray[0], dateArray[1] - 1, currentMonthDay);
        //        var workingDays = project._Calendar.getWorkingDays(date, lastDay);

        //        project.updateTask(project.getSelected(), "Duration", workingDays);
        //    }
        //project.updateTask(project.getSelected(), "Duration", currentMonthDay - date.getDate());
    });

    //只允许调整百分比
    project.on("itemdragstart", function (e) {
        e.cancel = true;
        //    if (e.action == "finish" || e.action == "move") {   //percentcomplete
        //        e.cancel = true;
        //    }
    });

    //1)自定义条形图外观显示
    //project.on("drawitem", function (e) {
    //    var item = e.item;
    //    var left = e.itemBox.left,
    //        top = e.itemBox.top,
    //        width = e.itemBox.width,
    //        height = e.itemBox.height;

    //    if (!item.Summary && !item.Milestone) {
    //        var percentWidth = width * (item.PercentComplete / 100);

    //        e.itemHtml = '<div id="' + item._id + '" class="myitem" style="left:' + left + 'px;top:' + top + 'px;width:' + width + 'px;height:' + (height) + 'px;">';
    //        e.itemHtml += '<div style="width:' + (percentWidth) + 'px;" class="percentcomplete"></div>';
    //        e.itemHtml += '</div>';

    //        //e.ItemHtml = '<a href="http://www.baidu.com" style="left:'+left+'px;top:'+top+'px;width:'+width+'px;height:'+(height-2)+'px;" class="myitem">111</a>';
    //    }
    //});

    //3)自定义条形图label内容
    project.on("drawitem", function (e) {
        //    e.label = mini.formatDate(e.task["Start"], 'yyyy-MM-dd');
        //    e.labelAlign = "left";

        //    e.label2 = mini.formatDate(e.task["Finish"], 'yyyy-MM-dd');
        //    e.label2Align = "right";
    });
}

function onTaskClick(e) {}

function getDaysInMonth(year, month) {
    month = parseInt(month, 10) + 1;
    var temp = new Date(year + "/" + month + "/0");
    return temp.getDate();
}
/* 业务代码：加载、保存、调试项目，增、删、改、升级、降级任务
-----------------------------------------------------------------------------*/
var pageData= {
    CalendarStr: null,
    CalendarUID: 1,
    ChangeFlag: false,
    ChangeMasterId: 0,
    ChangeReason: null,
    Code: "CBZJH201604009",
    ContentType: 2,
    CreateTime: "/Date(1461722734630)/",
    CreateUser: "yff",
    Duration: 0,
    Files: null,
    FinishDate: "/Date(1476201599000)/",
    MonthNum: null,
    Name: "加州城三期室外沥青道路工程成本总计划",
    Note: null,
    OriginalUID: null,
    ProcessInstanceID:"fa346709bc5647139a1471441f445a8d",
    ProjectID:1442799957495,
    ProjectName:"加州城三期室外沥青道路工程",
    RangeType:1,
    RelatedUID:null,
    ResponsibleDept:null,
    ResponsibleDeptManager:null,
    StartDate:"/Date(1441036800000)/",
    State:4,
    TargetCost:8,
    UID:"175b4400-9cd5-4941-9802-5b75598ac069",
    operationState:0
}
//数据加载
function loadGantt() {
    //加载控件及控件高度调整
    initialGantt();
    var setWH=function(){
        var h=$("body").height()-($("#mini-toolbar").height() + 17); //7为分割线高度;
        project.setStyle("width:100%;height:"+h+"px");
    }
    setWH();
    window.onresize = function () {
        setWH();
    }
    project.render(document.getElementById("viewCt"));
    //加载数据
    project.mask("数据加载中，请稍后...");
    try {

        //加载数据
        pageData = mini.decode(pageData); //数据格式转换
        project.loadData(pageData);

        //默认选中第2个节点
        var task = project.getTaskByID(1);

        if (task != null) {
            project.select(task);
            //project.addTaskCls(rootTask, "displanNone");123
        }
        //project.removeTask(project.getTaskByID(1));


        project.unmask();
    } catch (e) {
        alert("加载失败, 错误码：" + e);
    }
    //    $.ajax({
    //        type: "get",
    //        url: ironman3.domains.appUrl + "/TaskPlan/List",
    //        async:false,
    //        success: function (text) {
    //            //加载标题信息
    //            var panelNorth = $("#layout").layout('panel', 'north');
    //            $(panelNorth).panel({ title: "4534534" });
    //            //加载数据
    //            var dataProject = mini.decode(text.BizObject);
    //            project.loadData(dataProject);
    //            //默认选中第一个节点
    //            var task = project.getTaskByID(1);
    //            if (task != null)
    //            project.select(task);
    //            project.unmask();
    //        },
    //        error: function (jqXHR, textStatus, errorThrown) {
    //            alert("加载失败, 错误码：" + textStatus);
    //            project.unmask();
    //        }
    //    });
}

//json日期格式转换
//function ChangeDateFormat(val, separator, showtime) {
//    if (val != null) {
//        //var date = new Date(parseInt(val.replace("/Date(", "").replace(")/", ""), 10));
//        var date = new Date();
//        date = val;
//        //月份为0-11，所以+1，月份小于10时补个0
//        var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
//        var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
//        var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
//        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
//        var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
//        var result = date.getFullYear() + separator + month + separator + currentDate;
//        if (showtime) {
//            result = result + "  " + hours + ":" + minutes + ":" + seconds;
//        }
//        return result;

//    }
//    return "";
//}

//隐藏显示列
function showColumn() {
    var column = project.getColumn("Remark");
    project.updateColumn(column, {
        visible: true
    });
}

function hideColumn() {
    var column = project.getColumn("Remark");
    project.updateColumn(column, {
        visible: false
    });
}

//筛选
function filter() {
    project.filter(function (task) {
        if (task.Duration == 0) return true;
        else return false;
    });
}

function clearFilter() {
    project.clearFilter();
}



function track() {
    TrackProject(project);
}
function save() {
    SaveProject(project);
}


function addTask(source) {
    if (source) {
        project = source;
    }
    var newTask = project.newTask();
    newTask.Name = '<新增任务>'; //初始化任务属性
    newTask.ProjectPlanUID = pageData.UID;
    var selectedTask = project.getSelected();
    var level = isLimitTask(selectedTask);

    //    if (level == 1 && PorjectPlanDefault.AddTargetTask == null) {
    if ((PorjectPlanDefault.AddTargetTask == null || !PorjectPlanDefault.CanEdit) || PorjectPlanDefault.contentType == 2
|| PorjectPlanDefault.ProjectPlanSubmited) {
        alert("无法新增");
        return;
    }

    newTask.operationState = ironman3.operationState.added;
    //newTask.projectID = PorjectPlanDefault.ProjectID;
    var targetAddTask = null;
    if (PorjectPlanDefault.MultiGrade) {
        targetAddTask = selectedTask;
    } else {
        targetAddTask = PorjectPlanDefault.AddTargetTask;
    }
    project.addTask(newTask, "add", targetAddTask); //加入到选中任务之内               
}

//判断节点的层级
function isLimitTask(task) {
    var taskparent = project.getTaskByID(1);
    var childtask = project.getChildTasks(taskparent);
    if (task == taskparent)
        return 1;
    else if ($.inArray(task, childtask) >= 0)
        return 2;
    else
        return -1;
}

function removeTask(source) {
    if (source) {
        project = source;
    }
    var task = project.getSelected();
    var level = isLimitTask(task);
    if ((level == 1 || !PorjectPlanDefault.CanEdit) || PorjectPlanDefault.contentType == 2 || PorjectPlanDefault.ProjectPlanSubmited) {
        alert("无法删除");
        return;
    }
    if (task) {
        if (confirm("确定删除任务 \"" + task.Name + "\" ？")) {
            if (task.operationState != ironman3.operationState.added) {
                task.operationState = ironman3.operationState.deleted;
                removeTaskUID.push(task);
            }
            project.removeTask(task);
            //project.addTaskCls(task, "displanNone");
        }
    } else {
        alert("请选中任务");
    }
}
function updateTask() {
    ShowTaskWindow(project);
}
function upgradeTask(source) {
    if (source) {
        project = source;
    }
    var task = project.getSelected();
    var level = isLimitTask(project.getParentTask(task));
    if ((level == 1 || level == 2 || !PorjectPlanDefault.CanEdit) || PorjectPlanDefault.contentType == 2 || PorjectPlanDefault.ProjectPlanSubmited) {
        alert("无法升级");
        return;
    }
    if (task) {
        project.upgradeTask(task);
    } else {
        alert("请选选中任务");
    }
}
function downgradeTask(source) {
    if (source) {
        project = source;
    }
    var task = project.getSelected();
    var level = isLimitTask(task);
    if (((level == 1 || level == 2 || !PorjectPlanDefault.CanEdit)) || PorjectPlanDefault.contentType == 2 || PorjectPlanDefault.ProjectPlanSubmited) {
        alert("无法降级");
        return;
    }
    if (task) {
        project.downgradeTask(task);
    } else {
        alert("请选选中任务");
    }
}


function changeTopTimeScale(value) {
    project.setTopTimeScale(value)
}
function changeBottomTimeScale(value) {
    project.setBottomTimeScale(value)
}
function zoomIn() {
    project.zoomIn();
}
function zoomOut() {
    project.zoomOut();
}
function showCalendars() {
    ShowCalendarWindow(project);
}
function editTaskByTaskWindow() {
    ShowTaskWindow(project);
}

function frozenColumn() {
    //project.frozenColumn(0, 2);
    var start = project.getViewStartColumn();
    var end = project.getSelectedColumn();
    project.frozenColumn(start, end);
}
function unfrozenColumn() {
    project.unfrozenColumn();
}
function onLockClick(e) {
    var checked = this.getChecked();
    if (checked) {
        //project.frozenColumn(0, 2);
        var start = project.getViewStartColumn();
        var end = project.getSelectedColumn();
        project.frozenColumn(start, end);
    } else {
        project.unfrozenColumn();
    }
}


//基准线比较
function oncheckedchanged(ck) {
    var checked = ck.checked;
    project.setViewModel(checked ? "track" : "gantt");
    if (checked) {
        createBaseline();
    } else {
        clearBaseline();
    }
}
function createBaseline() {

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
}
function clearBaseline() {
    var tasklist = project.getTaskList();
    for (var i = 0, l = tasklist.length; i < l; i++) {
        var task = tasklist[i];
        delete task.Baseline;
    }
    project.refresh();
}


//显示隐藏关键路劲
function isShowCritical(ck) {
    var checked = ck.checked;
    if (checked) {
        //        var taskList = project.getTaskList();
        //        for (var i = 0, l = taskList.length; i < l; i++) {
        //            var task = taskList[i];
        //            task.Critical2 = 1;
        //        }
        project.setShowCriticalPath(true);
        project.refresh();
    } else {
        project.setShowCriticalPath(false);
        project.refresh();
    }
}

////项目时间线
//project.setTimeLines([
//        { date: new Date(2013, 0, 3), text: "时间线" },
//        { date: new Date(2013, 1, 4), text: "时间线2", style: "width:2px;background:red;" }
//]);


//任务排序
function isSortByStart(ck) {
    var checked = ck.checked;
    if (checked) {
        sortByStart()
    } else {
        project.clearSort();
    }
}

function sortByStart() {
    project.sort(function (task1, task2) {
        if (!task1.Start) return -1;
        if (!task2.Start) return 1;
        var t1 = task1.Start.getTime(), t2 = task2.Start.getTime();
        if (t1 < t2) return 1;
        else if (t1 == t2) return 0;
        else return -1;
    });
}
function ChangeDate(time) {
    if (time != null && time != "") {
        if (time.indexOf("/Date") > -1) {
            var date = new Date(parseInt(time.replace("/Date(", "").replace(")/", ""), 10));
            var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            return date.getFullYear() + "-" + month + "-" + currentDate;
        }
        return time;
    }
    return "";
}

//自定义单元格
/*
project.on("drawcell", function (e) {
var task = e.record, column = e.column, field = e.field;

//单元格样式
if (column.name == "Name") {
e.cellCls = "mycellcls";
}

//行样式
if (task.Summary == 1) {
e.rowCls = "myrowcls";
}

////自定义单元格Html。如果是工期列, 并且工期大与5天, 显示红色
if (field == "Name" && task.Duration > 5) {
e.cellHtml = '<b style="color:red;">' + task.Name + '</b>';
}
if (field == "Name" && task.Duration <= 2) {
e.cellHtml = '<span style="color:blue;">' + task.Name + '</span>';
}

if (task.Duration == 0) {

e.rowCls = "deletetask";
}

//进度显示
if (field == "PercentComplete") {
var p = task.PercentComplete;
if (!p) p = 0;
var s = '<div class="percentComplete" style="width:' + p + '%;"></div>';
s += '<div class="percentComplete_label">' + p + '%</div>';
e.cellHtml = s;
}

//日期格式化自定义
if (field == "Start" || field == "Finish") {
var d = e.value;
if (d) {
e.cellHtml = mini.formatDate(d, "yyyy-MM-dd ddd");
}
}
});
*/

//判断节点前后两次输入的值是否相等
function CompareValue(orignalValue, newValue) {
    //咱判定为日期
    if (typeof orignalValue == "object") {
        return new Date(orignalValue) - new Date(newValue) == 0;
    }
    return orignalValue == newValue;
}