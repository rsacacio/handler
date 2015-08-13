angular.module('handlerApp').directive('fwEmptyPage', function(){
	return {
		restrict: 'E',
		scope: {
			title: '@title',
			buttonTitle: '@buttonTitle',
			withImport: '@withImport',
			buttonAction: '@buttonAction'
		},
		templateUrl: 'views/directive/emptyPage.html',
		link: function(scope, iElement, iAttrs){
			
		}
	}
});