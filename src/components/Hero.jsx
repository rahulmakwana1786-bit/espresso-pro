import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Hero() {
  const badgeRef = useRef(null);

  // Rotating badge effect
  useEffect(() => {
    let animationFrameId;
    let rotation = 0;

    const animateBadge = () => {
      rotation += 0.2; // Speed of rotation
      if (badgeRef.current) {
        badgeRef.current.style.transform = `rotate(${rotation}deg)`;
      }
      animationFrameId = requestAnimationFrame(animateBadge);
    };

    animateBadge();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      id="home"
      className="min-h-[100svh] w-full bg-transparent relative overflow-hidden font-sans flex items-center justify-start pt-24 pb-16"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row justify-between items-center relative z-20 h-full mt-10 md:mt-0 gap-12">
        
        {/* ================= LEFT SIDE: TYPOGRAPHY ================= */}
        <div className="w-full lg:w-[65%] flex flex-col items-start gap-4 md:gap-5 z-10 relative">
          
          {/* High-Impact Typography */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-extrabold text-[42px] leading-[1.05] sm:text-[55px] md:text-[70px] lg:text-[80px] xl:text-[95px] tracking-tight text-[#ad7f00] drop-shadow-2xl w-full max-w-[900px]"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 pb-1 w-full truncate overflow-visible">360° Branding &</span>
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 pb-2 w-full truncate overflow-visible">
              Marketing <span className="font-serif italic font-normal tracking-wide text-[#E0CD94] drop-shadow-[0_0_15px_rgba(224,205,148,0.4)]">Agency</span>
            </span>
          </motion.h1>

          {/* Underline decorative element */}
          <motion.div
             initial={{ opacity: 0, width: 0 }}
             animate={{ opacity: 1, width: "60px" }}
             transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
             className="h-[1px] bg-white/30 mt-2 mb-1"
          />

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#ad7f00]/70 text-base md:text-xl max-w-[500px] font-light leading-relaxed"
          >
            End-to-end solutions designed to drive measurable business growth.
          </motion.p>
          
        </div>

        {/* ================= RIGHT SIDE: ROTATING BADGE & BUTTON ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:w-[35%] flex flex-col items-center justify-center z-20 mt-10 lg:mt-0"
        >
          {/* Badge Container */}
          <Link to="/work" className="relative block w-[180px] h-[180px] lg:w-[250px] lg:h-[250px] xl:w-[320px] xl:h-[320px] lg:translate-x-10 xl:translate-x-20 group cursor-pointer hover:scale-105 transition-transform duration-500">
            {/* The rotating text circle */}
            <div 
              ref={badgeRef}
              className="absolute inset-0 w-full h-full text-[#E0CD94] opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <path
                  id="circlePath"
                  d="M 50, 50 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
                  fill="transparent"
                />
                <text className="text-[12.5px] font-bold tracking-[0.2em] uppercase" fill="currentColor">
                  <textPath href="#circlePath" startOffset="0%" textLength="260" lengthAdjust="spacingAndGlyphs">
                    VIEW OUR WORK • VIEW OUR WORK • VIEW OUR WORK •
                  </textPath>
                </text>
              </svg>
            </div>
            
            {/* 4-Pointed Star Icon in center */}
            <div className="absolute inset-0 flex items-center justify-center text-[#E0CD94] opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
              <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" fill="currentColor" stroke="none" />
              </svg>
            </div>
          </Link>

          {/* Explore Case Studies Button positioned below the badge like the image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-16 lg:-bottom-12 xl:-bottom-10 lg:right-0 xl:right-10 z-30"
          >
            <Link
              to="/work/content-strategy-and-marketing"
              className="inline-block px-5 py-2 rounded-md bg-[#EFE8D0] hover:bg-white text-black text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.3)] cursor-pointer"
            >
              Explore Case Studies
            </Link>
          </motion.div>

        </motion.div>
        
      </div>
    </div>
  );
}


