import { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "../assets/about_1.png";
import img2 from "../assets/about_2.png";
import img3 from "../assets/about_3.png";

function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 1, delay, ease: [0.215, 0.61, 0.355, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ScrollRevealText({ text }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "start 40%"],
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className="font-sans text-xl md:text-2xl lg:text-3xl leading-[1.4] font-medium text-[#111]/20 flex flex-wrap gap-x-[0.3em]">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        const color = useTransform(
          scrollYProgress, 
          [start, end], 
          ["rgba(17,17,17,0.2)", "rgba(17,17,17,1)"]
        );
        return (
          <motion.span key={i} style={{ color }}>
            {word}
          </motion.span>
        );
      })}
    </p>
  );
}

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      title: "Clarity",
      desc: "Complexity gets removed before the work begins. Every decision has a purpose, and every idea moves the business forward."
    },
    {
      title: "Accountability",
      desc: "The people shaping the strategy stay involved through execution. No handoffs. No passing responsibility."
    },
    {
      title: "Evolution",
      desc: "Brands don't stand still, and neither do we. Every campaign, system, and process is refined as we learn what works."
    }
  ];

  return (
    <div className="w-full font-sans bg-[#fbf8f3] text-[#111] selection:bg-[#cca027] selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen flex flex-col justify-center items-center pt-32 pb-24 px-6 md:px-12 lg:px-24 xl:px-32 relative text-center overflow-hidden">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-2 h-2 rounded-full bg-[#cca027]" />
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#111]/50">Our Philosophy</p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="font-sans text-[clamp(4rem,7vw,7rem)] leading-[0.9] tracking-tighter font-bold text-[#111]"
          >
            Every great brand starts with the right foundation.
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-[#111]/70 leading-relaxed max-w-3xl font-light mx-auto"
          >
            <p>
              Whether it's crafting the perfect espresso or building a brand, exceptional results come from precision, consistency, and getting every element to work together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= THE METAPHOR SECTION ================= */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 xl:px-32 relative flex flex-col items-center text-center">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-16 md:gap-24">
          <FadeIn>
            <div className="flex items-center justify-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#cca027]" />
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#111]/50">About</p>
            </div>
          </FadeIn>
          
          <div className="flex flex-col items-center gap-16">
            <FadeIn delay={0.2}>
              <h2 className="font-serif text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[1.1] tracking-tight text-[#111] max-w-5xl mx-auto">
                "Just like a great espresso, effective marketing isn't about more — it's about getting the right elements in <span className="italic text-[#cca027]">perfect balance.</span>"
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.4} className="flex flex-col items-center gap-6 text-[#111]/75 text-lg md:text-xl lg:text-2xl leading-[1.6] font-sans max-w-3xl mx-auto">
              <p>
                A single shot is carefully crafted to deliver maximum impact through precision, consistency, and quality. That's the standard we hold ourselves to. We believe great marketing follows the same principle.
              </p>
              <p>
                It's not about producing endless content or chasing every trend. It's about bringing strategy, creativity, and execution together into a focused system that delivers results.
              </p>
              <p className="font-medium text-[#111] text-xl md:text-2xl lg:text-3xl mt-6">
                Every brand has its own blend, and our role is to find it, refine it, and deliver it with consistency.
              </p>
              
              {/* View Work Button */}
              <div className="mt-12">
                <Link to="/work" className="inline-flex items-center justify-center px-8 py-4 bg-[#111] text-white rounded-full font-sans font-medium text-sm md:text-base transition-transform duration-300 hover:scale-105">
                  View Our Work
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ================= VALUES SECTION ================= */}
      <section className="py-32 pb-48 relative">
        {/* Subtle separator */}
        <div className="absolute top-0 left-6 right-6 md:left-12 md:right-12 lg:left-24 lg:right-24 xl:left-32 xl:right-32 h-[1px] bg-[#111]/10" />
        
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 xl:px-32 flex flex-col pt-10">
          {/* Section Label */}
          <div className="mb-20 md:mb-32">
            <FadeIn>
              <div className="flex items-center justify-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#cca027]" />
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#111]/50">Core Values</p>
              </div>
            </FadeIn>
          </div>
          
          <div className="flex flex-col">
            {values.map((value, index) => (
              <div key={value.title} className="flex flex-col md:flex-row items-start relative border-t border-[#111]/10 py-16 md:py-24">
                {/* Left Side: Number and Title */}
                <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0 sticky top-32 mb-8 md:mb-0">
                  <p className="font-sans text-lg font-bold text-[#111]/40 mb-4 leading-none">0{index + 1}</p>
                  <h3 className="font-sans text-4xl md:text-5xl font-medium text-[#111] tracking-tight leading-none">{value.title}</h3>
                </div>
                
                {/* Right Side: Scroll Reveal Text with Vertical Line */}
                <div className="w-full md:w-2/3 lg:w-3/4 md:border-l md:border-[#111]/10 md:pl-12 lg:pl-24 pt-2 md:pt-0">
                  <ScrollRevealText text={value.desc} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMPACT SECTION ================= */}
      <section className="py-32 pb-48 px-6 md:px-12 lg:px-24 xl:px-32 relative">
        <div className="absolute top-0 left-6 right-6 md:left-12 md:right-12 lg:left-24 lg:right-24 xl:left-32 xl:right-32 h-[1px] bg-[#111]/10" />
        
        <div className="w-full max-w-[1600px] mx-auto flex flex-col items-center pt-20">
          {/* Section Label */}
          <div className="mb-20 md:mb-32">
            <FadeIn>
              <div className="flex items-center justify-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#cca027]" />
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#111]/50">Impact</p>
              </div>
            </FadeIn>
          </div>
          
          {/* Right Content */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FadeIn delay={0.2} className="h-full">
                <div className="bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] p-10 md:p-12 rounded-2xl h-full flex flex-col min-h-[350px] group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[#111]/5">
                  <h3 className="font-sans text-6xl md:text-[5rem] lg:text-[6rem] leading-[0.9] font-bold text-[#111] tracking-tighter mb-auto group-hover:text-[#cca027] transition-colors duration-300">2020</h3>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#111]/50 mt-16 group-hover:text-[#111] transition-colors duration-300">Founded</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3} className="h-full">
                <div className="bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] p-10 md:p-12 rounded-2xl h-full flex flex-col min-h-[350px] group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[#111]/5">
                  <h3 className="font-sans text-6xl md:text-[5rem] lg:text-[6rem] leading-[0.9] font-bold text-[#111] tracking-tighter mb-auto group-hover:text-[#cca027] transition-colors duration-300">5.0/5</h3>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#111]/50 mt-16 group-hover:text-[#111] transition-colors duration-300">Client Ratings</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.4} className="h-full">
                <div className="bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] p-10 md:p-12 rounded-2xl h-full flex flex-col min-h-[350px] group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[#111]/5">
                  <h3 className="font-sans text-6xl md:text-[5rem] lg:text-[6rem] leading-[0.9] font-bold text-[#111] tracking-tighter mb-auto group-hover:text-[#cca027] transition-colors duration-300">100+</h3>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#111]/50 mt-16 group-hover:text-[#111] transition-colors duration-300">Projects Shipped</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-white py-40 px-6 md:px-12 lg:px-24 xl:px-32 rounded-t-[3rem] -mt-12 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.03)] border-t border-[#111]/5">
        <div className="w-full max-w-[1600px] mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-center">
          {/* Left Label */}
          <div className="w-full md:w-1/4 flex-shrink-0 hidden md:block">
            <FadeIn>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#cca027]" />
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#111]/50">Next Steps</p>
              </div>
            </FadeIn>
          </div>
          
          {/* Right Content */}
          <div className="w-full md:w-3/4 flex flex-col items-start gap-12 md:gap-16">
            <FadeIn delay={0.2}>
              <h2 className="font-sans text-[clamp(3.5rem,7vw,7.5rem)] leading-[0.95] tracking-tight font-bold text-[#111]">
                Ready to brew <br/> something <span className="italic text-[#cca027] font-serif font-light">great?</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.4}>
              <Link to="/contact" className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-[#111] hover:text-[#cca027] transition-colors">
                <div className="w-16 h-16 rounded-full border border-[#111]/20 flex items-center justify-center group-hover:bg-[#cca027] group-hover:border-[#cca027] group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                Start a Project
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
      
    </div>
  );
}
