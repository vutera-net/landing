"use client";

import { 
  TrendingUp, 
  Wallet, 
  ShieldCheck, 
  ArrowRight, 
  Compass, 
  Rocket, 
  Zap,
  PieChart,
  LineChart,
  Coins,
  Gem,
  CheckCircle2,
  ChevronRight,
  Clock
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function FlowPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. Header (Standard Vutera Navigation) */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl border-b border-emerald-100/50 py-3 shadow-md' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl overflow-hidden cursor-pointer shadow-lg group-hover:scale-110 transition-transform">
              <Image src="/logo.png" alt="Vutera Logo" width={36} height={36} className="object-cover" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Vutera</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Trang chủ</Link>
            <Link href="/harmony" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Harmony</Link>
            <Link href="/orbit" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Orbit</Link>
            <Link href="/flow" className="text-sm font-bold text-emerald-600">Flow</Link>
          </div>
          
          <div className="flex items-center gap-4">
             <Link href="https://accounts.vutera.net/login" className="hidden sm:block text-sm font-semibold text-slate-600 hover:text-emerald-600">Đăng nhập</Link>
             <Link href="https://accounts.vutera.net/register" className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-900/10">Bắt đầu miễn phí</Link>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
        {/* Abstract "Flowing" water/wave background element */}
        <div className="absolute top-0 right-0 w-full h-full -z-0 opacity-10 pointer-events-none">
           <svg viewBox="0 0 1000 1000" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0,500 C150,400 350,600 500,500 C650,400 850,600 1000,500 L1000,1000 L0,1000 Z" fill="url(#wave-gradient)" />
              <defs>
                 <linearGradient id="wave-gradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#3b82f6" />
                 </linearGradient>
              </defs>
           </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in shadow-sm">
             <TrendingUp className="w-4 h-4" />
             Kiến tạo dòng chảy tài chính vững chãi
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 mb-8 leading-[1]">
            <span className="block italic font-serif text-emerald-600">Flow</span>
            Dòng Chảy Thịnh Vượng <br className="hidden md:block"/> Của Riêng Bạn
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            Quản lý tài chính thông minh, tối ưu chi tiêu, xây dựng tài sản và tạo ra dòng tiền bền vững với công nghệ AI cá nhân hóa. Từ kiểm soát tiền bạc đến kiến tạo sự thịnh vượng lâu dài.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="https://accounts.vutera.net/register" className="w-full sm:w-auto px-10 py-5 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-2 group">
              Bắt đầu quản lý Flow miễn phí
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#features" className="w-full sm:w-auto px-10 py-5 bg-white text-slate-700 border-2 border-slate-100 font-bold rounded-2xl hover:bg-slate-50 transition-all shadow-sm">
              Tìm hiểu Flow hoạt động
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Flow Trong Hệ Sinh Thái Vutera */}
      <section className="py-24 bg-slate-900 text-white border-y border-slate-800 relative overflow-hidden">
         <div className="absolute top-0 left-0 p-32 bg-emerald-500/10 rounded-full blur-3xl -z-0"></div>
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
               <div className="w-full lg:w-1/2">
                  <h2 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">Góc Nhìn Hệ Điều Hành</h2>
                  <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-white">Flow Là Gì <br className="hidden md:block"/> Trong Vutera?</h3>
                  <p className="text-lg text-slate-300 leading-relaxed max-w-xl mb-8 font-medium">
                    Nếu Harmony giúp bạn cân bằng nội tâm, Orbit giúp bạn phát triển bản thân và kỹ năng, thì <strong>Flow giúp bạn kiểm soát và nhân rộng dòng tiền</strong>. 
                  </p>
                  <p className="text-lg text-slate-400 leading-relaxed max-w-xl mb-8">
                    Ba trụ cột cùng vận hành trên một tài khoản Vutera duy nhất, tạo nên một Personal Life OS hoàn chỉnh giúp bạn thành công bền bỉ.
                  </p>
                  
                  <div className="flex items-center gap-8 mt-12">
                     <div className="flex -space-x-3">
                        <div className="w-10 h-10 rounded-full bg-purple-950 border-2 border-slate-900 flex items-center justify-center"><Compass className="w-4 h-4 text-purple-400" /></div>
                        <div className="w-10 h-10 rounded-full bg-blue-950 border-2 border-slate-900 flex items-center justify-center"><Rocket className="w-4 h-4 text-blue-400" /></div>
                        <div className="w-14 h-14 rounded-full bg-emerald-600 border-4 border-slate-900 flex items-center justify-center shadow-lg z-10"><TrendingUp className="w-6 h-6 text-white" /></div>
                     </div>
                     <p className="text-sm font-bold text-emerald-400 uppercase tracking-widest animate-pulse">Trụ cột Tăng trưởng</p>
                  </div>
               </div>
               
               <div className="w-full lg:w-1/2">
                  <div className="bg-slate-800/50 backdrop-blur-md p-10 rounded-[3rem] border border-slate-700/50 relative group overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                     <div className="space-y-6">
                        <div className="flex gap-6 items-start">
                           <div className="w-12 h-12 bg-purple-900/40 rounded-xl flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                              <Compass className="w-6 h-6 text-purple-400" />
                           </div>
                           <div>
                              <p className="font-bold text-white">Harmony</p>
                              <p className="text-sm text-slate-400">Điểm tựa Tinh Thần</p>
                           </div>
                        </div>
                        <div className="w-px h-8 bg-slate-700 ml-6"></div>
                        <div className="flex gap-6 items-start">
                           <div className="w-12 h-12 bg-blue-900/40 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                              <Rocket className="w-6 h-6 text-blue-400" />
                           </div>
                           <div>
                              <p className="font-bold text-white">Orbit</p>
                              <p className="text-sm text-slate-400">Năng lực Phân Thân</p>
                           </div>
                        </div>
                        <div className="w-px h-8 bg-slate-700 ml-6"></div>
                        <div className="flex gap-6 items-start">
                           <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/20">
                              <TrendingUp className="w-6 h-6 text-white" />
                           </div>
                           <div>
                              <p className="font-bold text-white">Flow</p>
                              <p className="text-sm text-emerald-400 font-bold uppercase tracking-tighter">Dòng chảy Thịnh Vượng</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Philosophy Section */}
      <section className="py-24 bg-white text-slate-900 overflow-hidden relative border-b border-emerald-50">
         <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-6">Triết lý của Flow</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-12 leading-tight">Không phải kiếm nhiều tiền hơn. <br className="hidden md:block"/> Mà là để tiền chảy đúng hướng.</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                  { icon: <Wallet className="text-emerald-600" />, title: "Quản lý linh hoạt", desc: "Không kiểm soát chặt chẽ gây áp lực, mà điều hướng dòng tiền nhịp nhàng." },
                  { icon: <Gem className="text-amber-600" />, title: "Thịnh vượng bền vững", desc: "Tập trung vào giá trị lâu dài thay vì những lợi nhuận giàu nhanh ảo giác." },
                  { icon: <ShieldCheck className="text-blue-600" />, title: "Kết nối Trí tuệ", desc: "Kết hợp trí tuệ cổ truyền (Harmony) với các công cụ tài chính AI hiện đại." }
               ].map((item, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-emerald-50/30 border border-emerald-100 flex flex-col items-center group hover:bg-white hover:shadow-xl hover:shadow-emerald-100/50 transition-all">
                     <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                        {item.icon}
                     </div>
                     <h4 className="font-bold text-lg mb-3">{item.title}</h4>
                     <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Core Features */}
      <section id="features" className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <div className="text-center mb-20">
               <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Tính Năng Chủ Chốt</h2>
               <p className="text-slate-500 text-lg font-medium">Mọi công cụ bạn cần để làm chủ &quot;dòng chảy&quot; của mình.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
               {/* Feature 1 */}
               <div className="group bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500">
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-8">
                     <PieChart className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">Smart Budget & Chi Tiêu</h4>
                  <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                    Theo dõi chi tiêu tự động, phân loại thông minh bằng AI, nhận cảnh báo và gợi ý tối ưu để tiết kiệm mà không cần thắt lưng buộc bụng.
                  </p>
                  <div className="pt-4 flex items-center text-slate-400 text-xs font-bold uppercase tracking-widest">
                     <Clock className="w-4 h-4 mr-2" /> Sắp ra mắt
                  </div>
               </div>

               {/* Feature 2 */}
               <div className="group bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500">
                  <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-8">
                     <Coins className="w-7 h-7 text-amber-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">Xây Dựng Tài Sản</h4>
                  <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                    Lập kế hoạch tiết kiệm theo mục tiêu, tận dụng lãi kép, khám phá các kênh đầu tư đa dạng phù hợp với thị trường Việt Nam.
                  </p>
                  <div className="pt-4 flex items-center text-slate-400 text-xs font-bold uppercase tracking-widest">
                     <Clock className="w-4 h-4 mr-2" /> Sắp ra mắt
                  </div>
               </div>

               {/* Feature 3 */}
               <div className="group bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-8">
                     <LineChart className="w-7 h-7 text-blue-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">Dòng Tiền & Thu Nhập</h4>
                  <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                    Phân tích đa nguồn thu, dự báo dòng tiền tương lai, gợi ý cách tăng thu nhập dựa trên sự phát triển kỹ năng từ Orbit.
                  </p>
                  <div className="pt-4 flex items-center text-slate-400 text-xs font-bold uppercase tracking-widest">
                     <Clock className="w-4 h-4 mr-2" /> Sắp ra mắt
                  </div>
               </div>

               {/* Feature 4 */}
               <div className="group bg-slate-900 p-10 rounded-[3rem] border border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 text-white">
                  <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-500/30">
                     <Zap className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">AI Financial Coach</h4>
                  <p className="text-slate-400 mb-6 leading-relaxed font-medium">
                    Tư vấn cá nhân hóa: &quot;Với tình hình hiện tại, bạn nên ưu tiên gì tháng này?&quot;. Kết nối nhẹ nhàng với năng lượng cá nhân từ Harmony.
                  </p>
                  <div className="pt-4 flex items-center text-emerald-400 text-xs font-bold uppercase tracking-widest">
                     <Clock className="w-4 h-4 mr-2" /> Đang phát triển
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Lợi Ích (Benefits) */}
      <section className="py-24 bg-[#F8FAFC]">
         <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
               <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8">Bạn sẽ nhận được <br/> gì từ Flow?</h2>
                  <div className="space-y-6">
                     {[
                        "Kiểm soát hoàn toàn dòng tiền mà không một chút stress",
                        "Xây dựng tài sản tăng trưởng bền vững theo thời gian",
                        "Quyết định tài chính sáng suốt hơn nhờ AI + Insight sâu",
                        "Kết nối tài chính với đời sống cân bằng (Harmony)",
                        "Giảm lo lắng về tiền bạc, tăng mức độ tự do thực tế"
                     ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                           <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 transition-colors">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 group-hover:text-white transition-colors" />
                           </div>
                           <p className="text-lg text-slate-700 font-semibold">{item}</p>
                        </div>
                     ))}
                  </div>
               </div>
               
               <div className="w-full lg:w-1/2">
                  <div className="relative rounded-[4rem] overflow-hidden shadow-2xl bg-white p-2">
                     <div className="bg-slate-900 rounded-[3.5rem] p-12 aspect-square flex flex-col justify-between overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                        
                        <div className="relative z-10">
                           <div className="flex justify-between items-center mb-12">
                              <div>
                                 <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Dòng chảy hiện tại</p>
                                 <p className="text-white text-3xl font-bold">+12.5% Thặng dư</p>
                              </div>
                              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg"><TrendingUp className="w-6 h-6 text-white" /></div>
                           </div>
                           
                           <div className="space-y-4">
                              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                 <div className="h-full bg-emerald-500 w-3/4"></div>
                              </div>
                              <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
                                 <span>Đang chảy đúng hướng</span>
                                 <span>Mục tiêu: Thịnh vượng</span>
                              </div>
                           </div>
                        </div>
                        
                        <div className="relative z-10 pt-12">
                           <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-slate-300 text-sm italic">
                              &quot;Lời khuyên AI: Bạn có thêm một khoản thặng dư nhỏ. Tiết kiệm 50% vào quỹ đầu tư dài hạn sẽ tối ưu lãi kép của bạn.&quot;
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 7. Social Proof & Coming Soon */}
      <section className="py-24 bg-white border-y border-emerald-50 relative overflow-hidden">
         <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8">Đang Được Kiến Tạo</h2>
            <p className="text-lg text-slate-500 mb-12 font-medium">Flow là trụ cốt cuối cùng của Personal Life OS v1.0. Chúng tôi đang làm việc miệt mài để mang đến trải nghiệm tài chính tinh tế nhất.</p>
            
            <div className="bg-emerald-50/50 rounded-[3rem] p-12 border-2 border-dashed border-emerald-200 inline-block w-full">
               <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                  <div className="text-center md:text-left">
                     <p className="text-4xl font-black text-emerald-600 mb-2">5,000+</p>
                     <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Người xếp hàng chờ</p>
                  </div>
                  <div className="w-px h-12 bg-emerald-200 hidden md:block"></div>
                  <div className="text-center md:text-left">
                     <p className="text-4xl font-black text-slate-900 mb-2">Qúy 3 / 2026</p>
                     <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Dự kiến phát hành</p>
                  </div>
               </div>
               
               <div className="mt-12">
                  <Link href="https://accounts.vutera.net/register" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all inline-flex items-center gap-2">
                     Đăng ký suất trải nghiệm sớm <ChevronRight className="w-4 h-4" />
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-32 bg-emerald-700 relative overflow-hidden">
         <div className="absolute inset-0 bg-emerald-900/50 -z-0"></div>
         {/* Animated circle shapes for "flowing" feel */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/20 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
         
         <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">Sẵn sàng để tiền bạc <br/> chảy về phía bạn?</h2>
            <p className="text-emerald-100 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto">
              Chỉ với một tài khoản Vutera, bạn sẽ nắm giữ chìa khóa của bộ ba Harmony • Orbit • Flow. Đón nhận sự thịnh vượng ngay hôm nay.
            </p>
            <Link href="https://accounts.vutera.net/register" className="inline-flex items-center px-10 py-5 bg-white text-emerald-700 font-black rounded-2xl hover:bg-emerald-50 transition-all shadow-2xl group">
               Bắt đầu hành trình Flow miễn phí <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
                     <span className="text-xl font-bold tracking-tight text-slate-900">Vutera Flow</span>
                  </Link>
                  <p className="max-w-sm text-slate-500 font-medium leading-relaxed">
                     Quản lý tài chính thông minh & xây dựng thịnh vượng với sức mạnh AI. Thành viên cốt lõi của Hệ điều hành cuộc sống Personal Life OS.
                  </p>
               </div>
               
               <div>
                  <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Menu Hệ Sinh Thái</h4>
                  <ul className="space-y-4 font-bold text-sm text-slate-500">
                     <li><Link href="/" className="hover:text-emerald-600">Trang chủ Vutera</Link></li>
                     <li><Link href="/harmony" className="hover:text-emerald-600">Harmony (Tâm linh)</Link></li>
                     <li><Link href="/orbit" className="hover:text-emerald-600">Orbit (Phát triển)</Link></li>
                     <li><Link href="/blog" className="hover:text-emerald-600">Blog kiến thức</Link></li>
                  </ul>
               </div>
               
               <div>
                  <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Hỗ trợ</h4>
                  <ul className="space-y-4 font-bold text-sm text-slate-500">
                     <li><Link href="mailto:vutera.net@gmail.com" className="hover:text-emerald-600">Liên hệ chúng tôi</Link></li>
                     <li><Link href="/privacy" className="hover:text-emerald-600">Chính sách bảo mật</Link></li>
                     <li><Link href="/terms" className="hover:text-emerald-600">Điều khoản sử dụng</Link></li>
                  </ul>
               </div>
            </div>
            
            <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-sm font-bold text-slate-400">
               <p>&copy; {new Date().getFullYear()} Vutera Flow. Một sản phẩm thuộc hệ sinh thái Vutera.</p>
               <p className="mt-4 md:mt-0">Đổi mới vì cuộc sống thịnh vượng.</p>
            </div>
         </div>
      </footer>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
           0%, 100% { opacity: 0.2; transform: scale(1) translate(-50%, -50%); }
           50% { opacity: 0.3; transform: scale(1.1) translate(-50%, -50%); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
