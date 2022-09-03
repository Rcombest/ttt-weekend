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
  board = [null, null, null, null, null, null, null, null, null,]
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
  } else if (winner === 'T') {
    messageEl.innerText = `Tie!`
  } else {
    messageEl.innerText = `Congratulations!`
  }
}

function handleClick(evt) {
  let sqIdx = parseInt(evt.target.id.replace('sq', ''))
  if (board[sqIdx] || winner) {
  return
  }
  board[sqIdx] = turn
  turn *= -1
  winner = getWinner()
  render()
}

function getWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    if (Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]) === 3) 
    return board[winningCombos[i][0]]
  }
  if (board.includes(null)) {
    return null
  } else {
    return 'T'
  }
}