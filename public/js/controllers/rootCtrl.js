angular.module('coffeerun')
  .controller('applicationCtrl', function ($scope,
                                           $window,
                                           USER_ROLES,
                                           AuthService,
                                           Session) {
    $scope.currentUser = null;
    $scope.userRoles = USER_ROLES;
    $scope.isAuthorized = AuthService.isAuthorized;

    $scope.setCurrentUser = function (user) {
      $scope.currentUser = user;
    };

    $scope.logout = function () {
      delete $window.sessionStorage.token;
      $scope.currentUser = null;
      Session.destroy();
    };
  });