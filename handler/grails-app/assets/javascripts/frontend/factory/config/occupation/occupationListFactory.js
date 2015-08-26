angular.module('handlerApp').factory('OccupationListFactory', function($http){
	var load = function(size, callback){
		$http.get('Occupation/list', { params: { max: size }}).success(callback);
	};

	return {
		load: load
	}
});