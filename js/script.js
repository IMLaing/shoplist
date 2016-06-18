$(document).ready(function(){
	console.log('ready!');
	var $userinput = $('.submitItem');

	$('#addForm').submit(function(event) {
		event.preventDefault();
		if ($userinput.val() == ''){
	    	alert('No item to add!');
	    } else {
	    	$('.needList').prepend("<div class='listItem'><li >" + $userinput.val() +
	    		"</li> <button class='check'> <i class='fa fa-check'></i> </button> <button class='remove'> <i class='fa fa-times'></i> </button></div>");
	    	console.log('add');
	    	$userinput.val('');
	    }
	});

	$('ul').on('click', 'button.remove', function(){
		console.log('clicked remove to erase');
		$(this).parent().remove();
	});

	$('ul').on('click', 'button.check', function(){
		console.log('clicked check to complete');
		$(this).parent().appendTo('#finItem');
	});

	$('#return').on('click', 'i', function(){
		$(this).parent().appendTo('.needList')
	})

});