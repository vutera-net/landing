// components/Footer.tsx
import Image from "next/image";
import React from "react";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  type: "primary" | "secondary";
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children, type }) => {
  const className =
    type === "primary"
      ? "text-white font-medium text-sm"
      : "text-gray-400 hover:text-white transition-colors text-sm";

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

{
  /* Footer (giống trang chủ) */
}
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden cursor-pointer">
                <Image
                  src="/logo.png"
                  alt="Vutera Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="ml-2 text-xl font-bold">Vutera</span>
            </div>
            <p className="text-gray-400">Đổi mới vì cuộc sống</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên kết</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Trang chủ
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Dịch vụ
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Dịch vụ</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/harmony"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Vutera Harmony
                </a>
              </li>
              <li>
                <a
                  href="/flow"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Vutera Flow
                </a>
              </li>
              <li>
                <a
                  href="/orbit"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Vutera Orbit
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white transition-colors"
                  // className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
                  href="/spark"
                >
                  Vutera Spark
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: vuterastudio@gmail.com</li>
              <li>Website: vutera.net</li>
              <li>Điện thoại: (+84) 948 148 078</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            <p>
              © {new Date().getFullYear()} Vutera. Tất cả quyền được bảo lưu.
            </p>
          </div>
          <div className="flex space-x-6">
            <FooterLink href="/privacy" type="secondary">
              Chính sách bảo mật
            </FooterLink>
            <FooterLink href="/terms" type="secondary">
              Điều khoản sử dụng
            </FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
