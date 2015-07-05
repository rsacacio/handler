angular.module('handlerApp').factory('CategoryAddFactory', function($http){
	var save = function(category, callback){
		$http.post('Category/save', category).success(callback);
	}

	return {
		save: save
	}
});