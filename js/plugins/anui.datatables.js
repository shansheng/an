/*----------------------------------------
* Copyright (c) 2018 菠萝工作室
* 网站：http://www.0non0.com
* Date: 2018-11-18
* Creater:Cqy
----------------------------------------*/

/*------通用的控件库 by:cqy 2018-11-18------*/
  /**------列表DataTable的封装------*/
(function ($) {
    $.lang={
        cn: {
            "lengthMenu": "每页显示 _MENU_ 条",
            "zeroRecords": "无数据",
            "info": "从 _START_ 到 _END_ 条,总共 _TOTAL_ 条记录",
            "infoEmpty": "没有记录",
            "sInfoFiltered": "(_MAX_总条目筛选)",
            "processing": '<div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>正在加载...',
            "sSearch":"搜索",
            "oPaginate": {
                "sFirst" : "第一页",
                "sPrevious": '<i class="demo-psi-arrow-left"></i>',
                "sNext": '<i class="demo-psi-arrow-right"></i>',
                "sLast" : "最后一页"
            }
        }
    };

    var dataSet = [
        ['Trident','Internet Explorer 4.0','Win 95+','4','X'],
        ['Trident','Internet Explorer 5.0','Win 95+','5','C'],
        ['Trident','Internet Explorer 5.5','Win 95+','5.5','A'],
        ['Trident','Internet Explorer 6','Win 98+','6','A']];

    $.fn.anDataTable = function (options) {
        var el = $(this);
        if (el.length == 0) return;
        var defaults =  {
            "responsive": true,
            "language": $.lang.cn,
            "processing":true,
            "lengthMenu":[[10,15,20, -1], ["10", "15", "20", "全部"]],
            "displayLength":10,
            "dom":'<"top"f<"clear">>rt<"bottom"ilp<"clear">>',
            "serverSide":true,
            // "operateColumn":[
            //     {"class": ".edit-column .btn-danger", onSuccess: function (row, data, index, t) {
            //         //alert("这是删除！")
            //     }},
            //     {"class":".edit-column .btn-mint",onSuccess:function(row, data, index,t){
            //         //alert("这是编辑！")
            //     }}
            // ],
            "operateContent":'<div class="demo-nifty-btn edit-column"><button class="btn btn-danger">删除</button>'+
                '<button class="btn btn-mint">修改</button></div>',
            "editorColumn": {
                "title": "操作",
                "class": "text-center editor-td",
                "orderable": false,
                "data": null,
                "orderData":2,
                "defaultContent":''
            },
            createdRow: function (row, data, index) {
                if (options.operateColumn != "" && options.operateColumn != null) {
                    $.each(options.operateColumn, function (n, item) {
                        var operbutton=$(item.class, row)
                        operbutton.click(function () {
                            item.onSuccess(row, data, index,this);
                        });
                    });
                }
            },
            "data": dataSet,
            // "ajax": {
            //     "url": options.url,
            //     "type": "post",
            //     //"dataSrc": "MainData.aaData",
            //     "data": function (d) {
            //         return {"length": d.length, "start": d.start,"title": d.search.value}
            //     }
            // }
        }
        var opt = $.extend(true, defaults,options);
        if (opt.operateColumn != "" && opt.operateColumn != null) {
            opt.editorColumn.defaultContent=opt.operateContent;
            opt.columns.push(opt.editorColumn);
        }
        var dt = el.DataTable(opt);
        return dt;
    };
})(jQuery);