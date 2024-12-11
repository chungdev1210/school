"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [pathUrl, setPathUrl] = useState();
  useEffect(() => {
    const lastSegment = pathname.split("/").filter(Boolean).pop();
    setPathUrl(lastSegment);
  });
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
              <li
                className={`nav-item px-3 py-3 ${
                  pathUrl == undefined ? "active" : null
                }`}
              >
                <Link className="nav-link p-0" href={"/"}>
                  TRANG CHỦ
                </Link>
              </li>
              <li
                className={`nav-item px-3 py-3 dropdown ${
                  pathUrl == "introduce" ? "active" : null
                }`}
              >
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
                    <Link className="dropdown-item" href={"/introduce"}>
                      GIỚI THIỆU CHUNG
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href={"/introduce"}>
                      BAN GIÁM HIỆU HÀ TRƯỜNG
                    </Link>
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
                      KHỐI 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      KHỐI 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      KHỐI 3
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      KHỐI 4
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      KHỐI 5
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className={`nav-item px-3 py-3 ${
                  pathUrl == "news" ? "active" : null
                }`}
              >
                <Link className="nav-link p-0" href={"/news"}>
                  TIN TỨC
                </Link>
              </li>
              <li
                className={`nav-item px-3 py-3 ${
                  pathUrl == "notifications" ? "active" : null
                }`}
              >
                <Link className="nav-link p-0" href={"/notifications"}>
                  THÔNG BÁO
                </Link>
              </li>
              <li
                className={`nav-item px-3 py-3 ${
                  pathUrl == "albums" ? "active" : null
                }`}
              >
                <Link className="nav-link p-0" href={"/albums"}>
                  THƯ VIỆN ẢNH
                </Link>
              </li>
              <li
                className={`nav-item px-3 py-3 ${
                  pathUrl == "documents" ? "active" : null
                }`}
              >
                <Link className="nav-link p-0" href={"/documents"}>
                  TÀI LIỆU
                </Link>
              </li>
              <li
                className={`nav-item px-3 py-3 ${
                  pathUrl == "contacts" ? "active" : null
                }`}
              >
                <Link className="nav-link p-0" href={"/contacts"}>
                  LIÊN HỆ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
