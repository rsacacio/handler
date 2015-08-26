/*
: Copyright (c) 2012-2014 Dan Grossman. All rights reserved.
 @license: Licensed under Apache License v2.0. See http://www.apache.org/licenses/LICENSE-2.0
 @website: http://www.improvely.com/
*/
(function(l,n){if("function"===typeof define&&define.amd)define(["moment","jquery","exports"],function(e,m,a){l.daterangepicker=n(l,a,e,m)});else if("undefined"!==typeof exports){var p=require("moment");n(l,exports,p)}else l.daterangepicker=n(l,{},l.momentjs,l.jQuery||l.Zepto||l.ender||l.$)})(this,function(l,n,p,e){var m=function(a,c,d){this.parentEl="body";this.element=e(a);this.isShowing=!1;if("object"!==typeof c||null===c)c={};this.parentEl="object"===typeof c&&c.parentEl&&e(c.parentEl).length?
e(c.parentEl):e(this.parentEl);this.container=e('<div class="daterangepicker dropdown-menu"><div class="calendar left"></div><div class="calendar right"></div><div class="ranges"><div class="range_inputs"><div class="daterangepicker_start_input"><label for="daterangepicker_start"></label><input class="input-mini" type="text" name="daterangepicker_start" value="" /></div><div class="daterangepicker_end_input"><label for="daterangepicker_end"></label><input class="input-mini" type="text" name="daterangepicker_end" value="" /></div><button class="applyBtn" disabled="disabled"></button>&nbsp;<button class="cancelBtn"></button></div></div></div>').appendTo(this.parentEl);
this.setOptions(c,d);var f=this.container;e.each(this.buttonClasses,function(a,c){f.find("button").addClass(c)});this.container.find(".daterangepicker_start_input label").html(this.locale.fromLabel);this.container.find(".daterangepicker_end_input label").html(this.locale.toLabel);this.applyClass.length&&this.container.find(".applyBtn").addClass(this.applyClass);this.cancelClass.length&&this.container.find(".cancelBtn").addClass(this.cancelClass);this.container.find(".applyBtn").html(this.locale.applyLabel);
this.container.find(".cancelBtn").html(this.locale.cancelLabel);this.container.find(".calendar").on("click.daterangepicker",".prev",e.proxy(this.clickPrev,this)).on("click.daterangepicker",".next",e.proxy(this.clickNext,this)).on("click.daterangepicker","td.available",e.proxy(this.clickDate,this)).on("mouseenter.daterangepicker","td.available",e.proxy(this.hoverDate,this)).on("mouseleave.daterangepicker","td.available",e.proxy(this.updateFormInputs,this)).on("change.daterangepicker","select.yearselect",
e.proxy(this.updateMonthYear,this)).on("change.daterangepicker","select.monthselect",e.proxy(this.updateMonthYear,this)).on("change.daterangepicker","select.hourselect,select.minuteselect,select.ampmselect",e.proxy(this.updateTime,this));this.container.find(".ranges").on("click.daterangepicker","button.applyBtn",e.proxy(this.clickApply,this)).on("click.daterangepicker","button.cancelBtn",e.proxy(this.clickCancel,this)).on("click.daterangepicker",".daterangepicker_start_input,.daterangepicker_end_input",
e.proxy(this.showCalendars,this)).on("change.daterangepicker",".daterangepicker_start_input,.daterangepicker_end_input",e.proxy(this.inputsChanged,this)).on("keydown.daterangepicker",".daterangepicker_start_input,.daterangepicker_end_input",e.proxy(this.inputsKeydown,this)).on("click.daterangepicker","li",e.proxy(this.clickRange,this)).on("mouseenter.daterangepicker","li",e.proxy(this.enterRange,this)).on("mouseleave.daterangepicker","li",e.proxy(this.updateFormInputs,this));if(this.element.is("input"))this.element.on({"click.daterangepicker":e.proxy(this.show,
this),"focus.daterangepicker":e.proxy(this.show,this),"keyup.daterangepicker":e.proxy(this.updateFromControl,this)});else this.element.on("click.daterangepicker",e.proxy(this.toggle,this))};m.prototype={constructor:m,setOptions:function(a,c){this.startDate=moment().startOf("day");this.endDate=moment().endOf("day");this.timePicker=this.showWeekNumbers=this.showDropdowns=this.dateLimit=this.maxDate=this.minDate=!1;this.timePickerIncrement=30;this.timePicker12Hour=!0;this.singleDatePicker=!1;this.ranges=
{};this.opens="right";this.element.hasClass("pull-right")&&(this.opens="left");this.buttonClasses=["btn","btn-small btn-sm"];this.applyClass="btn-success";this.cancelClass="btn-default";this.format="MM/DD/YYYY";this.separator=" - ";this.locale={applyLabel:"Apply",cancelLabel:"Cancel",fromLabel:"From",toLabel:"To",weekLabel:"W",customRangeLabel:"Custom Range",daysOfWeek:moment()._lang._weekdaysMin.slice(),monthNames:moment()._lang._monthsShort.slice(),firstDay:moment()._lang._week.dow};this.cb=function(){};
"string"===typeof a.format&&(this.format=a.format);"string"===typeof a.separator&&(this.separator=a.separator);"string"===typeof a.startDate&&(this.startDate=moment(a.startDate,this.format));"string"===typeof a.endDate&&(this.endDate=moment(a.endDate,this.format));"string"===typeof a.minDate&&(this.minDate=moment(a.minDate,this.format));"string"===typeof a.maxDate&&(this.maxDate=moment(a.maxDate,this.format));"object"===typeof a.startDate&&(this.startDate=moment(a.startDate));"object"===typeof a.endDate&&
(this.endDate=moment(a.endDate));"object"===typeof a.minDate&&(this.minDate=moment(a.minDate));"object"===typeof a.maxDate&&(this.maxDate=moment(a.maxDate));"string"===typeof a.applyClass&&(this.applyClass=a.applyClass);"string"===typeof a.cancelClass&&(this.cancelClass=a.cancelClass);"object"===typeof a.dateLimit&&(this.dateLimit=a.dateLimit);"object"===typeof a.locale&&("object"===typeof a.locale.daysOfWeek&&(this.locale.daysOfWeek=a.locale.daysOfWeek.slice()),"object"===typeof a.locale.monthNames&&
(this.locale.monthNames=a.locale.monthNames.slice()),"number"===typeof a.locale.firstDay&&(this.locale.firstDay=a.locale.firstDay),"string"===typeof a.locale.applyLabel&&(this.locale.applyLabel=a.locale.applyLabel),"string"===typeof a.locale.cancelLabel&&(this.locale.cancelLabel=a.locale.cancelLabel),"string"===typeof a.locale.fromLabel&&(this.locale.fromLabel=a.locale.fromLabel),"string"===typeof a.locale.toLabel&&(this.locale.toLabel=a.locale.toLabel),"string"===typeof a.locale.weekLabel&&(this.locale.weekLabel=
a.locale.weekLabel),"string"===typeof a.locale.customRangeLabel&&(this.locale.customRangeLabel=a.locale.customRangeLabel));"string"===typeof a.opens&&(this.opens=a.opens);"boolean"===typeof a.showWeekNumbers&&(this.showWeekNumbers=a.showWeekNumbers);"string"===typeof a.buttonClasses&&(this.buttonClasses=[a.buttonClasses]);"object"===typeof a.buttonClasses&&(this.buttonClasses=a.buttonClasses);"boolean"===typeof a.showDropdowns&&(this.showDropdowns=a.showDropdowns);"boolean"===typeof a.singleDatePicker&&
(this.singleDatePicker=a.singleDatePicker);"boolean"===typeof a.timePicker&&(this.timePicker=a.timePicker);"number"===typeof a.timePickerIncrement&&(this.timePickerIncrement=a.timePickerIncrement);"boolean"===typeof a.timePicker12Hour&&(this.timePicker12Hour=a.timePicker12Hour);if(0!=this.locale.firstDay)for(var d=this.locale.firstDay;0<d;)this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()),d--;var f,b;if("undefined"===typeof a.startDate&&"undefined"===typeof a.endDate&&e(this.element).is("input[type=text]")){var g=
e(this.element).val(),h=g.split(this.separator),d=f=null;2==h.length?(d=moment(h[0],this.format),f=moment(h[1],this.format)):this.singleDatePicker&&(d=moment(g,this.format),f=moment(g,this.format));null!==d&&null!==f&&(this.startDate=d,this.endDate=f)}if("object"===typeof a.ranges){for(b in a.ranges)d=moment(a.ranges[b][0]),f=moment(a.ranges[b][1]),this.minDate&&d.isBefore(this.minDate)&&(d=moment(this.minDate)),this.maxDate&&f.isAfter(this.maxDate)&&(f=moment(this.maxDate)),this.minDate&&f.isBefore(this.minDate)||
this.maxDate&&d.isAfter(this.maxDate)||(this.ranges[b]=[d,f]);d="<ul>";for(b in this.ranges)d+="<li>"+b+"</li>";d+="<li>"+this.locale.customRangeLabel+"</li>";d+="</ul>";this.container.find(".ranges ul").remove();this.container.find(".ranges").prepend(d)}"function"===typeof c&&(this.cb=c);this.timePicker||(this.startDate=this.startDate.startOf("day"),this.endDate=this.endDate.endOf("day"));this.singleDatePicker?(this.opens="right",this.container.find(".calendar.right").show(),this.container.find(".calendar.left").hide(),
this.container.find(".ranges").hide(),this.container.find(".calendar.right").hasClass("single")||this.container.find(".calendar.right").addClass("single")):(this.container.find(".calendar.right").removeClass("single"),this.container.find(".ranges").show());this.oldStartDate=this.startDate.clone();this.oldEndDate=this.endDate.clone();this.oldChosenLabel=this.chosenLabel;this.leftCalendar={month:moment([this.startDate.year(),this.startDate.month(),1,this.startDate.hour(),this.startDate.minute()]),calendar:[]};
this.rightCalendar={month:moment([this.endDate.year(),this.endDate.month(),1,this.endDate.hour(),this.endDate.minute()]),calendar:[]};"right"==this.opens&&(b=this.container.find(".calendar.left"),d=this.container.find(".calendar.right"),b.removeClass("left").addClass("right"),d.removeClass("right").addClass("left"));"undefined"!==typeof a.ranges||this.singleDatePicker||this.container.addClass("show-calendar");this.container.addClass("opens"+this.opens);this.updateView();this.updateCalendars()},setStartDate:function(a){"string"===
typeof a&&(this.startDate=moment(a,this.format));"object"===typeof a&&(this.startDate=moment(a));this.timePicker||(this.startDate=this.startDate.startOf("day"));this.oldStartDate=this.startDate.clone();this.updateView();this.updateCalendars();this.updateInputText()},setEndDate:function(a){"string"===typeof a&&(this.endDate=moment(a,this.format));"object"===typeof a&&(this.endDate=moment(a));this.timePicker||(this.endDate=this.endDate.endOf("day"));this.oldEndDate=this.endDate.clone();this.updateView();
this.updateCalendars();this.updateInputText()},updateView:function(){this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()).hour(this.startDate.hour()).minute(this.startDate.minute());this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()).hour(this.endDate.hour()).minute(this.endDate.minute());this.updateFormInputs()},updateFormInputs:function(){this.container.find("input[name=daterangepicker_start]").val(this.startDate.format(this.format));this.container.find("input[name=daterangepicker_end]").val(this.endDate.format(this.format));
this.startDate.isSame(this.endDate)||this.startDate.isBefore(this.endDate)?this.container.find("button.applyBtn").removeAttr("disabled"):this.container.find("button.applyBtn").attr("disabled","disabled")},updateFromControl:function(){if(this.element.is("input")&&this.element.val().length){var a=this.element.val().split(this.separator),c=null,d=null;2===a.length&&(c=moment(a[0],this.format),d=moment(a[1],this.format));if(this.singleDatePicker||null===c||null===d)d=c=moment(this.element.val(),this.format);
d.isBefore(c)||(this.oldStartDate=this.startDate.clone(),this.oldEndDate=this.endDate.clone(),this.startDate=c,this.endDate=d,this.startDate.isSame(this.oldStartDate)&&this.endDate.isSame(this.oldEndDate)||this.notify(),this.updateCalendars())}},notify:function(){this.updateView();this.cb(this.startDate,this.endDate,this.chosenLabel)},move:function(){var a=0,c=0;this.parentEl.is("body")||(a=this.parentEl.offset().top-this.parentEl.scrollTop(),c=this.parentEl.offset().left-this.parentEl.scrollLeft());
"left"==this.opens?(this.container.css({top:this.element.offset().top+this.element.outerHeight()-a,right:e(window).width()-this.element.offset().left-this.element.outerWidth()-c,left:"auto"}),0>this.container.offset().left&&this.container.css({right:"auto",left:9})):(this.container.css({top:this.element.offset().top+this.element.outerHeight()-a,left:this.element.offset().left-c,right:"auto"}),this.container.offset().left+this.container.outerWidth()>e(window).width()&&this.container.css({left:"auto",
right:0}))},toggle:function(a){this.element.hasClass("active")?this.hide():this.show()},show:function(a){this.isShowing||(this.element.addClass("active"),this.container.show(),this.move(),this._outsideClickProxy=e.proxy(function(a){this.outsideClick(a)},this),e(document).on("mousedown.daterangepicker",this._outsideClickProxy).on("click.daterangepicker","[data-toggle=dropdown]",this._outsideClickProxy).on("focusin.daterangepicker",this._outsideClickProxy),this.isShowing=!0,this.element.trigger("show.daterangepicker",
this))},outsideClick:function(a){a=e(a.target);a.closest(this.element).length||a.closest(this.container).length||a.closest(".calendar-date").length||this.hide()},hide:function(a){this.isShowing&&(e(document).off("mousedown.daterangepicker").off("click.daterangepicker","[data-toggle=dropdown]").off("focusin.daterangepicker"),this.element.removeClass("active"),this.container.hide(),this.startDate.isSame(this.oldStartDate)&&this.endDate.isSame(this.oldEndDate)||this.notify(),this.oldStartDate=this.startDate.clone(),
this.oldEndDate=this.endDate.clone(),this.isShowing=!1,this.element.trigger("hide.daterangepicker",this))},enterRange:function(a){a=a.target.innerHTML;a==this.locale.customRangeLabel?this.updateView():(a=this.ranges[a],this.container.find("input[name=daterangepicker_start]").val(a[0].format(this.format)),this.container.find("input[name=daterangepicker_end]").val(a[1].format(this.format)))},showCalendars:function(){this.container.addClass("show-calendar");this.move();this.element.trigger("showCalendar.daterangepicker",
this)},hideCalendars:function(){this.container.removeClass("show-calendar");this.element.trigger("hideCalendar.daterangepicker",this)},inputsChanged:function(a){var c=e(a.target);a=moment(c.val());a.isValid()&&("daterangepicker_start"===c.attr("name")?(c=a,a=this.endDate):c=this.startDate,this.setCustomDates(c,a))},inputsKeydown:function(a){13===a.keyCode&&(this.inputsChanged(a),this.notify())},updateInputText:function(){this.element.is("input")&&!this.singleDatePicker?this.element.val(this.startDate.format(this.format)+
this.separator+this.endDate.format(this.format)):this.element.is("input")&&this.element.val(this.startDate.format(this.format))},clickRange:function(a){this.chosenLabel=a=a.target.innerHTML;a==this.locale.customRangeLabel?this.showCalendars():(a=this.ranges[a],this.startDate=a[0],this.endDate=a[1],this.timePicker||(this.startDate.startOf("day"),this.endDate.endOf("day")),this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()).hour(this.startDate.hour()).minute(this.startDate.minute()),
this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()).hour(this.endDate.hour()).minute(this.endDate.minute()),this.updateCalendars(),this.updateInputText(),this.hideCalendars(),this.hide(),this.element.trigger("apply.daterangepicker",this))},clickPrev:function(a){e(a.target).parents(".calendar").hasClass("left")?this.leftCalendar.month.subtract("month",1):this.rightCalendar.month.subtract("month",1);this.updateCalendars()},clickNext:function(a){e(a.target).parents(".calendar").hasClass("left")?
this.leftCalendar.month.add("month",1):this.rightCalendar.month.add("month",1);this.updateCalendars()},hoverDate:function(a){var c=e(a.target).attr("data-title"),d=c.substr(1,1),c=c.substr(3,1);e(a.target).parents(".calendar").hasClass("left")?this.container.find("input[name=daterangepicker_start]").val(this.leftCalendar.calendar[d][c].format(this.format)):this.container.find("input[name=daterangepicker_end]").val(this.rightCalendar.calendar[d][c].format(this.format))},setCustomDates:function(a,c){this.chosenLabel=
this.locale.customRangeLabel;if(a.isAfter(c)){var d=this.endDate.diff(this.startDate);c=moment(a).add("ms",d)}this.startDate=a;this.endDate=c;this.updateView();this.updateCalendars()},clickDate:function(a){var c=e(a.target).attr("data-title"),d=c.substr(1,1),f=c.substr(3,1),c=e(a.target).parents(".calendar"),b;c.hasClass("left")?(b=this.leftCalendar.calendar[d][f],d=this.endDate,"object"===typeof this.dateLimit&&(f=moment(b).add(this.dateLimit).startOf("day"),d.isAfter(f)&&(d=f))):(b=this.startDate,
d=this.rightCalendar.calendar[d][f],"object"===typeof this.dateLimit&&(f=moment(d).subtract(this.dateLimit).startOf("day"),b.isBefore(f)&&(b=f)));this.singleDatePicker&&c.hasClass("left")?d=b.clone():this.singleDatePicker&&c.hasClass("right")&&(b=d.clone());c.find("td").removeClass("active");e(a.target).addClass("active");this.setCustomDates(b,d);this.timePicker||d.endOf("day");this.singleDatePicker&&this.clickApply()},clickApply:function(a){this.updateInputText();this.hide();this.element.trigger("apply.daterangepicker",
this)},clickCancel:function(a){this.startDate=this.oldStartDate;this.endDate=this.oldEndDate;this.chosenLabel=this.oldChosenLabel;this.updateView();this.updateCalendars();this.hide();this.element.trigger("cancel.daterangepicker",this)},updateMonthYear:function(a){a=e(a.target).closest(".calendar").hasClass("left")?"left":"right";var c=this.container.find(".calendar."+a),d=parseInt(c.find(".monthselect").val(),10),c=c.find(".yearselect").val();this[a+"Calendar"].month.month(d).year(c);this.updateCalendars()},
updateTime:function(a){var c=e(a.target).closest(".calendar"),d=c.hasClass("left");a=parseInt(c.find(".hourselect").val(),10);var f=parseInt(c.find(".minuteselect").val(),10);this.timePicker12Hour&&(c=c.find(".ampmselect").val(),"PM"===c&&12>a&&(a+=12),"AM"===c&&12===a&&(a=0));d?(d=this.startDate.clone(),d.hour(a),d.minute(f),this.startDate=d,this.leftCalendar.month.hour(a).minute(f)):(d=this.endDate.clone(),d.hour(a),d.minute(f),this.endDate=d,this.rightCalendar.month.hour(a).minute(f));this.updateCalendars()},
updateCalendars:function(){this.leftCalendar.calendar=this.buildCalendar(this.leftCalendar.month.month(),this.leftCalendar.month.year(),this.leftCalendar.month.hour(),this.leftCalendar.month.minute(),"left");this.rightCalendar.calendar=this.buildCalendar(this.rightCalendar.month.month(),this.rightCalendar.month.year(),this.rightCalendar.month.hour(),this.rightCalendar.month.minute(),"right");this.container.find(".calendar.left").empty().html(this.renderCalendar(this.leftCalendar.calendar,this.startDate,
this.minDate,this.maxDate));this.container.find(".calendar.right").empty().html(this.renderCalendar(this.rightCalendar.calendar,this.endDate,this.startDate,this.maxDate));this.container.find(".ranges li").removeClass("active");var a=!0,c=0,d;for(d in this.ranges)this.timePicker?this.startDate.isSame(this.ranges[d][0])&&this.endDate.isSame(this.ranges[d][1])&&(a=!1,this.chosenLabel=this.container.find(".ranges li:eq("+c+")").addClass("active").html()):this.startDate.format("YYYY-MM-DD")==this.ranges[d][0].format("YYYY-MM-DD")&&
this.endDate.format("YYYY-MM-DD")==this.ranges[d][1].format("YYYY-MM-DD")&&(a=!1,this.chosenLabel=this.container.find(".ranges li:eq("+c+")").addClass("active").html()),c++;a&&(this.chosenLabel=this.container.find(".ranges li:last").addClass("active").html(),this.showCalendars())},buildCalendar:function(a,c,d,f,b){a=moment([c,a,1]);b=moment(a).subtract("month",1).month();var e=moment(a).subtract("month",1).year(),h=moment([e,b]).daysInMonth(),k=a.day();a=[];for(c=0;6>c;c++)a[c]=[];c=h-k+this.locale.firstDay+
1;c>h&&(c-=7);k==this.locale.firstDay&&(c=h-6);f=moment([e,b,c,12,f]);for(e=b=c=0;42>c;c++,b++,f=moment(f).add("hour",24))0<c&&0===b%7&&(b=0,e++),a[e][b]=f.clone().hour(d),f.hour(12);return a},renderDropdowns:function(a,c,d){for(var e=a.month(),b='<select class="monthselect">',g=0;12>g;g++)b+="<option value='"+g+"'"+(g===e?" selected='selected'":"")+">"+this.locale.monthNames[g]+"</option>";b+="</select>";a=a.year();d=d&&d.year()||a+5;e='<select class="yearselect">';for(c=c&&c.year()||a-50;c<=d;c++)e+=
'<option value="'+c+'"'+(c===a?' selected="selected"':"")+">"+c+"</option>";return b+(e+"</select>")},renderCalendar:function(a,c,d,f){var b='<div class="calendar-date">',b=b+'<table class="table-condensed">',b=b+"<thead>",b=b+"<tr>";this.showWeekNumbers&&(b+="<th></th>");var b=!d||d.isBefore(a[1][1])?b+'<th class="prev available"><i class="fa fa-arrow-left icon-arrow-left glyphicon glyphicon-arrow-left"></i></th>':b+"<th></th>",g=this.locale.monthNames[a[1][1].month()]+a[1][1].format(" YYYY");this.showDropdowns&&
(g=this.renderDropdowns(a[1][1],d,f));b+='<th colspan="5" class="month">'+g+"</th>";b=!f||f.isAfter(a[1][1])?b+'<th class="next available"><i class="fa fa-arrow-right icon-arrow-right glyphicon glyphicon-arrow-right"></i></th>':b+"<th></th>";b+="</tr>";b+="<tr>";this.showWeekNumbers&&(b+='<th class="week">'+this.locale.weekLabel+"</th>");e.each(this.locale.daysOfWeek,function(a,c){b+="<th>"+c+"</th>"});b+="</tr>";b+="</thead>";b+="<tbody>";for(g=0;6>g;g++){b+="<tr>";this.showWeekNumbers&&(b+='<td class="week">'+
a[g][0].week()+"</td>");for(var h=0;7>h;h++){var k="available ",k=k+(a[g][h].month()==a[1][1].month()?"":"off");d&&a[g][h].isBefore(d,"day")||f&&a[g][h].isAfter(f,"day")?k=" off disabled ":a[g][h].format("YYYY-MM-DD")==c.format("YYYY-MM-DD")?(k+=" active ",a[g][h].format("YYYY-MM-DD")==this.startDate.format("YYYY-MM-DD")&&(k+=" start-date "),a[g][h].format("YYYY-MM-DD")==this.endDate.format("YYYY-MM-DD")&&(k+=" end-date ")):a[g][h]>=this.startDate&&a[g][h]<=this.endDate&&(k+=" in-range ",a[g][h].isSame(this.startDate)&&
(k+=" start-date "),a[g][h].isSame(this.endDate)&&(k+=" end-date "));var l="r"+g+"c"+h,b=b+('<td class="'+k.replace(/\s+/g," ").replace(/^\s?(.*?)\s?$/,"$1")+'" data-title="'+l+'">'+a[g][h].date()+"</td>")}b+="</tr>"}b+="</tbody>";b+="</table>";b+="</div>";if(this.timePicker){b+='<div class="calendar-time">';b+='<select class="hourselect">';a=0;d=23;f=c.hour();this.timePicker12Hour&&(a=1,d=12,12<=f&&(f-=12),0===f&&(f=12));for(;a<=d;a++)b=a==f?b+('<option value="'+a+'" selected="selected">'+a+"</option>"):
b+('<option value="'+a+'">'+a+"</option>");b+="</select> : ";b+='<select class="minuteselect">';for(a=0;60>a;a+=this.timePickerIncrement)d=a,10>d&&(d="0"+d),b=a==c.minute()?b+('<option value="'+a+'" selected="selected">'+d+"</option>"):b+('<option value="'+a+'">'+d+"</option>");b+="</select> ";this.timePicker12Hour&&(b+='<select class="ampmselect">',b=12<=c.hour()?b+'<option value="AM">AM</option><option value="PM" selected="selected">PM</option>':b+'<option value="AM" selected="selected">AM</option><option value="PM">PM</option>',
b+="</select>");b+="</div>"}return b},remove:function(){this.container.remove();this.element.off(".daterangepicker");this.element.removeData("daterangepicker")}};e.fn.daterangepicker=function(a,c){this.each(function(){var d=e(this);d.data("daterangepicker")&&d.data("daterangepicker").remove();d.data("daterangepicker",new m(d,a,c))});return this}});