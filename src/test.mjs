import Ship from "./modules/ship.mjs";

const ship = new Ship('Patrol Boat', 2);
const isHorizontal = true;
const col = 8;
const row = 1;
let validRow;
let validCol;
const width = 10;

if (isHorizontal) {
    if (col <= width - ship.length) {
        validCol = col;
    } else {
        validCol = width - ship.length;
    }
} 
if (!isHorizontal) {
    if (row <= width - ship.length) {
        validRow = row;
    } else {
        validRow = width - ship.length;
    }
}


