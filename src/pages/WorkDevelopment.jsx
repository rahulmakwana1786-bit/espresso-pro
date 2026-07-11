import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

// Import generated mockup images
import gcCeraImg from "../assets/portfolio/gc_cera_tiles.png";
import tileBazaarUkImg from "../assets/portfolio/tile_bazaar_uk.png";
import leverpoolTilesImg from "../assets/portfolio/leverpool_tiles.png";
import gctilesHydImg from "../assets/portfolio/gctiles_hyderabad.png";

gsap.registerPlugin(ScrollTrigger);

export default function WorkDevelopment() {
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

  const sites = [
    {
      name: "GC Cera Tiles",
      url: "https://gcceratiles.com/",
      image: gcCeraImg,
      desc: "Designed and developed a luxury digital portal featuring category specifications and high-performance surface showcasing.",
    },
    {
      name: "Tile Bazaar UK",
      url: "https://www.tilebazaar.co.uk/",
      image: tileBazaarUkImg,
      desc: "Built a fully-featured e-commerce catalog store tailored with custom liquidate and weight-based logistics integrations.",
    },
    {
      name: "Leverpool Tiles Bangalore",
      url: "https://www.leverpooltilesbangalore.com/",
      image: leverpoolTilesImg,
      desc: "Developed a showcase website to capture luxury interior design leads, utilizing server-side rendering for fast loading.",
    },
    {
      name: "GC Tiles Hyderabad",
      url: "https://www.gctileshyderabad.com/",
      image: gctilesHydImg,
      desc: "Created a localized showroom landing page targeting Hyderabad architects, featuring maps and inventory updates.",
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
              to="/work"
              className="text-[#666] text-xs tracking-[0.2em] uppercase hover:text-[#cca027] transition-colors flex items-center gap-3 mb-8 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> BACK TO WORK
            </Link>

            <h1 className="font-serif text-[42px] sm:text-[62px] lg:text-[76px] font-light text-[#cca027] leading-[1.08] tracking-tight">
              Web development<br />& Tech Design
            </h1>
          </div>

          {/* Right Column: Paragraph and Button */}
          <div className="w-full lg:w-[40%] flex flex-col items-start text-left header-right-col">
            <p className="text-[#291b03] text-lg md:text-xl font-light leading-relaxed">
              Designing a high-performance web experience that transformed dealership visibility and scaled customer acquisitions.
            </p>

            <button
              onClick={() => {
                const el = document.getElementById("websites-grid");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="mt-8 px-8 py-3 rounded-full border border-white/30 text-[#291b03] text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-pointer"
            >
              INTERACTIVE TECH
            </button>
          </div>

        </div>

        {/* ================= IMAGES GRID SECTION ================= */}
        <div id="websites-grid" className="w-full grid grid-cols-1 gap-16 md:gap-24">
          {sites.map((site) => (
            <motion.div
              key={site.name}
              className="web-grid-card flex flex-col group"
            >
              {/* Full Card Image Link */}
              <a
                href={site.url}
                target="_blank"
                rel="noreferrer"
                className="block relative w-full aspect-[16/9] rounded-[28px] overflow-hidden border border-[#C08860]/10 bg-[#0c0806] transition-all duration-500 group-hover:border-[#cca027]/30 group-hover:shadow-[0_0_50px_rgba(184,115,78,0.15)]"
              >
                {/* Edge blending vignette */}
                <div className="absolute inset-0 shadow-[inset_0_0_60px_#000000] pointer-events-none z-10" />

                {/* Golden/Bronze overlay glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex flex-col justify-end p-8 text-left" />

                {/* Overlay Text elements visible on hover */}
                <div className="absolute inset-0 z-30 flex flex-col justify-end p-8 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <span className="text-[#cca027] text-[10px] tracking-[0.25em] font-bold uppercase mb-1.5">Launch Project ↗</span>
                  <h3 className="font-serif text-2xl font-bold text-[#cca027] tracking-tight leading-tight">
                    {site.name}
                  </h3>
                  <p className="text-[#291b03] text-xs font-light leading-relaxed mt-2 max-w-sm">
                    {site.desc}
                  </p>
                </div>

                {/* Mockup image */}
                <img
                  src={site.image}
                  alt={site.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </a>

              {/* Bottom Caption Details */}
              <div className="flex justify-between items-center mt-6 px-2 text-[#C08860] tracking-wider text-sm sm:text-base">
                <span className="font-semibold text-[#291b03] group-hover:text-[#D4AF37] transition-colors duration-300">
                  {site.name}
                </span>
                <span className="font-light text-[#291b03] text-xs sm:text-sm lowercase font-mono">
                  {site.url.replace("https://", "").replace("www.", "").replace(/\/$/, "")}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}


