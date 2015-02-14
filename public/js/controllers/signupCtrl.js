angular.module('coffeerun')
  .controller('SignupCtrl', function ($scope, $http, $routeParams, userStore) {

  $scope.credentials = {};

  $scope.signup = function(credentials) {
    userStore.insert(credentials);
    $scope.credentials = {};
  };

  })