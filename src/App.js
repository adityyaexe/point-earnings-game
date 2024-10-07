// point-earnings-game/src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GamePage from './components/GamePage';
import WinPage from './components/WinPage';
import LosePage from './components/LosePage';
import NotFound from './components/NotFound';
import Scoreboard from './components/Scoreboard'; // Import Scoreboard
import './App.css';

function App() {
  const [points, setPoints] = useState(0);

  // Load points from localStorage when the app starts
  useEffect(() => {
    const storedPoints = localStorage.getItem('points');
    if (storedPoints) {
      setPoints(parseInt(storedPoints, 10)); // Parse to ensure it's a number
    }
  }, []);

  // Update localStorage whenever points change
  useEffect(() => {
    localStorage.setItem('points', points);
  }, [points]);

  // Function to reset points
  const resetPoints = () => {
    setPoints(0);
    localStorage.removeItem('points'); // Clear from localStorage
  };

  return (
    <Router>
      <div className="app-container">
        {/* Scoreboard Component */}
        <Scoreboard points={points} />
        
        {/* Reset Points Button */}
        <button onClick={resetPoints} className="reset-btn">
          Reset Points
        </button>
        
        <Routes>
          {/* Main Game Page */}
          <Route 
            path="/" 
            element={<GamePage points={points} setPoints={setPoints} />} 
          />
          {/* Win Page */}
          <Route 
            path="/win" 
            element={<WinPage points={points} setPoints={setPoints} />} 
          />
          {/* Lose Page */}
          <Route 
            path="/lose" 
            element={<LosePage points={points} setPoints={setPoints} />} 
          />
          {/* Fallback for undefined routes */}
          <Route 
            path="*" 
            element={<NotFound />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
