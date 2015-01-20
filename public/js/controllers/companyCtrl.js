angular.module('coffeerun')
	.controller('companyCtrl', function companyCtrl($scope, $http, $routeParams, reviewStore) {
		'use strict';

		reviewStore.getCompany($routeParams.company).then(function(data) {
			$scope.reviews = data.data;
			if ($scope.reviews != null) {
				$scope.company = {'name': $scope.reviews[0].company};
			}
		});
	});
