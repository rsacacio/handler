angular.module("handlerApp").controller("UnitAddController",["$scope","$location","UnitAddFactory",function(a,b,c){a.save=function(){c.save(a.unit,function(a){b.path("/unit/")})}}]);