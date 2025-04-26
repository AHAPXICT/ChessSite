import {Figure} from "./Figures/Figure";

export class Cell {

    avaliable: boolean = false
    figure: Figure | null

    constructor(
        public readonly posX: number,
        public readonly posY: number,
        public color: string,
        public id: number,
    ) {}
}