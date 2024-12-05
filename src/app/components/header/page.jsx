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
        <div className="container justify-content-end">
          <button
            className="navbar-toggler d-flex d-lg-none justify-content-end border-0 shadow-none p-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#bdNavbar"
            aria-controls="bdNavbar"
            aria-expanded="false"
          >
            <svg className="navbar-icon" width={60} height={60}>
              <use xlinkHref="#navbar-icon" />
            </svg>
          </button>
          <div
            className="header-bottom offcanvas offcanvas-end"
            id="bdNavbar"
            aria-labelledby="bdNavbarOffcanvasLabel"
          >
            <div className="offcanvas-header px-4 mt-3 mb-1">
              <button
                type="button"
                className="btn-close btn-close-black shadow-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                data-bs-target="#bdNavbar"
              />
            </div>
            <div className="offcanvas-body align-items-center justify-content-center">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item px-3 py-1 py-lg-0">
                  <a
                    className="nav-link active p-0"
                    aria-current="page"
                    href="index.html"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item px-3 py-1 py-lg-0 dropdown">
                  <a
                    className="nav-link p-0 dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                  >
                    pages{" "}
                    <svg
                      width={20}
                      height={20}
                      style={{ verticalAlign: "sub" }}
                    >
                      <use xlinkHref="#arrow-down" />
                    </svg>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end animate slide mt-3 border-0 shadow">
                    <li>
                      <a href="index.html" className="dropdown-item">
                        About{" "}
                      </a>
                    </li>
                    <li>
                      <a href="index.html" className="dropdown-item">
                        Blog{" "}
                      </a>
                    </li>
                    <li>
                      <a href="index.html" className="dropdown-item">
                        Blog-Single{" "}
                      </a>
                    </li>
                    <li>
                      <a href="index.html" className="dropdown-item">
                        Quote{" "}
                      </a>
                    </li>
                    <li>
                      <a href="index.html" className="dropdown-item">
                        Services{" "}
                      </a>
                    </li>
                    <li>
                      <a href="index.html" className="dropdown-item">
                        Service-Single
                      </a>
                    </li>
                    <li>
                      <a href="index.html" className="dropdown-item">
                        Project{" "}
                      </a>
                    </li>
                    <li>
                      <a href="index.html" className="dropdown-item">
                        Project-Single
                      </a>
                    </li>
                    <li>
                      <a href="index.html" className="dropdown-item">
                        Pricing{" "}
                      </a>
                    </li>
                    <li>
                      <a href="index.html" className="dropdown-item">
                        Contact{" "}
                      </a>
                    </li>
                    <li>
                      <a href="index.html" className="dropdown-item">
                        Our Team{" "}
                      </a>
                    </li>
                    <li>
                      <a href="index.html" className="dropdown-item">
                        Reviews{" "}
                      </a>
                    </li>
                    <li>
                      <a href="index.html" className="dropdown-item">
                        FAQs{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item px-3 py-1 py-lg-0">
                  <a className="nav-link p-0" href="index.html">
                    About
                  </a>
                </li>
                <li className="nav-item px-3 py-1 py-lg-0">
                  <a className="nav-link p-0" href="index.html">
                    Services
                  </a>
                </li>
                <li className="nav-item px-3 py-1 py-lg-0">
                  <a className="nav-link p-0" href="index.html">
                    Project
                  </a>
                </li>
                <li className="nav-item px-3 py-1 py-lg-0">
                  <a className="nav-link p-0" href="index.html">
                    Blog
                  </a>
                </li>
                <li className="nav-item px-3 py-1 py-lg-0">
                  <a className="nav-link p-0" href="index.html">
                    Contact
                  </a>
                </li>
                <li className="nav-item px-3 py-1 py-lg-0">
                  <a className="nav-link p-0" href="index.html">
                    Quote
                  </a>
                </li>
                <li className="nav-item search-dropdown py-3 py-lg-0 ms-3 ms-lg-5 dropdown">
                  <a
                    className="nav-link p-0 search dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                  >
                    <svg className="search" width={24} height={24}>
                      <use xlinkHref="#search" />
                    </svg>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end animate slide mt-3 border-0 p-3 shadow">
                    <li className="position-relative d-flex align-items-center p-0">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button
                        className="btn btn-primary position-absolute end-0"
                        type="submit"
                      >
                        <svg className="search" width={24} height={24}>
                          <use xlinkHref="#search" />
                        </svg>
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
