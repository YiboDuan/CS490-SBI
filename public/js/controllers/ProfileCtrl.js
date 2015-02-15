angular.module('coffeerun')
	.controller('ProfileCtrl', function ProfileCtrl($scope, $http, $routeParams) {
		'use strict';

		$scope.id = $routeParams.id;
	});
