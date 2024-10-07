// point-earnings-game/src/components/GamePage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Scoreboard from './Scoreboard'; // Import the Scoreboard component
import './Scoreboard.css'; // Import the styles

const GamePage = ({ points, setPoints }) => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false); // Flag to prevent multiple clicks
  const [error, setError] = useState(''); // State for error message

  // Handle "Win" button click
  const handleWinClick = () => {
    if (isProcessing) return; // Prevent multiple clicks
    setIsProcessing(true); // Set flag to true
    setPoints(prevPoints => prevPoints + 100); // Using functional update for state consistency
    navigate('/win'); // Navigate to win page
  };

  // Handle "Lose" button click
  const handleLoseClick = () => {
    if (isProcessing) return; // Prevent multiple clicks
    setIsProcessing(true); // Set flag to true

    if (points === 0) {
      setError('Cannot deduct points below 0.'); // Set error message
      setIsProcessing(false); // Reset processing flag
      return; // Prevent further execution
    }

    // Deduct points and navigate to the Lose page
    setPoints(prevPoints => Math.max(prevPoints - 50, 0)); // Ensure points do not go below 0
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

      {/* Display error message if applicable */}
      {error && <p className="error-message">{error}</p>}

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
