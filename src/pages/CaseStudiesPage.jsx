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
      className="w-full min-h-screen bg-[#fbf8f3] text-[#291b03] py-28 px-6 md:px-12 lg:px-20 xl:px-32 relative overflow-hidden font-gothic"
    >
      {/* Decorative Background Lights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#cca027]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#b08810]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Layout Wrapper */}
      <div className="max-w-7xl mx-auto relative z-10 mt-8">
        
        {/* ================= HEADER SECTION: SPLIT LAYOUT ================= */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-24 w-full mb-24 py-12 border-y border-[#C08860]/20">
          
          {/* Left Column: Giant Title & Subtitle */}
          <div className="w-full lg:w-[50%] flex flex-col items-start text-left header-left-col">
            <Link
              to="/"
              className="text-[#666] text-xs tracking-[0.2em] uppercase hover:text-[#cca027] transition-colors flex items-center gap-3 mb-8 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> BACK TO HOME
            </Link>

            <h1 className="font-serif text-[50px] sm:text-[70px] lg:text-[85px] font-light text-[#cca027] leading-[1] tracking-tight">
              Case Studies
            </h1>
          </div>

          {/* Right Column: Paragraph */}
          <div className="w-full lg:w-[40%] flex flex-col text-left header-right-col">
            <p className="text-[#291b03] text-lg md:text-xl font-light leading-relaxed">
              A customized overview of results generated for our premium clients. We design strategic content plans and localized organic funnels that translate interest into bookings, footfalls, and wholesale inquiries.
            </p>
          </div>

        </div>

        {/* ================= CAMPAIGNS EDITORIAL SECTION ================= */}
        <div id="campaigns-grid" className="w-full flex flex-col gap-20 md:gap-28 mt-12">
          {clients.map((site, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={site.name}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full border-t border-[#cca027]/10 pt-16 first:border-0 first:pt-0 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Showcase Column */}
                <div className="w-full lg:w-[55%]">
                  <Link
                    to={`/work/content-strategy-and-marketing/${site.name.toLowerCase().replace(/ /g, "-")}`}
                    className="campaign-row-image-link block relative w-full aspect-[16/10] rounded-[24px] overflow-hidden border border-[#cca027]/10 bg-[#0c0806] transition-all duration-500 hover:border-[#cca027]/30 hover:shadow-[0_20px_50px_rgba(184,115,78,0.1)] group"
                  >
                    <div className="absolute inset-0 border border-white/5 rounded-[24px] pointer-events-none z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none z-10" />
                    
                    <img
                      src={site.image}
                      alt={site.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </Link>
                </div>

                {/* Details Column */}
                <div className="w-full lg:w-[40%] flex flex-col items-start text-left">
                  {/* Category Pill and Number */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-mono text-[#cca027] text-xs font-bold tracking-widest">
                      0{index + 1}
                    </span>
                    <span className="text-[#291b03] text-xs">|</span>
                    <span className="px-3 py-1 rounded-full bg-[#cca027]/5 border border-[#cca027]/15 text-[#cca027] text-[8px] font-bold uppercase tracking-widest">
                      {site.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#cca027] leading-tight tracking-tight mb-4 hover:text-[#cca027] transition-colors duration-300">
                    <Link
                      to={`/work/content-strategy-and-marketing/${site.name.toLowerCase().replace(/ /g, "-")}`}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      {site.name}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="text-[#291b03] text-base md:text-lg font-medium leading-relaxed mb-6 capitalize">
                    {site.desc}
                  </p>

                  {/* Domain Link & Action Button */}
                  <div className="flex flex-col gap-5 mt-2">
                    <Link
                      to={`/work/content-strategy-and-marketing/${site.name.toLowerCase().replace(/ /g, "-")}`}
                      className="campaign-explore-btn inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#cca027]/20 text-[#cca027] text-xs uppercase tracking-widest font-semibold hover:bg-[#cca027] hover:text-black hover:border-[#cca027] transition-all duration-300 w-max"
                      style={{ textDecoration: 'none' }}
                    >
                      VIEW PROJECT <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <style>{`
          .campaign-row-image-link {
            transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.4s ease, box-shadow 0.4s ease;
          }
          .campaign-row-image-link:hover {
            transform: translateY(-4px);
            border-color: rgba(184, 115, 78, 0.35);
            box-shadow: 0 25px 50px -15px rgba(184, 115, 78, 0.12);
          }
        `}</style>

      </div>
    </div>
  );
}


