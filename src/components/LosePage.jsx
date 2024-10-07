// point-earnings-game/src/components/LosePage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Scoreboard from './Scoreboard'; // Import the Scoreboard component
import './Scoreboard.css'; // Import the styles

const LosePage = ({ points }) => {
  const navigate = useNavigate();

  // Automatically navigate back to the main page after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/'); // Navigate back to the main page
    }, 2000);

    return () => clearTimeout(timer); // Clear timeout on unmount
  }, [navigate]);

  return (
    <motion.div 
      className="lose-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Scoreboard to display points */}
      <Scoreboard points={points} />

      <motion.h1
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        You Lost! Points: {points}
      </motion.h1>
      <motion.h2
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        -50 points
      </motion.h2>
    </motion.div>
  );
};

export default LosePage;
