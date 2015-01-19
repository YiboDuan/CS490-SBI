angular.module('coffeerun')
	.controller('reviewCtrl', function reviewCtrl($scope, $http, $routeParams, reviewStore) {
		'use strict';

		$scope.reviews = reviewStore.get();
		$scope.review = {};

		$scope.addReview = function() {
			reviewStore.insert($scope.review);
			$scope.review = {};
		};
	});
