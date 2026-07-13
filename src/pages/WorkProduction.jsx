import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoGridCard = ({ video, colSpanClass }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`video-grid-card relative group border border-[#cca027]/20 rounded-2xl bg-white overflow-hidden transition-all duration-300 shadow-sm ${colSpanClass}`}>
      <div className={`w-full ${video.isReel ? 'aspect-[9/16]' : 'aspect-[16/9]'} bg-gray-100 overflow-hidden relative group/video`}>
        {hasLoaded && (
          <video
            ref={videoRef}
            src={video.src}
            loop
            muted
            playsInline
            preload="metadata"
            onMouseEnter={(e) => {
              e.currentTarget.muted = false;
              e.currentTarget.play().catch(()=>{});
            }}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.muted = true;
            }}
            className="w-full h-full object-cover relative z-20 grayscale group-hover/video:grayscale-0 transition-[filter] duration-500 ease-in-out"
            controls
            controlsList="nodownload"
            onError={(e) => {
              if (e.currentTarget.src !== video.fallback) {
                e.currentTarget.src = video.fallback;
              }
            }}
          />
        )}
      </div>
    </div>
  );
};

export default function WorkProduction() {
  const containerRef = useRef(null);
  const mainPlayerRef = useRef(null);
  const sectionPlayerRef = useRef(null);

  // Active Video State
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeIdx, setActiveIdx] = useState(0);
  const [autoPlayNext, setAutoPlayNext] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Videos Playlist (Local MP4 paths with fast Pexels/Mixkit fallbacks)
  const playlist = [
    {
      id: "01",
      title: "Commercial Project 01",
      tag: "Commercial",
      src: "/videos/001.mp4",
      fallback: "/videos/001.mp4",
      duration: "0:15",
      desc: "Commercial Production Video 1."
    },
    {
      id: "02",
      title: "Commercial Project 02",
      tag: "Commercial",
      src: "/videos/02.mp4",
      fallback: "/videos/02.mp4",
      duration: "0:15",
      desc: "Commercial Production Video 2."
    },
    {
      id: "03",
      title: "Commercial Project 03",
      tag: "Commercial",
      src: "/videos/03.mp4",
      fallback: "/videos/03.mp4",
      duration: "0:15",
      desc: "Commercial Production Video 3."
    },
    {
      id: "04",
      title: "Commercial Project 04",
      tag: "Commercial",
      src: "/videos/04.mp4",
      fallback: "/videos/04.mp4",
      duration: "0:15",
      desc: "Commercial Production Video 4."
    },
    {
      id: "05",
      title: "Vertical Project 01",
      tag: "Commercial",
      isReel: true,
      src: "/videos/05.mp4",
      fallback: "/videos/05.mp4",
      duration: "0:15",
      desc: "Vertical Video 1"
    },
    {
      id: "06",
      title: "Vertical Project 02",
      tag: "Reels",
      isReel: true,
      src: "/videos/13.mp4",
      fallback: "/videos/13.mp4",
      duration: "0:15",
      desc: "Vertical Video 2"
    },
    {
      id: "07",
      title: "Vertical Project 03",
      tag: "Commercial",
      isReel: true,
      src: "/videos/07.mp4",
      fallback: "/videos/07.mp4",
      duration: "0:15",
      desc: "Vertical Video 3"
    },
    {
      id: "08",
      title: "Vertical Project 04",
      tag: "Reels",
      isReel: true,
      src: "/videos/08.mp4",
      fallback: "/videos/08.mp4",
      duration: "0:15",
      desc: "Vertical Video 4"
    },
    {
      id: "09",
      title: "Vertical Project 05",
      tag: "Reels",
      isReel: true,
      src: "/videos/09.mp4",
      fallback: "/videos/09.mp4",
      duration: "0:15",
      desc: "Vertical Video 5"
    },
    {
      id: "10",
      title: "Vertical Project 06",
      tag: "Reels",
      isReel: true,
      src: "/videos/10.mp4",
      fallback: "/videos/10.mp4",
      duration: "0:15",
      desc: "Vertical Video 6"
    },
    {
      id: "11",
      title: "Vertical Project 07",
      tag: "Reels",
      isReel: true,
      src: "/videos/11.mp4",
      fallback: "/videos/11.mp4",
      duration: "0:15",
      desc: "Vertical Video 7"
    },
    {
      id: "12",
      title: "Vertical Project 08",
      tag: "Reels",
      isReel: true,
      src: "/videos/12.mp4",
      fallback: "/videos/12.mp4",
      duration: "0:15",
      desc: "Vertical Video 8"
    },
    {
      id: "13",
      title: "Vertical Project 09",
      tag: "Reels",
      isReel: true,
      src: "/videos/14.mp4",
      fallback: "/videos/14.mp4",
      duration: "0:15",
      desc: "Vertical Video 9"
    },
    {
      id: "14",
      title: "Vertical Project 10",
      tag: "Reels",
      isReel: true,
      src: "/videos/15.mp4",
      fallback: "/videos/15.mp4",
      duration: "0:15",
      desc: "Vertical Video 10"
    },
    {
      id: "15",
      title: "Vertical Project 11",
      tag: "Reels",
      isReel: true,
      src: "/videos/16.mp4",
      fallback: "/videos/16.mp4",
      duration: "0:15",
      desc: "Vertical Video 11"
    },
    {
      id: "16",
      title: "Vertical Project 12",
      tag: "Reels",
      isReel: true,
      src: "/videos/17.mp4",
      fallback: "/videos/17.mp4",
      duration: "0:15",
      desc: "Vertical Video 12"
    },
    {
      id: "17",
      title: "Vertical Project 13",
      tag: "Reels",
      isReel: true,
      src: "/videos/18.mp4",
      fallback: "/videos/18.mp4",
      duration: "0:15",
      desc: "Vertical Video 13"
    },
    {
      id: "18",
      title: "Vertical Project 14",
      tag: "Commercial",
      isReel: true,
      src: "/videos/19.mp4",
      fallback: "/videos/19.mp4",
      duration: "0:15",
      desc: "Vertical Video 14"
    }
  ];

  const currentVideo = playlist[activeIdx];

  // Auto-play Next sequential chain handler
  const handleVideoEnded = () => {
    if (autoPlayNext) {
      setActiveIdx((prev) => (prev + 1) % playlist.length);
      setIsPlaying(true);
      setProgress(0);
    }
  };

  // Play/Pause toggler
  const handlePlayPause = (e) => {
    if (e) e.stopPropagation();
    const video = mainPlayerRef.current;
    if (video) {
      if (video.paused) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }
  };

  // Track playback time progress
  const handleTimeUpdate = (e) => {
    const el = e.currentTarget;
    if (el.duration) {
      setProgress((el.currentTime / el.duration) * 100);
    }
  };

  // Load new active video when index updates
  useEffect(() => {
    if (mainPlayerRef.current) {
      mainPlayerRef.current.load();
      setProgress(0);
      if (isPlaying) {
        mainPlayerRef.current.play().catch(() => {
          setIsPlaying(false);
        });
      }
    }
  }, [activeIdx]);

  useEffect(() => {
    document.body.classList.add("gothic-only-page");

    let ctx = gsap.context(() => {
      // Entrance animation for left sticky panel
      gsap.from(".left-sticky-content", {
        opacity: 0,
        x: -40,
        duration: 1.2,
        ease: "power3.out",
        clearProps: "transform",
      });

      // Video cards entrance
      gsap.utils.toArray(".video-grid-card").forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=5%",
            toggleActions: "play none none none",
          },
        });
      });
    }, containerRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    try {
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    } catch (e) {
      window.scrollTo(0, 0);
    }

    return () => {
      document.body.classList.remove("gothic-only-page");
      clearTimeout(timer);
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleSelectVideo = (idx) => {
    setActiveIdx(idx);
    setIsPlaying(true);
  };

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen bg-[#fbf8f3] text-[#291b03] font-gothic selection:bg-[#cca027]/30 relative pt-[120px] lg:pt-[150px]"
    >
      {/* Background radial glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(200,155,94,0.04)_0%,transparent_70%)] rounded-full blur-[100px]"></div>
        <div className="fixed inset-0 opacity-[0.02] bg-[linear-gradient(rgba(200,155,94,1)_1px,transparent_1px),linear-gradient(90deg,rgba(200,155,94,1)_1px,transparent_1px)] [background-size:120px_120px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]"></div>
      </div>

      <main className="w-full max-w-[92%] lg:max-w-[95%] mx-auto px-4 lg:px-6 pt-12 pb-12 lg:pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">
          
          {/* Left Column: Sticky Title & Info */}
          <div className="w-full lg:w-[38%] lg:sticky lg:top-[200px] h-fit left-sticky-content pb-8 lg:pb-12">
            <div className="flex flex-col items-start lg:justify-center">
              <Link
                to="/work"
                className="text-[#666] text-xs tracking-[0.2em] uppercase hover:text-[#cca027] transition-colors flex items-center gap-3 mb-10 group"
              >
                <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> BACK TO WORK
              </Link>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#cca027]/10 border border-[#cca027]/20 mb-6 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#cca027] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#cca027]"></span>
                </span>
                <span className="text-[#cca027] text-xs font-semibold tracking-wider uppercase">Cinematic Shoots</span>
              </div>

              <h1 className="font-gothic font-black text-4xl md:text-5xl lg:text-6xl text-[#cca027] leading-[1.1] tracking-tight cursor-default">
                Commercial Production
              </h1>

              <div className="h-6 lg:h-10 shrink-0" />

              <p className="text-[#444] text-lg lg:text-xl leading-relaxed max-w-md font-light mb-8">
                A collection of commercial production projects focused on bringing ideas to life through thoughtful visuals and purposeful storytelling. 
              </p>

              <div className="flex flex-col gap-3 w-full max-w-sm mt-4">
                {["All", "Commercial Shoot", "UGC Ads"].map((filterName) => (
                  <button 
                    key={filterName}
                    onClick={() => setActiveFilter(filterName)}
                    className={`text-left px-5 py-3 border rounded-xl text-xs md:text-sm transition-all duration-300 flex items-center justify-between group backdrop-blur-md 
                      ${activeFilter === filterName
                        ? "border-[#cca027] bg-[#cca027]/10 text-[#cca027] shadow-[0_10px_20px_rgba(204,160,39,0.1)] scale-[1.02] font-bold" 
                        : "border-[#cca027]/20 bg-white/50 shadow-sm text-[#291b03]/80 hover:border-[#cca027]/50 hover:text-[#cca027] hover:scale-[1.01] hover:-translate-y-0.5 active:scale-95"
                      }`}
                  >
                    <span className="uppercase tracking-widest">{filterName}</span>
                    {activeFilter === filterName && <span className="opacity-100 text-[#cca027]">&bull;</span>}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Cinema Player & Looping Video List */}
          <div className="w-full lg:w-[57%] flex flex-col gap-10 lg:gap-14 pb-8 lg:pb-12 relative">
            
            {/* Ambient Breathing Glow behind Player */}
            <div className="absolute -top-10 -left-10 w-[120%] h-[600px] bg-[radial-gradient(circle,rgba(200,155,94,0.06)_0%,transparent_60%)] rounded-full pointer-events-none blur-[60px] animate-pulse duration-[8000ms]" />

            {/* ALL PRODUCTION VIDEOS GRID */}
            <div className="flex flex-col gap-6 text-left">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#cca027]" />
                <h3 className="text-xs font-black tracking-[0.25em] text-[#cca027] uppercase">
                  All Production Videos
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4 items-start">
                {playlist
                  .filter((video) => {
                    if (activeFilter === "Commercial Shoot") return video.tag === "Commercial";
                    if (activeFilter === "UGC Ads") return video.tag === "Reels";
                    return true;
                  })
                  .map((video, idx) => {
                  const colSpanClass = video.isReel ? "col-span-1" : "col-span-2";
                  return <VideoGridCard key={video.id} video={video} colSpanClass={colSpanClass} />;
                })}
              </div>
            </div>

          </div>

        </div>
      </main>

      <style>{`
        .video-grid-card {
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.4s ease, box-shadow 0.4s ease !important;
        }
        .video-grid-card:hover {
          transform: translateY(-5px) !important;
          border-color: rgba(200, 155, 94, 0.45) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.75) !important;
        }
        .left-sticky-content {
          backface-visibility: hidden;
        }
        video:fullscreen {
          filter: none !important;
        }
        video:-webkit-full-screen {
          filter: none !important;
        }
        video:-moz-full-screen {
          filter: none !important;
        }
        video:-ms-fullscreen {
          filter: none !important;
        }
      `}</style>
    </div>
  );
}


