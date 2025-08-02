import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChessCoachingLanding from "./components/ChessCoachingLanding";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChessCoachingLanding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;