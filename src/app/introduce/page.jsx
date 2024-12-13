import Image from "next/image";
import React from "react";
import anh1 from "../../assets/images/truong-tieu-hoc-xuan-phuong.jpg";

export default function Introduce() {
  return (
    <section id="page-introduce">
      <div className="container py-5">
        <div className="row">
          <h3 className="mb-4">Giới thiệu chung</h3>
          <p className="textcontent">
            <strong>Trường Tiểu học Xuân Phương </strong>
            <span>
              được thành lập theo quyết định QĐ 1958/QĐ- UBND của UBND quận Nam
              Từ Liêm ngày 25/5/2018. Trường Tiểu học Xuân Phương được tách ra
              từ trường Tiểu học Phương Canh. Trường được xây dựng trong khuôn
              viên rộng gần 9000 m2 thuộc khu đô thị Viglacera thuộc Tổ dân phố
              số 7 phường Xuân Phương – quận Nam Từ Liêm – Hà Nội.
            </span>
          </p>
          <Image src={anh1} alt="" className="w-100 mb-3" />
          <p className="textcontent">
            Từ tháng 8 năm 2018 đến tháng 7 năm 2023, trường Tiểu học Xuân
            Phương do
            <strong>
              Thạc sĩ Lê Thị Tuyết Lan, thạc sĩ Nguyễn Khắc Hợp
            </strong>{" "}
            lãnh đạo. Tháng 5 năm 2023 <strong>Thạc sĩ Bùi Thị An</strong> được
            bổ nhiệm giữ chức vụ Phó Hiệu trưởng. Tháng 1 năm 2024{" "}
            <strong>Thạc sĩ Nguyễn Hữu Hưng</strong> được bổ nhiệm giữ chức vụ
            Hiệu trưởng nhà trường. Hiện tại, Ban Giám hiệu nhà trường đều là
            những thầy cô giáo có trình độ chuyên môn vững vàng và kinh nghiệm
            quản lí lâu năm trong lĩnh vực giáo dục.
          </p>
          <h5 className="mb-3">MỤC TIÊU GIÁO DỤC</h5>
          <ul className="ms-4">
            <li>
              Giúp học sinh định hướng, khám phá và phát triển tối đa năng lực
              của bản thân, tự lực giải quyết những vấn đề trong học tập và cuộc
              sống theo đúng phương châm: &quot;Phát triển năng lực, Kiến tạo
              tương lai&quot;.
            </li>
            <li>
              Rèn luyện cho học sinh có khả năng làm việc theo nhóm, năng lực
              hợp tác, kỹ năng chia sẻ thông tin, khả năng tư duy độc lập đáp
              ứng yêu cầu đổi mới giáo dục và phù hợp với định hướng phát triển
              của CTGDPT 2018.
            </li>
            <li>
              Chú trọng đổi mới về phương pháp dạy học, tăng cường giảng dạy
              Tiếng Anh, dạy môn Toán và Khoa học bằng Tiếng Anh nhằm phát triển
              toàn diện về Đức – Trí – Thể – Mỹ. Học sinh sẽ được làm quen với
              phương pháp học tập mới, phát triển niềm say mê học tập, biết tôn
              trọng bản thân và giúp đỡ những người xung quanh.
            </li>
          </ul>
          <h5 className="mb-3">NỘI DUNG VÀ NHIỆM VỤ ĐÀO TẠO</h5>
          <ul className="ms-4">
            <li>
              Đảm bảo dạy đủ chương trình do Bộ Giáo dục & Đào tạo Việt Nam qui
              định đối với cấp tiểu học. Rèn đức, luyện tài, chữ đẹp và 4 kỹ
              năng cơ bản: nghe, nói, đọc, viết tiếng Việt và tiếng Anh.
            </li>
            <li>
              Hình thành cho học sinh những thói quen tốt: ngoan ngoãn, lễ phép,
              có lòng nhân ái, có ý thức giữ gìn và bảo vệ môi trường…
            </li>
            <li>
              Tổ chức hoạt động ngoại khoá như CLB năng khiếu: TDTT, Võ thuật,
              Âm nhạc, Mỹ thuật, Tiếng Anh, Tin học ….
            </li>
          </ul>
          <h5 className="mb-3">ĐỘI NGŨ GIÁO VIÊN VÀ NHÂN VIÊN</h5>
          <p>
            Giáo viên: 100% đạt trình độ trên chuẩn, là những nhà giáo có trình
            độ chuyên môn, có kinh nghiệm giảng dạy cấp tiểu học đã tốt nghiệp
            đại học và sau đại học, tâm huyết với nghề, được phụ huynh và học
            sinh tin yêu. Nhân viên của trường được đào tạo chuyên nghiệp và
            trách nhiệm nghề nghiệp cao.
          </p>
          <h5 className="mb-3">ĐỊNH HƯỚNG PHÁT TRIỂN</h5>
          <p>
            Phát triển trường Tiểu học Xuân Phương thành trường có uy tín trong
            quận Nam Từ Liêm và trên địa bàn Thành phố Hà Nội. Đào tạo ra những
            thế hệ học sinh toàn diện về Đức – Trí – Thể – Mỹ, có nền tảng kiến
            thức chắc chắn để bước vào thời kỳ hội nhập của Việt Nam với thế
            giới. Năm học 2018 – 2019 trường Tiểu học Xuân Phương được công nhận
            đạt chuẩn Quốc gia mức độ 2 và được công nhận lại vào tháng 11 năm
            2023.
          </p>
          <h5 className="mb-3">CƠ SỞ VẬT CHẤT</h5>
          <p>
            Trường Tiểu học Xuân Phương là một trong những trường được đầu tư cơ
            sở vật chất, trang thiết bị hiện đại nhằm đáp ứng tốt nhất nhu cầu
            học tập và vui chơi giải trí của học sinh.
          </p>
        </div>
      </div>
    </section>
  );
}
