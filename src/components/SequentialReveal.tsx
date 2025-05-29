"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface SequentialRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

const SequentialReveal: React.FC<SequentialRevealProps> = ({ 
  children, 
  delay = 0, 
  duration = 0.8 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] // smooth easing
      }}
    >
      {children}
    </motion.div>
  );
};

export default SequentialReveal;
