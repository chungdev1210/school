import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav id="primary-header" className="navbar navbar-expand-lg">
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
              <li className="nav-item px-3 py-3 active">
                <Link className="nav-link p-0" href={"/"}>
                  TRANG CHỦ
                </Link>
              </li>
              <li className="nav-item px-3 py-3 dropdown">
                <a
                  className="nav-link p-0 dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  GIỚI THIỆU
                </a>
                <ul className="dropdown-menu dropdown-menu-end animate slide shadow">
                  <li>
                    <a href="#" className="dropdown-item">
                      Giới thiệu chung
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Ban Giám Hiệu nhà trường
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Cơ sở vật chất
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item px-3 py-3 dropdown">
                <a
                  className="nav-link p-0 dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  KHỐI ĐÀO TẠO
                </a>
                <ul className="dropdown-menu dropdown-menu-end animate slide border shadow">
                  <li>
                    <a href="#" className="dropdown-item">
                      Khối 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Khối 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Khối 3
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Khối 4
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Khối 5
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item px-3 py-3">
                <Link className="nav-link p-0" href={"/news"}>
                  TIN TỨC
                </Link>
              </li>
              <li className="nav-item px-3 py-3">
                <a className="nav-link p-0" href="#">
                  THÔNG BÁO
                </a>
              </li>
              <li className="nav-item px-3 py-3">
                <a className="nav-link p-0" href="#">
                  THƯ VIỆN ẢNH
                </a>
              </li>
              <li className="nav-item px-3 py-3">
                <a className="nav-link p-0" href="#">
                  TÀI LIỆU
                </a>
              </li>
              <li className="nav-item px-3 py-3">
                <a className="nav-link p-0" href="#">
                  LIÊN HỆ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
