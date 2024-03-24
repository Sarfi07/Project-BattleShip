import Gameboard from "../gameBoard.js";
import Ship from "../ship.js";


describe('Placing Ships', () => {
    const board = new Gameboard();

    test('place a ship: horizontal', () => {
        const ship = new Ship(2, 'Patrol Boat');

        board.placeShip(ship, true, 0, 0);
        expect(board.board[0][0]).toBe(1);
        expect(board.board[0][1]).toBe(1);

        expect(board.board[0][2]).toBe(0);
    })

    test('place a ship: vertical', () => {
        const ship = new Ship(3, 'Submarine');

        board.placeShip(ship, false, 1, 0);

        expect(board.board[1][0]).toBe(1);
        expect(board.board[2][0]).toBe(1);
        expect(board.board[3][0]).toBe(1);

        expect(board.board[3][1]).toBe(0);
    })
})


describe('Attack Ships', () => {
    const board = new Gameboard();
    const patrolBoard = new Ship(2, 'Patrol Boat');
    const subMarine = new Ship(3, 'Submarine');

    board.placeShip(patrolBoard, true, 0, 0);
    board.placeShip(subMarine, false, 1, 0);

    test('Receive Attack', () => {
        const attack = board.receiveAttack(0, 0);
        
        const anotherAttack = board.receiveAttack(0, 2);
        
        expect(attack.hit).toBeTruthy();
        expect(anotherAttack.hit).toBeFalsy();
    })
})