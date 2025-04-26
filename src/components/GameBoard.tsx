import {Board} from "../boardClases/Board";
import {Cell} from "../boardClases/Cell";
import "./Board.css"
import {Fragment} from "react";

export default function GameBoard(color1, color2) {
    const board = new Board()
    return (
        <div style={{display: "grid", height: "256px", width: "256px", gridTemplateRows: "repeat(8, 1fr)",
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
        <div className={["cell", cell.color].join(' ')}></div>
    )
}