import "../css/history.scoped.css"
import UnselectedGame from '../components/UnselectedGame'
import GameBoard from "../chess-board/GameBoard.tsx";
import handedPiece from "../icons/HandedPiece.svg";
import "../js/history.js";

export default function HistoryPage() {
    return (
        <>
            <main className="main">
                <aside className="left-find-menu">
                    <p id='left-menu-title' className="left-menu-title">Расширенный поиск</p>
                    <span>Тип игры</span>
                    <select className="left-combobox">
                        <option value="value 1">Классические шахматы</option>
                        <option value="value 1">Шахматы 960</option>
                        <option value="value 1">Туман войны</option>
                    </select>
                    <span>Время</span>
                    <select>
                        <option value="value 2">Bullet</option>
                        <option value="value 2">Blitz</option>
                        <option value="value 2">Rapid</option>
                        <option value="value 2">Long</option>
                    </select>
                    <span>Результат</span>
                    <select>
                        <option value="value 3">Победа</option>
                        <option value="value 4">Поражение</option>
                        <option value="value 4">Ничья</option>
                    </select>
                    <span>Противник</span>
                    <select>
                        <option value="value 5">Любой</option>
                    </select>
                </aside>

                <div className="games-container">
                    <div className="selected-game">
                        <div className="selected-text-container">
                            <div>
                                <div id="selected-game-name">Классические шахматы</div>
                                <div>Блиц 5 + 2</div>
                            </div>
                            <div className="selected-game-status">
                                <div>
                                    <div className="selected-game-player">Username</div>
                                    <span className="player-rating">1300</span>
                                    <span className="win-rating">+ 5</span>
                                </div>
                                <div>
                                    <span className="selected-game-player">VS</span>
                                </div>
                                <div>
                                    <div className="selected-game-player">Player2</div>
                                    <span className="player-rating">1200</span>
                                    <span className="lose-rating">- 5</span>
                                </div>
                            </div>
                            <div className="selected-game-win">
                                <div>Победа белых</div>
                                <div>Чёрные сдались</div>
                            </div>
                            <div className="selected-game-time">10.02.2024 в 12:30</div>
                        </div>
                        <GameBoard/>
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
                    </div>
                    <UnselectedGame/>
                    <UnselectedGame/>
                </div>
            </main>
        </>
    )
}