angular.module('handlerApp').factory('OccupationAddFactory', function($http){
	var save = function(unit, callback){
		$http.post('Occupation/save', unit).success(callback);
	}

	return {
		save: save
	}
});