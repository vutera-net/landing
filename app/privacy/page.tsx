// app/privacy/page.tsx
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
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
              href="/"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Trang chủ
            </a>
            <a
              href="/#services"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Dịch vụ
            </a>
            <a
              href="/#about"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Về chúng tôi
            </a>
          </nav>
          <a
            href="/#contact"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Liên hệ ngay
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Chính sách bảo mật
          </h1>
          <p className="text-gray-600 mb-8">
            Cập nhật lần cuối: {new Date().toLocaleDateString("vi-VN")}
          </p>

          <div className="prose prose-lg max-w-none">
            {/* Giới thiệu */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Giới thiệu
              </h2>
              <p className="text-gray-600 mb-4">
                Chào mừng bạn đến với Vutera. Chúng tôi cam kết bảo vệ quyền
                riêng tư và thông tin cá nhân của bạn. Chính sách bảo mật này
                giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin
                của bạn.
              </p>
            </section>

            {/* Thông tin thu thập */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Thông tin chúng tôi thu thập
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                2.1. Thông tin cá nhân
              </h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Họ và tên</li>
                <li>Địa chỉ email</li>
                <li>Số điện thoại</li>
                <li>Thông tin công ty (nếu có)</li>
                <li>Địa chỉ IP và thông tin trình duyệt</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                2.2. Thông tin tự động thu thập
              </h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Dữ liệu sử dụng website</li>
                <li>Thông tin thiết bị và trình duyệt</li>
                <li>Cookies và công nghệ theo dõi tương tự</li>
              </ul>
            </section>

            {/* Mục đích sử dụng */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Mục đích sử dụng thông tin
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Cung cấp và duy trì dịch vụ</li>
                <li>Cải thiện trải nghiệm người dùng</li>
                <li>Gửi thông tin marketing (nếu bạn đồng ý)</li>
                <li>Phân tích và nghiên cứu thị trường</li>
                <li>Tuân thủ các nghĩa vụ pháp lý</li>
              </ul>
            </section>

            {/* Chia sẻ thông tin */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Chia sẻ thông tin
              </h2>
              <p className="text-gray-600 mb-4">
                Chúng tôi không bán, trao đổi hoặc chuyển nhượng thông tin cá
                nhân của bạn cho bên thứ ba mà không có sự đồng ý của bạn, ngoại
                trừ các trường hợp:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Nhà cung cấp dịch vụ đáng tin cậy</li>
                <li>Yêu cầu pháp lý</li>
                <li>Bảo vệ quyền và tài sản của chúng tôi</li>
                <li>Hợp tác kinh doanh (với sự đồng ý của bạn)</li>
              </ul>
            </section>

            {/* Bảo mật */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Bảo mật thông tin
              </h2>
              <p className="text-gray-600 mb-4">
                Chúng tôi triển khai các biện pháp bảo mật hợp lý để bảo vệ
                thông tin của bạn khỏi truy cập trái phép, sửa đổi, tiết lộ hoặc
                phá hủy.
              </p>
            </section>

            {/* Quyền của bạn */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Quyền của bạn
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Truy cập thông tin cá nhân</li>
                <li>Chỉnh sửa thông tin không chính xác</li>
                <li>Xóa thông tin cá nhân</li>
                <li>Rút lại sự đồng ý</li>
                <li>Khiếu nại với cơ quan quản lý</li>
              </ul>
            </section>

            {/* Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Cookies
              </h2>
              <p className="text-gray-600 mb-4">
                Chúng tôi sử dụng cookies để cải thiện trải nghiệm người dùng.
                Bạn có thể quản lý cài đặt cookies thông qua trình duyệt của
                mình.
              </p>
            </section>

            {/* Liên hệ */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Liên hệ
              </h2>
              <p className="text-gray-600 mb-2">
                Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật này, vui
                lòng liên hệ:
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>Email: privacy@vutera.net</li>
                <li>Điện thoại: +84 123 456 789</li>
                <li>Website: vutera.net</li>
              </ul>
            </section>

            {/* Thay đổi chính sách */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Thay đổi chính sách
              </h2>
              <p className="text-gray-600">
                Chúng tôi có thể cập nhật chính sách bảo mật này theo thời gian.
                Chúng tôi sẽ thông báo về bất kỳ thay đổi nào bằng cách đăng
                chính sách mới trên trang web này.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer (giống trang chủ) */}
      <footer className="bg-gray-800 text-white py-12">
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
                    href="/#services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Dịch vụ
                  </a>
                </li>
                <li>
                  <a
                    href="/#about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Về chúng tôi
                  </a>
                </li>
                <li>
                  <a
                    href="/#contact"
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

          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              <p>
                © {new Date().getFullYear()} Vutera. Tất cả quyền được bảo lưu.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-white font-medium text-sm">
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
