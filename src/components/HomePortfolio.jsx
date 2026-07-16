import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import contentStrategyImg from "../assets/portfolio/content_strategy.png";
import brandingImg from "../assets/portfolio/branding.png";
import commercialImg from "../assets/portfolio/commercial.png";
import webDevImg from "../assets/portfolio/web_dev.png";

export default function HomePortfolio() {
  const projects = [
    {
      id: "01",
      title: "Content Strategy & Marketing",
      image: contentStrategyImg,
      slug: "content-strategy-and-marketing",
    },
    {
      id: "02",
      title: "Branding",
      image: brandingImg,
      slug: "branding-and-creative-solutions",
    },
    {
      id: "03",
      title: "Commercial Production",
      image: commercialImg,
      slug: "commercial-production",
    },
    {
      id: "04",
      title: "Web development",
      image: webDevImg,
      slug: "web-development",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.portfolio-item');
      let currentActive = 0;
      
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        // Trigger when the card reaches 60% of the viewport height from the top
        const triggerPoint = window.innerHeight * 0.6;
        
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
    <section className="w-full bg-[#fbf8f3] text-[#291b03] py-24 relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#cca027]/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#b08810]/10 rounded-full blur-[120px] pointer-events-none z-0" />
      {/* ================= HEADING ================= */}
      <div className="relative z-10 w-full mb-24 flex justify-center">
        <div className="max-w-[1600px] w-full mx-auto px-4 md:px-8 overflow-hidden">
          <div className="w-full flex whitespace-nowrap relative pt-10 pb-10 border-t border-b border-[#291b03]/20">
            <motion.div
              className="flex items-center gap-32 shrink-0 pr-32"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            >
              {[...Array(4)].map((_, i) => (
                <h2
                  key={i}
                  className="font-sans text-[clamp(4rem,12vw,10rem)] leading-none font-bold tracking-tighter text-[#cca027]"
                >
                  Featured Work
                </h2>
              ))}
            </motion.div>
          </div>
        </div>
      </div>



      {/* ================= STICKY PORTFOLIO GRID ================= */}
      <div className="relative z-10 max-w-[1600px] mx-auto flex flex-col md:flex-row items-start w-full px-4 md:px-8 lg:px-12 xl:px-16">
        
        {/* Left Column (Sticky Text) */}
        <div className="hidden md:flex w-[40%] h-[80vh] sticky top-[10vh] flex-col justify-center pr-12 lg:pr-20 z-20">
          <div>
            <p className="text-[#cca027] tracking-[0.2em] uppercase text-sm mb-8 font-semibold">Featured Work</p>
            <div className="min-h-[250px] lg:min-h-[300px] relative w-full">
              <AnimatePresence>
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, position: "absolute", top: 0, left: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex flex-col gap-6 w-full"
                >
                  <h3 className="font-serif text-[3.5rem] lg:text-[4.5rem] xl:text-[5.5rem] leading-[1.05] text-[#111]">
                    {projects[activeIndex].title}
                  </h3>
                  
                  <div className="flex items-center gap-6 mt-6">
                    <div className="h-[1px] w-16 bg-black/20" />
                    <Link 
                      to={`/work/${projects[activeIndex].slug}`}
                      className="text-sm font-bold uppercase tracking-wider hover:text-[#cca027] transition-colors"
                    >
                      View Case Study
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right Column (Stacked Scrolling Images) */}
        <div className="w-full md:w-[60%] flex flex-col pb-32">
          {projects.map((project, index) => (
            <div 
              key={index} 
              data-index={index} 
              className="portfolio-item w-full flex flex-col sticky"
              style={{ top: `calc(10vh + ${index * 30}px)`, zIndex: index }}
            >
              <div className="bg-[#fbf8f3] pt-8 md:pt-0"> {/* Background wrapper to cover previous cards seamlessly */}
                {/* Mobile Title (Hidden on Desktop) */}
                <div className="md:hidden mb-6 flex flex-col gap-3">
                   <p className="text-[#cca027] tracking-[0.2em] uppercase text-xs font-semibold">Featured Work {project.id}</p>
                   <h3 className="font-serif text-4xl leading-tight text-[#111]">{project.title}</h3>
                </div>

                <Link to={`/work/${project.slug}`} className={`block w-full group overflow-hidden relative rounded-2xl bg-[#111] shadow-[0_-10px_40px_rgba(0,0,0,0.15)] ${index === projects.length - 1 ? 'mb-0' : 'md:mb-[40vh]'}`}>
                  <div className="w-full aspect-[4/5] md:aspect-square xl:aspect-[5/4] relative overflow-hidden">
                     <img
                       src={project.image}
                       alt={project.title}
                       className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                       loading="lazy"
                     />
                     {/* Hover Overlay */}
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
                     
                     {/* View Button on hover */}
                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                       <span className="bg-white text-black px-8 py-4 rounded-full font-bold text-sm tracking-widest pointer-events-none transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                         VIEW PROJECT
                       </span>
                     </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}


