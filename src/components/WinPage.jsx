import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';

const WinPage = ({ points }) => {
  const navigate = useNavigate();

  // Automatically navigate back to the main page after 2 seconds
  setTimeout(() => {
    navigate('/'); // Navigate back to the main page
  }, 2000);

  return (
    <motion.div 
      className="win-container"
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
