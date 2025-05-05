import Header from "./components/Header.jsx";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import LearnPage from "./pages/LearnPage";
import HistoryPage from "./pages/HistoryPage";
import GamePage from "./pages/GamePage";
import NotFound from "./pages/NotFound";


export default function App() {
	return (
		<>
			<HashRouter>
				<Header />
				<Routes>
					<Route exact path="/" element={<HomePage />}></Route>
					<Route path="*" element={<NotFound />}></Route>
					<Route exact path="/settings" element={<SettingsPage />}></Route>
					<Route exact path="/learn" element={<LearnPage />}></Route>
					<Route exact path="/history" element={<HistoryPage />}></Route>
					<Route exact path="/user" element={<ProfilePage />}></Route>
					<Route exact path="/game" element={<GamePage />}></Route>
				</Routes>
			</HashRouter>
		</>
	)
}
