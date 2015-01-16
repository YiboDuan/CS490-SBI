angular.module('coffeerun')
	.controller('reviewCtrl', function reviewCtrl($scope, $http, $routeParams, reviewsStorage) {
		'use strict';

		//move to services
	  	$http.get('/reviews').
	    success(function(data, status, headers, config) {
	       var reviews = $scope.reviews = data;
	    }).
	    error(function(data, status, headers, config) {
	       //error log
	    });

	    //enable this after
		//var review = $scope.reviews = reviewstorage.get();

		$scope.review = '';

		//check this to exists after
		if ($routeParams.id) {
			$scope.review = reviews[$routeParams.id];
		}

		$scope.addReview = function() {
			reviews.push($scope.review);
			$scope.review = {};
		};
	});
