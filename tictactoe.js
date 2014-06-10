

$(document).ready(function(){

  var current_turn = "X";

  function toggle_current_turn()
  {
    if (current_turn === "X"){
      current_turn = "O";
    }
    else if (current_turn === "O"){
      current_turn = "X";
    }
  }
  
  $('#board').delegate('td','click', function(e){
      var square = $(e.target);

      var current_value = square.html(); 

      if (current_value === "")
      {
        square.html(current_turn);
        toggle_current_turn(); //switch 'X' with 'O'
      }
  });

    $("button").click(function(){
      $('td').html("");
  });
});