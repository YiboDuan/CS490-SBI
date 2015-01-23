angular.module('coffeerun')
  .factory('userStore', ['$http', '$q', function($http, $q) {
    return {
      login: function (credentials) {
        return $http.post('/users/login', credentials).
          success(function(data, status, headers, config) {
            defer.resolve(data);
          }).
          error(function(data, status, headers, config) {
            console.log(data);
          });
      },

      insert: function (user) {
        return $http.post('/user/create', user).
          success(function(data, status, headers, config) {
            return data;
          }).
          error(function(data, status, headers, config) {
            console.log(data);
          });
      }
    };
  }]);
