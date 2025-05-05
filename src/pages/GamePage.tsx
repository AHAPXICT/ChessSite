import '../css/game.scoped.css'
import GameBoard from "../chess-board/GameBoard.tsx";
import handedPiece from "../icons/HandedPiece.svg";


export default function GamePage() {
    return (
        <>
            <main className="main">
                <aside className="left-container">
                    <div className="game-info">
                        <h3 className="">5 + 2 Классические шахматы</h3>
                        <div className="game-info-box">
                            <div>10 апреля 12:34</div>
                            <div className="game-players-box">
                                <a>Username (1200)</a>
                                <a>Player2 (1300)</a>
                            </div>
                            <div>Началось 5 минут назад</div>
                        </div>
                    </div>

                    <div className="game-chat">
                        <h3 className="">Чат с игроком Player2</h3>
                        <div className="game-chat-box">
                        </div>
                        <input className="chat-input" type="text" placeholder="Введите сообщение" name="" id=""/>
                    </div>
                </aside>


                <div className="center-container">
                    <GameBoard/>
                </div>
                <aside className="right-container">
                    <div className="pieces-container">
                        <img style={{opacity: 0}} src={handedPiece} alt=""/>
                    </div>
                    <div className="right-game-container">
                        <div className="right-header">
                            <span className="time-right">05:00</span>
                            <a className="player-name-right">Player 2</a>
                        </div>
                        <div className="right-center-container">
                            <div className="table-div">
                                <table className="history-table">
                                    <tbody>
                                        <tr>
                                            <th>1</th>
                                            <th>e4</th>
                                            <th>c5</th>
                                        </tr>
                                        <tr>
                                            <th>2</th>
                                            <th>c3</th>
                                            <th>d6</th>
                                        </tr>
                                        <tr>
                                            <th>3</th>
                                            <th>d4</th>
                                            <th>cxd4</th>
                                        </tr>
                                        <tr>
                                            <th>4</th>
                                            <th>cxd4</th>
                                            <th>d5</th>
                                        </tr>
                                        <tr>
                                            <th>5</th>
                                            <th>b3</th>
                                            <th>b6</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="right-header">
                            <span className="time-right">05:00</span>
                            <a className="player-name-right">UserName</a>
                        </div>
                    </div>
                    <div className="pieces-container">
                        <img src={handedPiece} alt=""/>
                        <span>+5</span>
                    </div>
                </aside>
            </main>
        </>
    )
}