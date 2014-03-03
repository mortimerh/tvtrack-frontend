'use strict';

/* Filters */

var tvtrackFilters = angular.module('tvtrack.filters', []);

tvtrackFilters.filter('interpolate', ['version', function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  }
}]);

tvtrackFilters.filter('numberFixedLen', function () {
  return function (n, len) {
    var num = parseInt(n, 10);
    len = parseInt(len, 10);
    if (isNaN(num) || isNaN(len)) {
      return n;
    }
    num = ''+num;
    while (num.length < len) {
    	num = '0'+num;
    }
    return num;
  };
});
