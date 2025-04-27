import {Figure} from "./Figure";
import {Cell} from "../Cell";
import whiteImage from "../../icons/pieces/queen-w.svg"
import blackImage from "../../icons/pieces/queen-b.svg"

export class Queen extends Figure {

    constructor(color: string, cell: Cell, id: number) {
        super(color, cell, id);
        this.image = color === 'white'? whiteImage : blackImage;
        this.name = 'Queen';
    }
}