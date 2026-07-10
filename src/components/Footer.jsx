
export default function Footer() {
  return (
    <footer className="bg-transparent text-[#291b03] px-6 md:px-10">
      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto lg:pl-4 2xl:pl-25 pt-16 pb-8 flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-start justify-between gap-8 md:gap-6 lg:gap-12">
        {/* LEFT */}
        <div className="flex-1 min-w-[250px] md:min-w-[calc(50%-12px)] lg:min-w-[250px] text-left">
          <h1 className="text-[28px] md:text-[32px] lg:text-[36px] font-serif text-[#C08860] mb-1">
            The Espresso Media
          </h1>
          <p className="text-[#291b03]/80 text-base md:text-lg mb-6">Brewing Digital Success</p>

          {/* Social Media Links */}
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/the_espresso_media/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-7 h-7 rounded-full border border-[#C08860] flex items-center justify-center text-[#C08860] overflow-hidden transition-transform duration-200 hover:scale-105"
              aria-label="Follow us on Instagram"
            >
              <svg className="relative z-10 w-4 h-4 transition-colors duration-300 group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-[#C08860] to-[#a86d4a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61573148172354"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-7 h-7 rounded-full border border-[#C08860] flex items-center justify-center text-[#C08860] overflow-hidden transition-transform duration-200 hover:scale-105"
              aria-label="Follow us on Facebook"
            >
              <svg
                className="relative z-10 w-4 h-4 transition-colors duration-300 group-hover:text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-[#C08860] to-[#a86d4a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/101439588/admin/page-posts/published/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-7 h-7 rounded-full border border-[#C08860] flex items-center justify-center text-[#C08860] overflow-hidden transition-transform duration-200 hover:scale-105"
              aria-label="Follow us on LinkedIn"
            >
              <svg className="relative z-10 w-4 h-4 transition-colors duration-300 group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-[#C08860] to-[#a86d4a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </a>
          </div>
        </div>

        {/* CENTER */}
        <div className="flex-1 min-w-[250px] md:min-w-[calc(50%-12px)] lg:min-w-[250px] text-left">
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-[#cca027]">Visit</h3>
          <div className="text-[#291b03]/80 text-sm md:text-base leading-6 md:leading-7 space-y-1">
            <p>The Espresso Media, B906,</p>
            <p>Swati trinity, SP 150ft ring road</p>
            <p>Ahmedabad, 380057</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 min-w-[250px] md:min-w-full lg:min-w-[250px] text-left">
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-[#cca027]">Connect</h3>
          <div className="text-[#291b03]/80 text-sm md:text-base leading-6 md:leading-7 space-y-2">
            <p>
              <span className="text-[#291b03] font-semibold">Hire Us:</span>{" "}
              <a
                href="mailto:info@espressomedia.in"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "mailto:info@espressomedia.in";
                  setTimeout(() => {
                    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=info@espressomedia.in", "_blank");
                  }, 400);
                }}
                className="hover:text-[#C08860] transition-colors duration-300 break-all"
              >
                info@espressomedia.in
              </a>
            </p>
            <p>
              <span className="text-[#291b03] font-semibold">Join Us:</span>{" "}
              <a
                href="mailto:career@espressomedia.in"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "mailto:career@espressomedia.in";
                  setTimeout(() => {
                    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=career@espressomedia.in", "_blank");
                  }, 400);
                }}
                className="hover:text-[#C08860] transition-colors duration-300 break-all"
              >
                career@espressomedia.in
              </a>
            </p>
            <p>
              <span className="text-[#291b03] font-semibold">Contact us:</span>{" "}
              <a
                href="tel:+918758117559"
                className="hover:text-[#C08860] transition-colors duration-300"
              >
                +91 87581 17559
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="max-w-7xl mx-auto border-t border-white/20" />

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto py-6 md:py-8 flex flex-col items-center justify-center text-xs md:text-sm text-[#291b03]/60 gap-4">
        <p className="text-center w-full">
          © {new Date().getFullYear()} The Espresso Media. All rights reserved.
        </p>
      </div>
    </footer>
  );
}