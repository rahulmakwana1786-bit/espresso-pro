import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import tabImg from "../assets/mobile/tab.png";
import grahpImg from "../assets/mobile/grahp1.png";
import caseImg from "../assets/casestudy/case-study-4-200-leads.png";
import tab2Enhance from "../assets/mobile/tab2-enhance.png";

const WORKS = [
  { id: "01", title: "Content Strategy", category: "Marketing", image: tabImg, slug: "content-strategy-and-marketing", desc: "Data-driven content and strategic positioning designed to turn attention into conversion." },
  { id: "02", title: "Brand Identity", category: "Branding", image: grahpImg, slug: "branding-and-creative-solutions", desc: "Strong branding that makes your business memorable, premium, and positioned for scale." },
  { id: "03", title: "Commercials", category: "Production", image: caseImg, slug: "commercial-production", desc: "High-end commercial video and photography production that captures your brand's essence." },
  { id: "04", title: "Digital Platforms", category: "Development", image: tab2Enhance, slug: "web-development", desc: "Custom-built, high-performance web experiences designed to convert visitors into customers." },
];

const ProjectCard = ({ work }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="w-full py-16 md:py-24 relative group border-t border-black/10"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        
        {/* TOP ROW: Huge Title & Info */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-10 md:mb-16">
          <Link to={`/work/${work.slug}`} className="block overflow-hidden">
            <motion.h2 
              className="text-[12vw] lg:text-[7vw] font-serif leading-[0.85] tracking-tighter uppercase text-[#111] group-hover:text-[#cca027] transition-colors duration-700"
            >
              {work.title}
            </motion.h2>
          </Link>
          
          <div className="flex flex-col gap-6 lg:max-w-md w-full shrink-0">
            <div className="flex items-center gap-4">
              <span className="text-[#cca027] font-serif text-4xl italic">{work.id}</span>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#111]">{work.category}</span>
            </div>
            <p className="text-black/60 text-lg md:text-xl font-medium leading-relaxed">
              {work.desc}
            </p>
            <Link to={`/work/${work.slug}`} className="inline-flex items-center gap-4 group/btn w-fit mt-2">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#111] uppercase group-hover/btn:text-[#cca027] transition-colors duration-300">Explore Project</span>
              <div className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center group-hover/btn:bg-[#cca027] transition-all duration-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform duration-300">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* MASSIVE IMAGE */}
        <Link to={`/work/${work.slug}`} className="block w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden aspect-[4/3] md:aspect-[21/9] bg-[#e0e0e0] relative shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
          <img 
            src={work.image} 
            alt={work.title} 
            className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-[1.5s] ease-[0.25,1,0.5,1]"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white tracking-[0.2em] text-[10px] uppercase font-bold shadow-2xl border border-white/20">
              View Work
            </div>
          </div>
        </Link>
        
      </div>
    </motion.div>
  );
};

export default function Work() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#fbf8f3] text-[#111] z-20 relative font-sans min-h-screen overflow-hidden">
      
      {/* HERO SECTION */}
      <div className="w-full pt-[200px] md:pt-[250px] pb-24 px-6 md:px-12 max-w-[1400px] mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-4 mb-6"
        >
          <span className="w-12 h-[2px] bg-[#cca027]"></span>
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#cca027]">Our Portfolio</span>
          <span className="w-12 h-[2px] bg-[#cca027]"></span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[14vw] md:text-[9vw] lg:text-[10rem] font-serif tracking-tighter leading-[0.85] uppercase mb-8"
        >
          Selected <br className="md:hidden" /><span className="italic text-[#cca027]">Works.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-[#666] max-w-3xl font-medium leading-relaxed"
        >
          High-intensity digital growth systems, custom-made for brands who want to scale.
        </motion.p>
      </div>

      {/* EDITORIAL LISTING CARDS */}
      <div className="pb-32 w-full">
        {WORKS.map((work) => (
          <ProjectCard key={work.id} work={work} />
        ))}
      </div>
      
    </div>
  );
}
