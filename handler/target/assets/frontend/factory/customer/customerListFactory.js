angular.module('handlerApp').factory('CustomerListFactory', ["$http", function($http){
	var load = function(params, callback){
		$http.get('Customer/list', { params: { filter: params }}).success(callback);
	};

	return {
		load: load
	}
}]);
