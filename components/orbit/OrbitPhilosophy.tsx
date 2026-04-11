import React from "react";
import { motion } from "framer-motion";

export const OrbitPhilosophy = () => {
  return (
    <section className="py-24 bg-black/40 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-900/20 to-transparent border border-white/5 p-12 rounded-[40px] backdrop-blur-3xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tight">
            Phát triển không phải là làm nhiều hơn
          </h2>
          <div className="space-y-6 text-xl text-purple-100/70 leading-relaxed font-light">
            <p>
              Mà là làm đúng thứ – vào đúng thời điểm.
            </p>
            <p className="text-purple-300">
              Orbit không cố gắng dạy bạn mọi thứ. <br/>
              Chỉ giúp bạn tập trung vào điều quan trọng nhất.
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative pulse effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-purple-500 rounded-full animate-ping opacity-20" />
      </div>
    </section>
  );
};
