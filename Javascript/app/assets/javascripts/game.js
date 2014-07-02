$(document).ready (function(){
  count = 0;
  board = [];

placePiece = function(){
  place(this)
  }



  $('#0').on('click', placePiece);
  $('#1').on('click', placePiece);
  $('#2').on('click', placePiece);
  $('#3').on('click', placePiece);
  $('#4').on('click', placePiece);
  $('#5').on('click', placePiece);
  $('#6').on('click', placePiece);
  $('#7').on('click', placePiece);
  $('#8').on('click',placePiece);







  function place(e){

    if (count%2 === 0) {

     value =  "X"
    board[e.id] = value

   }

   else {

     value =  "O"
      board[e.id] = value
   }

   e.innerHTML = value

   count+=1

  winner(board)

 }


function winner(board){




}

});

