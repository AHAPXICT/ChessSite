import {Figure} from "./Figure";
import {Cell} from "../Cell";
import whiteImage from "../../icons/pieces/king-w.svg"
import blackImage from "../../icons/pieces/king-b.svg"

export class King extends Figure {

    constructor(color: string, cell: Cell, id: number) {
        super(color, cell, id);
        this.image = color === 'white'? whiteImage : blackImage;
        this.name = 'King';
    }
}