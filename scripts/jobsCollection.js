$(document).ready(function() {  

  $('.acceptJob').on('click', function() { 
    var modelA = new ModelBlueprint({ // modelA is a made-up name. We're making a copy of blueprint for use here, so get name of Model Blueprint. 
      jobName: $('.jobName-input').val(),  
      jobDescription: $('.jobDescription-input').val(),
      PickUpLocation: $('.pickUpLocation-input').val()
      dropOffLocation: $('.dropOffLocation-input').val(),
      timeWindow: $('.timeWindow-input').val()
    }); 
    $('.jobDescription-input').val(''); 
    $('.pickUpLocation-input').val('');
    $('.dropOffLocation-input').val('');
    $('.timeWindow-input').val('');
    mymodelC.add(modelA); // replace with name of model here!!!
  }) 
}) 

var jobCollectionA = new JobsCollection(); // we create new instance of collection to work with here.

var modelViewA = Backbone.View.extend({ 
  model: new ModelBlueprint(),
   tagName: 'tr',  // we'll be using table rows to collect info

initialize: function(){
  _.bindAll(
    this,
    'render',
    'remove'
  );

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





};


