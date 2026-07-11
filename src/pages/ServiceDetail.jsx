import { useParams, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { services } from "../data/services";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

// Global brown & light-brown luxury theme matching the brand colors exactly
const globalTheme = {
  accent: "#C89B5E", // Luxury Gold/Bronze accent
  darkBg: "linear-gradient(to bottom, #2C1A12 0%, #0A0604 100%)", // Muted Brown to Dark Charcoal
  lightBg: "linear-gradient(to bottom, #43281C 0%, #0D0806 100%)", // Warm Copper Brown to Dark Charcoal
  borderColor: "rgba(200, 155, 94, 0.15)", // Subtle gold border for cards
};

const serviceFaqs = {
  "content-strategy-and-marketing": [
    {
      q: "How many social media posts do I need per month to see real growth?",
      a: "Consistency beats volume. On Instagram, 3-6 posts per week (12-24 per month) plus daily Stories delivers better results than posting 7 times in one week and then going silent."
    },
    {
      q: "Which social media platform is best for business in 2026?",
      a: "The right platform depends on your audience, buying behaviour, and business model. Instagram and YouTube are often strong channels for consumer-focused brands, while Facebook remains effective for broader demographics and lead generation. LinkedIn is typically the strongest platform for B2B and professional services, and WhatsApp can be highly effective for nurturing and re-engaging existing audiences. At The Espresso Media, we focus on identifying the highest-leverage channels first—mastering 1–2 platforms before expanding strategically."
    },
    {
      q: "How does The Espresso Media create a month’s worth of content in a single day?",
      a: "Our team specialises in structured batch content production designed to maximise output without compromising quality. Every content day is planned in advance from strategy and scripting to shot planning and production flow allowing us to efficiently capture and organise a month’s worth of content in a single shoot day.\n\nFor brands that prefer not to film, we create content using AI-assisted visuals, stock assets, motion design, and creative editing techniques to maintain consistent output without requiring on-camera production. This allows brands to stay visible with high-quality content while reducing time investment and operational complexity."
    },
    {
      q: "What is a realistic budget to start running Meta or Google Ads?",
      a: "For Meta Ads (Facebook + Instagram), a minimum effective test budget is Rs 10,000-Rs 15,000 per month for lead generation campaigns targeting a single city. Below this, the algorithm does not have enough data to optimize. For e-commerce or national campaigns, Rs 25,000-Rs 50,000 per month is the entry point for meaningful results. Google Search Ads for high-intent keywords in competitive industries (real estate, healthcare, education) require Rs 20,000-Rs 50,000 per month minimum. Our management fee is separate from your ad spend."
    },
    {
      q: "What does 5.2x ROAS mean and is that achievable for my business?",
      a: "ROAS (Return on Ad Spend) of 5.2x means for every Rs 1 spent on ads, you generate Rs 5.20 in revenue, a 420% return. This is our average across all managed accounts. Your ROAS will depend on your product/service margins, audience size, ad creative quality, and landing page conversion rate. E-commerce brands typically see 4-8x ROAS with well-optimised campaigns. Lead generation businesses (real estate, education, healthcare) measure success by Cost Per Lead (CPL) rather than ROAS."
    },
    {
      q: "How long before I see results from my ad campaigns?",
      a: "Meta Ads have a learning phase of 7-14 days per ad set during which performance is volatile. Plan for the first month to be a data-collection period: we will identify your best-performing creatives, audiences, and offers. Month 2 is when we scale what works and dramatically improve CPL."
    }
  ],
  "branding-and-creative-solutions": [
    {
      q: "How many logo concepts do I receive and how many revisions are included?",
      a: "Each brand identity project includes 2–3 strategically developed creative directions built around your positioning, audience, and approved brief. Once a direction is selected, two structured revision rounds are included to refine and finalise the identity system while keeping the process focused and intentional. Additional revision rounds are available as an optional add-on at an additional cost.\n\nFinal delivery goes beyond the logo itself and includes a complete identity package with all required brand assets and usage files. This includes logo formats for digital and print (SVG, PNG, JPG, PDF), colour variations, and a brand guidelines document covering visual application, clear space, minimum sizing, typography, and colour specifications."
    },
    {
      q: "What is the turnaround time for ad creatives?",
      a: "We operate with a structured production workflow designed to balance speed with quality. Retainer projects are typically delivered within 5–7 business days from approved brief to final assets, with priority support available for high-urgency campaigns."
    },
    {
      q: "Can you create a full brand identity if I am starting a new business?",
      a: "Yes, building complete brand identities for new businesses is one of our core offerings. We create strategic identity systems that establish how your brand looks, communicates, and appears across every platform from day one.\n\nOur Branding Kit includes logo design, visual identity development, typography, supporting brand assets, and detailed brand guidelines—giving you a complete foundation to launch consistently and scale confidently."
    }
  ],
  "commercial-production": [
    {
      q: "Do you handle the entire production process?",
      a: "Yes. We manage the complete process from creative direction, concept development, scripting, production planning, shoot execution, editing, and final delivery ensuring a streamlined experience from start to finish."
    },
    {
      q: "How long does a commercial production project take?",
      a: "Timelines vary depending on production scale, locations, and deliverables. Smaller productions can move quickly, while larger campaigns require additional planning, shooting, and post-production time."
    },
    {
      q: "Can you create content for ads and social media from the same shoot?",
      a: "Absolutely. We structure productions to maximise output, allowing one shoot to generate assets across advertising, social media, website use, and ongoing content requirements."
    },
    {
      q: "How does The Espresso Media create a month’s worth of content in a single day?",
      a: "Our team specialises in structured batch content production designed to maximise output without compromising quality. Every content day is planned in advance from strategy and scripting to shot planning and production flow allowing us to efficiently capture and organise a month’s worth of content in a single shoot day.\n\nFor brands that prefer not to film, we create content using AI-assisted visuals, stock assets, motion design, and creative editing techniques to maintain consistent output without requiring on-camera production. This allows brands to stay visible with high-quality content while reducing time investment and operational complexity."
    }
  ],
  "web-development": [
    {
      q: "How long does it take to build a website?",
      a: "Website timelines depend on scope, functionality, and content readiness. Standard business websites are typically completed within 2–3 weeks from approved brief and project confirmation. E-commerce websites and more advanced builds require additional planning and development time.\n\nEvery website follows our structured delivery process: discovery and planning, wireframes and design, development, testing and optimisation, followed by launch and handover—ensuring quality and performance at every stage."
    },
    {
      q: "Will my website be optimized for SEO from the start?",
      a: "Yes, SEO fundamentals are built into every website from day one. We structure websites with search performance in mind, including technical setup, content hierarchy, metadata, sitemap configuration, analytics integration, structured data, image optimisation, and performance improvements to support discoverability and long-term growth.\n\nOur goal is to launch websites that are not only visually strong but technically prepared to perform."
    },
    {
      q: "What happens after my website launches? Do you offer maintenance?",
      a: "Yes. Every website includes an initial post-launch support period to cover adjustments, fixes, and final refinements after going live. We also offer ongoing maintenance plans that include updates, backups, monitoring, security management, and routine content support to keep your website running smoothly as your business grows.\n\nFor clients who prefer a hands-off experience, our team can continue managing the website after launch through a dedicated support plan."
    }
  ],
  "ai-automation": [
    {
      q: "Will the AI chatbot sound like a real person?",
      a: "Yes. We configure every chatbot to match your brand voice — so every conversation feels natural, helpful, and on brand. Your audience won't feel like they're talking to a machine."
    },
    {
      q: "How quickly can the automation be set up?",
      a: "Most WhatsApp automation systems and chatbots are up and running within 7 to 10 business days. The timeline depends on the complexity of your flows and the number of integrations required — we'll give you a clear timeline before we begin."
    },
    {
      q: "What kind of businesses is this suited for?",
      a: "Any business that receives leads, enquiries, or customer messages. Whether you're a retail brand, a service business, a clinic, or a real estate company — if you're getting messages and losing leads to slow response times, this system is built for you."
    },
    {
      q: "Can the chatbot book appointments directly?",
      a: "Yes. We configure your chatbot to handle the full booking flow — from availability checking to confirmation — so your calendar fills itself without any manual back and forth."
    },
    {
      q: "What happens when a lead needs a human?",
      a: "The chatbot is smart enough to know its limits. When a conversation needs a personal touch, it hands off to your team instantly — with the full conversation history so nothing gets repeated or missed."
    }
  ]
};

const serviceBoxes = {
  "content-strategy-and-marketing": {
    badge: "Limited Spots Available",
    title: "Ready to Turn Your Social Media Into Your Best Sales Channel?",
    desc: "Get a free audit, we'll study your profiles and show you precisely what's missing and how to turn it into real revenue",
    btn1Text: "Claim Your Free Audit",
    btn1Url: "/#contact",
    btn2Text: "Contact Our Team",
    btn2Url: "mailto:info@espressomedia.in",
    stats: [
      { value: "150+", label: "Brands Scaled" },
      { value: "5x", label: "Average ROI" },
      { value: "99%", label: "Client Retain" }
    ]
  },
  "branding-and-creative-solutions": {
    badge: "Exclusive Brand Solutions",
    title: "Let's Build Something Worth Talking About.",
    desc: "Share your brief or jump on a free discovery call; we'll scope your project and have a first concept ready within 48 hours.",
    btn1Text: " Let's Get Started ",
    btn1Url: "/#contact",
    btn2Text: "Contact Our Team",
    btn2Url: "mailto:info@espressomedia.in",
    stats: [
      { value: "150+", label: "Brands Scaled" },
      { value: "5x", label: "Average ROI" },
      { value: "99%", label: "Client Retain" }
    ]
  },
  "commercial-production": {
    badge: "Cinematic Quality Shoots",
    title: "Ready to Bring Your Vision to Life?",
    desc: "Share your brief and we'll scope everything out from there.",
    btn1Text: "Start the Conversation",
    btn1Url: "/#contact",
    btn2Text: "Contact Our Team",
    btn2Url: "mailto:info@espressomedia.in",
    stats: [
      { value: "150+", label: "Brands Scaled" },
      { value: "5x", label: "Average ROI" },
      { value: "99%", label: "Client Retain" }
    ]
  },
  "web-development": {
    badge: "Performant Custom Code",
    title: "Ready to Bring Your Vision to Life?",
    desc: "Share your brief and we'll scope everything out from there",
    btn1Text: "Start the Conversation",
    btn1Url: "/#contact",
    btn2Text: "Contact Our Team",
    btn2Url: "mailto:info@espressomedia.in",
    stats: [
      { value: "150+", label: "Brands Scaled" },
      { value: "5x", label: "Average ROI" },
      { value: "99%", label: "Client Retain" }
    ]
  },
  "ai-automation": {
    badge: "24/7 Autopilot Leads",
    title: "Imagine Waking Up to Qualified Leads Every Morning",
    desc: "Book a 30-minute strategy session,  we'll map your current gaps and show you exactly what a 90-day automation plan looks like for your business",
    btn1Text: "Claim Your Free Blueprint",
    btn1Url: "/#contact",
    btn2Text: "Contact Our Team",
    btn2Url: "mailto:info@espressomedia.in",
    stats: [
     { value: "150+", label: "Brands Scaled" },
      { value: "5x", label: "Average ROI" },
      { value: "99%", label: "Client Retain" }
    ]
  }
};

const serviceResults = {
  "content-strategy-and-marketing": {
    subtitle: "THE RESULT :",
    textHtml: (
      <>
        A clear and consistent growth system where{" "}
        <span className="text-[#B8734E] not-italic font-normal">every piece of content</span> and{" "}
        <span className="text-[#B8734E] not-italic font-normal">every marketing effort</span> works toward{" "}
        <span className="bg-gradient-to-r from-[#B8734E] via-[#C08860] to-[#8a563a] bg-clip-text text-transparent not-italic font-bold">
          building brand visibility
        </span>,{" "}
        <span className="bg-gradient-to-r from-[#B8734E] via-[#C08860] to-[#8a563a] bg-clip-text text-transparent not-italic font-bold">
          attracting higher-quality sales
        </span>, and{" "}
        <span className="bg-gradient-to-r from-[#B8734E] via-[#C08860] to-[#8a563a] bg-clip-text text-transparent not-italic font-bold">
          driving measurable business growth.
        </span>
      </>
    )
  },
  "branding-and-creative-solutions": {
    subtitle: "THE RESULT :",
    textHtml: (
      <>
        A premium and unforgettable brand identity where{" "}
        <span className="text-[#B8734E] not-italic font-normal">every visual asset</span> and{" "}
        <span className="text-[#B8734E] not-italic font-normal">design element</span> works toward{" "}
        <span className="bg-gradient-to-r from-[#B8734E] via-[#C08860] to-[#8a563a] bg-clip-text text-transparent not-italic font-bold">
          establishing market authority
        </span>,{" "}
        <span className="bg-gradient-to-r from-[#B8734E] via-[#C08860] to-[#8a563a] bg-clip-text text-transparent not-italic font-bold">
          increasing brand recall by 2x
        </span>, and{" "}
        <span className="bg-gradient-to-r from-[#B8734E] via-[#C08860] to-[#8a563a] bg-clip-text text-transparent not-italic font-bold">
          positioning your business at the top.
        </span>
      </>
    )
  },
  "commercial-production": {
    subtitle: "THE RESULT :",
    textHtml: (
      <>
        A cinematic and emotionally resonant visual identity where{" "}
        <span className="text-[#B8734E] not-italic font-normal">every frame</span> and{" "}
        <span className="text-[#B8734E] not-italic font-normal">corporate production</span> works toward{" "}
        <span className="bg-gradient-to-r from-[#B8734E] via-[#C08860] to-[#8a563a] bg-clip-text text-transparent not-italic font-bold">
          capturing customer attention
        </span>,{" "}
        <span className="bg-gradient-to-r from-[#B8734E] via-[#C08860] to-[#8a563a] bg-clip-text text-transparent not-italic font-bold">
          amplifying your brand story
        </span>, and{" "}
        <span className="bg-gradient-to-r from-[#B8734E] via-[#C08860] to-[#8a563a] bg-clip-text text-transparent not-italic font-bold">
          turning viewers into loyal advocates.
        </span>
      </>
    )
  },
  "web-development": {
    subtitle: "THE RESULT :",
    textHtml: (
      <>
        A high-performing and conversion-optimized digital presence where{" "}
        <span className="text-[#B8734E] not-italic font-normal">every landing page</span> and{" "}
        <span className="text-[#B8734E] not-italic font-normal">technical setup</span> works toward{" "}
        <span className="bg-gradient-to-r from-[#B8734E] via-[#C08860] to-[#8a563a] bg-clip-text text-transparent not-italic font-bold">
          doubling loading speeds
        </span>,{" "}
        <span className="bg-gradient-to-r from-[#B8734E] via-[#C08860] to-[#8a563a] bg-clip-text text-transparent not-italic font-bold">
          ranking #1 on Google search
        </span>, and{" "}
        <span className="bg-gradient-to-r from-[#B8734E] via-[#C08860] to-[#8a563a] bg-clip-text text-transparent not-italic font-bold">
          converting traffic into revenue.
        </span>
      </>
    )
  },
  "ai-automation": {
    subtitle: "THE RESULT :",
    textHtml: (
      <>
        An efficient and frictionless automation system where{" "}
        <span className="text-[#B8734E] not-italic font-normal">every AI chatbot</span> and{" "}
        <span className="text-[#B8734E] not-italic font-normal">CRM integration</span> works toward{" "}
        <span className="bg-gradient-to-r from-[#B8734E] via-[#C08860] to-[#8a563a] bg-clip-text text-transparent not-italic font-bold">
          qualifying leads 24/7
        </span>,{" "}
        <span className="bg-gradient-to-r from-[#B8734E] via-[#C08860] to-[#8a563a] bg-clip-text text-transparent not-italic font-bold">
          reducing response times to &lt;60s
        </span>, and{" "}
        <span className="bg-gradient-to-r from-[#B8734E] via-[#C08860] to-[#8a563a] bg-clip-text text-transparent not-italic font-bold">
          booking meetings on autopilot.
        </span>
      </>
    )
  }
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const containerRef = useRef(null);
  
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const currentFaqs = serviceFaqs[slug] || [];
  const boxData = serviceBoxes[slug] || null;
  const currentResult = serviceResults[slug] || null;

  useEffect(() => {
    document.body.classList.add("gothic-only-page");

    let ctx = gsap.context(() => {
      // --- Page Load & Entrance Animations ---
      gsap.from(".left-sticky-content", {
        opacity: 0,
        x: -40,
        duration: 1.2,
        ease: "power3.out",
        clearProps: "transform",
      });

      // Animate each card individually as it enters the viewport
      gsap.utils.toArray(".sub-card").forEach((card) => {
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

    // Refresh ScrollTrigger offsets after a short delay for dynamic DOM height updates
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    // Scroll to top when changing service
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
  }, [slug, service]);

  if (!service) {
    return (
      <section className="w-full min-h-screen bg-[#fbf8f3] text-[#291b03] pt-32 pb-20 flex flex-col items-center justify-center font-gothic">
        <h2 className="font-bold text-4xl mb-4 text-[#B8734E]">
          Service Not Found
        </h2>
        <Link
          to="/"
          className="px-6 py-3 rounded-full bg-[#B8734E]/10 border border-[#B8734E]/30 text-[#B8734E] hover:bg-[#B8734E]/20 transition-colors"
        >
          Back to Home
        </Link>
      </section>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen bg-[#fbf8f3] text-[#291b03] font-gothic selection:bg-[#B8734E]/30 relative pt-[120px] lg:pt-[150px]"
    >
      {/* Background noise and gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Radial Gold Glow */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(200,155,94,0.05)_0%,transparent_70%)] rounded-full blur-[100px]"></div>

        {/* Luxury Page Grid */}
        <div className="fixed inset-0 opacity-[0.04] bg-[linear-gradient(rgba(200,155,94,1)_1px,transparent_1px),linear-gradient(90deg,rgba(200,155,94,1)_1px,transparent_1px)] [background-size:120px_120px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]"></div>

        {/* Noise Texture */}
        <div
          className="fixed inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Horizontal Sub-Navigation Header Bar */}
      <div className="w-full py-4 fixed top-32 lg:top-[132px] z-40 flex justify-center bg-transparent pointer-events-none">
        <div className="max-w-[95%] mx-auto px-4 md:px-6 pointer-events-auto overflow-x-auto scrollbar-none rounded-full border border-gray-200 bg-white/60 backdrop-blur-md shadow-[0_15px_50px_rgba(0,0,0,0.1)] py-2">
          <div className="flex items-center justify-start lg:justify-center gap-2 md:gap-4 whitespace-nowrap">
            {services.map((s) => {
              const isActive = s.slug === slug;
              return (
                <Link
                  key={s.slug}
                  to={`/service/${s.slug}`}
                  className={`px-5 py-2 text-[10px] md:text-[11px] tracking-[0.2em] uppercase transition-all duration-300 font-bold rounded-full hover:scale-[1.03] ${
                    isActive
                      ? "text-[#291b03] bg-[#D4AF37] shadow-lg"
                      : "text-[#291b03]/60 hover:text-[#291b03] hover:bg-[#D4AF37]/10"
                  }`}
                >
                  {s.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <main className="w-full max-w-[92%] lg:max-w-[95%] mx-auto px-4 lg:px-6 pt-[120px] pb-12 lg:pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">
          <div className="w-full lg:w-[47%] lg:sticky lg:top-[220px] h-fit left-sticky-content pb-8 lg:pb-12">
            <div className="flex flex-col items-start lg:min-h-[460px] lg:justify-center">
              <Link
                to="/#services"
                className="text-[#A8A8A8] text-xs tracking-[0.2em] uppercase hover:text-[#B8734E] transition-colors flex items-center gap-3 mb-4 group"
              >
                <span className="group-hover:-translate-x-1 transition-transform">
                  &larr;
                </span>{" "}
                ALL SERVICES
              </Link>

              <h1 className="font-gothic font-black text-4xl md:text-5xl lg:text-6xl text-[#cca027] leading-[1.1] tracking-tight transition-transform duration-500 hover:scale-[1.02] origin-left block cursor-default">
                {service.title}
              </h1>

              <div className="h-4 lg:h-6 shrink-0" />

              <p className="text-[#291b03] text-lg lg:text-xl leading-relaxed max-w-2xl lg:max-w-3xl font-medium mb-6 opacity-80">
                {service.description}
              </p>

              {service.subItems && service.subItems.length > 0 && (
                <div className="flex flex-col gap-2 w-full max-w-sm mb-6">
                  {service.subItems.map((cap, idx) => {
                    const isActive = activeIndex === idx;
                    return (
                      <button 
                        key={idx}
                        onClick={() => {
                          const el = document.getElementById(`capability-${idx}`);
                          if (el) {
                            const originalPos = el.style.position;
                            el.style.position = "static";
                            const targetY = el.getBoundingClientRect().top + window.scrollY - (window.innerWidth >= 1024 ? 280 : 220);
                            el.style.position = originalPos;

                            if (window.lenis) {
                              window.lenis.scrollTo(targetY, { duration: 1.2 });
                            } else {
                              window.scrollTo({ top: targetY, behavior: "smooth" });
                            }
                          }
                        }}
                        className={`text-left px-5 py-2.5 border rounded-xl text-xs md:text-sm transition-all duration-300 flex items-center justify-between group backdrop-blur-md 
                          ${isActive 
                            ? "border-[#cca027] bg-[#cca027] text-white shadow-[0_10px_20px_rgba(204,160,39,0.3)] scale-[1.02]" 
                            : "border-[#B8734E]/10 bg-white/40 text-[#291b03]/80 hover:bg-white/80 hover:border-[#B8734E]/50 hover:text-[#291b03] hover:scale-[1.03] hover:-translate-y-1 active:scale-95 hover:shadow-[0_15px_30px_rgba(184,115,78,0.15)]"
                          }`}
                      >
                        <span className="uppercase tracking-widest font-bold">{cap.name}</span>
                        <span className={`transition-all duration-300 ${isActive ? "opacity-100 text-white translate-x-1" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-[#B8734E]"}`}>&rarr;</span>
                      </button>
                    );
                  })}
                </div>
              )}

              <Link 
                to="/#contact" 
                className="px-8 py-3.5 bg-[#D4AF37] text-[#291b03] text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-3 transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] hover:shadow-[0_10px_20px_rgba(212,175,55,0.3)] w-fit rounded-full"
              >
                START A PROJECT <span>&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Sticky Stackable Cards List */}
          <div className="w-full lg:w-[47%] flex flex-col gap-16 lg:gap-32 pb-8 lg:pb-12 sub-cards-container relative">
            {service.subItems && service.subItems.length > 0 ? (
              service.subItems.map((sub, i) => {
                const isDark = i % 2 === 0;

                return (
                  <div
                    key={i}
                    id={`capability-${i}`}
                    className="sub-card w-full rounded-3xl border p-10 lg:p-16 sticky top-[240px] lg:top-[300px] overflow-hidden cursor-pointer min-h-[460px] lg:h-[calc(100vh-340px)] lg:min-h-[400px] flex flex-col justify-center bg-white group transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)]"
                    style={{
                      borderColor: "rgba(0,0,0,0.04)",
                      boxShadow: `0 20px 40px rgba(0,0,0,0.04)`,
                      zIndex: i,
                    }}
                  >
                    {/* Main Content Section */}
                    <div className="flex flex-col relative z-10 h-full w-full justify-start">
                      {/* Highly visible, beautiful solid number */}
                      <div
                        className="text-[5rem] lg:text-[8rem] font-black select-none pointer-events-none font-gothic tracking-tighter transition-all duration-500 text-[#cca027]"
                        style={{
                          lineHeight: 0.8,
                          marginBottom: "3rem"
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>

                      <div className="flex flex-col gap-4 lg:gap-6 max-w-[90%]">
                        <h3 className="font-gothic text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-[#cca027]">
                          {sub.name}
                        </h3>
                      </div>

                      <p className="font-gothic text-lg lg:text-xl font-medium leading-relaxed text-[#444] opacity-90 max-w-2xl">
                        {sub.desc}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-[#A8A8A8] text-sm italic py-8 text-center">
                No specific sub-items included. Contact us for details.
              </div>
            )}
          </div>
        </div>
      </main>

      {/* 2) Ready to Start / Result Section (Requirement 2 & follow-up) */}
      {slug === "content-strategy-and-marketing" && currentResult && (
        <section className="relative w-full min-h-[60vh] pt-8 pb-20 lg:pt-12 lg:pb-28 flex items-center justify-center bg-[#050505] px-6 overflow-hidden">
          {/* Faint radial glow behind text */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none rounded-full blur-[80px] z-0"
            style={{
              background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)"
            }}
          />

          {/* Golden Waves Background (centered vertically in the middle, mesh waves bundle) */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[-10%] w-[120%] h-[80%] overflow-visible pointer-events-none z-0">
            <svg 
              className="w-full h-full opacity-85" 
              viewBox="0 0 1440 250" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <filter id="wave-blur" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="1.5" />
                </filter>
                <linearGradient id="wave-gold-1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(212,175,55,0)" />
                  <stop offset="15%" stopColor="rgba(212,175,55,0.5)" />
                  <stop offset="45%" stopColor="rgba(212,175,55,0.8)" />
                  <stop offset="55%" stopColor="rgba(212,175,55,0.8)" />
                  <stop offset="85%" stopColor="rgba(212,175,55,0.5)" />
                  <stop offset="100%" stopColor="rgba(212,175,55,0)" />
                </linearGradient>
                <linearGradient id="wave-gold-2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(200,155,94,0)" />
                  <stop offset="20%" stopColor="rgba(200,155,94,0.45)" />
                  <stop offset="50%" stopColor="rgba(200,155,94,0.7)" />
                  <stop offset="80%" stopColor="rgba(200,155,94,0.45)" />
                  <stop offset="100%" stopColor="rgba(200,155,94,0)" />
                </linearGradient>
                <linearGradient id="wave-gold-3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(229,192,123,0)" />
                  <stop offset="25%" stopColor="rgba(229,192,123,0.45)" />
                  <stop offset="50%" stopColor="rgba(229,192,123,0.7)" />
                  <stop offset="75%" stopColor="rgba(229,192,123,0.45)" />
                  <stop offset="100%" stopColor="rgba(229,192,123,0)" />
                </linearGradient>
              </defs>
              
              {/* Left-to-Right sweep bundle (Main Lower Wave) */}
              {Array.from({ length: 22 }).map((_, i) => {
                const yOffset = i * 2.2;
                const xOffset = i * 1.5;
                const d = `M ${-400 + xOffset} ${150 + yOffset} 
                           C ${-300 + xOffset} ${70 + yOffset}, ${-100 + xOffset} ${230 + yOffset}, ${xOffset} ${150 + yOffset} 
                           S ${300 + xOffset} ${70 + yOffset}, ${400 + xOffset} ${150 + yOffset} 
                           S ${700 + xOffset} ${70 + yOffset}, ${800 + xOffset} ${150 + yOffset} 
                           S ${1100 + xOffset} ${70 + yOffset}, ${1200 + xOffset} ${150 + yOffset} 
                           S ${1500 + xOffset} ${70 + yOffset}, ${1600 + xOffset} ${150 + yOffset} 
                           S ${1900 + xOffset} ${70 + yOffset}, ${2000 + xOffset} ${150 + yOffset} 
                           S ${2300 + xOffset} ${70 + yOffset}, ${2400 + xOffset} ${150 + yOffset}`;
                const opacity = 0.05 + (i % 6) * 0.08;
                const strokeW = 0.25 + (i % 3) * 0.25;
                const hasBlur = i % 4 === 0;
                return (
                  <path
                    key={`w1-${i}`}
                    d={d}
                    stroke="url(#wave-gold-1)"
                    strokeWidth={strokeW}
                    fill="none"
                    opacity={opacity}
                    className="animate-wave-1"
                    filter={hasBlur ? "url(#wave-blur)" : undefined}
                  />
                );
              })}
              
              {/* Right-to-Left sweep bundle (Intersecting Wave) */}
              {Array.from({ length: 22 }).map((_, i) => {
                const yOffset = i * 2.0;
                const xOffset = i * 1.8;
                const d = `M ${-400 + xOffset} ${110 + yOffset} 
                           C ${-300 + xOffset} ${170 + yOffset}, ${-100 + xOffset} ${50 + yOffset}, ${xOffset} ${110 + yOffset} 
                           S ${300 + xOffset} ${170 + yOffset}, ${400 + xOffset} ${110 + yOffset} 
                           S ${700 + xOffset} ${170 + yOffset}, ${800 + xOffset} ${110 + yOffset} 
                           S ${1100 + xOffset} ${170 + yOffset}, ${1200 + xOffset} ${110 + yOffset} 
                           S ${1500 + xOffset} ${170 + yOffset}, ${1600 + xOffset} ${110 + yOffset} 
                           S ${1900 + xOffset} ${170 + yOffset}, ${2000 + xOffset} ${110 + yOffset} 
                           S ${2300 + xOffset} ${170 + yOffset}, ${2400 + xOffset} ${110 + yOffset}
                           S ${2700 + xOffset} ${170 + yOffset}, ${2800 + xOffset} ${110 + yOffset}`;
                const opacity = 0.04 + (i % 6) * 0.07;
                const strokeW = 0.2 + (i % 3) * 0.2;
                const hasBlur = i % 4 === 0;
                return (
                  <path
                    key={`w2-${i}`}
                    d={d}
                    stroke="url(#wave-gold-2)"
                    strokeWidth={strokeW}
                    fill="none"
                    opacity={opacity}
                    className="animate-wave-2"
                    filter={hasBlur ? "url(#wave-blur)" : undefined}
                  />
                );
              })}
              
              {/* Extra Accent Layer for High-Contrast Silk Highlight */}
              {Array.from({ length: 15 }).map((_, i) => {
                const yOffset = i * 1.8;
                const xOffset = i * 1.2;
                const d = `M ${-400 + xOffset} ${130 + yOffset} 
                           C ${-300 + xOffset} ${190 + yOffset}, ${-100 + xOffset} ${70 + yOffset}, ${xOffset} ${130 + yOffset} 
                           S ${300 + xOffset} ${190 + yOffset}, ${400 + xOffset} ${130 + yOffset} 
                           S ${700 + xOffset} ${190 + yOffset}, ${800 + xOffset} ${130 + yOffset} 
                           S ${1100 + xOffset} ${190 + yOffset}, ${1200 + xOffset} ${130 + yOffset} 
                           S ${1500 + xOffset} ${190 + yOffset}, ${1600 + xOffset} ${130 + yOffset} 
                           S ${1900 + xOffset} ${190 + yOffset}, ${2000 + xOffset} ${130 + yOffset} 
                           S ${2300 + xOffset} ${190 + yOffset}, ${2400 + xOffset} ${130 + yOffset}`;
                const opacity = 0.03 + (i % 5) * 0.06;
                const strokeW = 0.15 + (i % 3) * 0.15;
                const hasBlur = i % 3 === 0;
                return (
                  <path
                    key={`w3-${i}`}
                    d={d}
                    stroke="url(#wave-gold-3)"
                    strokeWidth={strokeW}
                    fill="none"
                    opacity={opacity}
                    className="animate-wave-3"
                    filter={hasBlur ? "url(#wave-blur)" : undefined}
                  />
                );
              })}
            </svg>
          </div>

          {/* Faint glowing gold particles near waves */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {[
              { left: 8, top: 45, size: 2 },
              { left: 18, top: 55, size: 3 },
              { left: 32, top: 38, size: 2 },
              { left: 45, top: 62, size: 4 },
              { left: 52, top: 40, size: 1.5 },
              { left: 63, top: 58, size: 3.5 },
              { left: 75, top: 35, size: 2 },
              { left: 85, top: 48, size: 4 },
              { left: 95, top: 65, size: 1.5 },
              { left: 14, top: 60, size: 3 },
              { left: 38, top: 50, size: 2.5 },
              { left: 68, top: 63, size: 2 },
              { left: 82, top: 54, size: 3.5 },
              { left: 28, top: 42, size: 1.5 },
            ].map((pt, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-[#D4AF37] opacity-60"
                style={{
                  left: `${pt.left}%`,
                  top: `${pt.top}%`,
                  width: `${pt.size}px`,
                  height: `${pt.size}px`,
                  filter: "blur(0.5px)",
                  boxShadow: "0 0 10px rgba(212,175,55,0.8)",
                  animation: `particlePulse ${5 + (i % 3) * 2}s infinite ease-in-out`,
                  animationDelay: `${i * 0.4}s`,
                }}
              />
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-[1440px] w-full mx-auto flex flex-col items-center gap-8 text-center"
          >
            {/* Centered subtitle badge with dashes */}
            <p className="text-[#B8734E] text-xs md:text-sm font-semibold tracking-[0.4em] uppercase flex items-center gap-3">
              <span className="text-[#B8734E]/50">—</span>
              {currentResult.subtitle}
              <span className="text-[#B8734E]/50">—</span>
            </p>
            
            {/* Contrast styled main text wrapped in 2-3 lines inside a large horizontal width area */}
            <h2 className="font-gothic text-2xl md:text-3xl lg:text-[38px] xl:text-[42px] text-[#cca027] font-light italic leading-[1.6] max-w-[1440px] px-4">
              {currentResult.textHtml}
            </h2>

            {/* Explore our services Outline Button */}
            <Link
              to="/#contact"
              className="mt-6 px-8 py-3.5 border border-[#B8734E]/40 text-[#B8734E] text-xs font-semibold tracking-[0.2em] uppercase rounded-full hover:bg-[#B8734E]/10 hover:border-[#B8734E] hover:text-[#291b03] transition-all duration-300 flex items-center gap-2 z-10 cursor-pointer group"
            >
              Start Your Project 
              <span className="group-hover:translate-x-1.5 transition-transform duration-300">&rarr;</span>
            </Link>
          </motion.div>
        </section>
      )}

      {/* 3) FAQ Section (Requirement 3) */}
      {currentFaqs && currentFaqs.length > 0 && (
        <section className="relative w-full bg-black text-[#f5f5f5] px-20 py-24 max-lg:px-10 max-sm:px-5 overflow-hidden border-t border-[#B8734E]/10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(circle,rgba(200,155,94,0.02)_0%,transparent_70%)] rounded-full blur-[120px] pointer-events-none"></div>

          <div className="relative z-10 text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-6"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B8734E]/10 to-[#8a563a]/10 border border-[#B8734E]/20 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8734E] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8734E]"></span>
                </span>
                <span className="text-[#B8734E] text-sm font-medium tracking-wide">Got Questions?</span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl md:text-5xl max-sm:text-3xl mb-4 text-center"
            >
              <span className="bg-gradient-to-r from-[#B8734E] via-[#C08860] to-[#8a563a] bg-clip-text text-transparent italic font-bold">
                Frequently Asked Questions
              </span>
            </motion.h2>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto max-sm:mx-0 max-sm:w-full">
            {currentFaqs.map((item, i) => {
              const isOpen = openFaqIndex === i;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative"
                  onMouseEnter={() => {
                    if (window.matchMedia("(hover: hover)").matches) {
                      setOpenFaqIndex(i);
                    }
                  }}
                  onMouseLeave={() => {
                    if (window.matchMedia("(hover: hover)").matches) {
                      setOpenFaqIndex(null);
                    }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#B8734E]/5 via-transparent to-[#8a563a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />

                  <div className="relative border-t border-[#B8734E]/20 group-hover:border-[#B8734E]/40 transition-all duration-300">
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                      className="w-full flex justify-between items-start gap-6 py-6 text-left group/btn cursor-pointer"
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#B8734E]/20 to-[#8a563a]/20 border border-[#B8734E]/30 flex items-center justify-center text-[#B8734E] text-sm font-semibold group-hover/btn:scale-110 transition-transform duration-300">
                          {i + 1}
                        </span>
                        
                        <span className="text-[20px] max-sm:text-[18px] font-medium text-[#E8E8E8] group-hover/btn:text-[#B8734E] transition-colors duration-300">
                          {item.q}
                        </span>
                      </div>

                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#B8734E]/10 to-[#8a563a]/10 flex items-center justify-center group-hover/btn:scale-110 transition-all duration-300">
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-[#B8734E] text-2xl font-light"
                        >
                          {isOpen ? '−' : '+'}
                        </motion.span>
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6 pl-12 pr-6 text-[#A0A0A0] text-base max-sm:text-sm leading-relaxed whitespace-pre-line">
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      {/* 4) Double-CTA Box & Stats Section (Requirement 4) */}
      {boxData && (
        <section className="relative w-full py-24 bg-[#050505] px-6 overflow-hidden border-t border-[#B8734E]/10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle,rgba(200,155,94,0.03)_0%,transparent_70%)] rounded-full blur-[130px] pointer-events-none"></div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-5xl mx-auto rounded-3xl p-8 md:p-12 lg:p-16 border border-[#B8734E]/20 bg-gradient-to-br from-[#120B08]/90 via-[#050505]/98 to-[#120B08]/90 shadow-[0_20px_50px_rgba(184,115,78,0.05)] hover:border-[#B8734E]/40 hover:shadow-[0_25px_60px_rgba(184,115,78,0.1)] transition-all duration-500 flex flex-col items-center text-center animate-pulse-slow"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B8734E]/10 border border-[#B8734E]/20 mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8734E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8734E]"></span>
              </span>
              <span className="text-[#B8734E] text-xs font-semibold tracking-wider uppercase">{boxData.badge}</span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#cca027] font-medium mb-6 leading-tight max-w-3xl">
              {boxData.title.split(' ').map((word, wIdx) => {
                const totalWords = boxData.title.split(' ').length;
                const isHighlight = wIdx >= totalWords - 2;
                if (isHighlight) {
                  return (
                    <span key={wIdx} className="bg-gradient-to-r from-[#B8734E] to-[#8a563a] bg-clip-text text-transparent font-bold">
                      {" "}{word}
                    </span>
                  );
                }
                return <span key={wIdx}>{" "}{word}</span>;
              })}
            </h3>

            {/* Description */}
            <p className="text-[#D0D0D0] text-base md:text-lg leading-relaxed max-w-2xl mb-10">
              {boxData.desc}
            </p>

            {/* Double Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full mb-12">
              {/* Primary button */}
              {boxData.btn1Url.startsWith("/") ? (
                <Link
                  to={boxData.btn1Url}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#B8734E] to-[#8a563a] text-[#291b03] text-xs font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] hover:shadow-[0_10px_20px_rgba(184,115,78,0.3)] rounded-full group cursor-pointer"
                >
                  {boxData.btn1Text}
                  <span className="group-hover:translate-x-1.5 transition-transform duration-300">&rarr;</span>
                </Link>
              ) : (
                <a
                  href={boxData.btn1Url}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#B8734E] to-[#8a563a] text-[#291b03] text-xs font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] hover:shadow-[0_10px_20px_rgba(184,115,78,0.3)] rounded-full group cursor-pointer"
                >
                  {boxData.btn1Text}
                  <span className="group-hover:translate-x-1.5 transition-transform duration-300">&rarr;</span>
                </a>
              )}

              {/* Secondary button */}
              <a
                href={boxData.btn2Url}
                onClick={(e) => {
                  e.preventDefault();
                  // Trigger standard desktop mailto protocol
                  window.location.href = boxData.btn2Url;
                  // Backup: open web-based Gmail client in a new tab after a tiny delay
                  setTimeout(() => {
                    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=info@espressomedia.in", "_blank");
                  }, 400);
                }}
                className="w-full sm:w-auto px-8 py-4 border border-[#B8734E]/30 text-[#291b03] text-xs font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.05] hover:bg-[#B8734E]/10 hover:border-[#B8734E] active:scale-[0.98] rounded-full cursor-pointer group"
              >
                {/* Mail Icon */}
                <svg className="w-4 h-4 text-[#B8734E] group-hover:text-[#291b03] transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {boxData.btn2Text}
              </a>
            </div>

            {/* Statistics at the Bottom */}
            <div className="w-full border-t border-[#B8734E]/10 pt-10">
              <div className="flex flex-col md:flex-row items-center justify-around gap-6 md:gap-4">
                {boxData.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="flex flex-col items-center">
                    <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-b from-[#B8734E] to-[#8a563a] bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-[10px] tracking-[0.2em] text-[#291b03] uppercase font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </section>
      )}

      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Smooth card hover transitions overriding GSAP inline transforms */
        .sub-card {
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.4s ease, box-shadow 0.4s ease !important;
        }
        .sub-card:hover {
          transform: scale(1.03) !important;
          border-color: rgba(200, 155, 94, 0.45) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6) !important;
        }
        
        /* Direct hover animation for card numbers overriding any parent selectors */
        .card-number-accent {
          transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1) !important;
          display: inline-block;
        }
        .card-number-accent:hover {
          transform: scale(1.22) !important;
        }

        /* Performance optimizations for GPU sticky columns */
        .left-sticky-content {
          backface-visibility: hidden;
        }

        /* Luxury Golden Wave CSS Animations - Seamless Traveling Flow */
        @keyframes flowRight1 {
          0% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(200px, -10px, 0); }
          100% { transform: translate3d(400px, 0, 0); }
        }
        @keyframes flowLeft2 {
          0% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(-200px, 8px, 0); }
          100% { transform: translate3d(-400px, 0, 0); }
        }
        @keyframes flowRight3 {
          0% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(200px, -6px, 0); }
          100% { transform: translate3d(400px, 0, 0); }
        }
        @keyframes particlePulse {
          0%, 100% { opacity: 0.15; transform: translateY(0) scale(1); }
          50% { opacity: 0.65; transform: translateY(-8px) scale(1.25); }
        }
        .animate-wave-1 {
          animation: flowRight1 14s infinite linear;
          transform-origin: center;
          will-change: transform;
        }
        .animate-wave-2 {
          animation: flowLeft2 12s infinite linear;
          transform-origin: center;
          will-change: transform;
        }
        .animate-wave-3 {
          animation: flowRight3 18s infinite linear;
          transform-origin: center;
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
