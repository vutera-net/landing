import React from "react";
import { motion } from "framer-motion";

export const FinalCTA = () => {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      {/* Dynamic background light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-96 bg-purple-600/20 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
            Bắt đầu quỹ đạo của bạn hôm nay
          </h2>
          
          <p className="text-xl text-purple-200/50 mb-12 max-w-xl mx-auto">
            Không cần đăng ký phức tạp. Không cần cam kết. Chỉ cần bắt đầu.
          </p>

          <motion.button
            className="group relative px-12 py-5 text-2xl rounded-2xl bg-white text-black font-bold shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:shadow-purple-500/40 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Bắt đầu miễn phí</span>
            <div className="absolute inset-0 bg-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 -z-10" />
          </motion.button>
          
          <div className="mt-12 flex items-center justify-center gap-6 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
             <span className="text-sm font-medium tracking-widest">JOIN 10,000+ USERS ON THEIR ORBITS</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
