import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Common Course — образовательный маркетплейс для студентов",
  description:
    "P2P маркетплейс образовательных курсов для студентов в Telegram. Студенты создают и продают курсы другим студентам прямо в Telegram.",
  openGraph: {
    title: "Common Course — образовательный маркетплейс для студентов",
    description:
      "P2P маркетплейс образовательных курсов для студентов в Telegram. Студенты создают и продают курсы другим студентам.",
    type: "website",
    locale: "ru_RU",
    url: "https://commoncourse.ru",
    siteName: "Common Course",
  },
  twitter: {
    card: "summary_large_image",
    title: "Common Course — образовательный маркетплейс для студентов",
    description:
      "P2P маркетплейс образовательных курсов для студентов в Telegram.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="antialiased">
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
