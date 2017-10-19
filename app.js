  (function() {
	'use strict';
        var app = angular.module('githubViewer', ['ngRoute']);
		app.config(function($routeProvider, $locationProvider){
			 $routeProvider
			     .when('/', {
				   templateUrl:'./partials/portfolio.html',
				   controller: 'MainController'
			     })
				 
				 .when('/home', 
				     {
				   templateUrl:'./partials/home.html',
				   controller: 'MainController'
			     })
			      .when('/terms', 
				     {
				   templateUrl:'./partials/terms.html',
				   controller: 'MainController'
			     })

			     .when('/video', 
			         {
				  templateUrl: './partials/video.html',
				  controller: 'MainController'
				  
				  })

			     .when('/portfolio', {
				  templateUrl: './partials/portfolio.html',
				  controller: 'MainController'
				  
				  })
	 		     .when('/raylewisstats', 
	 		         {
				  templateUrl: './partials/raylewisstats.html',
				  controller: 'MainController'
				  
				  })
				  				 	     
				  .when('/converse_homepage', 
				      {
				  templateUrl:' ./partials/converse_homepage.html',
				  controller: 'MainController'
				  
				  })
				  .when('/dbelite', 
				      {
				  templateUrl: "./partials/dbelite.html",
				  controller: 'MainController'
				  
				  })
				  .when('/nflmobile', 
				      {
					  templateUrl: './partials/nflmobile.html',
					  controller: 'MainController'
				  })
				  
				   .when('/mobile', {
					  templateUrl: './partials/mobile.html',
					  controller: 'MainController'
				  })
				  
				  .when('/mqpump', {
					  templateUrl: './partials/mqpump.html',
					  controller: 'MainController'
				  })
				  
				  .when('/cowboyup', 
				      {
					  templateUrl: './partials/cowboyup.html',
					  controller: 'MainController'
				  })
				  .when('/puppytime', 
				      {
					  templateUrl: './partials/puppytime.html',
					  controller: 'MainController'
				  })
				  .when('/jfi_homepage', 
				      {
					  templateUrl: './partials/jfi_homepage.html',
					  controller: 'MainController'
				  })
				  .when('/techsavy', 
				      {
					  templateUrl: './partials/techsavy.html',
					  controller: 'MainController'
				  })
				  
				  .when('/harleydavisonminisite', 
				      {
					  templateUrl: './partials/harleydavisonminisite.html',
					  controller: 'MainController'
				  })
				  
				  .when('/camarominisite', 
				      {
					  templateUrl: './partials/camarominisite.html',
					  controller: 'MainController'
				  })
		     .otherwise({redirectTo:'./partials/portfolio'})
			  
			 $locationProvider.html5Mode(true);
			  
		})
		

})();



