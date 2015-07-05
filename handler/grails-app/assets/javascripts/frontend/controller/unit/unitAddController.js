angular.module('handlerApp').controller('UnitAddController', function($scope, $location, UnitAddFactory){
	$scope.save = function(){
		UnitAddFactory.save($scope.unit, function(data){
			$location.path('/unit/');
		});
	};
});