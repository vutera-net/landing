"use client";

import { Menu, X, User } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  
  // Dummy auth state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

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
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-950/90 backdrop-blur-md border-b dark:border-slate-800 border-slate-200 py-4 shadow-lg"
          : "bg-transparent py-6"
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
          <Link href="/" className="text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
            Trang chủ
          </Link>
          <Link href="/harmony" className="text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
            Harmony
          </Link>
          <Link href="/flow" className="text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
            Flow
          </Link>
          <Link href="/orbit" className="text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
            Orbit
          </Link>
          <button onClick={() => scrollToSection("services")} className="text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
            Hệ sinh thái
          </button>
          <Link href="/blog" className="text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
            Blog
          </Link>

          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <Link
                href="https://accounts.vutera.net"
                className="px-6 py-2 bg-slate-900 dark:bg-slate-100 dark:text-slate-900 text-white rounded-full font-medium transition-all transform hover:scale-105"
              >
                Tài khoản
              </Link>
              <button 
                onClick={() => setIsAuthenticated(false)} 
                className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-700 transition text-slate-700 dark:text-slate-300"
                title="Đăng xuất (Demo)"
              >
                <User className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                href="https://accounts.vutera.net/login"
                className="px-4 py-2 text-slate-700 dark:text-slate-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Đăng nhập
              </Link>
              <Link
                href="https://accounts.vutera.net/register"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all transform hover:scale-105 font-medium shadow-md shadow-blue-500/20"
              >
                Bắt đầu miễn phí
              </Link>
              {/* Nút demo login */}
              <button onClick={() => setIsAuthenticated(true)} className="text-[10px] text-slate-400 underline absolute -top-8">(Test Login)</button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-900 dark:text-white">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-100 dark:bg-slate-900 border-b dark:border-slate-800 border-slate-200 p-6 flex flex-col space-y-4 shadow-xl">
          <Link href="/" className="text-left py-2 text-slate-800 dark:text-slate-200 font-medium hover:text-blue-600 dark:hover:text-blue-400">
            Trang chủ
          </Link>
          <Link href="/harmony" className="text-left py-2 text-slate-800 dark:text-slate-200 font-medium hover:text-blue-600 dark:hover:text-blue-400">
            Harmony
          </Link>
          <Link href="/flow" className="text-left py-2 text-slate-800 dark:text-slate-200 font-medium hover:text-blue-600 dark:hover:text-blue-400">
            Flow
          </Link>
          <Link href="/orbit" className="text-left py-2 text-slate-800 dark:text-slate-200 font-medium hover:text-blue-600 dark:hover:text-blue-400">
            Orbit
          </Link>
          <button onClick={() => scrollToSection("services")} className="text-left py-2 text-slate-800 dark:text-slate-200 font-medium hover:text-blue-600 dark:hover:text-blue-400">
            Sản phẩm
          </button>
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
             <Link
                href="https://accounts.vutera.net/login"
                className="text-center py-3 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-medium"
              >
                Đăng nhập
              </Link>
              <Link
                href="https://accounts.vutera.net/register"
                className="text-center py-3 bg-blue-600 text-white rounded-xl font-medium"
              >
                Bắt đầu miễn phí
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
