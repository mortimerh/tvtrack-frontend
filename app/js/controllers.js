'use strict';

/* Controllers */

angular.module('tvtrack.controllers', [])
  .controller('MyShowsController', ['$scope', 'showsFactory', function($scope, showsFactory) {
  	$scope.shows = showsFactory.getFollowed();
  }])
  .controller('MyCtrl2', [function() {

  }]);