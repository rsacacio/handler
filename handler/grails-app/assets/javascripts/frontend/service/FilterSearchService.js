angular.module('handlerApp').service('FilterSearchService', function(){

    var formatterFilter = function(params){
        
        return {
            page: params.page(),
            size: params.count(),
            order: 'asc',
            field: 'name',
            search: ''
        }

    };

    return {
        formatterFilter: formatterFilter
    }
	
});