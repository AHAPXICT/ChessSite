import '/src/CSS/site.css'

export default function HistoryAndTime() {
	return (
		<aside className="right-container">
			<div className="pieces-container">
				<img style="opacity: 0" src="Src/Icons/HandedPiece.svg" alt=""/>
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
	)
}