var app = angular.module('coffeerun',['ngRoute', 'ngAutocomplete', 'ui.bootstrap'])
	.config(function ($routeProvider) {
		'use strict';
		$routeProvider.when('/', {
			controller: 'reviewCtrl',
			templateUrl: 'views/mainView.html'
		}).when('/company', {
			controller: 'companyCtrl',
			templateUrl: 'views/companyView.html'
		}).when('/review/create', {
			controller: 'reviewCtrl',
			templateUrl: 'views/reviewView.html'
		}).when('/review/modify/:id', {
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