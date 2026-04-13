import { Star, MessageSquareQuote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Nguyễn Thị Lan",
      role: "Người dùng TuVi",
      content: "Từ khi dùng Vutera, tôi đã thấu hiểu rõ hơn về chu kỳ tài năng lượng của mình để có những quyết định đột phá vào các giai đoạn quan trọng.",
      initials: "NL",
      color: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
    },
    {
      name: "Hoàng Minh Tuấn",
      role: "Người trải nghiệm Harmony",
      content: "Một hệ sinh thái thực sự tuyệt vời. Việc tích hợp giữa Tử Vi hệ phương Đông và AI mang lại mức độ cá nhân hóa sâu sắc nằm ngoài sức tưởng tượng.",
      initials: "HT",
      color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
    },
    {
      name: "Phạm Hải Yến",
      role: "Kinh doanh tự do",
      content: "Giao diện thanh tịnh, hiện đại. Điều tôi thích nhất là một tài khoản duy nhất kết nối mọi thứ tôi cần cho đời sống tinh thần và phát triển.",
      initials: "PY",
      color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">
              Cộng Đồng
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 leading-tight">
              Được Tin Dùng Bởi <br/> Hàng Trăm Nghìn Người
            </h3>
          </div>
          <div className="flex items-center gap-10">
            <div>
              <p className="text-4xl font-bold text-slate-900 dark:text-white mb-1">100K+</p>
              <p className="text-sm font-medium text-slate-500">Lá số đã nhận</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-slate-900 dark:text-white mb-1">4.9/5</p>
              <div className="flex text-amber-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/20 dark:shadow-none relative transition-transform duration-300 hover:-translate-y-2 group">
              <MessageSquareQuote className="absolute top-6 right-6 w-10 h-10 text-slate-100 dark:text-slate-800 group-hover:text-amber-100 dark:group-hover:text-amber-900/30 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl ${review.color}`}>
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    {review.name}
                  </h4>
                  <p className="text-sm text-slate-500 font-medium">
                    {review.role}
                  </p>
                </div>
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 italic relative z-10 text-lg leading-relaxed">
                &quot;{review.content}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
