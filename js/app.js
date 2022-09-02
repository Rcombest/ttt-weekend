/*-------------------------------- Constants --------------------------------*/

const winningCombos =[
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [0, 3, 6],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8]
]

/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll("section > div")
const messageEl = document.querySelector("#message")




/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach((square) => {
  square.addEventListener('click', handleClick)
})
  
console.log(squareEls)
/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  board = [null, 1, null, -1, null, null, null, null, null,]
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
  })
  if (!winner) {
    messageEl.innerText = `Next player's turn`
  }
  else if (winner) {
    messageEl.innerText = `Congratulations!`
  }
  else {
    messageEl.innerText = `Tie!`
  }
}

function handleClick(evt) {
  let sqIdx = parseInt(evt.target.id.replace('sq', ''))
  if (board[sqIdx] || winner) {
  return
  }
}