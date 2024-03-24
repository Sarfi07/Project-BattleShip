export default class Gameboard {

    constructor() {
        this.board = this.createBoard();
    }

    #boardSize = 10;
    hitCount = 0;

    createBoard() {
        return Array.from({length: this.#boardSize}, () => Array.from({length: this.#boardSize}).fill(0));
    }


    placeShip(ship, isHorizontal, row, col) {
        // todo
        if (isHorizontal && col + ship.length <= 10) {
            for (let i = 0; i < ship.length; i++) {
                this.board[row][col + i] = 1;
            }
            return true;

        } else if (!isHorizontal && row + ship.length <= 10) {
            for (let i = 0; i < ship.length; i++) {
                this.board[row + i][col] = 1;
            }
            return true;

        } else {
            return false;
        }

        
    }


    receiveAttack(row, col) {
        let cell = this.board[row][col];
        // todo
        if (cell === 1) {
            this.hitCount++
            cell++;
        } 
        
        else {
            cell++;
        }
    }

    allShipSunked() {
        return this.hitCount === 17;
    }
}