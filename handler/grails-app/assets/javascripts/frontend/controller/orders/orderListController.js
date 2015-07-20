angular.module('handlerApp').controller('OrderListController', function($scope){
	$scope.itemsBreadCrumbs = [];
    $scope.itemsBreadCrumbs.push({name: 'voltar', url: '#/'});

    $scope.itemsIndicators = [];
});