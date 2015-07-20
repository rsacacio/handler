angular.module('handlerApp').controller('ProductListController', function($scope, ProductListFactory, ngTableParams, FilterSearchService){

	$scope.tableProduct = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        sorting: {
            name: 'asc'     // initial sorting
        }
    }, {
        total: 0,           // length of data
        getData: function($defer, params) {
            ProductListFactory.load(FilterSearchService.formatterFilter(params), function(data){
                console.log(data);
            	$defer.resolve(data);
            });
        }
    });

    $scope.itemsBreadCrumbs = [];
    $scope.itemsBreadCrumbs.push({name: 'voltar', url: '#/'});
    
    $scope.itemsIndicators = [];
});