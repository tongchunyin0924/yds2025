import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "YDS2025",
  description: "",
  appleWebApp: {
    title: 'YDS2025 App',
    statusBarStyle: 'black-translucent',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* WORKAROUND */}
        <meta name="apple-mobile-web-app-capable" content="yes"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
