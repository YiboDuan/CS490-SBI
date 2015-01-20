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

		$scope.companyOptions = {
	      types: 'establishment'
	    };

		$scope.addReview = function(companyDetails) {
			$scope.review.company = companyDetails.name;
			$scope.review.location = companyDetails.formatted_address;
			reviewStore.insert($scope.review);
			$scope.review = {};
		};

		$scope.editReview = function (companyDetails) {
			$scope.review.company = companyDetails.name;
			$scope.review.location = companyDetails.formatted_address;
			reviewStore.update($scope.review);
		};

		$scope.deleteReview = function() {
			reviewStore.delete($scope.review);
			$scope.review = {};
		}
	});
