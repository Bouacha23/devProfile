import { Inter } from "next/font/google";
import "./globals.css";
import { icon } from "@fortawesome/fontawesome-svg-core";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "profile  ",
  description: "frontend presonl profile to hire up ",
  icon : 'prof.png'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
