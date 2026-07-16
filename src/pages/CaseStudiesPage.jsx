import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

// Import portfolio images for Content Strategy clients
import gcTilesChennaiImg from "../assets/portfolio/gc_tiles_chennai.png";
import shreejiTilesImg from "../assets/portfolio/shreeji_tiles.png";
import gcTilesHyderabadImg from "../assets/portfolio/gc_tiles_hyderabad_detail.png";
import tileBazaarImg from "../assets/portfolio/tile_bazaar_detail.png";
import vinayakToyotaImg from "../assets/portfolio/vinayak_toyota.png";
import tileLabImg from "../assets/portfolio/tile_lab.png";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudiesPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("gothic-only-page");

    let ctx = gsap.context(() => {
      // Header entrance animations
      gsap.from(".header-left-col", {
        opacity: 0,
        x: -40,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".header-right-col", {
        opacity: 0,
        x: 40,
        duration: 1.2,
        ease: "power3.out",
      });

      // Website cards entrance animations
      gsap.utils.toArray(".web-grid-card").forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=10%",
            toggleActions: "play none none none",
          },
        });
      });
    }, containerRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    try {
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    } catch (e) {
      window.scrollTo(0, 0);
    }

    return () => {
      document.body.classList.remove("gothic-only-page");
      clearTimeout(timer);
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const clients = [
    {
      name: "GC TILES CHENNAI",
      url: "https://gcceratiles.com/",
      image: gcTilesChennaiImg,
      tag: "Search Marketing",
      desc: "Content Marketing, Production, Development",
    },
    {
      name: "SHREEJI TILES",
      url: "https://gcceratiles.com/", // part of GC group showroom
      image: shreejiTilesImg,
      tag: "Catalog & Meta Lead Gen",
      desc: "Content, Performance Marketing, AI Automation",
    },
    {
      name: "GC TILES HYDERABAD",
      url: "https://www.gctileshyderabad.com/",
      image: gcTilesHyderabadImg,
      tag: "Local SEO & Authority",
      desc: "Content Marketing, Production, Development, AI Automation",
    },
    {
      name: "TILE BAZAAR",
      url: "https://www.tilebazaar.co.uk/",
      image: tileBazaarImg,
      tag: "Automation & Funnels",
      desc: "E-Commerce Store Development, Google Optimization",
    },
    {
      name: "Vinayak Toyota",
      url: "https://vinayaktoyota.co.in/",
      image: vinayakToyotaImg,
      tag: "Automotive Campaigns",
      desc: "Content Marketing, Production, AI Automation",
    },
    {
      name: "Tile lab",
      url: "https://www.gctileshyderabad.com/", // boutique ceramic project link
      image: tileLabImg,
      tag: "Boutique Storytelling",
      desc: "Production, Performance Marketing",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen bg-[#fbf8f3] text-[#291b03] pt-[160px] md:pt-[220px] pb-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 relative overflow-hidden font-sans selection:bg-[#cca027] selection:text-[#fbf8f3]"
    >
      {/* ================= ELEGANT AURORA GRADIENT ================= */}
      <div className="absolute top-0 left-0 w-full h-[60vh] lg:h-[75vh] pointer-events-none z-0 [mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)] overflow-hidden">
        
        {/* Soft Noise Texture */}
        <div className="absolute inset-0 z-10 opacity-[0.5] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

        {/* Scrolling Wave Container (Flows towards right) */}
        <motion.div 
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[200%] h-full opacity-90"
        >
          {/* --- BLOCK SET 1 (Left Half) --- */}
          {/* Deep Slate/Midnight (Provides Depth) */}
          <motion.div 
            animate={{ 
              y: ["-10%", "25%", "-10%"],
              borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 50% 60% 50% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-[-5%] w-[30%] h-[120%] bg-[#0f172a] blur-[100px] opacity-90" 
          />
          
          {/* Rich Espresso/Dark Brown */}
          <motion.div 
            animate={{ 
              y: ["-15%", "25%", "-15%"],
              borderRadius: ["60% 40% 30% 70% / 50% 60% 50% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 50% 60% 50% 40%"]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[15%] w-[35%] h-[110%] bg-[#291b03] blur-[130px] opacity-80" 
          />

          {/* Golden/Amber Accent */}
          <motion.div 
            animate={{ 
              y: ["20%", "-20%", "20%"],
              borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] left-[5%] w-[25%] h-[90%] bg-[#e6c56a] blur-[150px] opacity-60 mix-blend-screen" 
          />
          
          {/* Subtle Warm Amber Glow for blending */}
          <motion.div 
            animate={{ 
              y: ["-25%", "25%", "-25%"],
              borderRadius: ["50% 50% 30% 70% / 40% 60% 40% 60%", "70% 30% 50% 50% / 60% 40% 60% 40%", "50% 50% 30% 70% / 40% 60% 40% 60%"]
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-30%] left-[20%] w-[25%] h-[100%] bg-[#b45309] blur-[120px] opacity-40 mix-blend-screen" 
          />

          {/* --- BLOCK SET 2 (Right Half) --- */}
          {/* Deep Slate/Midnight (Provides Depth) */}
          <motion.div 
            animate={{ 
              y: ["-10%", "25%", "-10%"],
              borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 50% 60% 50% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-[45%] w-[30%] h-[120%] bg-[#0f172a] blur-[100px] opacity-90" 
          />
          
          {/* Rich Espresso/Dark Brown */}
          <motion.div 
            animate={{ 
              y: ["-15%", "25%", "-15%"],
              borderRadius: ["60% 40% 30% 70% / 50% 60% 50% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 50% 60% 50% 40%"]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[65%] w-[35%] h-[110%] bg-[#291b03] blur-[130px] opacity-80" 
          />

          {/* Golden/Amber Accent */}
          <motion.div 
            animate={{ 
              y: ["20%", "-20%", "20%"],
              borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] left-[55%] w-[25%] h-[90%] bg-[#e6c56a] blur-[150px] opacity-60 mix-blend-screen" 
          />
          
          {/* Subtle Warm Amber Glow for blending */}
          <motion.div 
            animate={{ 
              y: ["-25%", "25%", "-25%"],
              borderRadius: ["50% 50% 30% 70% / 40% 60% 40% 60%", "70% 30% 50% 50% / 60% 40% 60% 40%", "50% 50% 30% 70% / 40% 60% 40% 60%"]
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-30%] left-[70%] w-[25%] h-[100%] bg-[#b45309] blur-[120px] opacity-40 mix-blend-screen" 
          />
        </motion.div>
      </div>

      {/* Main Layout Wrapper */}
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col justify-start">
        
        {/* ================= ELEGANT CENTERED HEADER SECTION ================= */}
        <div className="flex flex-col items-center justify-center w-full mb-32 md:mb-40 text-center">
          <Link
            to="/"
            className="text-[#666] text-xs font-bold tracking-[0.2em] uppercase hover:text-[#cca027] transition-colors flex items-center gap-3 mb-10 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> BACK TO HOME
          </Link>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-[#291b03] leading-[1.05] text-[60px] sm:text-[90px] lg:text-[120px] font-light tracking-tight max-w-5xl mx-auto mb-8"
          >
            Selected <br className="hidden md:block" />
            <span className="italic text-[#cca027] pr-4">Case Studies</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[#291b03] text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto"
          >
            A customized overview of results generated for our premium clients. We design strategic content plans and localized organic funnels that translate interest into bookings, footfalls, and wholesale inquiries.
          </motion.p>
        </div>

        {/* ================= CAMPAIGNS EDITORIAL SECTION ================= */}
        <div id="campaigns-grid" className="w-full flex flex-col gap-32 md:gap-48 mt-12">
          {clients.map((site, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={site.name}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 w-full web-grid-card ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Showcase Column */}
                <div className="w-full lg:w-[55%]">
                  <Link
                    to={`/work/content-strategy-and-marketing/${site.name.toLowerCase().replace(/ /g, "-")}`}
                    className="block relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-[#0c0806] group shadow-xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none z-10" />
                    
                    <img
                      src={site.image}
                      alt={site.name}
                      className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
                      loading="lazy"
                    />
                    
                    {/* Elegant Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 bg-[#291b03]/40 backdrop-blur-sm">
                      <span className="text-[#fbf8f3] text-sm font-bold tracking-widest uppercase border border-[#fbf8f3] px-8 py-4 rounded-full">
                        View Project
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Details Column */}
                <div className="w-full lg:w-[45%] flex flex-col items-start text-left">
                  {/* Category Pill and Number */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-[#cca027] text-sm font-bold tracking-widest">
                      0{index + 1}
                    </span>
                    <span className="text-[#cca027] text-sm">|</span>
                    <span className="text-[#291b03] text-xs font-bold uppercase tracking-widest">
                      {site.tag}
                    </span>
                  </div>

                  {/* Title (Elegant Serif) */}
                  <h3 className="font-serif text-4xl sm:text-5xl lg:text-[65px] font-light text-[#291b03] leading-[1.05] tracking-tight mb-8 hover:text-[#cca027] transition-colors duration-500">
                    <Link
                      to={`/work/content-strategy-and-marketing/${site.name.toLowerCase().replace(/ /g, "-")}`}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      {site.name}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="text-[#291b03] text-lg md:text-xl font-medium leading-relaxed mb-12">
                    {site.desc}
                  </p>

                  {/* Elegant Action Button */}
                  <Link
                    to={`/work/content-strategy-and-marketing/${site.name.toLowerCase().replace(/ /g, "-")}`}
                    className="group relative inline-flex items-center gap-4 pb-2 border-b-2 border-[#cca027] text-[#291b03] text-sm uppercase tracking-widest font-bold"
                    style={{ textDecoration: 'none' }}
                  >
                    Explore Case Study
                    <span className="transform transition-transform duration-300 group-hover:translate-x-2 text-[#cca027]">&rarr;</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}


