import type { Metadata } from "next";
import { Baloo_2, Quicksand } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PAUD Ceria | Sekolah Anak Bahagia",
  description:
    "PAUD Ceria - Tempat belajar dan bermain yang menyenangkan untuk si kecil. Pendidikan anak usia dini dengan metode pembelajaran kreatif dan guru-guru berpengalaman.",
  keywords: [
    "PAUD",
    "sekolah PAUD",
    "pendidikan anak usia dini",
    "TK",
    "kindergarten",
    "preschool",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${baloo.variable} ${quicksand.variable} font-quicksand antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
