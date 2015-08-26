angular.module('handlerApp').controller('OccupationAddController', ["$scope", "$location", "OccupationAddFactory", function($scope, $location, OccupationAddFactory){
	$scope.save = function(){
		OccupationAddFactory.save($scope.occupation, function(data){
			$location.path('/occupation/');
		});
	};
}]);
