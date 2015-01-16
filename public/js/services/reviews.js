angular.module('coffeerun')
  .factory('reviewstorage', ['$http', function($http) {
    return {
      get: function () {
      	$http.get('/reviews').
	    success(function(data, status, headers, config) {
	      return data;
	    }).
	    error(function(data, status, headers, config) {
	      // log error
	    });
      },
    };
  }]);
