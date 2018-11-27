<template>
<div>
<div class="table-responsive">
    <table id="dg"  data-options="
                rownumbers:true,
                singleSelect:true,
                autoRowHeight:false,
                pagination:true,
                fitColumns:true">
        <thead>
        <tr>
            <th  data-options="field:'inv',sortable:true" width="80">工程名称 </th>
            <th field="date" width="100">审核状态</th>
            <th field="name" width="80">合同金额</th>
            <th field="amount" width="80" align="right">Amount</th>
            <th field="price" width="80" align="right">Price</th>
            <th field="cost" width="100" align="right">Cost</th>
            <th field="note" width="110">Note</th>
        </tr>
        </thead>
    </table>
</div>
<div class="table-responsive">
    <table id="dg2"  data-options="
                rownumbers:true,
                singleSelect:true,
                autoRowHeight:false,
                pagination:true,
                fitColumns:true">
        <thead>
        <tr>
            <th data-options="field:'Id',sortable:true,width:1">Id </th>
            <th data-options="field:'Name',sortable:true,width:2">Name</th>
        </tr>
        </thead>
    </table>
</div>
</div>
</template>
<script>
 $(document).ready(function () {
		subdemo.init();
	    $('#dg2').datagrid({
		 url:'http://192.168.0.9:8080/Home/GetUserList',
		 queryParams: {
		 "length" : function(){
			return $('#dg2').datagrid("getPager").pagination("options").pageSize;
		 },
		 "start" : function(){
			var size=$('#dg2').datagrid("getPager").pagination("options").pageSize;
			var start=$('#dg2').datagrid("getPager").pagination("options").pageNumber;
			return (start-1)*size;
		 }
		},
		loadFilter:function(res){
			return {
			  total:res.recordsTotal,
			  rows:res.data
		  };
		}
		//  loader:function(d){
        //      return {"length": d.rows, "start": 0}
		//  }
	    });
    });


    (function($){
        function pagerFilter(data){
            if ($.isArray(data)){    // is array
                data = {
                    total: data.length,
                    rows: data
                }
            }
            var dg = $(this);
            var state = dg.data('datagrid');
            var opts = dg.datagrid('options');
            if (!state.allRows){
                state.allRows = (data.rows);
            }
            var start = (opts.pageNumber-1)*parseInt(opts.pageSize);
            var end = start + parseInt(opts.pageSize);
            data.rows = $.extend(true,[],state.allRows.slice(start, end));
            return data;
        }

        var loadDataMethod = $.fn.datagrid.methods.loadData;
        $.extend($.fn.datagrid.methods, {
            clientPaging: function(jq){
                return jq.each(function(){
                    var dg = $(this);
                    var state = dg.data('datagrid');
                    var opts = state.options;
                    opts.loadFilter = pagerFilter;
                    var onBeforeLoad = opts.onBeforeLoad;
                    opts.onBeforeLoad = function(param){
                        state.allRows = null;
                        return onBeforeLoad.call(this, param);
                    }
                    dg.datagrid('getPager').pagination({
                        onSelectPage:function(pageNum, pageSize){
                            opts.pageNumber = pageNum;
                            opts.pageSize = pageSize;
                            $(this).pagination('refresh',{
                                pageNumber:pageNum,
                                pageSize:pageSize
                            });
                            dg.datagrid('loadData',state.allRows);
                        }
                    });
                    $(this).datagrid('loadData', state.data);
                    if (opts.url){
                        $(this).datagrid('reload');
                    }
                });
            },
            loadData: function(jq, data){
                jq.each(function(){
                    $(this).data('datagrid').allRows = null;
                });
                return loadDataMethod.call($.fn.datagrid.methods, jq, data);
            },
            getAllRows: function(jq){
                return jq.data('datagrid').allRows;
            }
        })
    })(jQuery);
    var subdemo={
        init:function(){
            $('#dg').datagrid({
                data:this.getData(),
                pageSize: 15, //每页显示的记录条数，默认为10
                pageList: [2, 5, 10, 15, 20, 25, 40] //可以设置每页记录条数的列表
            }).datagrid('clientPaging').resize();
            //设置分页控建显示
            var p = $('#dg').datagrid('getPager');
            $(p).pagination({
                beforePageText: '第', //页数文本框前显示的汉字
                afterPageText: '页    共 {pages} 页',
                displayMsg: '当前显示 {from} - {to} 条记录   共 {total} 条记录'
            });
        },
        getData:function(){
            var rows = [];
            for(var i=1; i<=20; i++){
                var amount = Math.floor(Math.random()*1000);
                var price = Math.floor(Math.random()*1000);
                rows.push({
                    inv: '人工费'+i,
                    date: "2017-10-1",
                    name: '利润'+i,
                    amount: amount,
                    price: price,
                    cost: amount*price,
                    note: 'Note '+i
                });
            }
            return rows;
        }
    }
</script>

