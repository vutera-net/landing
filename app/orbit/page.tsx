"use client";

import {
  Rocket,
  Target,
  Zap,
  ArrowRight,
  Star,
  Compass,
  TrendingUp,
  Mic,
  Map,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Globe
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function OrbitPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* 1. Header (Standard Vutera Navigation) */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl border-b border-blue-100/50 py-3 shadow-md' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl overflow-hidden cursor-pointer shadow-lg group-hover:scale-110 transition-transform">
              <Image src="/logo.png" alt="Vutera Logo" width={36} height={36} className="object-cover" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Vutera</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Trang chủ</Link>
            <Link href="/harmony" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Harmony</Link>
            <Link href="/orbit" className="text-sm font-bold text-blue-600">Orbit</Link>
            <Link href="/flow" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Flow</Link>
          </div>
          
          <div className="flex items-center gap-4">
             <Link href="https://accounts.vutera.net/login" className="hidden sm:block text-sm font-semibold text-slate-600 hover:text-blue-600">Đăng nhập</Link>
             <Link href="https://accounts.vutera.net/register" className="px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">Bắt đầu miễn phí</Link>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[radial-gradient(circle_at_top_left,_#EEF2FF,_transparent),radial-gradient(circle_at_bottom_right,_#FFF7ED,_transparent)]">
        {/* Dynamic background orbits */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border border-blue-100/30 rounded-full animate-spin-slow"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border border-blue-50/50 rounded-full animate-spin-slow-reverse"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in shadow-sm">
             <Rocket className="w-4 h-4" />
             Xây dựng Quỹ Đạo Phát Triển Cá Nhân
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 mb-8 leading-[1]">
            <span className="block italic font-serif text-blue-600">Orbit</span>
            Nâng Tầm Bản Thân <br className="hidden md:block"/> Với Sức Mạnh AI
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            Học tiếng Anh, định hướng nghề nghiệp và phát triển kỹ năng trong một hệ thống AI cá nhân hóa duy nhất. Không học lan man – Chỉ học đúng thứ, vào đúng thời điểm.
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <Link href="https://accounts.vutera.net/register" className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2 group">
              Bắt đầu hành trình Orbit miễn phí
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="flex flex-col gap-4">
               <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Tôi muốn:</span>
               <div className="flex flex-wrap justify-center gap-3">
                  {["Học tiếng Anh", "Định hướng nghề nghiệp", "Xây dựng kỹ năng"].map((choice, i) => (
                    <button key={i} className="px-6 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-bold hover:border-blue-400 hover:text-blue-600 transition-all hover:shadow-md">
                      {choice}
                    </button>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Orbit trong Hệ sinh thái Vutera */}
      <section className="py-24 bg-white border-y border-slate-100">
         <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
               <div className="w-full lg:w-1/2">
                  <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Mảnh Ghép Hoàn Hảo</h2>
                  <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Orbit Là Gì <br className="hidden md:block"/> Trong Vutera?</h3>
                  <p className="text-lg text-slate-600 leading-relaxed max-w-xl mb-8 font-medium">
                    Vutera Orbit là trụ cột **Phát triển Bản thân** của Personal Life OS. Nếu Harmony giúp bạn cân bằng nội tâm, Flow giúp bạn quản lý tài chính, thì Orbit giúp bạn liên tục tiến bộ theo quỹ đạo rõ ràng và bền vững.
                  </p>
                  
                  <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                     <div className="flex -space-x-4">
                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center border-4 border-white shadow-sm"><Compass className="w-5 h-5 text-purple-600" /></div>
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center border-4 border-white shadow-md z-10 scale-110"><Rocket className="w-5 h-5 text-blue-600" /></div>
                        <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center border-4 border-white shadow-sm"><TrendingUp className="w-5 h-5 text-emerald-600" /></div>
                     </div>
                     <div>
                        <p className="font-bold text-slate-900">Hệ sinh thái đồng nhất</p>
                        <p className="text-sm text-slate-500 font-medium tracking-tight whitespace-nowrap">Harmony • Orbit • Flow</p>
                     </div>
                  </div>
               </div>
               
               <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6 relative">
                  <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full -z-10"></div>
                  <div className="bg-white p-8 rounded-3xl shadow-xl shadow-blue-900/5 border border-blue-50 space-y-4 translate-y-8">
                     <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center"><Target className="w-6 h-6 text-blue-600" /></div>
                     <p className="font-bold">Lấy bạn làm trọng tâm</p>
                     <p className="text-sm text-slate-500 leading-relaxed font-medium">Bất kể kỹ năng hay ngoại ngữ, lộ trình đều được AI vẽ riêng cho bạn.</p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl shadow-xl shadow-blue-900/5 border border-blue-50 space-y-4">
                     <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center"><Zap className="w-6 h-6 text-orange-600" /></div>
                     <p className="font-bold">Hành động thực tế</p>
                     <p className="text-sm text-slate-500 leading-relaxed font-medium">Không học lan man. Tập trung vào những kỹ năng đang thiếu hụt nhất.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Philosophy Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-0"></div>
         <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
            <h2 className="text-orange-400 font-bold uppercase tracking-widest text-sm mb-6">Triết lý Orbit</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">Phát triển không phải là làm nhiều hơn. <br className="hidden md:block"/> Mà là làm đúng thứ – vào đúng thời điểm.</h3>
            <div className="aspect-[21/9] bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3rem] border border-slate-700 flex items-center justify-center p-12 relative shadow-2xl">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
               <p className="text-2xl md:text-4xl font-serif italic text-blue-300 opacity-90 leading-relaxed">&quot;Ngừng học lan man. <br/> Bắt đầu học đúng.&quot;</p>
               
               {/* Decorative orbit dots */}
               <div className="absolute w-2 h-2 bg-blue-400 rounded-full top-1/4 left-1/4 shadow-[0_0_10px_#60A5FA]"></div>
               <div className="absolute w-1.5 h-1.5 bg-orange-400 rounded-full bottom-1/4 right-1/4 shadow-[0_0_10px_#FB923C]"></div>
            </div>
         </div>
      </section>

      {/* 5. Core Features */}
      <section id="features" className="py-24 bg-[#F8FAFC]">
         <div className="container mx-auto px-6">
            <div className="text-center mb-20">
               <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Tính Năng Cốt Lõi</h2>
               <p className="text-slate-500 text-lg font-medium">Ba mảnh ghép tạo nên sự bứt phá sự nghiệp của bạn.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               {/* Feature 1: English AI */}
               <div className="group bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-all duration-500">
                  <div className="w-16 h-16 bg-blue-50 rounded-[2rem] flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-500">
                     <Mic className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight">Luyện Tiếng Anh <br/> Thông Minh Với AI</h4>
                  <p className="text-slate-500 mb-8 font-medium leading-relaxed">
                    Luyện nghe – nói – phản xạ hàng ngày theo trình độ và mục tiêu cá nhân. AI sửa lỗi phát âm, gợi ý hội thoại thực tế hằng ngày.
                  </p>
                  <Link href="https://accounts.vutera.net/register" className="inline-flex items-center text-blue-600 font-bold group/link">
                     Bắt đầu học ngay <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
               </div>

               {/* Feature 2: Career Path */}
               <div className="group bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-all duration-500">
                  <div className="w-16 h-16 bg-orange-50 rounded-[2rem] flex items-center justify-center mb-8 group-hover:bg-orange-500 transition-colors duration-500">
                     <Map className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight">Xây Dựng Lộ Trình <br/> Sự Nghiệp Cá Nhân Hóa</h4>
                  <p className="text-slate-500 mb-8 font-medium leading-relaxed">
                    Khám phá điểm mạnh, sở thích, giá trị cốt lõi dựa trên Bát Tự & Tính cách → AI đề xuất ngành nghề và lộ trình phát triển 5–10 năm.
                  </p>
                  <Link href="https://accounts.vutera.net/register" className="inline-flex items-center text-orange-600 font-bold group/link">
                     Khám phá hướng đi <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
               </div>

               {/* Feature 3: Skill Builder */}
               <div className="group bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-all duration-500">
                  <div className="w-16 h-16 bg-purple-50 rounded-[2rem] flex items-center justify-center mb-8 group-hover:bg-purple-600 transition-colors duration-500">
                     <BookOpen className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight">Xây Dựng Kỹ Năng <br/> Theo Quỹ Đạo</h4>
                  <p className="text-slate-500 mb-8 font-medium leading-relaxed">
                    Tập trung vào những kỹ năng quan trọng nhất, học từng bước nhỏ (step-by-step), theo dõi tiến độ và tích lũy micro-credentials.
                  </p>
                  <Link href="https://accounts.vutera.net/register" className="inline-flex items-center text-purple-600 font-bold group/link">
                     Xây dựng kỹ năng ngay <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Lợi Ích (Benefits) */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
               <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8">Tại sao chọn Orbit?</h2>
                  <div className="space-y-6">
                     {[
                        "Xây dựng thói quen phát triển bền vững mỗi ngày",
                        "Tiết kiệm 70% thời gian nhờ lộ trình cá nhân hóa",
                        "Tăng cơ hội nghề nghiệp và thu nhập thực tế",
                        "Kết nối dữ liệu với Harmony để chọn thời điểm bứt phá",
                        "Quản lý toàn bộ tiến trình trên 1 tài khoản duy nhất"
                     ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                           <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <CheckCircle2 className="w-4 h-4 text-blue-600" />
                           </div>
                           <p className="text-lg text-slate-700 font-medium">{item}</p>
                        </div>
                     ))}
                  </div>
               </div>
               
               <div className="w-full lg:w-1/2 relative">
                  <div className="aspect-square bg-blue-600 rounded-[4rem] group overflow-hidden relative shadow-2xl">
                     <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-700"></div>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        <div className="w-40 h-40 border-8 border-white/20 rounded-full animate-spin-slow-reverse"></div>
                        <div className="absolute w-24 h-24 border-8 border-white/30 rounded-full animate-spin-slow"></div>
                        <div className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"><Rocket className="w-6 h-6 text-blue-600" /></div>
                     </div>
                     
                     <div className="absolute bottom-10 left-10 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
                        <p className="text-white text-3xl font-black">+200%</p>
                        <p className="text-blue-100 text-xs font-bold uppercase tracking-widest">Hiệu suất học tập</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 7. Social Proof & Testimonials */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-16 text-slate-900">Hàng nghìn người đang xây dựng quỹ đạo của họ</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                  { name: "Trần Anh Quân", role: "Software Engineer", content: "Lộ trình career path của Orbit giúp tôi định vị đúng những kỹ năng mình cần học để thăng tiến lên Senior nhanh hơn mong đợi." },
                  { name: "Lê Mỹ Linh", role: "Digital Marketer", content: "Phần học tiếng Anh AI rất thực tế. Tôi có thể luyện nói hằng ngày mà không cảm thấy áp lực. Rất phù hợp cho người bận rộn." },
                  { name: "Nguyễn Văn Hùng", role: "Student", content: "Một hệ thống học tập tuyệt vời. Tôi thích cách Orbit liên kết các kỹ năng lại với nhau thành một quỹ đạo nhất quán." }
               ].map((testi, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 text-left space-y-4 hover:shadow-xl transition-shadow">
                     <div className="flex text-amber-400 gap-1"><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /></div>
                     <p className="text-slate-600 font-medium italic">&quot;{testi.content}&quot;</p>
                     <div className="flex items-center gap-4 pt-4">
                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-900">{testi.name[0]}</div>
                        <div>
                           <p className="font-bold text-sm text-slate-900">{testi.name}</p>
                           <p className="text-xs text-slate-500">{testi.role}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-32 bg-blue-600 relative overflow-hidden">
         <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-700 to-transparent"></div>
         <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">Sẵn sàng bắt đầu <br/> quỹ đạo phát triển của riêng bạn?</h2>
            <p className="text-blue-100 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto">
              Một tài khoản Vutera – Truy cập không giới hạn Harmony • Orbit • Flow. Dữ liệu của bạn được bảo mật và cá nhân hóa tuyệt đối.
            </p>
            <Link href="https://accounts.vutera.net/register" className="inline-flex items-center px-10 py-5 bg-white text-blue-600 font-black rounded-2xl hover:bg-slate-50 transition-all shadow-2xl group">
               Bắt đầu miễn phí với Orbit <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
         </div>
      </section>

      {/* 9. Footer */}
      <footer className="py-20 bg-white border-t border-slate-100">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
               <div className="col-span-1 md:col-span-2">
                  <Link href="/" className="flex items-center gap-2 mb-6 group">
                     <div className="w-9 h-9 rounded-xl overflow-hidden shadow-md group-hover:scale-110 transition-transform">
                        <Image src="/logo.png" alt="Vutera Logo" width={36} height={36} className="object-cover" />
                     </div>
                     <span className="text-xl font-bold tracking-tight text-slate-900">Vutera Orbit</span>
                  </Link>
                  <p className="max-w-sm text-slate-500 font-medium leading-relaxed">
                     Xây dựng quỹ đạo phát triển bản thân với sức mạnh AI. Thành viên của hệ điều hành cuộc sống Personal Life OS.
                  </p>
               </div>
               
               <div>
                  <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Liên kết nhanh</h4>
                  <ul className="space-y-4 font-bold text-sm text-slate-500">
                     <li><Link href="/harmony" className="hover:text-blue-600">Harmony (Tâm linh)</Link></li>
                     <li><Link href="/flow" className="hover:text-blue-600">Flow (Tài chính)</Link></li>
                     <li><Link href="https://accounts.vutera.net" className="hover:text-blue-600">Tài khoản</Link></li>
                     <li><Link href="/blog" className="hover:text-blue-600">Kiến thức</Link></li>
                  </ul>
               </div>
               
               <div>
                  <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Pháp lý</h4>
                  <ul className="space-y-4 font-bold text-sm text-slate-500">
                     <li><Link href="/privacy" className="hover:text-blue-600">Chính sách bảo mật</Link></li>
                     <li><Link href="/terms" className="hover:text-blue-600">Điều khoản sử dụng</Link></li>
                  </ul>
               </div>
            </div>
            
            <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-sm font-bold text-slate-400">
               <p>&copy; {new Date().getFullYear()} Vutera Orbit. All rights reserved.</p>
               <div className="flex gap-6 mt-4 md:mt-0">
                  <Globe className="w-5 h-5" />
                  <span>Tiếng Việt</span>
               </div>
            </div>
         </div>
      </footer>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }
      `}</style>
    </div>
  );
}
