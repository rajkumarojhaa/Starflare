import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import AppRoutes from './components/AppRoutes';

const SmoothScrollWrapper = ({ children }) => {
  // 1. Hook for tracking scroll progress
  const { scrollYProgress } = useScroll();
  
  // 2. Spring animation for smooth progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* 3. Progress bar indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-cyan-600 origin-left z-50"
        style={{ scaleX }}
      />
      
      {/* 4. Main content with smooth scrolling */}
      <motion.div
        style={{ scrollBehavior: 'smooth' }} // Fallback for browsers that don't support CSS smooth-scroll
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </>
  );
};

const App = () => {
  return (
    <SmoothScrollWrapper>
      <AppRoutes />
    </SmoothScrollWrapper>
  );
};

export default App;