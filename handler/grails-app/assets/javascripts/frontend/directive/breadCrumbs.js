angular.module('handlerApp').directive('fwBreadCrumbs', function(){
	return {
		restrict: 'E',
		scope: {
			items: '=items',
			title: '@title'
		},
		templateUrl: 'views/directive/breadCrumb.html',
		link: function(scope, iElement, iAttrs){
			
		}
	}
});