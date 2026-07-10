import { motion } from "framer-motion";

const processData = [
  {
    number: 1,
    title: "Discovery & Strategy",
    subtitle: "Onboarding",
    description:
      "We begin by auditing your current brand, market position, and competitive landscape. This helps us identify gaps, opportunities, and the real growth levers that matter.",
  },
  {
    number: 2,
    title: "Brand & Content Creation",
    subtitle: "Foundation",
    description:
      "Our team will craft the strategy, messaging, and creative direction building brand assets, content, positioning, and funnels designed to attract the right audience and move them toward action.",
  },
  {
    number: 3,
    title: "Campaign Execution",
    subtitle: "Execution",
    description:
      "We bring the strategy to life through focused execution deploying content, creatives, and campaigns across the right channels to reach your ideal audience with precision.",
  },
  {
    number: 4,
    title: "Growth & Scale",
    subtitle: "Optimize & Scale",
    description:
      "Once traction begins, we track performance, refine what works, and double down on high-impact activities while sharpening messaging, improving conversions, and scaling results sustainably.",
  },
];

export default function OurProcess() {
  return (
    <section className="w-full bg-transparent text-[#291b03] px-24 py-20 max-lg:px-14 max-sm:px-5 max-sm:py-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#B8734E]/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#8a563a]/5 rounded-full blur-3xl animate-float-delayed" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle, #B8734E 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10">
        {/* ================= HEADING ================= */}
        <div className="text-center mb-20 max-sm:mb-12">
          {/* Animated Badge */}
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
              <span className="text-[#B8734E] text-sm font-medium tracking-wide">How We Work</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-6xl max-sm:text-4xl text-[#291b03]"
          >
            Our{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#8a563a] via-espresso to-[#8a563a] bg-clip-text text-transparent italic font-bold animate-[shimmer_3s_ease-in-out_infinite] bg-[length:200%_auto]">
                Process
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B8734E] to-transparent rounded-full blur-sm"></span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#291b03] text-lg mt-4 max-w-2xl mx-auto"
          >
            A systematic approach to turning strategy into measurable results
          </motion.p>

          {/* Decorative divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#B8734E] to-transparent"
          />
        </div>

        {/* ================= CARDS GRID ================= */}
        <motion.div 
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-8 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {processData.map((process, idx) => (
            <motion.div 
              key={idx} 
              className="flex justify-center relative"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                },
              }}
            >

              {/* CARD - Original Design Preserved but colors updated */}
              <div
                className="
                  relative 
                  flex flex-col md:flex-row
                  items-center md:items-start
                  gap-6 md:gap-10
                  rounded-[32px] border-[2px] border-[#cca027]/40 
                  bg-white
                  shadow-[0_8px_30px_rgba(204,160,39,0.08)]
                  p-4 md:p-5 lg:p-3 2xl:p-5
                  w-[320px] h-[250px]
                  sm:w-[270px] sm:h-[280px] 
                  md:w-[290px] md:h-[240px]
                  lg:w-[250px] lg:h-[230px]
                  xl:w-[260px] xl:h-[230px]
                  2xl:w-[360px] 2xl:h-[330px]
                  transition-all duration-300
                  hover:scale-105 hover:border-[#cca027]/60
                  hover:shadow-[0_15px_40px_rgba(204,160,39,0.2)]
                "
              >
                {/* LEFT SECTION (NUMBER) */}
                <div className="flex-shrink-0">
                  <span
                    className="absolute left-2 top-1 
                      text-[120px] md:text-[120px] lg:text-[90px] xl:text-[120px] 2xl:text-[140px] 
                      font-bold 
                      text-[#cca027]/50 
                      leading-none 
                      block
                      text-center
                    "
                  >
                    {process.number}
                  </span>
                </div>

                {/* RIGHT SECTION */}
                <div className="flex flex-col pt-5 lg:pt-9 xl:pt-12 2xl:pt-16 gap-4 max-w-xl text-right opacity-90">
                  {/* TITLE */}
                  <h3 className="text-[#cca027] text-md md:text-lg lg:text-xs xl:text-sm 2xl:text-xl font-bold italic underline decoration-0 underline-offset-3">
                    {process.subtitle}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-[#291b03] text-sm md:text-md lg:text-[10px] xl:text-xs 2xl:text-[16px] leading-none pl-20 md:pl-5 lg:pl-2.5 xl:pl-9">
                    {process.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
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