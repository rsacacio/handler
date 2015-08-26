angular.module('handlerApp').controller('CustomerAddController', ["$scope", "$location", "CustomerAddFactory", function($scope, $location, CustomerAddFactory){

	$scope.genders = [];
	$scope.genders.push({name: 'Feminino', id: 1});
	$scope.genders.push({name: 'Masculino', id: 2});

	$scope.save = function(){
		$scope.$broadcast('show-errors-check-validity');
	    if ($scope.customerForm.$valid) {
			CustomerAddFactory.save($scope.customer, function(data){
				$location.path('/customers');
			});
		}
	};

	$scope.cancel = function(){
		$location.path('/customers');
	};

	$scope.clean = function(){
		$scope.$broadcast('show-errors-reset');
	};

	$scope.itemsBreadCrumbs = [];
    $scope.itemsBreadCrumbs.push({name: 'voltar', url: '/customers'});
}]);
