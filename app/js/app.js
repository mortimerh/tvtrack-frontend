'use strict';


// Declare app level module which depends on filters, and services
angular.module('myRecipes', [
  'ngRoute',
  'myRecipes.filters',
  'myRecipes.services',
  'myRecipes.directives',
  'myRecipes.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
