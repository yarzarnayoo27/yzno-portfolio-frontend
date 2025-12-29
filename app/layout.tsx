import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "./component/header/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YZNO Portfolio",
  description:
    "Frontend Developer portfolio showcasing React, Next.js, TypeScript, and modern UI design.",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "YZNO Portfolio",
    description:
      "Frontend Developer portfolio showcasing React, Next.js, TypeScript, and modern UI projects.",
    url: "https://your-domain.com",
    siteName: "YZNO Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "YZNO Portfolio Preview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "YZNO Portfolio",
    description: "Frontend Developer | React | Next.js | TypeScript",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  keywords: [
    "YZNO",
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
  ],

  alternates: {
    canonical: "https://yarzarnayoo.com",
  }
};

export const viewport: Viewport = {
  themeColor: "#121212",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} antialiased transition-colors duration-500 ease-in-out`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
