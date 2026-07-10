import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import vinayakImg from "../assets/profile/vinayak_honda.png";
import nishaImg from "../assets/profile/nisha.png";
import dinuImg from "../assets/profile/dinu.png";
import akshitImg from "../assets/profile/akshit_pobaru.png";

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});

  const [animationDuration, setAnimationDuration] = useState("25s");

  useEffect(() => {
    const updateDuration = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setAnimationDuration("50s"); // slower on mobile
      } else {
        setAnimationDuration("25s"); // faster on desktop
      }
    };

    updateDuration();
    window.addEventListener("resize", updateDuration);

    return () => window.removeEventListener("resize", updateDuration);
  }, []);

  const handleImageLoad = (index) => {
    setImagesLoaded((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <>
      <section className="w-full bg-[#fbf8f3] text-[#291b03] px-6 md:px-12 lg:px-30 py-20 max-sm:py-16 overflow-hidden">
        {" "}
        <div className="relative z-10 text-center mb-16 max-sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B8734E]/10 to-[#8a563a]/10 border border-[#B8734E]/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8734E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8734E]"></span>
              </span>
              <span className="text-[#B8734E] text-sm font-medium tracking-wide">
                Client Success Stories
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-6xl max-sm:text-4xl mb-4"
          >
            What Our{" "}
            <span className="relative inline-block pb-3">
              <span className="bg-gradient-to-r from-[#8a563a] via-espresso to-[#8a563a] bg-clip-text text-transparent italic font-bold animate-[shimmer_3s_ease-in-out_infinite] bg-[length:200%_auto]">
                Clients Say
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B8734E] to-transparent rounded-full blur-sm"></span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#291b03] text-lg mt-4 max-w-2xl mx-auto"
          >
            Real feedback from brands we've helped grow
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#B8734E] to-transparent relative"
          />
        </div>
        <div
          id="carousel"
          className="flex m-auto w-full overflow-x-hidden [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:none]
          [scrollbar-width:none]"
        >
          {/* group of 4 */}
          <div
            className={`flex flex-none basis-4 items-center justify-center gap-4 pr-4 ${isPaused ? "paused" : ""}`}
            onMouseEnter={(e) => {
              if (window.matchMedia("(hover: hover)").matches) {
                setIsPaused(true);
              }
            }}
            onMouseLeave={(e) => {
              if (window.matchMedia("(hover: hover)").matches) {
                setIsPaused(false);
              }
            }}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            style={{
              animation: `scroll ${animationDuration} infinite linear`,
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {/* card 1 - umar */}
            <div
              className="
              min-w-[430px] max-lg:min-w-[400px]
              max-sm:min-w-[320px] max-sm:min-h-[320px]
              rounded-[32px]
              bg-gradient-to-b from-[#3a2316] to-[#6a5a4a]
              p-8 max-sm:p-5
              shadow-[0_20px_60px_rgba(0,0,0,0.6)]
              flex flex-col
            "
            >
              <div className="flex items-center gap-4 mb-4 max-sm:gap-3 max-sm:mb-3">
                <div
                  className="
                  relative w-16 h-16 max-sm:w-16 max-sm:h-16
                  rounded-full bg-[#1b120f]
                  border border-espresso/40 ring-1 ring-espresso/10
                  overflow-hidden
                "
                >
                  {!imagesLoaded[0] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8a563a]/20 via-[#8a563a]/10 to-[#8a563a]/20 animate-pulse" />
                  )}
                  <img
                    src={vinayakImg}
                    alt="Umar"
                    onLoad={() => handleImageLoad(0)}
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                    // decoding="async"
                  />
                </div>

                <div>
                  <h4 className="text-lg max-sm:text-base font-semibold font-serif">
                    Umar
                  </h4>
                  <p className="text-sm max-sm:text-xs text-[#291b03]">
                    Marketing Manager at Vinayak Honda
                  </p>
                  <p className="text-sm max-sm:text-xs text-[#291b03]">
                    Morbi, Gujarat
                  </p>
                </div>
              </div>

              <p className="text-[12px] max-sm:text-[12px] leading-relaxed text-[#291b03]">
                The espresso media team represents among the highest levels of
                customer service I have experienced. Information was accurate,
                responses to queries were turned around very fast. Answers were
                clear and where necessary detailed enough for us to make
                informed decisions quickly, minimising the end to end time to
                process complex transactions among a number of parties.
              </p>
            </div>
            {/* card 2 - akshit */}
            <div
              className="min-w-[550px] max-lg:min-w-[400px]
              max-sm:min-w-[320px] max-sm:min-h-[320px] rounded-[32px] bg-gradient-to-b from-[#3a2316] to-[#6a5a4a] p-8 max-sm:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full bg-[#1b120f] border border-espresso/40 ring-1 ring-espresso/10 overflow-hidden">
                  {!imagesLoaded[1] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8a563a]/20 via-[#8a563a]/10 to-[#8a563a]/20 animate-pulse" />
                  )}
                  <img
                    src={akshitImg}
                    alt="Akshit Pobaru"
                    onLoad={() => handleImageLoad(1)}
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                    // decoding="async"
                  />
                </div>
                <div>
                  <h4 className="text-lg max-sm:text-base font-semibold font-serif">
                    Akshit Pobaru
                  </h4>
                  <p className="text-sm max-sm:text-xs text-[#291b03]">
                    MD of the Gokul Group
                  </p>
                  <p className="text-sm max-sm:text-xs text-[#291b03]">
                    Jamnagar, Gujarat
                  </p>
                </div>
              </div>
              <p className="text-[12px] max-sm:text-[11px] leading-relaxed text-[#291b03]">
                I have been working with The Espresso Media for 3 years now!
                Their expertise in crafting keen and professional designs is
                unparalleled. Espresso Media has consistently exceeded my
                expectations, delivering outstanding results. Their creative
                team consistently produces designs that are not only visually
                stunning but also perfectly aligned with our brand identity and
                marketing objectives. Their attention to detail, innovative
                ideas, and commitment to client satisfaction are exemplary. I,
                with my entire team of Gokul Group, highly recommend The
                Espresso Media.
              </p>
            </div>
            {/* Card 3 - Nisha */}
            <div
              className="min-w-[500px] max-lg:min-w-[400px]
              max-sm:min-w-[320px] max-sm:min-h-[320px] rounded-[32px] bg-gradient-to-b from-[#3a2316] to-[#6a5a4a] p-8 max-sm:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full bg-[#1b120f] border border-espresso/40 ring-1 ring-espresso/10 overflow-hidden">
                  {!imagesLoaded[2] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8a563a]/20 via-[#8a563a]/10 to-[#8a563a]/20 animate-pulse" />
                  )}
                  <img
                    src={nishaImg}
                    alt="Nisha Mariam"
                    onLoad={() => handleImageLoad(2)}
                    className="w-full h-full max-sm:w-16 max-sm:h-16 object-cover"
                    loading="lazy"
                    fetchPriority="high"
                    // decoding="async"
                  />
                </div>
                <div>
                  <h4 className="text-lg max-sm:text-base font-semibold font-serif">
                    Nisha Mariam
                  </h4>
                  <p className="text-sm max-sm:text-xs text-[#291b03]">
                    Co-founder at You 'n' us consulting
                  </p>
                  <p className="text-sm max-sm:text-xs text-[#291b03]">
                    Florida, USA
                  </p>
                </div>
              </div>
              <p className="text-[12px] max-sm:text-[12px] leading-relaxed text-[#291b03]">
                Working with The Espresso Media has been a pleasure for our
                company. The team is personable, and excels in collaboration.
                Their dedication to achieving our company's goals is evident, as
                they leverage their professional skills and talent to execute a
                strategic plan, resulting in the creation of an
                attention-grabbing social media account for our business. We
                highly recommend The Espresso Media for their exceptional social
                media marketing skills.
              </p>
            </div>
            {/* Card 4 - Dinu */}
            <div
              className="min-w-[500px] max-lg:min-w-[400px]
              max-sm:min-w-[320px] max-sm:min-h-[320px] rounded-[32px] bg-gradient-to-b from-[#3a2316] to-[#6a5a4a] p-8 max-sm:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full bg-[#1b120f] border border-espresso/40 ring-1 ring-espresso/10 overflow-hidden">
                  {!imagesLoaded[3] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8a563a]/20 via-[#8a563a]/10 to-[#8a563a]/20 animate-pulse" />
                  )}
                  <img
                    src={dinuImg}
                    alt="Dinu"
                    onLoad={() => handleImageLoad(3)}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    fetchPriority="high"
                    // decoding="async"
                  />
                </div>
                <div>
                  <h4 className="text-lg max-sm:text-base font-semibold font-serif">
                    Dinu
                  </h4>
                  <p className="text-sm max-sm:text-xs text-[#291b03]">
                    Business & mindset coach
                  </p>
                  <p className="text-sm max-sm:text-xs text-[#291b03]">
                    Sri Lanka
                  </p>
                </div>
              </div>
              <p className="text-[12px] max-sm:text-[11px] leading-relaxed text-[#291b03]">
                The Espresso Media boasts one of the most creative and highly
                skilled Social Media Managers and Graphic Designers in our team.
                The professionals at The Espresso Media are dedicated and
                professional in their approach to projects, consistently
                delivering top-notch results. Communication is seamless, making
                it easy to provide feedback, and deadlines are met effectively,
                resulting in excellent outcomes. We extend our best wishes to
                The Espresso Media for their continued success!
              </p>
            </div>
          </div>
          {/* second duplicate group of 4 */}
          <div
            aria-hidden="true"
            className={`flex flex-none basis-4 items-center justify-center gap-4 pr-4 ${isPaused ? "paused" : ""}`}
            onMouseEnter={(e) => {
              if (window.matchMedia("(hover: hover)").matches) {
                setIsPaused(true);
              }
            }}
            onMouseLeave={(e) => {
              if (window.matchMedia("(hover: hover)").matches) {
                setIsPaused(false);
              }
            }}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            style={{
              animation: `scroll ${animationDuration} infinite linear`,
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {/* card 1 - umar */}
            <div
              className="
              min-w-[430px] max-lg:min-w-[400px]
              max-sm:min-w-[320px] max-sm:min-h-[320px]
              rounded-[32px]
              bg-gradient-to-b from-[#3a2316] to-[#6a5a4a]
              p-8 max-sm:p-5
              shadow-[0_20px_60px_rgba(0,0,0,0.6)]
              flex flex-col
            "
            >
              <div className="flex items-center gap-4 mb-4 max-sm:gap-3 max-sm:mb-3">
                <div
                  className="
                  relative w-16 h-16 max-sm:w-16 max-sm:h-16
                  rounded-full bg-[#1b120f]
                  border border-espresso/40 ring-1 ring-espresso/10
                  overflow-hidden
                "
                >
                  {!imagesLoaded[0] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8a563a]/20 via-[#8a563a]/10 to-[#8a563a]/20 animate-pulse" />
                  )}
                  <img
                    src={vinayakImg}
                    alt="Umar"
                    onLoad={() => handleImageLoad(0)}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    // decoding="async"
                  />
                </div>

                <div>
                  <h4 className="text-lg max-sm:text-base font-semibold font-serif">
                    Umar
                  </h4>
                  <p className="text-sm max-sm:text-xs text-[#291b03]">
                    Marketing Manager at Vinayak Honda
                  </p>
                  <p className="text-sm max-sm:text-xs text-[#291b03]">
                    Morbi, Gujarat
                  </p>
                </div>
              </div>

              <p className="text-[12px] max-sm:text-[12px] leading-relaxed text-[#291b03]">
                The espresso media team represents among the highest levels of
                customer service I have experienced. Information was accurate,
                responses to queries were turned around very fast. Answers were
                clear and where necessary detailed enough for us to make
                informed decisions quickly, minimising the end to end time to
                process complex transactions among a number of parties.
              </p>
            </div>
            {/* card 2 - akshit */}
            <div
              className="min-w-[550px] max-lg:min-w-[400px]
              max-sm:min-w-[320px] max-sm:min-h-[320px] rounded-[32px] bg-gradient-to-b from-[#3a2316] to-[#6a5a4a] p-8 max-sm:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full bg-[#1b120f] border border-espresso/40 ring-1 ring-espresso/10 overflow-hidden">
                  {!imagesLoaded[1] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8a563a]/20 via-[#8a563a]/10 to-[#8a563a]/20 animate-pulse" />
                  )}
                  <img
                    src={akshitImg}
                    alt="Akshit Pobaru"
                    onLoad={() => handleImageLoad(1)}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    // decoding="async"
                  />
                </div>
                <div>
                  <h4 className="text-lg max-sm:text-base font-semibold font-serif">
                    Akshit Pobaru
                  </h4>
                  <p className="text-sm max-sm:text-xs text-[#291b03]">
                    MD of the Gokul Group
                  </p>
                  <p className="text-sm max-sm:text-xs text-[#291b03]">
                    Jamnagar, Gujarat
                  </p>
                </div>
              </div>
              <p className="text-[12px] max-sm:text-[11px] leading-relaxed text-[#291b03]">
                I have been working with The Espresso Media for 3 years now!
                Their expertise in crafting keen and professional designs is
                unparalleled. Espresso Media has consistently exceeded my
                expectations, delivering outstanding results. Their creative
                team consistently produces designs that are not only visually
                stunning but also perfectly aligned with our brand identity and
                marketing objectives. Their attention to detail, innovative
                ideas, and commitment to client satisfaction are exemplary. I,
                with my entire team of Gokul Group, highly recommend The
                Espresso Media.
              </p>
            </div>
            {/* Card 3 - Nisha */}
            <div
              className="min-w-[500px] max-lg:min-w-[400px]
              max-sm:min-w-[320px] max-sm:min-h-[320px] rounded-[32px] bg-gradient-to-b from-[#3a2316] to-[#6a5a4a] p-8 max-sm:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full bg-[#1b120f] border border-espresso/40 ring-1 ring-espresso/10 overflow-hidden">
                  {!imagesLoaded[2] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8a563a]/20 via-[#8a563a]/10 to-[#8a563a]/20 animate-pulse" />
                  )}
                  <img
                    src={nishaImg}
                    alt="Nisha Mariam"
                    onLoad={() => handleImageLoad(2)}
                    className="w-full h-full max-sm:w-16 max-sm:h-16 object-cover"
                    loading="lazy"
                    // decoding="async"
                  />
                </div>
                <div>
                  <h4 className="text-lg max-sm:text-base font-semibold font-serif">
                    Nisha Mariam
                  </h4>
                  <p className="text-sm max-sm:text-xs text-[#291b03]">
                    Co-founder at You 'n' us consulting
                  </p>
                  <p className="text-sm max-sm:text-xs text-[#291b03]">
                    Florida, USA
                  </p>
                </div>
              </div>
              <p className="text-[12px] max-sm:text-[12px] leading-relaxed text-[#291b03]">
                Working with The Espresso Media has been a pleasure for our
                company. The team is personable, and excels in collaboration.
                Their dedication to achieving our company's goals is evident, as
                they leverage their professional skills and talent to execute a
                strategic plan, resulting in the creation of an
                attention-grabbing social media account for our business. We
                highly recommend The Espresso Media for their exceptional social
                media marketing skills.
              </p>
            </div>
            {/* Card 4 - Dinu */}
            <div
              className="min-w-[500px] max-lg:min-w-[400px]
              max-sm:min-w-[320px] max-sm:min-h-[320px] rounded-[32px] bg-gradient-to-b from-[#3a2316] to-[#6a5a4a] p-8 max-sm:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full bg-[#1b120f] border border-espresso/40 ring-1 ring-espresso/10 overflow-hidden">
                  {!imagesLoaded[3] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8a563a]/20 via-[#8a563a]/10 to-[#8a563a]/20 animate-pulse" />
                  )}
                  <img
                    src={dinuImg}
                    alt="Dinu"
                    onLoad={() => handleImageLoad(3)}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    // decoding="async"
                  />
                </div>
                <div>
                  <h4 className="text-lg max-sm:text-base font-semibold font-serif">
                    Dinu
                  </h4>
                  <p className="text-sm max-sm:text-xs text-[#291b03]">
                    Business & mindset coach
                  </p>
                  <p className="text-sm max-sm:text-xs text-[#291b03]">
                    Sri Lanka
                  </p>
                </div>
              </div>
              <p className="text-[12px] max-sm:text-[11px] leading-relaxed text-[#291b03]">
                The Espresso Media boasts one of the most creative and highly
                skilled Social Media Managers and Graphic Designers in our team.
                The professionals at The Espresso Media are dedicated and
                professional in their approach to projects, consistently
                delivering top-notch results. Communication is seamless, making
                it easy to provide feedback, and deadlines are met effectively,
                resulting in excellent outcomes. We extend our best wishes to
                The Espresso Media for their continued success!
              </p>
            </div>
          </div>
        </div>
        <style jsx>{`
        @keyframes scroll{
          from {translate:0;}
          to {translate:-100%;}
        }
-       
-        
      `}</style>
      </section>
    </>
  );
}
