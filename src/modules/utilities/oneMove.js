
function playersMove(board, callback) {

  const computersBoardDom = document.querySelector("#computersBoard");
  const header = document.querySelector('header')
  computersBoardDom.addEventListener("click", handleUserClick);



    // Simulating a player move with a delay of 1 second
    setTimeout(() => {  
      // After the player's move is completed, call the callback function
      callback();
    }, 3000);


  function handleUserClick(e) {
    const computersBoardDom = document.querySelectorAll("#computersBoard");
    const playersMove = e.target;
    e.stopImmediatePropagation();

    const row = playersMove.dataset.row;
    const col = playersMove.dataset.col;

    // if there is a ship
    if (playersMove.dataset.ship) {
      playersMove.textContent = "X";
      board.hitCount++
      console.log(board.hitCount)

    } else {
      playersMove.textContent = "O";
    }

    computersBoardDom.forEach((cell) => cell.replaceWith(cell.cloneNode(true)));

    header.textContent = 'Computers Turn!'
  }


}

function computersMove(computer, board) {

  const header = document.querySelector('header')

  const playersBoard = document.querySelectorAll('#playersBoard .cell')

  const BOARDSIZE = 10;

  const row = Math.floor(Math.random() * BOARDSIZE);
  const col = Math.floor(Math.random() * BOARDSIZE)
  const agg = row * 10 + col

  if (playersBoard[agg].dataset.ship) {
    playersBoard[agg].textContent = 'A'
    board.receiveAttack(row, col)
  } else {
    playersBoard[agg].textContent = 'O'
    board.receiveAttack(row, col)
  }


  header.textContent = "Player's Turn!"
}

export { playersMove, computersMove };
