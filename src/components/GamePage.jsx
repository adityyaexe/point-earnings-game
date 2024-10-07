// point-earnings-game/src/components/GamePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Scoreboard from './Scoreboard'; // Import the Scoreboard component
import './Scoreboard.css'; // Import the styles

const GamePage = ({ points, setPoints }) => {
  const navigate = useNavigate();

  // Handle "Win" button click
  const handleWinClick = () => {
    setPoints(prevPoints => prevPoints + 100); // Using functional update for state consistency
    navigate('/win'); // Navigate to win page
  };

  // Handle "Lose" button click
  const handleLoseClick = () => {
    setPoints(prevPoints => prevPoints - 50); // Using functional update for state consistency
    navigate('/lose'); // Navigate to lose page
  };

  return (
    <motion.div 
      className="game-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Scoreboard to display points */}
      <Scoreboard points={points} />

      {/* Display points with an animation */}
      <motion.h1
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Points: {points}
      </motion.h1>

      {/* Win button with hover/tap effects */}
      <motion.button 
        className="win-btn"
        onClick={handleWinClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Win
      </motion.button>

      {/* Lose button with hover/tap effects */}
      <motion.button 
        className="lose-btn"
        onClick={handleLoseClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Lose
      </motion.button>
    </motion.div>
  );
};

export default GamePage;
