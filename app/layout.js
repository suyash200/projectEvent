import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/common/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "InMyEvent",
  description: "Your one-stop shop for event planning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main> {children}</main>
      </body>
 
    </html>
  );
}
