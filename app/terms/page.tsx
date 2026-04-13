"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Scale, Users, FileCheck, CreditCard, ShieldAlert, XCircle, RefreshCcw, Mail } from "lucide-react";

export default function TermsOfService() {
  const currentDate = new Date().toLocaleDateString("vi-VN");

  const sections = [
    {
      id: "intro",
      title: "1. Giới thiệu",
      icon: <Scale className="w-5 h-5 text-teal-600" />,
      content: "Chào mừng bạn đến với Vutera – Personal Life OS. Việc sử dụng website và các dịch vụ thuộc hệ sinh thái của chúng tôi (Harmony, TuVi, AnMenh, Orbit, Flow…) đồng nghĩa với việc bạn chấp nhận và đồng ý tuân thủ các Điều khoản sử dụng này."
    },
    {
      id: "definitions",
      title: "2. Định nghĩa",
      icon: <FileCheck className="w-5 h-5 text-blue-600" />,
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>“Chúng tôi / Vutera”:</strong> Đơn vị sở hữu và vận hành hệ sinh thái Vutera.</li>
          <li><strong>“Bạn / Người dùng”:</strong> Bất kỳ cá nhân hoặc tổ chức nào truy cập và sử dụng dịch vụ của chúng tôi.</li>
          <li><strong>“Dịch vụ”:</strong> Toàn bộ các tính năng, ứng dụng, nội dung được Vutera cung cấp trên nền tảng web và mobile.</li>
        </ul>
      )
    },
    {
      id: "accounts",
      title: "3. Tài khoản người dùng",
      icon: <Users className="w-5 h-5 text-purple-600" />,
      content: (
        <div className="space-y-4">
          <p>Khi tạo tài khoản trên hệ thống Vutera (accounts.vutera.net):</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Bạn cam kết cung cấp thông tin chính xác và cập nhật.</li>
            <li>Bạn chịu trách nhiệm hoàn toàn về việc bảo mật mật khẩu và mọi hoạt động diễn ra trên tài khoản của mình.</li>
            <li>Chúng tôi có quyền tạm khóa hoặc chấm dứt tài khoản nếu phát hiện hành vi gian lận hoặc vi phạm điều khoản.</li>
          </ul>
        </div>
      )
    },
    {
      id: "rights",
      title: "4. Quyền và nghĩa vụ",
      icon: <ShieldAlert className="w-5 h-5 text-amber-600" />,
      content: (
        <div className="space-y-4">
          <p>Bạn được quyền sử dụng dịch vụ đúng mục đích cá nhân. Tuy nhiên, các hành vi sau bị nghiêm cấm:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Sao chép, sửa đổi hoặc phân phối lại nội dung và công nghệ của Vutera mà không có sự cho phép.</li>
            <li>Sử dụng các công cụ tự động (bot, crawl) để thu thập dữ liệu trái phép.</li>
            <li>Tấn công, gây gián đoạn hoặc làm tổn hại đến sự ổn định của hệ thống.</li>
          </ul>
        </div>
      )
    },
    {
      id: "ip",
      title: "5. Quyền sở hữu trí tuệ",
      icon: <Scale className="w-5 h-5 text-indigo-600" />,
      content: "Toàn bộ nội dung, logo, thuật toán AI, lá số tính toán và công nghệ đều thuộc quyền sở hữu trí tuệ duy nhất của Vutera. Bạn chỉ được cấp quyền sử dụng hạn chế hằng ngày, không có quyền chuyển nhượng hoặc thương mại hóa lại các tài sản này."
    },
    {
      id: "premium",
      title: "6. Dịch vụ Premium & Thanh toán",
      icon: <CreditCard className="w-5 h-5 text-emerald-600" />,
      content: (
        <div className="space-y-4">
          <p>Đối với các tính năng trả phí (đặc biệt là AnMenh Premium):</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Giá cả và chu kỳ thanh toán sẽ được hiển thị rõ ràng trước khi giao dịch.</li>
            <li>Chúng tôi có quyền thay đổi giá sau khi thông báo trước cho người dùng.</li>
            <li>Việc hoàn phí chỉ được xem xét trong các trường hợp đặc biệt theo chính sách hoàn trả của từng sản phẩm.</li>
          </ul>
        </div>
      )
    },
    {
      id: "limitations",
      title: "7. Giới hạn trách nhiệm",
      icon: <XCircle className="w-5 h-5 text-rose-600" />,
      content: "Dịch vụ được cung cấp theo nguyên tắc “nguyên trạng” (as is). Chúng tôi không đảm bảo dịch vụ sẽ hoàn toàn không có lỗi hoặc gián đoạn. Vutera không chịu trách nhiệm cho các thiệt hại gián tiếp phát sinh từ việc sử dụng hoặc không thể sử dụng dịch vụ."
    },
    {
      id: "termination",
      title: "8. Chấm dứt dịch vụ",
      icon: <XCircle className="w-5 h-5 text-slate-600" />,
      content: "Bạn có thể ngừng sử dụng dịch vụ bất kỳ lúc nào bằng cách xóa tài khoản. Chúng tôi cũng có quyền chấm dứt quyền truy cập của bạn nếu bạn vi phạm nghiêm trọng các quy định trong Điều khoản sử dụng này."
    },
    {
      id: "changes",
      title: "9. Thay đổi điều khoản",
      icon: <RefreshCcw className="w-5 h-5 text-blue-600" />,
      content: "Vutera có quyền sửa đổi các điều khoản này. Phiên bản cập nhật sẽ được đăng tải trên website. Việc bạn tiếp tục sử dụng dịch vụ sau khi các thay đổi được đăng tải đồng nghĩa với việc bạn chấp nhận các thay đổi đó."
    },
    {
      id: "law",
      title: "10. Luật áp dụng & Giải quyết tranh chấp",
      icon: <Scale className="w-5 h-5 text-slate-900" />,
      content: "Điều khoản này được điều chỉnh bởi pháp luật Việt Nam. Mọi tranh chấp sẽ được ưu tiên giải quyết thông qua thương lượng, trường hợp không thành sẽ được đưa ra Trung tâm Trọng tài Quốc tế Việt Nam (VIAC) hoặc Tòa án có thẩm quyền tại Hà Nội."
    },
    {
      id: "contact",
      title: "11. Liên hệ",
      icon: <Mail className="w-5 h-5 text-blue-500" />,
      content: (
        <div className="space-y-2">
          <p>Mọi thắc mắc về Điều khoản sử dụng, vui lòng liên hệ:</p>
          <p><strong>Email:</strong> support@vutera.net</p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfd] text-slate-800 font-sans">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Page Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Điều Khoản Sử Dụng</h1>
            <div className="inline-flex items-center gap-4 text-sm font-medium text-slate-500 bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
              <span>Cập nhật lần cuối: {currentDate}</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
              <span>Phiên bản 1.0</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar TOC */}
            <aside className="lg:w-1/4 hidden lg:block sticky top-32 h-fit">
              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                  >
                    {section.title.split('. ')[1]}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Content Area */}
            <div className="lg:w-3/4 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 p-10 md:p-16">
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-600 leading-relaxed mb-12">
                  Chào mừng bạn đến với <strong>Vutera</strong>. Việc truy cập và sử dụng dịch vụ của chúng tôi xác nhận sự đồng ý của bạn đối với các quy định dưới đây nhằm đảm bảo một cộng đồng văn minh và an toàn.
                </p>

                <div className="space-y-16">
                  {sections.map((section) => (
                    <div key={section.id} id={section.id} className="scroll-mt-32">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                          {section.icon}
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 m-0">{section.title}</h2>
                      </div>
                      <div className="text-slate-600 leading-relaxed text-lg pl-1">
                        {section.content}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-20 p-8 bg-slate-50 rounded-3xl border border-slate-100 italic text-slate-500 text-sm">
                  Lưu ý: Bạn nên đọc kỹ các điều khoản này định kỳ. Bản cập nhật mới nhất sẽ luôn có hiệu lực ngay khi được đăng tải.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
