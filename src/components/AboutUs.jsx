import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "../assets/about_1.png";
import img2 from "../assets/about_2.png";
import img3 from "../assets/about_3.png";

export default function AboutUs() {
  return (
    <section id="about-us" className="w-full bg-transparent py-16 md:py-24 px-4 md:px-8 font-sans flex justify-center items-center z-10 relative">
      
      {/* The main card container */}
      <div className="w-full max-w-[1100px] flex flex-col rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl">
        
        {/* Top Dark Half */}
        <div className="bg-[#292929] pt-16 pb-40 px-8 md:px-16 relative">
          {/* 3 dots icon in top right (mock window controls) */}
          <div className="absolute top-6 right-6 w-12 h-7 bg-[#1f1f1f] rounded-md flex justify-center items-center gap-[4px] px-2 shadow-inner">
            <div className="w-[4px] h-[4px] bg-[#888] rounded-full"></div>
            <div className="w-[4px] h-[4px] bg-[#888] rounded-full"></div>
            <div className="w-[4px] h-[4px] bg-[#888] rounded-full"></div>
          </div>
          
          <h4 className="text-[#d89345] uppercase tracking-[0.15em] text-[11px] md:text-xs font-bold mb-6 font-sans">
            About Espresso Media
          </h4>
          <h2 className="text-white text-[clamp(2rem,3.5vw,3rem)] leading-[1.2] font-serif max-w-[800px] font-bold tracking-tight">
            Built to solve one problem: brands investing in marketing <span className="text-[#d89345]">without seeing real business growth.</span>
          </h2>
        </div>

        {/* Bottom Light Half */}
        <div className="bg-[#fcfaf7] px-8 md:px-16 pb-16 md:pb-20 relative">
          {/* Overlapping Cards */}
          <div className="flex flex-col md:flex-row gap-5 md:gap-6 -mt-24 relative z-10 mb-12 md:mb-16">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#3c3c3c] rounded-[20px] flex-1 aspect-[4/5] md:aspect-square lg:aspect-[4/5] relative overflow-hidden group shadow-lg"
            >
               <img src={img1} alt="Client strategy session" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
               <p className="absolute bottom-6 left-6 right-6 text-white font-semibold text-sm md:text-base leading-tight z-10">Client strategy session</p>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#5c5c5c] rounded-[20px] flex-1 aspect-[4/5] md:aspect-square lg:aspect-[4/5] relative overflow-hidden group shadow-lg mt-4 md:mt-0"
            >
               <img src={img2} alt="Studio space" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
               <p className="absolute bottom-6 left-6 right-6 text-white font-semibold text-sm md:text-base leading-tight z-10">Studio space</p>
            </motion.div>
            
            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#9c9c9b] rounded-[20px] flex-1 aspect-[4/5] md:aspect-square lg:aspect-[4/5] relative overflow-hidden group shadow-lg mt-4 md:mt-0"
            >
               <img src={img3} alt="Creative work" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
               <p className="absolute bottom-6 left-6 right-6 text-white font-semibold text-sm md:text-base leading-tight z-10">Creative work</p>
            </motion.div>
          </div>

          {/* Bottom Content */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <div className="max-w-[500px]">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-[#4a4a4a] text-[15px] md:text-base leading-relaxed font-medium"
              >
                We design and execute full-funnel growth systems that connect brand, content, performance, and automation. So marketing doesn't just look good, it moves inventory and drives revenue.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-start md:items-start shrink-0"
            >
              <Link to="/work" className="bg-[#b8734e] text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg flex items-center justify-center gap-2 hover:bg-[#965c3b] transition-colors text-xs md:text-sm tracking-widest uppercase w-full md:w-auto shadow-md">
                SEE WORKS <span className="text-lg leading-none ml-1">&rarr;</span>
              </Link>
              <p className="text-[#888] text-[11px] md:text-xs mt-3 font-semibold tracking-wide md:text-left w-full">5x avg. ROI across 40+ brands</p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
