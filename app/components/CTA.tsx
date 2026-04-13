import { ArrowRight, LogIn } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background with multiple gradient layers for premium feel */}
      <div className="absolute inset-0 bg-slate-900 dark:bg-slate-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-950"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center border border-white/10 bg-white/5 backdrop-blur-md rounded-[2.5rem] p-12 md:p-20 shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Sẵn sàng kiến tạo <br className="hidden md:block"/> cuộc sống cân bằng cùng Vutera?
          </h2>
          <p className="text-slate-300 mb-10 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Sử dụng một tài khoản để truy cập toàn bộ tinh hoa công nghệ từ Personal Life OS. Dữ liệu của bạn được bảo mật tuyệt đối.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="https://accounts.vutera.net/register"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center justify-center group"
            >
              Đăng ký tài khoản miễn phí
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
               href="https://accounts.vutera.net/login"
               className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              Đăng nhập <LogIn className="ml-2 w-5 h-5" />
            </Link>
          </div>
          
          <div className="mt-8 flex justify-center items-center gap-6 text-sm text-slate-400">
             <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div> Miễn phí trải nghiệm
             </span>
             <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div> Không yêu cầu thẻ
             </span>
          </div>
        </div>
      </div>
    </section>
  );
}
