angular.module('coffeerun')
  .factory('AuthService', function ($http, $window, Session) {
    var authService = {};

    authService.login = function (credentials) {
      return $http
        .post('/authenticate', credentials)
        .success(function (data, status, headers, config) {
          $window.sessionStorage.token = data.token;
          Session.create(data._id, data.user.id,
                         data.user.role);
          return res.data.user;
        })
        .error(function (data, status, headers, config) {
          // Erase the token if the user fails to log in
          delete $window.sessionStorage.token;
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