"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Shield, Lock, Eye, FileText, Globe, Info, Zap } from "lucide-react";

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString("vi-VN");

  const sections = [
    {
      id: "introduction",
      title: "1. Giới thiệu / Cam kết bảo mật",
      icon: <Shield className="w-5 h-5 text-teal-600" />,
      content: "Chúng tôi (Vutera) cam kết bảo vệ thông tin cá nhân của bạn theo quy định của Luật Bảo vệ dữ liệu cá nhân 2025 và các văn bản pháp luật liên quan. Chính sách này mô tả cách chúng tôi thu thập, sử dụng và bảo vệ dữ liệu của bạn trong toàn bộ hệ sinh thái Personal Life OS."
    },
    {
      id: "collection",
      title: "2. Thông tin chúng tôi thu thập",
      icon: <Info className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4">
          <p>Chúng tôi thu thập các loại thông tin sau:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Thông tin bạn cung cấp:</strong> Họ tên, email, số điện thoại, ngày tháng năm sinh (để lập lá số), giới tính, thông tin lá số (tử vi, bát tự, phong thủy...), thông tin tài chính (Flow), và lộ trình học tập (Orbit).</li>
            <li><strong>Thông tin tự động thu thập:</strong> Địa chỉ IP, loại thiết bị, trình duyệt, cookies, và dữ liệu sử dụng hệ thống.</li>
            <li><strong>Thông tin từ bên thứ ba:</strong> Dữ liệu từ Google, Apple hoặc các dịch vụ mạng xã hội khi bạn chọn đăng ký/đăng nhập qua các nền tảng này.</li>
          </ul>
        </div>
      )
    },
    {
      id: "purpose",
      title: "3. Mục đích thu thập và xử lý",
      icon: <Eye className="w-5 h-5 text-purple-600" />,
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Cung cấp và duy trì các dịch vụ cá nhân hóa (Harmony, Orbit, Flow).</li>
          <li>Cải thiện trải nghiệm người dùng và phát triển sản phẩm AI.</li>
          <li>Gửi thông báo quan trọng, hỗ trợ kỹ thuật và marketing (khi được phép).</li>
          <li>Tuân thủ các nghĩa vụ pháp lý và quy định hiện hành.</li>
        </ul>
      )
    },
    {
      id: "legal",
      title: "4. Cơ sở pháp lý xử lý dữ liệu",
      icon: <FileText className="w-5 h-5 text-emerald-600" />,
      content: "Việc xử lý dữ liệu của bạn dựa trên các cơ sở pháp lý: Sự đồng ý của bạn khi đăng ký dịch vụ; Để thực hiện hợp đồng cung cấp dịch vụ; Và để tuân thủ các nghĩa vụ pháp lý của Vutera."
    },
    {
      id: "sharing",
      title: "5. Chia sẻ thông tin với bên thứ ba",
      icon: <Globe className="w-5 h-5 text-indigo-600" />,
      content: "Chúng tôi KHÔNG bán dữ liệu cá nhân của bạn. Dữ liệu chỉ được chia sẻ với các đối tác cung cấp dịch vụ kỹ thuật (hosting, thanh toán, email) hoặc khi có yêu cầu bằng văn bản từ cơ quan nhà nước có thẩm quyền."
    },
    {
      id: "cookies",
      title: "6. Cookies và công nghệ tương tự",
      icon: <Zap className="w-5 h-5 text-amber-600" />,
      content: "Vutera sử dụng cookies để duy trì phiên đăng nhập và phân tích hiệu suất web. Bạn có thể quản lý hoặc từ chối cookies thông qua cài đặt của trình duyệt, tuy nhiên điều này có thể ảnh hưởng đến một số chức năng của dịch vụ."
    },
    {
      id: "security",
      title: "7. Bảo mật và lưu trữ dữ liệu",
      icon: <Lock className="w-5 h-5 text-rose-600" />,
      content: "Dữ liệu được mã hóa và bảo vệ bằng các biện pháp kỹ thuật tiên tiến (firewall, kiểm soát truy cập). Chúng tôi chỉ lưu trữ dữ liệu trong thời gian cần thiết để cung cấp dịch vụ hoặc theo yêu cầu của pháp luật."
    },
    {
      id: "rights",
      title: "8. Quyền của bạn đối với dữ liệu",
      icon: <Shield className="w-5 h-5 text-teal-600" />,
      content: "Bạn có quyền truy cập, yêu cầu chỉnh sửa, hoặc yêu cầu xóa dữ liệu cá nhân của mình bất kỳ lúc nào. Bạn cũng có quyền rút lại sự đồng ý xử lý dữ liệu bằng cách liên hệ với chúng tôi."
    },
    {
      id: "contact",
      title: "9. Liên hệ",
      icon: <MailIcon className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-2">
          <p>Mọi thắc mắc hoặc yêu cầu về dữ liệu cá nhân, vui lòng liên hệ:</p>
          <p><strong>Email:</strong> support@vutera.net</p>
          <p><strong>Địa chỉ:</strong> Hà Nội, Việt Nam</p>
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
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Chính Sách Bảo Mật</h1>
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
                    className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all"
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
                  Chào mừng bạn đến với <strong>Vutera</strong>. Sự riêng tư và an toàn dữ liệu của bạn là ưu tiên hàng đầu của chúng tôi trong hành trình cung cấp Hệ điều hành cuộc sống (Personal Life OS).
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

                <div className="mt-20 p-8 bg-teal-50 rounded-3xl border border-teal-100 italic text-teal-800 text-sm">
                  Lưu ý: Chính sách này có hiệu lực từ ngày 01/01/2026 và được xây dựng dựa trên sự tuân thủ Luật Bảo vệ dữ liệu cá nhân Việt Nam.
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

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}
