angular.module("handlerApp", ['ngRoute', 'ngTable', 'angularSpinners', 'ui.bootstrap', 'ui.select', 'ngSanitize'])
.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
  $routeProvider.
	when('/orders', {templateUrl: 'views/orders/orderList.html', controller: 'OrderListController'}).
	when("/products", {templateUrl: "views/products/productList.html", controller: "ProductListController"}).
	when("/products/add", {templateUrl: "views/products/productAdd.html", controller: "ProductAddController"}).
	when('/customers', {templateUrl: 'views/customers/customerList.html', controller: 'CustomerListController'}).
	when('/providers', {templateUrl: 'views/providers/providerList.html', controller: 'ProviderListController'}).
	when('/team', {templateUrl: 'views/team/teamList.html', controller: 'TeamListController'}).
	when("/unit/add", {templateUrl: "views/config/unit/unitAdd.html", controller: "UnitAddController"}).
	when("/unit", {templateUrl: "views/config/unit/unitList.html", controller: "UnitListController"}).
	when("/category/add", {templateUrl: "views/config/category/categoryAdd.html", controller: "CategoryAddController"}).
	when("/category", {templateUrl: "views/config/category/categoryList.html", controller: "CategoryListController"}).
	when("/configAmbiance/:page?/:list?", {templateUrl: "views/config/configAmbiance.html", controller: "ConfigAmbianceController"}).
	
	otherwise({redirectTo: '/orders'});
    $httpProvider.interceptors.push('mainLoadingSpinnerInterceptor');
}]);