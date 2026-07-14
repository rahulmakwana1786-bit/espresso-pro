"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "../data/services";

export default function WhatWeOffer() {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const activeImageIndex = expandedIndex !== null ? expandedIndex : hoveredIndex;

  return (
    <section id="services" className="relative py-32 bg-transparent text-[#111] min-h-screen flex items-center">
      {/* Background Image Transition */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence>
          {activeImageIndex !== null && services[activeImageIndex] && (
            <motion.div
              key={activeImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${services[activeImageIndex].image})` }}
            />
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-[#fbf8f3]/80" />
      </div>

      <div className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32 relative z-10 w-full">
        <h2 className="text-sm tracking-[0.3em] uppercase text-black/50 mb-16">Our Expertise</h2>
        
        <div className="flex flex-col w-full border-t border-black/10">
          {services.map((service, index) => (
            <div
              key={service.slug}
              className="group relative border-b border-black/10 py-10 flex flex-col cursor-pointer hover-target"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              {/* Background fill animation */}
              <div className="absolute inset-0 bg-black/5 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out z-[-1]" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
                <div className="flex items-center">
                  <h3 className={`text-4xl md:text-5xl lg:text-7xl font-light tracking-tight transition-all duration-500 text-[#111] ${expandedIndex === index ? 'pl-4' : 'group-hover:pl-4'}`}>
                    {service.title}
                  </h3>
                </div>
                
                {/* Arrow Button */}
                <div className="mt-4 md:mt-0 flex justify-end md:pr-4">
                  <button className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    <svg 
                      className={`w-6 h-6 transition-transform duration-500 ${expandedIndex === index ? 'rotate-180' : 'rotate-0'}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Accordion Description */}
              <div 
                className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedIndex === index ? "max-h-[500px] opacity-100 mt-8" : "max-h-0 opacity-0 mt-0"
                }`}
              >
                <div className={`max-w-4xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-4 transition-all duration-500 ${expandedIndex === index ? 'pl-4' : 'pl-0'}`}>
                  <p className="text-black/80 text-lg md:text-xl leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/service/${service.slug}`);
                    }}
                    className="inline-block px-8 py-4 rounded-md bg-black text-white text-sm font-bold uppercase tracking-wider hover:bg-[#ad7f00] transition-colors whitespace-nowrap shadow-lg flex-shrink-0"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

