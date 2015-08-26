angular.module('handlerApp').factory('CustomerAddFactory', function($http){
	var save = function(product, callback){
		console.log(product);
		$http.post('Customer/save', product).success(callback);
	};

	return {
		save: save
	}
});