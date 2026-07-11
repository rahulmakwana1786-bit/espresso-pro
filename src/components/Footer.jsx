import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-transparent text-[#291b03] px-6 md:px-12 py-12">
      {/* MAIN CONTENT */}
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-8 pb-16">
        
        {/* LEFT: Branding & Socials */}
        <div className="flex-1 w-full lg:max-w-[400px] flex flex-col gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif text-[#cca027] mb-2 tracking-wide">
              The Espresso Media
            </h1>
            <p className="text-[#291b03]/70 text-base md:text-lg">
              Brewing Digital Success
            </p>
          </div>

          <div className="flex items-center gap-6 mt-8">
            <a href="https://www.instagram.com/the_espresso_media/" target="_blank" rel="noopener noreferrer" className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-[#291b03]/60 hover:text-[#cca027] transition-colors">
              INSTAGRAM
            </a>
            <a href="https://www.facebook.com/profile.php?id=61573148172354" target="_blank" rel="noopener noreferrer" className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-[#291b03]/60 hover:text-[#cca027] transition-colors">
              FACEBOOK
            </a>
            <a href="https://www.linkedin.com/company/101439588/admin/page-posts/published/" target="_blank" rel="noopener noreferrer" className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-[#291b03]/60 hover:text-[#cca027] transition-colors">
              LINKEDIN
            </a>
          </div>
        </div>

        {/* MIDDLE: Visit */}
        <div className="flex-1 w-full lg:max-w-[300px] flex flex-col gap-5">
          <h3 className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#cca027]">
            VISIT
          </h3>
          <div className="text-[#291b03]/80 text-sm leading-relaxed flex flex-col gap-1">
            <p>The Espresso Media, B906,</p>
            <p>Swati trinity, SP 150ft ring road</p>
            <p>Ahmedabad, 380057</p>
          </div>
        </div>

        {/* RIGHT: Connect */}
        <div className="flex-1 w-full lg:max-w-[300px] flex flex-col gap-5">
          <h3 className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#cca027]">
            CONNECT
          </h3>
          <div className="flex flex-col gap-4 text-sm text-[#291b03]/80">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#291b03]/50">HIRE US</span>
              <a href="mailto:info@espressomedia.in" className="hover:text-[#cca027] transition-colors break-all">info@espressomedia.in</a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#291b03]/50">JOIN US</span>
              <a href="mailto:career@espressomedia.in" className="hover:text-[#cca027] transition-colors break-all">career@espressomedia.in</a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#291b03]/50">CONTACT US</span>
              <a href="tel:+918758117559" className="hover:text-[#cca027] transition-colors">+91 87581 17559</a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-[1400px] mx-auto border-t border-[#291b03]/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#291b03]/50 font-medium">
        <p>
          © {new Date().getFullYear()} The Espresso Media. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-[#cca027] transition-colors">Privacy Policy</Link>
          <Link to="/" className="hover:text-[#cca027] transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}