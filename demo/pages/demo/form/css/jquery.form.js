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
				validator: true,
				validatorForm:$("#config-form"),
				validatorName:"ProjectName",
				value:"-1",
				attribute:{ValueName:"ID",TextName:"Name"},
				data:[{ID:"1",Name:"测试工程项目"}],
				change:function(e,res){}
			}
			var opt = $.extend(true, defaults,options);
			el.append("<option "+(-1==opt.value?"selected='selected'":"")+" value='-1'>----请选择----</option>");
			var setData=function(MainData){
				$.each(MainData, function (i, n) {
					var value = n[opt.attribute["ValueName"]];
					var text = n[opt.attribute["TextName"]];
					var select=value==opt.value?"selected='selected'":"";
					var node = "<option "+select+" value='" + value + "'>" + text + "</option>";
					el.append(node);
				});
			}
			if(opt.data){
				setData(opt.data);
			}
			var chosen=el.chosen({
					no_results_text:"没有匹配的结果",
					search_contains:true,
					width:'100%'
			});

			if(opt.validator){
				var text=-1==opt.value?"":el.val();
				el.after('<input type="hidden" name="'+opt.validatorName+'" value="'+text+'" />');
			}
          
			chosen.on('change', function(e,res){
				res.chosen.selected_item.text(res.text);
				if(opt.validator){
					var hidden=el.next();
					if(res.selected=="-1")
					{
						hidden.val("");
					}else{
						hidden.val(res.selected);
					}
					opt.validatorForm.data('bootstrapValidator').updateStatus(opt.validatorName, 'NOT_VALIDATED').validateField(opt.validatorName);
				}
				opt.change(e,res);	
			}).on('chosen:no_results',function(e,res){

			}).on('chosen:hiding_dropdown',function(e,res){
				if(opt.validator){
					var searchText=res.chosen.search_container.find("input").val();
					if(searchText!="") {
						el.next().val(searchText);
						res.chosen.selected_item.text(searchText);
					}
					opt.validatorForm.data('bootstrapValidator').updateStatus(opt.validatorName, 'NOT_VALIDATED').validateField(opt.validatorName);
			    }
			});
	};

	$.fn.myvalidator=function(settings){
		    var el = $(this);
			if (el.length == 0) return;
			var defaults = {
				excluded: [':disabled'],
				submitSuccess:function(e){},
			    feedbackIcons: {
					valid: 'fa fa-check-circle fa-lg text-success',
					invalid: 'fa fa-times-circle fa-lg',
					validating: 'fa fa-refresh'
				}
			}
			var options = $.extend(true, defaults,settings);
			el.bootstrapValidator(options).on('status.field.bv', function(e, data) {
				var $form     = $(e.target),
                validator = data.bv,
                $tabPane  = data.element.parents('.tab-pane'),
                faIcon    = options.feedbackIcons,
                tabId     = $tabPane.attr('id');
				if (tabId) {
					var $icon = $('a[href="#' + tabId + '"][data-toggle="tab"]').parent().find('i');
					// Add custom class to tab containing the field
					if (data.status == validator.STATUS_INVALID) {
						$icon.removeClass(faIcon.valid).addClass(faIcon.invalid);
					} else if (data.status == validator.STATUS_VALID) {
						var isValidTab = validator.isValidContainer($tabPane);
						$icon.removeClass(faIcon.valid).addClass(isValidTab ? faIcon.valid : faIcon.invalid);
					}
				}
			}).on('success.form.bv', function(e){
                e.preventDefault();
				options.submitSuccess(e);
			});

			var fn={
				isValid:function(){
					el.bootstrapValidator('validate');
					var isValid=el.data("bootstrapValidator").isValid();
					return isValid;
				}
			}
			
			return fn;
	}

	$.fn.mydatepicker = function (settings) {
        var el = $(this);
        if (el.length == 0) return;
        var defaultSettings = {
			validator: true,
			validatorForm:$("#config-form"),
			validatorName:"TenderTime",
            autoclose: true,
            todayHighlight: true,
            clearBtn: true
        }
        var options = $.extend(true, defaultSettings, settings);
        el.datepicker(options).on('hide', function(e) {
            e.preventDefault();
            e.stopPropagation();
        });
		if(options.validator)
		{
			el.before('<input type="hidden" name="'+options.validatorName+'" />');
			el.datepicker(options).on('changeDate', function(e) {
				var value=$(this).find("input").val();
				el.prev().val(value);
				$(options.validatorForm).data('bootstrapValidator').updateStatus(options.validatorName, 'NOT_VALIDATED').validateField(options.validatorName);
			});
	   }
    };

})(jQuery);