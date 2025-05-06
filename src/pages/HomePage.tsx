import '../css/home.scoped.css'
import newsPhoto from '../img/NewsPrimer.jpg'
import tgLogo from '../icons/Tg.svg'
import {Link} from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <main>
                <aside className="news-main-container">
                    <div className="news-header">ChessNews</div>
                    <div className="news-sidebar">
                        <News/>
                        <News/>
                    </div>
                </aside>
                <div className="button-container">
                    <button className="a"><Link to='/game'>Начать игру</Link></button>
                    <button><Link to='/game'>Классические шахматы</Link></button>
                    <button><Link to='/game'>Шахматы 960</Link></button>
                    <button><Link to='/game'>Туман войны</Link></button>
                    <button><Link to='/game'>Своя игра</Link></button>
                    <button><Link to='/game'>Присоединиться к игре</Link></button>
                    <button><Link to='/game'>Игра с компьютером</Link></button>
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
                    <li><a href="" className="tg-link"><img src={tgLogo} alt=""/></a></li>
                </ul>
            </footer>
        </>
    )
}

function News() {
    return (
        <a href="">
            <div className="news-container">
                <img src={newsPhoto} alt=""/>
                <h2 className="container-title">Can you find right move in this position</h2>
            </div>
        </a>
    )
}