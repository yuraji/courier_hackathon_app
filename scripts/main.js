'use strict';

// in html we have 2 textboxes and button, register click event

$(document).ready(function() {  

  $('.add-todo').on('click', function() { 
    var todo = new Todo({ 
      day: $('.day-input').val(),  
      task: $('.task-input').val(),
      scheduledTime: $('.scheduledTime-input').val()
    }); 
    $('.day-input').val(''); 
    $('.task-input').val('');
    $('.scheduledTime-input').val('');
    


    // enter post code here (from day16) or you could put this in a function.

    var url = 'https://obscure-mountain-8449.herokuapp.com/logIn/';
    //enter server url for logIn above.

    $.post(
			url,
			todo,
			function(serverResponse){
				var success = serverResponse.success
				if(success === true){
				// we want our if statement to enter next page using router if logIn info sends success true boolean.
				// 
				appRouter.navigate('home', {trigger:true});
				// the word home links us to the router.
				}
	});

  }) 
}) 

//*********************************

// button ID is #accept

// job model exists, and has a user_Id
var job = model

$('#acceptButton').on('click', function() {
 	job.set('user_Id', 3)

 	$.post(
 		url,
			todo,
			function(serverResponse){
 		)

}





