import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Scoreboard from './Scoreboard'; // Import the Scoreboard component
import './Scoreboard.css'; // Import the styles

const LosePage = ({ points, setPoints }) => {
  const navigate = useNavigate();

  // Use useCallback to memoize the function
  const handlePointsDeduction = useCallback(() => {
    setPoints((prevPoints) => Math.max(prevPoints - 50, 0)); // Ensure points don't go below 0
  }, [setPoints]); // Include setPoints as a dependency

  useEffect(() => {
    handlePointsDeduction(); // Deduct points on mount

    // Automatically navigate back to the main page after 2 seconds
    const timer = setTimeout(() => {
      navigate('/'); // Navigate back to the main page
    }, 2000);

    return () => clearTimeout(timer); // Clear the timeout on component unmount
  }, [handlePointsDeduction, navigate]); // Add handlePointsDeduction and navigate as dependencies

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
