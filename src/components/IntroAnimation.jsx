import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const IntroAnimation = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Wait for text to finish animating in, pause, then start the zoom-out exit
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] origin-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }} 
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Top text: The Espresso Media */}
          <div className="overflow-hidden mb-6">
            <motion.h2
              className="text-sm md:text-base lg:text-lg font-medium tracking-[0.4em] uppercase text-[#291b03]/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] text-center"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9], delay: 0.3 }}
            >
              The Espresso Media
            </motion.h2>
          </div>

          {/* Main text: 360° Branding & Marketing on one line */}
          <div className="overflow-hidden">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-[80px] font-thin text-transparent bg-clip-text bg-gradient-to-b from-white/30 to-white/5 drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] text-center tracking-wide whitespace-nowrap"
              style={{ fontFamily: "Playfair Display, serif" }}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9], delay: 0.5 }}
            >
              360° <span className="italic">Branding & Marketing</span>
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
