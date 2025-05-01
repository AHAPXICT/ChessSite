import Header from "./components/Header.jsx";
import {HashRouter, Route, Routes} from "react-router-dom";
import Search from "./components/Search.jsx";
import GamePage from "./pages/GamePage.js";
import GameBoard from "./chess-board/GameBoard.js";

export default function App() {
	return (
		<>
			{/*<GamePage />*/}
			<HashRouter>
				{/*<Routes>*/}
				{/*	/!*<Route index element={<GamePage />} />*!/*/}
				{/*	<Route path="/" element={<GamePage />} />*/}
				{/*	<Route path="/goida" element={<Nav/>}></Route>*/}
				{/*	<Route path="/ChessSite/goida" element={<Search/>}></Route>*/}
				{/*</Routes>*/}
				<Header />
				<Routes>
					<Route exact path="/" element={<GameBoard />}></Route>
					<Route exact path="/goida" element={<GameBoard />}></Route>
				</Routes>
			</HashRouter>
		</>
	)
}
