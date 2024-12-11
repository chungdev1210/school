import Image from "next/image";
import React from "react";
import anh1 from "../../assets/images/20_11_1.jpg";
import anh2 from "../../assets/images/20_11_2.jpg";
import anh3 from "../../assets/images/20_11_3.jpg";
import anh4 from "../../assets/images/20_11_4.jpg";
import anh5 from "../../assets/images/20_11_5.jpg";

export default function Post() {
  return (
    <section id="page-post">
      <div className="container py-5">
        <div className="row">
          <h3 className="mb-3 text-danger">
            HÂN HOAN CHÀO ĐÓN NGÀY NHÀ GIÁO VIỆT NAM 20/11
          </h3>
          <i>Có một nghề bụi phấn bám đầy tay</i> <br />
          <i>Người ta bảo, đó là nghề trong sạch nhất</i> <br />
          <i>Có một nghề không trồng cây vào đất</i> <br />
          <i>Mà nở cho đời những đóa hoa thơm./..</i>
          <p className="textcontent">
            Những vần thơ bình dị, như nhịp sóng vỗ vào kí ức của bao thế hệ
            người Việt Nam ta, nhắc nhở chúng ta về truyền thống Uống nước nhớ
            nguồn, Tôn sư trọng đạo từ ngàn đời nay. Trong không khí tưng bừng
            phấn khởi ấy, thầy và trò trường Tiểu học Xuân Phương long trọng tổ
            chức Chương trình chào mừng 70 năm thành lập ngành GD ĐT Thủ đô và
            42 năm ngày Nhà giáo Việt Nam 20-11.
          </p>
          <Image
            src={anh1}
            alt=""
            className="w-100 mb-3"
            height={800}
            style={{ objectFit: "cover" }}
          />
          <p>
            Đến dự với buổi lễ, nhà trường rất vinh dự chào đón bà Lê Thị Thanh
            Huyền – UVBTV Đảng ủy, Chủ tịch MTTQ phường Xuân Phương; bà Nguyễn
            Hằng Nga – Đảng ủy viên, Bí thư Đoàn Thanh niên phường; Các ông bà
            là trưởng các ban ngành đoàn thể trên địa bàn phường Xuân Phương;
            các Nhà giáo lão thành; Đại diện các đơn vị hợp tác với nhà trường;
            Ban đại diện CMHS cùng đông đảo các thầy cô giáo và 1374 em học
            sinh.
          </p>
          <Image
            src={anh2}
            alt=""
            className="w-100 mb-3"
            height={800}
            style={{ objectFit: "cover" }}
          />
          <Image
            src={anh3}
            alt=""
            className="w-100 mb-3"
            height={800}
            style={{ objectFit: "cover" }}
          />
          <Image
            src={anh4}
            alt=""
            className="w-100 mb-3"
            height={800}
            style={{ objectFit: "cover" }}
          />
          <Image
            src={anh5}
            alt=""
            className="w-100 mb-3"
            height={800}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
