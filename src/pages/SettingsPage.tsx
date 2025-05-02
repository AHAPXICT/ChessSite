import '../css/settings.scoped.css'
import GameBoard from "../chess-board/GameBoard.tsx";

export default function SettingsPage() {
    return (
        <>
            <body>
                <main className="main">
                    <nav className="settings-sidebar">
                        <a href="">Общие настройки</a>
                        <a href="">Профиль</a>
                        <a href="">Игра</a>
                        <a href="">Внешний вид</a>
                        <a href="">Другое</a>
                    </nav>
                    <div className="settings-div">
                        <div className="settings-header">Внешний вид</div>

                        <div className="settings-parameters">
                            <ul className="parameters-list">
                                <li>
                                    <div>Материал доски</div>
                                    <input type="color"/></li>
                                <li>
                                    <div>Цвет доски</div>
                                    <input type="color"/></li>
                                <li>
                                    <div>Цвет фигур</div>
                                    <input type="color"/></li>
                                <li>
                                    <div>Форма фигур</div>
                                    <input type="color"/></li>
                                <li>
                                    <div>Фон</div>
                                    <input type="color"/></li>
                                <a className="clear-settings">Сбросить настройки</a>
                            </ul>

                            <div className="settings-preview">
                                <div className="preview-header">Предпросмотр</div>
                                <div className="preview-img" id="board">
                                    <GameBoard />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </body>
        </>
    )
}