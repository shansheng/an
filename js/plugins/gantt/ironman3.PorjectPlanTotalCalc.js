(function ($) {

    $.ProjectPlanTotalValidate = {
        allTasks: project._TaskUIDs,
        //获取节点
        GetTaskByUID: function (taskUID) {
            if (taskContainer == null) {
                //taskContainer = defaultSettings.tasks[0];
                taskContainer = project._TaskUIDs;
            }
            $.each(taskContainer, function (UID, singleTask) {
                if (UID == taskUID) {
                    return singleTask;
                }
            });
        },
        GetSelfTaskTotalPlanWork: function (name, selfTaskUID) {  //排除自己
            var totalValue = 0;
            $.each(project._TaskUIDs, function (UID, singleTask) {
                if (singleTask && singleTask.Name == name && UID != selfTaskUID) {
                    if (singleTask.PlanWork) {
                        totalValue = totalValue + singleTask.PlanWork;
                    }
                }
            });
            return totalValue;
        },
        GetSelfTaskTotalMaterial: function (materialId) {  //排除自己
            var totalValue = 0;
            if (project.getSelecteds()[0]["MaterialPlan"] == null || project.getSelecteds()[0]["MaterialPlan"].length < 1) {
                return totalValue;
            }
            var selectedMaterialResource = project.getSelecteds()[0]["MaterialPlan"];

            $.each(selectedMaterialResource, function (UID, singleMaterial) {
                if (singleMaterial && singleMaterial.MaterialID != materialId) {
                    totalValue = totalValue + singleMaterial.PlanQuantity;
                }
            });
            return totalValue;
        },
        ValidataSingle: function (sourceName, calcValuePara, typeElem, typeValue) {
            var result = true;
            //if (!selectedTask) {
            //    return result;
            //}
            //if (selectedTask.Resources) {
            //    $.each(selectedTask.Resources, function (name, singleTask) {
            //        if (name == sourceName && result) {
            //            for (var index in singleTask) {
            //                if (singleTask[index][typeElem] == typeValue && singleTask[index]["operationState"] != ironman3.operationState.deleted) {
            //                    result = false;
            //                }
            //            }
            //        }
            //    });
            //}

            $.each(pageData[sourceName], function (i, item) {
                if (item[typeElem] == typeValue && item.operationState != ironman3.operationState.deleted) {
                    result = false;
                }
            });

            return result;
        }

    };
})(jQuery);

