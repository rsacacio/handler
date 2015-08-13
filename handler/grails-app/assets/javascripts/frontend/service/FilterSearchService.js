angular.module('handlerApp').service('FilterSearchService', function(){

    var create = function(params){

        var order = '';
        var sort = '';
        
        if(params.sorting()){
            var orderBy = params.orderBy()[0];
            if(orderBy.indexOf('+') > -1){
                var arrOrderBy = orderBy.split('+');
                order = 'asc';
                sort = arrOrderBy[1];
            }else{
                var arrOrderBy = orderBy.split('-');
                order = 'desc';
                sort = arrOrderBy[1];
            }
        }

        return {
            page: params.page(),
            size: params.count(),
            order: order,
            sort: sort,
            search: params.filter()[0]
        };
    };
    
    return {
        create: create
    };
});