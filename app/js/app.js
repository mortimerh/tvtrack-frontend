'use strict';


// Declare app level module which depends on filters, and services
angular.module('tvtrack', [
  'ngRoute',
  'tvtrack.filters',
  'tvtrack.services',
  'tvtrack.directives',
  'tvtrack.controllers',
  'ui.bootstrap'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/myshows', {
  	templateUrl: 'partials/myshows.html',
  	controller: 'MyShowsController',
  	resolve: {
  		'showsFactoryData': function(showsFactory){
  			return showsFactory.promise;
  		}
  	}
  });
  $routeProvider.when('/view2', {
  	templateUrl: 'partials/partial2.html', 
  	controller: 'MyCtrl2'
  });
  $routeProvider.otherwise({
  	redirectTo: '/myshows'
  });
}]);
