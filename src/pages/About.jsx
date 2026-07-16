import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, animate } from "framer-motion";
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

function AnimatedNumber({ value, suffix = "", prefix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (v) => {
          setDisplayValue(Math.floor(v));
        },
      });
      return controls.stop;
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

function ScrollRevealText({ text, className = "text-xl md:text-2xl lg:text-3xl leading-[1.4]", offset = ["start 85%", "start 15%"] }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: offset,
  });

  const words = text.split(" ");

  return (
    <div ref={containerRef} className={`font-sans font-medium text-[#111]/20 flex flex-wrap gap-x-[0.3em] ${className}`}>
      {words.map((word, i) => {
        if (word === "||") {
          return <div key={i} className="w-full h-6 md:h-10" />;
        }
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
    </div>
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
    <div className="w-full font-sans bg-[#fbf8f3] text-[#111] selection:bg-[#cca027] selection:text-white overflow-x-hidden relative">
      
      {/* Global Fixed Noise Overlay for consistent texture */}
      <div className="fixed inset-0 w-full h-full opacity-[0.4] pointer-events-none z-0 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.5%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Decorative Golden Shape (Moved to root wrapper to prevent clipping) */}
      <div className="absolute top-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-[#d9ad4c] rounded-full blur-[100px] pointer-events-none z-0 opacity-80" />

      {/* ================= HERO SECTION ================= */}
      <section className="pt-48 pb-16 md:pt-56 md:pb-24 px-6 md:px-12 lg:px-24 xl:px-32 relative">
        
        <div className="w-full max-w-[1600px] mx-auto flex flex-col items-start relative z-10">
          <motion.h1 
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.2 }
              }
            }}
            initial="hidden"
            animate="visible"
            className="font-serif text-[clamp(4.5rem,9vw,9rem)] leading-[0.9] tracking-tight text-[#111] max-w-5xl flex flex-wrap gap-x-[0.25em]"
          >
            {"Every great brand starts with the right foundation.".split(" ").map((word, i) => (
              <motion.span 
                key={i} 
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 1.2, ease: [0.215, 0.61, 0.355, 1] } 
                  }
                }} 
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      </section>

      {/* ================= THE METAPHOR SECTION ================= */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 xl:px-32 relative">
        <div className="w-full max-w-[1600px] mx-auto flex flex-col md:flex-row items-start gap-12 md:gap-24">
          
          {/* Left Side: Tiny Title */}
          <div className="w-full md:w-1/4 lg:w-1/5 flex-shrink-0 pt-2 md:pt-4">
            <FadeIn>
              <h3 className="font-serif text-2xl md:text-3xl text-[#111]/80">
                About
              </h3>
            </FadeIn>
          </div>
          
          {/* Right Side: Massive Description */}
          <div className="w-full md:w-3/4 lg:w-4/5 flex flex-col items-start gap-12">
            <FadeIn delay={0.2} className="flex flex-col max-w-5xl">
              <ScrollRevealText 
                text="Whether it's crafting the perfect espresso or building a brand, exceptional results come from precision, consistency, and getting every element to work together. || It's not about producing endless content or chasing every trend. It's about bringing strategy, creativity, and execution together into a focused system that delivers results. || Every brand has its own blend, and our role is to find it, refine it, and deliver it with consistency."
                className="font-sans font-light text-[clamp(1.5rem,3vw,3rem)] leading-[1.2] tracking-tight text-[#111]"
                offset={["start 85%", "end 50%"]}
              />
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <Link to="/work" className="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-[#111] hover:text-[#cca027] transition-colors mt-4">
                <div className="w-12 h-12 rounded-full border border-[#111]/20 flex items-center justify-center group-hover:border-[#cca027] transition-colors">
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                View Our Work
              </Link>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* ================= VALUES SECTION ================= */}
      <section className="pt-24 pb-16 px-6 md:px-12 lg:px-24 xl:px-32 relative">
        {/* Subtle separator */}
        <div className="absolute top-0 left-6 right-6 md:left-12 md:right-12 lg:left-24 lg:right-24 xl:left-32 xl:right-32 h-[1px] bg-[#111]/10" />
        
        <div className="w-full max-w-[1600px] mx-auto flex flex-col pt-10">

          
          <div className="flex flex-col">
            {values.map((value, index) => (
              <div key={value.title} className={`flex flex-col md:flex-row items-start relative border-t border-[#111]/10 ${index === 0 ? 'pt-12 pb-24 lg:pt-16 lg:pb-32' : 'py-24 lg:py-32'}`}>
                {/* Left Side: Number and Title */}
                <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0 sticky top-40 mb-8 md:mb-0">
                  {index === 0 && (
                    <FadeIn>
                      <div className="flex items-center gap-3 mb-8 md:mb-12">
                        <div className="w-2 h-2 rounded-full bg-[#cca027]" />
                        <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#111]/50">Core Values</p>
                      </div>
                    </FadeIn>
                  )}
                  <p className="font-sans text-lg font-bold text-[#111]/40 mb-4 leading-none">0{index + 1}</p>
                  <h3 className="font-sans text-4xl md:text-5xl font-medium text-[#111] tracking-tight leading-none">{value.title}</h3>
                </div>
                
                {/* Right Side: Scroll Reveal Text with Vertical Line */}
                <div className="w-full md:w-2/3 lg:w-3/4 md:border-l md:border-[#111]/10 md:pl-12 lg:pl-24 pt-2 md:pt-0">
                  <div className="max-w-3xl">
                    <ScrollRevealText text={value.desc} offset={["start 80%", "start 45%"]} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMPACT SECTION ================= */}
      <section className="pt-16 pb-24 px-6 md:px-12 lg:px-24 xl:px-32 relative">
        <div className="absolute top-0 left-6 right-6 md:left-12 md:right-12 lg:left-24 lg:right-24 xl:left-32 xl:right-32 h-[1px] bg-[#111]/10" />
        
        <div className="w-full max-w-[1600px] mx-auto flex flex-col items-start pt-16">
          {/* Right Content */}
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
              {[
                { value: 5, suffix: "x", label: "ROI Achieved", delay: 0.2 },
                { value: 99, suffix: "K+", label: "Leads Generated", delay: 0.3 },
                { value: 5, suffix: "m+", label: "Ad Impressions", delay: 0.4 },
                { value: 97, suffix: "%", label: "Client Retention", delay: 0.5 },
                { value: 5, suffix: "K+", label: "Assets Crafted", delay: 0.6 }
              ].map((stat) => (
                <FadeIn key={stat.label} delay={stat.delay} className="w-full h-full">
                  <motion.div 
                    whileHover={{ 
                      y: -12, 
                      scale: 1.02,
                      boxShadow: "0 30px 60px -15px rgba(0,0,0,0.1)",
                      borderColor: "rgba(204,160,39,0.4)",
                      backgroundColor: "#ffffff"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="flex flex-col items-center justify-center h-full p-10 py-16 text-center group rounded-[2rem] border border-[#111]/10 bg-transparent cursor-default transition-colors duration-300"
                  >
                    <h3 className="font-sans text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-[0.9] font-bold text-[#111] tracking-tighter mb-4 group-hover:text-[#cca027] transition-colors duration-300">
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                    </h3>
                    <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-[#111]/50 group-hover:text-[#111] transition-colors duration-300 leading-relaxed">{stat.label}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-24 xl:px-32 rounded-t-[3rem] -mt-12 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.03)] border-t border-[#111]/5">
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
