'use strict';
var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('backbone/node_modules/underscore');
var JobsCollection = require('./collections/jobsCollection.js');
var JobsView = require('./views/jobsView.js');
var jobSubmitView = require('./views/jobSubmitView.js')
$(document).ready(function() {



setInterval(function(){
  new JobsView();
},4000);
new jobSubmitView();
})
