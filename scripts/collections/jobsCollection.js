var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('backbone/node_modules/underscore');
var JobsModel = require('../models/jobsModel.js');

module.exports = Backbone.Collection.extend({
	model: JobsModel, // Blueprint upper case first letter.
	url: function url() {
		return "https://iron-courier.herokuapp.com/users/1/jobs";
	}
});