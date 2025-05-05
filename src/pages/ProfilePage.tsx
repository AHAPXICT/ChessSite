import '../css/profile.scoped.css'
import achievementIcon from '../icons/Achievement.svg'
import achievementIcon2 from '../icons/Achievement2.svg'
import graphImage from '../img/graphic.png'

export default function ProfilePage() {
    return (
        <>
            <main className="main">
                <aside className="left-menu-container">
                    <a className="selected-game-type" href="">Шахматы</a>
                    <a href="">Шахматы 960</a>
                    <a href="">Туман войны</a>
                    <a href="">Своя игра</a>
                </aside>
                <div className="games-info-container">
                    <div className="graph-container">
                        <div className="user-name-title">UserName</div>
                        <img className="graph-img" src={graphImage} alt=""/>
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
                            <div className="win-count">40</div>
                            <div className="lose-count">10</div>
                            <div className="draw-count">50</div>
                            <div className="win-count">40%</div>
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
                        <Achievement text="Сыграть 100 партий" icon={achievementIcon}/>
                        <Achievement text="Сыграть 1000 партий" icon={achievementIcon}/>
                        <Achievement text="Выиграть 10 партий" icon={achievementIcon2}/>
                        <Achievement text="Выиграть 100 партий" icon={achievementIcon2}/>
                        <Achievement text="Сыграть 10000 партий" icon={achievementIcon} unreceived={true}/>
                        <Achievement text="Сыграть 20000 партий" icon={achievementIcon} unreceived={true}/>
                        <Achievement text="Выиграть 1000 партий" icon={achievementIcon} unreceived={true}/>
                        <Achievement text="Выиграть 5000 партий" icon={achievementIcon} unreceived={true}/>
                    </div>
                </div>
            </main>
        </>
    )
}

function Achievement({text, icon, unreceived}: { text: String, icon: string, unreceived?: boolean }) {
    let className: string = 'achievement'
    if (unreceived) {
        className += ' unreceived'
    }
    return (
        <div className={className}>
            <img src={icon}/>
            <div className="achievement-caption">{text}</div>
        </div>
    )
}