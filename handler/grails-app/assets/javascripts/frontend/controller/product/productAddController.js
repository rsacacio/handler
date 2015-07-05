angular.module('handlerApp').controller('ProductAddController', function($scope, $location, ProductAddFactory){
	$scope.save = function(){
		ProductAddFactory.save($scope.product, function(data){
			$location.path('/product/');
		});
	};

	ProductAddFactory.loadUnit(function(data){
		console.log('a');
		$scope.unitList = data;
	});

	ProductAddFactory.loadCategory(function(data){
		$scope.categoryList = data;
		console.log(data);
	});
});