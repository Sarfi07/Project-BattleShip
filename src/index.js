import initialLoad from "./modules/domStuff/initialLoad";
import "./modules/styles/ships.css";
import Ship from "./modules/ship.mjs";
import addPiece from "./modules/utilities/addPiece";
import Gameboard from "./modules/gameBoard";
import Player from "./modules/player";
import { playersMove, computersMove } from "./modules/utilities/oneMove";

initialLoad();

const width = 10;

const carrier = new Ship("Carrier", 5);
const battleship = new Ship("Battleship", 4);
const cruiser = new Ship("Cruiser", 3);
const submarine = new Ship("Submarine", 3);
const destroyer = new Ship("Destroyer", 2);

const ships = [carrier, battleship, cruiser, submarine, destroyer];

const computersBoard = new Gameboard();
const playersBoard = new Gameboard();

// place ships to computers board

ships.forEach((ship) => {
  const { isHorizontal, validRow, validCol } = addPiece(ship, "computer");
  computersBoard.placeShip(ship, isHorizontal, validRow, validCol);
});


const computer = new Player("computer");
const player = new Player();

let gameOver = false;
let userTurn = true;

const header = document.querySelector('header')

// Main game loop
function gameLoop() {
  // Check if the game is over
  if (gameOver) {
    header.textContent = "Game over!";
    return;
  }

  // Player's turn
  playersMove(computersBoard, () => {

    header.textContent = "Player's Turn!"
    // Check for win conditions after player's move
    if (playersBoard.allShipSunked()) {
      header.textContent = "Computer wins!";
      gameOver = true;
      return;
    }

    // Computer's turn
    computersMove(computer, playersBoard); // Assuming this function handles the computer's move
    // Check for win conditions after computer's move
    if (computersBoard.allShipSunked()) {
      header.textContent = "Player wins!";
      gameOver = true;
      return;
    }

    // Continue the game loop
    setTimeout(gameLoop, 500); // Using setTimeout for asynchronous loop
  });
}

// Start the game loop

header.textContent = 'When the game starts you have only 3 seconds to make the move otherwise the computer automtically make his move. So be quick!'

const startBtn = document.getElementById('start');

let placedShips = false;

startBtn.addEventListener('click', () => {
  if (placedShips) {
    header.textContent = "Player's Turn!"
    gameLoop();
  } else {
    header.textContent = 'Please place your ships first!'
  }
})


const placeShipBtn = document.getElementById('placeShips')

placeShipBtn.addEventListener('click', () => {
  const playersBoardDom = document.querySelectorAll('#playersBoard .cell')

  playersBoardDom.forEach(cell => {
    Array.from(cell.classList).forEach(className => {
      if(className !== 'cell') {
        cell.classList.remove(className)
      }
    })

    if (cell.dataset.ship) {
      delete cell.dataset.ship
    }
  })
  ships.forEach((ship) => {
    const { isHorizontal, validRow, validCol } = addPiece(ship, "player");
    playersBoard.placeShip(ship, isHorizontal, validRow, validCol);
  });

  
  header.textContent = 'Click Start to start the game'
  placedShips = true;
})