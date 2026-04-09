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
            href="#why-harmony"
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
          <Link
            href="#ecosystem"
            className="hover:text-white transition-colors"
          >
            Hệ Sinh Thái
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
          Hiểu bản thân. <br />
          <span className="font-serif italic text-yellow-500/90">
            Sống đúng thời điểm.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-12 font-light">
          Harmony kết hợp triết lý phương Đông và AI để giúp bạn hiểu chu kỳ cuộc đời và đưa ra quyết định phù hợp với chính mình.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="https://anmenh.vutera.net"
            className="px-8 py-4 bg-white text-black font-medium rounded-full hover:scale-105 transition-transform duration-300"
          >
            Tạo hồ sơ cá nhân
          </a>
          <a
            href="https://tuvi.vutera.net"
            className="px-8 py-4 border border-zinc-800 text-white font-medium rounded-full hover:bg-zinc-900 transition-colors"
          >
            Khám phá miễn phí
          </a>
        </div>
      </main>

      {/* North Star — Founder Intent */}
      <section id="north-star" className="py-40 px-6 bg-black">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs text-yellow-600/60 uppercase tracking-[0.35em] mb-8">
            Sứ Mệnh
          </p>

          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-16 text-white">
            Harmony tồn tại để làm gì?
          </h2>

          <div className="space-y-4 mb-16">
            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed">
              Mỗi người đều sống trong những chu kỳ khác nhau.
            </p>
            <p className="text-white/45 text-base md:text-lg font-light leading-relaxed">
              Không phải ai cũng nên hành động giống nhau
              <br className="hidden md:block" /> ở cùng một thời điểm.
            </p>
          </div>

          <div className="w-px h-12 bg-yellow-800/40 mx-auto mb-12" />

          <p className="text-gray-500 text-xs uppercase tracking-[0.25em] mb-10">
            Harmony giúp bạn hiểu
          </p>

          <div className="space-y-7">
            <p className="text-2xl md:text-3xl font-light text-white/90 tracking-tight">
              bạn đang ở giai đoạn nào
            </p>
            <p className="text-2xl md:text-3xl font-light text-white/60 tracking-tight">
              điều gì nên tiến
            </p>
            <p className="text-2xl md:text-3xl font-light text-white/35 tracking-tight">
              điều gì nên chờ
            </p>
          </div>
        </div>
      </section>

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

      {/* Ecosystem Section */}
      <section id="ecosystem" className="py-32 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs text-yellow-600/70 uppercase tracking-[0.3em] mb-4">
              Hệ Sinh Thái
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Ba trong một. Một platform.
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Đây là đoạn biến bạn thành{" "}
              <span className="text-white font-semibold tracking-widest">
                PLATFORM.
              </span>
            </p>
          </div>

          {/* Desktop Orbit Diagram */}
          <div
            className="hidden md:block relative mx-auto"
            style={{ maxWidth: "540px", height: "390px" }}
          >
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 540 390"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer glow ring around Harmony */}
              <circle
                cx="270"
                cy="80"
                r="56"
                stroke="rgba(161,120,37,0.12)"
                strokeWidth="1"
              />
              {/* Connection: Harmony → TuVi */}
              <line
                x1="230"
                y1="110"
                x2="110"
                y2="295"
                stroke="rgba(161,120,37,0.4)"
                strokeWidth="1.5"
                strokeDasharray="6 5"
              />
              {/* Connection: Harmony → AnMenh */}
              <line
                x1="310"
                y1="110"
                x2="430"
                y2="295"
                stroke="rgba(161,120,37,0.4)"
                strokeWidth="1.5"
                strokeDasharray="6 5"
              />
              {/* Connection: TuVi → AnMenh */}
              <line
                x1="155"
                y1="318"
                x2="385"
                y2="318"
                stroke="rgba(113,113,122,0.25)"
                strokeWidth="1"
                strokeDasharray="4 5"
              />
              {/* Arrow dots at endpoints */}
              <circle cx="110" cy="295" r="2.5" fill="rgba(161,120,37,0.5)" />
              <circle cx="430" cy="295" r="2.5" fill="rgba(161,120,37,0.5)" />
            </svg>

            {/* Harmony — Top Center (Hub) */}
            <div
              className="absolute flex flex-col items-center"
              style={{ top: "12px", left: "50%", transform: "translateX(-50%)" }}
            >
              <div className="w-[88px] h-[88px] rounded-full bg-yellow-950/50 border border-yellow-700/60 flex items-center justify-center mb-3 shadow-[0_0_30px_rgba(161,120,37,0.15)]">
                <span className="text-3xl">☯</span>
              </div>
              <div className="text-sm font-bold text-yellow-400/90 tracking-widest uppercase">
                Harmony
              </div>
              <div className="text-xs text-yellow-700/70 mt-1 text-center">
                Triết lý &amp; hệ dẫn đường
              </div>
              <div className="text-[10px] text-yellow-900 mt-0.5">
                Hệ thống kết nối tất cả
              </div>
            </div>

            {/* TuVi — Bottom Left */}
            <div
              className="absolute flex flex-col items-center"
              style={{ bottom: "20px", left: "20px", width: "160px" }}
            >
              <div className="w-[72px] h-[72px] rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-3">
                <span className="text-2xl">📖</span>
              </div>
              <div className="text-sm font-semibold text-white/80 tracking-wide">
                Tử Vi
              </div>
              <div className="text-xs text-gray-500 mt-1 text-center">
                Khám phá &amp; học hỏi
              </div>
              <div className="text-[10px] text-gray-600 mt-0.5">Nơi bắt đầu</div>
            </div>

            {/* AnMenh — Bottom Right */}
            <div
              className="absolute flex flex-col items-center"
              style={{ bottom: "20px", right: "20px", width: "160px" }}
            >
              <div className="w-[72px] h-[72px] rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-3">
                <span className="text-2xl">🗂️</span>
              </div>
              <div className="text-sm font-semibold text-white/80 tracking-wide">
                An Mệnh
              </div>
              <div className="text-xs text-gray-500 mt-1 text-center">
                Hồ sơ cá nhân
              </div>
              <div className="text-[10px] text-gray-600 mt-0.5">
                Nơi thuộc về bạn
              </div>
            </div>
          </div>

          {/* Mobile — Vertical Stack */}
          <div className="md:hidden flex flex-col items-center gap-0">
            {/* Harmony */}
            <div className="flex flex-col items-center p-6 border border-yellow-900/40 rounded-2xl bg-yellow-950/10 w-full max-w-xs text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-950/50 border border-yellow-700/60 flex items-center justify-center mb-3">
                <span className="text-2xl">☯</span>
              </div>
              <div className="text-sm font-bold text-yellow-400/90 tracking-widest uppercase mb-1">
                Harmony
              </div>
              <div className="text-xs text-gray-500">Triết lý &amp; hệ dẫn đường</div>
              <div className="text-[10px] text-yellow-800 mt-1">
                Hệ thống kết nối tất cả
              </div>
            </div>
            <div className="w-px h-8 bg-gradient-to-b from-yellow-800/40 to-zinc-700/30" />
            {/* TuVi */}
            <div className="flex flex-col items-center p-6 border border-zinc-800 rounded-2xl bg-zinc-900/30 w-full max-w-xs text-center">
              <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-3">
                <span className="text-2xl">📖</span>
              </div>
              <div className="text-sm font-semibold text-white/80 mb-1">Tử Vi</div>
              <div className="text-xs text-gray-500">Khám phá &amp; học hỏi</div>
              <div className="text-[10px] text-gray-600 mt-1">Nơi bắt đầu</div>
            </div>
            <div className="w-px h-8 bg-gradient-to-b from-zinc-700/30 to-zinc-700/10" />
            {/* AnMenh */}
            <div className="flex flex-col items-center p-6 border border-zinc-800 rounded-2xl bg-zinc-900/30 w-full max-w-xs text-center">
              <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-3">
                <span className="text-2xl">🗂️</span>
              </div>
              <div className="text-sm font-semibold text-white/80 mb-1">An Mệnh</div>
              <div className="text-xs text-gray-500">Hồ sơ cá nhân</div>
              <div className="text-[10px] text-gray-600 mt-1">Nơi thuộc về bạn</div>
            </div>
          </div>

          {/* 3-column role descriptions */}
          <div className="grid md:grid-cols-3 gap-0 mt-20 border border-zinc-800 rounded-2xl overflow-hidden">
            <div className="p-8 text-center bg-zinc-900/20">
              <div className="text-[10px] text-yellow-700 uppercase tracking-[0.25em] mb-3">
                Nơi bắt đầu
              </div>
              <h3 className="text-base font-semibold text-white mb-3">Tử Vi</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Khám phá bản đồ vận mệnh. Đọc thông điệp hằng ngày. Học về bản
                thân qua góc nhìn cổ học.
              </p>
            </div>
            <div className="p-8 text-center border-x border-zinc-800 bg-yellow-950/10">
              <div className="text-[10px] text-yellow-600/80 uppercase tracking-[0.25em] mb-3">
                Hệ thống kết nối
              </div>
              <h3 className="text-base font-semibold text-yellow-400/90 mb-3">
                Harmony
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Nền tảng triết học dẫn đường. Kết hợp dữ liệu từ Tử Vi và hồ
                sơ từ An Mệnh thành insight sống.
              </p>
            </div>
            <div className="p-8 text-center bg-zinc-900/20">
              <div className="text-[10px] text-yellow-700 uppercase tracking-[0.25em] mb-3">
                Nơi thuộc về bạn
              </div>
              <h3 className="text-base font-semibold text-white mb-3">An Mệnh</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Hồ sơ cá nhân sâu. Lưu trữ bản ngã số của bạn. Nơi mọi dữ
                liệu hội tụ về một chủ nhân.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Harmony — Triết Lý Section */}
      <section id="why-harmony" className="py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs text-yellow-600/70 uppercase tracking-[0.3em] mb-4">
              Triết Lý Harmony
            </p>
            <h2 className="text-3xl md:text-4xl font-light">
              Vì sao là Harmony?
            </h2>
          </div>

          {/* Three-panel convergence */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* East */}
            <div className="p-8 border border-zinc-800 rounded-2xl bg-zinc-950/60 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-amber-950/40 border border-amber-800/40 flex items-center justify-center mb-5">
                <span className="text-2xl">♻</span>
              </div>
              <div className="text-[10px] text-amber-600/60 uppercase tracking-[0.25em] mb-3">
                Phương Đông
              </div>
              <p className="text-white/80 text-lg font-light mb-4">
                nhìn đời là{" "}
                <span className="text-amber-400/80 font-semibold">chu kỳ</span>
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Vạn vật sinh diệt theo quy luật. Thời gian không tuyến tính —
                mà xoay vòng có nhịp.
              </p>
            </div>

            {/* Harmony — Bridge (highlighted) */}
            <div className="p-8 border border-yellow-800/50 rounded-2xl bg-yellow-950/20 text-center flex flex-col items-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-yellow-950 border border-yellow-800/60 text-[10px] text-yellow-500/80 uppercase tracking-widest">
                Giao điểm
              </div>
              <div className="w-14 h-14 rounded-full bg-yellow-950/60 border border-yellow-700/60 flex items-center justify-center mb-5 mt-2 shadow-[0_0_20px_rgba(161,120,37,0.15)]">
                <span className="text-2xl">☯</span>
              </div>
              <div className="text-[10px] text-yellow-500/70 uppercase tracking-[0.25em] mb-3">
                Harmony
              </div>
              <p className="text-yellow-400/90 text-lg font-semibold mb-4">
                kết nối hai góc nhìn
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Không loại bỏ cái nào. Harmony là nơi chu kỳ gặp dữ liệu —
                và tạo ra hiểu biết sâu hơn cả hai.
              </p>
            </div>

            {/* AI */}
            <div className="p-8 border border-zinc-800 rounded-2xl bg-zinc-950/60 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-5">
                <span className="text-2xl">⬡</span>
              </div>
              <div className="text-[10px] text-sky-600/50 uppercase tracking-[0.25em] mb-3">
                AI
              </div>
              <p className="text-white/80 text-lg font-light mb-4">
                nhìn đời là{" "}
                <span className="text-sky-400/70 font-semibold">dữ liệu</span>
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Mọi sự kiện đều là pattern. Máy học từ hàng triệu điểm dữ liệu
                để tìm quy luật ẩn.
              </p>
            </div>
          </div>

          {/* Closing quote */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-base md:text-lg italic font-light max-w-2xl mx-auto leading-relaxed">
              &ldquo;Phương Đông có ngàn năm quan sát.
              <br className="hidden md:block" /> AI có triệu điểm dữ liệu.
              <br />
              <span className="text-yellow-600/70 not-italic">
                Harmony là nơi cả hai nói chuyện với nhau.
              </span>
              &rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section id="future-vision" className="py-40 px-6 bg-zinc-950 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-indigo-950/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-20">
            <p className="text-xs text-indigo-400/50 uppercase tracking-[0.4em] mb-5">
              Roadmap
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
              Harmony đang tiến tới
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto font-light">
              Đây chỉ là phiên bản đầu tiên. Những gì đang được xây dựng tiếp theo sẽ thay đổi cách bạn nhìn vào cuộc đời mình.
            </p>
          </div>

          {/* 2x2 Cards Grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {/* Card 1 — AI hướng dẫn cá nhân */}
            <div className="group relative p-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-indigo-800/60 hover:bg-indigo-950/10 transition-all duration-500">
              <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-500 uppercase tracking-widest">
                Sắp ra mắt
              </div>
              <div className="w-12 h-12 rounded-xl bg-indigo-950/60 border border-indigo-800/40 flex items-center justify-center mb-6 group-hover:border-indigo-600/60 transition-colors duration-500">
                <span className="text-xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-white/90 mb-3">
                AI hướng dẫn cá nhân
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Một AI hiểu sâu chu kỳ vận trình của bạn. Đưa ra lời khuyên đúng lúc — không phải lời khuyên chung chung.
              </p>
            </div>

            {/* Card 2 — Timeline cuộc đời */}
            <div className="group relative p-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-indigo-800/60 hover:bg-indigo-950/10 transition-all duration-500">
              <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-500 uppercase tracking-widest">
                Sắp ra mắt
              </div>
              <div className="w-12 h-12 rounded-xl bg-indigo-950/60 border border-indigo-800/40 flex items-center justify-center mb-6 group-hover:border-indigo-600/60 transition-colors duration-500">
                <span className="text-xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-white/90 mb-3">
                Timeline cuộc đời
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Nhìn thấy toàn bộ hành trình — quá khứ, hiện tại, và những cột mốc tiềm năng phía trước theo chu kỳ vận trình.
              </p>
            </div>

            {/* Card 3 — Decision companion */}
            <div className="group relative p-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-indigo-800/60 hover:bg-indigo-950/10 transition-all duration-500">
              <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-500 uppercase tracking-widest">
                Sắp ra mắt
              </div>
              <div className="w-12 h-12 rounded-xl bg-indigo-950/60 border border-indigo-800/40 flex items-center justify-center mb-6 group-hover:border-indigo-600/60 transition-colors duration-500">
                <span className="text-xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold text-white/90 mb-3">
                Decision companion
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Mỗi khi đứng trước quyết định lớn — sự nghiệp, tình yêu, tài chính — Harmony phân tích thời điểm và cho bạn góc nhìn riêng.
              </p>
            </div>

            {/* Card 4 — Insight mỗi ngày */}
            <div className="group relative p-8 rounded-2xl border border-yellow-900/40 bg-yellow-950/10 hover:border-yellow-700/50 hover:bg-yellow-950/20 transition-all duration-500">
              <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-yellow-950/60 border border-yellow-800/40 text-[10px] text-yellow-600/70 uppercase tracking-widest">
                Đang có
              </div>
              <div className="w-12 h-12 rounded-xl bg-yellow-950/60 border border-yellow-700/50 flex items-center justify-center mb-6 group-hover:border-yellow-500/60 transition-colors duration-500">
                <span className="text-xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-yellow-400/90 mb-3">
                Insight mỗi ngày
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Thông điệp cá nhân hóa mỗi sáng, dựa trên chu kỳ vận trình và Ngũ Hành của bạn. Không ngày nào giống ngày nào.
              </p>
            </div>
          </div>

          {/* Closing statement */}
          <div className="mt-20 text-center">
            <p className="text-gray-600 text-sm uppercase tracking-[0.3em] mb-6">
              Đây mới là sự khởi đầu
            </p>
            <a
              href="https://anmenh.vutera.net"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-medium rounded-full hover:scale-105 transition-transform duration-300"
            >
              Tham gia ngay hôm nay
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
