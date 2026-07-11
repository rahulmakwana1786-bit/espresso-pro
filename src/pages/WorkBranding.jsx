import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const globalTheme = {
  accent: "#C89B5E", // Gold
  darkBg: "linear-gradient(to bottom, #2C1A12 0%, #0A0604 100%)", // Muted Brown to Dark Charcoal
  lightBg: "linear-gradient(to bottom, #43281C 0%, #0D0806 100%)", // Warm Copper Brown to Dark Charcoal
  borderColor: "rgba(200, 155, 94, 0.15)", // Gold border
};

export default function WorkBranding() {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // Brand Identity States
  const [identityTab, setIdentityTab] = useState("Logo Guide");
  
  // Animation States
  const [isPlaying, setIsPlaying] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(45);
  const animationFrameRef = useRef(null);

  // 3D Modeling States
  const [metallic, setMetallic] = useState(0.85);
  const [wireframeOpacity, setWireframeOpacity] = useState(30);
  const [lightPosition, setLightPosition] = useState(30);

  // Social Media states
  const [activeSlide, setActiveSlide] = useState(0);

  // Print Design States
  const [printMedium, setPrintMedium] = useState("Billboard");

  // Rotating animation loop for Product Animation Mockup
  useEffect(() => {
    const tick = () => {
      if (isPlaying) {
        setRotationAngle((prev) => (prev + 1) % 360);
      }
      animationFrameRef.current = requestAnimationFrame(tick);
    };
    animationFrameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [isPlaying]);

  useEffect(() => {
    document.body.classList.add("gothic-only-page");

    let ctx = gsap.context(() => {
      // Entrance animation for left sticky panel
      gsap.from(".left-sticky-content", {
        opacity: 0,
        x: -40,
        duration: 1.2,
        ease: "power3.out",
        clearProps: "transform",
      });

      // Stacked cards scroll triggers
      gsap.utils.toArray(".client-card").forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=5%",
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

  const capabilities = [
    {
      name: "Brand identity designing",
      deliverables: ["Monogram Logos", "Visual Standards", "Color Architecture"],
      stats: ["100% Vector", "Premium Style Guides"],
      desc: "We shape identity systems that translate your positioning into premium aesthetics. From precision-crafted vector marks to cohesive color palettes and layout standards, we design guidelines built to establish market authority.",
    },
    {
      name: "Products Animation",
      deliverables: ["Keyframe Renders", "Explainer Videos", "Looping Ads"],
      stats: ["Cinematic 4K", "2x Higher Retention"],
      desc: "Bring your product to life with smooth, high-fidelity motion graphics. We create product animations that showcase materials, internal mechanisms, and product packaging to grab attention and increase purchase intent.",
    },
    {
      name: "3D modeling",
      deliverables: ["Product Renders", "Packaging Wireframes", "Texturing"],
      stats: ["Photorealistic", "Complex Mesh Designs"],
      desc: "Turn drafts and packaging outlines into photorealistic 3D assets. We construct detailed wireframe models, map surface textures (brushed gold, frosted glass, matte paper), and set realistic studio lighting configurations.",
    },
    {
      name: "Social media designs",
      deliverables: ["Carousel Templates", "Launch Kits", "Visual Curation"],
      stats: ["+120% Engagement", "Consistent Brand Voice"],
      desc: "We build social templates that align with your premium brand. Our layouts keep your grid looking consistent and premium, turning fleeting impressions into long-term brand recall.",
    },
    {
      name: "Advertise & print design",
      deliverables: ["Out-of-Home Billboards", "Packaging Kits", "Magazines"],
      stats: ["Press-Ready DPI", "High-Impact Visuals"],
      desc: "Translating digital brand value to premium physical media. We deliver high-contrast billboard visual designs, custom product box packaging wraps, and catalog layout files engineered to look spectacular in physical spaces.",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen bg-[#fbf8f3] text-[#291b03] font-gothic selection:bg-[#B8734E]/30 relative pt-[120px] lg:pt-[150px]"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(200,155,94,0.04)_0%,transparent_70%)] rounded-full blur-[100px]"></div>
        <div className="fixed inset-0 opacity-[0.03] bg-[linear-gradient(rgba(200,155,94,1)_1px,transparent_1px),linear-gradient(90deg,rgba(200,155,94,1)_1px,transparent_1px)] [background-size:120px_120px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]"></div>
      </div>

      <main className="w-full max-w-[92%] lg:max-w-[95%] mx-auto px-4 lg:px-6 pt-12 pb-12 lg:pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">
          
          {/* Left Column: Sticky Title */}
          <div className="w-full lg:w-[42%] lg:sticky lg:top-[200px] h-fit left-sticky-content pb-8 lg:pb-12">
            <div className="flex flex-col items-start lg:min-h-[500px] lg:justify-center">
              <Link
                to="/work"
                className="text-[#A8A8A8] text-xs tracking-[0.2em] uppercase hover:text-[#B8734E] transition-colors flex items-center gap-3 mb-10 group"
              >
                <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> BACK TO WORK
              </Link>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B8734E]/10 border border-[#B8734E]/20 mb-6 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8734E] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8734E]"></span>
                </span>
                <span className="text-[#B8734E] text-xs font-semibold tracking-wider uppercase">Design & Identity</span>
              </div>

              <h1 className="font-gothic font-black text-4xl md:text-5xl lg:text-6xl text-[#cca027] leading-[1.1] tracking-tight cursor-default">
                Branding & Creative Solutions
              </h1>

              <div className="h-8 lg:h-12 shrink-0" />

              <p className="text-[#444] text-lg lg:text-xl leading-relaxed max-w-xl font-medium mb-10">
                A collection of branding and creative projects designed to strengthen brand presence, enhance perception, and support long-term business growth.
              </p>

              <div className="flex flex-col gap-3 w-full max-w-sm mt-4">
                {capabilities.map((cap, idx) => (
                  <button 
                    key={idx}
                    onClick={() => {
                        const el = document.getElementById(`capability-${idx}`);
                        if (el) {
                          const originalPos = el.style.position;
                          el.style.position = "static";
                          const targetY = el.getBoundingClientRect().top + window.scrollY - (window.innerWidth >= 1024 ? 200 : 160);
                          el.style.position = originalPos;

                          if (window.lenis) {
                            window.lenis.scrollTo(targetY, { duration: 1.2 });
                          } else {
                            window.scrollTo({ top: targetY, behavior: "smooth" });
                          }
                        }
                      }}
                    className={`text-left px-6 py-4 border rounded-xl text-sm transition-all duration-300 flex items-center justify-between group backdrop-blur-md
                      ${activeIndex === idx 
                        ? "border-[#B8734E] bg-[#B8734E]/20 text-[#291b03] shadow-[0_10px_20px_rgba(184,115,78,0.2)] scale-[1.02]"
                        : "border-white/10 bg-[#0a0604]/90 text-white hover:bg-[#B8734E]/20 hover:border-[#B8734E]/50 hover:text-white hover:scale-[1.03] hover:-translate-y-1 active:scale-95 hover:shadow-[0_15px_30px_rgba(184,115,78,0.15)]"
                      }`}
                  >
                    <span className="uppercase tracking-widest text-xs font-bold">{cap.name}</span>
                    <span className={`transition-all duration-300 ${activeIndex === idx ? "opacity-100 text-[#B8734E] translate-x-1" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-[#B8734E]"}`}>&rarr;</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 5 Stacked Interactive Capability Cards */}
          <div className="w-full lg:w-[53%] flex flex-col gap-12 lg:gap-24 pb-8 lg:pb-12 sub-cards-container relative">
            {capabilities.map((item, i) => {
              const isDark = i % 2 === 0;
              const bgGradient = isDark ? globalTheme.darkBg : globalTheme.lightBg;
              const borderColor = globalTheme.borderColor;

              return (
                <div
                  key={i}
                  id={`capability-${i}`}
                  onClick={i === 0 ? () => navigate("/work/branding-and-creative-solutions/identity-design") : undefined}
                  className={`client-card w-full rounded-2xl border p-6 lg:p-10 sticky top-[180px] lg:top-[220px] overflow-hidden min-h-[550px] lg:h-[calc(100vh-260px)] lg:min-h-[500px] flex flex-col justify-between ${i === 0 ? "cursor-pointer" : ""}`}
                  style={{
                    backgroundColor: "#ffffff",
                    borderColor: "rgba(0,0,0,0.05)",
                    boxShadow: `0 20px 50px rgba(0,0,0,0.05)`,
                    zIndex: i,
                  }}
                >
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px]"
                    style={{
                      background: `radial-gradient(ellipse, ${globalTheme.accent}40, transparent)`,
                    }}
                  ></div>

                  {/* Watermark Index */}
                  <div className="absolute right-6 top-4 text-7xl lg:text-9xl font-black select-none pointer-events-none opacity-20 font-gothic tracking-tighter" style={{ color: globalTheme.accent }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Top: Card Header info */}
                  <div className="flex justify-between items-start w-full relative z-10">
                    <div className="flex flex-col gap-1">
                      <h3 className="font-gothic text-2xl lg:text-3xl font-black tracking-tight text-[#cca027] uppercase leading-none mb-1">
                        {item.name}
                      </h3>
                      <span className="text-[10px] text-[#B8734E] font-bold tracking-widest uppercase">ESP BRANDING CAPABILITY</span>
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      {item.stats.map((stat, sIdx) => (
                        <span key={sIdx} className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border border-[#C89B5E]/30 bg-[#C89B5E]/5 text-[#cca027]">
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Middle Layout (Text left, interactive mockup right) */}
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-8 my-6 flex-1">
                    
                    {/* Left text portion */}
                    <div className="w-full md:w-[48%] flex flex-col gap-4">
                      <p className="text-sm lg:text-base text-[#666] leading-relaxed font-medium">
                        {item.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-2">
                        {item.deliverables.map((del, dIdx) => (
                          <span key={dIdx} className="text-[10px] px-2 py-0.5 rounded bg-black/5 text-[#333] border border-black/10 font-medium">
                            {del}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right portion: Custom Interactive Mockup (Square & blend background matching black) */}
                    <div className="w-full md:w-[48%] aspect-square rounded-2xl bg-[#030303] border border-white/5 relative overflow-hidden flex items-center justify-center p-4">
                      
                      {/* 1. BRAND IDENTITY DESIGNING: STYLE GUIDE TABS */}
                      {i === 0 && (
                        <div className="w-full h-full flex flex-col justify-between font-sans text-xs">
                          {/* Guide selection */}
                          <div className="flex gap-2 border-b border-white/10 pb-2 shrink-0">
                            {["Logo Guide", "Color Swatches", "Typography"].map((tab) => (
                              <button
                                key={tab}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIdentityTab(tab);
                                }}
                                className={`text-[9px] tracking-wider uppercase pb-1 border-b ${
                                  identityTab === tab ? "text-[#B8734E] border-[#B8734E]" : "text-white/80 border-transparent"
                                }`}
                              >
                                {tab.split(" ")[0]}
                              </button>
                            ))}
                          </div>

                          {/* Dynamic Swatch Content */}
                          <div className="flex-1 my-3 flex items-center justify-center bg-[#070504] border border-[#B8734E]/10 rounded-xl relative p-3">
                            {identityTab === "Logo Guide" && (
                              <div className="w-full h-full flex flex-col justify-center items-center relative">
                                <span className="absolute left-2 top-2 text-[7px] text-white/80 font-mono">VECTOR MONOGRAM MODEL</span>
                                {/* Monogram SVG layout */}
                                <svg className="w-16 h-16 text-[#B8734E]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  {/* Grid lines */}
                                  <line x1="10" y1="50" x2="90" y2="50" stroke="rgba(200, 155, 94, 0.15)" strokeWidth="0.5" />
                                  <line x1="50" y1="10" x2="50" y2="90" stroke="rgba(200, 155, 94, 0.15)" strokeWidth="0.5" />
                                  <circle cx="50" cy="50" r="35" stroke="rgba(200, 155, 94, 0.2)" strokeWidth="0.5" strokeDasharray="3 3" />
                                  
                                  {/* Elegant Monogram Monolith E */}
                                  <path d="M35 25H65M35 50H58M35 75H65M35 25V75" stroke="#C89B5E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                  
                                  {/* Intersection nodes */}
                                  <circle cx="35" cy="25" r="2" fill="#fff" />
                                  <circle cx="65" cy="25" r="2" fill="#fff" />
                                  <circle cx="35" cy="50" r="2" fill="#fff" />
                                  <circle cx="58" cy="50" r="2" fill="#fff" />
                                  <circle cx="35" cy="75" r="2" fill="#fff" />
                                  <circle cx="65" cy="75" r="2" fill="#fff" />
                                </svg>
                              </div>
                            )}

                            {identityTab === "Color Swatches" && (
                              <div className="w-full h-full flex flex-col justify-around">
                                <span className="text-[7px] text-white/80 font-mono">PRIMARY BRAND PALETTE</span>
                                <div className="grid grid-cols-2 gap-2">
                                  {[
                                    { hex: "#1F140E", name: "Espresso Dark" },
                                    { hex: "#B8734E", name: "Bronze Glow" },
                                    { hex: "#F5E6D3", name: "Cream Silk" },
                                    { hex: "#0D0D0D", name: "Charcoal Black" },
                                  ].map((swatch) => (
                                    <div
                                      key={swatch.hex}
                                      onClick={() => alert(`Copied hex: ${swatch.hex}`)}
                                      className="p-1.5 rounded-lg border border-white/5 bg-black/60 flex items-center gap-2 cursor-pointer hover:border-[#B8734E]"
                                    >
                                      <div className="w-4 h-4 rounded border border-white/10" style={{ backgroundColor: swatch.hex }} />
                                      <div className="text-[8px] leading-tight">
                                        <div className="font-bold text-white/80">{swatch.name}</div>
                                        <div className="text-white/80 font-mono">{swatch.hex}</div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {identityTab === "Typography" && (
                              <div className="w-full h-full flex flex-col justify-around text-left">
                                <span className="text-[7px] text-white/80 font-mono">TYPE CLASSIFICATION</span>
                                <div className="space-y-2">
                                  <div>
                                    <span className="text-[7px] text-[#B8734E] uppercase font-mono block">Primary Serif Header</span>
                                    <span className="text-sm font-serif text-white/80 block leading-none">Playfair Display</span>
                                  </div>
                                  <div>
                                    <span className="text-[7px] text-[#B8734E] uppercase font-mono block">Secondary Sans Body</span>
                                    <span className="text-xs font-sans font-bold text-white/80 block leading-none">Outfit Sans-Serif</span>
                                  </div>
                                  <div className="text-[8px] text-white/80 italic">
                                    "Visual branding guidelines deliver 100% uniformity across layouts."
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* 2. PRODUCTS ANIMATION: LOOP ROTATOR */}
                      {i === 1 && (
                        <div className="w-full h-full flex flex-col justify-between font-sans text-xs">
                          {/* Controller Header */}
                          <div className="flex justify-between items-center pb-2 border-b border-white/10 shrink-0">
                            <span className="text-[9px] tracking-wider uppercase text-white/80 font-bold">Anim Preview Loop</span>
                            <button
                              onClick={() => setIsPlaying(!isPlaying)}
                              className="px-2 py-0.5 rounded border border-[#C89B5E]/30 bg-[#C89B5E]/5 text-[8px] uppercase font-bold text-white/80"
                            >
                              {isPlaying ? "Pause ❚❚" : "Play ▶"}
                            </button>
                          </div>

                          {/* Animation space */}
                          <div className="flex-1 my-3 flex items-center justify-center bg-[#070504] border border-[#B8734E]/10 rounded-xl relative p-3">
                            {/* Rotating vector wireframe cylinder */}
                            <div
                              className="w-14 h-24 border border-[#C89B5E]/50 rounded-lg relative flex flex-col justify-between p-2"
                              style={{
                                transform: `rotateY(${rotationAngle}deg)`,
                                transformStyle: "preserve-3d",
                                perspective: "400px",
                                background: "radial-gradient(circle at center, #1b1410 0%, #030303 100%)",
                                boxShadow: "0 10px 20px rgba(0,0,0,0.5)",
                              }}
                            >
                              {/* Horizontal cylinder segment lines */}
                              <div className="absolute inset-x-0 top-[20%] h-[1px] bg-[#C89B5E]/30" />
                              <div className="absolute inset-x-0 top-[40%] h-[1px] bg-[#C89B5E]/30" />
                              <div className="absolute inset-x-0 top-[60%] h-[1px] bg-[#C89B5E]/30" />
                              <div className="absolute inset-x-0 top-[80%] h-[1px] bg-[#C89B5E]/30" />
                              
                              {/* Central axis line */}
                              <div className="absolute inset-y-0 left-1/2 w-[1px] bg-[#C89B5E]/20" />
                              
                              <span className="text-[6px] text-[#B8734E] text-center font-bold tracking-widest uppercase m-auto z-10">ESP 3D</span>
                            </div>

                            {/* Angle indicator overlay */}
                            <span className="absolute right-3 bottom-3 text-[7px] text-white/80 font-mono">Y-ROT: {rotationAngle}°</span>
                          </div>

                          {/* Scrub bar */}
                          <div className="flex flex-col gap-1 shrink-0">
                            <input
                              type="range"
                              min="0"
                              max="360"
                              value={rotationAngle}
                              onChange={(e) => {
                                setIsPlaying(false);
                                setRotationAngle(Number(e.target.value));
                              }}
                              className="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#B8734E]"
                            />
                            <div className="flex justify-between text-[7px] text-white/80 font-mono">
                              <span>0 SEC</span>
                              <span>PLAYBACK TIMELINE</span>
                              <span>10 SEC</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 3. 3D MODELING: WIREFRAME & GRADIENT LIGHT EDITOR */}
                      {i === 2 && (
                        <div className="w-full h-full flex flex-col justify-between font-sans text-xs">
                          <div className="flex justify-between items-center pb-2 border-b border-white/10 shrink-0">
                            <span className="text-[9px] tracking-wider uppercase text-white/80 font-bold">Mesh Renderer</span>
                            <span className="text-[8px] text-[#B8734E] font-mono">SHADERS ACTIVE</span>
                          </div>

                          {/* 3D Bottle canvas */}
                          <div className="flex-1 my-3 flex items-center justify-center bg-[#050505] border border-[#B8734E]/10 rounded-xl relative overflow-hidden">
                            {/* concentric wireframe mesh circles in background representing wireframe density */}
                            <div
                              className="absolute w-28 h-28 rounded-full border border-blue-500/10 flex items-center justify-center transition-opacity duration-300"
                              style={{ opacity: wireframeOpacity / 100 }}
                            >
                              <div className="w-20 h-20 rounded-full border border-blue-500/10 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full border border-blue-500/10"></div>
                              </div>
                            </div>

                            {/* Rendered Bottle */}
                            <div
                              className="w-12 h-24 rounded-2xl relative border flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-300"
                              style={{
                                borderColor: `rgba(200, 155, 94, ${0.1 + (100 - wireframeOpacity) / 150})`,
                                background: `radial-gradient(circle at ${lightPosition}% 30%, rgba(200, 155, 94, ${metallic}) 0%, #0c0806 80%)`,
                              }}
                            >
                              {/* Wireframe overlay lines */}
                              <div
                                className="absolute inset-0 flex flex-col justify-around items-center border-l border-r border-dashed border-[#C89B5E]/30 transition-opacity duration-300"
                                style={{ opacity: wireframeOpacity / 100 }}
                              >
                                <div className="w-full h-[1px] border-b border-dashed border-[#C89B5E]/30" />
                                <div className="w-full h-[1px] border-b border-dashed border-[#C89B5E]/30" />
                                <div className="w-full h-[1px] border-b border-dashed border-[#C89B5E]/30" />
                              </div>

                              <span className="text-[5px] text-white/50 text-center font-mono py-2 tracking-widest uppercase">M-01</span>
                            </div>
                          </div>

                          {/* Interactive Editor Sliders */}
                          <div className="space-y-1.5 shrink-0 pt-2 border-t border-white/5">
                            <div className="flex items-center justify-between text-[8px] text-white/80">
                              <span>Metallic Shader</span>
                              <input
                                type="range"
                                min="10"
                                max="95"
                                value={metallic * 100}
                                onChange={(e) => setMetallic(Number(e.target.value) / 100)}
                                className="w-2/3 h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#B8734E]"
                              />
                            </div>
                            <div className="flex items-center justify-between text-[8px] text-white/80">
                              <span>Light X-Pos</span>
                              <input
                                type="range"
                                min="10"
                                max="90"
                                value={lightPosition}
                                onChange={(e) => setLightPosition(Number(e.target.value))}
                                className="w-2/3 h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#B8734E]"
                              />
                            </div>
                            <div className="flex items-center justify-between text-[8px] text-white/80">
                              <span>Mesh Wireframe</span>
                              <input
                                type="range"
                                min="0"
                                max="100"
                                value={wireframeOpacity}
                                onChange={(e) => setWireframeOpacity(Number(e.target.value))}
                                className="w-2/3 h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#B8734E]"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 4. SOCIAL MEDIA DESIGNS: SWIPEABLE CAROUSEL */}
                      {i === 3 && (
                        <div className="w-full h-full flex flex-col justify-between font-sans text-xs">
                          {/* Post Header */}
                          <div className="flex justify-between items-center pb-2 border-b border-white/10 shrink-0">
                            <span className="text-[9px] tracking-wider uppercase text-white/80 font-bold">Instagram Preview</span>
                            <span className="text-[8px] text-[#B8734E] font-mono">Slide {activeSlide + 1} of 3</span>
                          </div>

                          {/* Carousel viewport */}
                          <div className="flex-1 my-3 flex items-center justify-center relative bg-gradient-to-tr from-[#0b0806] to-[#040404] border border-[#B8734E]/10 rounded-xl p-4 overflow-hidden">
                            {/* Slide Content */}
                            <div className="text-center space-y-3 max-w-[90%]">
                              {activeSlide === 0 && (
                                <div className="space-y-2">
                                  <span className="text-[7px] text-[#B8734E] uppercase tracking-[0.3em] font-bold block">LAUNCH CARD</span>
                                  <h4 className="text-lg font-serif text-[#cca027] leading-tight font-black"> 
                                  </h4>
                                  <p className="text-[9px] text-white/80">Swipe to discover our visual creation methodology.</p>
                                </div>
                              )}
                              {activeSlide === 1 && (
                                <div className="space-y-2">
                                  <span className="text-[7px] text-[#B8734E] uppercase tracking-[0.3em] font-bold block">OUR FORMULA</span>
                                  <h4 className="text-lg font-serif text-[#cca027] leading-tight font-black">
                                    Aesthetics Meet Performance.
                                  </h4>
                                  <p className="text-[9px] text-white/80">Every graphic is built to elevate trust and double conversions.</p>
                                </div>
                              )}
                              {activeSlide === 2 && (
                                <div className="space-y-2">
                                  <span className="text-[7px] text-[#B8734E] uppercase tracking-[0.3em] font-bold block">PARTNER WITH US</span>
                                  <h4 className="text-lg font-serif text-[#cca027] leading-tight font-black">
                                    Let's Get Started.
                                  </h4>
                                  <p className="text-[9px] text-white/80">Claim your custom-branded strategy audit in under 60 seconds.</p>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Carousel Navigation */}
                          <div className="flex justify-between items-center shrink-0 pt-1 border-t border-white/5">
                            <button
                              onClick={() => setActiveSlide((prev) => (prev - 1 + 3) % 3)}
                              className="text-[9px] text-white/80 hover:text-white/80 uppercase font-bold"
                            >
                              &larr; Prev
                            </button>
                            <div className="flex gap-1.5">
                              {[0, 1, 2].map((idx) => (
                                <div
                                  key={idx}
                                  className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                                  style={{
                                    backgroundColor: activeSlide === idx ? "#C89B5E" : "rgba(255,255,255,0.15)",
                                    transform: activeSlide === idx ? "scale(1.2)" : "none",
                                  }}
                                />
                              ))}
                            </div>
                            <button
                              onClick={() => setActiveSlide((prev) => (prev + 1) % 3)}
                              className="text-[9px] text-white/80 hover:text-white/80 uppercase font-bold"
                            >
                              Next &rarr;
                            </button>
                          </div>
                        </div>
                      )}

                      {/* 5. ADVERTISE & PRINT DESIGN: BILLBOARD / MAGAZINE perspective */}
                      {i === 4 && (
                        <div className="w-full h-full flex flex-col justify-between font-sans text-xs">
                          {/* Medium selection tabs */}
                          <div className="flex gap-2 border-b border-white/10 pb-2 shrink-0">
                            {["Billboard", "Magazine", "Package Box"].map((med) => (
                              <button
                                key={med}
                                onClick={() => setPrintMedium(med)}
                                className={`text-[9px] tracking-wider uppercase pb-1 border-b ${
                                  printMedium === med ? "text-[#B8734E] border-[#B8734E]" : "text-white/80 border-transparent"
                                }`}
                              >
                                {med.split(" ")[0]}
                              </button>
                            ))}
                          </div>

                          {/* Print perspective canvas */}
                          <div className="flex-1 my-3 flex items-center justify-center bg-[#070504] border border-[#B8734E]/10 rounded-xl relative p-3 overflow-hidden">
                            {printMedium === "Billboard" && (
                              <div className="w-full h-full flex flex-col justify-between relative">
                                <span className="text-[7px] text-white/80 font-mono">OUTDOOR BILLBOARD SIMULATION</span>
                                {/* Billboard Frame */}
                                <div className="w-11/12 h-2/3 m-auto border border-zinc-700 bg-zinc-900 rounded relative overflow-hidden flex flex-col justify-end p-2 shadow-inner">
                                  {/* Advertising banner inner */}
                                  <div className="absolute inset-1.5 bg-gradient-to-tr from-[#120B08] to-[#251811] border border-[#B8734E]/20 rounded flex flex-col justify-center items-center p-2">
                                    <h5 className="text-[10px] font-serif font-black text-center text-[#cca027] tracking-wide uppercase leading-tight">
                                      THE ESPRESSO MEDIA
                                    </h5>
                                    <p className="text-[6px] text-[#B8734E] tracking-widest uppercase mt-0.5">NOW IN CHENNAI & HYDERABAD</p>
                                  </div>
                                  {/* Metal supports */}
                                  <div className="absolute bottom-0 left-[20%] w-0.5 h-1.5 bg-zinc-500" />
                                  <div className="absolute bottom-0 right-[20%] w-0.5 h-1.5 bg-zinc-500" />
                                </div>
                              </div>
                            )}

                            {printMedium === "Magazine" && (
                              <div className="w-full h-full flex flex-col justify-between text-left">
                                <span className="text-[7px] text-white/80 font-mono">EDITORIAL DOUBLE PAGE SPREAD</span>
                                <div className="w-full h-3/4 border border-zinc-800 bg-[#030303] rounded-lg p-2 flex justify-between gap-2 shadow-2xl relative">
                                  {/* Magazine Spine */}
                                  <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-zinc-800" />
                                  
                                  {/* Left page */}
                                  <div className="w-[47%] flex flex-col justify-between py-1">
                                    <div className="w-full h-6 bg-zinc-900 border border-white/5 rounded flex items-center justify-center">
                                      <span className="text-[5px] text-[#B8734E] tracking-widest font-black uppercase">Editorial</span>
                                    </div>
                                    <div className="space-y-0.5">
                                      <div className="w-full h-1 bg-zinc-800 rounded-sm" />
                                      <div className="w-3/4 h-1 bg-zinc-800 rounded-sm" />
                                      <div className="w-full h-1 bg-zinc-800 rounded-sm" />
                                    </div>
                                  </div>

                                  {/* Right page */}
                                  <div className="w-[47%] flex flex-col justify-between py-1 text-right">
                                    <div className="space-y-1">
                                      <div className="text-[8px] font-serif font-bold text-white/80 leading-none">Luxury Living</div>
                                      <div className="w-10/12 h-1 bg-zinc-800 rounded-sm ml-auto" />
                                    </div>
                                    <span className="text-[5px] text-white/80 block">Page 18</span>
                                  </div>
                                </div>
                              </div>
                            )}

                            {printMedium === "Package Box" && (
                              <div className="w-full h-full flex flex-col justify-between">
                                <span className="text-[7px] text-white/80 font-mono">PACKAGING DESIGN DIELINE PREVIEW</span>
                                {/* Dieline layout */}
                                <div className="w-10/12 h-3/4 m-auto border border-dashed border-blue-500/40 relative flex items-center justify-center p-2">
                                  {/* Box silhouette */}
                                  <div className="w-14 h-14 bg-zinc-950 border border-[#B8734E]/30 relative flex flex-col justify-center items-center shadow-lg">
                                    {/* Folding flaps */}
                                    <div className="absolute -top-3 left-1 w-12 h-3 border-t border-l border-r border-[#B8734E]/20 bg-zinc-950/40 border-dashed" />
                                    <div className="absolute -bottom-3 left-1 w-12 h-3 border-b border-l border-r border-[#B8734E]/20 bg-zinc-950/40 border-dashed" />
                                    
                                    <span className="text-[6px] text-white/40 tracking-wider">BOX FRONT</span>
                                    <span className="text-[5px] text-[#B8734E] font-bold">50mm x 50mm</span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                    </div>

                  </div>

                  {/* Bottom: Card Footer info */}
                  <div className="flex justify-between items-center w-full relative z-10 pt-4 border-t border-black/5 shrink-0">
                    <span className="text-[10px] text-black/40 font-sans tracking-wide hidden md:block">THE ESPRESSO MEDIA &bull; CREATIVE SERVICES</span>
                    <div className="flex items-center gap-6 ml-auto">
                      {i === 0 && (
                        <Link
                          onClick={(e) => e.stopPropagation()}
                          to="/work/branding-and-creative-solutions/identity-design"
                          className="text-[10px] text-[#B8734E] hover:text-[#111] font-bold tracking-widest uppercase flex items-center gap-1 transition-colors group/view"
                        >
                          VIEW PROJECTS
                          <span className="group-hover/view:translate-x-1.5 transition-transform duration-300">&rarr;</span>
                        </Link>
                      )}
                      <a
                        onClick={(e) => e.stopPropagation()}
                        href="/#contact"
                        className="text-[10px] text-[#111] hover:text-[#B8734E] font-bold tracking-widest uppercase flex items-center gap-1 transition-colors group/link"
                      >
                        REQUEST BRIEF 
                        <span className="group-hover/link:translate-x-1.5 transition-transform duration-300">&rarr;</span>
                      </a>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </main>

      <style>{`
        .client-card {
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.4s ease, box-shadow 0.4s ease !important;
        }
        .client-card:hover {
          transform: scale(1.025) !important;
          border-color: rgba(200, 155, 94, 0.4) !important;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.7) !important;
        }
        .left-sticky-content {
          backface-visibility: hidden;
        }
      `}</style>

    </div>
  );
}

