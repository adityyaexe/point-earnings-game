// point-earnings-game/src/components/Scoreboard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Scoreboard = ({ points }) => {
  return (
    <motion.div
      className="scoreboard"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Points: {points}</h2>
    </motion.div>
  );
};

export default Scoreboard;
