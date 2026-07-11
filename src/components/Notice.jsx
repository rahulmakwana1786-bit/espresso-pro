import { motion } from "framer-motion";

import leftImg from "../assets/Notice/visibility.png";
import centerImg from "../assets/Notice/leads.png";
import rightImg from "../assets/Notice/engagement.png";
import { useState } from "react";

export default function GetNoticed() {
  return (
    <section className="w-full bg-[#fbf8f3] text-[#291b03] py-20 max-sm:py-16 overflow-hidden relative">

      {/* ================= HEADING ================= */}
      <div className="relative z-10 mb-16 max-sm:mb-12">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#cca027]/10 to-[#b08810]/10 border border-[#cca027]/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#cca027] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#cca027]"></span>
            </span>
            <span className="text-[#cca027] text-sm font-medium tracking-wide">Real Results</span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center font-serif text-5xl md:text-6xl lg:text-6xl text-[#291b03] mb-4"
        >
          We Help You Get{" "}
          <span className="relative inline-block">
            <span className="pr-2 bg-gradient-to-r from-[#b08810] via-espresso to-[#b08810] bg-clip-text text-transparent italic font-bold animate-[shimmer_3s_ease-in-out_infinite] bg-[length:200%_auto]">
              Noticed
            </span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#cca027] to-transparent rounded-full blur-sm"></span>
          </span>
        </motion.h2>

        
      </div>

      {/* ================= CARDS - HORIZONTALLY ALIGNED ================= */}
      <motion.div
        className="mx-auto max-w-[1500px] flex items-center justify-center gap-6 max-lg:flex-col max-lg:items-center px-4 md:px-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <AnimatedCard>
          <Card
            title="We'll help you get Visible"
            image={leftImg}
            size="side"
          />
        </AnimatedCard>

        <AnimatedCard delayBoost>
          <Card
            title="We'll help you Get Qualified Leads"
            image={centerImg}
            size="center"
            isLandscape={true}
          />
        </AnimatedCard>

        <AnimatedCard>
          <Card
            title="We'll help you Drive Engagement"
            image={rightImg}
            size="side"
          />
        </AnimatedCard>
      </motion.div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.05); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, 20px) scale(1.05); }
        }

        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

/* ================= ANIMATION WRAPPER ================= */

function AnimatedCard({ children, delayBoost = false }) {
  return (
    <motion.div
      className="w-full flex justify-center"
      variants={{
        hidden: { opacity: 0, y: 60, scale: 0.9 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: delayBoost ? 0.15 : 0,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ================= CARD ================= */

function Card({ title, image, size, isLandscape = false }) {
  const isCenter = size === "center";
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={`
        group relative rounded-3xl overflow-hidden
        bg-gradient-to-b from-[#b08810]/40 to-espressoDark
        backdrop-blur-sm
        shadow-[0_20px_80px_rgba(192,136,96,0.15)]
        hover:shadow-[0_30px_100px_rgba(192,136,96,0.25)]
        transition-all duration-500
        hover:scale-[1.02]
        hover:border-[#cca027]/40

        ${
          isCenter
            ? `
              w-[520px] max-xl:w-[480px] max-lg:w-[500px] max-md:w-[420px] max-sm:w-full max-sm:max-w-[400px]
            `
            : `
              w-[400px] max-xl:w-[360px] max-lg:w-[500px] max-md:w-[380px] max-sm:w-full max-sm:max-w-[400px]
            `
        }
      `}
    >
      <div className="relative z-10 p-6 max-sm:p-5">
        {/* Header with Title */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <p className="text-[#E6D3C3] text-base max-sm:text-sm font-medium mb-2 leading-tight">
              {title}
            </p>
          </div>
        </div>

        {/* IMAGE - THE MAIN FOCUS */}
        <div
          className={`
            relative rounded-2xl overflow-hidden
            group-hover:border-[#cca027]/30
            transition-all duration-500 p-0 m-0
            shadow-inner
            ${
              isCenter
                ? isLandscape 
                  ? "h-[400px] max-lg:h-[380px] max-md:h-[320px] max-sm:h-[200px]" 
                  : "h-[400px] max-lg:h-[380px] max-md:h-[320px] max-sm:h-[420px]"
                : "h-[360px] max-lg:h-[340px] max-md:h-[280px] max-sm:h-[380px]"
            }
          `}
        >
          {/* Loading skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-[#b08810]/20 via-[#b08810]/10 to-[#b08810]/20 animate-pulse" />
          )}

          {/* Image glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#cca027]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img
              src={image}
              alt={title}
              onLoad={() => setImageLoaded(true)}
              className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

