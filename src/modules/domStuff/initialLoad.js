import '../styles/initialLoad.css';

export default function initialLoad() {
    const boardSize = 10;


    const content = document.getElementById('content');

    const header = document.createElement('header');
    const main = document.createElement('main');
    const footer = document.createElement('footer');

    let playersBoard = document.createElement('div');
    playersBoard.setAttribute('id', 'playersBoardContainer');
    playersBoard = createBoard(playersBoard, boardSize, 'player')

    let computersBoard = document.createElement('div');
    computersBoard.setAttribute('id', 'computersBoardContainer');
    computersBoard = createBoard(computersBoard, boardSize, 'computer')

    main.appendChild(playersBoard);
    main.appendChild(computersBoard);

    const startBtn = document.createElement('button');
    startBtn.setAttribute('id', 'start');
    startBtn.textContent = 'Start Game';

    const placeShip = document.createElement('button');
    placeShip.textContent = 'Place Ships Randomly';
    placeShip.setAttribute('id', 'placeShips')

    footer.appendChild(startBtn)
    footer.appendChild(placeShip)

    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer); 

}


function createBoard(container, boardSize, user) {

    const boardContainer = document.createElement('div');
    boardContainer.setAttribute('id', `${user}sBoard`);

    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = i;
            cell.dataset.col = j;
            // cell.textContent = '-';
            boardContainer.appendChild(cell);
        }
    }

    container.appendChild(boardContainer);

    return container;
}