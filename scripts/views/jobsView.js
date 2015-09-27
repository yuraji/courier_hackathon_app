
var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('backbone/node_modules/underscore');
var templateHTML = "<div><span><%= business_name %></span><span><%= location %></span><span><%= phone %><span><button>View Job</button></div>";
module.exports = Backbone.View.extend({
	tagName:"section",
	template: _.template(templateHTML),
	initialize: function (options) {
		this.render();
	},
	render: function () {
		var html = this.template(this.model.toJSON());
		this.$el.append(html);
		return this;
	},	
})