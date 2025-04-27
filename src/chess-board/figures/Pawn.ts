import {Figure} from "./Figure";
import {Cell} from "../Cell";
import whiteImage from "../../icons/pieces/pawn-w.svg"
import blackImage from "../../icons/pieces/pawn-b.svg"

export class Pawn extends Figure {

    constructor(color: string, cell: Cell, id: number) {
        super(color, cell, id);
        this.image = color === 'white'? whiteImage : blackImage;
        this.name = 'Pawn';
    }
}