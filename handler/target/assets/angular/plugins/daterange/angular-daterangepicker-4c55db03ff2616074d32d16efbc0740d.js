(function(){var h;h=angular.module("daterangepicker",[]);h.constant("dateRangePickerConfig",{separator:" - ",format:"YYYY-MM-DD",clearLabel:"Clear"});h.directive("dateRangePicker",["$compile","$timeout","$parse","dateRangePickerConfig",function(h,l,v,u){return{require:"ngModel",restrict:"A",scope:{dateMin:"=min",dateMax:"=max",model:"=ngModel",opts:"=options",clearable:"="},link:function(e,h,m,d){var n,g,c,t,k,f,p,q,r,s;g=$(h);c=angular.extend({},u,e.opts);f=null;n=function(){f.setStartDate();f.setEndDate();
return g.val("")};q=function(a){return l(function(){var b;if(f)return a?(b=moment(a),f.endDate<b&&f.setEndDate(b),f.setStartDate(b)):n()})};p=function(a){return l(function(){var b;if(f)return a?(b=moment(a),f.startDate>b&&f.setStartDate(b),f.setEndDate(b)):n()})};e.$watch("model.startDate",function(a){return q(a)});e.$watch("model.endDate",function(a){return p(a)});t=function(a){var b;b=function(a){return moment.isMoment(a)?a.format(c.format):moment(a).format(c.format)};return c.singleDatePicker?
b(a.startDate):[b(a.startDate),b(a.endDate)].join(c.separator)};s=function(a,b){var c;a=moment(a);b=moment(b);c=a.isBefore(b)||a.isSame(b,"day");d.$setValidity("min",c);return c};r=function(a,b){var c;a=moment(a);b=moment(b);c=a.isAfter(b)||a.isSame(b,"day");d.$setValidity("max",c);return c};d.$formatters.push(function(a){return a&&a.startDate&&a.endDate?(q(a.startDate),p(a.endDate),a):""});d.$parsers.push(function(a){if(!angular.isObject(a)||!a.hasOwnProperty("startDate")||!a.hasOwnProperty("endDate"))return d.$modelValue;
e.dateMin&&a.startDate?s(e.dateMin,a.startDate):d.$setValidity("min",!0);e.dateMax&&a.endDate?r(e.dateMax,a.endDate):d.$setValidity("max",!0);return a});d.$isEmpty=function(a){return!a||null===a.startDate||null===a.endDate};d.$render=function(){return d.$modelValue&&null!==d.$modelValue.startDate?g.val(t(d.$modelValue)):g.val("")};k=function(){var a,b,e;g.daterangepicker(c,function(a,b){l(function(){return d.$setViewValue({startDate:a,endDate:b})});return d.$render()});f=g.data("daterangepicker");
e=c.eventHandlers;for(b in e)a=e[b],g.on(b,a);m.clearable&&(a=c.locale||{},a.cancelLabel=c.clearLabel,c.locale=a,g.on("cancel.daterangepicker",function(){d.$setViewValue({startDate:null,endDate:null});d.$render();return g.trigger("change")}))};k();g.change(function(){if(""===$.trim(g.val()))return l(function(){return d.$setViewValue({startDate:null,endDate:null})})});m.min&&e.$watch("dateMin",function(a){a?(d.$isEmpty(d.$modelValue)||s(a,d.$modelValue.startDate),c.minDate=moment(a)):c.minDate=!1;
return k()});m.max&&e.$watch("dateMax",function(a){a?(d.$isEmpty(d.$modelValue)||r(a,d.$modelValue.endDate),c.maxDate=moment(a)):c.maxDate=!1;return k()});m.options&&e.$watch("opts",function(a){c=angular.extend(c,a);return k()});return e.$on("$destroy",function(){return null!=f?f.remove():void 0})}}}])}).call(this);