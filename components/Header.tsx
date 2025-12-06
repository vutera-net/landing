// components/Header.tsx
import React from "react";

{
  /* Header */
}
export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            V
          </div>
          <span className="ml-2 text-xl font-bold text-gray-800">Vutera</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a
            href="/"
            className="text-gray-600 hover:text-indigo-600 transition-colors"
          >
            Trang chủ
          </a>
          <a
            href="/#services"
            className="text-gray-600 hover:text-indigo-600 transition-colors"
          >
            Dịch vụ
          </a>
          <a
            href="/#about"
            className="text-gray-600 hover:text-indigo-600 transition-colors"
          >
            Về chúng tôi
          </a>
        </nav>
        <a
          href="/#contact"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Liên hệ ngay
        </a>
      </div>
    </header>
  );
}
