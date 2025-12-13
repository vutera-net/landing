"use client"; // Bắt buộc dòng này ở đầu file vì dùng state (useState) và hooks (useEffect)

import {
  ArrowRight,
  Code,
  Compass,
  Globe,
  GraduationCap,
  Mail,
  Menu,
  Smartphone,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";

// Định nghĩa kiểu dữ liệu (Interface) cho TypeScript
interface ServiceItem {
  title: string;
  description: string;
  icon: ReactNode; // Kiểu cho component Icon
  color: string;
  tags: string[];
}

interface ProcessItem {
  step: string;
  title: string;
  desc: string;
}

const services: ServiceItem[] = [
  {
    title: "Tử Vi & Phong Thủy",
    description:
      "Số hóa huyền học phương Đông. Tích hợp thuật toán tính toán lá số chính xác, la bàn phong thủy AR và tư vấn trực tuyến.",
    icon: <Compass className="w-10 h-10 text-purple-400" />,
    color: "from-purple-900 to-indigo-900",
    tags: ["Lá số tử vi", "Cân xương tính số", "Kết nối chuyên gia"],
  },
  {
    title: "Tài Chính Cá Nhân",
    description:
      "Ứng dụng Fintech giúp quản lý chi tiêu, đầu tư thông minh và theo dõi dòng tiền với bảo mật tiêu chuẩn ngân hàng.",
    icon: <TrendingUp className="w-10 h-10 text-emerald-400" />,
    color: "from-emerald-900 to-teal-900",
    tags: ["Quản lý chi tiêu", "Biểu đồ trực quan", "Bảo mật cao"],
  },
  {
    title: "Giáo Dục (EdTech)",
    description:
      "Nền tảng học tập trực tuyến tương tác cao, LMS, ứng dụng học ngoại ngữ và thi thử với trải nghiệm người dùng tối ưu.",
    icon: <GraduationCap className="w-10 h-10 text-amber-400" />,
    color: "from-amber-900 to-orange-900",
    tags: ["E-Learning", "Gamification", "Lớp học ảo"],
  },
];

const processes: ProcessItem[] = [
  {
    step: "01",
    title: "Hạt Giống Ý Tưởng",
    desc: 'Từ những cuộc trò chuyện về sự xa rời văn hóa truyền thống trong đời sống số, chúng tôi nhận ra: Cần một cầu nối. Ý tưởng về một nền tảng "Phong thủy thông minh" đầu tiên được nhen nhóm, với niềm tin công nghệ có thể làm sáng tỏ những tri thức cổ.',
  },
  {
    step: "02",
    title: "Thấu Hiểu & Kiến Tạo Nền Tảng",
    desc: 'Chúng tôi mở rộng tầm nhìn. Nhu cầu không chỉ dừng ở tâm linh, mà còn là tài chính cá nhân lộn xộn, giáo dục thiếu cá nhân hóa, và doanh nghiệp nhỏ thiếu công cụ. Triết lý "Công nghệ khai sáng, Phụng sự con người" chính thức hình thành, trở thành kim chỉ nam.',
  },
  {
    step: "03",
    title: "Ra Mắt & Kết Nối",
    desc: 'Sản phẩm đầu tiên "VUTERA Phong Thủy AI" chính thức ra mắt, nhận được phản hồi tích cực về tính cá nhân hóa.',
  },
  {
    step: "04",
    title: "Tương Lai - Đồng Hành & Phát Triển Bền Vững",
    desc: 'Phát triển thành một "Personal Life OS" (Hệ điều hành cuộc sống cá nhân), nơi AI thực sự hiểu bạn và chủ động đề xuất các giải pháp cho sức khỏe, mối quan hệ, sự nghiệp một cách hài hòa.',
  },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  // State quản lý theme
  // const [theme, setTheme] = useState<"light" | "dark">("light");

  // // Lấy theme ban đầu từ localStorage hoặc setting hệ thống
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const storedTheme = localStorage.getItem("theme");
  //     const prefersDark = window.matchMedia(
  //       "(prefers-color-scheme: dark)"
  //     ).matches;
  //     if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
  //       setTheme("dark");
  //       document.documentElement.classList.add("dark");
  //     } else {
  //       setTheme("light");
  //       document.documentElement.classList.remove("dark");
  //     }
  //   }
  // }, []);

  // Hiệu ứng đổi màu header khi scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-200 transition-colors duration-500">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? // Khi đã scroll: Nền đậm hơn để nổi bật
              "bg-white/95 dark:bg-slate-950/90 backdrop-blur-md border-b dark:border-slate-800 border-slate-200 py-4 shadow-lg"
            : // Khi ở top trang: Nền mờ nhẹ (đã fix)
              "bg-white/20 dark:bg-slate-950/20 backdrop-blur-sm py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo & Title */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden cursor-pointer">
              <Image
                src="/logo.png"
                alt="Vutera Logo"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-white dark:to-slate-400 bg-gradient-to-r from-slate-900 to-slate-600">
              Vutera
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Về chúng tôi
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Sản phẩm
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Hành trình
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all transform hover:scale-105 font-medium"
            >
              Liên hệ
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-100 dark:bg-slate-900 border-b dark:border-slate-800 border-slate-200 p-6 flex flex-col space-y-4 shadow-xl">
            <button
              onClick={() => scrollToSection("about")}
              className="text-left py-2 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Về chúng tôi
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-left py-2 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Lĩnh vực
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-left py-2 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Quy trình
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left py-2 text-blue-600 dark:text-blue-400 font-bold"
            >
              Liên hệ ngay
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -z-10"></div>

        <div className="container mx-auto px-6 text-center">
          {/* <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border dark:border-slate-700 border-slate-300 text-sm text-slate-600 dark:text-slate-400 mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
            Sẵn sàng cho các dự án 2025 - 2026
          </div> */}

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight dark:text-white text-slate-900">
            Đổi mới vì{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              cuộc sống
            </span>
          </h1>

          <p className="text-lg md:text-xl dark:text-slate-400 text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            VUTERA là nền tảng công nghệ đa dịch vụ, ứng dụng AI và dữ liệu để
            đổi mới và nâng cao chất lượng mọi mặt đời sống cá nhân và kinh
            doanh.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors flex items-center group"
            >
              Bắt đầu ngay
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="px-8 py-4 bg-transparent border border-slate-700 dark:border-slate-700 dark:text-white text-slate-700 rounded-full font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Tìm hiểu thêm
            </button>
          </div>
        </div>

        {/* Mockup / Abstract Art */}
        <div className="mt-20 flex justify-center gap-6 opacity-80">
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-slate-200/50 dark:bg-slate-800/50 border dark:border-slate-700 border-slate-300 flex items-center justify-center transform -rotate-12 translate-y-4">
            <Smartphone className="w-8 h-8 md:w-10 md:h-10 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-slate-200/50 dark:bg-slate-800/50 border dark:border-slate-700 border-slate-300 flex items-center justify-center transform rotate-6 -translate-y-4">
            <Code className="w-8 h-8 md:w-10 md:h-10 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-slate-200/50 dark:bg-slate-800/50 border dark:border-slate-700 border-slate-300 flex items-center justify-center transform rotate-12 translate-y-2">
            <Globe className="w-8 h-8 md:w-10 md:h-10 text-emerald-600 dark:text-emerald-400" />
          </div>
        </div>
      </section>

      {/* About Stats Section */}
      <section
        id="about"
        className="py-20 bg-slate-100/50 dark:bg-slate-900/50 border-y dark:border-slate-800 border-slate-200"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              {/* <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl h-80 w-full flex items-center justify-center text-white text-5xl font-bold">
                VUTERA
              </div> */}
              {/* <div className="rounded-2xl w-full bg-white dark:bg-slate-900 border dark:border-slate-800 border-slate-200 flex items-center justify-center p-6">
                <Image
                  src="/full_logo.png"
                  alt="Vutera Logo"
                  width={300}
                  height={300}
                  className="object-contain w-full max-w-[220px] md:max-w-[300px]"
                  priority
                />
              </div> */}
              <div className="rounded-2xl w-full h-80 bg-white dark:bg-slate-900 border dark:border-slate-800 border-slate-200 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Vutera Logo"
                  width={320}
                  height={320}
                  className="object-contain h-full w-auto p-4"
                  priority
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900">
                Về Vutera
              </h2>
              <br />
              <p className="dark:text-slate-400 text-slate-600">
                Chào mừng bạn đến với VUTERA, nơi công nghệ được tạo ra với một
                sứ mệnh duy nhất: phụng sự và nâng tầm cuộc sống con người.
              </p>
              <p className="dark:text-slate-400 text-slate-600">
                Chúng tôi ứng dụng công nghệ không để thay thế con người – mà để
                khai sáng và phụng sự con người.
              </p>
            </div>
          </div>
        </div>
        <div hidden className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold dark:text-white text-slate-900 mb-2">
                5+
              </div>
              <div className="dark:text-slate-400 text-slate-600">
                Năm Kinh Nghiệm
              </div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                50+
              </div>
              <div className="dark:text-slate-400 text-slate-600">
                Dự Án Hoàn Thành
              </div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                98%
              </div>
              <div className="dark:text-slate-400 text-slate-600">
                Khách Hàng Hài Lòng
              </div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                24/7
              </div>
              <div className="dark:text-slate-400 text-slate-600">
                Hỗ Trợ Kỹ Thuật
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* <section id="services" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4">
              Sản Phẩm
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900">
              Hệ sinh thái sản phẩm Vutera
            </h3>
          </div>
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
                Đời Sống Tinh Thần & Văn Hóa Thông Minh
              </h3>
              <p className="text-gray-600">
                Kết nối trí tuệ cổ điển với công nghệ hiện đại, mang lại sự an
                tâm và lựa chọn sáng suốt.
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
                Tài Chính Cá Nhân Thông Minh
              </h3>
              <p className="text-gray-600">
                Biến việc quản lý tiền bạc từ phức tạp thành đơn giản, từ lo
                lắng thành tự tin.
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
                Phát Triển Bản Thân & Sự Nghiệp
              </h3>
              <p className="text-gray-600">
                Lộ trình học tập được AI thiết kế riêng cho bạn, giúp bạn tiến
                bộ nhanh gấp đôi.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4">
              Sản Phẩm
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900">
              Hệ sinh thái sản phẩm Vutera
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl dark:bg-slate-900 bg-white shadow-xl dark:border dark:border-slate-800 border-slate-200 hover:dark:border-slate-600 hover:border-slate-400 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  <div className="mb-6 p-4 dark:bg-slate-950 bg-slate-100 rounded-2xl inline-block border dark:border-slate-800 border-slate-300 group-hover:dark:border-white/20 group-hover:border-slate-500/20 transition-colors">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-4 dark:text-white text-slate-900 group-hover:dark:text-blue-200 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h4>
                  <p className="dark:text-slate-400 text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-3 py-1 rounded-full dark:bg-slate-800 bg-slate-200 dark:text-slate-300 text-slate-700 border dark:border-slate-700 border-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 dark:bg-slate-950 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 dark:text-white text-slate-900">
                Hành Trình Của VUTERA
              </h2>
              <div className="space-y-8">
                {processes.map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full dark:bg-slate-900 bg-slate-100 border dark:border-slate-700 border-slate-300 flex items-center justify-center font-bold text-blue-600 dark:text-blue-500">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold dark:text-white text-slate-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="dark:text-slate-400 text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl transform rotate-3 blur-lg opacity-30"></div>

              <div className="relative dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-300 rounded-3xl p-8 shadow-2xl">
                {/* Window header */}
                <div className="flex items-center gap-2 mb-6 border-b dark:border-slate-800 border-slate-200 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>

                  <div className="ml-4 text-xs dark:text-slate-500 text-slate-400 font-mono">
                    Vutera Ecosystem
                  </div>
                </div>

                {/* Code-style content */}
                <div className="space-y-4 font-mono text-sm">
                  <div className="text-purple-600 dark:text-purple-400">
                    const{" "}
                    <span className="text-blue-600 dark:text-blue-400">
                      VuteraCore
                    </span>{" "}
                    = () =&gt; {"{"}
                  </div>

                  <div className="pl-4 dark:text-slate-300 text-slate-700">
                    <span className="dark:text-slate-500 text-slate-400">
                      {/* Comment */}
                      {"// Hệ lõi công nghệ"}
                    </span>
                    <br />
                    const ai = createAIEngine();
                    <br />
                    const data = buildUnifiedUserProfile();
                    <br />
                    const engine = integrateSmartSuggestions(ai, data);
                    <br />
                    <br />
                    <span className="dark:text-slate-500 text-slate-400">
                      {"// Kết nối đa sản phẩm"}
                    </span>
                    <br />
                    const ecosystem = [
                    <br />
                    &nbsp;&nbsp;&quot;Vutera Harmony&quot;,
                    <br />
                    &nbsp;&nbsp;&quot;Vutera Flow&quot;,
                    <br />
                    &nbsp;&nbsp;&quot;Vutera Orbit&quot;,
                    <br />
                    &nbsp;&nbsp;&quot;Vutera Spark&quot;,
                    <br />
                    ];
                    <br />
                    <br />
                    return {"{ ai, data, engine, ecosystem }"};
                  </div>

                  <div className="text-purple-600 dark:text-purple-400">
                    {"};"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Banner */}
      <section
        hidden
        className="py-12 border-y dark:border-slate-800 border-slate-200 dark:bg-slate-900/30 bg-white"
      >
        <div className="container mx-auto px-6 text-center">
          <p className="dark:text-slate-500 text-slate-700 mb-8 font-medium">
            CÔNG NGHỆ CHÚNG TÔI SỬ DỤNG
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Tech Items - Using spans for simplicity in this demo */}
            <span className="text-2xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
              <div className="w-3 h-3 dark:bg-white bg-slate-900 rounded-full"></div>
              Nodejs
            </span>
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
              Next.js
            </span>
            <span className="text-2xl font-bold text-sky-600 dark:text-sky-400 flex items-center gap-2">
              <div className="w-3 h-3 bg-sky-600 dark:bg-sky-400 rounded-full"></div>
              Flutter
            </span>
            <span className="text-2xl font-bold text-orange-600 dark:text-orange-500 flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-600 dark:bg-orange-500 rounded-full"></div>
              Firebase
            </span>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="bg-gradient-to-br from-blue-600/10 to-slate-100 dark:from-blue-900/50 dark:to-slate-900 rounded-3xl p-8 md:p-16 border dark:border-slate-700 border-slate-300 shadow-2xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 dark:text-white text-slate-900">
              Đồng Hành Cùng Hệ Sinh Thái VUTERA Ngay Từ Đầu
            </h2>
            <p className="dark:text-slate-300 text-slate-700 mb-10 text-lg">
              Bạn muốn trải nghiệm các giải pháp thông minh đầu tiên và nhận ưu
              đãi đặc biệt? Hãy trở thành một phần của cộng đồng tiên phong.
            </p>

            <form className="max-w-md mx-auto space-y-4 text-left">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium dark:text-slate-400 text-slate-600 mb-2"
                >
                  Email của bạn
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="contact@company.com"
                  className="w-full px-4 py-3 dark:bg-slate-950 bg-white border dark:border-slate-700 border-slate-300 rounded-xl focus:outline-none focus:border-blue-500 dark:text-white text-slate-900 placeholder-slate-400 dark:placeholder-slate-600 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="idea"
                  className="block text-sm font-medium dark:text-slate-400 text-slate-600 mb-2"
                >
                  Bạn quan tâm nhất đến lĩnh vực nào của VUTERA? (Tùy chọn)
                </label>
                <textarea
                  rows={3}
                  id="idea"
                  placeholder="Tôi quan tâm về..."
                  className="w-full px-4 py-3 dark:bg-slate-950 bg-white border dark:border-slate-700 border-slate-300 rounded-xl focus:outline-none focus:border-blue-500 dark:text-white text-slate-900 placeholder-slate-400 dark:placeholder-slate-600 transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-600/25 flex justify-center items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Đăng ký
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="dark:bg-slate-950 bg-slate-50 pt-16 pb-8 border-t dark:border-slate-900 border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-xl overflow-hidden cursor-pointer">
                  <Image
                    src="/logo.png"
                    alt="Vutera Logo"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <span className="text-xl font-bold dark:text-white text-slate-900">
                  Vutera
                </span>
              </div>
              <p className="dark:text-slate-500 text-slate-600 leading-relaxed max-w-sm">
                Đổi mới vì cuộc sống
              </p>
            </div>

            <div>
              <h4 className="dark:text-white text-slate-900 font-bold mb-6">
                Sản phẩm
              </h4>
              <ul className="space-y-4 dark:text-slate-400 text-slate-600">
                <li>
                  <a
                    className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
                    href="/harmony"
                  >
                    Vutera Harmony
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
                    href="/flow"
                  >
                    Vutera Flow
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
                    href="/orbit"
                  >
                    Vutera Orbit
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
                    href="/spark"
                  >
                    Vutera Spark
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="dark:text-white text-slate-900 font-bold mb-6">
                Liên hệ
              </h4>
              <ul className="space-y-4 dark:text-slate-400 text-slate-600">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" /> vuterastudio@gmail.com
                </li>
                <li className="flex items-center">
                  <Smartphone className="w-4 h-4 mr-2" /> (+84) 948 148 078
                </li>
                <li className="flex items-center">
                  <Users className="w-4 h-4 mr-2" /> Hanoi, Vietnam
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t dark:border-slate-900 border-slate-200 flex flex-col md:flex-row justify-between items-center dark:text-slate-600 text-slate-500 text-sm">
            <p>&copy; 2025 Vutera. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="/privacy"
                className="hover:text-slate-800 dark:hover:text-slate-400 cursor-pointer"
              >
                Chính sách bảo mật
              </a>
              <a
                href="/terms"
                className="hover:text-slate-800 dark:hover:text-slate-400 cursor-pointer"
              >
                Điều khoản dịch vụ
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
