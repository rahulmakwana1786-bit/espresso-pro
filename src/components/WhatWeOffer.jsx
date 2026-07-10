"use client";

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { services } from "../data/services";

const ServiceRow = ({ item, index }) => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.5 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.5 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative border-t border-[#291b03]/20 py-10 md:py-12 lg:py-16 flex flex-col md:flex-row gap-6 md:gap-8 transition-colors hover:border-[#291b03]/40 cursor-none"
      onClick={() => navigate(`/service/${item.slug}`)}
    >
      {/* Number */}
      <div className="text-sm md:text-base font-bold text-[#291b03] w-12 shrink-0 group-hover:text-[#291b03] transition-colors">
        {(index + 1).toString().padStart(2, "0")}
      </div>
      
      {/* Title */}
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight w-full md:w-[40%] lg:w-[45%] text-[#cca027] group-hover:text-[#C08860] transition-colors pr-4">
        {item.title}
      </div>

      {/* Description */}
      <div className="text-[#291b03] text-sm md:text-base leading-relaxed w-full md:w-[60%] lg:w-[50%] group-hover:text-[#291b03] transition-colors">
        {item.description}
      </div>

      {/* VIEW Button (Follows Mouse) */}
      <motion.div 
        className="absolute bg-white text-black px-6 py-2 rounded-full font-bold text-sm tracking-widest pointer-events-none z-50 flex items-center justify-center whitespace-nowrap shadow-lg"
        style={{
          left: mouseX,
          top: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.5,
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale: { duration: 0.2 }
        }}
      >
        VIEW
      </motion.div>
    </motion.div>
  );
};

export default function WhatWeOffer() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-transparent text-[#291b03] py-24 px-6 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden">
      {/* ================= HEADING ================= */}
      <div className="relative z-10 max-w-7xl mx-auto mb-16 md:mb-24 border-y border-[#291b03]/20 py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-start"
        >
          <h2 className="font-sans font-bold text-[clamp(4rem,15vw,12rem)] leading-none tracking-tighter text-[#cca027]">
            Services
          </h2>
        </motion.div>
      </div>

      {/* ================= TAGS BAR REMOVED ================= */}

      {/* ================= SERVICES LIST ================= */}
      <div className="relative z-10 max-w-7xl mx-auto flex justify-end">
        <div className="w-full lg:w-[65%] flex flex-col">
          {services.map((item, index) => (
            <ServiceRow key={item.slug} item={item} index={index} />
          ))}
          {/* Bottom border for the last item */}
          <div className="border-t border-[#291b03]/20 w-full"></div>
        </div>
      </div>
    </section>
  );
}