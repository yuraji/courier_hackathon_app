var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('backbone/node_modules/underscore');

module.exports = Backbone.Collection.extend({
	url: function url() {
		return "https://iron-courier.herokuapp.com/users/1/jobs";
	}
});