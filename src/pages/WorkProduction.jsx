import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoGridCard = ({ video, colSpanClass }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setCurrentTime(current);
      if (total) {
        setProgress((current / total) * 100);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds) || !timeInSeconds) return "0:00";
    const m = Math.floor(timeInSeconds / 60);
    const s = Math.floor(timeInSeconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className={`video-grid-card relative group border rounded-2xl bg-[#090605] overflow-hidden transition-all duration-300 ${colSpanClass}`}>
      <div className={`w-full ${video.isReel ? 'aspect-[9/16]' : 'aspect-[16/9]'} bg-black overflow-hidden relative group/video`}>
        <video
          ref={videoRef}
          src={video.src}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          className="w-full h-full object-cover relative z-20 pointer-events-none"
          onError={(e) => {
            if (e.currentTarget.src !== video.fallback) {
              e.currentTarget.src = video.fallback;
            }
          }}
        />
        
        {/* Controls Overlay (Appears on hover) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 z-30 flex flex-col justify-between p-4 sm:p-5">
          
          {/* Top: Mute Toggle */}
          <div className="flex justify-end">
            <button 
              onClick={toggleMute} 
              className="bg-black/40 hover:bg-black/70 backdrop-blur-md text-[#291b03] p-2 sm:p-2.5 rounded-full border border-white/10 transition-colors shadow-lg"
            >
              {isMuted ? (
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                  <line x1="23" y1="9" x2="17" y2="15"></line>
                  <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                </svg>
              )}
            </button>
          </div>

          {/* Bottom: Play/Pause & Progress */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <button 
                onClick={togglePlay} 
                className="text-[#291b03] hover:text-[#B8734E] transition-colors bg-black/40 hover:bg-black/70 backdrop-blur-md p-1.5 sm:p-2 rounded-full border border-white/10"
              >
                {isPlaying ? (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                ) : (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current transform translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                )}
              </button>
              
              <div className="text-[#291b03] text-[10px] sm:text-xs font-mono tracking-wider drop-shadow-md">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>
            
            {/* Progress Bar (Clickable for Seeking) */}
            <div 
              className="w-full h-1.5 sm:h-2 bg-white/20 rounded-full overflow-hidden shadow-inner cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (videoRef.current && duration) {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const newTime = (clickX / rect.width) * duration;
                  videoRef.current.currentTime = newTime;
                  setProgress((clickX / rect.width) * 100);
                  setCurrentTime(newTime);
                }
              }}
            >
              <div 
                className="h-full bg-[#B8734E] rounded-full transition-all duration-100 ease-linear pointer-events-none" 
                style={{ width: `${progress}%` }} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function WorkProduction() {
  const containerRef = useRef(null);
  const mainPlayerRef = useRef(null);
  const sectionPlayerRef = useRef(null);

  // Active Video State
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
      src: "/videos/01.mp4",
      fallback: "/videos/01.mp4",
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
      tag: "Reels",
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
      src: "/videos/06.mp4",
      fallback: "/videos/06.mp4",
      duration: "0:15",
      desc: "Vertical Video 2"
    },
    {
      id: "07",
      title: "Vertical Project 03",
      tag: "Reels",
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
      className="w-full min-h-screen bg-[#fbf8f3] text-[#291b03] font-gothic selection:bg-[#B8734E]/30 relative pt-[120px] lg:pt-[150px]"
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
                className="text-[#A8A8A8] text-xs tracking-[0.2em] uppercase hover:text-[#B8734E] transition-colors flex items-center gap-3 mb-10 group"
              >
                <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> BACK TO WORK
              </Link>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B8734E]/10 border border-[#B8734E]/20 mb-6 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8734E] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8734E]"></span>
                </span>
                <span className="text-[#B8734E] text-xs font-semibold tracking-wider uppercase">Cinematic Shoots</span>
              </div>

              <h1 className="font-gothic font-black text-4xl md:text-5xl lg:text-6xl text-[#cca027] leading-[1.1] tracking-tight cursor-default">
                Commercial Production
              </h1>

              <div className="h-6 lg:h-10 shrink-0" />

              <p className="text-[#D0D0D0] text-lg lg:text-xl leading-relaxed max-w-md font-light mb-8">
                A collection of commercial production projects focused on bringing ideas to life through thoughtful visuals and purposeful storytelling. 
              </p>




            </div>
          </div>

          {/* Right Column: Cinema Player & Looping Video List */}
          <div className="w-full lg:w-[57%] flex flex-col gap-10 lg:gap-14 pb-8 lg:pb-12 relative">
            
            {/* Ambient Breathing Glow behind Player */}
            <div className="absolute -top-10 -left-10 w-[120%] h-[600px] bg-[radial-gradient(circle,rgba(200,155,94,0.06)_0%,transparent_60%)] rounded-full pointer-events-none blur-[60px] animate-pulse duration-[8000ms]" />

            {/* ALL PRODUCTION VIDEOS GRID */}
            <div className="flex flex-col gap-6 text-left">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8734E]" />
                <h3 className="text-xs font-black tracking-[0.25em] text-[#B8734E] uppercase">
                  All Production Videos ({playlist.length})
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4 items-start">
                {playlist.map((video, idx) => {
                  const isActive = idx === activeIdx;
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
      `}</style>
    </div>
  );
}
