$(document).ready(function(){
	console.log('ready!');
	var $userinput = $('.submitItem');
	var $buttons = "<button class='add' id='addID'> <i class='fa fa-plus'></i> </button><button class='check' id='checkID'><i class='fa fa-check'></i></button><button class='remove' id='removeID'><i class='fa fa-times'></i> </button>";
	
//enter text to submit to list	
	$('#addForm').submit(function(event) {
		event.preventDefault();
		if ($userinput.val() == ''){
	    	alert('No item to add!');
	    } else {
	    	$('#needList').prepend("<div class='listItem'><li >" + $userinput.val() +
	    		"</li>" + $buttons + "</div>");
	    	console.log('add and hide addToList');
	    	$userinput.val('');
	    	$('#addID').hide();
	    };
	});

//remove item from any list
	$('ul').on('click', 'button.remove', function(){
		console.log('clicked remove to erase');
		$(this).parent().remove();
	});

//move item to complete
	$('ul').on('click', 'button.check', function(){
		console.log('clicked check to complete');
		var toFin = $(this).parent();
		$(this).remove();
		$('#finItem').append(toFin);
		console.log('sent to finCart');
		$('#addID').show();
		console.log('#addID.show()');

		
	});

	$('#finItem').on('click', '#addID', function(){
		var reAdd = $(this).parent();
		$(this).remove();
		$('#needList').append(reAdd);
		console.log('return to onList');
		$(this).hide('#addID');
		console.log('hiding #addID on return');
	});

	
  $(function() {
    	$('#needList').sortable({axis: 'y'});
    	$('#needList').disableSelection();
  	});

});

