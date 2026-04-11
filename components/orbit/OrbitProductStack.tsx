import React from "react";
import { motion } from "framer-motion";

const productItems = [
  {
    title: "English AI",
    icon: "🎧",
    description: "Luyện nghe, nói và phản xạ mỗi ngày. Chỉ cần bạn và một hệ thống học đúng cách.",
    cta: "Bắt đầu học",
    color: "blue"
  },
  {
    title: "Career Path",
    icon: "🧭",
    description: "Hiểu điểm mạnh, chọn con đường phù hợp và xây dựng lộ trình phát triển rõ ràng.",
    cta: "Khám phá hướng đi",
    color: "purple"
  },
  {
    title: "Skill Builder",
    icon: "📚",
    description: "Tập trung vào những kỹ năng thực sự cần thiết. Tích lũy theo thời gian từng bước nhỏ.",
    cta: "Xây dựng kỹ năng",
    color: "cyan"
  },
];

export const OrbitProductStack = () => {
  return (
    <section className="py-24 bg-gray-900/50 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative bg-[#111122]/80 backdrop-blur-xl p-8 rounded-3xl border border-white/5 hover:border-purple-500/50 transition-all duration-500 shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Glow background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="text-4xl mb-6 bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  {item.title}
                </h3>
                <p className="text-purple-100/60 mb-8 min-h-[80px] leading-relaxed">
                  {item.description}
                </p>
                <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-purple-600 group-hover:border-purple-500 transition-all duration-300 font-semibold text-sm uppercase tracking-wider">
                  {item.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
