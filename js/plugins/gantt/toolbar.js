var toolbar = "";
toolbar += '<a class="mini-button load" plain="true" iconCls="icon-reload">加载</a>';
toolbar += '<a class="mini-button save" plain="true" iconCls="icon-save">保存</a>';
toolbar += '<span class="separator"></span>      	';
toolbar += '<a class="mini-button add" plain="true" iconCls="icon-add">增加</a>';
toolbar += '<a class="mini-button edit" plain="true" iconCls="icon-edit">修改</a>';
toolbar += '<a class="mini-button remove" plain="true" iconCls="icon-remove">删除</a>';


//toolbar += '<span class="separator"></span>	';
toolbar += '<a class="mini-button upgrade" plain="true" iconCls="icon-upgrade">升级</a>';
toolbar += '<a class="mini-button downgrade" plain="true" iconCls="icon-downgrade">降级</a>	';
toolbar += '<span class="separator"></span>';
toolbar += '<a class="mini-button lock" plain="true" iconCls="icon-lock"  checkOnClick="true">锁定列</a>';
toolbar += '<span class="separator"></span>';
toolbar += '<a class="mini-button zoomin" plain="true" iconCls="icon-zoomin">放大</a>';
toolbar += '<a class="mini-button zoomout"  plain="true" iconCls="icon-zoomout">缩小</a>';
toolbar += '<span class="separator"></span>';
// toolbar += '<span id="export"><input name="mppVersion" type="radio" value="03"/><span>2003</span><input name="mppVersion" type="radio" value="07" /><span>2007</span><input name="mppVersion" type="radio" value="10" checked="checked" /><span>2010</span><a class="mini-button" plain="true" iconCls="icon-download" onclick="exportMmp()">导出</a></span>';
toolbar += '<a class="mini-button taskwin" iconCls="icon-node">任务面板</a>	';
toolbar += '<a class="mini-button datewin" iconCls="icon-date">日历面板</a>&nbsp;';
toolbar += '<span class="separator"></span>';

$("#mini-toolbar").html(toolbar);

var chgTimeSet = "";
chgTimeSet += '	Top';
chgTimeSet += '	<select class="toptime" style="margin-right: 10px;position:relative;top:2px;">	';
chgTimeSet += '	    <option value="year">年</option>	';
chgTimeSet += '	    <option value="halfyear">半年</option>	';
chgTimeSet += '	    <option value="quarter">季度</option>	';
chgTimeSet += '	    <option value="month">月</option>	';
chgTimeSet += '	    <option value="week" selected="">周</option>	';
chgTimeSet += '	    <option value="day">日</option>	';
chgTimeSet += '	    <option value="hour">时</option>	';
chgTimeSet += '	</select>';
chgTimeSet += '	Bottom';
chgTimeSet += '	<select class="bottomtime" style="position:relative;top:2px;">	';
chgTimeSet += '	    <option value="year">年</option>	';
chgTimeSet += '	    <option value="halfyear">半年</option>	';
chgTimeSet += '	    <option value="quarter">季度</option>	';
chgTimeSet += '	    <option value="month">月</option>	';
chgTimeSet += '	    <option value="week">周</option>	';
chgTimeSet += '	    <option value="day" selected="">日</option>	';
chgTimeSet += '	    <option value="hour">时</option>';
chgTimeSet += '	</select>	';
chgTimeSet += '<a class="mini-button filter" iconCls="" plain="true"  checkOnClick="true" >筛选工期</a>&nbsp;';
chgTimeSet += '	<select class="columnselect" style="margin-right: 5px;position:relative;top:2px;"><option value="all">全部</option></select>';
chgTimeSet += '<a class="mini-button togglecolumn" iconCls=""  >隐藏/显示</a>&nbsp;';
chgTimeSet += '<a class="mini-button expandall" iconCls="" plain="true"  checkOnClick="true" >收缩/展开</a>&nbsp;';
chgTimeSet += '<span class="separator"></span>';
chgTimeSet += '<input type="checkbox" class="trackcheck" style="position:relative;top:2px;" /><label for="trackcheck">基准线比较</label>';
chgTimeSet += '<input type="checkbox" class="criticalcheck" style="position:relative;top:2px;" /><label for="criticalcheck">关键路径</label>';
chgTimeSet += '<input type="checkbox" class="sortstartcheck" style="position:relative;top:2px;" /><label for="sortstartcheck">起始时间排序</label>';
//$("#chgTimeSet").html(chgTimeSet);
$("#mini-toolbar").append(chgTimeSet);

