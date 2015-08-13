angular.module('handlerApp').controller('ConfigAmbianceController', function($scope, $routeParams){
	$scope.page = 'views/config/'+ $routeParams.page + '/' + $routeParams.page + $routeParams.list + '.html';

	$scope.activeMenu = function(path){
		if($routeParams.page === path){
			return 'active';
		}
		return '';
	}
});