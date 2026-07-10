import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How is your approach different from other agencies?",
    a: "We build and manage growth systems. That means we don't run isolated campaigns or chase trends. We design a structured ecosystem — from brand positioning to customer acquisition and conversion — with one clear goal: consistent, predictable results. Every move is intentional, measured, and tied to business outcomes.",
  },
  {
    q: "Do you offer one-off projects or only retainers?",
    a: "Both. Some clients come to us for a specific project — a brand identity, a website, a campaign. Others work with us on an ongoing basis. We'll recommend what makes the most sense for where your business is right now. ",
  },
  {
    q: "Will you handle everything or do we need an internal team?",
    a: "We handle strategy, creative, execution, and optimization end-to-end. Your role is simple: approvals, insights, and alignment. Everything else is managed by our team.",
  },
  {
    q: "Is this suitable for new brands or only established ones?",
    a: "Both. We help new brands build strong market presence from day one, and we help established brands remove inefficiencies, scale faster, and unlock the next level of growth.",
  },
  {
    q: "How do we get started?",
    a: "It begins with a strategy call where we understand your goals, challenges, and growth potential. If there's alignment, we design a custom roadmap tailored to your business.",
  },
  {
    q: "Do you handle everything in-house?",
    a: "Yes. Strategy, design, content, production, marketing, and automation everything is handled by our team under one roof. No outsourcing, no middlemen, no miscommunication.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="relative w-full bg-transparent text-[#291b03] px-20 py-16 max-lg:px-10 max-sm:px-5 overflow-hidden">

      {/* ================= HEADING ================= */}
      <div className="relative z-10 text-center mb-20 max-sm:mb-16">
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
            <span className="text-[#B8734E] text-sm font-medium tracking-wide">Got Questions?</span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-6xl max-sm:text-4xl mb-4"
        >
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-[#8a563a] via-espresso to-[#8a563a] bg-clip-text text-transparent italic font-bold animate-[shimmer_3s_ease-in-out_infinite] bg-[length:200%_auto]">
              Frequently <br className="block sm:hidden" /> Asked Questions
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
          Everything you need to know about working with us
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#B8734E] to-transparent relative"
        >
        </motion.div>
      </div>

      {/* ================= FAQ LIST ================= */}
      <div className="relative z-10 max-w-4xl mx-auto max-sm:mx-0 max-sm:w-full">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;

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
                  setOpenIndex(i);
                }
              }}
              onMouseLeave={() => {
                if (window.matchMedia("(hover: hover)").matches) {
                  setOpenIndex(null);
                }
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#B8734E]/5 via-transparent to-[#8a563a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />

              <div className="relative border-t border-[#B8734E]/20 group-hover:border-[#B8734E]/40 transition-all duration-300">
                {/* QUESTION */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-start gap-6 py-6 text-left group/btn"
                >
                  <div className="flex items-start gap-4 flex-1">
                    {/* Number Badge */}
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#B8734E]/20 to-[#8a563a]/20 border border-[#B8734E]/30 flex items-center justify-center text-[#D4A574] text-sm font-semibold group-hover/btn:scale-110 transition-transform duration-300">
                      {i + 1}
                    </span>
                    
                    <span className="text-[20px] max-sm:text-[18px] font-medium text-[#291b03] group-hover/btn:text-[#D4A574] transition-colors duration-300">
                      {item.q}
                    </span>
                  </div>

                  {/* Toggle Icon */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#B8734E]/10 to-[#8a563a]/10 flex items-center justify-center  group-hover/btn:scale-110 transition-all duration-300">
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#C08860] text-2xl font-light"
                    >
                      {isOpen ? '−' : '+'}
                    </motion.span>
                  </div>
                </button>

                {/* ANSWER */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="pb-8 pl-12 max-sm:pl-0"
                      >
                        <div className="relative">
                          {/* Decorative line */}
                          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#B8734E]/40 via-[#B8734E]/20 to-transparent" />
                          
                          <p className="pl-6 text-[#291b03] text-[16px] max-sm:text-[15px] leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}

        {/* LAST BORDER */}
        <div className="border-t border-[#B8734E]/20 mt-2" />
      </div>
      

      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.05); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, 20px) scale(1.05); }
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