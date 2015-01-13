angular.module('dosmth')
  .factory('eventstorage', ['$http', function($http) {
    return {
      get: function () {
      	$http.get('/events').
	    success(function(data, status, headers, config) {
	      return data;
	    }).
	    error(function(data, status, headers, config) {
	      // log error
	    });
      },
    };
  }]);
