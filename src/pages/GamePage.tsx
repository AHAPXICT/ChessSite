import '../css/game.scoped.css'
import GameBoard from "../chess-board/GameBoard.tsx";
import HistoryAndTime from '../components/HistoryAndTime.tsx'


export default function GamePage() {
    return (
        <>
            <body>
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
                        <GameBoard />
                    </div>


                    <HistoryAndTime />
                </main>

            </body>
        </>
    )
}