import React from "react";
import { motion } from "framer-motion";

export const OrbitHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-black">
      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-8xl font-bold text-white leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Xây dựng Quỹ Đạo Phát Triển Của Bạn
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-purple-100/80 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Học tiếng Anh, định hướng nghề nghiệp và phát triển bản thân trong một hệ thống duy nhất – được cá nhân hóa bởi AI
        </motion.p>

        <motion.div 
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="px-10 py-4 rounded-full bg-purple-600 hover:bg-purple-500 transition-all duration-300 text-white font-bold text-xl shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_30px_rgba(147,51,234,0.8)] transform hover:-translate-y-1">
            Bắt đầu miễn phí
          </button>

          <div className="flex flex-col gap-4">
            <span className="text-sm uppercase tracking-widest text-purple-300/60 font-medium">Tôi muốn:</span>
            <div className="flex flex-wrap justify-center gap-3">
              {["Học tiếng Anh", "Định hướng nghề nghiệp", "Phát triển bản thân"].map((choice) => (
                <button 
                  key={choice}
                  className="px-6 py-2 rounded-full border border-purple-500/30 bg-purple-900/20 hover:bg-purple-800/40 text-purple-200 text-sm transition-all duration-300 backdrop-blur-sm"
                >
                  {choice}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-700 shadow-[0_0_10px_purple]" />
      </div>
    </section>
  );
};
