angular.module('handlerApp').controller('ProductListController', function($scope, ProductListFactory, ngTableParams, FilterSearchService){
    debugger;

    $scope.itemsBreadCrumbs = [];
    $scope.itemsBreadCrumbs.push({name: 'voltar', url: '#/'});
    
    $scope.itemsIndicators = [];

    $scope.hasData = true;
	$scope.tableProducts = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        sorting: {
            name: 'asc'     // initial sorting
        }
    }, {
        total: 0,           // length of data
        getData: function($defer, params) {
            debugger;
            ProductListFactory.load(FilterSearchService.create(params), function(data){
                console.log(data);
                $scope.hasData = data.count > 0;
                params.total(data.count);
            	$defer.resolve(data.list);
            });
        }
    });
});