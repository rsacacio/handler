angular.module('handlerApp').controller('ProductListController', function($scope, ProductListFactory, ngTableParams, FilterSearchService){
    $scope.itemsBreadCrumbs = [];
    $scope.itemsBreadCrumbs.push({name: 'voltar', url: '#/'});    
    $scope.itemsIndicators = [];

	$scope.tableProducts = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        sorting: {
            name: 'asc'     // initial sorting
        }
    }, {
        total: 0,           // length of data
        getData: function($defer, params) {
            ProductListFactory.load(FilterSearchService.create(params), function(data){
                $scope.hasData = data.count > 0;
                params.total(data.count);
            	$defer.resolve(data.list);
            });
        }
    });
});