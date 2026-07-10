import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import tabImg from "../assets/mobile/tab.png";
import grahpImg from "../assets/mobile/grahp1.png";
import caseImg from "../assets/casestudy/case-study-4-200-leads.png";
import tab2Enhance from "../assets/mobile/tab2-enhance.png";

const WORKS = [
  { id: "01", title: "Content Strategy & Marketing", category: "Marketing", image: tabImg, slug: "content-strategy-and-marketing", desc: "Data-driven content and strategic positioning designed to turn attention into conversion." },
  { id: "02", title: "Branding & Creative Solutions", category: "Branding", image: grahpImg, slug: "branding-and-creative-solutions", desc: "Strong branding that makes your business memorable, premium, and positioned for scale." },
  { id: "03", title: "Commercial Production", category: "Production", image: caseImg, slug: "commercial-production", desc: "High-end commercial video and photography production that captures your brand's essence." },
  { id: "04", title: "Web Development", category: "Development", image: tab2Enhance, slug: "web-development", desc: "Custom-built, high-performance web experiences designed to convert visitors into customers." },
];

const ProjectCard = ({ work, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="w-full flex items-center justify-center py-20 md:py-32 relative group"
    >
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative flex flex-col md:block">
        
        {/* IMAGE CONTAINER */}
        <div className={`w-full md:w-[75%] lg:w-[70%] aspect-[4/3] md:aspect-[16/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative bg-white ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
          <Link to={`/work/${work.slug}`}>
            <img 
              src={work.image} 
              alt={work.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
          </Link>
        </div>

        {/* OVERLAPPING TEXT CARD */}
        <div className={`w-[90%] md:w-[450px] lg:w-[500px] bg-white/95 backdrop-blur-xl p-8 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-black/5 mx-auto md:mx-0 -mt-16 md:mt-0 relative md:absolute md:top-1/2 md:-translate-y-1/2 z-10 ${isEven ? 'md:right-0 lg:right-12' : 'md:left-0 lg:left-12'}`}>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#cca027] font-serif text-2xl italic">{work.id}</span>
            <span className="w-8 h-[1px] bg-black/20"></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-black/50">{work.category}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#111] mb-6 leading-[1.1] group-hover:text-[#cca027] transition-colors duration-500">
            <Link to={`/work/${work.slug}`}>{work.title}</Link>
          </h2>
          
          <p className="text-black/60 text-base md:text-lg mb-10 leading-relaxed">
            {work.desc}
          </p>
          
          <Link to={`/work/${work.slug}`} className="inline-flex items-center gap-4 group/btn w-fit">
            <span className="text-sm font-bold tracking-[0.2em] text-[#111] uppercase group-hover/btn:text-[#cca027] transition-colors duration-300">View Project</span>
            <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover/btn:bg-[#111] group-hover/btn:border-[#111] transition-all duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#111] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-300">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </Link>
        </div>

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
      <div className="w-full pt-[250px] md:pt-[300px] pb-24 px-6 md:px-12 max-w-[1400px] mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-4 mb-8 bg-white px-8 py-3 rounded-full shadow-sm border border-black/5"
        >
          <span className="w-2 h-2 rounded-full bg-[#cca027]"></span>
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#111]">Our Portfolio</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-[8rem] font-serif tracking-tighter leading-[1.05] mb-8"
        >
          Selected <span className="italic text-black/40">Works.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-black/60 max-w-2xl font-medium leading-relaxed"
        >
          High-intensity digital growth systems, custom-made for brands who want to scale.
        </motion.p>
      </div>

      {/* EDITORIAL OVERLAP CARDS */}
      <div className="pb-32 w-full">
        {WORKS.map((work, index) => (
          <ProjectCard key={work.id} work={work} index={index} />
        ))}
      </div>
      
    </div>
  );
}
