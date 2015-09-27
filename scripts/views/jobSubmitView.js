var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('backbone/node_modules/underscore');
var jobsModel = require('../models/jobsModel.js')

module.exports = Backbone.View.extend({

    // initialize: function(options) {
    //     this.model = new jobsModel();

    //     var that = this;
    //     console.log(this.el);        
    // },
    // render: function() {
    //     // var data = this.collection.toJSON();
    //     var that = this;
    //     this.collection.each(function(model) {
    //         var html = that.template(model.toJSON());
    //         that.$el.append(html);
    //     });
    // }

});
