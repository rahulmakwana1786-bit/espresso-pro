import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "../data/services";

export default function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.service-section');
      let currentActive = 0;
      
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        // Calculate the sticky top position in pixels for the container
        // We consider an element active when it reaches the top half of the screen
        const triggerPoint = window.innerHeight * 0.4;
        
        if (rect.top <= triggerPoint) {
          currentActive = index;
        }
      });
      
      setActiveIndex(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-[#fbf8f3] text-[#291b03] min-h-screen pt-32 pb-24 font-sans selection:bg-[#cca027] selection:text-[#fbf8f3] relative overflow-clip">
      
      {/* ================= DECORATIVE TOP WAVES (Reference Colors, Animated) ================= */}
      <div className="absolute top-0 left-0 w-full h-[50vh] lg:h-[60vh] pointer-events-none z-0 [mask-image:linear-gradient(to_bottom,black_30%,transparent_100%)] overflow-hidden">
        
        {/* Scrolling Wave Container (Flows towards right) */}
        <motion.div 
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[200%] h-full opacity-90"
        >
          {/* --- BLOCK 1 --- */}
          {/* Deep Slate Blue (Base Wave) */}
          <motion.div 
            animate={{ 
              y: ["-15%", "35%", "-15%"],
              rotate: [0, 8, 0],
              borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 50% 60% 50% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-[-10%] w-[60%] h-[80%] bg-[#0f1a26] blur-[120px] opacity-100" 
          />
          
          {/* Warm Gold (Middle Wave) */}
          <motion.div 
            animate={{ 
              y: ["40%", "-15%", "40%"],
              rotate: [-5, 10, -5],
              borderRadius: ["60% 40% 30% 70% / 50% 60% 50% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 50% 60% 50% 40%"]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[15%] w-[50%] h-[70%] bg-[#a67c33] blur-[120px] opacity-95" 
          />

          {/* Soft Teal (Top Wave) */}
          <motion.div 
            animate={{ 
              y: ["-25%", "30%", "-25%"],
              rotate: [5, -8, 5],
              borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-25%] left-[35%] w-[45%] h-[80%] bg-[#2c465e] blur-[100px] opacity-90" 
          />
          
          {/* --- BLOCK 2 (Seamless loop copy, shifted by +50% left) --- */}
          {/* Deep Slate Blue (Base Wave) */}
          <motion.div 
            animate={{ 
              y: ["-15%", "35%", "-15%"],
              rotate: [0, 8, 0],
              borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 50% 60% 50% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-[40%] w-[60%] h-[80%] bg-[#0f1a26] blur-[120px] opacity-100" 
          />
          
          {/* Warm Gold (Middle Wave) */}
          <motion.div 
            animate={{ 
              y: ["40%", "-15%", "40%"],
              rotate: [-5, 10, -5],
              borderRadius: ["60% 40% 30% 70% / 50% 60% 50% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 50% 60% 50% 40%"]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[65%] w-[50%] h-[70%] bg-[#a67c33] blur-[120px] opacity-95" 
          />

          {/* Soft Teal (Top Wave) */}
          <motion.div 
            animate={{ 
              y: ["-25%", "30%", "-25%"],
              rotate: [5, -8, 5],
              borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-25%] left-[85%] w-[45%] h-[80%] bg-[#2c465e] blur-[100px] opacity-90" 
          />
        </motion.div>

        {/* Heavy Noise Overlay for that specific rough, premium texture */}
        <div className="absolute inset-0 opacity-[0.6] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.2%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 pt-10 pb-20 border-b border-[#291b03]/10 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-[4rem] md:text-[6rem] lg:text-[8rem] leading-[1.05] tracking-tight mb-20 max-w-4xl text-[#111]"
        >
          All the ways we <br /> <span className="italic font-light text-[#cca027]">move brands</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col md:flex-row items-start md:gap-20 lg:gap-40"
        >
          <h2 className="text-xl md:text-2xl font-serif text-[#291b03]/80 mb-6 md:mb-0 w-[250px] shrink-0">
            What we do
          </h2>
          <p className="text-2xl md:text-4xl lg:text-[2.5rem] leading-[1.2] font-light max-w-3xl">
            Strategy sets the direction, design gives it form and development makes it real.
          </p>
        </motion.div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-start w-full relative">
        
        {/* Left Column (Sticky Sidebar) */}
        <div className="hidden md:flex flex-col w-[35%] lg:w-[30%] h-[100vh] sticky top-0 pt-32 px-6 md:px-12 lg:px-20 border-r border-[#291b03]/10 z-20">
          {/* Category List */}
          <ul className="flex flex-col gap-6 mb-16">
            {services.map((service, idx) => {
              // Extract a short name for the sidebar (e.g. "STRATEGY" instead of "Content Strategy & Marketing")
              const shortName = service.title.split(' ')[0] === "Branding" ? "CREATIVE & DESIGN" : 
                                service.title.split(' ')[0] === "Content" ? "STRATEGY" :
                                service.title.split(' ')[0] === "Commercial" ? "PRODUCTION" :
                                service.title.split(' ')[0] === "Web" ? "DEVELOPMENT" : "AI AUTOMATION";
              
              return (
              <li key={service.slug}>
                <button
                  onClick={() => {
                    const el = document.getElementById(`section-${idx}`);
                    if (el) {
                      const top = el.getBoundingClientRect().top + window.pageYOffset - 100;
                      window.scrollTo({ top, behavior: "smooth" });
                    }
                  }}
                  className={`flex items-center gap-4 text-xs md:text-sm tracking-[0.15em] uppercase font-bold text-left transition-colors duration-300 ${
                    activeIndex === idx ? "text-[#111]" : "text-[#291b03]/30 hover:text-[#291b03]/70"
                  }`}
                >
                  <div className="w-2 h-2 flex-shrink-0 flex items-center justify-center">
                    {activeIndex === idx && (
                      <motion.div layoutId="sidebar-active-dot" className="w-2 h-2 rounded-full bg-[#cca027]" />
                    )}
                  </div>
                  {shortName}
                </button>
              </li>
            )})}
          </ul>

          {/* Active Category Image */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
            <AnimatePresence>
              <motion.img
                key={activeIndex}
                src={services[activeIndex].image}
                alt={services[activeIndex].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05, position: "absolute", top: 0, left: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
          
          <div className="mt-6 flex items-center justify-start">
            <Link to="/work" className="group flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#291b03]/50 hover:text-[#cca027] transition-colors">
              View Work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transform group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Column (Scrolling Content) */}
        <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col">
          {services.map((service, index) => (
            <div 
              key={service.slug}
              id={`section-${index}`}
              className="service-section w-full px-6 md:px-16 lg:px-24 pt-20 md:pt-24 pb-20 md:pb-24 border-b border-[#291b03]/10 last:border-b-0"
            >
              {/* Mobile Only Header */}
              <div className="md:hidden mb-12">
                <p className="text-[#cca027] tracking-[0.2em] uppercase text-xs font-semibold mb-4">
                  {service.title.split(' ')[0]}
                </p>
                <div className="w-full aspect-video rounded-xl overflow-hidden mb-8">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Section Content */}
              <h2 className="font-sans text-[3rem] md:text-[5rem] lg:text-[6rem] leading-[1] font-bold tracking-tight mb-8">
                {service.title}
              </h2>
              
              <p className="text-lg md:text-xl text-[#291b03]/70 font-light max-w-2xl mb-16 leading-relaxed">
                {service.description}
              </p>

              {/* Sub Items List */}
              <div className="flex flex-col">
                {service.subItems?.map((item, i) => (
                  <div key={i} className="group border-t border-[#291b03]/20 py-6 md:py-8 flex flex-col transition-colors hover:bg-black/5 px-4 -mx-4 rounded-xl cursor-default">
                    <div className="flex justify-between items-center w-full">
                      <h3 className="font-mono text-sm md:text-base tracking-[0.1em] uppercase font-bold text-[#111] group-hover:text-[#cca027] transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-[#cca027] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-xl font-light">
                        →
                      </span>
                    </div>
                    {/* Expandable Description */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                      <div className="overflow-hidden">
                        <p className="text-[#291b03]/60 text-sm md:text-base leading-relaxed max-w-3xl pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Final bottom border */}
                <div className="border-t border-[#291b03]/20" />
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-32 md:py-48 text-center flex flex-col items-center justify-center border-t border-[#291b03]/10 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center max-w-5xl"
        >
          <h2 className="font-serif text-[4rem] md:text-[7rem] lg:text-[8rem] text-[#111] leading-[0.9] tracking-tighter mb-16">
            Ready to <span className="italic text-black/30 font-light">move</span> <br /> your brand?
          </h2>
          
          <a href="/contact" className="group relative inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-[#111] text-[#111] font-bold uppercase tracking-widest text-xs md:text-sm rounded-full overflow-hidden transition-colors hover:border-transparent">
            <div className="absolute inset-0 w-full h-full bg-[#111] -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1]" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
              Start a Project
            </span>
          </a>
        </motion.div>
      </section>
    </div>
  );
}
