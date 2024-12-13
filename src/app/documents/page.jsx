import Image from "next/image";
import React from "react";
import new1 from "../../assets/images/new1.jpg";
import new2 from "../../assets/images/new2.jpg";
import new3 from "../../assets/images/new3.jpg";
import new4 from "../../assets/images/new4.jpg";

export default function News() {
  return (
    <section id="page-news">
      <div className="container py-5">
        <div className="row">
          <h3 className="mb-4">Tài liệu</h3>
          <div className="col-md-9">
            <div className="new-item mb-5">
              <div className="d-flex gap-3">
                <div className="image-item">
                  <Image src={new1} alt="" />
                </div>
                <div className="new-content">
                  <div className="content-title">
                    <h4>TỔ CHỨC CHUYÊN ĐỀ CẤP QUẬN MÔN TIẾNG VIỆT LỚP 5</h4>
                  </div>
                  <div className="new-desc">
                    <p>
                      Những vần thơ bình dị, như nhịp sóng vỗ vào kí ức của bao
                      thế hệ người Việt Nam ta, nhắc nhở chúng ta về truyền
                      thống Uống nước nhớ nguồn, Tôn sư trọng đạo từ ngàn đời
                      nay. Trong không khí tưng bừng phấn khởi ấy, thầy và trò
                      trường Tiểu học Xuân Phương long trọng tổ chức Chương
                      trình chào mừng 70 năm thành lập ngành GD ĐT Thủ đô và 42
                      năm ngày Nhà giáo Việt Nam 20-11.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="new-item mb-5">
              <div className="d-flex gap-3">
                <div className="image-item">
                  <Image src={new2} alt="" />
                </div>
                <div className="new-content">
                  <div className="content-title">
                    <h4>THAM QUAN TRUY XUẤT NGUỒN GỐC THỰC PHẨM</h4>
                  </div>
                  <div className="new-desc">
                    <p>
                      Hôm nay, 1/7/2024 hệ thống tuyển sinh đầu cấp bắt đầu mở
                      để phụ huynh đăng ký cho con vào lớp 1. Trường Tiểu học
                      Xuân Phương chuẩn bị đầy đủ các điều kiện về cơ sở vật
                      chất, trang thiết bị và nhân sự phục vụ công tác tuyển
                      sinh. Ngay từ đầu giờ sáng, rất nhiều PHHS đã có mặt tại
                      khu vực tuyển sinh của nhà trường để hoàn thiện các thủ
                      tục sau khi đã đăng kí trực tuyến cho con thành công.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="new-item mb-5">
              <div className="d-flex gap-3">
                <div className="image-item">
                  <Image src={new3} alt="" />
                </div>
                <div className="new-content">
                  <div className="content-title">
                    <h4>
                      LỄ RA TRƯỜNG VÀ CHIA TAY HỌC SINH LỚP 5 – NĂM HỌC
                      2023-2024
                    </h4>
                  </div>
                  <div className="new-desc">
                    <p>
                      Sáng ngày 31/5, trong không khí tưng bừng, tươi vui của
                      những ngày đầu hạ cùng niềm tin vững chắc về một Xuân
                      Phương bứt phá vươn cao, chúng ta đã được chứng kiến những
                      khoảnh khắc ý nghĩa của Lễ Tổng kết và vinh danh những tập
                      thể và cá nhân tiêu biểu năm học 2023 – 2024. Đây là năm
                      học mà các thầy cô đã luôn tận tâm, tận lực để vun đắp,
                      xây dựng trường Tiểu học Xuân Phương ngày càng phát triển.
                      Các em học sinh đã được hòa mình trong không gian hạnh
                      phúc dưới mái trường đầy tình yêu thương.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="new-item mb-5">
              <div className="d-flex gap-3">
                <div className="image-item">
                  <Image src={new4} alt="" />
                </div>
                <div className="new-content">
                  <div className="content-title">
                    <h4>
                      LỄ RA TRƯỜNG VÀ CHIA TAY HỌC SINH LỚP 5 – NĂM HỌC
                      2023-2024
                    </h4>
                  </div>
                  <div className="new-desc">
                    <p>
                      Vậy là một năm học nữa lại trôi qua, khi những tiếng ve
                      kêu râm ran, những cánh phượng đỏ báo hiệu mùa hè đã tới
                      cũng là lúc năm học 2023 – 2024 khép lại. Ngày 28/5/2024,
                      trường Tiểu học Xuân Phương long trọng tổ chức lễ ra
                      trường và chia tay học sinh lớp 5, niên khóa 2019 – 2024.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
