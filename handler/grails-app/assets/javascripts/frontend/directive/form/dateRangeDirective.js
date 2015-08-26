/**
* fluidocApp Module
*
* Description
*/
angular.module('handlerApp').directive('hanDateRange', function($compile, $timeout, $filter, LocaleDateFactory){
	return {
		restrict: 'E',
	    replace: true,
	    scope: {
	      model: '=model',
	      sigle: '@sigle',
	      fieldRequired: '@fieldRequired',
	      name: '@name',
	      min: '@minDate'
	    },
	    template: '',
	    link: function (scope, iElement, iAttrs) {
			var montarDateRange = function(localeCalendar)
			{
				var range = {};
				range[localeCalendar.range.hoje] = [moment(), moment()];
				range[localeCalendar.range.ultimos7dias] = [moment().subtract('days', 6), moment()];
				range[localeCalendar.range.ultimos30dias] = [moment().subtract('days', 29), moment()],
				range[localeCalendar.range.esteMes] = [moment().startOf('month'), moment().endOf('month')],
				range[localeCalendar.range.ultimoMes] = [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
				return range;
			}

			var montarDateLocale = function(localeCalendar)
			{
				return { 
					daysOfWeek: localeCalendar.daysOfWeek, 
					monthNames: localeCalendar.monthNames,
					applyLabel: localeCalendar.applyLabel,
			        cancelLabel: localeCalendar.cancelLabel,
			        fromLabel: localeCalendar.fromLabel,
			        toLabel: localeCalendar.toLabel,
			        customRangeLabel: localeCalendar.customRangeLabel
			    };
			}

			var createOpts = function(){
				var localeCalendar = LocaleDateFactory.load();
				scope.opts = {
					ranges: montarDateRange(localeCalendar),
					startDate: moment().subtract('days', 1),
					format: localeCalendar.format,
					locale: montarDateLocale(localeCalendar)
				};

				if(scope.min){
					scope.opts.minDate = new Date(scope.min.replace(/\"/g, ''));
				}

				if(scope.sigle)
				{
					scope.opts.singleDatePicker = true;
				}
				else
				{
					scope.opts.ranges = montarDateRange(localeCalendar);
					scope.opts.endDate = moment().add('days', 7);
				}

				
				scope.opts.eventHandlers = {'apply.daterangepicker': function (ev, dateRangePicker){
			    	scope.model = {startDate: dateRangePicker.startDate, endDate: dateRangePicker.endDate};
			     	scope.$apply();
			    }}

			    scope.$watch('model', function(newValue, oldValue, scope) {
			    	if (!(newValue && newValue.startDate && newValue.endDate)){
		      			scope.spanModel = '';
			      		return;
			     	}

					var startDate =  $filter('date')(new Date(newValue.startDate), localeCalendar.format);
					if(scope.sigle){
						scope.spanModel = startDate;
					}else{
						scope.spanModel = startDate + ' - ' + $filter('date')(new Date(newValue.endDate), localeCalendar.format);
					}
			    });
		    };

		   	var changedLanguage = scope.$on('header.changedLanguage', function(event){
				createOpts();
		   	});
			scope.$on('$destroy', changedLanguage);

			var elemento = '<div class="form-control" class="pull-right" style="cursor: pointer;" date-range-picker="" disable="true" type="text" name="{{name}}" class="form-control date-picker" id="date-picker-input" options="opts" ng-model="model">';
			elemento += '<i class="fa fa-calendar"></i>&nbsp; <span>{{spanModel}}</span>';
			elemento += '&nbsp; <i ng-if="model" class="fa fa-times" ng-click="clear()"  style="float:right"></i>';
			elemento += '</div>';
			iElement.append(elemento);

			scope.clear = function(){
				scope.model = null;
			}

			$compile(iElement.contents())(scope);
			$timeout(function(){
				createOpts();
			});
		}
	};
});