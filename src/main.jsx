import React, { StrictMode } from 'react'
import ReactDom from 'react-dom';
import { createRoot } from 'react-dom/client'
import Header from "./components/Header.jsx";
import HistoryAndTime from "./components/HistoryAndTime.jsx";

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
