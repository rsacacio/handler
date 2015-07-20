angular.module('handlerApp').controller('CategoryListController', function($scope, CategoryListFactory, ngTableParams, FilterSearchService){

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
            	$defer.resolve(data);
            });
        }
    });
});