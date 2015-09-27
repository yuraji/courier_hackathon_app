'use strict';
var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('backbone/node_modules/underscore');
var JobsCollection = require('./collections/jobsCollection.js');
var JobsView = require('./views/jobsView.js');
var addressView = require('./views/addressView.js');
var jobSubmitView = require('./views/jobSubmitView.js');
var jobCollection = new JobsCollection();
$(document).ready(function() {

var Router = Backbone.Router.extend({
    routes:{
        'jobSubmit':'jobSubmitPage',
        'businessLogin':'businessLoginPage',
        'landingPage':'landingPage',
        'clientLogInPage':'clientLogInPage',
        'clientAccountPage':'clientAccountPage',
        'courierAccountPage':'courierAccountPage',
        'jobDetails':'jobDetails',
        'jobslist':'jobslist',
        'help':'helpPage',
        'contact':'contactPage'
    },

    jobSubmit: function(){ 
       $('section').hide();
       $('#jobSubmitPage').show();
    }, 
    businessLogin: function(){ 
       $('section').hide();
       $('#businessLoginPage').show();
    },
    landingPage: function(){ 
        $('section').hide();
        $('#landingPage').show();
    },
    clientLogInPage: function(){ 
        $('section').hide();
        $('#clientLogInPage').show();
    },
    clientAccountPage: function(){ 
        $('section').hide();
        $('#clientAccountPage').show();
    },
    courierAccountPage: function(){ 
       $('section').hide();
       $('#courierAccountPage').show();
    },
    jobDetails: function(){ 
        $('section').hide();
        $('#jobDetails').show();
        loadJobsDetailView()
    },
    jobsList: function(){ 
        $('section').hide();
        $('#jobsList').show();
    },
    help: function(){ 
        $('section').hide();
        $('#helpPage').show();
    },
    contact: function(){ 
       $('section').hide();
       $('#contactPage').show();
       var contactPage = new contactPage();
    }

})
function loadJobsDetailView(){
    
    this.collection = new JobsCollection();
    this.collection.fetch();
    _.each(this.collection, function(job){
    var jobsDetails = new jobsDetailsView({model:job});
        })
}

var appRouter = new Router();
Backbone.history.start();

$('#jobSubmit').submit(function(e) {
  e.preventDefault();
  console.log($('#businessName').val());
  $.post("https://dispatch-atx.herokuapp.com/jobs",
    {
      business_name: $('#businessName').val(),
      location: $('#location').val(),
      job_description: $('#jobDescription').val(),
      phone: $('#phone').val(),
    }).done(function(res){
      jobCollection.add(res);
    });
});
 // $.ajax({
 //    type: "POST",
 //    url: "https://dispatch-atx.herokuapp.com/jobs",
 //    data: {
 //        business_name: $('#businessName').val(),
 //        location: $('#location').val(),
 //        job_description: $('#jobDescription').val(),
 //        phone: $('#phone'),
 //    },
 //    success: function(res){
 //      console.log(res);
 //    },
 //    dataType: "json"
 //  });

jobCollection.fetch();
jobCollection.on("add", function(model){
  var jobView = new JobsView({model:model});
  $("#jobs").append(jobView.$el);
});
//new JobsView();
// setInterval(function(){
//   new JobsView();
//   // new addressView();
// },4000);

});
