$(document).ready(function(){
	console.log('ready!');
	var $userinput = $('.submitItem');

	$('#addForm').submit(function(event) {
		event.preventDefault();
		if ($userinput.val() == ''){
	    	alert('No item to add!');
	    } else {
	    	$('.needList').prepend("<li>" + $userinput.val() +
	    		"</li> <button class='check'> <i class='fa fa-check'></i> </button> <button class='remove'> <i class='fa fa-times'></i> </button>");
	    	console.log('add');
	    	$userinput.val('');
	    }
	});
});