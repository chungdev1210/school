import React from "react";
import logo from "../../assets/images/logo.png";
import fb from "../../assets/images/facebook.png";
import yt from "../../assets/images/youtube.png";
import email from "../../assets/images/mail.png";
import rating from "../../assets/images/rating.png";
import Image from "next/image";

export default function Header() {
  return (
    <header id="header">
      <nav className="header-top">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center py-3">
            <a className="navbar-brand" href="index.html">
              <Image src={logo} alt="logo" height={85} />
            </a>
            <div className="">
              <ul className="info d-flex flex-wrap justify-content-end align-items-center list-unstyled m-0">
                <li className="phone fw-medium text-capitalize d-flex align-items-center pe-3 border-end text-danger">
                  Hotline: 0988 995 259
                </li>
                <li className="time text-black fw-medium text-capitalize d-flex align-items-center ms-3">
                  <a
                    href="https://www.facebook.com/TieuhocXuanPhuong/"
                    target="_blank"
                  >
                    <Image src={fb} alt="logo" width={20} className="me-2" />
                  </a>
                  <a href="https://tieuhocxuanphuong.edu.vn/" target="_blank">
                    <Image src={yt} alt="logo" width={20} />
                  </a>
                </li>
              </ul>
              <ul className="info d-flex flex-wrap justify-content-end align-items-center list-unstyled m-0 pt-2">
                <li className="phone fw-medium text-capitalize d-flex align-items-center pe-3 me-3 border-end text-black">
                  <Image src={rating} alt="logo" width={20} className="me-2" />
                  <span>Thông tin phụ huynh cần biết</span>
                </li>
                <li className="phone fw-medium text-capitalize d-flex align-items-center text-black">
                  <Image src={email} alt="logo" width={20} className="me-2" />
                  <span>Gửi câu hỏi cho chúng tôi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <hr className="m-0" />
      <nav id="primary-header" className="navbar navbar-expand-lg py-3">
        <span className="fw-bolder text-uppercase">TRANG CHỦ</span>
      </nav>
    </header>
  );
}
