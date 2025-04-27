import {Figure} from "./figures/Figure";
import {Colors} from "./Colors.ts";

export class Cell {

    avaliable: boolean = false
    figure: Figure | undefined

    constructor(
        public readonly posX: number,
        public readonly posY: number,
        public color: Colors,
        public id: number,
    ) {}
}