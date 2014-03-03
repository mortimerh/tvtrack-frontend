'use strict';

/* Controllers */

var tvtrackControllers = angular.module('tvtrack.controllers', []);

tvtrackControllers.controller('MyShowsController', ['$scope', 'showsFactory', function($scope, showsFactory) {
  	$scope.shows = showsFactory.getFollowed();
  	
  	$scope.toggleDetailsSidebar = function (show_id) {
  		$scope.showDetailsSidebar = show_id;
  		$scope.seasons = [ {season_no: 1, episodes : [1, 2, 3, 4]}, {season_no: 2, episodes : [1, 2, 3, 4]} ];
  		$scope.details = $scope.shows.filter(function(s) {
	  		return s.id == show_id;
	  	})[0];
  		console.log("Show details view for show_id=" + show_id);
  	};

  	$scope.markWatched = function (show_id, episode_id) {
  		console.log("Marked episode_id: " + episode_id + " of show_id: " + show_id + " as watched!");
  	}
}])

tvtrackControllers.controller('MyCtrl2', [function() {

}]);