angular.module('handlerApp').factory('CategoryListFactory', function($http){
	var load = function(size, callback){
		$http.get('Category/list', { params: { max: size }}).success(callback);
	};

	return {
		load: load
	}
});