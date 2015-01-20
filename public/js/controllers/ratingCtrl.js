angular.module('coffeerun')
  .controller('ratingCtrl', function ($scope) {
    $scope.rate = 7;
    $scope.max = 10;

    $scope.hoveringOver = function(value) {
      $scope.overStar = value;
    };
});