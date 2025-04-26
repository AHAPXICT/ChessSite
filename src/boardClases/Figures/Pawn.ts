import {Figure} from "./Figure";
import {Cell} from "../Cell";
import logo from '../../../src/Icons/pieces/white-pawn.png'

export class Pawn extends Figure {

    constructor(color: string, cell: Cell, id: number) {
        super(color, cell, id);
        this.image = color === 'black'? logo : whiteImage;
    }
}