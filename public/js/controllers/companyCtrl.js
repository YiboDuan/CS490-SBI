angular.module('coffeerun')
	.controller('CompanyCtrl', function CompanyCtrl($scope, $http, $routeParams, reviewStore) {
		'use strict';

		$scope.companyOptions = {
	      types: 'establishment'
	    };

	    $scope.company = {};

		$scope.queryCompany = function (companyDetails) {
			reviewStore.getCompany(companyDetails.name).then(function(data) {
				$scope.reviews = data.data;
			});
			$scope.company.name = companyDetails.name;
			$scope.company.location = companyDetails.formatted_address;
			$scope.company.website = companyDetails.website;
		};
	});
