angular.module('coffeerun')
  .factory('reviewStore', ['$http', function($http) {
    return {
      get: function () {
        var me = this;

      	$http.get('/reviews').
    	    success(function(data, status, headers, config) {
            me.data = data;
    	    }).
    	    error(function(data, status, headers, config) {
    	      console.log(data);
    	    });

        return me.data;
      },

      insert: function (review) {
        return $http.post('/reviews', review).
          success(function(data, status, headers, config) {
            return data;
          }).
          error(function(data, status, headers, config) {
            console.log(data);
          });
      },
    };
  }]);
