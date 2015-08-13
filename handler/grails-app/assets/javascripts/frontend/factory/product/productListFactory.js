angular.module('handlerApp').factory('ProductListFactory', function($http){
	var load = function(params, callback){
		$http.get('Product/list', { params: { filter: params }}).success(callback);
	};

	return {
		load: load
	}
});