angular.module('handlerApp').controller('CategoryListController', ["$scope", "CategoryListFactory", "ngTableParams", "FilterSearchService", function($scope, CategoryListFactory, ngTableParams, FilterSearchService){

    $scope.itemsBreadCrumbs = [];
    $scope.itemsBreadCrumbs.push({name: 'voltar', url: '#/'});
    $scope.itemsIndicators = [];

	$scope.tableCategory = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        sorting: {
            name: 'asc'     // initial sorting
        }
    }, {
        total: 0,           // length of data
        getData: function($defer, params) {
            CategoryListFactory.load(params.count(), function(data){
            	$scope.hasData = data.count > 0;
                params.total(data.count);
                $defer.resolve(data.list);
            });
        }
    });
}]);
