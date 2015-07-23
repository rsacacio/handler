angular.module('handlerApp').directive('fwIndicators', function(){
	return {
		restrict: 'E',
		scope: {
			items: '=items'
		},
		templateUrl: 'views/directive/indicators.html',
		link: function(scope, iElement, iAttrs){
			scope.indicadores = [1,2,3,4];
			scope.indicadores2 = [1,2,3];

		}
	}
});