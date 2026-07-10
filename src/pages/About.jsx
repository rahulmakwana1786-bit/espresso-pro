import AboutUs from "../components/AboutUs.jsx";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#fbf8f3] relative overflow-clip font-sans text-black">
      {/* Decorative gradient background */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-[#e8dac1]/40 via-[#fbf8f3]/10 to-transparent pointer-events-none z-0" />
      
      <div className="relative z-10">
        
        {/* About Page Hero Section */}
        <section className="pt-[150px] md:pt-[200px] pb-16 md:pb-24 px-6 md:px-16 max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-6 max-w-4xl">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#c27c27] uppercase tracking-[0.2em] text-xs font-bold"
            >
              Our Story
            </motion.h4>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[clamp(2.5rem,5vw,5rem)] leading-[1.1] font-serif font-bold tracking-tight text-[#1a1a1a]"
            >
              We're redefining how brands connect, scale, and thrive in a digital-first world.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#555] text-lg md:text-xl max-w-2xl mt-4 leading-relaxed font-medium"
            >
              We don't just build marketing campaigns. We build growth systems. 
              By merging powerful branding, strategic content, and precise automation, 
              we help ambitious businesses unlock their full revenue potential.
            </motion.p>
          </div>
        </section>

        {/* The Card Component */}
        <div className="mb-20">
          <AboutUs />
        </div>

      </div>
    </div>
  );
}
