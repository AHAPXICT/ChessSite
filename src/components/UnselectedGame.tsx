import board from '../img/Board.jpg'
import '../css/history.scoped.css'

export default function UnselectedGame() {
	return (
		<div className="unselected-game">
			<img src={board} className="unselected-image" alt=""/>
			<div className="unselected-text-container">
				<div>Классические шахматы</div>
				<div>Блиц, 5 + 2</div>
				<div className="unselected-game-info">
					<div className="selected-game-player">
						<div>UserName</div>
						<span className="player-rating">1300</span>
						<span className="win-rating">+ 5</span>
						<div className="win-rating">Победа белых</div>
					</div>
					<div className="selected-game-player">
						<div>VS</div>
					</div>
					<div className="selected-game-player">
						<div>Player2</div>
						<span className="player-rating">1200</span>
						<span className="lose-rating">- 5</span>
						<div className="lose-rating">Чёрные сдались</div>
					</div>
				</div>
				<div className="unselected-date">10.02.2024 в 12:35</div>
			</div>
		</div>
	)
}