 
'use strict';  

var Router = Backbone.Router.extend({
	routes:{
		'jobSubmit':'jobSubmitPage',
		'businessLogin':'businessLoginPage',
		'landingPage':'landingPage',
		'clientlogInPage':'clientlogInPage',
		'clientAccountPage':'clientAccountPage',
		'courierAccountPage':'courierAccountPage',
		'jobDetails':'jobDetails',
		'jobslist':'jobslist',
		'help':'helpPage',
		'contact':'contactPage'
	},

	aboutPage: function(){ 
	   $('#sections').hide();
	   $('#jobSubmitPage').show();
	}, 
	indexPage: function(){ 
	   $('.sections').hide();
	   $('#businessLoginPage').show();
	},
	LogInPage: function(){ 
		$('.sections').hide();
		$('#landingPage').show();
	},
	signUpPage: function(){ 
		$('.sections').hide();
		$('#clientlogInPage').show();
	},
	helpPage: function(){ 
		$('.sections').hide();
		$('#clientAccountPage').show();
	}
	contactPage: function(){ 
	   $('.sections').hide();
	   $('#courierAccountPage').show();
	},
	contactSuccess: function(){ 
		$('.sections').hide();
		$('#jobDetails').show();
	},
	clientAccount: function(){ 
		$('.sections').hide();
		$('#jobslist').show();
	},
	clientService: function(){ 
		$('.sections').hide();
		$('#helpPage').show();
	}
	clientAccept: function(){ 
	   $('.sections').hide();
	   $('#contactPage').show();
	}

})

var appRouter = new Router();
Backbone.history.start(); // this is standard code for us to start the router.