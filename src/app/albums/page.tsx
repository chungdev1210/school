import React from "react";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";
import Image from "next/image";

export default function Albums() {
  return (
    <section id="page-albums">
      <div className="container py-5">
        <div className="row">
          <h3 className="mb-4">Thư viện ảnh</h3>
          <div className="col-md-4 mb-3">
            <div className="event-item">
              <div className="event-img">
                <Image src={img1} alt="" />
              </div>
              <div className="event-content">
                <p>
                  <a href="#">Hân hạnh chào đón ngày nhà giáo Việt Nam 20/11</a>
                </p>
                <button
                  className="btn btn-danger btn-sm btn-custom"
                  type="button"
                >
                  XEM THÊM
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
                  XEM THÊM
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
                  XEM THÊM
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
                  XEM THÊM
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
                  XEM THÊM
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
                  XEM THÊM
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
