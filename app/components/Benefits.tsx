import { Star, Zap, LineChart, Rocket, Focus, LayoutGrid } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: <Star className="w-6 h-6 text-purple-500" />,
      title: "Hiểu rõ vận mệnh",
      desc: "Giải mã lá số, khám phá tiềm năng và nhận biết các chu kỳ quan trọng của cuộc đời (Harmony)."
    },
    {
      icon: <LayoutGrid className="w-6 h-6 text-indigo-500" />,
      title: "Một khoản, đa tiện ích",
      desc: "Chỉ cần 1 tài khoản SSO duy nhất, bạn có quyền truy cập toàn bộ hệ sinh thái của Vutera."
    },
    {
      icon: <LineChart className="w-6 h-6 text-emerald-500" />,
      title: "Kiểm soát dòng tiền",
      desc: "Ghi nhận và phân loại tự động thu chi, xây dựng thói quen tài chính nhịp nhàng vững chãi (Flow)."
    },
    {
      icon: <Focus className="w-6 h-6 text-amber-500" />,
      title: "Cá nhân hóa AI",
      desc: "Mọi dữ liệu sinh trắc và thói quen đều được AI tổng hợp để đưa ra lời khuyên thiết thực riêng cho bạn."
    },
    {
      icon: <Rocket className="w-6 h-6 text-orange-500" />,
      title: "Phát triển năng lực",
      desc: "Học tập và định hướng công việc thông qua lộ trình được thiết kế bài bản với Orbit."
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: "Cân bằng năng lượng",
      desc: "Trạng thái tĩnh - động được điều phối giúp bạn luôn có điểm tựa mỗi khi đưa ra những quyết định lớn."
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900 border-y dark:border-slate-800 border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 mb-4">
            Tại Sao Chọn Vutera?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Hệ sinh thái Personal Life OS thay đổi góc nhìn của bạn về mối tương quan giữa sự nghiệp, tài chính và điểm tựa tâm linh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:border-slate-300 hover:dark:border-slate-700 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 dark:text-white text-slate-900">
                {benefit.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
