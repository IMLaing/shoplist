$(document).ready(function(){
    console.log('ready!');
    var $userinput = $('.submitItem');

    $('.add').click(function() {
    //	var newItem = $('.submitItem').val();
	    $('.needList').prepend("<li>" + $userinput.val() +"</li> <button class='check'> CHECK </button><button class='remove'> REMOVE </button>");
	        console.log('add');
	    $userinput.val('');

    }); 

});