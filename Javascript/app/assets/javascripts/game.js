
$(document).ready (function(){
  // $('#tictac').on('click', 'td', placePiece);
  var view = new View();
  var model = new Model();
  view.bindEventListeners();
  var controller = new Controller(view, model);
});

//////////////Array Patching///////////////

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

////////////////////////////////////////////
///////////////VIEW/////////////////////////
////////////////////////////////////////////



function View(){
  var table = "tictac";
}

View.prototype = {

}

////////////////////////////////////////////
//////////////Controller////////////////////
////////////////////////////////////////////

function Controller(view, model){
  this.view = view
  this.model = model
  // this.view.bindEventListeners();
}

Controller.prototype = {
  bindEventListeners: function(){
    $(this.view.table).on('click', 'td', placePiece);
    // $('#0').on('click', placePiece);
    // $('#1').on('click', placePiece);
    // $('#2').on('click', placePiece);
    // $('#3').on('click', placePiece);
    // $('#4').on('click', placePiece);
    // $('#5').on('click', placePiece);
    // $('#6').on('click', placePiece);
    // $('#7').on('click', placePiece);
    // $('#8').on('click', placePiece);
  },
  placePiece = function(domObject){
    var cellNum = domObject.id
    this.model.makeMove(cellNum)
    var lastMove = this.model.lastMove(); // returns last move information
    this.view.updateBoard(lastMove) //lastMove = {player: 'X', cell: cellNum}
  }
}

////////////////////////////////////////////
/////////////Model//////////////////////////
////////////////////////////////////////////

function Model(){
  count = 0;
  board = [];
}

Model.prototype = {
  place: function(e){
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
     win(board)
      }

 function win(board){

  if ([board[0],board[1],board[2]].uniq().length == 1 && [board[0],board[1],board[2]].uniq()[0] != undefined){
   winner = "Player "+board[0]+" WINS!"
   alert(winner)
 }
 else if ([board[3],board[4],board[5]].uniq().length == 1 && [board[3],board[4],board[5]].uniq()[0] != undefined){
   winner = "Player "+board[3]+" WINS!"
   alert(winner)
 }
 else if ([board[6],board[7],board[8]].uniq().length == 1 && [board[6],board[7],board[8]].uniq()[0] != undefined){
  winner = "Player "+board[6]+" WINS!"
  alert(winner)
}
else if ([board[0],board[3],board[6]].uniq().length == 1 && [board[0],board[3],board[6]].uniq()[0] != undefined){
  winner = "Player "+board[0]+" WINS!"
  alert(winner)
}
else if ([board[1],board[4],board[7]].uniq().length == 1 && [board[1],board[4],board[7]].uniq()[0] != undefined){
  winner = "Player "+board[1]+" WINS!"
  alert(winner)
}
else if ([board[2],board[5],board[8]].uniq().length == 1 && [board[2],board[5],board[8]].uniq()[0] != undefined){
  winner = "Player "+board[2]+" WINS!"
  alert(winner)
}
else if ([board[0],board[4],board[8]].uniq().length == 1 &&  [board[0],board[4],board[8]].uniq()[0] != undefined){
  winner = "Player "+board[0]+" WINS!"
  alert(winner)
}
else if ([board[2],board[4],board[6]].uniq().length == 1 && [board[2],board[4],board[6]].uniq()[0] != undefined){
  winner = "Player "+board[2]+" WINS!"
  alert(winner)
}
else if(count == 9){
  alert("Draw - find a better game.")
}

}
}