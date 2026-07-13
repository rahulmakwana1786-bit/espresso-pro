import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

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
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * (to - from) + from));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCount);
      }
    };
    animationFrame = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function StatCard({ stat, index, progress }) {
  // Center of each box on a scale of 0 to 100.
  const center = index * 25; // 0, 25, 50, 75, 100

  // Calculate intensity (0 to 1) based on distance from center. Active range is +/- 15.
  const intensity = useTransform(progress, (p) => {
    const dist = Math.abs(p - center);
    if (dist > 15) return 0;
    return 1 - (dist / 15);
  });

  // Map intensity to styles
  const scale = useTransform(intensity, [0, 1], [1, 1.05]);
  const y = useTransform(intensity, [0, 1], [0, -8]);
  
  // Interpolating colors
  const borderColor = useTransform(intensity, [0, 1], ["rgba(204,160,39,0.4)", "rgba(249,115,22,0.8)"]);
  const shadow = useTransform(intensity, [0, 1], ["0px 8px 30px rgba(204,160,39,0.15)", "0px 8px 30px rgba(249,115,22,0.4)"]);
  const lineColor = useTransform(intensity, [0, 1], ["rgba(204,160,39,0.4)", "rgba(249,115,22,0.8)"]);

  return (
    <div className="relative w-[46%] sm:w-[220px] md:w-[180px] flex justify-center mt-4 md:mt-0 group">
      {/* Vertical connection line */}
      <motion.div 
        style={{ backgroundColor: lineColor }} 
        className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 w-[1px] h-20 z-0" 
      />

      {/* Actual Card */}
      <motion.div 
        style={{ scale, y, borderColor, boxShadow: shadow }}
        className="relative z-10 w-full flex flex-col items-center justify-center py-6 md:py-8 px-4 md:px-6 rounded-2xl md:rounded-3xl border bg-white cursor-default"
      >
        <div className="text-[28px] md:text-5xl font-serif tracking-tighter mb-2 md:mb-3 text-[#cca027]">
          <Counter from={0} to={stat.value} suffix={stat.suffix} />
        </div>
        
        <p className="text-[9px] md:text-[11px] font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-black/80 text-center leading-relaxed max-w-[100px] md:max-w-none mx-auto">
          {stat.label}
        </p>
      </motion.div>
    </div>
  );
}

export default function Beyond() {
  const progress = useMotionValue(0);

  useEffect(() => {
    const controls = animate(progress, 100, {
      duration: 10, // 10s each way (20s full loop), which is slower than before
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    });
    return controls.stop;
  }, [progress]);

  // Map progress (0-100) to ball's left position
  const ballLeft = useTransform(progress, [0, 100], ["0%", "100%"]);

  return (
    <section className="w-full bg-transparent py-16 md:py-20 relative overflow-hidden font-sans z-20 flex items-center justify-center">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* TRACK & MOVING BALL */}
        <div className="hidden md:block w-full px-8 mb-20">
          <div className="w-full h-[2px] bg-black/15 relative rounded-full">
            <motion.div 
              style={{ left: ballLeft, y: "-50%", x: "-50%" }}
              className="absolute top-1/2 w-6 h-6 rounded-full bg-[#f97316] shadow-[0_0_20px_6px_rgba(249,115,22,0.4)] z-30"
            />
          </div>
        </div>

        {/* STATS CARDS */}
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-6 md:gap-8 w-full">
          {STATS.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} progress={progress} />
          ))}
        </div>

      </div>
    </section>
  );
}


