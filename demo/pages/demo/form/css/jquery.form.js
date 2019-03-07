/*
Chosen和Validation
日期：2019-3-7
settings 参数说明
-----
url:省市数据josn文件路径
prov:默认省份
------------------------------ */
(function($){
	$.fn.mychosen=function(options){
			var el = $(this);
			if (el.length == 0) return;
			var defaults = {
				validator: true
			}
			var opt = $.extend(true, defaults,options);
			if(opt.validator){

			}
			el.chosen({
					//allow_single_deselect:true,
					//show_text_single:$("#hidden_ProjectName").val(),
					no_results_text:"没有匹配的结果",
					search_contains:true,
					width:'100%'
			}).on('change', function(e,res){
					res.chosen.selected_item.text(res.text);
					if(res.selected!="-1")
					{
							form.CommonHander.LoadNewFormData(res.selected);
							$("#hidden_ProjectGuidSelect").val(res.selected);
							$("#hidden_ProjectName").val(res.text);
					}else
					{
							$("#hidden_ProjectGuidSelect").val("");
							$("#hidden_ProjectName").val("");
							form.CommonHander.LoadNewFormData("");
							$.fn.areaSelect().setSelect("", "", "");
					}
					$("#config-form").data('bootstrapValidator').updateStatus("ProjectName", 'NOT_VALIDATED').validateField("ProjectName");
			}).on('chosen:no_results',function(e,res){
			}).on('chosen:hiding_dropdown',function(e,res){
					var searchText=res.chosen.search_container.find("input").val();
					if(searchText!="") {
							$("#hidden_ProjectName").val(searchText);
							res.chosen.selected_item.text(searchText);
					}
					$("#config-form").data('bootstrapValidator').updateStatus("ProjectName", 'NOT_VALIDATED').validateField("ProjectName");

			});
	};


})(jQuery);