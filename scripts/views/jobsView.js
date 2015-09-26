
var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('backbone/node_modules/underscore');
var JobsCollection = require('../collections/jobsCollection.js')
var templateHTML = "<div><span><%= business_name %></span><span><%= location %></span></div>";
module.exports = Backbone.View.extend({

	template: _.template(templateHTML),
	
	el: $('#jobs'),

	initialize: function (options) {
		this.collection = new JobsCollection();
		
		// save view context
		var that = this;

		this.collection.fetch({
			success: function (collection, response, options) {
				
					that.render();
			},
			error: function () {
				alert("booboo");
			}
		});
		
	},

	render: function () {
		this.$el.html("");
		// var data = this.collection.toJSON();
		var that = this;
		this.collection.each(function (model) {
			// var that = this;
			var html = that.template(model.toJSON());
			that.$el.append(html);
		});

	},

	
})