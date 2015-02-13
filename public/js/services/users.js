angular.module('coffeerun')
  .factory('userStore', ['$http', '$window', 'Session', function($http) {
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

      logout: function () {
        delete $window.sessionStorage.token;
        $scope.currentUser = null;
        Session.destroy();
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
