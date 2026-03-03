import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "megamart.com",
  description: "World wide E-Commerse Product",
  icons: {
    icon: "/buy.svg",   // Path inside the public/ folder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
