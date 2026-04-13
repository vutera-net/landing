import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="dark:bg-slate-950 bg-slate-50 pt-20 pb-8 border-t dark:border-slate-900 border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Footer vutera */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-xl overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Vutera Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="text-2xl font-bold dark:text-white text-slate-900">
                Vutera
              </span>
            </div>
            <p className="dark:text-slate-400 text-slate-600 leading-relaxed max-w-sm font-medium">
              Công nghệ khai sáng. Phụng sự con người. Một hệ điều hành cuộc sống duy nhất nơi công nghệ thấu hiểu và nâng tầm bạn.
            </p>
          </div>

          {/* Footer Product */}
          <div>
            <h4 className="dark:text-white text-slate-900 font-bold mb-6 tracking-wide">
              Hệ sinh thái
            </h4>
            <ul className="space-y-4 font-medium dark:text-slate-400 text-slate-600">
              <li>
                <Link
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  href="/harmony"
                >
                  Vutera Harmony
                </Link>
              </li>
              <li>
                <span className="cursor-not-allowed opacity-60">
                  Vutera Flow (Sắp ra mắt)
                </span>
              </li>
              <li>
                <span className="cursor-not-allowed opacity-60">
                  Vutera Orbit (Sắp ra mắt)
                </span>
              </li>
            </ul>
          </div>

          {/* Footer Contact Info */}
          <div>
            <h4 className="dark:text-white text-slate-900 font-bold mb-6 tracking-wide">
              Liên hệ
            </h4>
            <ul className="space-y-4 font-medium dark:text-slate-400 text-slate-600">
              <li className="flex items-start">
                <MapPin className="flex-shrink-0 h-5 w-5 mt-0.5" />
                <span className="ml-3">Hà Nội, Việt Nam</span>
              </li>
              <li className="flex items-center">
                <Mail className="flex-shrink-0 h-5 w-5" />
                <a
                  href="mailto:vutera.net@gmail.com"
                  className="ml-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  vutera.net@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="flex-shrink-0 h-5 w-5" />
                <a
                  href="tel:+84968281331"
                  className="ml-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  (+84) 96 828 1331
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t dark:border-slate-800 border-slate-200 flex flex-col md:flex-row justify-between items-center dark:text-slate-500 text-slate-500 text-sm font-medium">
          <p>
            &copy; {new Date().getFullYear()} Một sản phẩm của Vutera. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="hover:text-slate-800 dark:hover:text-slate-300 transition-colors"
            >
              Chính sách bảo mật
            </Link>
            <Link
              href="/terms"
              className="hover:text-slate-800 dark:hover:text-slate-300 transition-colors"
            >
              Điều khoản
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
