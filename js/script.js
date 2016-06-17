$(document).ready(function(){
    console.log('ready!');
var newItem = $('.submitItem').val();

    $('.add').click(function() {
    $('.needList').prepend("<li>" + $('.submitItem').val() +"</li> <button class='check'> CHECK </button>	<button class='remove'> REMOVE </button>");
        console.log('add');

    }); 

});