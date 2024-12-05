// import './globals.css'
import { Inter } from "next/font/google";
import Header from "./components/header/page";
import Footer from "./components/footer/page";
import "./globals.css";
import "./assets/css/style.css";
import "./assets/css/bootstrap.min.css";
// import "./assets/js/bootstrap.bundle.min.js";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trường Tiểu học Xuân Phương",
  description:
    "Website chính thức Trường Tiểu học Xuân Phương, Quận Nam Từ Liêm, Thành phố Hà Nội",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
