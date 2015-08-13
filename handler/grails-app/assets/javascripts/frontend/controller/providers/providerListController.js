angular.module('handlerApp').controller('ProviderListController', function($scope){
	$scope.itemsBreadCrumbs = [];
    $scope.itemsBreadCrumbs.push({name: 'voltar', url: '#/'});

    $scope.itemsIndicators = [];
    $scope.hasData = false;
});