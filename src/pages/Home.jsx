import Hero from "../components/Hero.jsx";
import Beyond from "../components/Beyond.jsx";
import Notice from "../components/Notice.jsx";
import WhatWeOffer from "../components/WhatWeOffer.jsx";
import HomePortfolio from "../components/HomePortfolio.jsx";
import AboutUs from "../components/AboutUs.jsx";
import OurProcess from "../components/Ourprocess.jsx";
import FAQ from "../components/FAQ.jsx";
import ClientLogos from "../components/ClientLogos.jsx";
import AnimatedBackground from "../components/AnimatedBackground.jsx";

import { lazy, Suspense, useEffect } from "react";
 
const Client = lazy(() => import("../components/Client.jsx"));
 
import InsightSection from "../components/InsightSection.jsx";

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash;
      const el = document.querySelector(id);
      if (el) {
        setTimeout(() => {
          const headerEl = document.querySelector("header");
          const headerHeight = headerEl ? headerEl.offsetHeight : 80;
          const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({ top, behavior: "smooth" });
        }, 200);
      }
    }
  }, []);

  return (
    <>
      <div className="relative w-full">
        <AnimatedBackground />
        <div aria-hidden="true" className="h-20 md:h-24 relative z-10" />
        <Hero />
        <InsightSection />
      </div>
      <section id="beyond">
        <Beyond />
      </section>
      <section id="portfolio">
        <HomePortfolio />
      </section>
      <section id="services">
        <WhatWeOffer />
      </section>
      <AboutUs />
      <section id="clients-logos">
        <ClientLogos />
      </section>
      <section id="process">
        <OurProcess />
      </section>
      <section id="faq">
        <FAQ />
      </section>
    </>
  );
}


