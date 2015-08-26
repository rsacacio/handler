angular.module('handlerApp').controller('UnitListController', ["$scope", "UnitListFactory", "ngTableParams", "FilterSearchService", "$location", function($scope, UnitListFactory, ngTableParams, FilterSearchService, $location){

    $scope.itemsBreadCrumbs = [];
    $scope.itemsBreadCrumbs.push({name: 'voltar', url: '#/'});
    $scope.itemsIndicators = [];

	$scope.tableUnit = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        sorting: {
            name: 'asc'     // initial sorting
        }
    }, {
        total: 0,           // length of data
        getData: function($defer, params) {
            UnitListFactory.load(params.count(), function(data){
                $scope.hasData = data.count > 0;
                params.total(data.count);
            	$defer.resolve(data.list);
            });
        }
    });
}]);
