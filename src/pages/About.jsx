import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
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

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

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
    <div ref={containerRef} className="w-full bg-[#fbf8f3] relative overflow-clip font-sans text-[#291b03] selection:bg-[#cca027] selection:text-white">
      
      {/* Background ambient light */}
      <div className="absolute top-0 left-[-10%] w-[50%] h-[50vh] rounded-full bg-[#cca027]/5 blur-[150px] pointer-events-none" />

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 md:px-16 max-w-[1600px] mx-auto z-10">
        <motion.div style={{ y: y1, opacity }} className="flex flex-col gap-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-[1px] bg-[#cca027]" />
            <h4 className="text-[#cca027] uppercase tracking-[0.3em] text-xs md:text-sm font-bold">
              Our Philosophy
            </h4>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[clamp(3.5rem,8vw,7rem)] leading-[1.05] font-serif font-bold tracking-tight text-[#111]"
          >
            Every great brand starts with the right <span className="italic text-[#cca027] font-light">foundation.</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-10 mt-12 md:mt-20 items-start"
          >
            <p className="text-xl md:text-2xl lg:text-3xl max-w-3xl leading-relaxed font-light text-[#291b03]/80">
              Whether it's crafting the perfect espresso or building a brand, exceptional results come from precision, consistency, and getting every element to work together.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= THE METAPHOR SECTION ================= */}
      <section className="relative py-24 md:py-40">
        <div className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <motion.img 
            src={img1} 
            alt="Espresso making" 
            className="w-full h-full object-cover grayscale"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          
          <div className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center">
            <FadeIn className="max-w-4xl">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light leading-tight text-white">
                "Just like a great espresso, effective marketing isn't about more — it's about getting the right elements in <span className="italic font-bold text-[#cca027]">perfect balance.</span>"
              </h2>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ================= THE STANDARD SECTION ================= */}
      <section className="relative py-32 px-6 md:px-16 max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 flex flex-col gap-10">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-[#111]">
                A single shot is carefully crafted to deliver <span className="italic text-[#cca027] font-light">maximum impact.</span>
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2} className="flex flex-col gap-6 text-[#291b03]/70 text-lg md:text-xl leading-relaxed font-light">
              <p>
                Through precision, consistency, and quality. That's the standard we hold ourselves to. We believe great marketing follows the same principle.
              </p>
              <p>
                It's not about producing endless content or chasing every trend. It's about bringing strategy, creativity, and execution together into a focused system that delivers results.
              </p>
              <p className="font-bold text-[#111]">
                Every brand has its own blend, and our role is to find it, refine it, and deliver it with consistency.
              </p>
            </FadeIn>
          </div>
          
          <div className="w-full lg:w-1/2">
            <FadeIn delay={0.4}>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-[#cca027]/10 z-10 group-hover:bg-transparent transition-colors duration-700" />
                <img src={img2} alt="Our process" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ================= VALUES SECTION ================= */}
      <section className="relative py-32 px-6 md:px-16 bg-[#111] text-white">
        <div className="max-w-[1600px] mx-auto">
          <FadeIn>
            <div className="flex items-center gap-6 mb-16">
              <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">
                Our Values
              </h2>
              <div className="flex-1 h-[1px] bg-white/20" />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={0.2 + (index * 0.1)}>
                <div className="flex flex-col group h-full">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-8 text-sm font-bold tracking-widest text-[#cca027] group-hover:bg-[#cca027] group-hover:text-black transition-colors duration-500">
                    0{index + 1}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 group-hover:text-[#cca027] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <div className="w-full h-[1px] bg-white/20 mb-6 group-hover:bg-[#cca027] transition-colors duration-500" />
                  <p className="text-white/60 text-lg leading-relaxed font-light">
                    {value.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative py-40 flex flex-col items-center justify-center text-center px-6 z-10 bg-[#fbf8f3]">
        <FadeIn>
          <h2 className="text-[3rem] md:text-[5rem] lg:text-[7rem] font-serif font-bold tracking-tighter mb-12 text-[#111] leading-[1]">
            Ready to <span className="italic text-[#cca027] font-light">brew</span> <br/> something great?
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Link to="/contact" className="group relative inline-flex items-center justify-center px-12 py-6 bg-[#111] text-white rounded-full overflow-hidden w-fit transition-transform hover:scale-105 shadow-2xl text-sm uppercase tracking-widest font-bold">
            <span className="relative z-10 group-hover:text-[#cca027] transition-colors duration-500">
              Start a Project
            </span>
          </Link>
        </FadeIn>
      </section>
      
    </div>
  );
}
