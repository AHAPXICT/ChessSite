export default function ProfilePage() {
    return (
        <>
            <body>
                <header id="header"></header>

                <main className="main">
                    <aside className="left-menu-container">
                        <a className="selected-game-type" href="">Шахматы</a>
                        <div className="game-times">
                            <a href="">Bullet</a>
                            <a href="">Blitz</a>
                            <a href="">Rapid</a>
                            <a id="selected-time-control" href="">Long</a>
                        </div>
                        <a href="">Шахматы 960</a>
                        <a href="">Туман войны</a>
                        <a href="">Своя игра</a>
                    </aside>
                    <div className="games-info-container">
                        <div className="graph-container">
                            <div className="user-name-title">UserName</div>
                            <img className="graph-img" src="Src/Img/graphic.png" alt=""/>
                            <div className="graph-setbar"></div>
                            <span className="graph-start-date">12.10.2024</span>
                            <span className="graph-end-date">20.03.2025</span>
                        </div>
                        <div className="games-statistics-container">
                            <div>
                                <div>Всего партий</div>
                                <div>Побед</div>
                                <div>Поражений</div>
                                <div>Ничьих</div>
                                <div>Процент побед</div>
                            </div>
                            <div>
                                <div>100</div>
                                <div style="color: var(--win-green)">40</div>
                                <div style="color: var(--lose-red)">10</div>
                                <div style="color: var(--white-low-text)">50</div>
                                <div style="color: var(--win-green)">40%</div>
                            </div>
                        </div>
                    </div>
                    <div className="user-container">
                        <div className="user-info">
                            <div>Зарегистрирован</div>
                            <div>На сайте</div>
                            <div>Самый частый противник</div>
                            <div>12 октября 2024</div>
                            <div>5 месяцев 6 дней</div>
                            <div>Player2, 12 игр</div>
                        </div>
                        <span className="achievements-title">Достижения</span>
                        <span className="achievements-count">4 / 8</span>
                        <div className="achievements-container">
                            <div className="achievement">
                                <img src="Src/Icons/Achievement.svg"/>
                                <div className="achievement-caption">Победить 1 раз</div>
                            </div>
                            <div className="achievement">
                                <img src="Src/Icons/Achievement2.svg"/>
                                <div className="achievement-caption">Сыграть 1 партию</div>
                            </div>
                            <div className="achievement">
                                <img src="Src/Icons/Achievement2.svg"/>
                                <div className="achievement-caption">Победить 1 раз</div>
                            </div>
                            <div className="achievement">
                                <img src="Src/Icons/Achievement2.svg"/>
                                <div className="achievement-caption">Сыграть 1 партию</div>
                            </div>
                            <div className="unreceived-achievement">
                                <img src="Src/Icons/Achievement.svg"/>
                                <div className="achievement-caption">Победить 1 раз</div>
                            </div>
                            <div className="unreceived-achievement">
                                <img src="Src/Icons/Achievement2.svg"/>
                                <div className="achievement-caption">Сыграть 1 партию</div>
                            </div>
                            <div className="unreceived-achievement">
                                <img src="Src/Icons/Achievement.svg"/>
                                <div className="achievement-caption">Победить 1 раз</div>
                            </div>
                            <div className="unreceived-achievement">
                                <img src="Src/Icons/Achievement2.svg"/>
                                <div className="achievement-caption">Сыграть 1 партию</div>
                            </div>
                        </div>
                    </div>
                </main>

            </body>
        </>
    )
}