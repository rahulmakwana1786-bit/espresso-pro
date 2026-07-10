import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  // Reset custom cursor state when navigating to a new page
  useEffect(() => {
    setIsHovered(false);
    document.body.classList.remove("custom-cursor-hovered");
  }, [location.pathname]);

  useEffect(() => {
    // Only enable custom cursor on devices that support hovering (desktops)
    const hasHover = window.matchMedia("(hover: hover)").matches;
    if (!hasHover) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Find closest element marked as data-cursor="view"
      const element = e.target.closest('[data-cursor="view"]');
      if (element) {
        setIsHovered(true);
        document.body.classList.add("custom-cursor-hovered");
      }
    };

    const handleMouseOut = (e) => {
      const element = e.target.closest('[data-cursor="view"]');
      if (element) {
        setIsHovered(false);
        document.body.classList.remove("custom-cursor-hovered");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.body.classList.remove("custom-cursor-hovered");
    };
  }, []);
  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x: position.x - 55,
        y: position.y - 30,
        pointerEvents: "none",
        zIndex: 99999,
        width: 110,
        height: 60,
      }}
      animate={{
        scale: isHovered ? 1 : 0,
        opacity: isHovered ? 1 : 0,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 250,
        mass: 0.5,
      }}
    >
      <svg width="110" height="60" viewBox="0 0 110 60" className="w-full h-full drop-shadow-md">
        <defs>
          <mask id="view-text-mask">
            {/* Everything white is kept */}
            <rect x="0" y="0" width="110" height="60" rx="30" fill="#FFFFFF" />
            {/* Black cuts out the text */}
            <text
              x="55"
              y="30"
              textAnchor="middle"
              dominantBaseline="central"
              fill="#000000"
              fontSize="12"
              fontWeight="900"
              fontFamily="'Century Gothic Paneuropean', 'Century Gothic', sans-serif"
              letterSpacing="0.25em"
            >
              VIEW
            </text>
          </mask>
        </defs>
        
        {/* Transparent dark red/rust capsule background */}
        <rect
          x="0"
          y="0"
          width="110"
          height="60"
          rx="30"
          fill="#8a563a"
          opacity="0.85"
          mask="url(#view-text-mask)"
        />
        
        {/* Subtle border around the oval */}
        <rect
          x="0.5"
          y="0.5"
          width="109"
          height="59"
          rx="29.5"
          fill="none"
          stroke="#8a563a"
          strokeWidth="1"
          opacity="0.95"
        />
      </svg>
    </motion.div>
  );
}
