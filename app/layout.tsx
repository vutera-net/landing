import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

// Khởi tạo font Inter, dùng cho toàn bộ dự án
const inter = Inter({ subsets: ["vietnamese"] });

// Thiết lập Metadata (quan trọng cho SEO)
export const metadata: Metadata = {
  title: "VUTERA - Nền Tảng Công Nghệ Phục Vụ Cuộc Sống & Phát Triển Cá Nhân",
  description:
    "VUTERA - Technology for Humanity. Khai sáng phong thủy, quản lý tài chính thông minh, giáo dục cá nhân hóa và giải pháp kinh doanh toàn diện. Ứng dụng công nghệ AI & dữ liệu để nâng tầm chất lượng sống của bạn.",
  keywords: [
    "Vutera",
    "Giải pháp",
    "Công nghệ",
    "Solution",
    "Fintech",
    "EdTech",
    "khai sáng",
    "con người",
  ],
  authors: [{ name: "VUTERA" }],
  openGraph: {
    title: "VUTERA - Nền Tảng Công Nghệ Phục Vụ Cuộc Sống & Phát Triển Cá Nhân",
    description:
      "VUTERA - Technology for Humanity. Khai sáng phong thủy, quản lý tài chính thông minh, giáo dục cá nhân hóa và giải pháp kinh doanh toàn diện. Ứng dụng công nghệ AI & dữ liệu để nâng tầm chất lượng sống của bạn.",
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
