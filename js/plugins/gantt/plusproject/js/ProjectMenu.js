var ProjectMenu = function () {
    ProjectMenu.superclass.constructor.call(this);

}

mini.extend(ProjectMenu, mini.Menu, {
    _create: function () {
        ProjectMenu.superclass._create.call(this);

        var menuItems = [
            { type: "menuitem", iconCls: "icon-goto", text: mini.Gantt.Goto_Text, name: "goto" },
            '-',
            { type: "menuitem", iconCls: "icon-upgrade", text: mini.Gantt.UpGrade_Text, name: "upgrade" },
            { type: "menuitem", iconCls: "icon-downgrade", text: mini.Gantt.DownGrade_Text, name: "downgrade" },
            '-',
            { type: "menuitem", iconCls: "icon-add", text: mini.Gantt.Add_Text, name: "add" },
            { type: "menuitem", iconCls: "icon-edit", text: mini.Gantt.Edit_Text, name: "edit" },
            { type: "menuitem", iconCls: "icon-remove", text: mini.Gantt.Remove_Text, name: "remove" },
            '-',
            { type: "menuitem", iconCls: "icon-zoomin", text: mini.Gantt.ZoomIn_Text, name: "zoomin" },
            { type: "menuitem", iconCls: "icon-zoomout", text: mini.Gantt.ZoomOut_Text, name: "zoomout" }
        ];
        this.setItems(menuItems);

        this.goto = mini.getbyName("goto", this);
        this.zoomIn = mini.getbyName("zoomin", this);
        this.zoomOut = mini.getbyName("zoomout", this);

        this.upgrade = mini.getbyName("upgrade", this);
        this.downgrade = mini.getbyName("downgrade", this);
        this.add = mini.getbyName("add", this);
        this.edit = mini.getbyName("edit", this);
        this.remove = mini.getbyName("remove", this);

        this.goto.on("click", this.__OnGoto, this);
        this.zoomIn.on("click", this.__OnZoomIn, this);
        this.zoomOut.on("click", this.__OnZoomOut, this);
        this.upgrade.on("click", this.__OnUpgrade, this);
        this.downgrade.on("click", this.__OnDowngrade, this);
        this.add.on("click", this.__OnAdd, this);
        this.edit.on("click", this.__OnEdit, this);
        this.remove.on("click", this.__OnRemove, this);
    },
    __OnGoto: function (e) {
        var gantt = this.owner;
        var task = gantt.getSelected();
        if (task) {
            gantt.scrollIntoView(task);
        }
    },
    __OnZoomIn: function (e) {
        var gantt = this.owner;
        gantt.zoomIn();
    },
    __OnZoomOut: function (e) {
        var gantt = this.owner;
        gantt.zoomOut();
    },
    __OnUpgrade: function (e) {
        upgradeTask(this.owner);
        //        var gantt = this.owner;
        //        var task = gantt.getSelected();
        //        var level = isLimitTask(project.getParentTask(task));
        //        if (level == 1) {
        //            alert("无法升级");
        //            return;
        //        }
        //        if (task) {
        //            gantt.upgradeTask(task);
        //        }

    },
    __OnDowngrade: function (e) {
        downgradeTask(this.owner);

        //        var gantt = this.owner;
        //        var task = gantt.getSelected();
        //        var level = isLimitTask(task);
        //        if (level == 1) {
        //            alert("无法降级");
        //            return;
        //        }
        //        if (task) {
        //            gantt.downgradeTask(task);
        //        }

    },
    __OnAdd: function (e) {
        addTask(this.owner);
        //        var gantt = this.owner;
        //        var targetTask = gantt.getSelected();
        //        var level = isLimitTask(targetTask);
        //        if (level == 1) {
        //            alert("无法新增");
        //            return;
        //        }
        //        var task = gantt.newTask();
        //        task.Name = '<新增任务>';    //初始化任务属性
        //        //加到选中任务之内        
        //        task.operationState = ironman3.operationState.added;
        //        gantt.addTask(task, "add", PorjectPlanDefault.AddTargetTask);
    },
    __OnEdit: function (e) {
        var gantt = this.owner;
        var task = gantt.getSelected();
        if (task) {

        }
    },
    __OnRemove: function (e) {
        removeTask(this.owner);

//        var gantt = this.owner;
//        var task = gantt.getSelected();
//        var level = isLimitTask(task);
//        if (level == 1) {
//            alert("无法删除");
//            return;
//        }
//        if (task) {
//            if (confirm("确定删除任务 \"" + task.Name + "\" ？")) {
//                removeTaskUID.push(task);
//                gantt.removeTask(task);
//                //           task.operationState = ironman3.operationState.deleted;
//                //         project.addTaskCls(task, "displanNone");
//            }
//        } else {
//            alert("请选择要删除的任务");
        //        }
        
    }

});