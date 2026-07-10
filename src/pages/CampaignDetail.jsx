import { useParams, Link } from "react-router-dom";
import { useEffect, useRef } from "react";

// Import portfolio images for Content Strategy clients
import gcTilesChennaiImg from "../assets/portfolio/gc_tiles_chennai.png";
import shreejiTilesImg from "../assets/portfolio/shreeji_tiles.png";
import gcTilesHyderabadImg from "../assets/portfolio/gc_tiles_hyderabad_detail.png";
import tileBazaarImg from "../assets/portfolio/tile_bazaar_detail.png";
import vinayakToyotaImg from "../assets/portfolio/vinayak_toyota.png";
import tileLabImg from "../assets/portfolio/tile_lab.png";

// Import generic showcase assets
import luxuryMarbleShowroom from "../assets/portfolio/luxury_marble_showroom.png";
import ceramicTilesLayout from "../assets/portfolio/ceramic_tiles_layout.png";
import luxuryCarDetail from "../assets/portfolio/luxury_car_detail.png";
import architectMaterialsFlatlay from "../assets/portfolio/architect_materials_flatlay.png";
import minimalistPorcelainWall from "../assets/portfolio/minimalist_porcelain_wall.png";

const campaignData = {
  "gc-tiles-chennai": {
    name: "GC TILES CHENNAI",
    pill: "Local & Search Marketing",
    sub: "Designed and executed localized social campaigns focusing on luxury porcelain slabs and imported marble to maximize showroom footfalls.",
    meta: {
      Client: "GC Group",
      Industry: "Luxury Slabs & Porcelain",
      Year: "2026"
    },
    images: [
      gcTilesChennaiImg,
      luxuryMarbleShowroom,
      ceramicTilesLayout,
      architectMaterialsFlatlay,
      minimalistPorcelainWall,
      ceramicTilesLayout,
      luxuryMarbleShowroom,
      architectMaterialsFlatlay,
      minimalistPorcelainWall
    ],
    overview: "Designed and executed localized social campaigns focusing on luxury porcelain slabs and imported marble to maximize showroom footfalls. By replacing mass-market discounts with design-centric visuals, we successfully attracted premium building contractors, architects, and high-end homeowners.",
    insight: "Affluent consumers do not buy building materials; they buy the vision of their completed luxury spaces. To speak their language, we structured our campaigns around exclusivity and premium design values.",
    challenge: "Luxury showrooms face a highly localized and highly saturated market. Traditional digital campaigns generated generic traffic but lacked target audience pre-qualification, causing CRM bloat. HNI builders and architects rarely respond to volume-based discount advertisements.",
    solution: "We deployed design-first Meta catalog sequences and localized paid campaigns targeting builders in premium pin codes. We optimized local search listings and mapped intent queries to direct catalog download forms, pre-qualifying leads before they spoke to a showroom consultant.",
    metrics: [
      { value: "+250%", label: "Showroom Footfalls" },
      { value: "+180%", label: "Qualified B2B Leads" },
      { value: "+65%", label: "Conversion Rate" },
      { value: "4.2X", label: "Average ROAS" }
    ],
    nextSlug: "shreeji-tiles",
    nextName: "Shreeji Tiles"
  },
  "shreeji-tiles": {
    name: "SHREEJI TILES",
    pill: "Catalog & Meta Lead Gen",
    sub: "Structured lead generation campaigns on Meta and curated a sleek digital design catalog that attracted premium building contractors.",
    meta: {
      Client: "Shreeji Ceramics",
      Industry: "Contractor Supplies",
      Year: "2026"
    },
    images: [
      shreejiTilesImg,
      luxuryMarbleShowroom,
      ceramicTilesLayout,
      architectMaterialsFlatlay,
      minimalistPorcelainWall,
      ceramicTilesLayout,
      luxuryMarbleShowroom,
      architectMaterialsFlatlay,
      minimalistPorcelainWall
    ],
    overview: "Structured lead generation campaigns on Meta and curated a sleek digital design catalog that attracted premium building contractors. We built a visual communication voice that positioned the showroom as the ultimate tile art gallery.",
    insight: "B2B contractors value spec precision and visual clarity. By designing interactive digital catalogs, we streamlined the specification process for premium projects.",
    challenge: "Shreeji Tiles needed a systematic way to engage volume B2B buyers like real estate developers and contractors. Their social presence was generic and did not reflect the luxury nature of their tile collections.",
    solution: "We designed high-fidelity digital catalogs showcasing porcelain collections in realistic space mockups. We launched targeted lead campaigns offering direct WhatsApp catalogs, reducing the friction of requesting specs.",
    metrics: [
      { value: "+210%", label: "Contractor Leads" },
      { value: "+150%", label: "Catalog Downloads" },
      { value: "+55%", label: "Conversion Rate" },
      { value: "3.8X", label: "Average ROAS" }
    ],
    nextSlug: "gc-tiles-hyderabad",
    nextName: "GC Tiles Hyderabad"
  },
  "gc-tiles-hyderabad": {
    name: "GC TILES HYDERABAD",
    pill: "Local SEO & Authority",
    sub: "Optimized Google Business Profile and local search visibility to capture builder and architect inquiries in Telangana.",
    meta: {
      Client: "GC Group",
      Industry: "Luxury Ceramics",
      Year: "2026"
    },
    images: [
      gcTilesHyderabadImg,
      luxuryMarbleShowroom,
      ceramicTilesLayout,
      architectMaterialsFlatlay,
      minimalistPorcelainWall,
      ceramicTilesLayout,
      luxuryMarbleShowroom,
      architectMaterialsFlatlay,
      minimalistPorcelainWall
    ],
    overview: "Optimized Google Business Profile and local search visibility to capture builder and architect inquiries in Telangana. We created an authority position in local tile search by ensuring high review ratings and map discovery.",
    insight: "90% of local architects and builders use Google Maps and local search when sourcing regional showroom supplies. Capturing local search is capturing local B2B intent.",
    challenge: "Despite having a premium physical showroom, GC Tiles Hyderabad had low visibility on Google Search and Google Maps, allowing local competitors to siphon off high-value architect inquiries.",
    solution: "We executed an aggressive local SEO campaign: optimizing Google Business categories, setting up keyword-rich map coordinates, implementing review automated reminders, and uploading weekly product showcase updates.",
    metrics: [
      { value: "+320%", label: "Google Map Views" },
      { value: "+220%", label: "Direct Phone Inquiries" },
      { value: "+70%", label: "Local Web Traffic" },
      { value: "4.5X", label: "Average ROAS Equivalent" }
    ],
    nextSlug: "tile-bazaar",
    nextName: "Tile Bazaar"
  },
  "tile-bazaar": {
    name: "TILE BAZAAR",
    pill: "Automation & Funnels",
    sub: "Engineered automated lead-nurturing funnels that engaged wholesale builders, turning cold inquiries into consistent bulk orders.",
    meta: {
      Client: "Tile Bazaar UK",
      Industry: "Wholesale Import",
      Year: "2026"
    },
    images: [
      tileBazaarImg,
      luxuryMarbleShowroom,
      ceramicTilesLayout,
      architectMaterialsFlatlay,
      minimalistPorcelainWall,
      ceramicTilesLayout,
      luxuryMarbleShowroom,
      architectMaterialsFlatlay,
      minimalistPorcelainWall
    ],
    overview: "Engineered automated lead-nurturing funnels that engaged wholesale builders, turning cold inquiries into consistent bulk orders. We integrated WhatsApp and email sequences to respond instantly to builder specification requests.",
    insight: "Wholesale builders buy from suppliers who respond the fastest. Automating lead response time from hours to seconds is the ultimate sales advantage.",
    challenge: "Tile Bazaar received high-volume wholesale builder inquiries but lacked the sales team capacity to follow up instantly, resulting in lost deals to faster competitors.",
    solution: "We built automated specification delivery funnels. When a builder fills out a lead form, they immediately receive standard pricing sheets and stock catalogs via WhatsApp and email, with direct calendar booking links.",
    metrics: [
      { value: "+280%", label: "Response Speed" },
      { value: "+190%", label: "Wholesale Orders" },
      { value: "+80%", label: "Conversion Rate" },
      { value: "5.0X", label: "Average ROAS" }
    ],
    nextSlug: "vinayak-toyota",
    nextName: "Vinayak Toyota"
  },
  "vinayak-toyota": {
    name: "VINAYAK TOYOTA",
    pill: "Automotive Campaigns",
    sub: "Drove high-converting digital ad campaigns and video promotions for premium vehicle launches and events.",
    meta: {
      Client: "Vinayak Group",
      Industry: "Automotive Retail",
      Year: "2026"
    },
    images: [
      vinayakToyotaImg,
      luxuryCarDetail,
      architectMaterialsFlatlay,
      luxuryCarDetail,
      vinayakToyotaImg,
      architectMaterialsFlatlay,
      luxuryCarDetail,
      architectMaterialsFlatlay,
      luxuryCarDetail
    ],
    overview: "Drove high-converting digital ad campaigns and video promotions for premium vehicle launches and events. We positioned Vinayak Toyota as the premier destination for luxury SUV and sedan acquisitions.",
    insight: "Automotive buyers engage with highly visual, dynamic motion content. Video campaigns showing premium vehicle capabilities outperform static banners by 2X.",
    challenge: "Vinayak Toyota needed to secure high-intent test drive bookings for premium SUV launches within short timeframes. Cost-per-lead on generic automotive ads was high.",
    solution: "We ran geo-targeted video campaigns showcasing premium vehicle features, paired with calendar appointment forms. We excluded current customer databases to ensure all ad spend targeted new acquisitions.",
    metrics: [
      { value: "+180%", label: "Test Drive Bookings" },
      { value: "+160%", label: "Qualified Leads" },
      { value: "+50%", label: "Conversion Rate" },
      { value: "4.0X", label: "Average ROAS" }
    ],
    nextSlug: "tile-lab",
    nextName: "Tile Lab"
  },
  "tile-lab": {
    name: "TILE LAB",
    pill: "Boutique Storytelling",
    sub: "Formulated a boutique visual brand voice for custom clay and ceramic finishes, scaling designer and architect outreach.",
    meta: {
      Client: "Tile Lab Studio",
      Industry: "Architectural Finishes",
      Year: "2026"
    },
    images: [
      tileLabImg,
      luxuryMarbleShowroom,
      ceramicTilesLayout,
      architectMaterialsFlatlay,
      minimalistPorcelainWall,
      ceramicTilesLayout,
      luxuryMarbleShowroom,
      architectMaterialsFlatlay,
      minimalistPorcelainWall
    ],
    overview: "Formulated a boutique visual brand voice for custom clay and ceramic finishes, scaling designer and architect outreach. We focused on highlighting the tactile and custom nature of high-end architectural tiles.",
    insight: "Architects select boutique finishes based on material authenticity and project-specific customizations. Content must emphasize craftsmanship.",
    challenge: "Tile Lab's previous branding was generic and did not convey the boutique, artisan nature of their clay and ceramic finishes, making it hard to command premium prices.",
    solution: "We overhauled the visual storytelling, focusing on material details, architectural project galleries, and B2B LinkedIn outreach campaigns targeting top design firms.",
    metrics: [
      { value: "+150%", label: "Architect Outreach" },
      { value: "+130%", label: "Spec Bookings" },
      { value: "+45%", label: "Conversion Rate" },
      { value: "3.5X", label: "Average ROAS" }
    ],
    nextSlug: "gc-tiles-chennai",
    nextName: "GC Tiles Chennai"
  }
};

export default function CampaignDetail() {
  const { projectSlug } = useParams();
  const project = campaignData[projectSlug];
  const containerRef = useRef(null);

  // Scroll Progress Bar Logic
  useEffect(() => {
    const bar = document.getElementById("progressBar");
    function updateProgress() {
      const h = document.documentElement;
      const scrollable = h.scrollHeight - h.clientHeight;
      const pct = scrollable > 0 ? window.scrollY / scrollable : 0;
      if (bar) {
        bar.style.transform = `scaleX(${pct})`;
      }
    }
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [projectSlug]);

  // Intersection Observer Reveal Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    // Scroll to top on slug change
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
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [projectSlug]);

  if (!project) {
    return (
      <div className="w-full min-h-screen bg-[#fbf8f3] text-[#291b03] flex flex-col items-center justify-center font-sans">
        <h2 className="text-3xl font-serif text-[#B76E4A] mb-4">Project Not Found</h2>
        <Link to="/work/content-strategy-and-marketing" className="text-[#291b03] hover:text-[#B76E4A] uppercase text-xs tracking-widest">&larr; BACK TO CAMPAIGNS</Link>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="csd-page">
      <style>{`
        .csd-page {
          --bg: #050505;
          --fg: #ECEAE6;
          --muted: #8a8580;
          --line: #1a1a1a;
          --accent: #B8734E;
          --serif: "Times New Roman", Times, serif;
          --sans: "Manrope", "Inter", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
          
          background: var(--bg);
          color: var(--fg);
          font-family: var(--sans);
          min-height: 100vh;
          width: 100%;
          overflow-x: clip;
          letter-spacing: .005em;
          -webkit-font-smoothing: antialiased;
          position: relative;
        }

        .csd-page .csd-progress {
          position: fixed; top: 0; left: 0; right: 0; height: 2px; background: var(--accent);
          transform-origin: 0%; z-index: 60;
          transform: scaleX(0);
          transition: transform .15s linear;
        }

        .csd-page .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity .9s cubic-bezier(.22, 1, .36, 1), transform .9s cubic-bezier(.22, 1, .36, 1);
        }
        .csd-page .reveal.show {
          opacity: 1;
          transform: translateY(0);
        }

        .csd-page .csd-hero {
          display: grid; grid-template-columns: 1.4fr 1fr; gap: 80px;
          padding: 120px 48px 60px;
          border-bottom: 1px solid var(--line);
        }
        .csd-page .csd-title {
          font-family: var(--serif);
          font-size: clamp(64px, 9vw, 140px);
          line-height: .95; letter-spacing: -.02em;
          font-weight: 500; margin: 0 0 28px;
          background: linear-gradient(180deg, #fff 0%, #d8cfc6 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .csd-page .csd-sub {
          font-size: 15px; line-height: 1.6; color: var(--muted);
          max-width: 440px; margin: 0 0 36px;
        }
        .csd-page .csd-pill {
          display: inline-block; padding: 12px 28px; border-radius: 999px;
          background: transparent; color: var(--fg);
          border: 1px solid rgba(255, 255, 255, .18);
          font-family: var(--sans); font-size: 12px; font-weight: 700;
          letter-spacing: .18em; text-transform: uppercase; cursor: pointer;
          transition: all .4s cubic-bezier(.22, 1, .36, 1);
        }
        .csd-page .csd-pill:hover {
          background: var(--accent); border-color: var(--accent); color: #000;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px -10px rgba(184, 115, 78, .55);
        }

        .csd-page .csd-hero-right { display: flex; flex-direction: column; gap: 18px; padding-top: 14px; }
        .csd-page .csd-meta-row {
          display: flex; gap: 10px; font-size: 14px;
          padding-bottom: 14px; border-bottom: 1px solid var(--line);
        }
        .csd-page .csd-meta-key { color: var(--fg); font-weight: 600; min-width: 90px; }
        .csd-page .csd-meta-val { color: var(--muted); }

        .csd-page .csd-grid-sticky {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          padding: 14px 48px;
          align-items: start;
        }
        .csd-page .csd-sticky-col {
          position: -webkit-sticky;
          position: sticky;
          top: 100px;
          height: max-content;
        }
        .csd-page .csd-tile-tall,
        .csd-page .csd-grid-sticky .csd-tile {
          height: calc(100vh - 120px);
          aspect-ratio: unset;
        }
        .csd-page .csd-scroll-col {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .csd-page .csd-wide { padding: 14px 48px; }
        .csd-page .csd-wide .csd-tile { aspect-ratio: 21/9; }

        .csd-page .csd-tile { margin: 0; overflow: hidden; border-radius: 8px; aspect-ratio: 4/5; position: relative; }
        .csd-page .csd-tile-inner { position: relative; width: 100%; height: 100%; overflow: hidden; border-radius: 8px; }

        .csd-page .ph-img {
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
          transform: scale(1.04);
          transition: transform 1.6s cubic-bezier(.22, 1, .36, 1), filter .6s ease;
          filter: saturate(.92) brightness(.92);
          position: relative;
        }
        .csd-page .ph-img::before {
          content: ""; position: absolute; inset: 0;
          background-image:
            repeating-linear-gradient(45deg, rgba(255, 255, 255, .035) 0 2px, transparent 2px 14px);
          z-index: 1;
          pointer-events: none;
        }
        .csd-page .ph-label {
          position: relative; z-index: 2;
          font-family: var(--sans); font-size: 11px; letter-spacing: .18em; text-transform: uppercase;
          color: rgba(255, 255, 255, .75);
          padding: 8px 14px; border: 1px solid rgba(255, 255, 255, .18); border-radius: 999px;
          background: rgba(0, 0, 0, .45);
        }
        .csd-page .csd-tile:hover .ph-img { transform: scale(1.1); filter: saturate(1.05) brightness(1); }
        .csd-page .csd-tile-overlay {
          position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, .45));
          opacity: .7; transition: opacity .5s ease;
          z-index: 2;
        }
        .csd-page .csd-tile:hover .csd-tile-overlay { opacity: .25; }

        .csd-page .g1 { background: linear-gradient(135deg, #3a2a20, #0a0807); }
        .csd-page .g2 { background: linear-gradient(135deg, #1f2a28, #070908); }
        .csd-page .g3 { background: linear-gradient(135deg, #2a2018, #08070a); }
        .csd-page .g4 { background: linear-gradient(135deg, #262321, #0a0a0a); }
        .csd-page .g5 { background: linear-gradient(135deg, #2f221c, #090807); }
        .csd-page .g6 { background: linear-gradient(135deg, #1c2622, #070908); }
        .csd-page .g7 { background: linear-gradient(135deg, #332821, #0a0807); }

        .csd-page .csd-text {
          max-width: 760px; margin: 0 auto; padding: 80px 48px;
        }
        .csd-page .csd-h3 {
          font-family: var(--sans); font-size: 17px; font-weight: 700;
          color: var(--fg); margin: 0 0 26px; letter-spacing: .005em;
        }
        .csd-page .csd-text p {
          font-size: 15px; line-height: 1.75; color: #b6b1ac; margin: 0 0 22px;
        }

        .csd-page .results-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 24px;
        }
        .csd-page .result-metric { font-family: var(--serif); font-size: clamp(40px, 6vw, 60px); color: #fff; line-height: 1; display: block; }
        .csd-page .result-label { font-size: 11px; color: #71706c; text-transform: uppercase; letter-spacing: .15em; font-weight: 600; display: block; margin-top: 8px; }

        .csd-page .csd-footer {
          display: flex; flex-direction: column; padding: 100px 48px; align-items: center; justify-content: center; gap: 20px;
          border-top: 1px solid var(--line);
        }
        .csd-page .csd-footer .eyebrow { color: var(--accent); letter-spacing: .2em; text-transform: uppercase; font-size: 10px; font-weight: bold; }
        .csd-page .csd-footer a {
          text-decoration: none; color: #fff; font-family: var(--serif); font-size: clamp(40px, 8vw, 80px); line-height: 1;
          transition: color .3s;
        }
        .csd-page .csd-footer a:hover { color: var(--accent); }

        @media (max-width: 900px) {
          .csd-page .csd-hero { grid-template-columns: 1fr; gap: 40px; padding: 60px 22px 40px; }
          .csd-page .csd-grid-sticky, .csd-page .csd-wide { padding: 8px 12px; gap: 10px; }
          .csd-page .csd-grid-sticky { grid-template-columns: 1fr; }
          .csd-page .csd-sticky-col { position: relative; top: 0; height: auto; }
          .csd-page .csd-sticky-col .csd-tile,
          .csd-page .csd-grid-sticky .csd-tile,
          .csd-page .csd-tile-tall { aspect-ratio: 4/5; height: auto !important; }
          .csd-page .csd-text { padding: 60px 22px; }
          .csd-page .results-grid { grid-template-columns: 1fr; gap: 28px; }
          .csd-page .csd-footer { padding: 40px 22px; text-align: center; }
        }
      `}</style>

      {/* Progress Scroll Indicator */}
      <div className="csd-progress" id="progressBar"></div>

      {/* ================= HERO SECTION ================= */}
      <section className="csd-hero">
        <div className="csd-hero-left">
          <Link
            to="/work/content-strategy-and-marketing"
            className="text-[#A8A8A8] text-xs tracking-[0.25em] uppercase hover:text-[#B76E4A] transition-colors flex items-center gap-2 mb-8 w-fit group font-sans"
            style={{ textDecoration: 'none' }}
          >
            <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> BACK TO CAMPAIGNS
          </Link>
          <h1 className="csd-title reveal">{project.name}</h1>
          <p className="csd-sub reveal" style={{ transitionDelay: ".15s" }}>
            {project.sub}
          </p>
          <button className="csd-pill reveal" style={{ transitionDelay: ".3s" }}>
            {project.pill}
          </button>
        </div>
        <div className="csd-hero-right font-sans">
          <div className="csd-meta-row reveal" style={{ transitionDelay: ".1s" }}>
            <span className="csd-meta-key">Client:</span>
            <span className="csd-meta-val">{project.meta.Client}</span>
          </div>
          <div className="csd-meta-row reveal" style={{ transitionDelay: ".18s" }}>
            <span className="csd-meta-key">Industry:</span>
            <span className="csd-meta-val">{project.meta.Industry}</span>
          </div>
          <div className="csd-meta-row reveal" style={{ transitionDelay: ".26s" }}>
            <span className="csd-meta-key">Year:</span>
            <span className="csd-meta-val">{project.meta.Year}</span>
          </div>
        </div>
      </section>

      {/* ================= GRID STICKY 1 ================= */}
      <section className="csd-grid-sticky">
        <div className="csd-sticky-col">
          <figure className="csd-tile csd-tile-tall reveal">
            <div className="csd-tile-inner">
              <div className="ph-img g1">
                <img src={project.images[0]} alt="Hero Showcase" className="w-full h-full object-cover absolute inset-0 z-0 opacity-80" />
              </div>
              <span className="csd-tile-overlay"></span>
            </div>
          </figure>
        </div>
        <div className="csd-scroll-col">
          <figure className="csd-tile reveal">
            <div className="csd-tile-inner">
              <div className="ph-img g2">
                <img src={project.images[1]} alt="Showcase 1" className="w-full h-full object-cover absolute inset-0 z-0 opacity-80" />
              </div>
              <span className="csd-tile-overlay"></span>
            </div>
          </figure>
          <figure className="csd-tile reveal" style={{ transitionDelay: ".12s" }}>
            <div className="csd-tile-inner">
              <div className="ph-img g3">
                <img src={project.images[2]} alt="Showcase 2" className="w-full h-full object-cover absolute inset-0 z-0 opacity-80" />
              </div>
              <span className="csd-tile-overlay"></span>
            </div>
          </figure>
          <figure className="csd-tile reveal" style={{ transitionDelay: ".24s" }}>
            <div className="csd-tile-inner">
              <div className="ph-img g4">
                <img src={project.images[3]} alt="Showcase 3" className="w-full h-full object-cover absolute inset-0 z-0 opacity-80" />
              </div>
              <span className="csd-tile-overlay"></span>
            </div>
          </figure>
        </div>
      </section>

      {/* ================= CHALLENGE SECTION ================= */}
      <section className="csd-text">
        <h3 className="csd-h3 reveal">THE CHALLENGE</h3>
        <p className="reveal" style={{ transitionDelay: ".1s" }}>
          {project.challenge}
        </p>
      </section>

      {/* ================= WIDE PREVIEW SECTION ================= */}
      <section className="csd-wide">
        <figure className="csd-tile reveal">
          <div className="csd-tile-inner">
            <div className="ph-img g5">
              <img src={project.images[4]} alt="Overview Visual" className="w-full h-full object-cover absolute inset-0 z-0 opacity-80" />
            </div>
            <span className="csd-tile-overlay"></span>
          </div>
        </figure>
      </section>

      {/* ================= OVERVIEW & INSIGHT SECTION ================= */}
      <section className="csd-text">
        <h3 className="csd-h3 reveal">PROJECT OVERVIEW</h3>
        <p className="reveal" style={{ transitionDelay: ".1s" }}>
          {project.overview}
        </p>
        <p className="reveal" style={{ marginTop: "20px", transitionDelay: ".15s" }}>
          <strong style={{ color: "#B8734E" }}>Key Insight:</strong> "{project.insight}"
        </p>
      </section>

      {/* ================= GRID STICKY 2 ================= */}
      <section className="csd-grid-sticky">
        <div className="csd-scroll-col">
          <figure className="csd-tile reveal">
            <div className="csd-tile-inner">
              <div className="ph-img g6">
                <img src={project.images[5]} alt="Gallery 1" className="w-full h-full object-cover absolute inset-0 z-0 opacity-80" />
              </div>
              <span className="csd-tile-overlay"></span>
            </div>
          </figure>
          <figure className="csd-tile reveal" style={{ transitionDelay: ".12s" }}>
            <div className="csd-tile-inner">
              <div className="ph-img g7">
                <img src={project.images[6]} alt="Gallery 2" className="w-full h-full object-cover absolute inset-0 z-0 opacity-80" />
              </div>
              <span className="csd-tile-overlay"></span>
            </div>
          </figure>
          <figure className="csd-tile reveal" style={{ transitionDelay: ".24s" }}>
            <div className="csd-tile-inner">
              <div className="ph-img g2">
                <img src={project.images[7]} alt="Gallery 3" className="w-full h-full object-cover absolute inset-0 z-0 opacity-80" />
              </div>
              <span className="csd-tile-overlay"></span>
            </div>
          </figure>
        </div>
        <div className="csd-sticky-col">
          <figure className="csd-tile csd-tile-tall reveal" style={{ transitionDelay: ".12s" }}>
            <div className="csd-tile-inner">
              <div className="ph-img g3">
                <img src={project.images[8]} alt="Showcase Focus" className="w-full h-full object-cover absolute inset-0 z-0 opacity-80" />
              </div>
              <span className="csd-tile-overlay"></span>
            </div>
          </figure>
        </div>
      </section>

      {/* ================= RESULTS & METRICS SECTION ================= */}
      <section className="csd-text">
        <h3 className="csd-h3 reveal">RESULTS &amp; METRICS</h3>
        <div className="results-grid">
          {project.metrics.map((metric, index) => (
            <div className="reveal" key={index} style={{ transitionDelay: `${0.1 + index * 0.1}s` }}>
              <span className="result-metric">{metric.value}</span>
              <span className="result-label">{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= LOOP FOOTER NAVIGATION ================= */}
      <footer className="csd-footer">
        <span className="eyebrow">Next Project</span>
        <Link to={`/work/content-strategy-and-marketing/${project.nextSlug}`}>
          {project.nextName}
        </Link>
      </footer>
    </div>
  );
}
