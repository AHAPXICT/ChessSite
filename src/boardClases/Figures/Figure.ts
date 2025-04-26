import {Cell} from "../Cell";

export class Figure {
    color: string
    image
    cell: Cell
    id: number

    constructor(color: string, cell: Cell, id: number) {
        this.color = color;
        this.cell = cell;
        this.id = id;
        this.cell.figure = this
    }

    moveFigure(taget: Cell) {
        
    }
}