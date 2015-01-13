angular.module('dosmth')
	.controller('smthCtrl', function smthCtrl($scope, $http, $routeParams, eventstorage) {
		'use strict';

		//move to services
	  	$http.get('/events').
	    success(function(data, status, headers, config) {
	      var smths = $scope.smths = data;
	    }).
	    error(function(data, status, headers, config) {
	      // log error
	    });
		//var smth = $scope.smths = eventstorage.get();

		$scope.smth = '';

		//check this to exists after
		if ($routeParams.id) {
			$scope.smth = smths[$routeParams.id];
		}

		$scope.addSmth = function() {
			smths.push($scope.smth);
			$scope.smth = {};
		};

		$scope.editSmth = function () {
			//search for the right smth in smths
			//smths[$scope.smth.id] = $scope.smth;
			//$scope.smth = {};
		};
	});
