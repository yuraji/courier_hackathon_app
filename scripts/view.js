
// var x (ex jobView.js) = require(file path to view.js)
// use x inside code.
var Backbone = require("backbone");

module.exports = Backbone.View.extend({ 
   tagName: 'tr',  // we'll be using table rows to collect info

  initialize: function(){
    this.render();
  },
  template: _.template(html($("#tableRowView").html()),
  events: {
    'click': 'accepted';

  },
  accepted: function() {
    this.model.destroy(); 
  },
  remove: function() { // we want to remove the job from the page once acceptJob is clicked
    this.model.set({
      incomplete: !this.model.get('incomplete')
    });
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
 
    if(!this.model.get('incomplete')) {
      this.$el.css('text-decoration', 'line-through');
    }
    else {
      this.$el.css('text-decoration', 'none');
    }

    return this; 
  }
});