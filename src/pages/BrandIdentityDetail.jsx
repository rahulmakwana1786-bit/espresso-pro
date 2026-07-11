import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../assets/portfolio/branding.png";
import img2 from "../assets/portfolio/atelier_nora.png";
import img3 from "../assets/portfolio/halo_wear.png";
import img4 from "../assets/portfolio/lucent_lab.png";
import img5 from "../assets/portfolio/sonder_goods.png";

gsap.registerPlugin(ScrollTrigger);

export default function BrandIdentityDetail() {
  const containerRef = useRef(null);

  const parts = [
    {
      title: "Logo & Mark Design",
      desc: "We engineer precision vector marks that act as the cornerstone of your brand identity. Clean, scalable, and instantly recognizable across all mediums.",
      image: img1,
      tag: "01"
    },
    {
      title: "Color Architecture",
      desc: "Curating custom palettes that evoke the exact emotional resonance required. From deep earthen tones to high-contrast neon accents, we define your visual mood.",
      image: img2,
      tag: "02"
    },
    {
      title: "Typography Systems",
      desc: "Selecting and pairing typefaces that speak your brand's language. We establish typographic hierarchies that balance aesthetic elegance with supreme readability.",
      image: img3,
      tag: "03"
    },
    {
      title: "Visual Mockups",
      desc: "Translating flat designs into real-world applications. We create high-fidelity mockups of stationery, packaging, and digital interfaces to visualize the final outcome.",
      image: img4,
      tag: "04"
    },
    {
      title: "Brand Guidelines",
      desc: "Consolidating all rules into a definitive premium style guide. Ensuring 100% consistency in how your brand is deployed by internal teams and external partners.",
      image: img5,
      tag: "05"
    }
  ];

  useEffect(() => {
    document.body.classList.add("gothic-only-page");

    let ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out"
      });

      gsap.utils.toArray(".part-section").forEach((section) => {
        gsap.from(section, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        });
      });
    }, containerRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    window.scrollTo(0, 0);

    return () => {
      document.body.classList.remove("gothic-only-page");
      clearTimeout(timer);
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen bg-[#fbf8f3] text-[#291b03] font-gothic selection:bg-[#cca027]/30 relative pt-[120px] lg:pt-[150px] pb-24"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(200,155,94,0.05)_0%,transparent_70%)] rounded-full blur-[100px]"></div>
      </div>

      <main className="w-full max-w-[90%] lg:max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-20 lg:mb-32 text-center flex flex-col items-center">
          <Link
            to="/work/branding-and-creative-solutions"
            className="text-[#666] text-xs tracking-[0.2em] uppercase hover:text-[#cca027] transition-colors flex items-center gap-3 mb-8 group hero-text"
          >
            <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> BACK TO BRANDING
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#cca027]/10 border border-[#cca027]/20 mb-6 backdrop-blur-sm hero-text">
            <span className="text-[#cca027] text-[10px] font-bold tracking-widest uppercase">ESP CAPABILITY SHOWCASE</span>
          </div>
          <h1 className="hero-text font-black text-5xl md:text-6xl lg:text-7xl text-[#cca027] leading-tight tracking-tighter mb-6 uppercase">
            Brand Identity<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C89B5E] to-[#b08810]">Designing</span>
          </h1>
          <p className="hero-text text-[#291b03] text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            A comprehensive 5-part approach to establishing market authority through precision-crafted visual identity systems.
          </p>
        </div>

        {/* 5 Parts Layout */}
        <div className="flex flex-col gap-24 lg:gap-40">
          {parts.map((part, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={part.tag} 
                className={`part-section flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-[60%]">
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[#cca027]/10 group">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                    <img 
                      src={part.image} 
                      alt={part.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-[40%] flex flex-col text-left">
                  <span className="text-[#cca027] text-6xl lg:text-8xl font-black opacity-20 mb-2 leading-none font-serif tracking-tighter">
                    {part.tag}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-black text-[#cca027] uppercase tracking-tight mb-6">
                    {part.title}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-[#cca027] to-transparent mb-8" />
                  <p className="text-[#291b03] text-lg leading-relaxed font-light">
                    {part.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-32 pt-20 border-t border-[#cca027]/10 flex flex-col items-center text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-[#cca027] uppercase tracking-tight mb-6">
            Ready to build your identity?
          </h2>
          <Link
            to="/contact"
            className="px-8 py-4 bg-[#cca027] text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300 rounded-full"
          >
            REQUEST A BRIEF
          </Link>
        </div>

      </main>
    </div>
  );
}


