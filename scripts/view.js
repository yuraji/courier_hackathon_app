


var modelViewA = Backbone.View.extend({ 
  model: new ModelBlueprint(),
   tagName: 'tr',  // we'll be using table rows to collect info

initialize: function(){
  _.bindAll(
    this,
    'render',
    'remove'
  ),

  // ****************************

  var templateA = $('.templateName'); // replace class .templateName with actual name of template.
  var insideTemplate = templateA.html();
 
    this.template = _.template(insideTemplate);  // template is a keyword for putting our created template into html template.

    this.$el.on('click', this.remove); 
  },
  events: {
    'click .acceptJob': 'accepted';

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