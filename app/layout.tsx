import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adlafayyaz.com"),
  title: "Adla Fayyaz | Portfolio",
  description:
    "Portfolio of Adla Fayyaz - Mobile & Web Developer, UI/UX Designer.",
  keywords: [
    "portfolio",
    "UI/UX",
    "web developer",
    "mobile developer",
    "Next.js",
    "Flutter",
    "React",
  ],
  openGraph: {
    title: "Adla Fayyaz | Portfolio",
    description:
      "Portfolio of Adla Fayyaz - Mobile & Web Developer, UI/UX Designer.",
    url: "https://adlafayyaz.com",
    siteName: "Adla Fayyaz Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Adla Fayyaz Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adla Fayyaz | Portfolio",
    description:
      "Portfolio of Adla Fayyaz - Mobile & Web Developer, UI/UX Designer.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${jakarta.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
