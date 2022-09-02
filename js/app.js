/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".board-square")
const messageEl = document.querySelector("#message")



/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  board = [1, -1, null, null, null, null, null, null, null,]
  turn = 1  
  winner = null
  render()
}

function render() {
  board.forEach((square, idx) => {
    squareEls[idx].innerText = square;
    if (square === null) {
      squareEls[idx].innerText = ''
    }
    if (square === 1) {
      squareEls[idx].innerText ='X'
    }
    if (square === -1) {
      squareEls[idx].innerText = 'O'
    }
  });
  if (winner) {
    return `Congratulations Player ${square}` 
  }
  else if (!winner) {
    return `Next move, ${square}`
  }
  else if (winner === T) {
    return 'Tie Game!';
  }
}
