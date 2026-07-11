import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Local positions data array for easy editing/management directly in code
const positions = [
  {
    title: "Senior Graphic Designer",
    experience: "1-3 years",
    openings: 1,
    type: "Full-Time",
    location: "Ahmedabad (On-site)"
  },
  {
    title: "Video Editor",
    experience: "1-3 years",
    openings: 1,
    type: "Full-Time",
    location: "Ahmedabad (On-site)"
  },
  {
    title: "UGC Content Creator",
    experience: "1-3 Years",
    openings: 3,
    type: "Full-Time",
    location: "Ahmedabad (On-site)"
  },
  {
    title: "Personal Branding Strategist",
    experience: "1-3 years",
    openings: 1,
    type: "Full-Time",
    location: "Ahmedabad (On-site)"
  },
  {
    title: "Social Media Strategist",
    experience: "1-3 years",
    openings: 1,
    type: "Full-Time",
    location: "Ahmedabad (On-site)"
  },
  {
    title: "Business Development Executive ",
    experience: "1-3 years",
    openings: 1,
    type: "Full-Time",
    location: "Ahmedabad (On-site)"
  },
];

const whyWorkWithUs = [
  {
    title: "Continuous Growth",
    desc: "Expand your boundaries, master your craft, and work on high-impact projects that accelerate your professional journey.",
    num: "01"
  },
  {
    title: "Creative Freedom",
    desc: "We value unique ideas, bold experimentation, and fresh perspectives that challenge the status quo.",
    num: "02"
  },
  {
    title: "Collaborative Team",
    desc: "Work alongside elite minds in digital strategy, creative content production, development, and AI automation.",
    num: "03"
  },
  {
    title: "Meaningful Impact",
    desc: "What we build drives real revenue and brand visibility. See the direct, measurable results of your creative output.",
    num: "04"
  }
];

const steps = [
  {
    num: "01",
    title: "Apply",
    desc: "Send your CV, portfolio, or LinkedIn profile to our recruitment team."
  },
  {
    num: "02",
    title: "Interview",
    desc: "A brief conversation with our leaders to understand your skills, ambitions, and vibe."
  },
  {
    num: "03",
    title: "Selection",
    desc: "Review of task submission or practical check and final alignment."
  },
  {
    num: "04",
    title: "Join The Team",
    desc: "Receive your offer, onboard with the team, and start brewing success."
  }
];

export default function Careers() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Add class for custom page font overrides if needed
    document.body.classList.add("gothic-only-page");

    // Scroll to top
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
    };
  }, []);

  const handleApply = (jobTitle) => {
    const subject = encodeURIComponent(`Job Application: ${jobTitle} - The Espresso Media`);
    const body = encodeURIComponent(
      `Hi Team,\n\nI am interested in applying for the ${jobTitle} position at The Espresso Media.\n\nPlease find my details below:\n\nFull Name:\nContact Number:\nTotal Experience:\nPortfolio / LinkedIn Link:\n\n(Please attach your resume to this email before sending)\n`
    );
    const mailtoUrl = `mailto:career@espressomedia.in?subject=${subject}&body=${body}`;

    // Standard mailto client redirect
    window.location.href = mailtoUrl;

    // Fail-safe backup: open Gmail web compose tab after a small delay
    setTimeout(() => {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=career@espressomedia.in&su=${subject}&body=${body}`,
        "_blank"
      );
    }, 450);
  };

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen bg-[#fbf8f3] text-[#291b03] font-gothic selection:bg-[#cca027]/30 relative pt-[120px] lg:pt-[150px] overflow-hidden"
    >
      {/* Background noise and radial glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Radial glows */}
        <div className="fixed top-[-20%] left-1/4 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(184,115,78,0.05)_0%,transparent_70%)] rounded-full blur-[120px]"></div>
        <div className="fixed bottom-[-20%] right-1/4 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(200,155,94,0.04)_0%,transparent_70%)] rounded-full blur-[120px]"></div>

        {/* Luxury Page Grid */}
        <div className="fixed inset-0 opacity-[0.04] bg-[linear-gradient(rgba(184,115,78,1)_1px,transparent_1px),linear-gradient(90deg,rgba(184,115,78,1)_1px,transparent_1px)] [background-size:120px_120px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]"></div>

        {/* Noise overlay */}
        <div
          className="fixed inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-[92%] lg:max-w-[85%] xl:max-w-[1280px] mx-auto px-4 py-12 md:py-16">
        {/* 1. HERO SECTION */}
        <section className="text-center mb-24 md:mb-32 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#cca027]/10 border border-[#cca027]/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#cca027] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#cca027]"></span>
              </span>
              <span className="text-[#cca027] text-xs font-semibold tracking-[0.3em] uppercase pl-1">CAREERS</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1.1] tracking-tight"
          >
            <span className="bg-gradient-to-r from-[#cca027] via-[#D4AF37] to-[#cca027] bg-clip-text text-transparent font-bold italic">
              Build The Future
            </span>{" "}
            With Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#291b03] text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light font-gothic"
          >
            Join a team of strategists, creators, developers, and innovators helping businesses achieve meaningful growth.
          </motion.p>
        </section>

        {/* 2. WHY WORK WITH US SECTION */}
        <section className="mb-28 md:mb-36">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-[#cca027] font-medium mb-4">
              Why Work With{" "}
              <span className="italic text-[#cca027] font-bold">The Espresso Media?</span>
            </h2>
            <p className="text-[#291b03] text-sm md:text-base max-w-xl mx-auto tracking-wide">
              We offer an environment structured to maximize your creative flow, technical mastery, and professional goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {whyWorkWithUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative rounded-2xl border border-[#cca027]/15 p-8 lg:p-10 bg-gradient-to-br from-[#120B08]/40 via-[#050505]/98 to-[#120B08]/40 hover:border-[#cca027]/40 hover:shadow-[0_15px_40px_rgba(184,115,78,0.05)] transition-all duration-500 overflow-hidden cursor-default min-h-[220px] flex flex-col justify-between"
              >
                {/* Number watermark inside card */}
                <div className="absolute right-6 top-4 text-6xl lg:text-7xl font-bold font-gothic opacity-[0.03] select-none text-[#cca027] group-hover:opacity-[0.06] transition-opacity duration-500">
                  {item.num}
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-xl md:text-2xl font-bold text-[#cca027] font-gothic tracking-wide group-hover:text-[#cca027] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#291b03] text-sm md:text-base leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                {/* Subtle bottom border highlight */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#cca027] to-[#b08810] group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. OPEN POSITIONS SECTION */}
        <section id="positions" className="mb-28 md:mb-36 scroll-mt-28">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-[#cca027] font-medium mb-4">
              Explore Open{" "}
              <span className="italic text-[#cca027] font-bold">Positions</span>
            </h2>
            <p className="text-[#291b03] text-sm md:text-base max-w-xl mx-auto tracking-wide">
              Find the perfect seat to launch your best work. If your role is not listed, email us anyway!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {positions.length > 0 ? (
              positions.map((job, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group relative rounded-2xl border border-[#cca027]/20 p-8 bg-gradient-to-br from-[#120B08]/60 via-[#050505]/98 to-[#120B08]/60 shadow-lg hover:border-[#cca027]/40 hover:shadow-[0_20px_50px_rgba(184,115,78,0.08)] transition-all duration-500 flex flex-col justify-between gap-6"
                >
                  <div>
                    {/* Card Top Details */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2 text-xs text-[#291b03]">
                        <span>{job.type}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                      </div>
                    </div>

                    {/* Job Title */}
                    <h3 className="font-gothic text-2xl md:text-3xl font-black text-[#cca027] leading-tight mb-4 group-hover:text-[#cca027] transition-colors duration-300">
                      {job.title}
                    </h3>

                    {/* Specifications List */}
                    <div className="flex flex-col gap-2 border-t border-[#cca027]/10 pt-4 mt-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-[#291b03] font-light">Experience Required</span>
                        <span className="text-[#291b03] font-medium">{job.experience}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-[#291b03] font-light">Open Openings</span>
                        <span className="text-[#291b03] font-semibold flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#cca027] animate-pulse"></span>
                          {job.openings} {job.openings > 1 ? "Positions" : "Position"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Apply Action Button */}
                  <button
                    onClick={() => handleApply(job.title)}
                    className="w-full py-4 border border-[#cca027]/40 text-[#cca027] text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:bg-gradient-to-r hover:from-[#cca027] hover:to-[#b08810] hover:text-[#291b03] hover:border-[#cca027] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group/btn"
                  >
                    Apply Now
                    <span className="group-hover/btn:translate-x-1 transition-transform duration-300">&rarr;</span>
                  </button>
                </motion.div>
              ))
            ) : (
              <div className="col-span-2 text-center text-[#291b03] py-12 border border-dashed border-[#cca027]/25 rounded-2xl">
                No active openings currently. Please check back later or send an open pitch.
              </div>
            )}
          </div>
        </section>

        {/* 4. APPLICATION PROCESS SECTION */}
        <section className="mb-28 md:mb-36">
          <div className="text-center mb-20">
            <h2 className="font-serif text-3xl md:text-5xl text-[#cca027] font-medium mb-4">
              Our Application{" "}
              <span className="italic text-[#cca027] font-bold">Process</span>
            </h2>
            <p className="text-[#291b03] text-sm md:text-base max-w-xl mx-auto tracking-wide">
              How we review, align, and welcome candidates into our culture.
            </p>
          </div>

          {/* Timeline container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Horizontal progress bar for desktop */}
            <div className="hidden lg:block absolute top-[27px] left-8 right-8 h-[1px] bg-gradient-to-r from-[#cca027]/10 via-[#cca027]/40 to-[#cca027]/10 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left group"
                >
                  {/* Round process marker */}
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-[#cca027]/30 text-[#cca027] flex items-center justify-center font-gothic text-lg font-black tracking-tighter mb-6 group-hover:border-[#cca027] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(204,160,39,0.25)] transition-all duration-300">
                    {step.num}
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-[#cca027] mb-3 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-[#291b03] text-sm md:text-base leading-relaxed font-light max-w-xs">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. FINAL CTA SECTION */}
        <section className="relative w-full max-w-5xl mx-auto py-16 md:py-24 text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none rounded-full bg-[radial-gradient(circle,rgba(184,115,78,0.06)_0%,transparent_70%)] blur-[100px] z-0" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 rounded-3xl p-8 md:p-12 lg:p-16 border border-[#cca027]/20 bg-gradient-to-br from-[#120B08]/90 via-[#050505]/98 to-[#120B08]/90 shadow-[0_20px_50px_rgba(184,115,78,0.05)] flex flex-col items-center gap-6"
          >
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#cca027] font-medium leading-tight max-w-2xl">
              Ready To Create{" "}
              <span className="italic text-[#cca027] font-bold bg-gradient-to-r from-[#cca027] to-[#D4AF37] bg-clip-text text-transparent">
                Meaningful Impact?
              </span>
            </h2>
            <p className="text-[#291b03] text-sm md:text-base max-w-md mx-auto mb-4 leading-relaxed font-light">
              Send us your application or start a conversation to see if we fit.
            </p>

            <button
              onClick={() => handleApply("General Application")}
              className="px-10 py-4 bg-gradient-to-r from-[#cca027] to-[#b08810] text-[#291b03] text-xs font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] hover:shadow-[0_10px_20px_rgba(184,115,78,0.35)] rounded-full cursor-pointer group"
            >
              Apply Today 
              <span className="group-hover:translate-x-1.5 transition-transform duration-300">&rarr;</span>
            </button>
          </motion.div>
        </section>
      </div>
    </div>
  );
}


