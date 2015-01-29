angular.module('coffeerun')
  .factory('userStore', ['$http', function($http) {
    return {
      login: function (credentials) {
        return $http.post('/authenticate', credentials).
          success(function(data, status, headers, config) {
            return data;
          }).
          error(function(data, status, headers, config) {
            console.log(data);
          });
      },

      insert: function (user) {
        return $http.post('/users/create', user).
          success(function(data, status, headers, config) {
            return data;
          }).
          error(function(data, status, headers, config) {
            console.log(data);
          });
      }
    };
  }]);
