import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate, useSpring } from "framer-motion";

// Helper component for animating individual words
function AnimatedWord({ children, progress, start, end }) {
  const opacity = useTransform(progress, [start, end], [1, 0]);
  const filter = useTransform(progress, [start, end], ["blur(0px)", "blur(20px)"]);
  
  return (
    <motion.span style={{ opacity, filter }} className="inline-block mr-[0.25em]">
      {children}
    </motion.span>
  );
}

export default function InsightSection() {
  const containerRef = useRef(null);

  // Track the scroll progress of this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Apply a spring to make the scroll movement buttery smooth but highly responsive
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    mass: 0.5,
    restDelta: 0.001
  });

  // 1. Initial text animations (Container scales slightly as words fade out)
  const initialTextScale = useTransform(smoothProgress, [0, 0.12], [1, 1.2]);

  // 2. Horizontal sliding text
  // We use pl-[100vw] to start completely off-screen right (avoids overlap).
  // We remove right padding to minimize total width, so it slides slower.
  const textX = useTransform(smoothProgress, [0.12, 1], ["0%", "-100%"]);
  const textSlideScale = useTransform(smoothProgress, [0.12, 1], [1, 0.95]); // Subtle depth

  // 3. Circle mask radius (grows then completely shrinks to hide)
  const circleRadius = useTransform(smoothProgress, [0.18, 0.55, 0.9], ["0vh", "70vh", "0vh"]);
  const clipPathVar = useMotionTemplate`circle(${circleRadius} at 50% 50%)`;

  // 4. Background and text color transitions
  const bgColor = useTransform(smoothProgress, [0.7, 0.9], ["rgba(10,17,24,0)", "#FBF8F3"]);
  const textColor = useTransform(smoothProgress, [0.7, 0.9], ["#ffffff", "#291B03"]);

  return (
    <section ref={containerRef} className="w-full h-[400vh] relative bg-transparent">
      {/* Sticky container that stays on screen while scrolling */}
      <motion.div 
        style={{ backgroundColor: bgColor }} 
        className="sticky top-0 w-full h-[100svh] overflow-hidden flex items-center justify-center"
      >
        {/* 1. The Initial Text (Fades out word by word) */}
        <motion.div
          style={{ scale: initialTextScale }}
          className="absolute inset-0 z-20 px-6 flex flex-col items-center justify-center pointer-events-none"
        >
          <h2 className="font-serif text-[clamp(1.5rem,3.5vw,4rem)] max-w-6xl leading-[1.2] text-white text-center font-normal tracking-tight">
            <AnimatedWord progress={smoothProgress} start={0.00} end={0.06}>From brand creation</AnimatedWord>
            <AnimatedWord progress={smoothProgress} start={0.02} end={0.08}>to revenue execution,</AnimatedWord>
            <br className="hidden md:block" />
            <AnimatedWord progress={smoothProgress} start={0.04} end={0.10}>we build strategic</AnimatedWord>
            <AnimatedWord progress={smoothProgress} start={0.06} end={0.12}>and creative marketing systems</AnimatedWord>
            <br className="hidden md:block" />
            <AnimatedWord progress={smoothProgress} start={0.08} end={0.14}>that drive measurable</AnimatedWord>
            <AnimatedWord progress={smoothProgress} start={0.10} end={0.16}>business growth.</AnimatedWord>
          </h2>
        </motion.div>

        {/* 2. Base Sliding Text Layer (Dark/Cream bg, White/Dark text) */}
        <div className="absolute inset-0 z-30 flex items-center pointer-events-none overflow-hidden">
          <motion.div style={{ x: textX }} className="flex whitespace-nowrap pl-[100vw] pr-0">
            <motion.h2 style={{ color: textColor, scale: textSlideScale }} className="text-[18vw] font-serif tracking-tight">
              Strategy. Content. Growth.
            </motion.h2>
          </motion.div>
        </div>

        {/* 3. The Clip-Path Yellow Layer (Yellow bg, Blue text) */}
        <motion.div 
          style={{ clipPath: clipPathVar }} 
          className="absolute inset-0 z-40 flex items-center pointer-events-none overflow-hidden bg-[#E0CD94]"
        >
          <motion.div style={{ x: textX }} className="flex whitespace-nowrap pl-[100vw] pr-0">
            <motion.h2 style={{ scale: textSlideScale }} className="text-[18vw] font-serif tracking-tight text-[#291b03]">
              Strategy. Content. Growth.
            </motion.h2>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}
