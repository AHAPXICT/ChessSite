import {Cell} from "./Cell";
import {Colors} from "./Colors.ts";
import {Queen} from "./figures/Queen.ts";

export class Board {
    cells: Cell[][] = []

    constructor() {
        let id = 0
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = []
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 === 0) {
                    row.push(new Cell(i, j, Colors.BLACK, id))
                }
                else {
                    row.push(new Cell(j, i, Colors.WHITE, id))
                }
                id++;
            }
            this.cells.push(row)
        }
    }

    addFigure() {
        new Queen(Colors.WHITE, this.getCells(3, 3), 1)
    }
    getCells(x: number, y: number): Cell  {
        return this.cells[x][y];
    }
}