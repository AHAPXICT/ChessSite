import {Cell} from "./Cell";

export class Board {
    cells: Cell[][] = []

    constructor() {
        let id = 0
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = []
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 === 0) {
                    row.push(new Cell(i, j, "black", id))
                }
                else {
                    row.push(new Cell(j, i, "white", id))
                }
                id++;
            }
            this.cells.push(row)
        }
    }
}