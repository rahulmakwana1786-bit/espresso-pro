"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "../data/services";

export default function WhatWeOffer() {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="services" className="relative py-32 bg-transparent text-[#111] min-h-screen flex items-center">
      {/* Background Image Transition */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence>
          {hoveredIndex !== null && services[hoveredIndex] && (
            <motion.div
              key={hoveredIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${services[hoveredIndex].image})` }}
            />
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-[#fbf8f3]/70" />
      </div>

      <div className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32 relative z-10 w-full">
        <h2 className="text-sm tracking-[0.3em] uppercase text-black/50 mb-16">Our Expertise</h2>
        
        <div className="flex flex-col w-full border-t border-black/10">
          {services.map((service, index) => (
            <div
              key={service.slug}
              className="group relative border-b border-black/10 py-12 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover-target"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => navigate(`/service/${service.slug}`)}
            >
              {/* Background fill animation */}
              <div className="absolute inset-0 bg-black/5 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out z-[-1]" />
              
              <div className="flex items-center gap-8 md:gap-16">
                <span className="text-2xl md:text-4xl font-serif text-black/20 group-hover:text-black transition-colors duration-500">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight group-hover:pl-4 transition-all duration-500 text-[#111]">
                  {service.title}
                </h3>
              </div>
              
              <div className="mt-4 md:mt-0 max-w-sm w-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                <p className="text-black/70 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

