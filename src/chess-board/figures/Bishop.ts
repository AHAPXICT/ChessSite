import {Figure} from "./Figure";
import {Cell} from "../Cell";
import whiteImage from "../../icons/pieces/bishop-w.svg"
import blackImage from "../../icons/pieces/bishop-b.svg"

export class Bishop extends Figure {

    constructor(color: string, cell: Cell, id: number) {
        super(color, cell, id);
        this.image = color === 'white'? whiteImage : blackImage;
        this.name = 'Bishop';
    }
}