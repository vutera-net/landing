export default function Journey() {
  const processes = [
    {
      step: "01",
      title: "Hạt Giống Ý Tưởng",
      desc: 'Từ nhu cầu thấu hiểu bản thân trong nhịp sống hối hả, ý tưởng về một nền tảng "Phong thủy - Tử vi AI" được nhen nhóm.',
    },
    {
      step: "02",
      title: "Xây Dựng Nền Tảng",
      desc: 'Mở rộng tầm nhìn từ "tâm linh" sang "đời sống vĩ mô," triết lý thiết kế "Công nghệ khai sáng, Phụng sự con người" chính thức hoàn thiện.',
    },
    {
      step: "03",
      title: "Ra Mắt Harmony",
      desc: 'Sản phẩm đầu tiên (TuVi & AnMenh) ra mắt, nhận được sự ủng hộ rộng rãi nhờ tính cá nhân hóa sâu sắc.',
    },
    {
      step: "04",
      title: "Personal Life OS Hoàn Chỉnh",
      desc: 'Tăng tốc cập nhật Vutera Flow & Orbit, tạo nên một hệ sinh thái đáp ứng đa chiều các nhu cầu của con người đương đại.',
    },
  ];

  return (
    <section id="journey" className="py-24 dark:bg-slate-950 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-10 dark:text-white text-slate-900">
              Hành Trình Của VUTERA
            </h2>
            <div className="space-y-10 relative">
              {/* Vertical timeline line */}
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-200 dark:bg-slate-800 hidden md:block"></div>
              
              {processes.map((item, index) => (
                <div key={index} className="flex gap-6 relative z-10 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full dark:bg-slate-900 bg-white border-2 dark:border-slate-700 border-slate-300 flex items-center justify-center font-bold text-blue-600 dark:text-blue-400 group-hover:border-blue-500 dark:group-hover:border-blue-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors shadow-sm">
                    {item.step}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold dark:text-white text-slate-900 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="dark:text-slate-400 text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl transform rotate-3 blur-2xl opacity-20 dark:opacity-30"></div>

            <div className="relative dark:bg-slate-900 bg-slate-50 border dark:border-slate-800 border-slate-300 rounded-3xl p-8 shadow-2xl overflow-hidden">
              {/* Window header */}
              <div className="flex items-center gap-2 mb-6 border-b dark:border-slate-800 border-slate-200 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                <div className="ml-4 text-xs dark:text-slate-500 text-slate-400 font-mono tracking-wider">
                  VuteraOS/core.ts
                </div>
              </div>

              {/* Code-style content */}
              <div className="space-y-5 font-mono text-sm md:text-base">
                <div className="text-purple-600 dark:text-purple-400">
                  const <span className="text-blue-600 dark:text-blue-400 text-lg font-bold font-sans">PersonalLifeOS</span> = () =&gt; {"{"}
                </div>

                <div className="pl-6 md:pl-8 dark:text-slate-300 text-slate-700">
                  <span className="dark:text-slate-500 text-slate-400 italic">
                    {"// Tích hợp AI cốt lõi và dữ liệu người dùng"}
                  </span>
                  <br />
                  <span className="text-pink-500 dark:text-pink-400">const</span> ai = createEngine();
                  <br />
                  <span className="text-pink-500 dark:text-pink-400">const</span> profile = buildUnifiedProfile();
                  <br /><br />
                  
                  <span className="dark:text-slate-500 text-slate-400 italic">
                    {"// 3 trụ cột đồng bộ"}
                  </span>
                  <br />
                  <span className="text-pink-500 dark:text-pink-400">const</span> ecosystem = [
                  <br />
                  &nbsp;&nbsp;<span className="text-green-600 dark:text-green-400">&quot;Harmony&quot;</span>, <span className="dark:text-slate-500">{"// Spiritual"}</span>
                  <br />
                  &nbsp;&nbsp;<span className="text-green-600 dark:text-green-400">&quot;Flow&quot;</span>, <span className="dark:text-slate-500">{"// Financial"}</span>
                  <br />
                  &nbsp;&nbsp;<span className="text-green-600 dark:text-green-400">&quot;Orbit&quot;</span>, <span className="dark:text-slate-500">{"// Educational"}</span>
                  <br />
                  ];
                  <br /><br />
                  <span className="text-pink-500 dark:text-pink-400">return</span> <span className="text-amber-500 dark:text-amber-300">{"{ ai, profile, ecosystem }"}</span>;
                </div>

                <div className="text-purple-600 dark:text-purple-400">
                  {"};"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
