angular.module('coffeerun')
  .factory('reviewStore', ['$http', '$q', function($http, $q) {
    return {
      get: function () {
        var defer = $q.defer();

      	$http.get('/reviews').
    	    success(function(data, status, headers, config) {
            defer.resolve(data);
    	    }).
    	    error(function(data, status, headers, config) {
    	      console.log(data);
    	    });

        return defer.promise;
      },

      insert: function (review) {
        return $http.post('/reviews/create', review).
          success(function(data, status, headers, config) {
            return data;
          }).
          error(function(data, status, headers, config) {
            console.log(data);
          });
      },

      update: function (review) {
        return $http.post('/reviews/update', review).
          success(function(data, status, headers, config) {
            return data;
          }).
          error(function(data, status, headers, config) {
            console.log(data);
          });
      },

      delete: function (review) {
        return $http.post('/reviews/delete', review).
          success(function(data, status, headers, config) {
            return data;
          }).
          error(function(data, status, headers, config) {
            console.log(data);
          });
      },
    };
  }]);
