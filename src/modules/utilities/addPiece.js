export default function addPiece(ship, user, isHorizontal, startIndex) {

    const board = user == 'computer' ? [...document.querySelectorAll('#computersBoard .cell')] :
    [...document.querySelectorAll('#playersBoard .cell')];
    const width = 10;
    if (!isHorizontal) {
        isHorizontal = Math.random() > 0.5;
    }

    if (!startIndex) {
       startIndex = Math.floor(Math.random() * (width * width) )
    }

    let shipCells = [];

    // check if ship to is not breaking in between
    let validRow;
    let validCol;
    const row = Math.floor(startIndex / 10);
    const col = startIndex % 10;

    if (isHorizontal) {
        if (col <= width - ship.length) {
            validCol = col;
            validRow = row
        } else {
            validCol = width - ship.length;
            validRow = row
        }
    } else {
        if (row <= width - ship.length) {
            validRow = row;
            validCol = col
        } else {
            validRow = width - ship.length;
            validCol = col
        }
    }

    const validStart = validRow * 10 + validCol;


    if (isHorizontal) {
        for (let i = 0; i < ship.length; i++) {
            shipCells.push(board[validStart + i])
        }

    } else {
        for (let i = 0; i < ship.length; i++) {
            shipCells.push(board[validStart + i * width])
        }
    }


    const notTaken = shipCells.every(cell => {
        if (cell == undefined) {
            return false;
        } else {
            return !cell.classList.contains('taken')
        }
    })


    if (notTaken) {
        shipCells.forEach(cell => {
            cell.classList.add(ship.name);
            cell.classList.add('taken');
            cell.setAttribute('data-ship', ship.name)
        });
    } else {
        addPiece(ship, user )
    }

    return {isHorizontal,
        validRow, validCol
    }
}