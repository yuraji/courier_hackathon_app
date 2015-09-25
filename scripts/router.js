'use strict'; // include in html

var Router = Backbone.Router.extend({
	routes:{
		'logIn':'logInPage',
		'signUp':'signUpPage',
		'home':'homePage',
		'user':'userPage',
		'messenger':'messengerPage',
		'messengerAcct':'messangerAccountPage',
		'':'',
		'job':'jobPage'
	}, // commas seperate our object properties and values.
	goloading: function(){ // need colon!
	   $('.sections').hide();
	   $('#loading').show();
	}, 
	gomenu: function(){ 
	   $('.sections').hide();
	   $('#menu').show();
	},
	gogame: function(){ 
		$('.sections').hide();
		$('#game').show();
	},
	goleaderboard: function(){ // need colon!
		$('.sections').hide();
		$('#leaderboard').show();
	},
	gosettings: function(){ // need colon!
		$('.sections').hide();
		$('#settings').show();
	}
})

var appRouter = new Router();
Backbone.history.start(); // this is standard code for us to start the router.