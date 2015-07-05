angular.module("handlerApp", ['ngRoute', 'ngTable']).config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/main", {templateUrl: "views/main.html", controller: "MainController"}).
	when("/unit/add", {templateUrl: "views/unit/unitAdd.html", controller: "UnitAddController"}).
	when("/unit", {templateUrl: "views/unit/unitList.html", controller: "UnitListController"}).
	when("/category/add", {templateUrl: "views/category/categoryAdd.html", controller: "CategoryAddController"}).
	when("/category", {templateUrl: "views/category/categoryList.html", controller: "CategoryListController"}).
	when("/product/add", {templateUrl: "views/product/productAdd.html", controller: "ProductAddController"}).
	when("/product", {templateUrl: "views/product/productList.html", controller: "ProductListController"}).
	otherwise({redirectTo: '/main'});
}]);