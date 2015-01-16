angular.module('coffeerun')
	.controller('reviewCtrl', function reviewCtrl($scope, $http, $routeParams, eventstorage) {
		'use strict';

		//move to services
	  	$http.get('/reviews').
	    success(function(data, status, headers, config) {
	      var reviews = $scope.reviews = data;
	    }).
	    error(function(data, status, headers, config) {
	      // log error
	    });

	    //enable this after
		//var review = $scope.reviews = reviewstorage.get();

		$scope.review = '';

		//check this to exists after
		if ($routeParams.id) {
			$scope.review = reviews[$routeParams.id];
		}

		$scope.addReview = function() {
			smths.push($scope.review);
			$scope.review = {};
		};
	});
