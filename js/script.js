$(document).ready(function() {
  console.log('ready!');

  var $addItem = $('#enterItem').val();

  // add item to .onList ul

  $('#userInput').submit(function(event) {
    event.preventDefault();
    var $userAdd = $('#enterItem').val();
    if ($userAdd == '') {
      console.log('alert trigged because no input to #userInput');
      alert('No Item to Add');
    } else {
      console.log('append li.onListItem to ul.onList');
      $('.onList ul').append("<li class='onListItem'><i id='complete' class='fa fa-check'></i>" + $userAdd + "<i id='remove' class='fa fa-trash-o'></i></li>");
    };
    console.log('clear submit field');
    $('#enterItem').val('');
  });

  //remove item    
  $('ul').on('click', '#remove', function() {
  
    $(this).parent().remove();
    console.log('removed li');
     
  });
  $('#clearComp').click(function(){
        $('ul.compList').children().remove();
  });
   $('#clearList').click(function(){
        $('ul.needList').children().remove();
  });
      //complete item
  $('ul.needList').on('click', '#complete', function() {
    var $transItem = $(this).parent();
    $transItem.appendTo('ul.compList');
    console.log('Item Completed!')
    //remove buttons
    $(this).siblings().remove();
    $(this).remove();
  });

  // return item
  $('ul.compList').on('click', 'li', function(){
    var $returnItem = $(this);
    console.log($returnItem.text());
    $userAdd= $returnItem.text();
     console.log($userAdd);
    $('.onList ul').append("<li class='onListItem'><i id='complete' class='fa fa-check'></i>" + $userAdd + "<i id='remove' class='fa fa-trash-o'></i></li>");
    $(this).remove();
  });

  //sortable list using JQuery UI
  $(function() {
    $('.needList').sortable({
      axis: 'y'
    });
  });

});