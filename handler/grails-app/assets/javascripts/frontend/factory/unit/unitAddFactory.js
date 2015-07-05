angular.module('handlerApp').factory('UnitAddFactory', function($http){
	var save = function(unit, callback){
		$http.post('Unit/save', unit).success(callback);
	}

	return {
		save: save
	}
});