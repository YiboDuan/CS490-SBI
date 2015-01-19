angular.module('coffeerun')
  .factory('reviewStore', ['$http', function($http) {
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

      insert: function (review) {
        return $http.post('/reviews', review).
          success(function(data, status, headers, config) {
            console.log('review added');
          }).
          error(function(data, status, headers, config) {
            console.log(data);
          });
      },
    };
  }]);
