export default class Ship {
    constructor(name, length) {
        this.length = length;
        this.name = name;
        this.hitcount = 0;
    }

    hit() {
        this.hitcount++;
    }

    isSunk() {
        return this.length === this.hitcount;
    }
}