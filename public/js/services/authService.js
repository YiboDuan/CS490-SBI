angular.module('coffeerun')
  .factory('AuthService', function ($http, Session) {
    var authService = {};

    authService.login = function (credentials) {
      return $http
        .post('/authenticate', credentials)
        .success(function (data, status, headers, config) {
          $window.sessionStorage.token = data.token;
          $scope.message = 'Welcome';
          Session.create(res.data._id, res.data.user.id,
                         res.data.user.role);
          return res.data.user;
        })
        .error(function (data, status, headers, config) {
          // Erase the token if the user fails to log in
          delete $window.sessionStorage.token;

          // Handle login errors here
          $scope.message = 'Error: Invalid user or password';
        });
    };

    authService.isAuthenticated = function () {
      return !!$window.sessionStorage.token;
    };

    authService.isAuthorized = function (authorizedRoles) {
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }
      return (authService.isAuthenticated() &&
        authorizedRoles.indexOf(Session.userRole) !== -1);
    };

    return authService;
  });