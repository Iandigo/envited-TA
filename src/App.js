import React from "react";
import LandingPage from "./pages/LandingPage";
import CreateEvent from "./pages/CreateEvent";
import EventPage from "./pages/EventPage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<CreateEvent />} />
          <Route path="/event" element={<EventPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
