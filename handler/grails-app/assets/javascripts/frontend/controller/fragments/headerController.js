angular.module('handlerApp').controller('HeaderController', function($scope, $location){
	$scope.getClass = function(path) {
		if ($location.path().substr(0, path.length) == path) {
		  return 'active'
		}
		return '';
	}
});