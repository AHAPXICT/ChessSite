import {Board} from "./Board.ts";
import {Cell} from "./Cell.ts";
import "./Board.css"
import {Fragment} from "react";

export default function GameBoard() {
    const board = new Board()
    board.addFigures()

    return (
        <div style={{display: "grid", gridTemplateRows: "repeat(8, 1fr)",
            gridTemplateColumns: "repeat(8, 1fr)"}}>
            {board.cells.map((row, index) =>
                <Fragment key={index}>
                    {row.map(cell =>
                        <CellComponent cell={cell} key={cell.id}/>
                    )}
                </Fragment>
            )}
        </div>
    )
}

function CellComponent({cell}) {
    return (
        <div className={["cell", cell.color].join(' ')}>
            {cell.figure?.image && <img src={cell.figure.image} alt=""/>}
        </div>
    )
}