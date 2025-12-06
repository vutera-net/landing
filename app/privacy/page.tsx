import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function PrivacyPolicy() {
  const lastUpdated = new Date().toLocaleDateString("vi-VN");
  const effectiveDate = "6/12/2025";

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Chính sách bảo mật – Vutera
          </h1>
          <p className="text-gray-600 mb-8">
            Cập nhật lần cuối: {lastUpdated} | Hiệu lực từ: {effectiveDate}
          </p>

          <div className="prose prose-lg max-w-none">
            {/* 1. Phạm vi áp dụng */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Phạm vi áp dụng
              </h2>
              <p className="text-gray-600 mb-4">
                Chính sách này áp dụng cho toàn bộ sản phẩm do Vutera phát
                triển, bao gồm nhưng không giới hạn:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Các ứng dụng mobile trên Google Play / App Store</li>
                <li>Các nền tảng giáo dục trực tuyến</li>
                <li>Các sản phẩm FinTech hoặc ví điện tử (nếu có)</li>
                <li>Các giải pháp bất động sản (PropTech)</li>
                <li>Các nền tảng AI</li>
                <li>Website và dịch vụ web liên quan</li>
                <li>
                  Một số sản phẩm đặc thù (đặc biệt FinTech hoặc dịch vụ yêu cầu
                  KYC)
                </li>
              </ul>
              <p className="text-gray-600 mb-4">
                Một số sản phẩm đặc thù (đặc biệt FinTech hoặc dịch vụ yêu cầu
                KYC) có thể áp dụng thêm chính sách riêng.
              </p>
            </section>

            {/* 2. Dữ liệu chúng tôi thu thập */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Dữ liệu chúng tôi thu thập
              </h2>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                2.1. Dữ liệu do người dùng cung cấp
              </h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Thông tin tài khoản (email, mật khẩu…)</li>
                <li>Thông tin cá nhân (tùy từng dịch vụ: tên, ngày sinh…)</li>
                <li>
                  Thông tin thanh toán (chỉ khi sử dụng dịch vụ cần giao dịch)
                </li>
              </ul>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                2.2. Dữ liệu tự động thu thập
              </h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Thiết bị, hệ điều hành, mã định danh thiết bị</li>
                <li>Dữ liệu phân tích hành vi (Analytics)</li>
                <li>Cookie hoặc mã theo dõi (tùy nền tảng)</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                2.3. Dữ liệu nhạy cảm (FinTech / PropTech / eKYC)
              </h3>
              <p className="text-gray-600 mb-4">
                Chỉ thu thập khi pháp luật yêu cầu hoặc khi cần cho dịch vụ đặc
                thù. Ví dụ: ảnh CMND/CCCD, khuôn mặt eKYC, thông tin tài chính.
              </p>
            </section>

            {/* 3. Mục đích sử dụng dữ liệu */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Mục đích sử dụng dữ liệu
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Cung cấp và vận hành dịch vụ</li>
                <li>Phân tích để cải thiện chất lượng sản phẩm</li>
                <li>Hỗ trợ khách hàng</li>
                <li>
                  Tuân thủ pháp luật (đối với sản phẩm tài chính hoặc yêu cầu
                  xác minh danh tính)
                </li>
              </ul>
              <p className="text-gray-600 mb-4">
                Chúng tôi không bán dữ liệu người dùng cho bên thứ ba.
              </p>
            </section>

            {/* 4. Chia sẻ dữ liệu */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Chia sẻ dữ liệu
              </h2>
              <p className="text-gray-600 mb-4">
                Dữ liệu chỉ được chia sẻ khi:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Có sự đồng ý của người dùng</li>
                <li>
                  Bên thứ ba cung cấp dịch vụ kỹ thuật (Analytics, thanh toán,
                  lưu trữ…)
                </li>
                <li>Yêu cầu bởi pháp luật, cơ quan nhà nước</li>
              </ul>
            </section>

            {/* 5. Lưu trữ & bảo mật */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Lưu trữ & bảo mật
              </h2>
              <p className="text-gray-600 mb-4">
                Dữ liệu được mã hóa và lưu trữ an toàn theo tiêu chuẩn quốc tế
              </p>
              <p className="text-gray-600 mb-4">
                Chúng tôi áp dụng cơ chế hạn chế truy cập nội bộ
              </p>
              <p className="text-gray-600 mb-4">
                Dữ liệu nhạy cảm (nếu có) được lưu riêng theo quy định pháp lý
              </p>
            </section>

            {/* 6. Quyền của người dùng */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Quyền của người dùng
              </h2>
              <p className="text-gray-600 mb-4">Người dùng có thể yêu cầu:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Truy cập dữ liệu</li>
                <li>Sửa hoặc xóa dữ liệu</li>
                <li>Rút lại sự đồng ý dẫn tới việc ngừng sử dụng dịch vụ</li>
                <li>Liên hệ hỗ trợ qua email hỗ trợ của từng sản phẩm</li>
              </ul>
            </section>

            {/* 7. Chính sách cho trẻ em */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Chính sách cho trẻ em
              </h2>
              <p className="text-gray-600 mb-4">
                Một số sản phẩm của Vutera không dành cho trẻ em dưới 13 tuổi,
                trừ khi được quy định rõ trong mô tả sản phẩm.
              </p>
            </section>

            {/* 8. Thay đổi chính sách */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Thay đổi chính sách
              </h2>
              <p className="text-gray-600 mb-4">
                Chúng tôi có thể cập nhật chính sách khi cần. Người dùng sẽ được
                thông báo khi có thay đổi quan trọng.
              </p>
            </section>

            {/* 9. Liên hệ */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Liên hệ
              </h2>
              <p className="text-gray-600 mb-2">
                Nếu có bất kỳ câu hỏi nào, vui lòng liên hệ:
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>Email chung: contact@vutera.net</li>
                <li>Website: https://vutera.net</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
