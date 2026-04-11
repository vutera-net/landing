import React from "react";
import { motion } from "framer-motion";

const productItems = [
  {
    title: "TuVi",
    description: "Nơi bạn khám phá bản đồ vận mệnh cá nhân chi tiết nhất.",
    link: "/tuvi",
  },
  {
    title: "AnMenh",
    description: "Quản lý hồ sơ cá nhân và nhận các phân tích chuyên sâu.",
    link: "/anmenh",
  },
  {
    title: "Harmony",
    description: "Hòa mình vào triết lý sống cân bằng và phát triển bản thân.",
    link: "/harmony",
  },
];

export const OrbitProductStack = () => {
  return (
    <section className="py-16 bg-gray-900 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Hệ sinh thái VUTERA
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:border-purple-600 transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                {item.title}
              </h3>
              <p className="text-gray-300 mb-6">{item.description}</p>
              <a
                href={item.link}
                className="inline-block px-6 py-2 bg-purple-600 hover:bg-purple-700 transition duration-300 rounded-lg font-semibold"
              >
                Tìm hiểu thêm
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
