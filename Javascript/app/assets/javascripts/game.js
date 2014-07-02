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
  $('#8').on('click', placePiece);







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

 Array.prototype.contains = function(v) {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === v) return true;
    }
    return false;
};

Array.prototype.uniq = function() {
    var arr = [];
    for(var i = 0; i < this.length; i++) {
        if(!arr.contains(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
}




function winner(board){
// console.log([1,2,3].uniq())

console.log([board[0],board[1],board[2]].uniq())

if
  ([board[0],board[1],board[2]].uniq().length == 1 && [board[0],board[1],board[2]].uniq()[0] != 'undefined')
{

        winner = "Player "+board[0]+" WINS!"

      alert(winner)

}
      // else if ([board[3],board[4],board[5]].uniq().length == 1 && [board[3],board[4],board[5]].uniq()[0] != nil)

      //    winner = "Player #{board[3]} WINS!"

      //  else if ([board[6],board[7],board[8]].uniq().length == 1 && [board[6],board[7],board[8]].uniq()[0] != nil)

      //   winner = "Player #{board[6]} WINS!"

      //    else if ([board[0],board[3],board[6]].uniq().length == 1 && [board[0],board[3],board[6]].uniq()[0] != nil)

      //   winner = "Player #{board[0]} WINS!"

      //    else if ([board[1],board[4],board[7]].uniq().length == 1 && [board[1],board[4],board[7]].uniq()[0] != nil)

      //   winner = "Player #{board[1]} WINS!"

      //    else if ([board[2],board[5],board[8]].uniq().length == 1 && [board[2],board[5],board[8]].uniq()[0] != nil)

      //    winner = "Player #{board[2]} WINS!"

      //    else if ([board[0],board[4],board[8]].uniq().length == 1 &&  [board[0],board[4],board[8]].uniq()[0] != nil)

      //   winner = "Player #{board[0]} WINS!"

      //    else if ([board[2],board[4],board[6]].uniq().length == 1 && [board[2],board[4],board[6]].uniq()[0] != nil)

      //   winner = "Player #{board[2]} WINS!"

      //     else if (board.compact.length == 9)
      //          winner = "Draw!"


}

});
// function switchTurns(){
//   if state = "X"
//     state = "Y"
//   elsif state = "Y"
//     state = "X"
//   end
// }

// state = "X"
// workingArray = []
// if board[0] == state && board[1] == state && board[2] == state
//   alert(state"win!")
// end


