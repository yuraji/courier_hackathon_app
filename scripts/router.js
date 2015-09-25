 
'use strict';  

var Router = Backbone.Router.extend({
	routes:{
		'about':'aboutPage',
		'index':'indexPage',
		'logIn':'logInPage',
		'signUp':'signUpPage',
		'help':'helpPage',
		'contact':'contactPage',
		'contactSuccess':'contactSuccess',
		'clientAccount':'clientAccount',
		'clientService':'clientService',
		'clientAccept':'clientAccept',
		'clientServiceSuccess':'clientServiceSuccess',
		'courierAccount':'courierAccount',
		'courierService':'courierService',
		'courierHired':'courierHired'
		'experience':'experiencePage'
		'forgot':'forgotPassword'
		'PasswordSent':'passwordSent'
	},

	aboutPage: function(){ 
	   $('#sections').hide();
	   $('#aboutPage').show();
	}, 
	indexPage: function(){ 
	   $('.sections').hide();
	   $('#indexPage').show();
	},
	LogInPage: function(){ 
		$('.sections').hide();
		$('#loginPage').show();
	},
	signUpPage: function(){ 
		$('.sections').hide();
		$('#signUpPage').show();
	},
	helpPage: function(){ 
		$('.sections').hide();
		$('#helpPage').show();
	}
	contactPage: function(){ 
	   $('.sections').hide();
	   $('#contactPage').show();
	},
	contactSuccess: function(){ 
		$('.sections').hide();
		$('#contactSuccess').show();
	},
	clientAccount: function(){ 
		$('.sections').hide();
		$('#clientAccount').show();
	},
	clientService: function(){ 
		$('.sections').hide();
		$('#clientService').show();
	}
	clientAccept: function(){ 
	   $('.sections').hide();
	   $('#clientAccept').show();
	},
	clientServiceSuccess: function(){
		$('.sections').hide();
		$('#clientServiceSuccess').show();
	},
	courierAccount: function(){ 
		$('.sections').hide();
		$('#courierAccount').show();
	},
	courierService: function(){ 
		$('.sections').hide();
		$('#courierService').show();
	},
	courierHired: function(){ 
		$('.sections').hide();
		$('#courierHired').show();
	},
		},
	experience: function(){ 
		$('.sections').hide();
		$('#experience').show();
	},
	forgotPassword: function(){  
		$('.sections').hide();
		$('#forgotPassword').show();
	},
	passwordSent: function(){  
		$('.sections').hide();
		$('#passwordSent').show();
	}

})

var appRouter = new Router();
Backbone.history.start(); // this is standard code for us to start the router.