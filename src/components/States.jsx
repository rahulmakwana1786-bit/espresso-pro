

import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from "framer-motion";

const States = () => {

  const ref = useRef(null);

  const isInView = useInView(ref, { once: false, margin: "-120px" });

  const useCountUp = (end, start) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
      if (!start) return;

      let current = 0;
      const increment = end / 60;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setValue(end);
          clearInterval(timer);
        } else {
          setValue(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [end, start]);

    return value;
  };

  const Stat = ({ value, label }) => (
    <div className="text-center px-4 max-sm:px-2">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold leading-none mb-2 sm:mb-4">
        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-none select-none
                           bg-gradient-to-b from-espresso-dark via-espresso to-espresso-dark 
                           bg-clip-text text-transparent">
          {value}
        </span>
      </div>
      <div className="text-[10px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.25em] text-[#291b03] font-light uppercase">
        {label}
      </div>
    </div>
  );

  const Divider = () => <div className="h-12 sm:h-16 md:h-20 lg:h-24 w-[1px] bg-gradient-to-b from-transparent via-gray-700 to-transparent max-sm:hidden" />;

  const reach = useCountUp(99, isInView);
  const brands = useCountUp(150, isInView);
  const years = useCountUp(5, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <div className="mt-6 sm:mt-8 mb-12 sm:mb-16 md:mb-20 flex justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 max-sm:flex-row max-sm:gap-8">
        <Stat value={`${reach}%`} label="Client retain" />
        <Divider />
        <Stat value={`${brands}+`} label="Brands Scaled" />
        <Divider />
        <Stat value={`${years}X`} label="Average ROI" />
      </div>
    </motion.div>
  );
};

export default States;