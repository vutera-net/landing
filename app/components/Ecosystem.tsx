import { Compass, TrendingUp, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Ecosystem() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">
            Hệ Sinh Thái
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 mb-4">
            Ba Trụ Cột Của Vutera
          </h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Ba trụ cột hoạt động thống nhất trên một tài khoản duy nhất qua hệ thống accounts.vutera.net, giúp bạn khai phá toàn diện tiềm năng bản thân.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Harmony (Nhấn mạnh nhất) */}
          <div className="group relative p-8 rounded-3xl dark:bg-slate-900 bg-white shadow-xl dark:border-slate-800 border-slate-200 border-2 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full transform md:-translate-y-4">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-indigo-900 opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col flex-grow">
              <div className="mb-6 p-4 bg-purple-100 dark:bg-purple-900/30 rounded-2xl inline-block border dark:border-purple-800/50 border-purple-200">
                <Compass className="w-10 h-10 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="text-3xl font-bold mb-4 dark:text-white text-slate-900 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Vutera Harmony
              </h4>
              <p className="dark:text-slate-400 text-slate-600 mb-6 flex-grow leading-relaxed font-medium">
                Cõi riêng của sự bình an. Nơi kết nối trí tuệ Tử Vi, Phong Thủy với AI hiện đại để bạn thấu hiểu bản mệnh và cân bằng âm dương.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 border border-purple-200 dark:border-purple-800/50">TuVi App (Miễn phí)</span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 border border-amber-200 dark:border-amber-800/50">AnMenh Sanctuary</span>
              </div>
              
              <Link href="/harmony" className="inline-flex items-center text-purple-600 dark:text-purple-400 font-bold hover:text-purple-800 dark:hover:text-purple-300 group/link">
                Khám phá Harmony <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 2 - Flow */}
          <div className="group relative p-8 rounded-3xl dark:bg-slate-900 bg-white shadow-lg dark:border dark:border-slate-800 border-slate-200 hover:border-emerald-400/50 dark:hover:border-emerald-400/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-teal-900 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col flex-grow">
              <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl inline-block border dark:border-emerald-800 border-emerald-100">
                <TrendingUp className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />
              </div>
              <h4 className="text-2xl font-bold mb-4 dark:text-white text-slate-900 group-hover:text-emerald-500 transition-colors">
                Vutera Flow
              </h4>
              <p className="dark:text-slate-400 text-slate-600 flex-grow leading-relaxed">
                Quản lý dòng chảy tài chính thông minh – Chi tiêu, tiết kiệm, đầu tư. Tạo ra sự thịnh vượng bền vững cho tương lai.
              </p>
              
              <Link href="/flow" className="mt-8 inline-flex items-center text-emerald-600 dark:text-emerald-400 font-bold hover:text-emerald-800 dark:hover:text-emerald-300 group/link">
                Tìm hiểu Flow <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 3 - Orbit */}
          <div className="group relative p-8 rounded-3xl dark:bg-slate-900 bg-white shadow-lg dark:border dark:border-slate-800 border-slate-200 hover:border-amber-400/50 dark:hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900 to-orange-900 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col flex-grow">
              <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-2xl inline-block border dark:border-amber-800 border-amber-100">
                <GraduationCap className="w-8 h-8 text-amber-500 dark:text-amber-400" />
              </div>
              <h4 className="text-2xl font-bold mb-4 dark:text-white text-slate-900 group-hover:text-amber-500 transition-colors">
                Vutera Orbit
              </h4>
              <p className="dark:text-slate-400 text-slate-600 flex-grow leading-relaxed">
                Hành trình phát triển bản thân – Giáo dục công nghệ, học tập AI, định hướng sự nghiệp rực rỡ nhất.
              </p>
              
              <Link href="/orbit" className="mt-8 inline-flex items-center text-amber-600 dark:text-amber-400 font-bold hover:text-amber-800 dark:hover:text-amber-300 group/link">
                Tìm hiểu Orbit <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
