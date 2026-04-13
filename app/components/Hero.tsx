"use client";

import { ArrowRight, Smartphone, Code, Globe } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100/80 dark:bg-slate-800/80 border dark:border-slate-700 border-slate-300 text-sm font-medium text-slate-700 dark:text-slate-300 mb-8 backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
          Hàng triệu lượt phân tích và tư vấn
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight dark:text-white text-slate-900">
          Vutera – Hệ Điều Hành <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Cuộc Sống Cá Nhân
          </span>
        </h1>

        <p className="text-lg md:text-xl dark:text-slate-400 text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Kết nối trí tuệ cổ truyền với AI hiện đại để bạn sống cân bằng, thịnh vượng và ý nghĩa hơn trong mọi khía cạnh: Tâm linh – Tài chính – Phát triển bản thân.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="https://accounts.vutera.net/register"
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center group"
          >
            Bắt đầu hành trình miễn phí
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/harmony"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-slate-300 dark:border-slate-700 dark:text-white text-slate-900 rounded-full font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-center"
          >
            Tìm hiểu Harmony
          </Link>
        </div>
      </div>

      <div className="mt-20 flex justify-center gap-6 opacity-80 pointer-events-none relative z-0">
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border dark:border-slate-700 border-slate-300 flex items-center justify-center transform -rotate-12 translate-y-4 shadow-xl">
          <Smartphone className="w-8 h-8 md:w-10 md:h-10 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border dark:border-slate-700 border-slate-300 flex items-center justify-center transform rotate-6 -translate-y-4 shadow-xl z-20">
          <Code className="w-8 h-8 md:w-10 md:h-10 text-purple-600 dark:text-purple-400" />
        </div>
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border dark:border-slate-700 border-slate-300 flex items-center justify-center transform rotate-12 translate-y-2 shadow-xl">
          <Globe className="w-8 h-8 md:w-10 md:h-10 text-emerald-600 dark:text-emerald-400" />
        </div>
      </div>
    </section>
  );
}
