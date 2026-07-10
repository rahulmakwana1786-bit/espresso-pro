"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import caseImg from "../assets/Notice/leads.png";
import case2 from "../assets/casestudy/case-study-2-walkins.png";
import case3 from "../assets/casestudy/case-study-3-40pct.png";
import case4 from "../assets/casestudy/case-study-4-200-leads.png";

export default function CaseStudies() {
  const caseStudies = [
    {
      image: caseImg,
      description:
        "A fast-growing brand was sitting on deadstock for over 1.5 years, tying up capital and showroom space. Within 2 months of launching a structured growth system, the entire deadstock was cleared—while qualified inquiries and showroom walk-ins increased consistently.",
      outcomes: [
        "100% deadstock cleared",
        "Sustained increase in inquiries & footfall",
      ],
    },
    {
      image: case2,
      description:
        "This was an established brand with strong infrastructure but limited market visibility. Within one month, by restructuring their demand-generation and local visibility strategy, showroom walk-ins doubled, and sales momentum followed shortly after.",
      outcomes: ["2× walk-ins", "Sales traction within weeks"],
    },
    {
      image: case3,
      description:
        "A brand invested heavily in a new showroom—but sales were stagnant due to zero market awareness. Within 30 days, we built and executed a high-reach awareness and conversion campaign.",
      outcomes: [
        "3.8 million people reached",
        "40% sales growth in one month",
        "New showroom visibility established fast",
      ],
    },
    {
      image: case4,
      description:
        "One of our longest-standing clients needed leads and walk-ins during the festive season with just two weeks to launch. We executed a focused, time-bound campaign designed for urgency and local demand.",
      outcomes: [
        "200+ qualified leads in two weeks",
        "Higher festival-time footfall",
        "Strong conversion intent",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});
  const currentCase = caseStudies[currentIndex];

  // Preload only current and next image for smooth transitions
  useEffect(() => {
    const preloadImages = [
      currentIndex,
      (currentIndex + 1) % caseStudies.length,
    ];

    preloadImages.forEach((index) => {
      if (caseStudies[index]?.image && !imageLoaded[index]) {
        const img = new Image();
        img.onload = () => {
          setImageLoaded((prev) => ({ ...prev, [index]: true }));
        };
        img.src = caseStudies[index].image;
      }
    });
  }, [currentIndex]);

  const nextCase = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length,
    );
  };

  return (
    <section className="w-full bg-[#fbf8f3] text-[#291b03] px-24 py-20 max-lg:px-14 max-sm:px-5">
      {/* ================= HEADING ================= */}
      <div className="relative z-10 text-center mb-20 max-sm:mb-12">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B8734E]/10 to-[#8a563a]/10 border border-[#B8734E]/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8734E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8734E]"></span>
            </span>
            <span className="text-[#B8734E] text-sm font-medium tracking-wide">
              Proven Results
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-6xl lg:text-[56px] max-sm:text-[40px] mb-4"
        >
          <span className="relative inline-block">
            <span className="text-[#cca027] italic font-bold animate-[shimmer_3s_ease-in-out_infinite] bg-[length:200%_auto]">
              Case Studies
            </span>
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-light text-xl md:text-2xl lg:text-[28px] text-[#291b03] leading-snug max-w-3xl mx-auto max-sm:text-[20px]"
        >
          Selected business outcomes delivered{" "}
          <br className="hidden md:block" />
          through{" "}
          <span className="text-espresso font-medium">
            structured growth systems
          </span>
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#B8734E] to-transparent relative"
        ></motion.div>
      </div>

      <style>{`
  @keyframes shimmer {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`}</style>

      {/* ================= CASE CARD ================= */}
      <div className="relative max-w-7xl mx-auto px-8 max-sm:px-5">
        <div
          className="relative rounded-[36px]
               border border-[#C08860]/30
               bg-gradient-to-br from-[#140d08] to-[#080504]
               p-8 md:p-14 max-sm:p-6
               min-h-[500px] max-sm:h-[600px]
               overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center h-full"
            >
              {/* ================= IMAGE ================= */}
              <div className="flex flex-col items-center order-2 lg:order-1">
                <button
                  type="button"
                  onClick={nextCase}
                  className="w-full text-left group"
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    {!imageLoaded[currentIndex] && (
                      <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-2xl flex items-center justify-center">
                        <div className="text-[#291b03]">Loading...</div>
                      </div>
                    )}
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentIndex}
                        src={currentCase.image || caseImg}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = caseImg;
                        }}
                        onLoad={() =>
                          setImageLoaded((prev) => ({
                            ...prev,
                            [currentIndex]: true,
                          }))
                        }
                        alt={`Case study ${currentIndex + 1}`}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="rounded-2xl shadow-xl w-full border group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                      />
                    </AnimatePresence>
                  </div>
                </button>
              </div>

              {/* ================= CONTENT ================= */}
              <div className="order-1 lg:order-2 text-left lg:text-left">
                <p className="text-[14px] md:text-[22px] leading-relaxed text-[#291b03] mb-8  md:mb-10">
                  {currentCase.description}
                </p>

                <ul className="space-y-4 text-[#C08860] text-[16px] md:text-[20px]">
                  {currentCase.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[14px] md:text-2xl shrink-0">
                        ✔
                      </span>
                      <span className="text-[14px] md:text-[20px]">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ================= NAVIGATION ARROW (Outside card) ================= */}
        <button
          onClick={nextCase}
          className="absolute right-0 sm:right-3 top-1/2 -translate-y-1/2
               w-10 h-10 rounded-full bg-[#C08860]
               flex items-center justify-center
               text-black text-2xl hover:scale-105 transition-all duration-300
               max-sm:w-10 max-sm:h-10 max-sm:text-xl
               shadow-lg hover:shadow-xl z-10"
          aria-label="Next case study"
        >
          →
        </button>
      </div>
    </section>
  );
}
