var toolbar = "";
toolbar += '<a class="mini-button" plain="true" iconCls="icon-reload"  onclick="load()">加载</a>';
toolbar += '<a class="mini-button" plain="true" iconCls="icon-save" onclick="save()">保存</a>';
toolbar += '<span class="separator"></span>      	';
toolbar += '<a class="mini-button" plain="true" iconCls="icon-add" onclick="addTask()">增加</a>';
toolbar += '<a class="mini-button" plain="true" iconCls="icon-edit" onclick="updateTask()">修改</a>';
toolbar += '<a class="mini-button" plain="true" iconCls="icon-remove" onclick="removeTask()">删除</a>';
//if (!PorjectPlanDefault.ChangeFlag) {
//    toolbar += '<a class="mini-button" plain="true" iconCls="icon-remove" onclick="removeTask()">删除</a>';
//}

//toolbar += '<span class="separator"></span>	';
toolbar += '<a class="mini-button" plain="true" iconCls="icon-upgrade" onclick="upgradeTask()">升级</a>';
toolbar += '<a class="mini-button" plain="true" iconCls="icon-downgrade" onclick="downgradeTask()">降级</a>	';
toolbar += '<span class="separator"></span>';
toolbar += '<a class="mini-button" plain="true" iconCls="icon-lock" onclick="onLockClick" checkOnClick="true">锁定列</a>';
toolbar += '<span class="separator"></span>';
toolbar += '<a class="mini-button" plain="true" iconCls="icon-zoomin" onclick="zoomIn()">放大</a>';
toolbar += '<a class="mini-button" plain="true" iconCls="icon-zoomout" onclick="zoomOut()">缩小</a>';
toolbar += '<span class="separator"></span>';
toolbar += '<span id="export" style="display: none;"><input name="mppVersion" type="radio" value="03"/><span>2003</span><input name="mppVersion" type="radio" value="07" /><span>2007</span><input name="mppVersion" type="radio" value="10" checked="checked" /><span>2010</span><a class="mini-button" plain="true" iconCls="icon-download" onclick="exportMmp()">导出</a></span>';
toolbar += '<span class="separator" style="display: none;"></span>';
//toolbar += '<span class="separator"></span>';
toolbar += '<a class="mini-button" iconCls="icon-node" onclick="editTaskByTaskWindow()">任务面板</a>	';
toolbar += '<a class="mini-button" iconCls="icon-date" onclick="showCalendars()">日历面板</a>';

$("#mini-toolbar").html(toolbar);

var chgTimeSet = "";
chgTimeSet += '	顶层时间刻度：	';
chgTimeSet += '	<select style="margin-right: 20px;" onchange="changeTopTimeScale(this.value)">	';
chgTimeSet += '	    <option value="year">年</option>	';
chgTimeSet += '	    <option value="halfyear">半年</option>	';
chgTimeSet += '	    <option value="quarter">季度</option>	';
chgTimeSet += '	    <option value="month">月</option>	';
chgTimeSet += '	    <option value="week" selected="">周</option>	';
chgTimeSet += '	    <option value="day">日</option>	';
chgTimeSet += '	    <option value="hour">时</option>	';
chgTimeSet += '	</select>	';
chgTimeSet += '	底层时间刻度：	';
chgTimeSet += '	<select onchange="changeBottomTimeScale(this.value)" style="margin-right: 20px;">	';
chgTimeSet += '	    <option value="year">年</option>	';
chgTimeSet += '	    <option value="halfyear">半年</option>	';
chgTimeSet += '	    <option value="quarter">季度</option>	';
chgTimeSet += '	    <option value="month">月</option>	';
chgTimeSet += '	    <option value="week">周</option>	';
chgTimeSet += '	    <option value="day" selected="">日</option>	';
chgTimeSet += '	    <option value="hour">时</option>	';
chgTimeSet += '	</select>	';
chgTimeSet += '<a class="mini-button" iconCls="" onclick="filter()">筛选工期为0</a>';
chgTimeSet += '<a class="mini-button" iconCls="" onclick="clearFilter()">取消筛选</a>';
chgTimeSet += '<a class="mini-button" iconCls="" onclick="hideColumn()">隐藏备注</a>';
chgTimeSet += '<a class="mini-button" iconCls="" onclick="showColumn()">显示备注</a>';
chgTimeSet += '<input type="checkbox" id="trackcheck" onclick="oncheckedchanged(this)"/><label for="trackcheck">基准线比较</label>';
chgTimeSet += '<input type="checkbox" id="criticalcheck" onclick="isShowCritical(this)"/><label for="criticalcheck">关键路劲</label>';
chgTimeSet += '<input type="checkbox" id="sortstartcheck" onclick="isSortByStart(this)"/><label for="sortstartcheck">起始时间排序</label>';
$("#chgTimeSet").html(chgTimeSet);