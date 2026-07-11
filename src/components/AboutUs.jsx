import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "../assets/about_1.png";
import img2 from "../assets/about_2.png"; // New asset utilized for collage

export default function AboutUs() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <section ref={containerRef} id="about-us" className="relative py-32 md:py-48 bg-transparent text-[#1a1a1a] selection:bg-[#cca027] selection:text-white px-6 md:px-12 lg:px-20 overflow-hidden">
      
      {/* Decorative Rotating Badge */}
      <motion.div 
        style={{ rotate }} 
        className="absolute top-10 right-10 md:top-20 md:right-20 w-32 h-32 md:w-40 md:h-40 opacity-20 pointer-events-none hidden md:block"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path id="textPath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" fill="transparent" />
          <text>
            <textPath href="#textPath" startOffset="0%" className="text-[22px] font-bold uppercase tracking-[0.22em] fill-[#1a1a1a]">
              • Espresso Media • Full Funnel Growth
            </textPath>
          </text>
        </svg>
      </motion.div>

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-20 lg:gap-12 relative z-10">
        
        {/* Left Column: Stacking text content */}
        <div className="w-full lg:w-5/12 flex flex-col justify-between relative z-20 pt-10">
          
          <div className="flex flex-col gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#cca027] flex items-center gap-4 font-bold mb-8">
                <span className="w-8 h-[2px] bg-[#cca027]" />
                The Espresso Difference
              </h2>
              <h3 className="text-[13vw] lg:text-[5.5vw] font-serif leading-[0.85] tracking-tighter uppercase font-bold text-[#1a1a1a]">
                Engineering <br/>
                Your <span className="text-[#cca027] italic relative">Growth.
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#cca027]/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </span>
              </h3>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pl-6 md:pl-10 border-l-2 border-[#1a1a1a]/10 flex flex-col gap-10 max-w-md mt-4 md:mt-12"
            >
              <p className="text-[#444] text-lg md:text-xl leading-relaxed font-medium">
                We are an elite growth agency. We connect brand, content, performance, and automation. Because aesthetics without performance is just art.
              </p>
              
              <div className="flex flex-col gap-5">
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#888]">Core Capabilities</h4>
                <div className="flex flex-wrap gap-3">
                  {['Brand Strategy', 'Performance Ads', 'Content Creation', 'Automation'].map((tag) => (
                    <span key={tag} className="px-5 py-2.5 rounded-full border border-black/5 text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a] bg-white shadow-sm hover:border-[#cca027] hover:text-[#cca027] transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Link to="/about" className="mt-6 group relative inline-flex items-center justify-center px-10 py-5 bg-[#1a1a1a] text-white rounded-full overflow-hidden w-fit transition-all shadow-xl hover:shadow-2xl">
                <div className="absolute inset-0 w-full h-full bg-[#cca027] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                <span className="relative font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs transition-colors duration-500 group-hover:text-white">
                  Discover Our Story
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Editorial Image Collage */}
        <div className="w-full lg:w-7/12 relative mt-16 lg:mt-0 min-h-[60vh] lg:min-h-[85vh]">
          
          {/* Main Large Image */}
          <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-[90%] lg:w-[85%] h-[45vh] lg:h-[75vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl z-10 group">
            <img src={img1} alt="Team strategy" className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-[0.25,1,0.5,1]" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>

          {/* Overlapping Smaller Image (Parallax Collage) */}
          <motion.div style={{ y: y2 }} className="absolute bottom-20 md:bottom-32 left-0 lg:-left-12 w-[60%] lg:w-[50%] h-[30vh] lg:h-[45vh] rounded-[2rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.15)] z-20 border-[8px] lg:border-[12px] border-[#fbf8f3] group hidden md:block">
            <img src={img2} alt="Creative process" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] ease-[0.25,1,0.5,1]" />
          </motion.div>

          {/* Floating Stat Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute -bottom-10 lg:-bottom-5 right-5 lg:-right-5 z-30 bg-[#1a1a1a] text-white p-8 md:p-12 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.3)] flex flex-col gap-2 max-w-[260px] md:max-w-[300px]"
          >
            <div className="text-6xl md:text-8xl font-serif font-bold text-[#cca027] tracking-tighter">5x</div>
            <div className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold text-white/90 leading-loose">
              Average ROI <br/> Across 40+ Brands
            </div>
            <div className="w-8 h-1 bg-white/20 mt-4 rounded-full" />
          </motion.div>
          
        </div>
        
      </div>
    </section>
  );
}
