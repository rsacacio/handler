angular.module('handlerApp').factory('UnitListFactory', function($http){
	var load = function(size, callback){
		$http.get('Unit/list', { params: { max: size }}).success(callback);
	};

	return {
		load: load
	}
});