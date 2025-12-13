import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Spark() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            VUTERA Spark: Cho doanh nghiệp nhỏ bùng nổ & tài sản thông minh.
          </h1>

          <div className="text-center mt-8">
            <p className="text-lg font-bold text-gray-900 mb-2">
              VUTERA Spark sắp sửa phát hành!
            </p>
            <p className="text-gray-600">
              Hãy truy cập lại trang sau một lúc để trải nghiệm!
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Cập nhật tin bài
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
