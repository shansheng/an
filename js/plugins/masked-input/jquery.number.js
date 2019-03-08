/**
 * jQuery number plug-in 2.1.2
 * Copyright 2012, Digital Fusion
 * Licensed under the MIT license.
 * http://opensource.teamdf.com/license/
 *
 * A jQuery plugin which implements a permutation of phpjs.org's number_format to provide
 * simple number formatting, insertion, and as-you-type masking of a number.
 * 
 * @author	Sam Sehnert
 * @docs	http://www.teamdf.com/web/jquery-number-format-redux/196/
 *
 *
 */
(function ($) {

    "use strict";

    /**
    * Method for selecting a range of characters in an input/textarea.
    *
    * @param int rangeStart			: Where we want the selection to start.
    * @param int rangeEnd				: Where we want the selection to end.
    *
    * @return void;
    */
    function setSelectionRange(rangeStart, rangeEnd) {
        // Check which way we need to define the text range.
        if (this.createTextRange) {
            var range = this.createTextRange();
            range.collapse(true);
            range.moveStart('character', rangeStart);
            range.moveEnd('character', rangeEnd - rangeStart);
            range.select();
        }

        // Alternate setSelectionRange method for supporting browsers.
        else if (this.setSelectionRange) {
            this.focus();
            this.setSelectionRange(rangeStart, rangeEnd);
        }
    }

    /**
    * Get the selection position for the given part.
    * 
    * @param string part			: Options, 'Start' or 'End'. The selection position to get.
    *
    * @return int : The index position of the selection part.
    */
    function getSelection(part) {
        var pos = this.value.length;

        // Work out the selection part.
        part = (part.toLowerCase() == 'start' ? 'Start' : 'End');

        if (document.selection) {
            // The current selection
            var range = document.selection.createRange(), stored_range, selectionStart, selectionEnd;
            // We'll use this as a 'dummy'
            stored_range = range.duplicate();
            // Select all text
            //stored_range.moveToElementText( this );
            stored_range.expand('textedit');
            // Now move 'dummy' end point to end point of original range
            stored_range.setEndPoint('EndToEnd', range);
            // Now we can calculate start and end points
            selectionStart = stored_range.text.length - range.text.length;
            selectionEnd = selectionStart + range.text.length;
            return part == 'Start' ? selectionStart : selectionEnd;
        }

        else if (typeof (this['selection' + part]) != "undefined") {
            pos = this['selection' + part];
        }
        return pos;
    }

    /**
    * Substitutions for keydown keycodes.
    * Allows conversion from e.which to ascii characters.
    */
    var _keydown = {
        codes: {
            188: 44,
            109: 45,
            190: 46,
            191: 47,
            192: 96,
            220: 92,
            222: 39,
            221: 93,
            219: 91,
            173: 45,
            187: 61, //IE Key codes
            186: 59, //IE Key codes
            189: 45, //IE Key codes
            110: 46  //IE Key codes
        },
        shifts: {
            96: "~",
            49: "!",
            50: "@",
            51: "#",
            52: "$",
            53: "%",
            54: "^",
            55: "&",
            56: "*",
            57: "(",
            48: ")",
            45: "_",
            61: "+",
            91: "{",
            93: "}",
            92: "|",
            59: ":",
            39: "\"",
            44: "<",
            46: ">",
            47: "?"
        }
    };

    /**
    * jQuery number formatter plugin. This will allow you to format numbers on an element.
    *
    * @params proxied for format_number method.
    *
    * @return : The jQuery collection the method was called with.
    */
    $.fn.number = function (number, decimals, settings) {
        var defaultSettings = {
            dec_point:".",
            thousands_sep:",",
            integer_bit:"11",
            typewriting_error:"请切换英文输入法！",
            blur:function(e){
            }
        }
        var options = $.extend(true, defaultSettings, settings);
        var dec_point=options.dec_point;
        var thousands_sep=options.thousands_sep;
        // Enter the default thousands separator, and the decimal placeholder.
        thousands_sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep;
        dec_point = (typeof dec_point === 'undefined') ? '.' : dec_point;
        decimals = (typeof decimals === 'undefined') ? 0 : decimals;

        // Work out the unicode character for the decimal placeholder.
        var u_dec = ('\\u' + ('0000' + (dec_point.charCodeAt(0).toString(16))).slice(-4)),
	    	regex_dec_num = new RegExp('[^' + u_dec + '0-9]', 'g'),
	    	regex_dec = new RegExp(u_dec, 'g');

        // If we've specified to take the number from the target element,
        // we loop over the collection, and get the number.
        if (number === true) {

            // If this element is a number, then we add a keyup
            if (this.is('input:text')) {
                //cqy
                $(this).blur(options.blur);
                // Return the jquery collection.
                return this.on({
                    /**
                    * Handles keyup events, re-formatting numbers.
                    *
                    * @param object e			: the keyup event object.s
                    *
                    * @return void;
                    */
                    'keydown.format': function (e) {

                        // Define variables used in the code below.
                        var $this = $(this),
	    					data = $this.data('numFormat'),
	    					code = (e.keyCode ? e.keyCode : e.which),
							chara = '', //unescape(e.originalEvent.keyIdentifier.replace('U+','%u')),
	    					start = getSelection.apply(this, ['start']),
	    					end = getSelection.apply(this, ['end']),
	    					val = '',
                            setPos = false;
                    
                        if (_keydown.codes.hasOwnProperty(code)) {
                            code = _keydown.codes[code];
                        }
                        if (!e.shiftKey && (code >= 65 && code <= 90)) {
                            code += 32;
                        } else if (!e.shiftKey && (code >= 69 && code <= 105)) {
                            code -= 48;
                        } else if (e.shiftKey && _keydown.shifts.hasOwnProperty(code)) {
                            //get shifted keyCode value
                            chara = _keydown.shifts[code];
                        }

                        if (chara == '') chara = String.fromCharCode(code);
                        var orgdatac=data.c;
                        //判断输入法是否为中文
                        if(chara=="å") {
                            this.placeholder=options.typewriting_error;
                            e.preventDefault();
                            return false;
                        }
                        else{
                            this.placeholder="";
                        }

                        // Stop executing if the user didn't type a number key, a decimal character, or backspace.
                        if (code !== 8 && chara != dec_point && !chara.match(/[0-9]/)) {
                            // We need the original keycode now...
                            var key = (e.keyCode ? e.keyCode : e.which);
                            if ( // Allow control keys to go through... (delete, etc)
	    						key == 46 || key == 8 || key == 9 || key == 27 || key == 13 ||
                            // Allow: Ctrl+A, Ctrl+R
	    						((key == 65 || key == 82) && (e.ctrlKey || e.metaKey) === true) ||
                            // Allow: Ctrl+V, Ctrl+C
	    						((key == 86 || key == 67) && (e.ctrlKey || e.metaKey) === true) ||
                            // Allow: home, end, left, right
	    						((key >= 35 && key <= 39))
							) {
                                return;
                            }
                            // But prevent all other keys.
                            e.preventDefault();
                            return false;
                        }


                        // The whole lot has been selected, or if the field is empty...
                        if (start == 0 && end == this.value.length || $this.val() == 0) {
                            if (code === 8) {
                                // Blank out the field, but only if the data object has already been instanciated.
                                start = end = 1;
                                this.value = '';

                                // Reset the cursor position.
                                data.init = (decimals > 0 ? -1 : 0);
                                data.c = (decimals > 0 ? -(decimals + 1) : 0);
                                setSelectionRange.apply(this, [0, 0]);
                            }
                            else if (chara === dec_point) {
                                start = end = 1;
                                this.value = '0' + dec_point + (new Array(decimals + 1).join('0'));

                                // Reset the cursor position.
                                data.init = (decimals > 0 ? 1 : 0);
                                data.c = (decimals > 0 ? -(decimals + 1) : 0);
                                setSelectionRange.apply(this, [0, 0]);
                            }
                            else {
                                data.c = end - this.value.length;
                            }
                        }

                        // Otherwise, we need to reset the caret position
                        // based on the users selection.
                        else {
                            data.c = end - this.value.length;
                        }

                        // If the start position is before the decimal point,
                        // and the user has typed a decimal point, we need to move the caret
                        // past the decimal place.
                        if (decimals > 0 && chara == dec_point && start == this.value.length - decimals - 1) {
                            data.c++;
                            data.init = Math.max(0, data.init);
                            e.preventDefault();

                            // Set the selection position.
                            setPos = this.value.length + data.c;
                        }

                        // If the user is just typing the decimal place,
                        // we simply ignore it.
                        else if (chara == dec_point) {
                            data.init = Math.max(0, data.init);
                            e.preventDefault();
                        }

                        // If hitting the delete key, and the cursor is behind a decimal place,
                        // we simply move the cursor to the other side of the decimal place.
                        else if (decimals > 0 && code == 8 && start == this.value.length - decimals) {
                            e.preventDefault();
                            data.c--;

                            // Set the selection position.
                            setPos = this.value.length + data.c;
                        }

                        // If hitting the delete key, and the cursor is to the right of the decimal
                        // (but not directly to the right) we replace the character preceeding the
                        // caret with a 0.
                        else if (decimals > 0 && code == 8 && start > this.value.length - decimals) {
                            if (this.value === '') return;

                            // If the character preceeding is not already a 0,
                            // replace it with one.
                            if (this.value.slice(start - 1, start) != '0') {
                                val = this.value.slice(0, start - 1) + '0' + this.value.slice(start);
                                $this.val(val.replace(regex_dec_num, '').replace(regex_dec, dec_point));
                            }

                            e.preventDefault();
                            data.c--;

                            // Set the selection position.
                            setPos = this.value.length + data.c;
                        }

                        // If the delete key was pressed, and the character immediately
                        // before the caret is a thousands_separator character, simply
                        // step over it.
                        else if (code == 8 && this.value.slice(start - 1, start) == thousands_sep) {
                            e.preventDefault();
                            data.c--;

                            // Set the selection position.
                            setPos = this.value.length + data.c;
                        }

                        // If the caret is to the right of the decimal place, and the user is entering a
                        // number, remove the following character before putting in the new one. 
                        else if (
	    					decimals > 0 &&
	    					start == end &&
	    					this.value.length > decimals + 1 &&
	    					start > this.value.length - decimals - 1 && isFinite(+chara) &&
		    				!e.metaKey && !e.ctrlKey && !e.altKey && chara.length === 1
	    				) {
                            // If the character preceeding is not already a 0,
                            // replace it with one.
                            if (end === this.value.length) {
                                val = this.value.slice(0, start - 1);
                            }
                            else {
                                val = this.value.slice(0, start) + this.value.slice(start + 1);
                            }

                            // Reset the position.
                            this.value = val;
                            setPos = start;
                        }

                        // If we need to re-position the characters.
                        if (setPos !== false) {
                            //console.log('Setpos keydown: ', setPos );
                            setSelectionRange.apply(this, [setPos, setPos]);
                        }


                        //判断整数位
                        var num_bit=$this.val()==""?1:(parseInt($this.val()).toString().length+1);
                        var default_bit=options.integer_bit;
                        var iskey_able=(code !== 8 && chara != dec_point);
                        var isdecimals=orgdatac<-(decimals);
                        if(isdecimals&&iskey_able&&default_bit>0&&num_bit>default_bit)
                        {
                            e.preventDefault();
                            return false;
                        }
                        // Store the data on the element.
                        $this.data('numFormat', data);

                    },

                    /**
                    * Handles keyup events, re-formatting numbers.
                    *
                    * @param object e			: the keyup event object.s
                    *
                    * @return void;
                    */
                    'keyup.format': function (e) {

                        // Store these variables for use below.
                        var $this = $(this),
	    					data = $this.data('numFormat'),
	    					code = (e.keyCode ? e.keyCode : e.which),
	    					start = getSelection.apply(this, ['start']),
	    					setPos;
                        //cqy 修改 bug
                        var chara = String.fromCharCode(code);
                        //cqy 中文输入法验证
                        if(chara=="å") {
                            this.value = "";
                            e.preventDefault();
                            return false;
                        }
                        if (data.c == 0) {
                            data.c = -3;
                            data.init = -1;
                        }
                        // Stop executing if the user didn't type a number key, a decimal, or a comma.
                        if (this.value === '' || (code < 48 || code > 57) && (code < 96 || code > 105) && code !== 8) return;

                        // Re-format the textarea.
                        $this.val($this.val());

                        if (decimals > 0) {
                            // If we haven't marked this item as 'initialised'
                            // then do so now. It means we should place the caret just 
                            // before the decimal. This will never be un-initialised before
                            // the decimal character itself is entered.
                            if (data.init < 1) {
                                start = this.value.length - decimals - (data.init < 0 ? 1 : 0);
                                data.c = start - this.value.length;
                                data.init = 1;

                                $this.data('numFormat', data);
                            }

                            // Increase the cursor position if the caret is to the right
                            // of the decimal place, and the character pressed isn't the delete key.
                            else if (start > this.value.length - decimals && code != 8) {
                                data.c++;

                                // Store the data, now that it's changed.
                                $this.data('numFormat', data);
                            }
                        }

                        //console.log( 'Setting pos: ', start, decimals, this.value.length + data.c, this.value.length, data.c );

                        // Set the selection position.
                        if(decimals>0) {
                            setPos = this.value.length + data.c;
                            //console.log( data.c + "*" + setPos);
                            setSelectionRange.apply(this, [setPos, setPos]);
                        }
                    },

                    /**
                    * Reformat when pasting into the field.
                    *
                    * @param object e 		: jQuery event object.
                    *
                    * @return false : prevent default action.
                    */
                    'paste.format': function (e) {

                        // Defint $this. It's used twice!.
                        var $this = $(this),
	    					original = e.originalEvent,
	    					val = null;

                        // Get the text content stream.
                        if (window.clipboardData && window.clipboardData.getData) { // IE
                            val = window.clipboardData.getData('Text');
                        } else if (original.clipboardData && original.clipboardData.getData) {
                            val = original.clipboardData.getData('text/plain');
                        }

                        // Do the reformat operation.
                        $this.val(val);

                        // Stop the actual content from being pasted.
                        e.preventDefault();
                        return false;
                    }

                })

                // Loop each element (which isn't blank) and do the format.
    			.each(function () {

    			    var $this = $(this).data('numFormat', {
    			        c: -(decimals + 1),
    			        decimals: decimals,
    			        thousands_sep: thousands_sep,
    			        dec_point: dec_point,
    			        regex_dec_num: regex_dec_num,
    			        regex_dec: regex_dec,
    			        init: false
    			    });

    			    // Return if the element is empty.
    			    if (this.value === '') return;

    			    // Otherwise... format!!
    			    $this.val($this.val());
                })
                
            }
            else {
                // return the collection.
                return this.each(function () {
                    var $this = $(this), num = +$this.text().replace(regex_dec_num, '').replace(regex_dec, '.');
                    $this.number(!isFinite(num) ? 0 : +num, decimals, dec_point, thousands_sep);
                });
            }
        }

        // Add this number to the element as text.
        return this.text($.number.apply(window, arguments));
    };

    //
    // Create .val() hooks to get and set formatted numbers in inputs.
    //

    // We check if any hooks already exist, and cache
    // them in case we need to re-use them later on.
    var origHookGet = null, origHookSet = null;

    // Check if a text valHook already exists.
    if ($.isPlainObject($.valHooks.text)) {
        // Preserve the original valhook function
        // we'll call this for values we're not 
        // explicitly handling.
        if ($.isFunction($.valHooks.text.get)) origHookGet = $.valHooks.text.get;
        if ($.isFunction($.valHooks.text.set)) origHookSet = $.valHooks.text.set;
    }
    else {
        // Define an object for the new valhook.
        $.valHooks.text = {};
    }

    /**
    * Define the valHook to return normalised field data against an input
    * which has been tagged by the number formatter.
    *
    * @param object el			: The raw DOM element that we're getting the value from.
    *
    * @return mixed : Returns the value that was written to the element as a
    *				   javascript number, or undefined to let jQuery handle it normally.
    */
    $.valHooks.text.get = function (el) {

        // Get the element, and its data.
        var $this = $(el), num,
			data = $this.data('numFormat');

        // Does this element have our data field?
        if (!data) {
            // Check if the valhook function already existed
            if ($.isFunction(origHookGet)) {
                // There was, so go ahead and call it
                return origHookGet(el);
            }
            else {
                // No previous function, return undefined to have jQuery
                // take care of retrieving the value
                return undefined;
            }
        }
        else {
            // Remove formatting, and return as number.
            if (el.value === '') return '';

            // Convert to a number.
            num = +(el.value
				.replace(data.regex_dec_num, '')
				.replace(data.regex_dec, '.'));

            // If we've got a finite number, return it.
            // Otherwise, simply return 0.
            // Return as a string... thats what we're
            // used to with .val()
            return '' + (isFinite(num) ? num : 0);
        }
    };

    /**
    * A valhook which formats a number when run against an input
    * which has been tagged by the number formatter.
    *
    * @param object el		: The raw DOM element (input element).
    * @param float			: The number to set into the value field.
    *
    * @return mixed : Returns the value that was written to the element,
    *				   or undefined to let jQuery handle it normally. 
    */
    $.valHooks.text.set = function (el, val) {
        // Get the element, and its data.
        var $this = $(el),
			data = $this.data('numFormat');

        // Does this element have our data field?
        if (!data) {

            // Check if the valhook function already exists
            if ($.isFunction(origHookSet)) {
                // There was, so go ahead and call it
                return origHookSet(el, val);
            }
            else {
                // No previous function, return undefined to have jQuery
                // take care of retrieving the value
                return undefined;
            }
        }
        else {
            // Otherwise, don't worry about other valhooks, just run ours.
            return el.value = $.number(val, data.decimals, data.dec_point, data.thousands_sep);
        }
    };

    /**
    * The (modified) excellent number formatting method from PHPJS.org.
    * http://phpjs.org/functions/number_format/
    *
    * @modified by Sam Sehnert (teamdf.com)
    *	- don't redefine dec_point, thousands_sep... just overwrite with defaults.
    *	- don't redefine decimals, just overwrite as numeric.
    *	- Generate regex for normalizing pre-formatted numbers.
    *
    * @param float number			: The number you wish to format, or TRUE to use the text contents
    *								  of the element as the number. Please note that this won't work for
    *								  elements which have child nodes with text content.
    * @param int decimals			: The number of decimal places that should be displayed. Defaults to 0.
    * @param string dec_point		: The character to use as a decimal point. Defaults to '.'.
    * @param string thousands_sep	: The character to use as a thousands separator. Defaults to ','.
    *
    * @return string : The formatted number as a string.
    */
    $.number = function (number, decimals, dec_point, thousands_sep) {
        // Set the default values here, instead so we can use them in the replace below.
        thousands_sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep;
        dec_point = (typeof dec_point === 'undefined') ? '.' : dec_point;
        decimals = !isFinite(+decimals) ? 0 : Math.abs(decimals);

        // Work out the unicode representation for the decimal place and thousand sep.	
        var u_dec = ('\\u' + ('0000' + (dec_point.charCodeAt(0).toString(16))).slice(-4));
        var u_sep = ('\\u' + ('0000' + (thousands_sep.charCodeAt(0).toString(16))).slice(-4));

        // Fix the number, so that it's an actual number.
        number = (number + '')
			.replace('\.', dec_point) // because the number if passed in as a float (having . as decimal point per definition) we need to replace this with the passed in decimal point character
			.replace(new RegExp(u_sep, 'g'), '')
			.replace(new RegExp(u_dec, 'g'), '.')
			.replace(new RegExp('[^0-9+\-Ee.]', 'g'), '');

        var n = !isFinite(+number) ? 0 : +number,
		    s = '',
		    toFixedFix = function (n, decimals) {
		        var k = Math.pow(10, decimals);
		        return '' + Math.round(n * k) / k;
		    };

        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
        s = (decimals ? toFixedFix(n, decimals) : '' + Math.round(n)).split('.');
        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, thousands_sep);
        }
        if ((s[1] || '').length < decimals) {
            s[1] = s[1] || '';
            s[1] += new Array(decimals - s[1].length + 1).join('0');
        }
        return s.join(dec_point);
    }

    //cqy 添加金额转中文大写金额 Start
    $.fn.chinesenumber=function(){
        var currencyDigits=$(this).val();
        var chineseDigits=$.fn.ConvertToChineseMoney(currencyDigits);
        return chineseDigits;
    }

    $.fn.ConvertToChineseMoney = function (currencyDigits) {
        // Constants:
        var MAXIMUM_NUMBER = 99999999999.99;
        // Predefine the radix characters and currency symbols for output:
        var CN_ZERO = "零";
        var CN_ONE = "壹";
        var CN_TWO = "贰";
        var CN_THREE = "叁";
        var CN_FOUR = "肆";
        var CN_FIVE = "伍";
        var CN_SIX = "陆";
        var CN_SEVEN = "柒";
        var CN_EIGHT = "捌";
        var CN_NINE = "玖";
        var CN_TEN = "拾";
        var CN_HUNDRED = "佰";
        var CN_THOUSAND = "仟";
        var CN_TEN_THOUSAND = "万";
        var CN_HUNDRED_MILLION = "亿";
        var CN_SYMBOL = "";//"人民币";
        var CN_DOLLAR = "元";
        var CN_TEN_CENT = "角";
        var CN_CENT = "分";
        var CN_INTEGER = "整";

        // Variables:
        var integral;    // Represent integral part of digit number.
        var decimal;    // Represent decimal part of digit number.
        var outputCharacters;    // The output result.
        var parts;
        var digits, radices, bigRadices, decimals;
        var zeroCount;
        var i, p, d;
        var quotient, modulus;

        // Validate input string:
        currencyDigits = currencyDigits.toString();
        if (currencyDigits == "") {
            alert("请输入小写金额！");
            return "";
        }
        if (currencyDigits.match(/[^,.\d]/) != null) {
            alert("小写金额含有无效字符！");
            return "";
        }
        if ((currencyDigits).match(/^((\d{1,3}(,\d{3})*(.((\d{3},)*\d{1,3}))?)|(\d+(.\d+)?))$/) == null) {
            alert("小写金额的格式不正确！");
            return "";
        }

        // Normalize the format of input digits:
        currencyDigits = currencyDigits.replace(/,/g, "");    // Remove comma delimiters.
        currencyDigits = currencyDigits.replace(/^0+/, "");    // Trim zeros at the beginning.
        // Assert the number is not greater than the maximum number.
        if (Number(currencyDigits) > MAXIMUM_NUMBER) {
            alert("金额过大，应小于1000亿元！");
            return "";
        }

        // Process the coversion from currency digits to characters:
        // Separate integral and decimal parts before processing coversion:
        parts = currencyDigits.split(".");
        if (parts.length > 1) {
            integral = parts[0];
            decimal = parts[1];
            // Cut down redundant decimal digits that are after the second.
            decimal = decimal.substr(0, 2);
        }
        else {
            integral = parts[0];
            decimal = "";
        }
        // Prepare the characters corresponding to the digits:
        digits = new Array(CN_ZERO, CN_ONE, CN_TWO, CN_THREE, CN_FOUR, CN_FIVE, CN_SIX, CN_SEVEN, CN_EIGHT, CN_NINE);
        radices = new Array("", CN_TEN, CN_HUNDRED, CN_THOUSAND);
        bigRadices = new Array("", CN_TEN_THOUSAND, CN_HUNDRED_MILLION);
        decimals = new Array(CN_TEN_CENT, CN_CENT);
        // Start processing:
        outputCharacters = "";
        // Process integral part if it is larger than 0:
        if (Number(integral) > 0) {
            zeroCount = 0;
            for (i = 0; i < integral.length; i++) {
                p = integral.length - i - 1;
                d = integral.substr(i, 1);
                quotient = p / 4;
                modulus = p % 4;
                if (d == "0") {
                    zeroCount++;
                }
                else {
                    if (zeroCount > 0)
                    {
                        outputCharacters += digits[0];
                    }
                    zeroCount = 0;
                    outputCharacters += digits[Number(d)] + radices[modulus];
                }
                if (modulus == 0 && zeroCount < 4) {
                    outputCharacters += bigRadices[quotient];
                    zeroCount = 0;
                }
            }
            outputCharacters += CN_DOLLAR;
        }
        // Process decimal part if there is:
        if (decimal != "") {
            for (i = 0; i < decimal.length; i++) {
                d = decimal.substr(i, 1);
                if (d != "0") {
                    outputCharacters += digits[Number(d)] + decimals[i];
                }
            }
        }
        // Confirm and return the final output string:
        if (outputCharacters == "") {
            outputCharacters = CN_ZERO + CN_DOLLAR;
        }
        if (decimal == "") {
            outputCharacters += CN_INTEGER;
        }
        outputCharacters = CN_SYMBOL + outputCharacters;
        return outputCharacters;
    }
    //cqy 添加金额转中文大写金额 End

})(jQuery);

/*
 jQuery Masked Input Plugin
 Copyright (c) 2007 - 2014 Josh Bush (digitalbush.com)
 Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
 Version: 1.4.0
 2018-1-9 EditBy:Cqy
 新增多位的正则判断
 */
!function(factory) {
    "function" == typeof define && define.amd ? define([ "jquery" ], factory) : factory("object" == typeof exports ? require("jquery") : jQuery);
}(function($) {
    var caretTimeoutId, ua = navigator.userAgent, iPhone = /iphone/i.test(ua), chrome = /chrome/i.test(ua), android = /android/i.test(ua);
    /**
     * Substitutions for keydown keycodes.
     * Allows conversion from e.which to ascii characters.
     */

    $.mask = {
        definitions: {
            "9": "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]",
            "d":function(e,input){
                var obj=input[0];
                obj.value = obj.value.replace(/[^\d.]/g,"");  //清除“数字”和“.”以外的字符
                obj.value = obj.value.replace(/\.{2,}/g,"."); //只保留第一个. 清除多余的
                obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
                obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');//只能输入两个小数
                if(obj.value.indexOf(".")< 0 && obj.value !=""){//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
                    obj.value= parseFloat(obj.value);
                }
            }
        },
        unlimited:0,//cqy 设置无限制规则
        autoclear: 0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, $.fn.extend({
        caret: function(begin, end) {
            var range;
            if (0 !== this.length && !this.is(":hidden")) return "number" == typeof begin ? (end = "number" == typeof end ? end : begin,
                this.each(function() {
                    this.setSelectionRange ? this.setSelectionRange(begin, end) : this.createTextRange && (range = this.createTextRange(),
                        range.collapse(!0), range.moveEnd("character", end), range.moveStart("character", begin),
                        range.select());
                })) : (this[0].setSelectionRange ? (begin = this[0].selectionStart, end = this[0].selectionEnd) : document.selection && document.selection.createRange && (range = document.selection.createRange(),
                begin = 0 - range.duplicate().moveStart("character", -1e5), end = begin + range.text.length),
            {
                begin: begin,
                end: end
            });
        },
        unmask: function() {
            return this.trigger("unmask");
        },
        mask: function(mask, settings) {
            var input, defs, tests, partialPosition, firstNonMaskPos, lastRequiredNonMaskPos, len, oldVal;
            if (!mask && this.length > 0) {
                input = $(this[0]);
                var fn = input.data($.mask.dataName);
                return fn ? fn() : void 0;
            }
            return settings = $.extend({
                autoclear: $.mask.autoclear,
                placeholder: $.mask.placeholder,
                unlimited:$.mask.unlimited,
                completed: null
            }, settings),
                defs = $.mask.definitions,
                unlimited=settings.unlimited,
                tests = [],
                regx=null,
                keyupCallback=null,
                partialPosition = len = mask.length,
                firstNonMaskPos = null,
                $.each(mask.split(""), function(i, c) {
                    if(unlimited){
                        if(typeof (defs[c])!="function") {
                            regx = new RegExp(defs[c], "g");
                            keyupCallback = function (e,input) {
                                input.val(input.val().replace(regx, ''));
                            }
                        }
                        else {
                            keyupCallback= defs[c];
                        }
                        return;
                    }
                    "?" == c ? (len--, partialPosition = i) : defs[c] ? (tests.push(new RegExp(defs[c])),
                        null === firstNonMaskPos && (firstNonMaskPos = tests.length - 1), partialPosition > i && (lastRequiredNonMaskPos = tests.length - 1)) : tests.push(null);
                }),
                this.trigger("unmask").each(function() {
                    function tryFireCompleted() {
                        if (settings.completed) {
                            for (var i = firstNonMaskPos; lastRequiredNonMaskPos >= i; i++)
                                if (tests[i] && buffer[i] === getPlaceholder(i))
                                    return;
                            settings.completed.call(input);
                        }
                    }
                    function getPlaceholder(i) {
                        return settings.placeholder.charAt(i < settings.placeholder.length ? i : 0);
                    }
                    function seekNext(pos) {
                        for (;++pos < len && !tests[pos]; ) ;
                        return pos;
                    }
                    function seekPrev(pos) {
                        for (;--pos >= 0 && !tests[pos]; ) ;
                        return pos;
                    }
                    function shiftL(begin, end) {
                        var i, j;
                        if (!(0 > begin)) {
                            for (i = begin, j = seekNext(end); len > i; i++) if (tests[i]) {
                                if (!(len > j && tests[i].test(buffer[j]))) break;
                                buffer[i] = buffer[j], buffer[j] = getPlaceholder(j), j = seekNext(j);
                            }
                            writeBuffer(), input.caret(Math.max(firstNonMaskPos, begin));
                        }
                    }
                    function shiftR(pos) {
                        var i, c, j, t;
                        for (i = pos, c = getPlaceholder(pos); len > i; i++) if (tests[i]) {
                            if (j = seekNext(i), t = buffer[i], buffer[i] = c, !(len > j && tests[j].test(t))) break;
                            c = t;
                        }
                    }
                    function androidInputEvent() {
                        var curVal = input.val(), pos = input.caret();
                        if (curVal.length < oldVal.length) {
                            for (checkVal(!0); pos.begin > 0 && !tests[pos.begin - 1]; ) pos.begin--;
                            if (0 === pos.begin) for (;pos.begin < firstNonMaskPos && !tests[pos.begin]; ) pos.begin++;
                            input.caret(pos.begin, pos.begin);
                        } else {
                            for (checkVal(!0); pos.begin < len && !tests[pos.begin]; ) pos.begin++;
                            input.caret(pos.begin, pos.begin);
                        }
                        tryFireCompleted();
                    }
                    function blurEvent() {
                        checkVal(), input.val() != focusText && input.change();
                    }
                    function keyupEvent(e){
                        if(unlimited) {
                            keyupCallback(e,input);
                        }
                    }
                    function keydownEvent(e) {
                        if (!input.prop("readonly")&&!unlimited) {
                            var pos, begin, end, k = e.which || e.keyCode;
                            oldVal = input.val(), 8 === k || 46 === k || iPhone && 127 === k ? (pos = input.caret(),
                                begin = pos.begin, end = pos.end, end - begin === 0 && (begin = 46 !== k ? seekPrev(begin) : end = seekNext(begin - 1),
                                end = 46 === k ? seekNext(end) : end), clearBuffer(begin, end), shiftL(begin, end - 1),
                                e.preventDefault()) : 13 === k ? blurEvent.call(this, e) : 27 === k && (input.val(focusText),
                                input.caret(0, checkVal()), e.preventDefault());
                        }
                    }
                    function keypressEvent(e) {
                        if (!input.prop("readonly")&&!unlimited) {
                            var p, c, next, k = e.which || e.keyCode, pos = input.caret();
                            if (!(e.ctrlKey || e.altKey || e.metaKey || 32 > k) && k && 13 !== k) {
                                if (pos.end - pos.begin !== 0 && (clearBuffer(pos.begin, pos.end), shiftL(pos.begin, pos.end - 1)),
                                    p = seekNext(pos.begin - 1), len > p && (c = String.fromCharCode(k), tests[p].test(c))) {
                                    if (shiftR(p), buffer[p] = c, writeBuffer(), next = seekNext(p), android) {
                                        var proxy = function() {
                                            $.proxy($.fn.caret, input, next)();
                                        };
                                        setTimeout(proxy, 0);
                                    } else input.caret(next);
                                    pos.begin <= lastRequiredNonMaskPos && tryFireCompleted();
                                }
                                e.preventDefault();
                            }
                        }
                    }
                    function clearBuffer(start, end) {
                        var i;
                        for (i = start; end > i && len > i; i++) tests[i] && (buffer[i] = getPlaceholder(i));
                    }
                    function writeBuffer() {
                        input.val(buffer.join(""));
                    }
                    function checkVal(allow) {
                        if(unlimited)
                        return;
                        var i, c, pos, test = input.val(), lastMatch = -1;
                        for (i = 0, pos = 0; len > i; i++)
                            if (tests[i]) {
                                for (buffer[i] = getPlaceholder(i); pos++ < test.length; ) if (c = test.charAt(pos - 1),
                                    tests[i].test(c)) {
                                    buffer[i] = c, lastMatch = i;
                                    break;
                                }
                                if (pos > test.length) {
                                    clearBuffer(i + 1, len);
                                    break;
                                }
                            } else buffer[i] === test.charAt(pos) && pos++, partialPosition > i && (lastMatch = i);
                        return allow ? writeBuffer() : partialPosition > lastMatch + 1 ? settings.autoclear || buffer.join("") === defaultBuffer ? (input.val() && input.val(""),
                            clearBuffer(0, len)) : writeBuffer() : (writeBuffer(), input.val(input.val().substring(0, lastMatch + 1))),
                            partialPosition ? i : firstNonMaskPos;
                    }
                    var input = $(this),buffer = $.map(mask.split(""), function(c, i) {
                            return "?" != c ? defs[c] ? getPlaceholder(i) : c : void 0;
                        }),
                        defaultBuffer = buffer.join(""),focusText = input.val();
                    input.data($.mask.dataName, function() {
                        return $.map(buffer, function(c, i) {
                            return tests[i] && c != getPlaceholder(i) ? c : null;
                        }).join("");
                    }),
                        input.one("unmask", function() {
                            input.off(".mask").removeData($.mask.dataName);
                        }).on("focus.mask", function() {
                            if (!input.prop("readonly")&&!unlimited) {
                                clearTimeout(caretTimeoutId);
                                var pos;
                                focusText = input.val(), pos = checkVal(), caretTimeoutId = setTimeout(function() {
                                    writeBuffer(), pos == mask.replace("?", "").length ? input.caret(0, pos) : input.caret(pos);
                                }, 10);
                            }
                        }).on("blur.mask", blurEvent).on("keyup.mask", keyupEvent).on("keydown.mask", keydownEvent).on("keypress.mask", keypressEvent)
                            .on("input.mask paste.mask", function() {
                                input.prop("readonly") || setTimeout(function() {
                                    var pos = checkVal(!0);
                                    input.caret(pos), tryFireCompleted();
                                }, 0);
                            }), chrome && android && input.off("input.mask").on("input.mask", androidInputEvent),
                        checkVal();
                });
        }
    });
});