import { motion } from "framer-motion";
import toyota from "../assets/TOYOTA.png";
import tilelab2 from "../assets/old-ilt.png";
import honda from "../assets/HONDA.png";
import gc from "../assets/GC GROUP.png";
import flais from "../assets/FLAIS.png";
import hero from "../assets/HERO.png";
import kawasaki from "../assets/KAWASAKI.png";
import mahindra from "../assets/MAHINDRA.png";
import renault from "../assets/RENAULT.png";
import sns from "../assets/SNS.png";
import gokul from "../assets/GOKUL GROUP.png";
import gcgroup from "../assets/GC GROUP.png";

export default function ClientLogos() {
  const logos = [
    toyota, tilelab2, honda, gc, flais,
    hero, kawasaki, mahindra, renault, sns, gokul, gcgroup
  ];

  return (
    <section className="w-full bg-transparent py-16 overflow-hidden">
      {/* Animated Badge */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#cca027]/10 to-[#b08810]/10 border border-[#cca027]/20 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#cca027] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#cca027]"></span>
          </span>
          <span className="text-[#cca027] text-sm font-medium tracking-wide">Trusted by Leading Brands</span>
        </div>
      </div>

      <div
        className="relative w-full overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <motion.div
          className="flex gap-3 md:gap-4 lg:gap-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full flex items-center justify-center bg-white flex-shrink-0 border border-[#cca027]/10 shadow-sm"
            >
              <img
                src={logo}
                alt="Brand Logo"
                className="max-w-[95%] max-h-[95%] object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


