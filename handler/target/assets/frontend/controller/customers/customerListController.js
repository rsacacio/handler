angular.module('handlerApp').controller('CustomerListController', ["$scope", "ngTableParams", "FilterSearchService", "CustomerListFactory", function($scope, ngTableParams, FilterSearchService, CustomerListFactory){

	$scope.itemsBreadCrumbs = [];
    $scope.itemsBreadCrumbs.push({name: 'voltar', url: '#/'});    
    $scope.itemsIndicators = [];

	$scope.tableCustomer = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        sorting: {
            name: 'asc'     // initial sorting
        }
    }, {
        total: 0,           // length of data
        getData: function($defer, params) {
            CustomerListFactory.load(FilterSearchService.create(params), function(data){
                $scope.hasData = data.count > 0;
                params.total(data.count);
            	$defer.resolve(data.list);
            });
        }
    });
}]);
