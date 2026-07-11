import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "../assets/about_1.png";
import img2 from "../assets/about_2.png";
import img3 from "../assets/about_3.png";

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 1, delay, ease: [0.215, 0.61, 0.355, 1] }}
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

  return (
    <div ref={containerRef} className="w-full bg-transparent relative overflow-clip font-sans text-[#111] selection:bg-[#cca027] selection:text-white">
      
      {/* Background ambient light */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#cca027]/10 blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-black/5 blur-[150px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 px-6 md:px-16 overflow-hidden">
        <motion.div style={{ y: y1, opacity }} className="relative z-10 flex flex-col items-center text-center gap-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-16 h-[1px] bg-[#cca027] mb-4"
          />
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#cca027] uppercase tracking-[0.3em] text-xs md:text-sm font-bold"
          >
            The Espresso Standard
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-[clamp(3rem,8vw,8rem)] leading-[0.9] font-serif font-bold tracking-tighter text-[#111]"
          >
            We don't do <span className="text-black/30 italic">average.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-[#666] text-lg md:text-2xl max-w-2xl mt-8 leading-relaxed font-light"
          >
            Redefining how brands connect, scale, and thrive in a digital-first world through relentless innovation and precise execution.
          </motion.p>
        </motion.div>

        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fdfbf7]/80 to-[#fdfbf7]" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src={img1} 
            alt="Hero background" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-32 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                Not just campaigns. <br />
                <span className="text-[#cca027] italic">Growth systems.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="w-12 h-[2px] bg-black/10" />
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-[#666] text-lg md:text-xl leading-relaxed font-light">
                By merging powerful branding, strategic content, and precise automation, we help ambitious businesses unlock their full revenue potential. We strip away the noise and focus on what actually matters: your bottom line.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="grid grid-cols-2 gap-8 mt-8 border-t border-black/10 pt-8">
                <div>
                  <div className="text-4xl font-serif font-bold text-[#111] mb-2">40+</div>
                  <div className="text-xs uppercase tracking-widest text-[#cca027]">Brands Scaled</div>
                </div>
                <div>
                  <div className="text-4xl font-serif font-bold text-[#111] mb-2">5x</div>
                  <div className="text-xs uppercase tracking-widest text-[#cca027]">Average ROI</div>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <div className="w-full lg:w-1/2">
            <motion.div 
              className="relative aspect-[4/5] rounded-[2rem] overflow-hidden group shadow-2xl"
            >
              <img src={img2} alt="Our team in action" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out scale-105 group-hover:scale-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-32 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 flex flex-col gap-8 z-10">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                Design that <span className="text-black/30">moves</span> <br />
                <span className="italic">inventory.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#666] text-lg md:text-xl leading-relaxed font-light bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-black/5 shadow-xl">
                We believe that aesthetics without performance is just art. Our work lives at the intersection of stunning visual design and ruthless conversion rate optimization. When we build, we build to sell.
              </p>
            </FadeIn>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden group shadow-2xl"
            >
              <img src={img3} alt="Strategy session" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out scale-105 group-hover:scale-100" />
              <div className="absolute inset-0 border border-black/5 rounded-[2rem] pointer-events-none" />
            </motion.div>
            
            {/* Floating element */}
            <FadeIn delay={0.5}>
              <div className="absolute -bottom-10 -right-10 md:-right-20 bg-[#cca027] text-black p-8 rounded-full w-40 h-40 flex items-center justify-center text-center font-bold tracking-widest text-xs uppercase shadow-2xl z-20">
                Built For<br/>The Future
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 flex flex-col items-center justify-center text-center px-6 z-10">
        <FadeIn>
          <h2 className="text-5xl md:text-8xl font-serif font-bold tracking-tighter mb-8">Ready to scale?</h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Link to="/contact" className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black rounded-full overflow-hidden w-fit hover:border-transparent transition-all shadow-lg text-sm uppercase tracking-widest font-bold">
            <div className="absolute inset-0 w-full h-full bg-[#cca027] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1]" />
            <span className="relative group-hover:text-white transition-colors duration-500">
              Start a Project
            </span>
          </Link>
        </FadeIn>
      </section>
      
      {/* Seamless transition to footer */}
      <div className="h-40 bg-transparent w-full" />
    </div>
  );
}


