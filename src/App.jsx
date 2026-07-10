import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";
import Careers from "./pages/Careers.jsx";
import Work from "./pages/Work.jsx";
import WorkContentStrategy from "./pages/WorkContentStrategy.jsx";
import WorkBranding from "./pages/WorkBranding.jsx";
import BrandIdentityDetail from "./pages/BrandIdentityDetail.jsx";
import WorkProduction from "./pages/WorkProduction.jsx";
import WorkDevelopment from "./pages/WorkDevelopment.jsx";
import CampaignDetail from "./pages/CampaignDetail.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import IntroAnimation from "./components/IntroAnimation.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-[#fbf8f3] text-[#2c1e16] min-h-screen selection:bg-[#B8734E] selection:text-[#fbf8f3]">
        {!introFinished && <IntroAnimation onComplete={() => setIntroFinished(true)} />}
        <CustomCursor />
        
        {/* Wrap main content to prevent jumping/flickering, show it conditionally or with opacity */}
        <div style={{ opacity: introFinished ? 1 : 0, transition: 'opacity 0.5s ease-in' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service/:slug" element={<ServiceDetail />} />
            <Route path="/work/content-strategy-and-marketing" element={<WorkContentStrategy />} />
            <Route path="/work/content-strategy-and-marketing/:projectSlug" element={<CampaignDetail />} />
            <Route path="/work/branding-and-creative-solutions" element={<WorkBranding />} />
            <Route path="/work/branding-and-creative-solutions/identity-design" element={<BrandIdentityDetail />} />
            <Route path="/work/commercial-production" element={<WorkProduction />} />
            <Route path="/work/web-development" element={<WorkDevelopment />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/work" element={<Work />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
