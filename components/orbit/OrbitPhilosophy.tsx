import React from "react";
import { motion } from "framer-motion";

export const OrbitPhilosophy = () => {
  return (
    <section className="py-16 bg-gray-900 text-white text-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Triết lý VUTERA
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          VUTERA không phải là mê tín. Chúng tôi cung cấp một hệ thống định
          hướng, giúp bạn hiểu rõ bản thân và khám phá quỹ đạo cuộc đời của mình
          một cách khoa học và ý nghĩa.
        </motion.p>
      </div>
    </section>
  );
};
