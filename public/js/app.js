var app = angular.module('coffeerun',['ngRoute', 'ngAutocomplete', 'ui.bootstrap'])
	.constant('AUTH_EVENTS', {
	  loginSuccess: 'auth-login-success',
	  loginFailed: 'auth-login-failed',
	  logoutSuccess: 'auth-logout-success',
	  sessionTimeout: 'auth-session-timeout',
	  notAuthenticated: 'auth-not-authenticated',
	  notAuthorized: 'auth-not-authorized'
	})
	.constant('USER_ROLES', {
	  all: '*',
	  admin: 'admin',
	  member: 'member',
	  guest: 'guest'
	})
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
		}).when('/login', {
			controller: 'loginCtrl',
			templateUrl: 'views/loginView.html'
		}).when('/signup', {
			controller: 'signupCtrl',
			templateUrl: 'views/signupView.html'
		}).otherwise({
			redirectTo: '#/'
		});
	});