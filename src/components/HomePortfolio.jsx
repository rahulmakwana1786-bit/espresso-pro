import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import contentStrategyImg from "../assets/portfolio/content_strategy.png";
import brandingImg from "../assets/portfolio/branding.png";
import commercialImg from "../assets/portfolio/commercial.png";
import webDevImg from "../assets/portfolio/web_dev.png";

export default function HomePortfolio() {
  const leftProjects = [
    {
      id: "01",
      title: "Content Strategy & Marketing",
      image: contentStrategyImg,
      aspectRatio: "aspect-square",
      slug: "content-strategy-and-marketing",
    },
    {
      id: "03",
      title: "Commercial Production",
      image: commercialImg,
      aspectRatio: "aspect-square",
      slug: "commercial-production",
    },
  ];

  const rightProjects = [
    {
      id: "02",
      title: "Branding",
      image: brandingImg,
      aspectRatio: "aspect-square",
      slug: "branding-and-creative-solutions",
    },
    {
      id: "04",
      title: "Web development",
      image: webDevImg,
      aspectRatio: "aspect-square",
      slug: "web-development",
    },
  ];

const PortfolioCard = ({ project }) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth spring physics for the cursor following
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
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`w-full flex flex-col group`}
    >
      <Link to={`/work/${project.slug}`} className="block w-full">
        <div
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
          className={`relative w-full ${project.aspectRatio} rounded-none overflow-hidden bg-transparent transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(184,115,78,0.15)] cursor-none`}
        >
          {/* Corner blending removed to keep the image clean */}

          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#B8734E]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />

          {/* Middle Text Strip (Hover) - Size Reduced */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-white text-black text-center py-0.5 md:py-1 font-semibold text-[10px] md:text-xs tracking-widest uppercase transform scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-500 origin-center z-30 pointer-events-none">
            {project.title}
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
        </div>
      </Link>

      <div className="flex justify-between items-center mt-5 px-2 text-[#C08860] tracking-widest text-sm sm:text-base">
        <span className="font-semibold text-[#291b03] group-hover:text-[#D4A574] transition-colors duration-300">
          {project.title}
        </span>
        <span className="font-light text-[#291b03]">
          ({project.id})
        </span>
      </div>
    </motion.div>
  );
};

  return (
    <section className="w-full bg-transparent text-[#291b03] py-24 px-4 md:px-8 lg:px-12 xl:px-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#B8734E]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#8a563a]/5 rounded-full blur-[120px] pointer-events-none z-0" />



      {/* ================= HEADING ================= */}
      <div className="relative z-10 max-w-[1400px] mx-auto mb-24 max-sm:mb-16">
        


        {/* Marquee Container */}
        <div className="w-full overflow-hidden flex whitespace-nowrap relative pb-10 border-b border-[#291b03]/20">
          <motion.div
            className="flex items-center gap-12 shrink-0 pr-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            {[...Array(4)].map((_, i) => (
              <h2
                key={i}
                className="font-sans text-[clamp(4rem,12vw,10rem)] leading-none font-bold tracking-tighter text-[#cca027]"
              >
                Works Featured
              </h2>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ================= PORTFOLIO GRID ================= */}
      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col md:flex-row items-start justify-between w-full gap-16 md:gap-8">
        
        {/* Left Column */}
        <div className="w-full md:w-[48%] flex flex-col gap-12 md:gap-16 lg:gap-20">
          {leftProjects.map((project, index) => (
            <PortfolioCard key={index} project={project} />
          ))}
        </div>

        {/* Right Column (Staggered) */}
        <div className="w-full md:w-[48%] flex flex-col gap-12 md:gap-16 lg:gap-20 md:mt-[15%]">
          {rightProjects.map((project, index) => (
            <PortfolioCard key={index} project={project} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
