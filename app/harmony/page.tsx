import Link from "next/link";

export default function Harmony() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-600/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference">
        <div className="text-xl font-bold tracking-widest uppercase">
          Harmony
        </div>
        <div className="space-x-6 text-sm text-gray-400">
          <Link
            href="#philosophy"
            className="hover:text-white transition-colors"
          >
            Triết Lý
          </Link>
          <Link
            href="#how-it-works"
            className="hover:text-white transition-colors"
          >
            Cách Hoạt Động
          </Link>
          <a
            href="https://anmenh.vutera.net"
            className="hover:text-white transition-colors"
          >
            An Mệnh
          </a>
          <a
            href="https://tuvi.vutera.net"
            className="hover:text-white transition-colors"
          >
            Tử Vi
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center pb-20 pt-32">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-yellow-900/10 rounded-full blur-[100px] pointer-events-none" />

        <h1 className="text-5xl md:text-7xl font-light tracking-tight max-w-4xl mb-6 leading-tight">
          Nơi triết lý phương Đông <br />
          <span className="font-serif italic text-yellow-500/90">
            gặp gỡ AI hiện đại.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-6 font-light">
          Harmony giúp bạn hiểu bản thân và đưa ra quyết định đúng thời điểm của cuộc đời.
        </p>

        <p className="text-base md:text-lg text-gray-400 max-w-2xl mb-12 font-light">
          Khám phá bản đồ vận mệnh của bạn thông qua sự kết hợp của Bát tự, Ngũ
          hành và trí tuệ nhân tạo.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="https://anmenh.vutera.net"
            className="px-8 py-4 bg-white text-black font-medium rounded-full hover:scale-105 transition-transform duration-300"
          >
            Mở Khóa Vận Mệnh
          </a>
          <a
            href="https://tuvi.vutera.net"
            className="px-8 py-4 border border-zinc-800 text-white font-medium rounded-full hover:bg-zinc-900 transition-colors"
          >
            Đọc Thông Điệp Ngày Mới
          </a>
        </div>
      </main>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-32 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            Không phải ma thuật. Là dữ liệu và triết học.
          </h2>
          <p className="text-gray-400 leading-relaxed text-lg mb-16">
            Chúng tôi không tin vào những lời phán truyền sáo rỗng. Harmony sử
            dụng thuật toán AI để giải mã các học thuyết Tử Vi và Bát Tự cổ đại,
            mang đến góc nhìn hiện đại, trực diện và có tính ứng dụng cao cho
            cuộc sống của bạn.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-8 border border-zinc-800 rounded-2xl bg-zinc-900/30">
              <h3 className="text-xl font-bold mb-3 text-yellow-500/80">
                Hyper-Personalized
              </h3>
              <p className="text-sm text-gray-500">
                Bản đồ sao chính xác từng phút. Không có hai người nào nhận cùng
                một thông điệp.
              </p>
            </div>
            <div className="p-8 border border-zinc-800 rounded-2xl bg-zinc-900/30">
              <h3 className="text-xl font-bold mb-3 text-yellow-500/80">
                Straight-Talk
              </h3>
              <p className="text-sm text-gray-500">
                Không dùng từ ngữ sáo rỗng. Nhận thông điệp trực diện về Tình
                yêu, Công việc và Cuộc sống.
              </p>
            </div>
            <div className="p-8 border border-zinc-800 rounded-2xl bg-zinc-900/30">
              <h3 className="text-xl font-bold mb-3 text-yellow-500/80">
                Social Compatibility
              </h3>
              <p className="text-sm text-gray-500">
                So sánh mức độ tương hợp ngũ hành với bạn bè và người thương.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Not Prediction Section */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Harmony không phải là
          </h2>
          <p className="text-gray-500 text-lg mb-16">
            dự đoán tương lai.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="p-8 border border-zinc-800 rounded-2xl bg-zinc-950/60">
              <div className="text-2xl mb-4">❌</div>
              <h3 className="text-lg font-semibold mb-3 text-white/90">
                Không phán định số phận
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Harmony không nói bạn phải làm gì. Không có câu trả lời đúng duy nhất cho cuộc đời bạn.
              </p>
            </div>
            <div className="p-8 border border-zinc-800 rounded-2xl bg-zinc-950/60">
              <div className="text-2xl mb-4">❌</div>
              <h3 className="text-lg font-semibold mb-3 text-white/90">
                Không mê tín
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Dựa trên hệ thống quy luật và dữ liệu. Không có thần linh, không có lời nguyền, không có vận xui.
              </p>
            </div>
            <div className="p-8 border border-yellow-900/40 rounded-2xl bg-yellow-950/10">
              <div className="text-2xl mb-4">✅</div>
              <h3 className="text-lg font-semibold mb-3 text-yellow-500/90">
                Là công cụ hiểu bản thân
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Bạn là người quyết định. Harmony chỉ giúp bạn nhìn rõ hơn — để chọn đúng hơn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Harmony hoạt động như thế nào
            </h2>
            <p className="text-gray-500 text-lg">
              Ba bước từ dữ liệu cá nhân đến insight thực sự.
            </p>
          </div>

          {/* Flow Steps */}
          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-[3.25rem] left-[calc(16.667%+2rem)] right-[calc(16.667%+2rem)] h-px bg-gradient-to-r from-transparent via-yellow-600/40 to-transparent" />

            <div className="grid md:grid-cols-3 gap-8 md:gap-6">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
                    <span className="text-2xl">📅</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-yellow-600/20 border border-yellow-600/60 flex items-center justify-center">
                    <span className="text-xs font-bold text-yellow-500">1</span>
                  </div>
                </div>
                <div className="mb-3 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-xs text-gray-400 uppercase tracking-widest">
                  Đầu vào
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Ngày sinh & dữ liệu cá nhân
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Harmony nhận ngày, giờ, năm sinh của bạn.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mt-1">
                  Từ đó tính toán Bát Tự và cân bằng Ngũ Hành cá nhân.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-yellow-600/20 border border-yellow-600/60 flex items-center justify-center">
                    <span className="text-xs font-bold text-yellow-500">2</span>
                  </div>
                </div>
                <div className="mb-3 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-xs text-gray-400 uppercase tracking-widest">
                  Phân tích
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  AI phân tích chu kỳ vận động
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Bát Tự và Ngũ Hành được đối chiếu với chu kỳ thời gian thực.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mt-1">
                  AI xác định giai đoạn mạnh—yếu, thuận—nghịch trong vận trình.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-yellow-900/30 border border-yellow-700/50 flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-yellow-600/20 border border-yellow-600/60 flex items-center justify-center">
                    <span className="text-xs font-bold text-yellow-500">3</span>
                  </div>
                </div>
                <div className="mb-3 px-3 py-1 rounded-full bg-yellow-950/40 border border-yellow-800/40 text-xs text-yellow-600 uppercase tracking-widest">
                  Kết quả
                </div>
                <h3 className="text-lg font-semibold text-yellow-400/90 mb-3">
                  Insight cá nhân hóa
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Bạn nhận được insight riêng về tình yêu, sự nghiệp và sức khỏe.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mt-1">
                  Không có hai người nào nhận cùng một thông điệp.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile connectors */}
          <div className="md:hidden flex flex-col items-center gap-0 mt-0">
            {[0, 1].map((i) => (
              <div key={i} className="w-px h-8 bg-gradient-to-b from-zinc-700 to-transparent" />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <a
              href="https://anmenh.vutera.net"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-medium rounded-full hover:scale-105 transition-transform duration-300"
            >
              Bắt đầu khám phá của bạn
              <span className="text-base">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-zinc-600 text-sm border-t border-zinc-900">
        <p>© 2026 VUTERA Harmony. All rights reserved.</p>
      </footer>
    </div>
  );
}
