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
