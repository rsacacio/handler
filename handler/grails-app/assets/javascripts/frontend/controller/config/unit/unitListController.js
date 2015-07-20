angular.module('handlerApp').controller('UnitListController', function($scope, UnitListFactory, ngTableParams, FilterSearchService, $location){

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
            	$defer.resolve(data);
            });
        }
    });

    $scope.itemsBreadCrumbs = [];
    $scope.itemsBreadCrumbs.push({name: 'voltar', url: '#/'});

    $scope.itemsIndicators = [];
});