$(document).ready(function(){
	console.log('ready!');
	var $userinput = $('.submitItem');
	var $buttons = "<button class='check' id='checkID'><i class='fa fa-check'></i></button><button class='remove' id='removeID'><i class='fa fa-times'></i> </button><button class='add' id='addID'> <i class='fa fa-plus'></i> </button>";
	
	$('#addForm').submit(function(event) {
		event.preventDefault();
		if ($userinput.val() == ''){
	    	alert('No item to add!');
	    } else {
	    	$('.needList').prepend("<div class='listItem'><li >" + $userinput.val() +
	    		"</li>" + $buttons + "</div>");
	    	console.log('add and hide addToList');
	    	$userinput.val('');
	    	$('#addID').hide();
	    };
	});

	$('ul').on('click', 'button.remove', function(){
		console.log('clicked remove to erase');
		$(this).parent().remove();

	});

	$('ul').on('click', 'button.check', function(){
		console.log('clicked check to complete');
		$(this).parent().appendTo('#finItem');
		console.log('sent to finCart')
		$('#addID').show(this);
		console.log('#addID.show()')

		
	});

	$('#finItem').on('click', '#addID', function(){
		$(this).parent().appendTo('.needList');
		console.log('return to onList');
	});

});