// on the backend 
// JS object. No backbone on backend.
var LogIn = Backbone.Model.extend({
  defaults: {
    email: '',
    password: '',
    response: '',
    success: true
  } 

});

var SignUp = Backbone.Model.extend({
  defaults: {
    day: '', 
    task: '',
    scheduledTime: '',
    incomplete: true
  } 

}); 


var User = Backbone.Model.extend({
  defaults: {
    day: '', 
    task: '',
    scheduledTime: '',
    incomplete: true
  } 

}); 

var Messenger = Backbone.Model.extend({
  defaults: {
    day: '', 
    task: '',
    scheduledTime: '',
    incomplete: true
  } 

}); 

//business_name":"Johnston Inc","location":"Central","job_description"

var Job = Backbone.Model.extend({
  defaults: {
    blank: '', 
    location: '',
    job_description:'',
    success: true 
  } 

}); 