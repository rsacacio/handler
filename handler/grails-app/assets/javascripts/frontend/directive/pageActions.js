angular.module('handlerApp').directive('fwPageActions', function(){
	return {
		restrict: 'E',
		scope: {
			buttonTitle: '@buttonTitle',
			buttonAction: '@buttonAction'
		},
		templateUrl: 'views/directive/pageActions.html',
		link: function(scope, iElement, iAttrs){
			
		}
	}
});