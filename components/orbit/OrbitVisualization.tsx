import React from "react";
import { motion } from "framer-motion";

export const OrbitVisualization = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gray-900 overflow-hidden py-16">
      <div className="relative w-96 h-96 md:w-[600px] md:h-[600px] rounded-full border-2 border-purple-500 flex items-center justify-center">
        {/* Center "You" point */}
        <motion.div
          className="absolute w-24 h-24 rounded-full bg-purple-700 flex items-center justify-center text-white text-lg font-bold shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Bạn
        </motion.div>

        {/* Orbiting points */}
        {[
          { label: "Tài chính", angle: 0, color: "red" },
          { label: "Sự nghiệp", angle: 90, color: "blue" },
          { label: "Tình cảm", angle: 180, color: "green" },
          { label: "Sức khỏe", angle: 270, color: "yellow" },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            className={`absolute w-16 h-16 rounded-full bg-${item.color}-500 flex items-center justify-center text-white text-xs font-semibold shadow-md`}
            initial={{ opacity: 0, rotate: 0 }}
            animate={{
              opacity: 1,
              rotate: 360,
              x: [
                0,
                Math.cos((item.angle + 0) * (Math.PI / 180)) * 200,
                Math.cos((item.angle + 90) * (Math.PI / 180)) * 200,
                Math.cos((item.angle + 180) * (Math.PI / 180)) * 200,
                Math.cos((item.angle + 270) * (Math.PI / 180)) * 200,
                Math.cos((item.angle + 360) * (Math.PI / 180)) * 200,
              ],
              y: [
                0,
                Math.sin((item.angle + 0) * (Math.PI / 180)) * 200,
                Math.sin((item.angle + 90) * (Math.PI / 180)) * 200,
                Math.sin((item.angle + 180) * (Math.PI / 180)) * 200,
                Math.sin((item.angle + 270) * (Math.PI / 180)) * 200,
                Math.sin((item.angle + 360) * (Math.PI / 180)) * 200,
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: 1 + index * 0.2,
            }}
            style={{ x: 0, y: 0 }} // Initial position relative to the center of the parent
          >
            {item.label}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
