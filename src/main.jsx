import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import Header from "./components/Header.jsx";
import HistoryAndTime from "./components/HistoryAndTime.jsx";
import UnselectedGame from "./components/UnselectedGame.jsx";
import GameBoard from "./chess-board/GameBoard.tsx";

createRoot(document.getElementById('header')).render(
  <StrictMode>
    <Header />
  </StrictMode>,
)

createRoot(document.getElementById('history-and-time')).render(
    <StrictMode>
        <HistoryAndTime />
    </StrictMode>,
)

createRoot(document.querySelector('.unselected-game')).render(
    <StrictMode>
        <UnselectedGame />
    </StrictMode>
)

createRoot(document.querySelector('board')).render(
    <StrictMode>
        <GameBoard />
    </StrictMode>
)