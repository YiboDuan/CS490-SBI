angular.module('coffeerun')
	.controller('companyCtrl', function companyCtrl($scope, $http, $routeParams, reviewStore) {
		'use strict';

		$scope.queryCompany = function () {
			reviewStore.getCompany($scope.company.name).then(function(data) {
				$scope.reviews = data.data;
				if ($scope.reviews != null) {
					$scope.company = {'name': $scope.reviews[0].company};
				}
			});
		}
	});
