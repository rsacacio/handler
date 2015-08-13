angular.module('handlerApp').directive('fwMenuItem', function($location){
	return {
		restrict: 'E',
		scope: {
			title: '@title',
			icon: '@icon',
			url: '@url'
		},
		templateUrl: 'views/directive/menuItem.html',
		link: function(scope, iElement, iAttrs){
			scope.getActive = function(path) {
				if(getActive(path)){
					return 'menu-item-active';
				}
				return '';
			};

			scope.getImageActive = function(path){
				if(getActive(path)){
					return '-active';
				}
				return '';	
			};

			var getActive = function(path){
				if($location.path().substr(0, path.length) === path){
					return true;
				}
				return false;
			};
		}
	}
});