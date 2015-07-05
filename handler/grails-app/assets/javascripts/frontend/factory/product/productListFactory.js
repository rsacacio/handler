angular.module('handlerApp').factory('ProductListFactory', function($http){
	var load = function(params, callback){
		debugger;
		$http.get('Product/list', { filter: params }).success(callback);
	};

	return {
		load: load
	}
});