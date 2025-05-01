export default function MainPage() {
    return (
        <>
            <body className="body">
                <main>
                    <aside className="news-main-container">
                        <div className="news-header">ChessNews</div>
                        <div className="news-sidebar">
                            <a href="">
                                <div className="news-container">
                                    <img src="src/img/NewsPrimer.jpg" alt=""/>
                                    <h2 className="container-title">Can you find right move in this position</h2>
                                </div>
                            </a>
                            <a href="">
                                <div className="news-container">
                                    <img src="src/img/NewsPrimer.jpg" alt=""/>
                                    <h2 className="container-title">Can you find right move in this position</h2>
                                </div>
                            </a>
                        </div>
                    </aside>
                    <div className="button-container">
                        <button className="a">Начать игру</button>
                        <button>Классические шахматы</button>
                        <button>Шахматы 960</button>
                        <button>Туман войны</button>
                        <button>Своя игра</button>
                        <button>Присоединиться к игре</button>
                        <button>Игра с компьютером</button>
                    </div>
                </main>
                <footer className="footer">
                    <ul className="footer-list footer-list-left">
                        <li><a href="">Пользовательское соглашение</a></li>
                        <li><a href="">Частые вопросы</a></li>
                        <li><a href="">О сайте</a></li>
                    </ul>
                    <ul className="footer-list">
                        <li><a href="mailto:mail@mail.ru">mail@mail.ru</a></li>
                        <li><a href="" className="tg-link"><img src="src/icons/Tg.svg" alt=""/></a></li>
                    </ul>
                </footer>
            </body>

        </>
    )
}