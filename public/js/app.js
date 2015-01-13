var app = angular.module('dosmth', ['ngRoute', 'ngMap'])
	.config(function ($routeProvider) {
		'use strict';
		$routeProvider.when('/', {
			controller: 'smthCtrl',
			templateUrl: 'views/mainView.html'
		}).when('/smth/create', {
			controller: 'smthCtrl',
			templateUrl: 'views/smthView.html'
		}).when('/smth/modify/:id', {
			controller: 'smthCtrl',
			templateUrl: 'views/smthView.html'
		}).when('/about', {
			controller: 'smthCtrl',
			templateUrl: 'views/aboutView.html'
		}).when('/contact', {
			controller: 'smthCtrl',
			templateUrl: 'views/contactView.html'
		}).otherwise({
			redirectTo: '#/'
		});
	});