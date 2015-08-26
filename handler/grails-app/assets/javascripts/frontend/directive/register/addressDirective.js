angular.module('handlerApp').directive('hanAddress', function(){
	return {
		restrict: 'E',
		scope: {
			address: '=address',
			parentForm: '=parentForm',
			title: '@title'
		},
		templateUrl: 'views/directive/register/addressDirective.html',
		link: function(scope, iElement, iAttrs){
			scope.citys = [];
			scope.citys.push({name: 'São José', id: 1});
			scope.citys.push({name: 'Florianópolis', id: 2});
			scope.citys.push({name: 'Palhoça', id: 3});

			scope.states = [];
			scope.states.push({name: 'Santa Catarina', id: 1});
			scope.states.push({name: 'Paraná', id: 2});
			scope.states.push({name: 'Rio Grande do Sul', id: 3});
		}
	}
});