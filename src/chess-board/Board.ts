import {Cell} from "./Cell";
import {Colors} from "./Colors.ts";
import {Queen} from "./figures/Queen.ts";
import {Pawn} from "./figures/Pawn.ts";
import {Bishop} from "./figures/Bishop.ts";
import {Knight} from "./figures/Knight.ts";
import {Rook} from "./figures/Rook.ts";
import {King} from "./figures/King.ts";

export class Board {
    cells: Cell[][] = []

    constructor() {
        let id = 0
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = []
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 === 0) {
                    row.push(new Cell(i, j, Colors.BLACK, id))
                }
                else {
                    row.push(new Cell(j, i, Colors.WHITE, id))
                }
                id++;
            }
            this.cells.push(row)
        }
    }

    addFigures() {
        this.arrangePieces(Colors.WHITE)
        this.arrangePieces(Colors.BLACK)
    }

    private arrangePieces(color: Colors) {
        const piecesRow = color === Colors.BLACK ? 0 : 7;
        const pawnsRow = color === Colors.BLACK ? 1 : 6;

        for (let i = 0; i < 8; i++) {
            new Pawn(color, this.getCells(i, pawnsRow), i)
        }

        for (let i = 0; i < 2; i++) {
            new Bishop(color, this.getCells(2 + i * 3, piecesRow), i)
            new Knight(color, this.getCells(1 + i * 5, piecesRow), i)
            new Rook(color, this.getCells(i * 7, piecesRow), i)
        }

        new King(color, this.getCells(4, piecesRow), 1)
        new Queen(color, this.getCells(3, piecesRow), 1)
    }

    getCells(x: number, y: number): Cell  {
        return this.cells[y][x];
    }
}