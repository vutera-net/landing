import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

// Khởi tạo font Inter, dùng cho toàn bộ dự án
const inter = Inter({ subsets: ["vietnamese"] });

// Thiết lập Metadata (quan trọng cho SEO)
export const metadata: Metadata = {
  title: "Vutera - Giải pháp công nghệ tối ưu cho doanh nghiệp",
  description:
    "Vutera cung cấp các giải pháp công nghệ hiện đại giúp doanh nghiệp tối ưu hóa quy trình và phát triển bền vững",
  keywords: [
    "Vutera",
    "Giải pháp công nghệ",
    "Công nghệ hiện đại",
    "Solution",
    "Fintech",
    "EdTech",
    "tối ưu hóa quy trình",
    "phát triển bền vững",
  ],
  authors: [{ name: "Vutera Team" }],
  openGraph: {
    title: "Vutera: Solution Technology",
    description: "Giải pháp công nghệ tối ưu cho doanh nghiệp.",
    url: "https://vutera.net", // Thay thế bằng URL thực tế
    siteName: "Vutera",
    images: [
      {
        url: "https://placehold.co/1200x630/0f172a/94a3b8?text=Vutera+Studio+Preview", // Placeholder
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
