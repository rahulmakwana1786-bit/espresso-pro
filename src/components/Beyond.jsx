import { motion } from "framer-motion";

export default function Beyond() {
  const stats = [
    { 
      value: "5x", 
      label: "ROI ACHIEVED", 
      dark: false,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d49555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
          <polyline points="16 7 22 7 22 13"></polyline>
        </svg>
      )
    },
    { 
      value: "100K+", 
      label: "LEADS GENERATED", 
      dark: false,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d49555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    { 
      value: "6m+", 
      label: "AD IMPRESSIONS", 
      dark: true,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d49555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      )
    },
    { 
      value: "98%", 
      label: "RETENTION", 
      dark: false,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d49555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      )
    },
    { 
      value: "6K+", 
      label: "ASSETS CRAFTED", 
      dark: false,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d49555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      )
    },
  ];

  return (
    <section className="w-full bg-transparent text-[#291b03] pt-8 pb-20 md:pt-12 md:pb-28 relative overflow-hidden font-sans z-20">
      <div className="max-w-[1350px] mx-auto px-4 md:px-10 lg:px-12">
        
        {/* Header */}
        <div className="mb-14 text-center max-w-4xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#291b03]/10 shadow-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#d49555]"></span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#291b03]">Our Impact</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,3.5vw,3.5rem)] leading-[1.1] font-serif font-bold text-[#1a1a1a] tracking-tight"
          >
            Numbers that drive real business growth.
          </motion.h2>
        </div>

        {/* 5 Cards Row Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 items-start pt-4 pb-20">
          {stats.map((stat, i) => {
            // V-shaped stagger for desktop
            const staggerClass = i === 2 ? "lg:translate-y-16" : (i === 1 || i === 3) ? "lg:translate-y-8" : "lg:translate-y-0";
            
            return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group flex flex-col justify-between p-6 md:p-8 rounded-[24px] border transition-all duration-300 hover:scale-[1.03] min-h-[250px] ${staggerClass} ${
                stat.dark 
                  ? "bg-[#2a2a2a] border-[#2a2a2a] text-white shadow-xl" 
                  : "bg-white border-[#291b03]/20 shadow-[0_8px_24px_rgba(41,27,3,0.06)] hover:bg-[#2a2a2a] hover:border-[#2a2a2a] hover:shadow-xl"
              }`}
            >
              <div className="mb-12">
                {stat.icon}
              </div>
              
              <div>
                <h3 className={`text-[32px] md:text-[38px] font-sans font-bold leading-none mb-2 transition-colors duration-300 ${stat.dark ? "text-white" : "text-[#1a1a1a] group-hover:text-white"}`}>
                  {stat.value}
                </h3>
                <p className={`text-[10px] md:text-[11px] font-bold uppercase tracking-widest leading-snug transition-colors duration-300 ${stat.dark ? "text-gray-300" : "text-gray-500 group-hover:text-gray-300"}`}>
                  {stat.label.split(' ').map((word, j) => (
                    <span key={j} className="block">{word}</span>
                  ))}
                </p>
              </div>
            </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
