// app/page.tsx
"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý đăng ký email ở đây
    console.log("Email đã đăng ký:", email);
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              V
            </div>
            <span className="ml-2 text-xl font-bold text-gray-800">Vutera</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Dịch vụ
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Về chúng tôi
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Liên hệ
            </a>
          </nav>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            Liên hệ ngay
          </button>
        </div>
      </header>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Giải pháp công nghệ
            <span className="text-indigo-600 block">
              cho tương lai doanh nghiệp
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Vutera cung cấp các giải pháp công nghệ hiện đại giúp doanh nghiệp
            tối ưu hóa quy trình, nâng cao hiệu suất và phát triển bền vững
            trong kỷ nguyên số.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
              Bắt đầu ngay
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
              Tìm hiểu thêm
            </button>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Dịch vụ của chúng tôi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Phát triển phần mềm
              </h3>
              <p className="text-gray-600">
                Xây dựng ứng dụng web và mobile tùy chỉnh theo nhu cầu riêng của
                doanh nghiệp bạn.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Tư vấn công nghệ
              </h3>
              <p className="text-gray-600">
                Đánh giá và đề xuất giải pháp công nghệ phù hợp với mục tiêu và
                ngân sách của doanh nghiệp.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Điện toán đám mây
              </h3>
              <p className="text-gray-600">
                Triển khai và quản lý hệ thống trên nền tảng đám mây, đảm bảo
                tính sẵn sàng và bảo mật.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl h-80 w-full flex items-center justify-center text-white text-5xl font-bold">
                VUTERA
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Về Vutera
              </h2>
              <p className="text-gray-600 mb-4">
                Vutera được thành lập với sứ mệnh mang đến các giải pháp công
                nghệ tiên tiến, giúp doanh nghiệp Việt Nam nâng cao năng lực
                cạnh tranh trong thời đại số.
              </p>
              <p className="text-gray-600 mb-4">
                Với đội ngũ chuyên gia giàu kinh nghiệm và đam mê công nghệ,
                chúng tôi cam kết cung cấp những sản phẩm và dịch vụ chất lượng
                cao, đáp ứng mọi nhu cầu của khách hàng.
              </p>
              <div className="flex mt-8">
                <div className="mr-8">
                  <div className="text-2xl font-bold text-indigo-600">50+</div>
                  <div className="text-gray-600">Dự án hoàn thành</div>
                </div>
                <div className="mr-8">
                  <div className="text-2xl font-bold text-indigo-600">30+</div>
                  <div className="text-gray-600">Khách hàng</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-indigo-600">5+</div>
                  <div className="text-gray-600">Năm kinh nghiệm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Sẵn sàng chuyển đổi số?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Hãy để Vutera đồng hành cùng doanh nghiệp của bạn trên hành trình
            chuyển đổi số
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập email của bạn"
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                required
              />
              <button
                type="submit"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                {isSubscribed ? "Đã đăng ký!" : "Nhận tư vấn"}
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* Footer */}
      // Footer section trong app/page.tsx - cập nhật phần footer
      <footer id="contact" className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold">
                  V
                </div>
                <span className="ml-2 text-xl font-bold">Vutera</span>
              </div>
              <p className="text-gray-400">
                Giải pháp công nghệ tối ưu cho doanh nghiệp của bạn.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Liên kết</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Dịch vụ
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Về chúng tôi
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Dịch vụ</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Phát triển phần mềm
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Tư vấn công nghệ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Điện toán đám mây
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Bảo mật hệ thống
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: contact@vutera.net</li>
                <li>Website: vutera.net</li>
                <li>Điện thoại: +84 123 456 789</li>
              </ul>
            </div>
          </div>

          {/* Thêm phần Legal Links */}
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              <p>
                © {new Date().getFullYear()} Vutera. Tất cả quyền được bảo lưu.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Chính sách bảo mật
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Điều khoản sử dụng
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}