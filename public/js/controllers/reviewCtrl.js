angular.module('coffeerun')
	.controller('reviewCtrl', function reviewCtrl($scope, $http, $routeParams, reviewStore) {
		'use strict';

		reviewStore.get().then(function(data) {
			$scope.reviews = data;
		})
		$scope.review = {};

		$scope.addReview = function() {
			reviewStore.insert($scope.review);
			$scope.review = {};
		};
	});
