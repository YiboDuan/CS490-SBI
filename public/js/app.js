var app = angular.module('coffeerun',['ngRoute'])
	.config(function ($routeProvider) {
		'use strict';
		$routeProvider.when('/', {
			controller: 'reviewCtrl',
			templateUrl: 'views/mainView.html'
		}).when('/review/create', {
			controller: 'reviewCtrl',
			templateUrl: 'views/reviewView.html'
		}).when('/about', {
			controller: 'reviewCtrl',
			templateUrl: 'views/aboutView.html'
		}).when('/contact', {
			controller: 'reviewCtrl',
			templateUrl: 'views/contactView.html'
		}).otherwise({
			redirectTo: '#/'
		});
	});