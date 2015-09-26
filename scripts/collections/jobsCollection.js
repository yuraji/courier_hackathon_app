var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('backbone/node_modules/underscore');

module.exports = Backbone.Collection.extend({
	url: function url() {
		return "https://dispatch-atx.herokuapp.com/jobs";
	}
});