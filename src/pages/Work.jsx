import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import tabImg from "../assets/mobile/tab.png";
import grahpImg from "../assets/mobile/grahp1.png";
import caseImg from "../assets/casestudy/case-study-4-200-leads.png";
import tab2Enhance from "../assets/mobile/tab2-enhance.png";

export default function Work() {
  const navigate = useNavigate();
  const location = useLocation();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const headerEl = document.querySelector("header");
          const headerHeight = headerEl ? headerEl.offsetHeight : 80;
          const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
          window.scrollTo({ top, behavior: "smooth" });
        }, 150);
      }
    }
  }, [location]);

  const works = [
    {
      id: "01",
      title: "Content strategy and marketing",
      image: tabImg,
      slug: "content-strategy-and-marketing",
    },
    {
      id: "02",
      title: "Branding",
      image: grahpImg,
      slug: "branding-and-creative-solutions",
    },
    {
      id: "03",
      title: "Commercial Production",
      image: caseImg,
      slug: "commercial-production",
    },
    {
      id: "04",
      title: "Web development",
      image: tab2Enhance,
      slug: "web-development",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fbf8f3] text-[#291b03] pt-[180px] md:pt-[240px] pb-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 relative overflow-clip">
      
      {/* Decorative background lights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#cca027]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#b08810]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 mb-32 px-4 lg:px-8 min-h-[60vh] lg:min-h-[calc(100vh-320px)] flex flex-col justify-center">
        {/* ================= HERO TEXT SECTION ================= */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full">
          
          {/* Left Side: Huge Text & Scroll Down */}
          <div className="flex relative w-full lg:w-[60%]">
            
            {/* Huge OUR WORK text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex flex-col font-sans font-bold text-[#cca027] leading-[0.9] tracking-tighter text-[18vw] sm:text-[120px] lg:text-[130px] xl:text-[150px] uppercase"
            >
              <span>OUR</span>
              <span className="ml-16 md:ml-24 lg:ml-32">WORK</span>

              {/* Scroll Down Vertical Indicator placed firmly under OUR and left of WORK */}
              <div className="hidden lg:flex flex-col items-center absolute top-[65%] left-4">
                <span className="text-xs font-bold tracking-[0.3em] text-[#291b03] uppercase whitespace-nowrap absolute top-[2rem] left-[-2.5rem] -rotate-90 origin-center font-sans">
                  Scroll Down
                </span>
                <div className="w-[2px] h-20 bg-[#291b03] absolute top-[6rem] left-[-0.5rem]">
                  {/* Arrow head */}
                  <div className="absolute bottom-[-2px] left-[-3px] w-2 h-2 border-b-2 border-r-2 border-[#291b03] transform rotate-45"></div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Description */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[40%] mt-12 lg:mt-0 lg:-translate-y-12 flex lg:justify-end"
          >
            <p className="text-[#291b03] text-xl md:text-2xl font-medium leading-relaxed max-w-md">
              Higher-intensity digital growth systems, custom-made for brands who
              want to scale. We build systems that turn attention into conversion
              and brand value.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ================= CARD FEED SECTION (SCROLL CAROUSEL) ================= */}
      <div ref={containerRef} className="relative w-full" style={{ height: `${works.length * 90}vh` }}>
        <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
          {works.map((item, idx) => (
            <CarouselCard 
              key={item.id}
              item={item}
              idx={idx}
              worksLength={works.length}
              scrollYProgress={scrollYProgress}
              containerRef={containerRef}
              navigate={navigate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Separate component to handle per-card useTransform hooks
function CarouselCard({ item, idx, worksLength, scrollYProgress, containerRef, navigate }) {
  const scrollFloatIndex = useTransform(scrollYProgress, [0, 1], [0, worksLength - 1]);
  const offset = useTransform(scrollFloatIndex, (latest) => idx - latest);
  
  const x = useTransform(offset, (v) => `${v * 105}%`);
  const scale = useTransform(offset, [-1, 0, 1], [0.85, 1, 0.85]);
  const opacity = useTransform(offset, [-2, -1, -0.2, 0, 0.2, 1, 2], [0, 0.4, 0.9, 1, 0.9, 0.4, 0]);
  const zIndex = useTransform(offset, (v) => 30 - Math.round(Math.abs(v) * 10));

  const titleOpacity = useTransform(offset, [-0.5, 0, 0.5], [0, 1, 0]);
  const titleY = useTransform(offset, [-0.5, 0, 0.5], [20, 0, 20]);
  
  const pointerEvents = useTransform(offset, [-1.5, -0.5, 0.5, 1.5], ["none", "auto", "auto", "none"]);

  const handleClick = () => {
    if (Math.abs(offset.get()) < 0.2) {
      // It's the active center card
      if (item.slug === "content-strategy-and-marketing") {
        navigate("/work/content-strategy-and-marketing");
      } else if (item.slug === "branding-and-creative-solutions") {
        navigate("/work/branding-and-creative-solutions");
      } else if (item.slug === "commercial-production") {
        navigate("/work/commercial-production");
      } else if (item.slug === "web-development") {
        navigate("/work/web-development");
      } else {
        navigate(`/service/${item.slug}`);
      }
    } else {
      // It's a side card, smoothly scroll the page so this card becomes centered
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const containerTop = rect.top + window.scrollY;
        const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
        const targetScroll = containerTop + (idx / (worksLength - 1)) * scrollableDistance;
        window.scrollTo({ top: targetScroll, behavior: "smooth" });
      }
    }
  };

  return (
    <motion.div
      style={{ x, scale, opacity, zIndex, pointerEvents }}
      className="absolute w-[85%] sm:w-[60%] lg:w-[45%] flex flex-col items-center cursor-pointer"
      onClick={handleClick}
    >
      {/* Card Container */}
      <div className="relative w-full aspect-[4/3] lg:aspect-[16/10] rounded-[28px] overflow-hidden border border-[#C08860]/10 bg-[#0c0806] flex items-center justify-center transition-shadow duration-500 hover:border-[#cca027]/30 hover:shadow-[0_0_50px_rgba(184,115,78,0.1)] group">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#cca027]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          loading="lazy"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#0c0806]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center backdrop-blur-[2px]">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 px-8 py-3 rounded-full border border-[#e8dac1]/30 bg-[#0c0806]/60 backdrop-blur-md">
            <span className="text-[#e8dac1] font-semibold tracking-widest text-sm uppercase">
              View Project
            </span>
          </div>
        </div>
      </div>

      {/* Title & View Project Button */}
      <motion.div 
        style={{ opacity: titleOpacity, y: titleY }}
        className="flex flex-col items-center mt-8 text-center pointer-events-none"
      >
        <h3 className="font-serif text-3xl md:text-5xl text-[#291b03] uppercase tracking-wide mb-6">
          {item.title}
        </h3>
        <div className="flex items-center gap-4">
          <span className="w-12 h-[1px] bg-[#291b03]/30"></span>
          <span className="font-semibold tracking-widest text-[#291b03] text-sm uppercase">VIEW PROJECT</span>
          <span className="w-12 h-[1px] bg-[#291b03]/30"></span>
        </div>
      </motion.div>
    </motion.div>
  );
}


