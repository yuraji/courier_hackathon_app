var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('backbone/node_modules/underscore');

module.exports = Backbone.Model.extend({
	
	defaults: {
		jobName: '',
		jobsDescription: '',
		pickUp: '',
		dropOffLocation: '',
		time: '',
	},
	urlRoot : 'https://obscure-mountain-8449.herokuapp.com/users/1/jobs',
	idAttribute: "_id"
});