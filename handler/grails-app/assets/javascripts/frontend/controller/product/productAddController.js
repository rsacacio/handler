angular.module('handlerApp').controller('ProductAddController', function($scope, $location, ProductAddFactory){
	$scope.save = function(){
		$scope.$broadcast('show-errors-check-validity');
	    if ($scope.productForm.$valid) {
			ProductAddFactory.save($scope.product, function(data){
				$location.path('/products/');
			});
		}
	};

	ProductAddFactory.loadUnit(function(data){
		console.log('a');
		$scope.unitList = data;
	});

	ProductAddFactory.loadCategory(function(data){
		$scope.categoryList = data;
		console.log(data);
	});

	$scope.itemsBreadCrumbs = [];
    $scope.itemsBreadCrumbs.push({name: 'voltar', url: '#/products'});
});