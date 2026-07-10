import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "../assets/about_1.png";

export default function AboutUs() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: "-10% 0px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  // Animation variants for the text
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const lineVariants = {
    hidden: { y: "120%", opacity: 0, rotate: 2 },
    visible: { 
      y: "0%", 
      opacity: 1, 
      rotate: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.215, 0.61, 0.355, 1]
      } 
    },
  };

  return (
    <section ref={containerRef} id="about-us" className="relative bg-transparent text-[#1a1a1a] py-32 md:py-48 overflow-hidden selection:bg-[#cca027] selection:text-white">
      <div className="container mx-auto px-8 lg:px-16 relative z-10 flex flex-col gap-24 md:gap-40">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <h2 className="text-xs md:text-sm tracking-[0.3em] uppercase text-black/50 flex items-center gap-4 font-sans font-bold">
            <span className="w-12 h-[2px] bg-[#cca027]" />
            About Espresso
          </h2>
          <div className="max-w-md text-[#4a4a4a] font-medium text-lg md:text-xl leading-relaxed font-sans">
            Built to solve one problem: brands investing in marketing without seeing real business growth.
          </div>
        </div>

        {/* Massive Typography - Animated */}
        <motion.h3 
          ref={textRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-[10vw] md:text-[8vw] font-serif leading-[0.9] tracking-tighter uppercase font-bold"
        >
          <div className="overflow-hidden pb-2 md:pb-6">
            <motion.div variants={lineVariants} className="origin-bottom-left">
              We design &
            </motion.div>
          </div>
          <div className="overflow-hidden pb-2 md:pb-6">
            <motion.div variants={lineVariants} className="origin-bottom-left flex items-center flex-wrap">
              execute full-funnel <span className="text-[#cca027] italic pl-2 md:pl-4">growth.</span>
            </motion.div>
          </div>
        </motion.h3>
        
        {/* Visual & Text Grid */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center mt-12 md:mt-0">
          
          {/* Huge Image Reveal */}
          <div className="w-full lg:w-3/5 relative h-[50vh] md:h-[80vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
            <motion.div style={{ scale: imgScale }} className="absolute inset-0 w-full h-full bg-[#f0f0f0]">
              <img
                src={img1}
                alt="Client strategy session"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.5s] ease-[0.25,1,0.5,1]"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
            
            {/* Minimal Play/View Button overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white tracking-widest text-[10px] md:text-xs uppercase font-bold shadow-lg">
                Explore
              </div>
            </div>
          </div>

          {/* Floating Text Block */}
          <div className="w-full lg:w-2/5 flex flex-col gap-10 z-20">
            <motion.div style={{ y }} className="flex flex-col gap-8 text-xl md:text-2xl leading-relaxed text-[#1a1a1a] font-medium bg-white/80 backdrop-blur-2xl p-8 md:p-12 rounded-3xl border border-white/50 shadow-[0_10px_40px_rgba(0,0,0,0.05)] font-sans">
              <p>
                We connect brand, content, performance, and automation. So marketing doesn't just look good, <span className="text-[#cca027] font-bold italic">it moves inventory and drives revenue.</span>
              </p>
              <div className="flex flex-col gap-2 mt-4">
                <span className="text-[#1a1a1a] text-5xl md:text-7xl font-serif font-bold">5x</span>
                <span className="text-[#666] text-[10px] md:text-xs tracking-widest uppercase font-bold">Avg. ROI across 40+ brands</span>
              </div>
              
              <Link to="/about" className="mt-8 group relative inline-flex items-center justify-center px-8 py-4 bg-[#1a1a1a] text-white rounded-full overflow-hidden w-fit hover:border-transparent transition-all shadow-lg">
                <div className="absolute inset-0 w-full h-full bg-[#cca027] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                <span className="relative font-bold tracking-[0.2em] uppercase text-xs text-white transition-colors duration-500">
                  Read Our Story
                </span>
              </Link>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
