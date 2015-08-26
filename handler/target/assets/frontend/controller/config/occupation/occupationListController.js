angular.module('handlerApp').controller('OccupationListController', ["$scope", "OccupationListFactory", "ngTableParams", "FilterSearchService", "$location", function($scope, OccupationListFactory, ngTableParams, FilterSearchService, $location){

    $scope.itemsBreadCrumbs = [];
    $scope.itemsBreadCrumbs.push({name: 'voltar', url: '#/'});
    $scope.itemsIndicators = [];

	$scope.tableOccupation = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        sorting: {
            name: 'asc'     // initial sorting
        }
    }, {
        total: 0,           // length of data
        getData: function($defer, params) {
            OccupationListFactory.load(params.count(), function(data){
                $scope.hasData = data.count > 0;
                params.total(data.count);
            	$defer.resolve(data.list);
            });
        }
    });
}]);
