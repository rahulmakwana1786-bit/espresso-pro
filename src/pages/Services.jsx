import WhatWeOffer from "../components/WhatWeOffer.jsx";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#fbf8f3] pt-[150px] md:pt-[200px] pb-12 relative overflow-clip">

      <div className="relative z-10">
        <WhatWeOffer />
      </div>
    </div>
  );
}
