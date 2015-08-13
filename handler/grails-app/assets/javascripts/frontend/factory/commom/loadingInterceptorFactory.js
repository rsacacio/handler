angular.module('handlerApp').factory('mainLoadingSpinnerInterceptor', function(/*$http, $route,*/ $q, $injector, $rootScope, $timeout, spinnerService) { 
	$rootScope.handleShowMainLoadingSpinnerWaytout = function () {
		$timeout(function() {
			$rootScope.showMainLoadingSpinnerWaytout = true; 
		}, 10000); // FIXME: declarar esse tempo de espera em milissegundos como uma constante
	};
	$rootScope.handleMainLoadingSpinnerWayout = function () {
		// TODO: qualquer implementacao que notifique sobre usuarios tendo problemas 
		// get $route via $injector because of circular dependency problem
		var $route = $route || $injector.get('$route');
		$route.reload();
	};

	return { 
		request : function (response) {
			$rootScope.showMainLoadingSpinnerWaytout = false;
			spinnerService.show('mainLoadingSpinner');
			return response || $q.when(response);
		},
		response : function (response) {
			// get $http via $injector because of circular dependency problem
			var $http = $http || $injector.get('$http');
	        // don't send notification until all requests are complete
			if ($http.pendingRequests.length < 1) {
				spinnerService.hide('mainLoadingSpinner');
			}
			return response || $q.when(response);
		},
		responseError : function (response) {
			// get $http via $injector because of circular dependency problem
			var $http = $http || $injector.get('$http');
			// don't send notification until all requests are complete
			if ($http.pendingRequests.length < 1) {
				spinnerService.hide('mainLoadingSpinner');
			}
			return $q.reject(response);
		}
	};
});