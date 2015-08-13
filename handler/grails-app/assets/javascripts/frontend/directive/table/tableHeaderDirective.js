'use strict';

/**
 * @ngdoc function
 * @name handlerApp.factory:hanTableHeader
 * @description
 * # hanTableHeader
 * Directive of the handlerApp
 */
angular.module('handlerApp').directive('hanTableHeader', function(){

	return {
	    restrict: 'E',
	    replace: true,
	    scope: {
	      title: '@title',
	      sort: '@sort',
	      tableParams: '=tableParams'
	    },
	    templateUrl: 'views/directive/table/tableHeaderDirective.html',
	    link: function(scope){

	    	var getClassBySort = function(){
	    		if(scope.tableParams.isSortBy(scope.sort, 'asc')){
	    			return '-asc';
	    		}
	    		if(scope.tableParams.isSortBy(scope.sort, 'desc')){
        			return '-desc';
      			}
      			return '';
	    	}

	    	scope.classHeader = function(){
	    		return 'sort' + getClassBySort();
	    	};

	    	scope.classSort = function(){
	    		return 'fa fa-sort' + getClassBySort();
	    	}

	    	scope.sortList = function(){
	    		var sorting = {};
	    		sorting[scope.sort] = scope.tableParams.isSortBy(scope.sort, 'asc') ? 'desc' : 'asc';
	    		scope.tableParams.sorting(sorting);
	    	}
		}
	};
});