

import { motion } from "framer-motion";

export default function ProblemStatement() {
  return (
    <section className="w-full bg-[#fbf8f3] text-[#291b03] px-24 py-20 mx-auto max-lg:px-14 max-sm:px-5 relative overflow-hidden">

      <div className="relative z-10">
        {/* ================= ANIMATED BADGE ================= */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex mb-8 max-sm:mb-6"
        >
          <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#cca027]/10 to-[#b08810]/10 border border-[#cca027]/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#cca027] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#cca027]"></span>
            </span>
            <span className="text-[#cca027] text-sm font-medium tracking-wide">
              The Challenge We Solve
            </span>
          </div>
        </motion.div>

        {/* ================= HEADLINE WITH ENHANCED TYPOGRAPHY ================= */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl font-serif text-5xl md:text-6xl lg:text-[56px] max-sm:text-3xl leading-[1.3] text-[#E6D3C3]"
        >
          Espresso Media is built to{" "}
          <span className="relative inline-block">
            <span>solve one</span>
            <span className="pl-2 bg-gradient-to-r from-[#cca027] to-[#b08810] bg-clip-text text-transparent italic font-semibold">
              problem
            </span>
          </span>
          :
          <br />
          Brands investing in{" "}
          <span className="relative inline-block">
            <span className="text-espresso italic">marketing</span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#C08860] to-transparent rounded-full blur-sm"></span>
          </span>{" "}
          without seeing
          <br />
          real business{" "}
          <span className="relative inline-block group">
            <span className="bg-gradient-to-r from-[#cca027] to-[#b08810] bg-clip-text text-transparent italic font-bold animate-[shimmer_3s_ease-in-out_infinite] bg-[length:200%_auto]">
              growth
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#cca027] to-transparent rounded-full blur-sm"></span>
          </span>
          .
        </motion.h2>

        {/* ================= ENHANCED DIVIDER ================= */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full max-w-5xl my-12 max-sm:my-8 relative"
          style={{ transformOrigin: "left" }}
        >
          <div className="h-px bg-gradient-to-r from-[#cca027] via-[#cca027]/50 to-transparent" />
        </motion.div>

        {/* ================= PARAGRAPHS WITH ENHANCED STYLING ================= */}
        <div className="max-w-5xl space-y-8 max-sm:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Decorative quote mark */}
            <svg
              className="absolute -left-4 -top-2 w-8 h-8 max-sm:w-6 max-sm:h-6 text-[#cca027]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
            </svg>

            <div className="space-y-6">
              <p className="text-[#291b03] text-lg md:text-xl max-sm:text-base leading-relaxed font-light">
                We design and execute{" "}
                <span className="text-[#291b03] font-medium">
                  full-funnel growth systems
                </span>{" "}
                that connect <span className="text-espresso">brand</span>,{" "}
                <span className="text-espresso">content</span>,{" "}
                <span className="text-espresso">performance</span>, and{" "}
                <span className="text-espresso">automation</span>. So marketing
                doesn't just look good, it{" "}
                <span className="bg-gradient-to-r from-[#cca027] to-[#b08810] bg-clip-text text-transparent font-semibold">
                  moves inventory and drives revenue
                </span>
                .
              </p>

              <p className="text-[#291b03] text-lg md:text-xl max-sm:text-base leading-relaxed font-light">
                <span className="text-[#291b03] font-medium">Founder-led</span> and{" "}
                <span className="text-[#291b03] font-medium">systems-driven</span>,
                ownership is taken across strategy and execution to deliver{" "}
                <span className="text-espresso">clarity</span>,{" "}
                <span className="text-espresso">accountability</span>, and{" "}
                <span className="text-espresso">control</span> at every stage of
                growth.
              </p>
            </div>
          </motion.div>

          {/* ================= CTA SECTION ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-6"
          >
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#contact"
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[#cca027] to-[#b08810] text-[#291b03] font-semibold tracking-wider overflow-hidden inline-flex items-center gap-3 shadow-lg shadow-[#cca027]/20 hover:shadow-xl hover:shadow-[#cca027]/30 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 text-sm md:text-base uppercase">
                  Let's Solve This Together
                </span>
                <svg
                  className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>

              <div className="flex items-center gap-2 text-sm text-[#291b03]">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>100% Accountability Guaranteed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.05); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, 20px) scale(1.05); }
        }

        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}


