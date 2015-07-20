angular.module('handlerApp').directive('fwIndicators', function(){
	return {
		restrict: 'E',
		scope: {
			items: '=items'
		},
		templateUrl: 'views/directive/indicators.html',
		link: function(scope, iElement, iAttrs){
			
		}
	}
});