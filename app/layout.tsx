import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

// Khởi tạo font Inter, dùng cho toàn bộ dự án
const inter = Inter({ subsets: ["vietnamese"] });

// Thiết lập Metadata (quan trọng cho SEO)
export const metadata: Metadata = {
  title: "VUTERA – Nền Tảng Công Nghệ Đổi Mới Vì Cuộc Sống Toàn Diện",
  description:
    "VUTERA - Đổi mới vì cuộc sống. Ứng dụng AI trong Phong thủy thông minh, Quản lý tài chính cá nhân, Giáo dục trực tuyến & Giải pháp số cho Doanh nghiệp. Công nghệ khai sáng, phụng sự con người.",
  keywords: [
    "ứng dụng phong thủy",
    "app tử vi AI",
    "fintech cá nhân",
    "quản lý chi tiêu",
    "học tiếng Anh AI",
    "đào tạo online",
    "phần mềm bán hàng SME",
    "công nghệ bất động sản",
    "nền tảng số đa dịch vụ",
    "đổi mới cuộc sống",
    "Vutera",
  ],
  authors: [{ name: "VUTERA" }],
  openGraph: {
    title: "VUTERA – Nền Tảng Công Nghệ Đổi Mới Vì Cuộc Sống Toàn Diện",
    description:
      "VUTERA - Đổi mới vì cuộc sống. Ứng dụng AI trong Phong thủy thông minh, Quản lý tài chính cá nhân, Giáo dục trực tuyến & Giải pháp số cho Doanh nghiệp. Công nghệ khai sáng, phụng sự con người.",
    url: "https://vutera.net", // Thay thế bằng URL thực tế
    siteName: "Vutera",
    images: [
      {
        // url: "https://placehold.co/1200x630/0f172a/94a3b8?text=Vutera", // Placeholder
        url: "https://vutera.net/full_logo.png",
        width: 1200,
        height: 630,
        alt: "Vutera Banner",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={inter.className}
      style={{ scrollBehavior: "smooth" }}
    >
      <body>
        {/* Children ở đây chính là file page.tsx (component trang chủ) */}
        {children}
      </body>
    </html>
  );
}
