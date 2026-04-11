import React from "react";
import { motion } from "framer-motion";

export const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Sẵn sàng bắt đầu hành trình của bạn?
        </motion.h2>
        <motion.button
          className="px-10 py-4 text-xl rounded-lg bg-purple-600 hover:bg-purple-700 transition duration-300 text-white font-semibold shadow-lg transform hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={() => {
            // Implement the redirect logic here later
            console.log("Redirect to /tuvi?dob=YYYY-MM-DD");
          }}
        >
          Bắt đầu hành trình
        </motion.button>
      </div>
    </section>
  );
};
