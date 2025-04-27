import {Cell} from "../Cell";

export class Figure {
    color: string
    image: any
    cell: Cell
    id: number
    name: string | undefined

    constructor(color: string, cell: Cell, id: number) {
        this.color = color;
        this.cell = cell;
        this.id = id;
        this.cell.figure = this
    }

    canMove(target: Cell): boolean {
        return false
    }

    moveFigure(target: Cell) {
        
    }
}