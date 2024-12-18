import Header from "../components/header/page";
import Footer from "../components/footer/page";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/css/style-custom.scss";
import { Barlow } from "next/font/google";

const barlow = Barlow({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Trường Tiểu học Xuân Phương",
  description:
    "Website chính thức Trường Tiểu học Xuân Phương, Quận Nam Từ Liêm, Thành phố Hà Nội",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
