
///�������� �������β��Ű� ���ڹ��̼ƻ�ҳ��
function DataReset(dataTask, ChangeFlag) {



    for (var index in dataTask) {

        if (typeof dataTask[index].UID == 'undefined') {
            continue;
        }

        //if (dataTask[index].Flag == 0 && dataTask[index].ParentTaskUID != null && !ChangeFlag) {

        //    dataTask[index].ChangedValue = dataTask[index].PlanWork = dataTask[index].PlanWork + dataTask[index].ChangeValue;
        //    dataTask[index].ChangeValue = 0;
        //}

        //if (dataTask[index].ParentTaskUID == null || dataTask[index].ParentTaskUID == "") {

        //    var rootDeptNameArray = new Array();
        //    var array = new Array();
        //    if (dataTask[index].Department == null) {
        //        dataTask[index].ResponsibleDept = dataTask[index].Department; //����ID
        //        array = dataTask[index].Department.split(',');
        //    } else {
        //        array = dataTask[index].ResponsibleDept.split(',');
        //    }

        //    for (var i = 0; i < array.length; i++) {
        //        rootDeptNameArray.push(GetDepartmentNameByID(array[i]));
        //    }

        //    dataTask[index].Department = rootDeptNameArray.join(","); //��������
        //} else {
        //    if (dataTask[index].Department == null || dataTask[index].Department == "") {
        //        dataTask[index].Department = dataTask[index].Name = GetDepartmentNameByID(dataTask[index].ResponsibleDept); //��������
        //    } else {
        //        dataTask[index].ResponsibleDept = dataTask[index].Department;  //����ID
        //        dataTask[index].Department = GetDepartmentNameByID(dataTask[index].Department); //��������
        //    }

        //}
        //if (dataTask[index].children != null && dataTask[index].children.length > 0) {
        //    this.DataReset(dataTask[index].children, ChangeFlag);
        //}
        //if (dataTask[index].ChangeValue) {
        //    dataTask[index].ChangedValue = dataTask[index].PlanWork + dataTask[index].ChangeValue;
        //}

    }
    var adf = 12;
    return dataTask;
}
///�������� �������β��Ű� ���ڹ��̼ƻ��б�ҳ��
function DataResetForList(dataBizObject) {
    //var rows = dataBizObject.rows;
    //for (var index in rows) {
    //    if (typeof rows[index].cell == 'undefined') {
    //        continue;
    //    }
    //    if (rows[index].cell.ResponsibleDept.indexOf(",") > -1) {   //������� 
    //        var rootDeptNameArray = new Array();
    //        var array = new Array();
    //        array = rows[index].cell.ResponsibleDept.split(',');
    //        for (var i = 0; i < array.length; i++) {
    //            rootDeptNameArray.push(GetDepartmentNameByID(array[i]));
    //        }
    //        rows[index].cell.ResponsibleDept = rootDeptNameArray.join(","); //��������
    //    } else {
    //        rows[index].cell.ResponsibleDept = GetDepartmentNameByID(rows[index].cell.ResponsibleDept); //��������
    //    }
    //}

}

$(function () {
    $("input[name='WarningLine']").powerFloat({
        target: "/Template/WarnLine.html",
        targetMode: "ajax",
        eventType: "click",
        zIndex: 9999
    });
    $("input[name='MoneyWarningLine']").powerFloat({
        target: "/Template/MoneyWarningLine.html",
        targetMode: "ajax",
        eventType: "click",
        zIndex: 9999
    });
})


///������Ӵ���
function AddUpDataSet(data, resourceName, ChangeFlag) {

    for (var index in data) {

        if (data[index].Flag == 1) {
            continue;
        }

        //switch (resourceName) {
        //    case "MaterialPlan":
        //        data[index].QuantityChangedValue = data[index].PlanQuantity = (data[index].PlanQuantity || 0) + (data[index].QuantityChangeValue || 0);
        //        data[index].PriceChangedValue = data[index].Price = (data[index].Price || 0) + (data[index].PriceChangeValue || 0);
        //        data[index].QuantityChangeValue = data[index].PriceChangeValue = 0;
        //        continue;
        //    case "TargetCost":
        //        data[index].ChangedValue = data[index].PlanValue = (data[index].PlanValue|| 0) + (data[index].ChangeValue || 0);
        //        data[index].ChangeValue = 0;
        //        continue;
        //    case "OutputValuePlan":
        //        data[index].ChangedValue = data[index].PlanValue = (data[index].PlanValue || 0) + (data[index].ChangeValue || 0);
        //        data[index].ChangeValue = 0;
        //        continue;
        //    case "LabourPlan":
        //        data[index].ChangedValue = data[index].Number = (data[index].Number || 0) + (data[index].ChangeValue || 0);
        //        data[index].ChangeValue = 0;
        //        continue;
        //    case "MachinePlan":
        //        data[index].ChangedValue = data[index].Quantity = (data[index].Quantity || 0) + (data[index].ChangeValue || 0);
        //        data[index].ChangeValue = 0;
        //        continue;
        //}

    }
    return data;
}


function formatCurrency(value, row, index) {
    var i = parseFloat(value);
    return isNaN(i) ? '' : $.number(value, 2);
}

function formatInt(value, row, index) {
    var i = parseInt(value);
    return isNaN(i) ? "" : $.number(value, 0);
}