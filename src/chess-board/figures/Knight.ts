import {Figure} from "./Figure";
import {Cell} from "../Cell";
import whiteImage from "../../icons/pieces/knight-w.svg"
import blackImage from "../../icons/pieces/knight-b.svg"

export class Knight extends Figure {

    constructor(color: string, cell: Cell, id: number) {
        super(color, cell, id);
        this.image = color === 'white'? whiteImage : blackImage;
        this.name = 'Knight';
    }
}