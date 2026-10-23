
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import gcTilesChennaiImg from "../assets/portfolio/gc_tiles_chennai_logo.png";
import shreejiTilesImg from "../assets/portfolio/shreeji_tiles_logo.png";
import gcTilesHyderabadImg from "../assets/portfolio/gc_tiles_hyd_logo.png";
import tileBazaarImg from "../assets/portfolio/tile_bazaar_logo.png";

import "./WorkBranding.css";

const SERVICES = [
  "Content Strategy & Marketing",
  "Brand Identity Designing",
  "Products Animation",
  "3D modeling",
  "Social media designs",
  "Advertise & print design",
  "Commercial production",
  "UGC ads",
  "Website design & development",
];

const brands = [
  {
    number: "01",
    name: "GC Tiles Chennai",
    category: "Tiles & Surfaces",
    client: "GC Group",
    image: gcTilesChennaiImg,
    slug: "gc-tiles-chennai",
    description:
      "Creative campaigns focused on premium porcelain slabs, luxury surfaces, and showroom visibility.",
    services: [
      "Content Strategy & Marketing",
      "Brand Identity Designing",
      "Social media designs",
      "Advertise & print design",
      "Commercial production",
      "UGC ads",
      "Website design & development",
    ],
  },
  {
    number: "02",
    name: "Shreeji Tiles",
    category: "Tiles & Ceramics",
    client: "Shreeji Ceramics",
    image: shreejiTilesImg,
    slug: "shreeji-tiles",
    description:
      "A visual campaign designed to showcase tile collections and connect with contractors.",
    services: [
      "Brand Identity Designing",
      "Products Animation",
      "3D modeling",
      "Social media designs",
      "Advertise & print design",
    ],
  },
  {
    number: "03",
    name: "GC Tiles Hyderabad",
    category: "Tiles & Surfaces",
    client: "GC Group",
    image: gcTilesHyderabadImg,
    slug: "gc-tiles-hyderabad",
    description:
      "Creative campaigns and brand visibility for builders, architects, and showroom customers.",
    services: [
      "Content Strategy & Marketing",
      "Brand Identity Designing",
      "Social media designs",
      "Advertise & print design",
      "Commercial production",
      "UGC ads",
      "Website design & development",
    ],
  },
  {
    number: "04",
    name: "Tile Bazaar",
    category: "Wholesale & Retail",
    client: "Tile Bazaar UK",
    image: tileBazaarImg,
    slug: "tile-bazaar",
    description:
      "Digital creative work for a wholesale tile business and its online customer journey.",
    services: [
      "Content Strategy & Marketing",
      "Brand Identity Designing",
      "Social media designs",
      "Website design & development",
    ],
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 19 19 5M8 5h11v11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WorkBranding() {
  const navigate = useNavigate();

  const [selectedService, setSelectedService] = useState(null);
  const [servicePopupOpen, setServicePopupOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const filteredBrands = useMemo(() => {
    if (!selectedService) return brands;

    return brands.filter((brand) =>
      brand.services.includes(selectedService)
    );
  }, [selectedService]);

  useEffect(() => {
    document.body.classList.add("gothic-only-page");

    return () => {
      document.body.classList.remove("gothic-only-page");
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setServicePopupOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const openBrand = (brand) => {
    navigate(
      `/work/content-strategy-and-marketing/${brand.slug}`
    );
  };

  const chooseService = (service) => {
    setSelectedService(service);
    setServicePopupOpen(false);
    setActiveIndex(null);
  };

  const showAll = () => {
    setSelectedService(null);
    setServicePopupOpen(false);
    setActiveIndex(null);
  };

  return (
    <div className="wb-page">
      <div className="wb-decoration" aria-hidden="true">
        <div className="wb-glow" />
      </div>

      <main className="wb-main">
        <header className="wb-intro">
          <Link to="/work" className="wb-back">
            <span aria-hidden="true">←</span>
            Back to Work
          </Link> <br />

          <div className="wb-eyebrow">
            <span className="wb-eyebrow-dot" />
            Design &amp; Identity
          </div>

          <div className="wb-heading-row">
            <div>

              <h1 className="wb-title">
                Branding &amp; Creative
                <span>Solutions.</span>
              </h1>
            </div>

            <p className="wb-intro-copy">
              A collection of creative projects built around thoughtful
              design, confident brand identities, and lasting impressions.
              Explore our selected client work.
            </p>
          </div>

          <div className="wb-section-meta">
            <span>Selected projects</span>
            <span>
              {String(filteredBrands.length).padStart(2, "0")} /{" "}
              {String(brands.length).padStart(2, "0")}
            </span>
          </div>
        </header>

        <section
          className="wb-brand-grid"
          aria-label="Selected branding projects"
        >
          <AnimatePresence mode="popLayout">
            {filteredBrands.map((brand) => {
              const index = brands.findIndex(
                (item) => item.slug === brand.slug
              );

              return (
                <motion.article
                  layout
                  key={brand.slug}
                  className={[
                    "wb-brand-card",
                    activeIndex === index ? "is-active" : "",
                    activeIndex !== null && activeIndex !== index
                      ? "is-dimmed"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  tabIndex={0}
                  role="link"
                  aria-label={`View ${brand.name} campaign`}
                  onPointerEnter={() => setActiveIndex(index)}
                  onPointerLeave={() => setActiveIndex(null)}
                  onFocus={() => setActiveIndex(index)}
                  onBlur={(event) => {
                    if (
                      !event.currentTarget.contains(event.relatedTarget)
                    ) {
                      setActiveIndex(null);
                    }
                  }}
                  onClick={() => openBrand(brand)}
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" ||
                      event.key === " "
                    ) {
                      event.preventDefault();
                      openBrand(brand);
                    }
                  }}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="wb-card-image">
                    <span className="wb-brand-number">
                      {brand.number}.
                    </span>

                    <span className="wb-brand-category">
                      {brand.category}
                    </span>

                    <div className="wb-logo-wrap">
                      <img
                        className="wb-logo"
                        src={brand.image}
                        alt={`${brand.name} project`}
                        loading="lazy"
                      />
                    </div>

                    <div className="wb-hover-info">
                      <span className="wb-hover-client">
                        {brand.client}
                      </span>

                      <p className="wb-hover-description">
                        {brand.description}
                      </p>

                      <div className="wb-hover-services">
                        {brand.services.slice(0, 3).map((service) => (
                          <span key={service}>{service}</span>
                        ))}
                      </div>

                      <div className="wb-hover-footer">
                        <span>View campaign</span>
                        <ArrowIcon />
                      </div>
                    </div>
                  </div>

                  <div className="wb-card-caption">
                    <span className="wb-caption-number">
                      {brand.number}.
                    </span>

                    <div>
                      <h2 className="wb-caption-title">
                        {brand.name}
                      </h2>

                      <p className="wb-caption-client">
                        {brand.client}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </section>

        {filteredBrands.length === 0 && (
          <div className="wb-empty-state">
            No projects are tagged with this service yet.
            <button type="button" onClick={showAll}>
              Show all projects
            </button>
          </div>
        )}

        <footer className="wb-bottom">
          <span>Ideas made visible.</span>

          <Link to="/contact">
            Start a project <ArrowIcon />
          </Link>
        </footer>
      </main>

      {/* Bottom-center sticky filter */}
      <div className="wb-filter-dock" aria-label="Project filters">
        <button
          type="button"
          className={[
            "wb-filter-pill",
            !selectedService ? "wb-filter-pill-active" : "",
          ].join(" ")}
          onClick={showAll}
        >
          All
        </button>

        {selectedService ? (
          <button
            type="button"
            className="wb-filter-pill wb-filter-pill-selected"
            onClick={() => setServicePopupOpen(true)}
            aria-expanded={servicePopupOpen}
          >
            <span>{selectedService}</span>

            <span
              className="wb-filter-clear"
              role="button"
              aria-label="Clear service filter"
              onClick={(event) => {
                event.stopPropagation();
                showAll();
              }}
            >
              ×
            </span>
          </button>
        ) : (
          <button
            type="button"
            className="wb-filter-pill"
            onClick={() => setServicePopupOpen((open) => !open)}
            aria-expanded={servicePopupOpen}
            aria-controls="wb-service-popup"
          >
            Services
          </button>
        )}
      </div>

      <AnimatePresence>
{servicePopupOpen && (
  <>
    <motion.button
      key="wb-filter-backdrop"
      type="button"
      className="wb-filter-backdrop"
      aria-label="Close service filter"
      onClick={() => setServicePopupOpen(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />

    <motion.div
      key="wb-service-popup-shell"
      className="wb-service-popup-shell"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.section
        id="wb-service-popup"
        className="wb-service-popup"
        aria-label="Choose a service"
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <div className="wb-popup-heading">
          <span>Explore by service</span>
          <span>{SERVICES.length} SERVICES</span>
        </div>

        <div className="wb-service-options">
          {SERVICES.map((service) => (
            <button
              type="button"
              key={service}
              className={[
                "wb-service-option",
                selectedService === service ? "is-selected" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              aria-pressed={selectedService === service}
              onClick={() => chooseService(service)}
            >
              {service}

              {selectedService === service && (
                <span aria-hidden="true">✓</span>
              )}
            </button>
          ))}
        </div>

        <div className="wb-popup-footer">
          <span>
            {selectedService
              ? `Selected: ${selectedService}`
              : "Choose a service to filter projects"}
          </span>

          <button type="button" onClick={showAll}>
            Clear filter
          </button>
        </div>
      </motion.section>
    </motion.div>
  </>
)}
      </AnimatePresence>
    </div>
  );
}
