angular.module('coffeerun')
	.controller('reviewCtrl', function reviewCtrl($scope, $http, $routeParams, reviewStore) {
		'use strict';

	    //enable this after
		var reviews = $scope.reviews = reviewStore.reviews;

		$scope.review = '';

		$scope.addReview = function() {
			reviewStore.insert($scope.review);
			$scope.review = {};
		};
	});
