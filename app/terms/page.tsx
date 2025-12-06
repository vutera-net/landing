import Footer from "@/components/Footer";
import Header from "@/components/Header";

// app/terms/page.tsx - Tương tự structure như privacy page
export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header và Footer tương tự privacy page */}
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Điều khoản sử dụng
          </h1>
          <p className="text-gray-600 mb-8">
            Cập nhật lần cuối: {new Date().toLocaleDateString("vi-VN")}
          </p>

          <div className="prose prose-lg max-w-none">
            {/* Nội dung điều khoản sử dụng */}
            <p className="text-gray-600">Đang cập nhật nội dung...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
