angular.module('coffeerun')
	.controller('reviewCtrl', function reviewCtrl($scope, $http, $routeParams, reviewsStorage) {
		'use strict';

		var reviews = {};

		//move to services
	  	$http.get('/reviews').
	    success(function(data, status, headers, config) {
	       reviews = $scope.reviews = data;
	    }).
	    error(function(data, status, headers, config) {
	       console.log('Error retrieving reviews');
	    });

	    //enable this after
		//var reviews = $scope.reviews = reviewstorage.get();

		$scope.review = '';

		$scope.addReview = function() {
			reviews.push($scope.review);
			console.log(reviews);
			$scope.review = {};
		};
	});
