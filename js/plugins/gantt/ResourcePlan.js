/* 资源计划的设置、新增、删除、修改、查看
-----------------------------------------------------------------------------*/
var tabstype = ['人工计划', '材料需求计划', '机械计划', '资金要求', '总计划产值', '总目标成本', '材料总计划'];
var tabUrl = ['LabourPlan', 'MaterialPlan', 'MachinePlan', 'MoneyRequirement', 'OutputValuePlan', 'TargetCost', 'MaterialPlan'];
var gridWidth = ["100%", "100%", "100%", "100%", "100%", "100%", ""];
var currentColumn = [];

// 初始化明细表的配置信息
function initialResourceConfig() {
    //人工计划          
    var column0 = [
        [
            {
                field: 'Type',
                title: '工种',
                width: 1,
                halign: "center",
                sortable: false,
                formatter: function (value, row, index) {
                    return ironman3.resources.getResourceName("LabourType", value);
                }
            },
            { field: 'Number', title: '人数', width: 1, halign: "center", align: "right", sortable: false, formatter: formatInt },
            { field: 'ChangeValue', title: '人数变更量', halign: "center", align: "right", width: 1, sortable: false, formatter: formatInt },
            { field: 'ChangedValue', title: '人数变更后', halign: "center", align: "right", width: 1, sortable: false, formatter: formatInt },
            { field: 'Duration', title: '工期(日)', width: 1, halign: "center", align: "right", sortable: false, formatter: formatInt },
            { field: 'Duty', title: '职责', width: 1, halign: "center", sortable: false },
            { field: 'EntranceTime', title: '进场日期', width: 1, halign: "center", align: "center", sortable: false, formatter: DateFormatFun },
            { field: 'Note', title: '备注', width: 1, halign: "center", sortable: false }
        ]
    ];

    //工程材料计划           
    var column1 = [
        [
            { field: 'ResName', title: '材料名称', width: 2, halign: "center", sortable: false },
            { field: 'Model', title: '规格型号', width: 1, halign: "center", align: "center", sortable: false },
            { field: 'Unit', title: '单位', width: 1, halign: "center", align: "center", sortable: false },
            { field: 'PlanQuantity', title: '数量', width: 2, halign: "center", align: "right", sortable: false, formatter: formatCurrency },
            { field: 'QuantityChangeValue', title: '数量变更量', width: 2, halign: "center", align: "right", sortable: false, formatter: formatCurrency },
            { field: 'QuantityChangedValue', title: '数量变更后', width: 2, halign: "center", align: "right", sortable: false, formatter: formatCurrency },
            { field: 'EntranceTime', title: '进场日期', width: 2, halign: "center", align: "center", sortable: false, formatter: DateFormatFun },
            { field: 'Note', title: '备注', width: 2, halign: "center", sortable: false }
        ]
    ];

    //机械计划          
    var column2 = [
        [
            { field: 'MachineName', title: '机械名称', width: 2, halign: "center", sortable: false },
    //        { field: 'Model', title: '规格型号', width: 2, sortable: false },
            { field: 'Unit', title: '单位', width: 2, halign: "center", align: "center", sortable: false },
            { field: 'Quantity', title: '数量', width: 2, halign: "center", align: "right", sortable: false, formatter: formatInt },
            { field: 'ChangeValue', title: '数量变更量', width: 2, halign: "center", align: "right", sortable: false, formatter: formatInt },
            { field: 'ChangedValue', title: '数量变更后', width: 2, halign: "center", align: "right", sortable: false, formatter: formatInt },
            { field: 'EntranceTime', title: '进场日期', width: 2, halign: "center", align: "center", sortable: false, formatter: DateFormatFun },
            { field: 'Note', title: '备注', width: 2, halign: "center", sortable: false }
        ]
    ];

    //资金要求         
    var column3 = [
        [
            { field: 'Money', title: '金额', width: 1, halign: "center", align: "right", sortable: false, formatter: formatCurrency },
            { field: 'Purpose', title: '用途', width: 3, halign: "center", sortable: false }
        ]
    ];

    //计划产值 
    var column4 = [
        [
            {
                field: 'Type',
                title: '产值类型',
                width: 1,
                align: "center",
                halign: "center",
                sortable: false,
                formatter: function (value, row, index) {
                    return ironman3.resources.getResourceName("OutPutFeeType", value, true);
                }
            },
            { field: 'PlanValue', title: '计划产值', width: 1, align: "right", halign: "center", sortable: false, formatter: formatCurrency },
            { field: 'ChangeValue', title: '变更量', width: 1, align: "right", halign: "center", sortable: false, formatter: formatCurrency },
            { field: 'ChangedValue', title: '变更后', width: 1, align: "right", halign: "center", sortable: false, formatter: formatCurrency },
            { field: 'RealValue', title: '实际产值', width: 1, align: "right", halign: "center", sortable: false, formatter: formatCurrency },
            { field: 'Note', title: '备注', halign: "center", width: 2, sortable: false }
        ]
    ];

    //总目标成本
    var column5 = [
        [
            {
                field: 'Type',
                title: '成本类型',
                width: 1,
                align: "center",
                halign: "center",
                sortable: false,
                formatter: function (value, row, index) {
                    return ironman3.resources.getResourceName("TargetCostType", value, true);
                }
            },
            { field: 'PlanValue', title: '目标成本', width: 1, align: "right", halign: "center", sortable: false, formatter: formatCurrency },
            { field: 'ChangeValue', title: '变更量', width: 1, align: "right", halign: "center", sortable: false, formatter: formatCurrency },
            { field: 'ChangedValue', title: '变更后', width: 1, align: "right", halign: "center", sortable: false, formatter: formatCurrency },
            {
                field: 'RealCost', title: '实际成本', width: 1, align: "right", halign: "center", sortable: false, formatter: formatCurrency,
                styler: function (value, row, index) {
                    return value > row.ChangedValue ? "background-color: red; color: white;" : "";
                }
            },
            { field: 'WarningLine', title: '预警线', width: 1, halign: "center", align: "center", sortable: false },
            { field: 'Note', title: '备注', halign: "center", width: 2, sortable: false }
        ]
    ];

    //成本材料计划           
    var column6 = [
        [
            { field: 'ResName', title: '材料名称', width: 150, halign: "center", fixed: true, sortable: false },
            { field: 'Model', title: '规格型号', width: 100, halign: "center", align: "center", fixed: true, sortable: false },
            { field: 'Unit', title: '单位', width: 60, halign: "center", align: "center", fixed: true, align: "center", sortable: false },
            { field: 'PlanQuantity', title: '数量', width: 100, fixed: true, align: "right", halign: "center", sortable: false, formatter: formatCurrency },
            { field: 'QuantityChangeValue', title: '数量变更量', width: 100, fixed: true, align: "right", halign: "center", sortable: false, formatter: formatCurrency },
            { field: 'QuantityChangedValue', title: '数量变更后', width: 100, fixed: true, align: "right", halign: "center", sortable: false, formatter: formatCurrency },
            {
                field: 'RealQuantity', title: '实际数量', width: 100, fixed: true, align: "right", halign: "center", sortable: false, formatter: formatCurrency,
                styler: function (value, row, index) {
                    return value > row.QuantityChangedValue ? "background-color: red; color: white;" : "";
                }
            },
             { field: 'BudgetPrice', title: '预算价', width: 100, fixed: true, align: "right", halign: "center", sortable: false, formatter: formatCurrency },
            { field: 'Price', title: '采购价', width: 100, fixed: true, align: "right", halign: "center", sortable: false, formatter: formatCurrency },
    //        { field: 'PriceChangeValue', title: '采购价变更量', width: 2, sortable: false, formatter: formatCurrency },
    //        { field: 'PriceChangedValue', title: '采购价变更后', width: 2, sortable: false, formatter: formatCurrency },
            { field: 'TotalMoney', title: '金额', width: 110, fixed: true, align: "right", halign: "center", sortable: false, formatter: formatCurrency },
            { field: 'AddUpMoneyChangeValue', title: '本次价差', width: 110, fixed: true, align: "right", halign: "center", sortable: false, formatter: formatCurrency },
            {
                field: 'AddUpMoneyChangedValue', title: '累计价差', width: 110, fixed: true, align: "right", halign: "center", showTooltip: false, sortable: false, formatter: formatCurrency
                // function (value, row, index) {
                //     var content = $("<div></div>");
                //     content.html("<a  style='color:blue' onmousemove='materialOver(this)'></a>");
                //     content.find("a").html(value).data("source", row).attr("id", row.ID).attr("name", "ShowHistory");

                //     return content[0].innerHTML;
                //     if (value > 0) {
                //         return "<a style='color:blue' onclick='ShowHistory(" + row + ")'>" + value + "</a>";
                //     }
                //     return value;
                // }
            },
            { field: 'AllMoneyTotal', title: '累计金额', width: 110, fixed: true, align: "right", halign: "center", sortable: false, formatter: formatCurrency },
            {
                field: 'RealCost', title: '实际金额', width: 110, fixed: true, align: "right", halign: "center", sortable: false, formatter: formatCurrency,
                styler: function (value, row, index) {
                    return value > row.AllMoneyTotal ? "background-color: red; color: white;" : "";
                }
            },
            {
                field: 'WarningLine', title: '数量预警线', width: 120, halign: "center", align: "center", fixed: true, sortable: false
            },
            { field: 'MoneyWarningLine', title: '金额预警线', width: 120, halign: "center", align: "center", fixed: true, sortable: false },
            { field: 'Note', title: '备注', width: 120, halign: "center", fixed: true, sortable: false }
        ]
    ];

    if (PorjectPlanDefault.CostMonthFlag) {
        tabstype[4] = "月计划产值";
        tabstype[5] = "月目标成本";
        tabstype[6] = "材料月计划";
    }

    if (!PorjectPlanDefault.ChangeFlag) {

        column0[0].splice(2, 2);  //人工
        column1[0].splice(4, 2);  //工程材料
        column2[0].splice(3, 2);  //机械

        column4[0].splice(2, 2);  //计划产值
        column5[0].splice(2, 2);  //目标成本
        column6[0].splice(10, 1);
        column6[0].splice(4, 2);  //目标成本

        $("input[change='value']").closest("tr").hide(); //变更量
        $("input[change='after']").closest("tr").hide(); //变更后
    }

    loadResourceSelect();
    currentColumn = [column0, column1, column2, column3, column4, column5, column6];
}

$.emptyFunc = function () { };

var gridRowDetails = [];
var getGridRowDetailsById = function (id) {
    if (gridRowDetails.length < 1) {
        return null;
    }
    var arr = new Array();
    for (var index in gridRowDetails) {
        var obj = gridRowDetails[index];
        if (obj.Id == id) {
            arr.push(obj);
            return arr;
        }
    }
};


//资源的Tab页加载和设置
function TabSetting(showArry) {
    //$('#tabs').html("");//初始化
    $('#tabs').tabs();
    $.map(showArry, function (item, index) {
        if (item) {
            $('#tabs').tabs('add', {
                title: tabstype[index],
                id: "tab" + index,
                selected: false
            });
        }
    });

    $('#tabs').tabs("resize");
    //tab选中事件
    $('#tabs').tabs({
        onSelect: function (title, index) {

            PorjectPlanDefault.Resource.tabIndex = GetTabIndexByTitle(title);
            //加载数据
            onSelectTabs(PorjectPlanDefault.Resource.tabIndex, title);
            PorjectPlanDefault.defaultDetailGridIndex = PorjectPlanDefault.Resource.tabIndex;
            if (PorjectPlanDefault.ProjectPlanSubmited) {
                $("#gd" + PorjectPlanDefault.defaultDetailGridIndex).datagrid("freshToolbar", [PorjectPlanDefault.gridBtnView]);
            }
            //布局位置
            layoutsetting();
        }
    });
    //添加上下伸缩按钮和功能
    layoutstretch();
}

//添加上下伸缩按钮和功能
function layoutstretch() {
    //重置grid高度
    var bottomHeight = $("[name='bottom']").height() - 31;
    var detailGrid = $("#gd" + PorjectPlanDefault.Resource.tabIndex);
    var actulWidth = $("#layoutout").width();
    detailGrid.datagrid('resize', { /*width: actulWidth,*/ height: bottomHeight });
    //分割线自适应控件高度
    var panelNorth = $("#layout").layout('panel', 'north');
    var panelCenter = $("#layout").layout('panel', 'center');
    //top
    $(panelNorth).panel({
        onResize: function (width, height) {
            var topHeight = $("[name='top']").height() - ($("#mini-toolbar").height() + 7);
            project.setStyle("width:100%;height:" + topHeight + "px");
        }
    });
    //bottom

    $(panelCenter).panel({
        onResize: function (width, height) {
            var bottomHeight = $("[name='bottom']").height() - 31;
            var actulWidth = $("#layoutout").width();
            var detailGrid = $("#gd" + PorjectPlanDefault.Resource.tabIndex);
            detailGrid.datagrid('resize', { /*width: actulWidth,*/ height: bottomHeight });
        }
    });
    //伸缩
    $("#layout .panel-header").append('<div  class="defined_tool"><a name="panel-defined_tool" href="javascript:void(0)" class="layout-button-down" ></a></div>');
    $("#layout .tabs-header").append('<div  class="defined_tool"><a name="tabs-defined_tool" href="javascript:void(0)" class="layout-button-up"></a></div>');
    $("#layout a[name='panel-defined_tool']").click(function () {
        var actulWidth = $("#layoutout").width();
        var topHeight = $("#layoutout").height() - 62;
        var top = $("#layoutout").height() - 31;
        var projectHeight = topHeight - 31;
        stretchWidthHeight(actulWidth, topHeight, 31, projectHeight, 0, top);
    });
    $("#layout a[name='tabs-defined_tool']").click(function () {
        var actulWidth = $("#layoutout").width();
        var bottomHeight = $("#layoutout").height() - 31;
        stretchWidthHeight(actulWidth, 0, bottomHeight, 0, bottomHeight - 31, 31);
    });
}

function stretchWidthHeight(actulWidth, topHeight, bottomHeight, projectHeight, gridHeight, top) {
    $("[name='top']").height(topHeight);
    $("[name='bottom']").height(bottomHeight);
    $("#layout .layout-split-center").css("top", top);
    var detailGrid = $("#gd" + PorjectPlanDefault.Resource.tabIndex);
    detailGrid.datagrid('resize', { /*width: actulWidth,*/ height: gridHeight });
    project.setStyle("width:100%;height:" + projectHeight + "px");
}

//布局位置设置
function layoutsetting() {
    //重置grid高度
    var bottomHeight = $("[name='bottom']").height() - 31;
    var actulWidth = $("#layoutout").width();
    var detailGrid = $("#gd" + PorjectPlanDefault.Resource.tabIndex);
    detailGrid.datagrid('resize', { /*width: actulWidth,*/ height: bottomHeight });
}

//切换tab时加载资源计划数据
function onSelectTabs(index, title) {
    loadTabGridData(index, title);
}

//单击任务节点时加载资源计划数据
function onTaskClick(e) {

    if (PorjectPlanDefault.ProjectTotalFlag) {
        return false;
    }

    var project = e.source;
    var task = e.task;

    //    var tab = $('#tabs').tabs('getSelected');

    var task = project.getTaskByID(1);
    if (task != null) {
        project.select(task);
    }
    //    if (task != null && (PorjectPlanDefault.CostTotalFlag||PorjectPlanDefault.CostMonthFlag)) {
    //        project.select(task);
    //    }
    //    var index = $('#tabs').tabs('getTabIndex', tab);
    //    if ((PorjectPlanDefault.CostTotalFlag || PorjectPlanDefault.CostMonthFlag) && (task.ParentTaskUID == null || task.ParentTaskUID == "-1")) {
    //        {
    //            loadTabGridData(task, PorjectPlanDefault.Resource.tabIndex);
    //        }

    //    }
}

//加载资源数据
var ValidateAddFlag = true;  //验证数量的时候 如果是编辑 则不算该保存的值
var oldValidateValue = 0;
var tempSelectedRow = null;

function loadTabGridData(index, title) {
    var ResourceName = tabUrl[index];
    Url = ironman3.domains.appUrl + "/" + ResourceName + "/ListByProjectPlan?id=" + PorjectPlanDefault.UID + "&changeFlag=" + pageData.ChangeFlag;

    if (pageData.ContentType == 2) {
        switch (index) {
            case 4:
                Url = Url + "&outputOption=1";
                break;
            case 5:
                Url = Url + "&outputOption=0";
                break;
            case 6:
                Url = Url + "&materialType=1";
                break;
        }
    }
    else if (pageData.ContentType == 1 && index == 1) {
        Url = Url + "&materialType=0";
    }

    //根据当前选中获取数据
    loadGridMethod(Url, ResourceName, title);

    //加载grid数据
    var selectData = pageData[ResourceName];
    //除了计划产值以外都加载grid数据
    //if (index != 4) {
    if ($("#tab" + index).children().length == 0)//tab没有加载内容
        LoadGridSetting(index, selectData); //第一次加载内容
    else
        $("#gd" + index).datagrid('loadData', selectData || []);
}

function loadGridMethod(Url, ResourceName, title) {
    if (typeof (pageData[ResourceName]) == "undefined") {
        if (PorjectPlanDefault.Mode == "Add" && !pageData.ChangeFlag) {
            receiveData(ResourceName ,[]);
        }
        else {
            //从服务器获取并更新到甘特图节点task上
            $.ironman3Ajax({
                url: Url,
                async: false,
                success: function (dataPara) {
                    receiveData(ResourceName, dataPara);
                }
            });
        }
    }

    function receiveData(ResourceName ,dataPara) {
        if (dataPara && dataPara.length > 0) {
            data = AddUpDataSet(dataPara, ResourceName, pageData.ChangeFlag);
            pageData[ResourceName] = data;

        } else {

            if (ResourceName == "TargetCost" || ResourceName == "OutputValuePlan") {
                if (ResourceName == "OutputValuePlan") {
                    pageData[ResourceName] = PorjectPlanDefault.Resource.CostDefaultObj();
                } else {
                    pageData[ResourceName] = PorjectPlanDefault.Resource.TargetCostDefaultObj();
                }

            } else {
                pageData[ResourceName] = [];//{ rows: [], total: 0 };
            }

        }
    }
}

// 加载明细界面的下拉选项
function loadResourceSelect() {
    //人工计划
    $("#Type", $("#DialogDetailForm0")).resourceSelector({
        resourceType: "LabourType",
        valueField: "ID",
        onSelect: function (record) {
            $("#labourType", $("#DialogDetailForm0")).val(record.Name);
        }
    });

    //        $("select[name=Type]", $("#DialogDetailForm" + index)).bindSelect({
    //            source: ironman3.resources.getResourcesByType("LabourType",0),
    //            label: "Name",
    //            value: "ID",
    //            selectValue: 1,
    //            onBinded: function (data) {
    //            }
    //        });


    //机械
    //    if (index == 2) {
    //        $("select[name=MachineType]", $("#DialogDetailForm" + index)).bindSelect({
    //            source: "/WorkingMachine/List?Source=-1",
    //            label: "Name",
    //            value: "ID",
    //            selectValue: 1,
    //            onDataPreprocess: function (data) {
    //                data = data.rows;
    //                var dataArray = new Array();
    //                for (var index in data) {
    //                    if (data[index].cell != null) {
    //                        dataArray.push(data[index].cell);
    //                    }
    //                } 
    //                return dataArray;
    //            },
    //            onSelectChanged: function (data) {
    //                $("input[name=Model]", $("#DialogDetailForm" + index)).val(data.Model);
    //                $("input[name=Brand]", $("#DialogDetailForm" + index)).val(data.Brand);
    //                $("input[name=MachineName]", $("#DialogDetailForm" + index)).val(data.Name);
    //                $("input[name=MachineID]", $("#DialogDetailForm" + index)).val(data.ID);
    //            }
    //        });
    //    }

    //工作内容
    //    if (index == 3 || index == 5) {
    //        $("select[name=WorkItemType]", $("#DialogDetailForm" + index)).bindSelect({
    //            source: "/BaseWorkItem/List",
    //            label: "Name",
    //            value: "ID",
    //            selectValue: 1,

    //            onSelectChanged: function (data) {
    //                $("input[name=Unit]", $("#DialogDetailForm" + index)).val(data.Unit);

    //                $("input[name=WorkItemName]", $("#DialogDetailForm" + index)).val(data.Name);
    //                $("input[name=WorkItemID]", $("#DialogDetailForm" + index)).val(data.ID);
    //            }
    //        });
    //    }

    //产值

    $("#OutputType", $("#DialogDetailForm4")).resourceSelector({
        resourceType: "OutPutFeeType",
        valueField: "InnerID",
        readonly: true,
        editable: false
    });
    //目标成本
    $("#targetOutputType", $("#DialogDetailForm5")).resourceSelector({
        resourceType: "TargetCostType",
        valueField: "InnerID",
        readonly: true,
        editable: false
    });
    //        $("select[name=Type]", $("#DialogDetailForm" + index)).bindSelect({
    //            source: PorjectPlanDefault.OutPutObj.GetOutPutArrayJson(),
    //            label: "Name",
    //            value: "ID",
    ////            selectValue: 1,
    //            onBinded: function (data) {
    //            },
    //            onSelectChanged: function (data) {
    //                if (!$.ProjectPlanTotalValidate.ValidataSingle("OutputValuePlan", 'PlanValue','Type', data.ID)) {
    //                    $("select[name=Type]", $("#DialogDetailForm" + index)).val("-1");
    //                    alert("当前产值类型已经选择,不能重复!");
    //                    return false;
    //                }
    //                if (PorjectPlanDefault.CostMonthFlag) {
    //                    $("span[name=validateTips]", $("#DialogDetailForm" + index)).html(" (剩余: " + PorjectPlanDefault.OutPutObj.dbRemainValue[data.ID] + " )");
    //                }
    ////                var remainValue=$.ProjectPlanTotalValidate.RemainPlusValue(project.getSelecteds()[0].UID,"OutputValuePlan", 'PlanValue','Type', data.Id);
    ////                if (data.Id>0 && remainValue!= ironman3.defaultValue.MaxValue) {
    ////                    $("input[name=PlanValue]", $("#DialogDetailForm" + index)).next().html("(剩余" + remainValue+")");
    ////                }

    //            }
    //        });
}

//Grid数据处理
function pagerResourceFilter(data) {
    if (typeof data.length == 'number' && typeof data.splice == 'function') {
        data = {
            total: data.length,
            rows: data
        }
    }
    if (!data.originalRows) {
        data.originalRows = (data.rows);      //Grid  显示的是originalRows 不是 Rows的数据
    }

    var dg = $(this);
    dg.datagrid('unselectAll');
    //更新数据到节点计划
    var tab = $('#tabs').tabs('getSelected');
    var ResourceName = tabUrl[PorjectPlanDefault.Resource.tabIndex];

    InitTaskResource(ResourceName);

    pageData[ResourceName] = data.originalRows;
    //处理显示的信息(删除数据不显示)
    var showRows = $.map(data.originalRows, function (n) {
        return n.operationState != ironman3.operationState.deleted ? n : null;
    });
    if (showRows) {
        showRows = settingsData(ResourceName, showRows);
    }
    data.rows = showRows;

    //目标成本汇总
    if (PorjectPlanDefault.Resource.tabIndex == 4 || PorjectPlanDefault.Resource.tabIndex == 5) {
        var total = 0;
        var realValue = 0;
        var realCost = 0;
        var changeValue = 0;
        var changedValue = 0;
        $.each(data.originalRows, function (index, row) {
            if (data.originalRows[index].PlanValue) {
                total = total + parseFloat(data.originalRows[index].PlanValue) || 0;
            }
            if (data.originalRows[index].ChangeValue) {
                changeValue = changeValue + parseFloat(data.originalRows[index].ChangeValue) || 0;
            }
            if (data.originalRows[index].ChangedValue) {
                changedValue = changedValue + parseFloat(data.originalRows[index].ChangedValue) || 0;
            }
            if (PorjectPlanDefault.Resource.tabIndex == 4) {// 汇总实际产值
                realValue += parseFloat(data.originalRows[index].RealValue || 0);
            }
            if (PorjectPlanDefault.Resource.tabIndex == 5) {// 汇总实际成本
                realCost += parseFloat(data.originalRows[index].RealCost || 0);
            }
        });
        data.footer = [];

        var totalRow = { Type: "汇总", PlanValue: total, ChangeValue: changeValue, ChangedValue: changedValue, RealValue: realValue, RealCost: realCost };
        data.footer.push(totalRow);
    }

    //材料计划汇总
    if (PorjectPlanDefault.Resource.tabIndex == 6 && !PorjectPlanDefault.ProjectMonthFlag) {
        var materialMoneytotal = 0;  //金额
        var currentAddupMoney = 0; // 本次价差累计
        var addupTotalMoney = 0;   //累计价差
        var allMoneyTotal = 0;    //累计金额汇总
        var materialRealCost = 0; //实际金额

        $.each(data.originalRows, function (index, row) {
            currentAddupMoney += parseFloat(data.originalRows[index].AddUpMoneyChangeValue) || 0;
            addupTotalMoney += parseFloat(data.originalRows[index].AddUpMoneyChangedValue) || 0;  //累计价差汇总
            materialRealCost += parseFloat(data.originalRows[index].RealCost) || 0;
            materialMoneytotal += parseFloat(data.originalRows[index].TotalMoney) || 0;
            allMoneyTotal += parseFloat(data.originalRows[index].AllMoneyTotal) || 0;  //累计金额汇总
        });

        data.footer = [];
        var totalRow = { ResName: "汇总", TotalMoney: materialMoneytotal, AddUpMoneyChangeValue: currentAddupMoney, AddUpMoneyChangedValue: addupTotalMoney, AllMoneyTotal: allMoneyTotal, RealCost: materialRealCost };
        data.footer.push(totalRow);
    }

    //成本计划中  计划产值 和 目标成本 排序
    if (PorjectPlanDefault.contentType == 2 && (PorjectPlanDefault.Resource.tabIndex == 4 || PorjectPlanDefault.Resource.tabIndex == 5)) {
        data.originalRows.sort(function (a, b) {
            return a.Order - b.Order;
        });
    }

    return data;
}

//加载Grid设置
function LoadGridSetting(index, data) {
    var dialogForm = $("#DialogDetailForm" + index);
    var dialogTitle = tabstype[index];
    var dialogContainer = $("#DialogDetail" + index);
    //tab页添加grid控件的div
    $("#tab" + index).append('<div id="gd' + index + '"></div>');
    var detailGrid = $("#gd" + index);

    //材料月计划 数量验证
    jQuery.validator.addMethod("PlanQuantityValidate", function (value, element, param) {
        var result = true;
        if (pageData.ContentType == 1 || pageData.RangeType == 1 || pageData.ChangeFlag) {
            return true;
        }

        var materialID = $("input[name=MaterialID]", $("#DialogDetailForm6")).val();
        var remainInfo = getMaterialRemainInfos({ MaterialID: materialID, PlanQuantity: 0 });
        var planQuantity = parseFloat(value) || 0;
        return !remainInfo || !remainInfo.quantityRemainValue || planQuantity <= remainInfo.quantityRemainValue;
    }, "本次材料计划量不能大于可用计划量！");

    // 材料月计划变更 变更量验证
    jQuery.validator.addMethod("QuantityChangeValueValidate", function (value, element, param) {
        var result = true;
        if (pageData.ContentType == 1 || pageData.RangeType == 1 || !pageData.ChangeFlag) {
            return true;
        }

        var quantityChangeValue = parseFloat(value) || 0;
        var materialID = $("input[name=MaterialID]", $("#DialogDetailForm6")).val();
        var planQuantity = PorjectPlanDefault.Resource.originalData ? PorjectPlanDefault.Resource.originalData.PlanQuantity : 0;
        var remainInfo = getMaterialRemainInfos({ MaterialID: materialID, PlanQuantity: planQuantity });

        return !remainInfo || !remainInfo.quantityRemainValue || quantityChangeValue <= remainInfo.quantityRemainValue;
    }, "本次材料变更量不能大于可用计划量！");

    // 材料计划变更 变更后数量验证
    jQuery.validator.addMethod("QuantityChangedValueValidate", function (value, element, param) {
        var result = true;
        if (pageData.ContentType == 1 || !pageData.ChangeFlag) {
            return true;
        }

        var quantitychangedValue = parseFloat(value) || 0;
        var realQuantity = PorjectPlanDefault.Resource.originalData ? PorjectPlanDefault.Resource.originalData.RealQuantity : 0;
        return quantitychangedValue >= realQuantity;
    }, "材料计划量不能小于实际收货量！");

    // 材料计划（或变更） 材料累计金额验证
    var errMsg = "";
    jQuery.validator.addMethod("AllMoneyTotalValidate", function (value, element, param) {
        var result = true;
        if (pageData.ContentType == 1 || !pageData.ChangeFlag) {
            return true;
        }

        var allMoneyTotal = parseFloat(value) || 0;
        if (PorjectPlanDefault.Resource.originalData) {
            result = allMoneyTotal >= (parseFloat(PorjectPlanDefault.Resource.originalData.RealCost) || 0);
            errMsg = "材料累计金额不能小于实际收货金额！";
            if (!result) {
                return result;
            }
        }

        if (pageData.RangeType == 1) {
            return true;
        }

        errMsg = "本次材料累计金额不能大于可用计划金额";
        var materialID = $("input[name=MaterialID]", $("#DialogDetailForm6")).val();
        var planQuantity = PorjectPlanDefault.Resource.originalData ? PorjectPlanDefault.Resource.originalData.PlanQuantity : 0;
        var remainInfo = getMaterialRemainInfos({ MaterialID: materialID, PlanQuantity: planQuantity });
        if (remainInfo == null || !remainInfo.costRemainValue) {
            result = true;
        }
        else {
            result = allMoneyTotal <= remainInfo.costRemainValue
        }

        return result;
    }, errMsg);

    // 材料计划 金额验证
    jQuery.validator.addMethod("TotalMoneyValidate", function (value, element, param) {
        var result = true;
        if (pageData.ContentType == 1 || pageData.RangeType == 1 || pageData.ChangeFlag) {
            return true;
        }

        var materialID = $("input[name=MaterialID]", $("#DialogDetailForm6")).val();
        var remainInfo = getMaterialRemainInfos({ MaterialID: materialID, PlanQuantity: 0 });

        if (remainInfo && remainInfo.costRemainValue) {
            result = ((parseFloat(value)) || 0) <= remainInfo.costRemainValue;
        }
        else {
            result = true;
        }

        return result;
    }, "本次计划金额不能大于可用计划金额!");

    //cqy 目标成本验证
    jQuery.validator.addMethod("CostValueValidate", function (value, element, param) {
        var result = true;
        if (pageData.ContentType == 1
            || pageData.RangeType == 1
            || PorjectPlanDefault.Resource.tabIndex != 5
            || (param == "PlanValue" && pageData.ChangeFlag)
            || (param == "ChangeValue" && !pageData.ChangeFlag)) {
            return true;
        }

        var remainCost = getCostMoneyRemainInfo({ 
            Type: PorjectPlanDefault.Resource.originalData.Type, 
            PlanValue: PorjectPlanDefault.Resource.originalData.PlanValue 
        });

        if (remainCost) {
            result = ((parseFloat(value)) || 0) <= remainCost;
        }
        else {
            result = true;
        }

        return result;
    }, "目标成本的变更量不能大于可用计划金额!");

    jQuery.validator.addMethod("ChangedValueValidate", function (value, element, param) {
        if (pageData.ContentType == 1 || !pageData.ChangeFlag || PorjectPlanDefault.Resource.tabIndex != 5) {
            return true;
        }
        var changedValue = parseFloat(value) || 0;
        return changedValue >= (parseFloat(PorjectPlanDefault.Resource.originalData.RealCost) || 0);
    }, "目标成本不能小于实际成本！");

    //初始化弹出框
    var options = {
        width: 500,
        modal: true,
        closed: true,
        closable: false,
        title: ""
    };
    dialogContainer.show();
    dialogContainer.dialog(options);

    dialogForm.validate({
        rules: {
            Type: { required: true },
            Number: { required: function () { return !PorjectPlanDefault.ChangeFlag }, number: true, min: 1 },
            Duration: { required: true },
            Duty: { required: true },
            ResName: {
                required: true,
                onfocusout: false
            },
            PlanQuantity: {
                required: function () { return !pageData.ChangeFlag },
                number: true,
                PlanQuantityValidate: true
            },
            QuantityChangeValue: {
                required: function () {
                    return PorjectPlanDefault.ChangeFlag && !$("input[name='AddUpMoneyChangeValue']", dialogForm).val();;
                }, QuantityChangeValueValidate: true, number: true
            },
            AddUpMoneyChangeValue: {
                required: function () {
                    return PorjectPlanDefault.ChangeFlag && !$("input[name='QuantityChangeValue']", dialogForm).val();
                }, number: true
            },
            AllMoneyTotal: {
                AllMoneyTotalValidate: true
            },
            Unit: { required: PorjectPlanDefault.tabIndex == 0 },
            //                PriceChangeValue: { required: function() {
            //                   return  false;
            //                } ,MaterialPriceChangeValidate:true},
            //            ChangeValue: { required: function () { return PorjectPlanDefault.ChangeFlag; }, OutPlanValueValidate: true },
            MachineType: { required: true },
            //            Quantity: { required: true, number: true },

            MachineName: { required: true },
            WorkItemType: { required: true },
            BudgetPrice: { required: true, number: true, min: 0.01, max: 1000000000000000.00 },
            Price: {
                required: function () {
                    return PorjectPlanDefault.PriceMode == 'Edit';
                }
            },
            //                Price: { required: true,number:true , min: 0},

            PlanValue: {
                required: function () {
                    if (!pageData.ChangeFlag) {
                        return false;
                    }

                    if (PorjectPlanDefault.Resource.tabIndex == 5) {
                        var costType = $("input[name='Type']", $("#DialogDetailForm5")).val();
                        return costType != "2" && costType != "7" && costType != "8";
                    }

                    return true;
                }, CostValueValidate: "PlanValue"
            },

            // QualityRequirement: { required: true },
            Quantity: { required: function () { return !PorjectPlanDefault.ChangeFlag }, number: true, min: 1 },
            ChangeValue: { 
                required: function () {
                    if (!pageData.ChangeFlag) {
                        return false;
                    }

                    if (PorjectPlanDefault.Resource.tabIndex == 5) {
                        var costType = $("input[name='Type']", $("#DialogDetailForm5")).val();
                        return costType != "2" && costType != "7" && costType != "8";
                    }
                    return true;
                }, 
                number: true,
                CostValueValidate: function() {
                    return "ChangeValue";
                } 
            },
            ChangedValue: { ChangedValueValidate: true },
            Money: { required: true, number: true, min: 0.01, max: 100000000000000.00 },
            TotalMoney: { required: true, number: true, min: 0.00, max: 100000000000000.00, TotalMoneyValidate: true },
            Purpose: { required: true }
        },
        messages: {
            ResName: {
                required: "请输入材料！",
                remote: "请输入有效材料！"
            },
            PlanValue: {
                CostValueValidate: "计划金额不能超过可用计划金额！"
            },
            ChangeValue: {
                CostValueValidate: "变更金额不能超过可用计划金额！"
            },
            QuantityChangeValue: {
                required: "变更量或本次价差至少填写一个！"
            },
            AddUpMoneyChangeValue: {
                required: "变更量或本次价差至少填写一个！"
            }
        }
    });

    $("input[name='Money']", dialogForm).number(true, 2); //金额格式
    $("input[name='Number']", dialogForm).number(true, 0, "", ",");
    $("input[name='Quantity']", dialogForm).number(true, 0);
    $("input[name='PlanQuantity']", dialogForm).number(true, 2, ".", ",");
    $("input[name='PlanValue']", dialogForm).number(true, 2); //金额格式
    $("input[name='Price']", dialogForm).number(true, 2, ".", ","); //金额格式
    $("input[name='BudgetPrice']", dialogForm).number(true, 2, '.', ',');
    $("input[name='TotalMoney']", dialogForm).number(true, 2, ".", ","); //金额格式
    $("input[name='AllMoneyTotal']", dialogForm).number(true, 2, ".", ","); //金额格式
    $("input[name='QuantityChangedValue']", dialogForm).number(true, 2, ".", ",", true); //金额格式
    $("input[name='QuantityChangeValue']", dialogForm).number(true, 2, '.', ',', true);
    $("input[name='AddUpMoneyChangeValue']", dialogForm).number(true, 2, '.', ',', true);
    $("input[name='AddUpMoneyChangedValue']", dialogForm).number(true, 2, '.', ',', true);
    $("input[name='ChangeValue']", dialogForm).number(true, 0, '.', ',', true);
    $("input[name='ChangedValue']", dialogForm).number(true, 0, '.', ',', true);
    if (index == 4 || index == 5) {
        $("input[name='ChangeValue']", dialogForm).number(true, 2, '.', ',', true);
        $("input[name='ChangedValue']", dialogForm).number(true, 2, '.', ',', true);
    }

    //新增
    var btnAdd = {
        iconCls: 'icon-add',
        text: "新增",
        handler: function () {
            clearData(dialogForm);
            PorjectPlanDefault.Resource.originalData = null;
            dialogContainer.dialog({
                title: "新增" + dialogTitle, buttons:
                    [
                        {
                            text: "保存",
                            handler: function () {
                                if (!dialogForm.valid()) {
                                    return;
                                }
                                var newData = dialogForm.toJsonObject();
                                newData.ID = 0;
                                // var selectedTask = project.getSelected();
                                // var tempData = project;
                                // var ddd = project.getData();
                                // var taskUID = 'a4a70747-3895-4d28-be95-83dbc4aeeda2';
                                //  $.ProjectPlanValidate().Init({tasks:project.tasks.source});
                                // var taskObj = $.ProjectPlanValidate().GetTaskByUID(null,taskUID);
                                //$.ProjectPlanValidate().UpdateParantValue(project.getSelecteds()[0].UID, 'PlanOutput', newData.PlanValue);

                                //var dd=$.ProjectPlanValidate().RemainPlusValue(project.getSelecteds()[0].UID,"OutputValuePlan", 'PlanValue','Type', newData.Type);
                                //newData.TaskUID = project.getSelecteds()[0].UID;
                                newData.operationState = ironman3.operationState.added;

                                //                            detailGrid.datagrid('insertRow', {
                                //                                index: detailGrid.datagrid('getData').total,
                                //                                row: newData
                                //                            });
                                //originalRows添加新数据,insertRow是在当前页的第一行插入一条数据
                                var data = detailGrid.datagrid('getData');
                                var opts = detailGrid.datagrid('options');
                                var index = (opts.pageNumber - 1) * parseInt(opts.pageSize);
                                if (!data.originalRows) {
                                    data.originalRows = [];
                                }
                                newData.OrderNum = getMaxOrderNum(data.originalRows);
                                data.originalRows.push(newData);
                                //重新加减当前页面的数据
                                // if (PorjectPlanDefault.Mode != "Change") {
                                //     detailGrid.datagrid('loadData', data);
                                // }

                                detailGrid.datagrid('loadData', data);
                                //project.getSelecteds().Resources[tabUrl[index]].push(newData);

                                //var changeValue = newData.Price * newData.PlanQuantity;
                                //if (PorjectPlanDefault.ChangeFlag) {
                                //    changeValue = newData.Price * newData.QuantityChangedValue;
                                //}
                                CalMaterialCostTotal(newData, newData.AllMoneyTotal);

                                dialogContainer.dialog("close");
                            }
                        },
                        {
                            text: "保存后继续",
                            handler: function () {
                                if (!dialogForm.valid()) {
                                    return;
                                }
                                var newData = dialogForm.toJsonObject();
                                newData.ID = 0;
                                newData.AllMoneyTotal = (parseFloat(newData.TotalMoney) || 0);
                                cleaarTips(dialogForm);

                                newData.operationState = ironman3.operationState.added;
                                //                            detailGrid.datagrid('appendRow', newData);
                                //originalRows添加新数据,insertRow是在当前页的第一行插入一条数据
                                var data = detailGrid.datagrid('getData');
                                //                            var opts = detailGrid.datagrid('options');
                                //                            var index = (opts.pageNumber - 1) * parseInt(opts.pageSize);

                                if (!data.rows) {
                                    data.rows = [];
                                }
                                newData.OrderNum = getMaxOrderNum(data.originalRows);
                                data.originalRows.push(newData);

                                detailGrid.datagrid('loadData', data);
                                //var changeValue = newData.Price * newData.PlanQuantity;
                                //if (PorjectPlanDefault.ChangeFlag) {
                                //    changeValue = newData.Price * newData.QuantityChangedValue;
                                //}
                                CalMaterialCostTotal(newData, newData.AllMoneyTotal);
                                
                                PorjectPlanDefault.Resource.originalData = null;
                                clearData(dialogForm);
                            }
                        },
                        {
                            text: "返回",
                            handler: function () {
                                dialogContainer.dialog("close");
                            }
                        }
                    ]
            });
            dialogContainer.dialog("open");
        }
    };

    //编辑
    var btnEdit = {
        iconCls: 'icon-edit',
        text: "编辑",
        handler: function () {
            var rowData = detailGrid.datagrid('getSelected');
            var originalData = {};
            originalData = $.fn.extend({}, rowData, originalData);
            PorjectPlanDefault.Resource.originalData = originalData;
            ValidateAddFlag = false;

            var index = detailGrid.datagrid('getRowIndex', rowData);
            if (rowData == null) {
                return;
            }
            clearData(dialogForm);
            dialogForm.BindForm(rowData);
            //编辑成本总计划中的材料计划 记录 原始材料总价 用于 目标成本汇总
            if (PorjectPlanDefault.Resource.tabIndex == 6 && PorjectPlanDefault.contentType == 2) {
                if (!PorjectPlanDefault.Resource.material[rowData.MaterialID]) {
                    PorjectPlanDefault.Resource.material[rowData.MaterialID] = {};
                }

                var tempValue = rowData.Price * rowData.PlanQuantity;
                if (PorjectPlanDefault.ChangeFlag) {
                    if (rowData.Flag == 1) {
                        tempValue = rowData.Price * rowData.QuantityChangedValue;
                    }
                }

                PorjectPlanDefault.Resource.material[rowData.MaterialID].originalMoneyTotal = tempValue;
            }

            if (PorjectPlanDefault.Resource.tabIndex == 5 && rowData.Type == PorjectPlanDefault.MaterialType) {
                $("input[name=PlanValue]", dialogForm).attr({ readonly: "readonly", placeHolder: "填写材料计划后自动汇总" });
                if (PorjectPlanDefault.ChangeFlag) {
                    $("input[name=ChangeValue]", dialogForm).attr("disabled", "disabled"); //变更的时候 材料不能输入计划量和变更量
                }
            } else {
                $("input[name=PlanValue]", dialogForm).removeAttr("placeholder");
                $("input[name=ChangeValue]", dialogForm).removeAttr("disabled"); //非材料的 去除禁用
            }

            if (PorjectPlanDefault.Resource.tabIndex == 5 && (rowData.Type == 7 || rowData.Type == 8)) {
                $("input[name=PlanValue], input[name=ChangeValue]", dialogForm).attr({ placeholder: "非全费用时，填写计划产值后自动带出" });
            }
            else {
                if (rowData.Type != PorjectPlanDefault.MaterialType) {
                    $("input[name=PlanValue], input[name=ChangeValue]", dialogForm).removeAttr("placeholder");
                }
            }

            if (PorjectPlanDefault.PriceMode && PorjectPlanDefault.PriceMode == "Edit") {   //采购价维护
                dialogForm.disabledAll();
                if (!PorjectPlanDefault.ChangeFlag || (PorjectPlanDefault.ChangeFlag && !originalData.PlanQuantity)) {
                    $("input[name=Price]", dialogForm).removeAttr("readonly");
                }
            }

            if (PorjectPlanDefault.Resource.tabIndex == 6 && rowData.PlanQuantity && pageData.ChangeFlag) {
                $("input[materialAdd=true]", dialogForm).closest("tr").show();
                $("input[name=BudgetPrice]", dialogForm).attr("readonly", "readonly");
            }

            setSourceSelectValue(rowData, dialogForm);
            OutputRemainValueTips(1, rowData);  //计算材料总产值 剩余提示信息
            if (rowData.MaterialID) {
                MaterialRemainValueTips(rowData);  //材料剩余提示  
            }

            dialogContainer.dialog({
                title: "编辑" + dialogTitle, buttons:
                    [
                        {
                            text: "保存",
                            handler: function () {
                                if (!dialogForm.valid()) {
                                    return;
                                }

                                var newData = dialogForm.toJsonObject();
                                originalData.AddUpMoney = parseFloat(originalData.AddUpMoney) || 0;
                                originalData.AddUpMoneyChangeValue = parseFloat(originalData.AddUpMoneyChangeValue) || 0;
                                originalData.AddUpMoneyChangedValue = parseFloat(originalData.AddUpMoneyChangedValue) || 0;
                                originalData.AllMoneyTotal = (parseFloat(originalData.TotalMoney) || 0) + originalData.AddUpMoneyChangedValue;
                                newData.AddUpMoney = parseFloat(newData.AddUpMoney) || 0;
                                newData.AddUpMoneyChangeValue = parseFloat(newData.AddUpMoneyChangeValue) || 0;
                                newData.AddUpMoneyChangedValue = parseFloat(newData.AddUpMoneyChangedValue) || 0;
                                newData.AllMoneyTotal = (parseFloat(newData.TotalMoney) || 0) + newData.AddUpMoneyChangedValue;
                                var newResult = $.fn.extend({}, rowData, newData);
                                //设置数据编辑标记
                                if (newResult.operationState != ironman3.operationState.added) {
                                    newResult.operationState = ironman3.operationState.modified;
                                }

                                detailGrid.datagrid('updateRow', {
                                    index: index,
                                    row: newResult
                                });

                                // 计划产值（规费、税金）发生变化时自动更新目标成本的规费和税金。
                                if (PorjectPlanDefault.Resource.tabIndex == 4
                                    && pageData["TargetCost"]
                                    && (newData.Type == 7 || newData.Type == 8)) {
                                    $.each(pageData["TargetCost"], function (i, item) {
                                        if (item.Type == newData.Type) {
                                            item.PlanValue = newData.PlanValue;
                                            item.ChangeValue = newData.ChangeValue;
                                            item.ChangedValue = newData.ChangedValue;
                                            if (item.operationState != ironman3.operationState.added) {
                                                item.operationState = ironman3.operationState.modified;
                                            }
                                        }
                                    });
                                }

                                //重新加载当前页面的数据
                                var data = detailGrid.datagrid('getData');
                                //data.rows[index].operationState = ironman3.operationState.modified;
                                data.rows[index] = newResult;
                                if (PorjectPlanDefault.Resource.tabIndex == 6 && PorjectPlanDefault.contentType == 2) {
                                    var changeMoney = newData.AllMoneyTotal || 0;
                                    var oldMoney = originalData.AllMoneyTotal || 0;
                                    CalMaterialCostTotal(newData, changeMoney - oldMoney);
                                }

                                dialogContainer.dialog("close");
                                detailGrid.datagrid('loadData', data);
                            }
                        },
                        {
                            text: "返回",
                            handler: function () {
                                dialogContainer.dialog("close");
                            }
                        }
                    ]
            });


            dialogContainer.dialog("open");
        }
    };

    //删除
    var btnDelete = {
        iconCls: 'icon-remove',
        text: "删除",
        handler: function () {

            if (!window.confirm("确定删除该条数据？")) {
                return false;
            }

            var rowData = detailGrid.datagrid('getSelected');
            if (rowData == null)
                return;
            var index = detailGrid.datagrid('getRowIndex', rowData);

            var data = detailGrid.datagrid('getData');
            var opts = detailGrid.datagrid('options');
            var newindex = ((opts.pageNumber - 1) * parseInt(opts.pageSize)) + index;
            //设置数据删除标记
            if (rowData.operationState != ironman3.operationState.added) {
                rowData.operationState = ironman3.operationState.deleted;
            } else {
                data.originalRows.splice(newindex, 1);
            }
            //data.originalRows.splice(newindex, 1);
            //重新加载当前页面的数据
            //界面删除该列
            //重新加载当前页面的数据

            detailGrid.datagrid('deleteRow', index);
            // data.originalRows.splice(newindex, 1);
            detailGrid.datagrid('loadData', data);

            CalMaterialCostTotal(rowData, 0 - rowData.AllMoneyTotal);
        }
    };

    //查看
    var btnView = {
        iconCls: 'icon-search',
        text: "查看",
        handler: function () {
            var rowData = detailGrid.datagrid('getSelected');
            if (rowData == null) {
                return;
            }

            PorjectPlanDefault.Resource.originalData = rowData;
            clearData(dialogForm);
            dialogForm.disabledAll();
            dialogForm.BindForm(rowData);
            if (PorjectPlanDefault.Resource.tabIndex == 6 && rowData.PlanQuantity && pageData.ChangeFlag) {
                $("input[materialAdd=true]", dialogForm).closest("tr").show();
            }
            dialogContainer.dialog({
                title: "查看" + dialogTitle, buttons:
                    [
                        {
                            text: "返回",
                            handler: function () {
                                dialogContainer.dialog("close");
                            }
                        }
                    ]
            });
            setSourceSelectValue(rowData, dialogForm);
            dialogContainer.dialog("open");
        }
    };

    PorjectPlanDefault.gridBtnView = btnView;
    var toolbaropt = [btnView];
    //工具栏设置
    if (!PorjectPlanDefault.ProjectPlanSubmited) {
        switch (PorjectPlanDefault.Mode) {
            case "View":
                {
                    toolbaropt = [btnView];
                }
                break;
            case "Edit":
                {
                    toolbaropt = [btnAdd, '-', btnEdit, '-', btnDelete, '-', btnView];
                }
                break;
            case "Add":
                {
                    toolbaropt = [btnAdd, '-', btnEdit, '-', btnDelete, '-', btnView];
                }
                break;
        }
    }

    if (index == 4 || index == 5) {
        if (PorjectPlanDefault.Mode == "Edit" || PorjectPlanDefault.Mode == "Add") {
            toolbaropt = [btnEdit, '-', btnView];
        } else {
            toolbaropt = [btnView];
        }
        //        toolbaropt.splice(2, 1);
    }
    if (index == 6 && PorjectPlanDefault.PriceMode == "Edit") {
        toolbaropt = [btnEdit, '-', btnView];
    }

    if (PorjectPlanDefault.ChangeFlag || index == 4) {
        toolbaropt.splice(4, 2);
    }
    if (PorjectPlanDefault.ChangeFlag && index == 3) {
        toolbaropt = [btnView];
    }

    function setSourceSelectValue(rowData, dialogForm) {
        if (PorjectPlanDefault.Resource.tabIndex == 4) {
            $("#OutputType", dialogForm).resourceSelector("setValue", rowData.Type);
            $("#OutputType", dialogForm).resourceTreeSelector("readonly", true);
        }
        if (PorjectPlanDefault.Resource.tabIndex == 5) {
            $("#targetOutputType", dialogForm).resourceSelector("setValue", rowData.Type);
            $("#targetOutputType", dialogForm).resourceTreeSelector("readonly", true);
            oldValidateValue = rowData.PlanValue;
        }
        if (PorjectPlanDefault.Resource.tabIndex == 0) {
            $("#Type", dialogForm).resourceSelector("setValue", rowData.Type);
            $("#Type", dialogForm).resourceTreeSelector("readonly", true);
        }

        if (PorjectPlanDefault.Resource.tabIndex == 1 || PorjectPlanDefault.Resource.tabIndex == 6) {
            $("input[name=ResName]", dialogForm).attr("disabled", "disabled");
            if (PorjectPlanDefault.contentType == 2) {

                MaterialRemainValueTips(rowData.MaterialID);

            }

            oldValidateValue = rowData.PlanQuantity;
        }

    }


    function changeButtonEnable(options, div) {
        $("span .l-btn-empty", div).each(function (index, btn) {
            if (options[$(this).attr("class")]) {
                $(btn).closest("td").attr("style", "");
                $(btn).closest("td").next("td").attr("style", "");
            }
            else {
                $(btn).closest("td").attr("style", "display:none");
                $(btn).closest("td").next("td").attr("style", "display:none");
            }
        });
    }

    //行单击处理
    var onMasterRowClick = function (rowIndex, rowData) {
        if (rowData.GridDetailType == 9) {  //变更 编辑
            changeButtonEnable({
                "l-btn-empty icon-add": true,
                "l-btn-empty icon-edit": true,
                "l-btn-empty icon-search": true,
                "l-btn-empty icon-remove": true
            }, $("#tab" + index));
        }
        if (rowData.GridDetailType == 10) {  //变更新增
            changeButtonEnable({
                "l-btn-empty icon-add": true,
                "l-btn-empty icon-edit": true,
                "l-btn-empty icon-search": true,
                "l-btn-empty icon-remove": true
            }, $("#tab" + index));
        }
        if (rowData.GridDetailType == 12) { //变更 删除
            changeButtonEnable({
                "l-btn-empty icon-add": true,
                "l-btn-empty icon-edit": false,
                "l-btn-empty icon-search": true,
                "l-btn-empty icon-remove": false
            }, $("#tab" + index));
        }

    }

    //行双击处理
    var onrowDblclick = function (rowIndex, rowData) {
        dialogForm.BindForm(rowData);
        dialogForm.disabledAll();
        dialogForm.validate().resetForm();
        setSourceSelectValue(rowData, dialogForm);
        dialogContainer.dialog({ title: "查看" + dialogTitle, buttons: {} });
        dialogContainer.dialog("open");
    }



    //动态获取grid高度
    var bottomHeight = $("[name='bottom']").height() - 31;

    //初始化datagrid
    var gridOption = {
        loadFilter: pagerResourceFilter,
        toolbar: toolbaropt,
        title: "",
        loadMsg: "数据加载中，请稍后...",
        //iconCls: 'icon-edit', //图标
        height: bottomHeight,
        pagination: false, //分页控件 
        //sortName: 'code',  
        //sortOrder: 'desc', 
        idField: 'ID',
        singleSelect: true, //是否单选
        rownumbers: true,
        fitColumns: true, //列宽可以按数值比例自适应
        autoRowHeight: false,
        striped: false,
        nowrap: false,
        columns: currentColumn[index],
        // onDblClickRow: onrowDblclick,
        onClickRow: onMasterRowClick,
        showFooter: true,
        data: data,
        onLoadSuccess: function (data) {
            $("table.datagrid-btable tr", $("#tab6")).each(function (index, o) {
                // var targetMaterial = $(this).find("td[field=AddUpMoney] div a");
                // if (!targetMaterial) {
                //     return;
                // }
                // targetMaterial.powerFloat({
                //     width: 400,
                //     eventType: "hover",
                //     target: "#materialTip",
                //     hideCall: function () {
                //         $("#materialTip").hide();
                //     }
                // });
            });
        },
        rowStyler: function (index, row) {
            if (typeof row.Flag != 'undefined' && (row.Flag & 2) == 2) {
                return 'color: red;';
            }
            //if (row.RealCost > row.PlanValue)
            //{
            //    return 'background:red;color:white;';
            //}
        }
    };
    if (gridWidth[index]) {
        gridOption.width = gridWidth[index];
    }
    else {
        gridOption.fitColumns = false;
    }

    detailGrid.datagrid(gridOption);

    //        ,
    //        view: detailview
    //        ,
    //        detailFormatter: function (indexFormatter, row) {
    //            if (row.GridDetailType & 8 > 0 &&  PorjectPlanDefault.Mode  == "Change") {
    //                return '<div style="padding:2px"><table class="ddv' + row.ID + '"></table></div>';
    //            } else {

    //            }
    //        }
    //        ,
    //        onExpandRow: function (indexDetails, row) {
    //            var currentRowData = null;
    //            var changeUrl = ironman3.domains.appUrl + "/" + tabUrl[index] + "/GetByChangeId?dataId=" + row.ID;
    //            var ddv = $(this).datagrid('getRowDetail', indexDetails).find('table.ddv' + row.ID);
    //            var tempRowDetailsList = getGridRowDetailsById(row.ID);
    //        
    //            if (row.GridDetailType==9 && !row.IsExistSysChange && tempRowDetailsList) {
    //                changeUrl = "";
    //                currentRowData = tempRowDetailsList[0];
    //            }
    //            ddv.datagrid({
    //                loadFilter: function(currentRowData) {
    //                    if (currentRowData.BizObject) {
    //                       currentRowData = {
    //                            rows: [currentRowData.BizObject[0]]
    //                        };
    //                    }
    //                    return currentRowData;
    //                },
    //                url: changeUrl,
    //                data: currentRowData,
    //                fitColumns: true,
    //                singleSelect: true,
    //                rownumbers: true,
    //                loadMsg: '',
    //                height: 'auto',
    //                columns: currentColumn[index],
    //                onResize: function () {
    //                    detailGrid.datagrid('fixDetailRowHeight', indexDetails);
    //                },
    //                onLoadSuccess: function (data) {

    //                    if (row.gridRowDetails == null) {
    //                        data = data.rows;
    //                        gridRowDetails.push({ Id: row.ID,   rows:  data[0] });
    //                        row.gridRowDetails = ({ Id: row.ID, Data: data[0] });
    //                    }
    //                    setTimeout(function () {
    //                        detailGrid.datagrid('fixDetailRowHeight', indexDetails);
    //                    }, 0);
    //                }
    //            });
    //            detailGrid.datagrid('fixDetailRowHeight', indexDetails);
    //        }
    //});

    //    detailGrid.datagrid({
    //        rowStyler: function (index, row) {
    //            if (row.flag ^ 2 == 1 && PorjectPlanDefault.Resource.tabIndex==6) {
    //                return 'color:red;';
    //            }
    //        }
    //    });

    //    if (PorjectPlanDefault.Mode != "Change") {
    //        detailGrid.datagrid('options').view = detailGrid.datagrid.defaults.view;
    //    } else {
    //        detailGrid.datagrid('options').view = detailview;
    //    }
    $("#tab" + index + " .datagrid-toolbar").height(28);
    $("#tab" + index + " .datagrid-toolbar table").css({ "position": "absolute", "right": 0 });
    //    var titleinfo = '<div id="taskTitle' + index + '" name="taskTitle" style="height:28px;line-height:28px;text-indent:1em;font-weight: bold;"></div>';
    //    $("#tab" + index + " .datagrid-toolbar").append(titleinfo);
}

$(function () {

    var options = {
        dialogContainer: $("#materialDialog"),
        gridMaterialTable: $("#materialContainer"),
        materialForm: $('#materialForm')
    };

    var events = {
        sureEvent: function () {
            var selected = options.gridMaterialTable.commonDatagrid('getSelected');
            var currentDialog = $("#DialogDetailForm" + PorjectPlanDefault.Resource.tabIndex);

            if (!$.ProjectPlanTotalValidate.ValidataSingle("MaterialPlan", 'PlanQuantity', 'MaterialID', selected.ID)) {
                alert("当前材料已经选择,不能重复!");
                return false;
            }

            $("input[name=ResName]", currentDialog).val(selected.Name);
            $("input[name=MaterialID]", currentDialog).val(selected.ID);
            $("input[name=Model]", currentDialog).val(selected.Model);
            $("input[name=Unit]", currentDialog).val(selected.Unit);
            if (selected.Price) {
                $("input[name=Price]", currentDialog).val(selected.Price);
                var quantityChangedValue = parseFloat($("input[name=QuantityChangedValue]", currentDialog).val()) || 0;
                var price = parseFloat(selected.Price);
                var addUpMoneyChangedValue = parseFloat($("input[name=AddUpMoneyChangedValue]", currentDialog).val()) || 0;
                var totalMoney = quantityChangedValue * price;
                var allMoneyTotal = totalMoney + addUpMoneyChangedValue;
                $("input[name=TotalMoney]", currentDialog).val(totalMoney);
                $("input[name=AllMoneyTotal]", currentDialog).val(allMoneyTotal);
            }
            if (selected.BudgetPrice) {
                $("input[name=BudgetPrice]", currentDialog).val(selected.BudgetPrice);
            }
            
            setMaterialMoneyRemainTips({ MaterialID: selected.ID, PlanQuantity: 0 });
            // 设置当前可计划量
            // var remainPlanQuantity = parseFloat(selected.PlanQuantity);
            // if (!isNaN(remainPlanQuantity)) {
            //     remainPlanQuantity = remainPlanQuantity - (parseFloat(selected.RealQuantity) || 0);
            //     $("input[name=PlanQuantity]", currentDialog).next().show().text("剩余计划量：" + remainPlanQuantity);
            // }
            // else {
            //     $("input[name=PlanQuantity]", currentDialog).next().hide().text("");
            // }
            // $("input[name=RemainPlanQuantity]", currentDialog).val(isNaN(remainPlanQuantity) ? "" : remainPlanQuantity);

            return true;
        }
    };

    $("input[name=ResName]", $("#DialogDetail1")).focus(function () {
        var url = '/MaterialPlan/GetProjectPlanmaterial?ProjectID=' + pageData.ProjectID + PorjectPlanDefault.ExtendUrl;
        $.extend(options, { url: url });
        $.MaterialSelect(options, events);
    });
    $("input[name=ResName]", $("#DialogDetail6")).focus(function () {
        var url = '/MaterialPlan/GetProjectPlanmaterial?ProjectID=' + pageData.ProjectID + PorjectPlanDefault.ExtendUrl;
        $.extend(options, { url: url });
        $.MaterialSelect(options, events);
    });

    $('#materialForm').submit(
        function (e) {
            e.preventDefault();
            options.gridMaterialTable.commonDatagrid('reload');
        }
    );

    $("input[name=ChangeValue]").blur(function () {
        var form = $(this).closest("form");
        var beforeValue = parseFloat($("input[change=before]", form).val()) || 0;
        var changeValue = parseFloat($(this).val()) || 0;
        var changedValue = beforeValue + changeValue;
        $("input[change=after]", form).val(changedValue);
    });

    $("input[name=QuantityChangeValue]", $("#DialogDetailForm1")).blur(function () {
        var form = $(this).closest("form");
        var beforeValue = parseFloat($("input[change=before]", form).val()) || 0;
        var changeValue = parseFloat($(this).val()) || 0;
        var changedValue = beforeValue + changeValue;
        $("input[change=after]", form).val(changedValue);
    });

    $("input[name=PlanQuantity],input[name=QuantityChangeValue],input[name=AddUpMoneyChangeValue],input[name=Price]", $("#DialogDetailForm6")).blur(function () {
        if (pageData.ContentType == 1) {
            return;
        }
        var originalData = PorjectPlanDefault.Resource.originalData;
        if (PorjectPlanDefault.ChangeFlag) {
            var planQuantity = parseFloat($("input[name=PlanQuantity]", $("#DialogDetailForm6")).val()) || 0;
            var changeQuantity = parseFloat($("input[name=QuantityChangeValue]", $("#DialogDetailForm6")).val()) || 0;
            var quantity = planQuantity + changeQuantity;
            $("input[name=QuantityChangedValue]", $("#DialogDetailForm6")).val(quantity);
            var price = $("input[name=Price]", $("#DialogDetailForm6")).val();

            quantity = parseFloat(quantity) || 0;
            price = parseFloat(price) || 0;

            var total = quantity * price;
            $("input[name=TotalMoney]", $("#DialogDetailForm6")).val(total);

            var addup = $("input[name=AddUpMoneyChangeValue]", $("#DialogDetailForm6")).val();
            addup = parseFloat(addup) || 0;
            var addUpMoneyChangedValue = (parseFloat(PorjectPlanDefault.Resource.originalData ? PorjectPlanDefault.Resource.originalData.AddUpMoney : 0) || 0) + addup;
            $("input[name=AddUpMoneyChangedValue]", $("#DialogDetailForm6")).val(addUpMoneyChangedValue);
            $("input[name=AllMoneyTotal]", $("#DialogDetailForm6")).val(total + addUpMoneyChangedValue);
        }
        else {
            var quantity = $("input[name=PlanQuantity]", $("#DialogDetailForm6")).val();
            var price = $("input[name=Price]", $("#DialogDetailForm6")).val();

            quantity = parseFloat(quantity) || 0;
            price = parseFloat(price) || 0;

            //  $("input[name=AddUpMoney]", $("#DialogDetailForm6")).val(total-originalData);
            // var addup = $("input[name=AddUpMoney]", $("#DialogDetailForm6")).val();
            // addup = addup || 0;
            var total = quantity * price;
            $("input[name=TotalMoney]", $("#DialogDetailForm6")).val(total);
            $("input[name=AllMoneyTotal]", $("#DialogDetailForm6")).val(total);
        }
    });

    //    $("input[name=AddUpMoney]", $("#DialogDetailForm6")).change(function() {
    //        if (PorjectPlanDefault.ProjectMonthFlag) {
    //            return;
    //        }

    //        var total = $("input[name=TotalMoney]", $("#DialogDetailForm6")).val();
    //        var addup = $("input[name=AddUpMoney]", $("#DialogDetailForm6")).val();
    //        addup = addup || 0;
    //        total = total || 0;
    //        $("input[name=AllMoneyTotal]", $("#DialogDetailForm6")).val(total + parseFloat(addup));

    //    });
    // $("a[name=ShowHistory]").ShowHistory();
});



//目标成本剩余提示 123
function OutputRemainValueTips(flagNum, rowData) {
    if (PorjectPlanDefault.CostMonthFlag || PorjectPlanDefault.CostTotalFlag && PorjectPlanDefault.ChangeFlag) {
        if (PorjectPlanDefault.Resource.tabIndex == 5) {
            setCostMoneyRemainTips(rowData);
        }
        else if (PorjectPlanDefault.Resource.tabIndex == 4) {
            setOutputMoneyRemainTips(rowData);
        }
    }
}

//获取当前材料总费用
function getCurrentTotalPlanMoney(flagNum, rowData) {
    var result = 0;
    var currentMaterialList = pageData["MaterialPlan"];//project.getSelecteds()[0]["MaterialPlan"];
    if (currentMaterialList.length < 1) {
        return result;
    }
    for (var index in currentMaterialList) {
        if (flagNum == 1) {
            if (currentMaterialList[index].MaterialID == rowData.MaterialID) {
                continue; //编辑的时候 剩余量 需要加上本身的材料产值金额
            }
        }
        var currentData = currentMaterialList[index];
        if (!currentData.ID) {
            continue;
        }
        if (PorjectPlanDefault.ChangeFlag) {

            result = result + currentData.QuantityChangedValue * currentData.Price;
        } else {
            result = result + currentMaterialList[index].PlanQuantity * currentMaterialList[index].Price;
        }
    }


    return result;
}

//材料数量提示信息
function MaterialRemainValueTips(rowData) {
    if ((PorjectPlanDefault.CostMonthFlag || PorjectPlanDefault.CostTotalFlag && PorjectPlanDefault.ChangeFlag)
        && PorjectPlanDefault.Resource.tabIndex == 6) {
        setMaterialMoneyRemainTips(rowData);
    }
}

//材料剩余提示信息
function setMaterialMoneyRemainTips(rowData) {
    var remainInfos = getMaterialRemainInfos(rowData);
    var dialogForm = $("#DialogDetailForm6");

    $("input[name=PlanQuantity]", dialogForm).next().html("");
    $("input[name=QuantityChangeValue]", dialogForm).next().html("");
    $("input[name=QuantityChangedValue]", dialogForm).next().html("");
    $("input[name=AllMoneyTotal]", dialogForm).next().html("");
    $("input[name=TotalMoney]", dialogForm).next().html("");

    if (remainInfos) {
        if (remainInfos.costRemainValue) {
            if (pageData.ChangeFlag) {
                $("input[name=AllMoneyTotal]", dialogForm).next().html(" (可用计划金额: " + $.number(remainInfos.costRemainValue, 2) + ")");
            }
            else {
                $("input[name=TotalMoney]", dialogForm).next().html(" (可用计划金额: " + $.number(remainInfos.costRemainValue, 2) + ")");
            }
        }

        if (remainInfos.quantityRemainValue) {
            if (pageData.ChangeFlag) {
                $("input[name=QuantityChangeValue]", dialogForm).next().html(" (可用计划量: " + $.number(remainInfos.quantityRemainValue, 2) + ")");
            }
            else {
                $("input[name=PlanQuantity]", dialogForm).next().html(" (可用计划量: " + $.number(remainInfos.quantityRemainValue, 2) + ")");
            }
        }
    }

    if (pageData.ChangeFlag) {
        $("input[name=QuantityChangedValue]", dialogForm).next().html(" (实际收货量: " + $.number(rowData.RealQuantity || 0, 2) + ")");
        var html = $("input[name=AllMoneyTotal]", dialogForm).next().html();
        html += (html ? "<br/>" : "") + " (实际收货金额：" + $.number(rowData.RealCost || 0, 2) + ")";
        $("input[name=AllMoneyTotal]", dialogForm).next().html(html);
    }
}

function getMaterialRemainInfos(rowData) {
    var info = PorjectPlanDefault.ValidateInfos.getValidateInfo("MaterialPlan", "MaterialID", parseInt(rowData.MaterialID));
    var quantityRemainValue, costRemainValue;
    var dialogForm = $("#DialogDetailForm6");
    var remainInfos = null;

    if (info) {
        costRemainValue = (info.TotalPlanCost || 0) - (info.BeforeRealCost || 0);
        remainInfos = { costRemainValue: costRemainValue };

        if (pageData.ChangeFlag) {
            quantityRemainValue = (info.TotalPlanQuantity || 0) - (info.BeforeRealQuantity || 0) - (parseFloat(rowData.PlanQuantity) || 0);
        }
        else {
            quantityRemainValue = (info.TotalPlanQuantity || 0) - (info.BeforeRealQuantity || 0);
        }

        remainInfos.quantityRemainValue = quantityRemainValue;
    }

    return remainInfos;
}

//目标成本剩余提示信息
function setCostMoneyRemainTips(rowData) {
    var remainValue = getCostMoneyRemainInfo(rowData);
    var dialogForm = $("#DialogDetailForm5");
    if (remainValue) {
        if (pageData.ChangeFlag) {
            $("input[name=ChangeValue]", dialogForm).next().html(" (可用计划金额: " + $.number(remainValue, 2) + ")");
        }
        else {
            $("input[name=PlanValue]", dialogForm).next().html(" (可用计划金额: " + $.number(remainValue, 2) + ")");
        }
    }
    else {
        $("input[name=ChangeValue]", dialogForm).next().html("");
        $("input[name=PlanValue]", dialogForm).next().html("");
    }

    if (pageData.ChangeFlag) {
        $("input[name=ChangedValue]", dialogForm).next().html(" (已产生实际成本：" + $.number(rowData.RealCost || 0, 2) + ")");
    }
    else {
        $("input[name=ChangedValue]", dialogForm).next().html("");
    }
}

function getCostMoneyRemainInfo(rowData) {
    var info = PorjectPlanDefault.ValidateInfos.getValidateInfo("TargetCost", "Type", rowData.Type);
    var remainValue;
    var dialogForm = $("#DialogDetailForm5");
    if (info) {
        if (pageData.ChangeFlag) {
            remainValue = (info.TotalPlanValue || 0) - (info.BeforeRealCost || 0) - (parseFloat(rowData.PlanValue) || 0);
        }
        else {
            remainValue = (info.TotalPlanValue || 0) - (info.BeforeRealCost || 0);
        }
    }

    return remainValue;
}

function setOutputMoneyRemainTips(rowData) {
    var info = PorjectPlanDefault.ValidateInfos.getValidateInfo(tabUrl[PorjectPlanDefault.Resource.tabIndex], "Type", rowData.Type);
    var remainValue;
    var dialogForm = $("#DialogDetailForm" + PorjectPlanDefault.Resource.tabIndex);
    if (info) {
        if (pageData.ChangeFlag) {
            remainValue = (info.TotalPlanValue || 0) - (info.BeforeRealValue || 0) - (parseFloat(rowData.PlanValue) || 0);
            $("input[name=ChangeValue]", dialogForm).next().html(" (可用计划产值: " + $.number(remainValue, 2) + ")");
        }
        else {
            remainValue = (info.TotalPlanValue || 0) - (info.BeforeRealValue || 0);
            $("input[name=PlanValue]", dialogForm).next().html(" (可用计划产值: " + $.number(remainValue, 2) + ")");
        }
    }
    else {
        $("input[name=ChangeValue]", dialogForm).next().html("");
        $("input[name=PlanValue]", dialogForm).next().html("");
    }

    if (pageData.ChangeFlag) {
        $("input[name=ChangedValue]", dialogForm).next().html(" (已完成实际产值：" + $.number(rowData.RealValue || 0, 2) + ")");
    }
    else {
        $("input[name=ChangedValue]", dialogForm).next().html("");
    }

    return remainValue;
}

//cqy 文本变更
//function TextChangeHandle(el) {
//    var changevalue = $(el).val();
//    var afterEl = $(el).closest("tr").next("tr").find("input[change='after']");
//    var beforeEl = $(el).closest("tr").prev("tr").find("input[change='before']");
//    var reg = /^-?\d+\.?\d*$/;
//    if (reg.test(changevalue)) {
//        var aftevalue = Number(beforeEl.val()) + Number(changevalue);
//        //    if(aftevalue<0)
//        //    aftevalue=0;
//        afterEl.val(aftevalue);
//    }
//    else {
//        afterEl.val(beforeEl.val());
//    }

//}

//验证数字
function checknum(obj) {
    if (obj.value == "-")
        return;
    var re = /^-?\d+\.?\d*$/;
    var value = obj.value.substring(0, obj.value.length - 1);
    if (!re.test(obj.value)) {
        obj.value = value;
        obj.focus();
    } else {
        //限制01和-01输入
        var firstvalue = obj.value.substr(0, 1);
        var minus_firstvalue = obj.value.substr(0, 2);
        var isNum = /^\d+$/.test(obj.value.substr(1, 1));
        var minus_isNum = /^\d+$/.test(obj.value.substr(2, 1));
        if ((firstvalue == "0" && isNum) || (minus_firstvalue == "-0" && minus_isNum)) {
            obj.value = value;
            obj.focus();
        }
    }
}

function ChangeFormEdit(dialogForm, mode) {

    if (mode == "add") {
        $("input[change='before']", dialogForm).attr("readonly", "readonly");
        $("input[change='after']", dialogForm).attr("readonly", "readonly");
        //$("input[name='WarningLine']", dialogForm).removeAttr("disabled");
        //$("input[name='MoneyWarningLine']", dialogForm).removeAttr("disabled");
        $("input[name*='Time']", dialogForm).bind("focus", function (e) { new WdatePicker(); });
    }

    if (mode == "edit") {
        $("input[change!='value']", dialogForm).attr("readonly", "readonly");
        //$("input[name='WarningLine']", dialogForm).attr("disabled", "disabled");
        //$("input[name='MoneyWarningLine']", dialogForm).attr("disabled", "disabled");
        $("textarea", dialogForm).attr("readonly", "readonly");
        $("input[name*='Time']", dialogForm).unbind("focus");
    }
    //$("input[change='value']", dialogForm).bind('input propertychange', function () {
    //    checknum(this);
    //    TextChangeHandle(this);
    //});

}
//cqy end

function cleaarTips(dialogForm) {

    $("span[name=validateTips]", dialogForm).html("");
    if (PorjectPlanDefault.Mode == "Add" || PorjectPlanDefault.Mode == "Edit") {
        $("input[name=ResName]").attr("disabled", false);
        $("input[type='text'], textarea", dialogForm).removeAttr("readonly");
        $("input[name='WarningLine']", dialogForm).attr("readonly", "readonly");
        $("input[name='MoneyWarningLine']", dialogForm).attr("readonly", "readonly");
        $("input[name='Model']").attr("readonly", "readonly");
        $("input[name='Unit']").attr("readonly", "readonly");
        $("input[name='Unit']", $("#DialogDetail2")).removeAttr("readonly");
        $("input[name*='Time']", dialogForm).bind("focus", function (e) { new WdatePicker(); });
        $("input[name=TotalMoney]").attr("readonly", "readonly");
        $("input[name='Price']").closest("tr").addClass("bine_change");
    }
    else {
        dialogForm.disabledAll();
        $("input[name='WarningLine']", dialogForm).attr("disabled", "disabled");
        $("input[name='MoneyWarningLine']", dialogForm).attr("disabled", "disabled");
    }

    if (PorjectPlanDefault.PriceMode == "Edit") {
        $("input[name='Price']").removeAttr("readonly");
    }
    else {
        $("input[name='Price']").attr("readonly", "readonly");
    }
}

function clearData(dialogForm) {
    dialogForm.ResetForm();
    $("#AddUpMoney", dialogForm).val("0");
    dialogForm.validate().resetForm();
    cleaarTips(dialogForm);
    
    //cqy 判断是否是变更
    if (PorjectPlanDefault.ChangeFlag) {
        ChangeFormEdit(dialogForm, "add");
    }

    switch (PorjectPlanDefault.Resource.tabIndex) {
        case 0:
            $("#Type", dialogForm).resourceSelector("setValue", "");
            $("#Type", dialogForm).resourceTreeSelector("readonly", false);
            break;
        case 1:
            $("#MaterialID", dialogForm).val("");
            break;
        case 4:
            $("#OutputType", dialogForm).resourceSelector("setValue", "");
            $("#OutputType", dialogForm).resourceTreeSelector("readonly", false);
            break;
        case 5:
            $("#targetOutputType", dialogForm).resourceSelector("setValue", "");
            $("#targetOutputType", dialogForm).resourceTreeSelector("readonly", false);
            break;
        case 6:
            $("input[name='MaterialID']", dialogForm).val("");
            $("input[name='AddUpMoney']", dialogForm).val("");
            break;
        default:
            break;
    }

    if (PorjectPlanDefault.Resource.tabIndex == 5) {
        $("#OutputType").resourceSelector("setValue", "");
        $("#OutputType").resourceTreeSelector("readonly", false);
    }

    if (PorjectPlanDefault.Resource.tabIndex == 0) {
        $("#Type").resourceSelector("setValue", "");
        $("#Type").resourceTreeSelector("readonly", false);
    }
    if (PorjectPlanDefault.Resource.tabIndex == 6 && PorjectPlanDefault.ChangeFlag) {
        $("input[name=ResName]").attr("readonly", "readonly");
        $("input[materialAdd=true]", dialogForm).closest("tr").hide();
    }
    //OutputRemainValueTips(0);  //计算材料总产值 剩余提示信息
}


//function SetChangeType(taskObj) {
//    if (taskObj.Resources && taskObj.ParentTaskUID == "-1") {
//        $.each(taskObj.Resources, function (name, itemResource) {
//            $(itemResource).each(function (index, resource) {
//                if (resource.operationState != ironman3.operationState.unchange) {
//                    var tabindexValue = Math.pow(2, GetTabIndex(name) + 1);
//                    changeType = changeType | tabindexValue;
//                }
//            });
//        });
//    }
//    return changeType;
//}

//1：节点任务；2：人工计划；4：材料计划；8：机械计划；16：工作内容；32：计划产值；64：质量要求；128：资金要求
function GetTabIndex(value) {
    var result = 0;
    $(tabUrl).each(function (index, item) {
        if (value == item) {
            result = index;
        }
    });
    return result;
}
function GetTabIndexByTitle(titel) {
    var result = 0;
    $(tabstype).each(function (index, item) {
        if (titel == item) {
            result = index;
        }
    });
    return result;
}

function GetTabIndexByTitleType(titeTypel) {
    var result = 0;
    $(tabUrl).each(function (index, item) {
        if (titeTypel == item) {
            result = index;
        }
    });
    return result;
}

function DateFormatFun(val) {

    return ChangeDate(val);
}


function InitTaskResource(task, ResourceName) {
    if (!pageData[ResourceName]) {
        pageData[ResourceName] = [];
    }
}

function FindResourceName(resourceType) {
    if (resourceType == "Tasks" || resourceType == "children") {
        return "节点任务";
    }

    var typeIndex = -1;
    $.each(tabUrl, function (index, item) {
        if (item == resourceType) {
            typeIndex = index;
        }
    });
    return tabstype[typeIndex];
}


//去除NAN值
function settingsData(ResourceName, data) {
    if (ResourceName == "MaterialPlan") {

        for (var index in data) {

            if ($.number(data[index].PriceChangedValue, 2, '.', '') == 0.00) {
                data[index].PriceChangedValue = 0;
            }
            if ($.number(data[index].Quantity, 2, '.', '') == 0.00) {
                data[index].Quantity = 0;
            }
        }
    }
    return data;
}

function CalMaterialCostTotal(data, changeMoney) {
    changeMoney = parseFloat(changeMoney) || 0;
    if (PorjectPlanDefault.Resource.tabIndex == 6 && PorjectPlanDefault.contentType == 2) {

        var updateTargetMaterialCost = GetTargetCost(PorjectPlanDefault.MaterialType, data);
        updateTargetMaterialCost.PlanValue = parseFloat(updateTargetMaterialCost.PlanValue) || 0;
        updateTargetMaterialCost.ChangeValue = parseFloat(updateTargetMaterialCost.ChangeValue) || 0;
        updateTargetMaterialCost.ChangedValue = parseFloat(updateTargetMaterialCost.ChangedValue) || 0;
        if (PorjectPlanDefault.ChangeFlag) {
            updateTargetMaterialCost.ChangeValue += changeMoney;
            updateTargetMaterialCost.ChangedValue += changeMoney;
        }
        else {
            updateTargetMaterialCost.PlanValue = updateTargetMaterialCost.PlanValue + changeMoney;
        }

        //if (PorjectPlanDefault.ChangeFlag) {
        //    updateTargetMaterialCost.PlanValue = parseFloat(updateTargetMaterialCost.PlanValue)+ changeMoney;
        //} else {
        //    updateTargetMaterialCost.PlanValue = parseFloat(updateTargetMaterialCost.PlanValue) + changeMoney;
        //}

        if (updateTargetMaterialCost.operationState != ironman3.operationState.added) {

            updateTargetMaterialCost.operationState = ironman3.operationState.modified;

        }
    }
}

function GetTargetCost(type, data) {
    //var task = project.getSelecteds()[0];

    var url = ironman3.domains.appUrl + "/TargetCost/ListByProjectPlan?outputOption=0&id=" + PorjectPlanDefault.UID + "&changeFlag=" + pageData.ChangeFlag;

    loadGridMethod(url, "TargetCost");

    for (var index in pageData["TargetCost"]) {
        //pageData["TargetCost"][index].TaskUID = data.TaskUID;
        if (pageData["TargetCost"][index].Type == type) {
            return pageData["TargetCost"][index];
        }
    }
}

function bindShowHistory(data) {
    var table = $('<table width="100%" border="0" cellspacing="0" cellpadding="0"><tr class="liucheng_title"><td width="15%">原始值</td><td width="10%">变更值</td><td width="10%">创建时间</td></tr></table>');
    for (var i = 0; i < data.length; i++) {
        var trObj = data[i];
        var tr = $("<tr></tr>");
        if (i != 0) {
            tr.append('<td>--</td>');
        } else {
            tr.append('<td>' + trObj.OriginalValue + '</td>');
        }
        tr.append('<td>' + trObj.ChangeValue + '</td>');
        tr.append('<td>' + FormatDate(trObj.CreateTime) + '</td>');

        table.append(tr);


    }

    return $("<p>").append(table.clone()).html();
}

function materialOver(obj) {
    var materialID = $(obj).attr("id");

    var result = "";
    if (PorjectPlanDefault.MaterialTips[materialID]) {
        result = PorjectPlanDefault.MaterialTips[materialID];
    } else {
        if (materialID && materialID > 0) {
            $.ironman3Ajax({
                url: '/ChangeData/ShowHistory?dataId=' + materialID,
                async: false,
                success: function (source) {
                    result = bindShowHistory(source);
                    PorjectPlanDefault.MaterialTips[materialID] = result;
                }
            });
        }
    }
    $("#materialTip").html(result);

}

function formatCurrency(value, row, index) {
    return !value ? '' : $.number(value, 2, '.', ',');
}




function getMaxOrderNum(obj) {
    var maxResult = 1;

    for (var i = 0; i < obj.length; i++) {
        if (obj[i].OrderNum > maxResult) {
            maxResult = obj[i].OrderNum;
        }
    }
    return maxResult + 1;
}
