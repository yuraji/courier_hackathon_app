var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('backbone/node_modules/underscore');

module.exports = Backbone.Model.extend({
	
	defaults: {
		business_name: '',
		location: '',
		job_description: '',
		phone: '',
		street_name: '',
		city: '',
		state: '',
		zip: '',
	},
	urlRoot : 'https://dispatch-atx.herokuapp.com/jobs',
	idAttribute: "_id"
});