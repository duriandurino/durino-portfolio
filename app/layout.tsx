import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Adrian Alejandrino | Product Solutions Engineer",
  description: "Product Solutions Engineer specializing in full-stack development, IoT architecture, and rapid MVP prototyping. Based in Cebu, PH.",
  keywords: ["Adrian Alejandrino", "Software Developer", "Fullstack Developer", "IoT Engineer", "Next.js", "React", "TypeScript"],
  authors: [{ name: "Adrian Alejandrino" }],
  icons: {
    icon: "/images/adrian.png", 
    apple: "/images/adrian.png", // For iOS home screen icons
  },
  openGraph: {
    title: "Adrian Alejandrino | Product Solutions Engineer",
    description: "Product Solutions Engineer specializing in full-stack development, IoT architecture, and rapid MVP prototyping.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
