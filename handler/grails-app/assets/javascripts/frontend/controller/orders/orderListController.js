angular.module('handlerApp').controller('OrderListController', function($scope, ngTableParams, ProductListFactory, FilterSearchService){
	$scope.itemsBreadCrumbs = [];
    $scope.itemsBreadCrumbs.push({name: 'voltar', url: '#/'});

    $scope.itemsIndicators = [];
    $scope.hasData = false;

	$scope.tableOrders = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        sorting: {
            name: 'asc'     // initial sorting
        }
    }, {
        total: 0,           // length of data
        getData: function($defer, params) {
        	console.log(params);
            ProductListFactory.load(FilterSearchService.create(params), function(data){
                console.log(data);
                hasData = data.count > 0;
                params.total(data.count);
                $defer.resolve(data.list);
            });
        }
    });

});