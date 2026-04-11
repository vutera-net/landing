import React from "react";
import { motion } from "framer-motion";

export const OrbitVisualization = () => {
  const points = [
    { label: "English", angle: 0, color: "from-blue-400 to-blue-600", glow: "rgba(59, 130, 246, 0.5)" },
    { label: "Career", angle: 120, color: "from-purple-400 to-purple-600", glow: "rgba(147, 51, 234, 0.5)" },
    { label: "Skills", angle: 240, color: "from-cyan-400 to-cyan-600", glow: "rgba(34, 211, 238, 0.5)" },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#050510] overflow-hidden py-24">
      {/* Background Starfield effect */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              animation: `pulse ${2 + Math.random() * 3}s infinite`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 text-center mb-16">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Mỗi người đều có một quỹ đạo phát triển riêng
        </motion.h2>
        <motion.p 
          className="text-xl text-purple-200/60 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Thay vì học lan man, Orbit giúp bạn xây dựng một lộ trình rõ ràng
        </motion.p>
      </div>

      <div className="relative w-72 h-72 md:w-[500px] md:h-[500px] flex items-center justify-center">
        {/* Orbit Rings */}
        <div className="absolute w-full h-full rounded-full border border-purple-500/10" />
        <div className="absolute w-[80%] h-[80%] rounded-full border border-purple-500/20" />
        <div className="absolute w-[60%] h-[60%] rounded-full border border-purple-500/30" />

        {/* Center Point */}
        <motion.div
          className="absolute z-20 w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center text-white font-bold shadow-[0_0_40px_rgba(147,51,234,0.4)]"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm md:text-base">Bạn</span>
        </motion.div>

        {/* Rotating Orbital Container */}
        <motion.div 
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {points.map((item) => (
            <div
              key={item.label}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `rotate(${item.angle}deg) translateX(${typeof window !== 'undefined' && window.innerWidth < 768 ? '140px' : '250px'}) rotate(-${item.angle}deg)`
              }}
            >
              <motion.div
                className={`w-12 h-12 md:w-20 md:h-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br ${item.color} flex flex-col items-center justify-center text-white shadow-lg backdrop-blur-md`}
                style={{ boxShadow: `0 0 20px ${item.glow}` }}
                animate={{ rotate: -360 }} // Counter-rotate to stay upright
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-tighter">{item.label}</span>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-20 z-10 text-center italic text-purple-300/40">
        "Không học nhiều hơn. Học đúng hơn."
      </div>
    </section>
  );
};
