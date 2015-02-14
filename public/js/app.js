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
			controller: 'ReviewCtrl',
			templateUrl: 'views/mainView.html'
		}).when('/company', {
			controller: 'CompanyCtrl',
			templateUrl: 'views/companyView.html'
		}).when('/review/create', {
			controller: 'ReviewCtrl',
			templateUrl: 'views/reviewView.html'
		}).when('/review/modify/:id', {
			controller: 'ReviewCtrl',
			templateUrl: 'views/reviewView.html'
		}).when('/about', {
			controller: 'ReviewCtrl',
			templateUrl: 'views/aboutView.html'
		}).when('/contact', {
			controller: 'ReviewCtrl',
			templateUrl: 'views/contactView.html'
		}).when('/login', {
			controller: 'LoginCtrl',
			templateUrl: 'views/loginView.html'
		}).when('/signup', {
			controller: 'SignupCtrl',
			templateUrl: 'views/signupView.html'
		}).when('/profile', {
			controller: 'ProfileCtrl',
			templateUrl: 'views/profileView.html'
		}).otherwise({
			redirectTo: '#/'
		});
	});