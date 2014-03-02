'use strict';

/* Services */
var tvtrackServices = angular.module('tvtrack.services', []);

// Demonstrate how to register services
// In this case it is a simple value service.
tvtrackServices.value('version', '0.2');

tvtrackServices.factory('showsFactory', ['$http', function ($http) {
	var showsFactory = {};
	var shows = [];

	showsFactory.promise = $http.get('../data/shows.json')
	.success(function(data) {
		shows = data;
	});

	showsFactory.getAll = function () {
		return shows;
	};
	showsFactory.getFollowed = function() {
		return shows.filter(function (show) {
			return show.following;
		});
	};

	return showsFactory;
}]);