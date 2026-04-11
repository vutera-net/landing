import React from "react";

export const OrbitHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      <div className="relative z-10 p-4 max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4 animate-fade-in-up">
          VUTERA Orbit
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up delay-200">
          Hiểu quỹ đạo cuộc đời của bạn ngay lập tức.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up delay-400">
          <input
            type="date"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Ngày sinh của bạn"
          />
          <button className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition duration-300 text-white font-semibold shadow-lg">
            Khám phá ngay
          </button>
        </div>
      </div>
      {/* Background animation elements */}
      <div className="absolute inset-0 z-0">
        {/* Example: Subtle glow or starfield could go here */}
      </div>
    </section>
  );
};
