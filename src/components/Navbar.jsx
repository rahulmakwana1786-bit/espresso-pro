import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { services } from "../data/services.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollY } = useScroll();

  // Hide navbar on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 100) {
      setHidden(true);
      setOpen(false); // Close menu if scrolling down
    } else {
      setHidden(false);
    }
  });

  const navItems = [
    { name: "Work", href: "/work", isRoute: true },
    { name: "Services", href: "/services", isRoute: true },
    { name: "About", href: "/about", isRoute: true },
    { name: "Case Studies", href: "/case-studies", isRoute: true },
  ];

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const handleNavClick = (item) => {
    setOpen(false);
    if (item.isRoute) {
      navigate(item.href);
    } else {
      if (location.pathname !== "/") {
        window.location.href = "/" + item.href;
      } else {
        scrollToSection(item.href);
      }
    }
  };

  const scrollToSection = (href) => {
    setOpen(false);
    setActiveSection(href.substring(1));
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        const headerEl = document.querySelector("header");
        const headerHeight = headerEl ? headerEl.offsetHeight : 80;
        const top =
          el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top, behavior: "smooth" });
      } else {
        window.location.href = "/" + href;
      }
    }, 100);
  };

  // Close on click outside
  useEffect(() => {
    const handleOutside = (e) => {
      if (!open) return;
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={hidden ? { y: -100, opacity: 0 } : { y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-x-0 top-4 md:top-6 z-[100] flex justify-center px-4 md:px-8 pointer-events-none"
    >
      {/* White Pill Navbar */}
      <div className="pointer-events-auto bg-white/60 backdrop-blur-xl rounded-full px-5 py-3 md:px-8 md:py-4 flex items-center justify-between w-full max-w-[1200px] shadow-[0_15px_50px_rgba(0,0,0,0.15)]">
        
        {/* Logo */}
        <Link to="/" onClick={() => setOpen(false)} className="flex-shrink-0">
          <motion.h1
            whileHover={{ scale: 1.02 }}
            className="text-xl md:text-[26px] font-serif text-black cursor-pointer italic font-bold tracking-tight"
          >
            The Espresso Media
          </motion.h1>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center justify-center gap-10 flex-1">
          {navItems.map((item) => {
            const isActive = item.isRoute
              ? location.pathname === item.href
              : location.pathname === "/" && activeSection === item.href.substring(1);
            return (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleNavClick(item)}
                  className={`relative cursor-pointer transition-colors duration-300 text-sm xl:text-base py-4 ${
                    isActive ? "text-black font-bold" : "text-gray-700 hover:text-black"
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-2 left-0 h-[2px] bg-black transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </button>


              </div>
            );
          })}
        </nav>

        {/* Desktop Contact / Work with us button */}
        <div className="hidden lg:block flex-shrink-0">
          <Link
            to="/contact"
            className="inline-block px-7 py-3 rounded-full bg-[#D4AF37] hover:bg-[#C4A252] text-black text-sm font-bold transition-all duration-300 shadow-md"
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          ref={toggleRef}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle mobile menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-black p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 pointer-events-auto"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-center">
            <span
              className={`w-6 h-0.5 bg-black rounded-full transition-transform duration-300 origin-left ${
                open ? "rotate-45 translate-y-[0.5px]" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-black rounded-full transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-black rounded-full transition-transform duration-300 origin-left ${
                open ? "-rotate-45 -translate-y-[0.5px]" : ""
              }`}
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute lg:hidden top-[75px] md:top-[90px] left-4 right-4 pointer-events-auto bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-gray-100 max-w-[500px] mx-auto"
          >
            <div className="flex flex-col py-4 px-2">
              {navItems.map((item, index) => {
                const isActive = item.isRoute
                  ? location.pathname === item.href
                  : location.pathname === "/" && activeSection === item.href.substring(1);
                return (
                  <div key={item.name}>
                    <motion.button
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleNavClick(item)}
                      className={`w-full text-left text-base py-3 px-6 rounded-xl transition-all duration-200 flex justify-between items-center ${
                        isActive
                          ? "bg-gray-100 text-black font-bold"
                          : "text-gray-700 hover:bg-gray-50 hover:text-black"
                      }`}
                    >
                      {item.name}
                    </motion.button>
                  </div>
                );
              })}
              <div className="px-4 pt-4 pb-2 mt-2 border-t border-gray-100">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center px-6 py-3 rounded-full bg-[#D4AF37] hover:bg-[#C4A252] text-black text-sm font-bold transition-all duration-300"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}


