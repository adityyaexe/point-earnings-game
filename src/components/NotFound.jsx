// src/components/NotFound.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <motion.div 
      className="notfound-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        404 - Page Not Found
      </motion.h1>
      <motion.button 
        className="go-home-btn"
        onClick={handleGoHome}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Go to Home
      </motion.button>
    </motion.div>
  );
};

export default NotFound;
