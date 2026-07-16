import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#0a111a]">
      <motion.div 
        animate={{
          background: [
            "radial-gradient(circle at 40% 50%, #B6A27D 0%, transparent 60%), radial-gradient(circle at 80% 30%, #1A4035 0%, transparent 50%), radial-gradient(circle at 70% 70%, #1B2952 0%, transparent 60%), radial-gradient(circle at 20% 80%, #876532 0%, transparent 50%)",
            "radial-gradient(circle at 30% 60%, #1B2952 0%, transparent 60%), radial-gradient(circle at 70% 40%, #2A5A6D 0%, transparent 50%), radial-gradient(circle at 60% 80%, #1A4035 0%, transparent 60%), radial-gradient(circle at 30% 70%, #B68D5D 0%, transparent 50%)",
            "radial-gradient(circle at 50% 40%, #5D794D 0%, transparent 60%), radial-gradient(circle at 80% 60%, #876532 0%, transparent 50%), radial-gradient(circle at 30% 20%, #18354A 0%, transparent 60%), radial-gradient(circle at 40% 80%, #B6A27D 0%, transparent 50%)",
            "radial-gradient(circle at 40% 50%, #B6A27D 0%, transparent 60%), radial-gradient(circle at 80% 30%, #1A4035 0%, transparent 50%), radial-gradient(circle at 70% 70%, #1B2952 0%, transparent 60%), radial-gradient(circle at 20% 80%, #876532 0%, transparent 50%)"
          ],
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute right-[-10%] top-[0%] w-[120vw] h-[120vw] md:w-[90vw] md:h-[90vw] rounded-full blur-[90px] md:blur-[130px] opacity-95 mix-blend-screen"
      />

      {/* Left side soft glow to reduce the harsh black shadow */}
      <motion.div 
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, #3a4a42 0%, transparent 70%)",
            "radial-gradient(circle at 40% 60%, #544637 0%, transparent 60%)",
            "radial-gradient(circle at 30% 50%, #3a4a42 0%, transparent 70%)"
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute left-[-5%] top-[5%] w-[100vw] h-[100vw] rounded-full blur-[100px] md:blur-[140px] opacity-100 mix-blend-screen"
      />

      {/* Dense Grain/Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.35] mix-blend-overlay pointer-events-none" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          backgroundSize: '150px 150px'
        }} 
      />
    </div>
  );
}


