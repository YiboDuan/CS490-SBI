angular.module('coffeerun')
  .controller('RatingCtrl', function ($scope) {
    $scope.rate = 0;
    $scope.max = 10;

    $scope.hoveringOver = function(value) {
      $scope.overStar = value;
    };
});