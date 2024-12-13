import Image from "next/image";
import React from "react";
import banner from "../../assets/images/khai-giang-2022-2023.jpg";
import megaphone from "../../assets/images/megaphone.png";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";
import img7 from "../../assets/images/img7.jpg";
import img8 from "../../assets/images/img8.jpg";
import img9 from "../../assets/images/img9.jpg";
import Link from "next/link";

export default function HomeComponent() {
  const news = [
    {
      id: 1,
      title: "THÔNG BÁO TUYỂN DỤNG GIÁO VIÊN, NHÂN VIÊN HỢP ĐỒNG",
    },
    {
      id: 2,
      title: "HÂN HOAN CHÀO ĐÓN CÁC CON HỌC SINH LỚP 1 NĂM HỌC 2024-2025",
    },
    {
      id: 3,
      title: "TUYỂN SINH TRỰC TUYẾN NĂM HỌC 2024-2025",
    },
    {
      id: 4,
      title: "KẾ HOẠCH TUYỂN SINH LỚP 1 – NĂM HỌC 2024 – 2025",
    },
    {
      id: 5,
      title: "LỄ RA TRƯỜNG VÀ CHIA TAY HỌC SINH LỚP 5 – NĂM HỌC 2023-2024",
    },
    {
      id: 6,
      title: "GIAO LƯU-TRẢI NGHIỆM “EM LÀM HỌC SINH LỚP 1",
    },
  ];
  return (
    <>
      <section id="billboard">
        <div className="row align-items-center g-0 bg-secondary">
          <div className="col-12">
            <Image src={banner} alt="" className="w-100 banner-img" />
          </div>
        </div>
      </section>
      <section id="about-us">
        <div className="container py-5">
          <div className="row g-md-5 align-items-center">
            <div className="col-lg-5">
              <div className="imageblock position-relative">
                <iframe
                  className="w-100"
                  height={315}
                  src="https://www.youtube.com/embed/_l31MEckwmA?si=PnBGLaH4hQqoAqUz"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen=""
                />
              </div>
            </div>
            <div className="col-lg-7 mt-5">
              {/* <h6>
                <span className="text-primary">|</span>About Us
              </h6> */}
              <h3 className="display-6 fw-semibold mb-4">Giới thiệu</h3>
              <p>
                <span className="fw-semibold">Trường Tiểu học Xuân Phương</span>{" "}
                được thành lập theo quyết định QĐ 1958/QĐ- UBND của UBND quận
                Nam Từ Liêm ngày 25/5/2018. Trường đáp ứng các tiêu chí về cơ sở
                vật chất của trường chuẩn Quốc gia. Đội ngũ giáo viên, nhân viên
                nhà trường đủ về số lượng, 100% đạt chuẩn và trên chuẩn.
              </p>
              <p>
                Bên cạnh việc tổ chức giảng dạy theo chương trình chung của Sở
                Giáo dục và Đào tạo, nhà trường cũng thường xuyên tổ chức các
                hoạt động ngoại khóa, trải nghiệm sáng tạo nhằm nâng cao chất
                lượng giáo dục cho học sinh.
              </p>
              <Link
                className="btn btn-primary btn-slide hover-slide-right mt-4"
                href={"/introduce"}
              >
                <span>XEM THÊM</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="news">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <h3 className="display-6 fw-semibold mb-4 text-center">
                Thông báo mới
              </h3>
              <ul className="list-notification">
                {news.map((newsItem) => {
                  return (
                    <li key={newsItem.id} className="notification-item">
                      <Link href={`/notifications/${newsItem.id}`}>
                        <Image src={megaphone} alt="" width={25} />
                        <span className="text-uppercase ms-3">
                          {newsItem.title}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-md-6">
              <h3 className="display-6 fw-semibold mb-4 text-center">
                Thư viện ảnh
              </h3>
              <div className="albums">
                <div className="d-flex flex-wrap gap-2">
                  <div className="album-item">
                    <Image src={img1} alt="" />
                  </div>
                  <div className="album-item">
                    <Image src={img2} alt="" />
                  </div>
                  <div className="album-item">
                    <Image src={img3} alt="" />
                  </div>
                  <div className="album-item">
                    <Image src={img4} alt="" />
                  </div>
                  <div className="album-item">
                    <Image src={img5} alt="" />
                  </div>
                  <div className="album-item">
                    <Image src={img6} alt="" />
                  </div>
                  <div className="album-item">
                    <Image src={img7} alt="" />
                  </div>
                  <div className="album-item">
                    <Image src={img8} alt="" />
                  </div>
                  <div className="album-item">
                    <Image src={img9} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="events">
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="display-6 fw-semibold mb-4 text-center">
                Tin tức & Sự kiện
              </h3>
            </div>
            <div className="col-md-4 mb-3">
              <div className="event-item">
                <div className="event-img">
                  <Image src={img1} alt="" />
                </div>
                <div className="event-content">
                  <p>
                    <a href="#">
                      Hân hạnh chào đón ngày nhà giáo Việt Nam 20/11
                    </a>
                  </p>
                  <button
                    className="btn btn-danger btn-sm btn-custom"
                    type="button"
                  >
                    <Link href={"/post/chao-mung-ngay-nha-giao-viet-nam-1"}>
                      XEM THÊM
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="event-item">
                <div className="event-img">
                  <Image src={img2} alt="" />
                </div>
                <div className="event-content">
                  <p>
                    <a href="#">
                      Tổ chức chuyên đề cấp quận môn tiếng việt lớp 5
                    </a>
                  </p>
                  <button
                    className="btn btn-danger btn-sm btn-custom"
                    type="button"
                  >
                    <Link
                      href={"/post/to-chuc-chuyen-de-cap-quan-mon-tieng-viet-2"}
                    >
                      XEM THÊM
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="event-item">
                <div className="event-img">
                  <Image src={img3} alt="" />
                </div>
                <div className="event-content">
                  <p>
                    <a href="#">THAM QUAN TRUY XUẤT NGUỒN GỐC THỰC PHẨM</a>
                  </p>
                  <button
                    className="btn btn-danger btn-sm btn-custom"
                    type="button"
                  >
                    <Link
                      href={"/post/tham-quan-truy-xuat-nguon-goc-thuc-pham-3"}
                    >
                      XEM THÊM
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="event-item">
                <div className="event-img">
                  <Image src={img4} alt="" />
                </div>
                <div className="event-content">
                  <p>
                    <a href="#">TRUNG THU SẺ CHIA</a>
                  </p>
                  <button
                    className="btn btn-danger btn-sm btn-custom"
                    type="button"
                  >
                    <Link href={"/post/trung-thu-se-chia-4"}>XEM THÊM</Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="event-item">
                <div className="event-img">
                  <Image src={img5} alt="" />
                </div>
                <div className="event-content">
                  <p>
                    <a href="#">TƯNG BỪNG CHÀO ĐÓN NĂM HỌC MỚI 2024-2025</a>
                  </p>
                  <button
                    className="btn btn-danger btn-sm btn-custom"
                    type="button"
                  >
                    <Link href={"/post"}>XEM THÊM</Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="event-item">
                <div className="event-img">
                  <Image src={img6} alt="" />
                </div>
                <div className="event-content">
                  <p>
                    <a href="#">
                      THÔNG BÁO TUYỂN DỤNG GIÁO VIÊN, NHÂN VIÊN HỢP ĐỒNG
                    </a>
                  </p>
                  <button
                    className="btn btn-danger btn-sm btn-custom"
                    type="button"
                  >
                    <Link href={"/post"}>XEM THÊM</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
