import Player from "../player";


test('Check random move range', () => {
    const newPlayer = new Player('Alex');


    const move = newPlayer.randomMove();

    expect(move.x).toBeLessThan(10);
    expect(move.y).toBeLessThan(10);
    expect(move.x).toBeGreaterThanOrEqual(0);
    expect(move.y).toBeGreaterThanOrEqual(0);
})