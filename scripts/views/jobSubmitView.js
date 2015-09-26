var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('backbone/node_modules/underscore');
var jobsModel = require('../models/jobsModel.js')

module.exports = Backbone.View.extend({

            el: $('#jobSubmit'),
            initialize: function(options) {
                this.model = new jobsModel();

                var that = this;
                console.log(this.el);
                this.$el.submit(function(e) {
                            e.preventDefault();
                            that.model.save({
                                business_name: $('#businessName').val(),
                                location: $('#location').val(),
                                job_description: $('#jobDescription'),
                                phone: $('#phone'),
                            });
                        });
                    },
                    // render: function() {
                    //     // var data = this.collection.toJSON();
                    //     var that = this;
                    //     this.collection.each(function(model) {
                    //         var html = that.template(model.toJSON());
                    //         that.$el.append(html);
                    //     });

                    // }
            });
