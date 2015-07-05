angular.module('handlerApp').factory('ProductAddFactory', function($http){
	var save = function(product, callback){
		console.log(product);
		$http.post('Product/save', product).success(callback);
	};

	var loadUnit = function(callback){
		$http.get('Unit/list').success(callback);
	};

	var loadCategory = function(callback){
		$http.get('Category/list').success(callback);
	};

	return {
		save: save,
		loadCategory: loadCategory,
		loadUnit: loadUnit
	}
});