'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('backbone/node_modules/underscore');
var JobsCollection = require('./collections/jobsCollection.js');
var JobsView = require('./views/jobsView.js');
var TableRow = require('./components/TableRowView');
var JobsModel = require('./models/jobsModel');

var jobCollectionA = new JobsCollection();

$(document).ready(function() {

// var jobModel = new JobsModel({
//     business_name: "jobCo",
//     location: "texas",
//     job_description: "we do things",
//     phone: "555-555-5555"
// })

  $('.addJob').on('click', function() { 
     
    var model = new JobsModel({ // modelA is a made-up name. We're making a copy of blueprint for use here, so get name of Model Blueprint. 
   
      jobName: $('.jobName-input').val(),  
      jobDescription: $('.jobsDescription-input').val(),
      pickUp: $('.pickup-input').val(),
      dropOffLocation: $('.dropOffLocation-input').val(),
      time: $('.time-input').val()
    }); 
    $('.jobName-input').val('');
    $('.jobsDescription-input').val(''); 
    $('.pickup-input').val('');
    $('.dropOffLocation-input').val('');
    $('.time-input').val('');
    
    jobCollectionA.add(model); // replace with name of model here!!! Something adds to colection.
  }) 

  jobCollectionA.on('add', function(model){

      var template = _.template($("#tableRowView").html()); // we're in function...
      var rowHtml = template(model.toJSON())
      console.log(rowHtml)
      $rowHtml.append(.jobsList);
  })



  // function accepted() {
  //   this.model.destroy();
  // }
  
  // function remove() { 
  //   this.model.set({
  //     incomplete: !this.model.get('incomplete')
  // }
  
  // function render() {
  //   this.$el.html(this.template(this.model.toJSON()));
 
  //   if(!this.model.get('incomplete')) {
  //     this.$el.css('text-decoration', 'line-through');
  //   }
  //   else {
  //     this.$el.css('text-decoration', 'none');
  //   }

  //   return this;
  // }






// var tableRow = new TableRow({model: jobModel});

// $("#job").append(tableRow.$el);

// new JobsView();
});