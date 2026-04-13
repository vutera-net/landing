"use client";

import { 
  Compass, 
  Sparkles, 
  Shield, 
  Users, 
  ArrowRight, 
  Star, 
  Quote, 
  Zap, 
  Moon, 
  Sun,
  LayoutGrid,
  Heart,
  Calendar,
  Layers,
  ChevronRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HarmonyPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCF9] text-slate-800 font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-teal-100/50 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-teal-200/50 group-hover:rotate-12 transition-transform duration-500">
               <span className="text-white text-lg">☯</span>
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-800 to-slate-800">Harmony</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="https://tuvi.vutera.net" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">TuVi App</Link>
            <Link href="https://anmenh.vutera.net" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">AnMenh Sanctuary</Link>
            <Link href="https://accounts.vutera.net" className="px-5 py-2 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-teal-800 transition-all hover:shadow-lg hover:shadow-teal-900/10">Bắt đầu</Link>
          </div>
          
          <button className="md:hidden">
            <div className="w-6 h-0.5 bg-slate-800 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-slate-800 mb-1.5"></div>
            <div className="w-4 h-0.5 bg-slate-800"></div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-[radial-gradient(circle_at_top_right,_#E6FFFA,_transparent),radial-gradient(circle_at_bottom_left,_#FFF9E6,_transparent)]">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-teal-100 shadow-sm mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-teal-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-teal-700">Hệ sinh thái Tâm linh Công nghệ</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
            <span className="block italic font-serif text-teal-600">Harmony</span>
            Cõi Riêng Của Sự Bình An
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Khai sáng vận mệnh, kiến tạo cuộc sống cân bằng qua hệ sinh thái Tử Vi & Phong Thủy AI tiên phong, kết hợp tri thức cổ truyền với công nghệ hiện đại.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="https://tuvi.vutera.net" className="w-full sm:w-auto px-10 py-5 bg-teal-600 text-white font-bold rounded-2xl hover:bg-teal-700 transition-all shadow-xl shadow-teal-500/20 flex items-center justify-center gap-2 group">
              Khám phá miễn phí ngay
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="https://anmenh.vutera.net" className="w-full sm:w-auto px-10 py-5 bg-white text-teal-700 border-2 border-teal-100 font-bold rounded-2xl hover:bg-teal-50 transition-all shadow-sm">
              AnMenh Sanctuary
            </Link>
          </div>
        </div>

        {/* Abstract shapes */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-teal-200/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-[120px] -z-10"></div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
               <div className="aspect-square bg-gradient-to-br from-teal-50 to-white rounded-[4rem] border-2 border-teal-100/50 flex items-center justify-center p-12 relative overflow-hidden group shadow-inner">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-30"></div>
                  <Compass className="w-48 h-48 text-teal-500/20 group-hover:rotate-45 transition-transform duration-1000" />
                  <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-teal-50/50 via-transparent to-transparent"></div>
                  
                  {/* Yin-Yang symbol absolute center with glow */}
                  <div className="absolute w-32 h-32 rounded-full overflow-hidden flex flex-col border border-teal-200/50 shadow-2xl animate-spin-slow">
                     <div className="h-1/2 bg-slate-900 w-full flex items-end justify-center">
                        <div className="w-8 h-8 rounded-full bg-white mb-[-1rem] z-10 border border-slate-900"></div>
                     </div>
                     <div className="h-1/2 bg-white w-full flex items-start justify-center">
                        <div className="w-8 h-8 rounded-full bg-slate-900 mt-[-1rem] z-10 border border-white"></div>
                     </div>
                  </div>
               </div>
               {/* Decorative tag */}
               <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-teal-100 max-w-[200px] animate-bounce-slow">
                  <p className="text-teal-700 font-serif italic text-lg leading-tight">"Công nghệ khai sáng, phụng sự con người"</p>
               </div>
            </div>
            
            <div className="w-full lg:w-1/2">
               <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-4">Harmony là gì?</h2>
               <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Sống Hài Hòa Với <br/> Dòng Chảy Vũ Trụ</h3>
               <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                  <p>
                    Harmony không phải công cụ bói toán, mà là <strong>“người bạn đồng hành”</strong> giúp bạn tự chủ vận mệnh thông qua sự thấu hiểu sâu sắc năng lượng bản thân.
                  </p>
                  <p>
                    Triết lý của chúng tôi đặt con người làm trọng tâm, ứng dụng công nghệ để làm sáng tỏ những tri thức cổ truyền, giúp bạn cân bằng ngũ hành, đón lành tránh dữ và tìm thấy sự bình an trong tâm hồn.
                  </p>
               </div>
               
               <div className="mt-12 grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-3xl font-bold text-teal-600 mb-1">Cân bằng</p>
                    <p className="text-sm text-slate-500 font-medium tracking-wide uppercase">Năng lượng cá nhân</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-teal-600 mb-1">AI-Driven</p>
                    <p className="text-sm text-slate-500 font-medium tracking-wide uppercase">Insight thông thái</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Hệ Sinh Thái Harmony</h2>
           <p className="text-slate-500 mb-16 max-w-2xl mx-auto text-lg">Từ vệ tinh thu hút hàng triệu người đến lõi sanctuary siêu cá nhân hóa.</p>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {/* TuVi Card */}
              <div className="group bg-white rounded-[3rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-all duration-500 text-left overflow-hidden relative">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-[10rem] -z-0 group-hover:scale-110 transition-transform"></div>
                 <div className="relative z-10">
                    <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-8">
                       <LayoutGrid className="w-8 h-8 text-teal-600" />
                    </div>
                    <div className="inline-block px-3 py-1 bg-teal-50 text-teal-600 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">Mở cửa miễn phí</div>
                    <h4 className="text-3xl font-bold text-slate-900 mb-4">TuVi App</h4>
                    <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                      Cổng thông tin vệ tinh, cho phép khám phá tử vi nhẹ nhàng, lập lá số tức thời cho hàng triệu người dùng mới.
                    </p>
                    <Link href="https://tuvi.vutera.net" className="flex items-center text-teal-600 font-bold group/link">
                       Bắt đầu trải nghiệm ngay <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                 </div>
              </div>

              {/* AnMenh Card */}
              <div className="group bg-slate-900 rounded-[3rem] p-10 shadow-2xl shadow-indigo-900/10 border border-slate-800 hover:-translate-y-2 transition-all duration-500 text-left overflow-hidden relative">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-slate-800 rounded-bl-[10rem] -z-0"></div>
                 <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-500/20">
                       <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div className="inline-block px-3 py-1 bg-teal-900/50 text-teal-300 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">Premium Sanctuary</div>
                    <h4 className="text-3xl font-bold text-white mb-4">AnMenh App</h4>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                      Lõi của cả hệ sinh thái. Không gian lưu trữ cá nhân hóa sâu sắc, theo dõi vận hạn hằng ngày và quản lý lá số nâng cao.
                    </p>
                    <Link href="https://anmenh.vutera.net" className="flex items-center text-teal-400 font-bold group/link">
                       Khám phá Sanctuary chuyên sâu <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white relative">
         <div className="container mx-auto px-6">
            <div className="text-center mb-20">
               <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Lợi Ích Của Harmony</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
               {[
                  { icon: <Compass className="text-teal-500" />, title: "Hiểu rõ vận mệnh", desc: "Giải mã chính xác xu hướng cuộc sống" },
                  { icon: <Calendar className="text-amber-500" />, title: "Ngày tốt - Giờ đẹp", desc: "Chọn thời điểm hoàn hảo cho đại sự" },
                  { icon: <Moon className="text-purple-500" />, title: "Phong thủy cá nhân", desc: "Ứng dụng ngũ hành vào không gian sống" },
                  { icon: <Layers className="text-indigo-500" />, title: "Cân bằng Ngũ Hành", desc: "Điều tiết năng lượng nội tại" },
                  { icon: <Users className="text-emerald-500" />, title: "Cộng đồng tinh thức", desc: "Kết nối những tâm hồn đồng điệu" }
               ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center p-8 rounded-[2rem] bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-teal-100/50 transition-all group">
                     <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                        {item.icon}
                     </div>
                     <h4 className="font-bold text-slate-900 mb-3">{item.title}</h4>
                     <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-teal-600 overflow-hidden relative">
         <div className="absolute top-0 right-0 p-32 bg-teal-700/50 rounded-full scale-150 blur-3xl"></div>
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
               <div className="w-full lg:w-1/2 text-white">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8">Hành trình ngàn năm, công nghệ dẫn lối</h2>
                  <div className="grid grid-cols-2 gap-12">
                     <div>
                        <p className="text-5xl font-bold mb-2">100K+</p>
                        <p className="text-teal-100 font-medium">Lá số đã được lập</p>
                     </div>
                     <div>
                        <p className="text-5xl font-bold mb-2">4.9/5</p>
                        <div className="flex text-amber-300 gap-1 mb-2">
                           <Star className="fill-current w-4 h-4" />
                           <Star className="fill-current w-4 h-4" />
                           <Star className="fill-current w-4 h-4" />
                           <Star className="fill-current w-4 h-4" />
                           <Star className="fill-current w-4 h-4" />
                        </div>
                        <p className="text-teal-100 font-medium">Đánh giá hài lòng</p>
                     </div>
                  </div>
               </div>
               
               <div className="w-full lg:w-1/2">
                  <div className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/20 relative">
                     <Quote className="absolute top-10 left-10 w-12 h-12 text-teal-400 opacity-20" />
                     <p className="text-xl md:text-2xl text-teal-50 font-serif italic mb-8 relative z-10 leading-relaxed">
                       "Tôi luôn tìm kiếm sự kết nối giữa công nghệ và đời sống tâm linh phương Đông. Harmony đã giúp tôi nhìn nhận các chu kỳ cá nhân một cách khách quan và chính xác đến ngạc nhiên."
                     </p>
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center font-bold text-teal-900">MH</div>
                        <div>
                           <p className="text-white font-bold">Minh Huy</p>
                           <p className="text-teal-200 text-sm">Doanh nhân / Người dùng AnMenh</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Path Section */}
      <section className="py-32 bg-white">
         <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-20">Hành Trình Cùng Harmony</h2>
            
            <div className="relative">
               <div className="hidden md:block absolute top-[2.75rem] left-[15%] right-[15%] h-1 bg-dashed bg-gradient-to-r from-teal-100 via-teal-400 to-indigo-200"></div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 relative z-10">
                  <div className="flex flex-col items-center">
                     <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center border-4 border-white shadow-xl shadow-teal-100 mb-8">
                        <span className="text-3xl font-bold text-teal-600">01</span>
                     </div>
                     <h4 className="text-2xl font-bold mb-4">Bắt đầu nhẹ nhàng</h4>
                     <p className="text-slate-500 mb-8">Trải nghiệm những phân tích cơ bản miễn phí tại TuVi App để nhen nhóm sự thấu hiểu.</p>
                     <Link href="https://tuvi.vutera.net" className="px-6 py-2 bg-teal-50 text-teal-600 rounded-full font-bold hover:bg-teal-100 transition-colors">Vào TuVi App</Link>
                  </div>
                  
                  <div className="flex flex-col items-center">
                     <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center border-4 border-white shadow-xl shadow-indigo-100 mb-8">
                        <span className="text-3xl font-bold text-indigo-600">02</span>
                     </div>
                     <h4 className="text-2xl font-bold mb-4">Nâng tầm Sanctuary</h4>
                     <p className="text-slate-500 mb-8">Chuyển sang AnMenh Sanctuary để quản lý sâu sát, theo dõi vận trình hằng ngày cá nhân hóa.</p>
                     <Link href="https://anmenh.vutera.net" className="px-6 py-2 bg-indigo-50 text-indigo-600 rounded-full font-bold hover:bg-indigo-100 transition-colors">Vào AnMenh Sanctuary</Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-[radial-gradient(circle_at_center,_#E6FFFA,_#FDFCF9)]">
         <div className="container mx-auto px-6 text-center max-w-4xl">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-12 shadow-2xl border border-teal-50 animate-spin-slow">
               <span className="text-4xl">☯</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">Bắt đầu hành trình <br/> bình an ngay hôm nay</h2>
            <p className="text-lg md:text-xl text-slate-600 mb-12">Tham gia cùng hàng trăm nghìn người đang kiến tạo cuộc sống cân bằng và ý nghĩa hơn cùng Harmony.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Link href="https://tuvi.vutera.net" className="w-full sm:w-auto px-10 py-5 bg-teal-600 text-white font-bold rounded-2xl hover:bg-teal-700 transition-all shadow-xl shadow-teal-500/30">Lập lá số miễn phí</Link>
               <Link href="https://accounts.vutera.net/register" className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border border-slate-200 font-bold rounded-2xl hover:bg-slate-50 transition-all">Đăng ký tài khoản</Link>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-teal-50">
         <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
               <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center">
                  <span className="text-white text-sm">☯</span>
               </div>
               <span className="text-lg font-bold">Harmony</span>
            </div>
            
            <div className="flex gap-8 text-sm font-medium text-slate-500">
               <Link href="/" className="hover:text-teal-600 transition-colors">Vutera Home</Link>
               <Link href="https://tuvi.vutera.net" className="hover:text-teal-600 transition-colors">TuVi</Link>
               <Link href="https://anmenh.vutera.net" className="hover:text-teal-600 transition-colors">AnMenh</Link>
               <Link href="/privacy" className="hover:text-teal-600 transition-colors">Chính sách</Link>
            </div>
            
            <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} Harmony Ecosystem by Vutera.</p>
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
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
