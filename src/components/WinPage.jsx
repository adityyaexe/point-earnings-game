// point-earnings-game/components/WinPage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';

const WinPage = ({ points, setPoints }) => {
  const navigate = useNavigate();

  // Automatically navigate back to the main page after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/'); // Navigate back to the main page
    }, 2000);
    return () => clearTimeout(timer); // Clear the timeout on component unmount
  }, [navigate]);

  // Call the function to add points when the Win page is displayed
  useEffect(() => {
    setPoints(prevPoints => prevPoints + 100); // Add points when displayed
  }, [setPoints]);

  return (
    <motion.div 
      className="win-container" // Updated to use win-container for proper styling
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Confetti /> {/* Show Confetti for the Win */}

      <motion.h1
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Congratulations! You've won.
      </motion.h1>
      
      <motion.h2
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Points: {points}
      </motion.h2>
      
      <motion.h2
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        +100 points
      </motion.h2>
    </motion.div>
  );
};

export default WinPage;
