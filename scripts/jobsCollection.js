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







};


