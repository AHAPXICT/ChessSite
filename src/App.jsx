import Header from "./components/Header.jsx";
import {HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import SettingsPage from "./pages/SettingsPage.js";
import ProfilePage from "./pages/ProfilePage.js";
import LearnPage from "./pages/LearnPage.js";
import HistoryPage from "./pages/HistoryPage.js";

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
					<Route exact path="/" element={<HomePage />}></Route>
					<Route exact path="/settings" element={<SettingsPage />}></Route>
					<Route exact path="/learn" element={<LearnPage />}></Route>
					<Route exact path="/history" element={<HistoryPage />}></Route>
					<Route exact path="/user" element={<ProfilePage />}></Route>
				</Routes>
			</HashRouter>
		</>
	)
}
