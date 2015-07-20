angular.module('handlerApp').controller('CategoryAddController', function($scope, $location, CategoryAddFactory){
	$scope.save = function(){
		CategoryAddFactory.save($scope.category, function(data){
			$location.path('/category/');
		});
	};
});