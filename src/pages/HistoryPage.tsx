import "../css/history.css"

export default function HistoryPage() {
    const title = document.querySelector('.left-menu-title');
    const menuContainer = document.querySelector('.left-find-menu');

    window.addEventListener('resize', function () {
        if (window.innerWidth > 700) {
            title?.removeEventListener('click', titleClick)
            hide('inline-block', 'active')
        }
        if (window.innerWidth <= 700) {
            title?.addEventListener('click', titleClick)
            hide('none', undefined)
        }
    });

    window.addEventListener('load', () => {
        if (window.innerWidth <= 700) {
            title?.addEventListener('click', titleClick)
            hide('none', undefined)
        }
    });


    const titleClick = () => {
        if (title?.tag === 'active') {
            hide('none', undefined)
        }
        else {
            hide('inline-block', 'active');
        }
    }

    function hide(display: string, tag: string | undefined) {
        menuContainer?.childNodes.forEach((item) => {
            if (item.nodeName === 'SPAN' || item.nodeName === 'SELECT') {
                item.style.display = display;
            }
            title.tag = tag
        })
    }
    return (
        <>
            <body>
                <main className="main">

                    <aside className="left-find-menu">
                        <div className="left-menu-title">Расширенный поиск</div>
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
                            <div id="board"></div>
                            <div id="history-and-time"></div>
                        </div>

                        <div className="unselected-game"></div>
                        <div className="unselected-game"></div>

                    </div>
                </main>

            </body>
        </>
    )
}