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

		$scope.addReview = function() {
			reviews.push($scope.review);
			$scope.review = {};
		};
	});
