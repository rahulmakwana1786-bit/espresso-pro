import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 5, suffix: "x", label: "ROI Achieved" },
  { value: 99, suffix: "K+", label: "Leads Generated" },
  { value: 5, suffix: "m+", label: "Ad Impressions" },
  { value: 97, suffix: "%", label: "Client Retention" },
  { value: 5, suffix: "K+", label: "Assets Crafted" },
];

function Counter({ from, to, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime;
    let animationFrame;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * (to - from) + from));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Beyond() {
  return (
    <section className="w-full bg-white py-24 relative overflow-hidden font-sans z-20 flex items-center justify-center min-h-[400px]">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* TRACK & MOVING BALL */}
        <div className="hidden md:block w-full px-8 mb-20">
          <div className="w-full h-[2px] bg-black/15 relative rounded-full">
            <motion.div 
              animate={{ left: ["0%", "100%", "0%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              style={{ y: "-50%", x: "-50%" }}
              className="absolute top-1/2 w-6 h-6 rounded-full bg-[#f97316] shadow-[0_0_20px_6px_rgba(249,115,22,0.4)] z-30"
            />
          </div>
        </div>

        {/* STATS CARDS */}
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-6 md:gap-8 w-full">
          {STATS.map((stat, i) => (
            <div key={i} className="relative w-[140px] md:w-[180px] flex justify-center group mt-10 md:mt-0">
              
              {/* Vertical connection line (desktop only) */}
              <div className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 w-[1px] h-20 bg-black/15 group-hover:bg-[#f97316]/40 transition-colors duration-500 z-0"></div>

              {/* Actual Card */}
              <div className="relative z-10 w-full flex flex-col items-center justify-center py-8 px-6 rounded-3xl border border-black/15 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group-hover:border-[#f97316]/50 group-hover:shadow-[0_8px_30px_rgba(249,115,22,0.15)] group-hover:-translate-y-2 cursor-default">
                <div className="text-3xl md:text-5xl font-serif text-[#cca027] tracking-tighter mb-3 group-hover:text-[#f97316] transition-colors duration-300">
                  <Counter from={0} to={stat.value} suffix={stat.suffix} />
                </div>
                
                <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 text-center leading-relaxed group-hover:text-black/80 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
