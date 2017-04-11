$(document).ready(function(){

});


  // $('.boxes').hover(function(){
  //   //$(this).css('background', 'green');
  //   $(this).addClass('highlight');
  // });

  function showGrid(){
    var size = $('#gridNum').val();
    if (size < 2 || size > 64 || isNaN(size) ){
      $('.box').empty();
      $('.box').append("Invalid entry. Try again!");
    } else {
      makeTable(size);
    }
  }

  function makeTable(size){
    var dim = 600/size;
    $('.box').empty();
    for (var i = 0; i < size*size; i++) {
     $('.box').append('<div class="boxes"></div>');
     }
    $('.boxes').css('width', dim);
    $('.boxes').css('height', dim);
    $('.boxes').hover(function(){
      $(this).css('background', 'black');
    });
  }
  makeTable(16);

  $('.boxes').hover(function(){
    $(this).css('background', 'black');
  });
