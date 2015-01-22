angular.module('coffeerun')
	.controller('reviewCtrl', function reviewCtrl($scope, $http, $routeParams, reviewStore) {
		'use strict';

		//state variables
		$scope.editing = $routeParams.id != null;

		//initial variables
		$scope.review = {};

		//options
		$scope.companyOptions = {
	      types: 'establishment'
	    };

	    reviewStore.get().then(function(data) {
			$scope.reviews = data;
			if ($routeParams.id) {
				$scope.review = $scope.reviews[$routeParams.id];
			}
		});

		$scope.addReview = function(companyDetails) {
			$scope.review.company = companyDetails.name;
			$scope.review.location = companyDetails.formatted_address;
			$scope.review.website = companyDetails.website;
			console.log($scope.review.website);
			reviewStore.insert($scope.review);
			$scope.review = {};
		};

		$scope.editReview = function (companyDetails) {
			reviewStore.update($scope.review);
		};

		$scope.deleteReview = function() {
			reviewStore.delete($scope.review);
			$scope.review = {};
		};
	});
