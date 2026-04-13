import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50 border-y dark:border-slate-800 border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-3xl w-full h-[400px] md:h-[500px] bg-white dark:bg-slate-900 border dark:border-slate-800 border-slate-200 shadow-xl overflow-hidden flex items-center justify-center p-8 group">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
               <Image
                  src="/logo.png"
                  alt="Vutera System"
                  width={280}
                  height={280}
                  className="object-contain relative z-10 drop-shadow-2xl group-hover:-translate-y-2 transition-transform duration-500"
               />
               
               {/* Decorative dots */}
               <div className="absolute top-8 left-8 w-16 h-16 bg-blue-400/20 rounded-full blur-xl"></div>
               <div className="absolute bottom-8 right-8 w-20 h-20 bg-purple-400/20 rounded-full blur-xl"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 flex items-center">
              <span className="w-8 h-px bg-blue-600 dark:bg-blue-400 mr-4"></span>
              Về Vutera
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 mb-6 leading-tight">
              Công Nghệ Khai Sáng, <br/> Phụng Sự Con Người
            </h3>
            <div className="space-y-6 text-lg dark:text-slate-400 text-slate-600 leading-relaxed">
              <p>
                Bắt nguồn từ ý tưởng mang AI vào Phong thủy và Tử vi để giúp mọi người dễ dàng hiểu vận mệnh, Vutera đã phát triển thành <strong>Personal Life OS (Hệ điều hành cuộc sống cá nhân)</strong> với 3 trụ cột vững chắc.
              </p>
              <p>
                Tại Vutera, chúng tôi tin rằng công nghệ ưu việt nhất là công nghệ hiểu được con người. Nó không sinh ra để thay thế hay quyết định thay bạn, mà đóng vai trò như một người đồng hành sáng suốt – giúp bạn quản lý dòng chảy năng lượng, tài chính và phát triển toàn diện trên mọi chặng đường rực rỡ nhất.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
