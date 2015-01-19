angular.module('coffeerun')
	.controller('reviewCtrl', function reviewCtrl($scope, $http, $routeParams, reviewStore) {
		'use strict';

		reviewStore.get().then(function(data) {
			$scope.reviews = data;
			if ($routeParams.id) {
				$scope.review = $scope.reviews[$routeParams.id];
			}
		});

		$scope.routeParams = $routeParams.id;

		$scope.review = {};

		$scope.addReview = function() {
			reviewStore.insert($scope.review);
			$scope.review = {};
		};

		$scope.editReview = function () {
			reviewStore.update($scope.review);
		};

		$scope.deleteReview = function() {
			reviewStore.delete($scope.review);
			$scope.review = {};
		}
	});
