var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('backbone/node_modules/underscore');

module.exports = Backbone.Model.extend({
	
	defaults: {
		business_name: '',
		location: '',
		job_description: '',
		phone: '',
	},
	urlRoot : 'https://iron-courier.herokuapp.com/jobs',
	idAttribute: "_id"
});