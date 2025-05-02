import '../css/game.scoped.css'

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
                        <img src="./Src/Img/BoardGame.jpg" alt=""/>
                    </div>


                    <aside className="right-container">
                        <div className="pieces-container">
                            <img style={{opacity: 0}} src="Src/Icons/HandedPiece.svg" alt=""/>
                        </div>
                        <div className="right-game-container">
                            <div className="right-header">
                                <span className="time-right">05:00</span>
                                <a className="player-name-right">Player 2</a>
                            </div>
                            <div className="right-center-container">
                                <div className="table-div">
                                    <table className="history-table">
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
                                    </table>
                                </div>
                                <div className="right-button-container">
                                    <button className="">
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.33325 16.25C4.33325 16.25 5.41659 15.1667 8.66659 15.1667C11.9166 15.1667 14.0833 17.3333 17.3333 17.3333C20.5833 17.3333 21.6666 16.25 21.6666 16.25V3.24999C21.6666 3.24999 20.5833 4.33332 17.3333 4.33332C14.0833 4.33332 11.9166 2.16666 8.66659 2.16666C5.41659 2.16666 4.33325 3.24999 4.33325 3.24999V16.25ZM4.33325 16.25V23.8333"
                                                stroke="#EFEFEF" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                    <button className="">
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.9167 18.4167L14.0834 20.5833C14.2968 20.7967 14.5502 20.966 14.829 21.0815C15.1078 21.197 15.4066 21.2564 15.7084 21.2564C16.0102 21.2564 16.309 21.197 16.5879 21.0815C16.8667 20.966 17.12 20.7967 17.3334 20.5833C17.5468 20.3699 17.7161 20.1166 17.8316 19.8378C17.9471 19.559 18.0065 19.2601 18.0065 18.9583C18.0065 18.6565 17.9471 18.3577 17.8316 18.0789C17.7161 17.8001 17.5468 17.5467 17.3334 17.3333M15.1667 15.1667L17.8751 17.875C18.3061 18.306 18.8906 18.5481 19.5001 18.5481C20.1096 18.5481 20.6941 18.306 21.1251 17.875C21.5561 17.444 21.7982 16.8595 21.7982 16.25C21.7982 15.6405 21.5561 15.056 21.1251 14.625L16.9217 10.4217C16.3124 9.81304 15.4863 9.47119 14.6251 9.47119C13.7638 9.47119 12.9378 9.81304 12.3284 10.4217L11.3751 11.375C10.9441 11.806 10.3596 12.0481 9.75008 12.0481C9.14059 12.0481 8.55606 11.806 8.12508 11.375C7.6941 10.944 7.45198 10.3595 7.45198 9.75C7.45198 9.1405 7.6941 8.55597 8.12508 8.125L11.1692 5.08083C12.1575 4.09515 13.4463 3.46726 14.8316 3.29655C16.2169 3.12584 17.6196 3.42206 18.8176 4.13833L19.3267 4.44166C19.788 4.72007 20.3365 4.81662 20.8651 4.7125L22.7501 4.33333M22.7501 3.25L23.8334 15.1667H21.6667M3.25008 3.25L2.16675 15.1667L9.20841 22.2083C9.63939 22.6393 10.2239 22.8814 10.8334 22.8814C11.4429 22.8814 12.0274 22.6393 12.4584 22.2083C12.8894 21.7774 13.1315 21.1928 13.1315 20.5833C13.1315 19.9738 12.8894 19.3893 12.4584 18.9583M3.25008 4.33333H11.9167"
                                                stroke="#EFEFEF" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="right-header">
                                <span className="time-right">05:00</span>
                                <a className="player-name-right">UserName</a>
                            </div>
                        </div>
                        <div className="pieces-container">
                            <img src="Src/Icons/HandedPiece.svg" alt=""/>
                            <span>+5</span>
                        </div>
                    </aside>
                </main>

            </body>
        </>
    )
}