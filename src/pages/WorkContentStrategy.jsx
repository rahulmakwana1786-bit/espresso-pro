import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

// Import portfolio images for Content Strategy clients
import gcTilesChennaiImg from "../assets/portfolio/gc_tiles_chennai.png";
import shreejiTilesImg from "../assets/portfolio/shreeji_tiles.png";
import gcTilesHyderabadImg from "../assets/portfolio/gc_tiles_hyderabad_detail.png";
import tileBazaarImg from "../assets/portfolio/tile_bazaar_detail.png";
import vinayakToyotaImg from "../assets/portfolio/vinayak_toyota.png";
import tileLabImg from "../assets/portfolio/tile_lab.png";

const CONTENT_PROJECTS = [
  { id: 1, title: "GC TILES CHENNAI", client: "GC Tiles", image: gcTilesChennaiImg, slug: "gc-tiles-chennai" },
  { id: 2, title: "SHREEJI TILES", client: "Shreeji", image: shreejiTilesImg, slug: "shreeji-tiles" },
  { id: 3, title: "GC TILES HYDERABAD", client: "GC Tiles", image: gcTilesHyderabadImg, slug: "gc-tiles-hyderabad" },
  { id: 4, title: "TILE BAZAAR", client: "Tile Bazaar", image: tileBazaarImg, slug: "tile-bazaar" },
  { id: 5, title: "VINAYAK TOYOTA", client: "Vinayak Toyota", image: vinayakToyotaImg, slug: "vinayak-toyota" },
  { id: 6, title: "TILE LAB", client: "Tile Lab", image: tileLabImg, slug: "tile-lab" },
];

export default function WorkContentStrategy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative min-h-screen overflow-clip selection:bg-[#cca027]/30 pt-32 pb-32 transition-colors duration-700 bg-[#fbf8f3] text-[#291b03]">
      {/* Page Header */}
      <section className="container mx-auto px-8 lg:px-16 py-12 md:py-20 border-b border-[#C08860]/20">
        <Link to="/work" className="inline-flex items-center gap-2 transition-colors text-xs font-semibold uppercase tracking-[0.2em] mb-12 text-[#666] hover:text-[#cca027]">
          <span>←</span> BACK TO WORK
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 max-w-4xl"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border w-fit text-xs tracking-widest uppercase border-[#cca027]/20 text-[#cca027] bg-[#cca027]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#cca027]" />
            STRATEGY & GROWTH
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[76px] font-serif tracking-tighter leading-[1.1] text-[#cca027]">
            Content Strategy & Marketing
          </h1>
          <p className="text-lg md:text-xl font-light mt-4 max-w-2xl leading-relaxed text-[#291b03]/70">
            Data-driven storytelling that drives measurable business growth and engages your audience at every touchpoint.
          </p>
        </motion.div>
      </section>

      {/* Dynamic Content */}
      <section className="container mx-auto px-8 lg:px-16 mt-12 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24">
          {CONTENT_PROJECTS.map((project, index) => {
            const cardContent = (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index % 2 === 0 ? 0 : 0.2 }}
                className={`flex flex-col gap-6 group cursor-pointer ${
                  index % 2 !== 0 ? "md:mt-32" : ""
                }`}
              >
                <div className="relative w-full rounded-[24px] overflow-hidden flex aspect-[4/5] bg-[#e0e0e0] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-black/5">
                  <motion.div 
                    className="absolute inset-[-10%] w-[120%] h-[120%]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5, ease: [0.215, 0.61, 0.355, 1] }}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t opacity-40 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none from-black/60 via-transparent" />
                </div>
                
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-[#cca027]">
                    <span>{project.client}</span>
                    <span className="w-8 h-[1px] bg-[#cca027]/30" />
                    <span className="text-black/40">0{index + 1}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif transition-colors duration-500 text-[#111] group-hover:text-[#cca027]">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            );

            return (
              <Link key={project.id} to={`/work/content-strategy-and-marketing/${project.slug}`} className="block">
                {cardContent}
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}


