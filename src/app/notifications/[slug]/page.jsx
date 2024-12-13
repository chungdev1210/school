"use client";
import { useParams } from "next/navigation";
import React from "react";
import anh9 from "../../../assets/images/anh9.jpg";
import anh10 from "../../../assets/images/anh10.jpg";
import anh11 from "../../../assets/images/anh11.jpg";
import anh12 from "../../../assets/images/anh12.jpg";
import anh13 from "../../../assets/images/anh13.jpg";
import anh14 from "../../../assets/images/anh14.jpg";
import anh15 from "../../../assets/images/anh15.jpg";
import anh16 from "../../../assets/images/anh16.png";
import anh17 from "../../../assets/images/anh17.JPG";
import anh18 from "../../../assets/images/anh18.JPG";
import anh19 from "../../../assets/images/anh19.JPG";
import anh20 from "../../../assets/images/anh20.JPG";
import anh21 from "../../../assets/images/anh21.jpg";
import anh22 from "../../../assets/images/anh22.jpg";
import anh23 from "../../../assets/images/anh23.jpg";
import anh24 from "../../../assets/images/anh24.jpg";
import Image from "next/image";

export default function PageNoti() {
  const { slug } = useParams();
  const id = slug.charAt(slug.length - 1);
  return (
    <section id="page-post">
      <div className="container py-5">
        {id == "1" && (
          <div className="row">
            <h3 className="mb-3 text-danger">
              THÔNG BÁO TUYỂN DỤNG GIÁO VIÊN, NHÂN VIÊN HỢP ĐỒNG
            </h3>
            <p className="mb-4">
              Căn cứ Kế hoạch số 155/KH-THXP ngày 23/08/2024 của trường Tiểu học
              Xuân Phương về tuyển dụng lao động hợp đồng theo Nghị định
              111/2022/NĐ-CP của Chính phủ;
            </p>
          </div>
        )}
        {id == "2" && (
          <div className="row">
            <h3 className="mb-3 text-danger">
              HÂN HOAN CHÀO ĐÓN CÁC CON HỌC SINH LỚP 1 NĂM HỌC 2024-2025
            </h3>
            <i>" Ngày đầu như thế đó</i> <br />
            <i>Cô giáo như mẹ hiền</i> <br />
            <i>Em bây giờ cứ ngỡ</i> <br />
            <i>Cô giáo là cô tiên. "</i>
            <p className="mb-4">
              Ấn tượng về ngày đầu đi học thật khó phai trong kí ức của mỗi học
              sinh. Bỡ ngỡ, hồi hộp và lo lắng, đó chính là cảm xúc chung của
              các em học sinh lớp 1 trường Tiểu học Xuân Phương khi lần đầu tiên
              đến với ngôi trường mới – nơi khởi đầu cho hành trình học tập của
              mình, khởi đầu cho hành trình “Phát triển năng lực – Kiến tạo
              tương lai”.
            </p>
            <Image
              src={anh9}
              alt=""
              className="w-100 mb-3"
              height={800}
              style={{ objectFit: "contain" }}
            />
            <p className="mb-4">
              Ngay từ sáng, cổng trường đã rộn ràng, tấp nập phụ huynh đưa con
              đến trường. Ngôi trường được trang hoàng thật đẹp khiến bạn nào
              cũng nhìn trước ngó sau để ngắm nghía ngôi với bao cảm xúc khó tả.
              Các cô giáo xinh đẹp, dịu dàng trong tà áo dài thướt tha, trìu mến
              dắt tay con.
            </p>
            <Image
              src={anh10}
              alt=""
              className="w-100 mb-3"
              height={800}
              style={{ objectFit: "contain" }}
            />
            <p className="mb-4">
              Chương trình chào đón các con học sinh lớp 1 đã khép lại song
              những dư âm đẹp đẽ về buổi lễ sẽ đọng lại mãi trong tâm trí của
              các thầy cô giáo, các bậc phụ huynh và các con học sinh. Từ hôm
              nay, các con học sinh lớp 1 sẽ cùng nhau học tập, cùng nhau vui
              chơi dưới mái trường Tiểu học Xuân Phương – ngôi trường với bề dày
              thành tích trong nhiều năm qua, với đội ngũ các thầy cô giáo tâm
              huyết, yêu nghề mến trẻ. Trường Tiểu học Xuân Phương sẽ là NGÔI
              TRƯỜNG HẠNH PHÚC, là mái nhà thứ hai, là nơi ươm mầm những ước mơ
              tuổi thơ của các con.
            </p>
            <Image
              src={anh11}
              alt=""
              className="w-100 mb-3"
              height={800}
              style={{ objectFit: "contain" }}
            />
            <p className="mb-4">
              Trong không khí hân hoan, háo hức của buổi lễ, thầy giáo Nguyễn
              Hữu Hưng – Bí thư Chi bộ, Hiệu trưởng nhà trường thay mặt tập thể
              cán bộ giáo viên, nhân viên nhà trường gửi lời chào, lời chúc thân
              thương nhất tới các con học sinh khối 1, đồng thời gửi tặng những
              món quà nhỏ chứa đựng biết bao tình cảm yêu thương dành cho các
              con.
            </p>
            <Image
              src={anh12}
              alt=""
              className="w-100 mb-3"
              height={800}
              style={{ objectFit: "contain" }}
            />
          </div>
        )}
        {id == "3" && (
          <div className="row">
            <h3 className="mb-3 text-danger">
              TUYỂN SINH TRỰC TUYẾN NĂM HỌC 2024-2025
            </h3>
            <p className="mb-4">
              Hôm nay, 1/7/2024 hệ thống tuyển sinh đầu cấp bắt đầu mở để phụ
              huynh đăng ký cho con vào lớp 1. Trường Tiểu học Xuân Phương chuẩn
              bị đầy đủ các điều kiện về cơ sở vật chất, trang thiết bị và nhân
              sự phục vụ công tác tuyển sinh.
            </p>
            <Image
              src={anh13}
              alt=""
              className="w-100 mb-3"
              height={800}
              style={{ objectFit: "contain" }}
            />
            <Image
              src={anh14}
              alt=""
              className="w-100 mb-3"
              height={800}
              style={{ objectFit: "contain" }}
            />
            <p className="mb-4">
              Ngay từ đầu giờ sáng, rất nhiều PHHS đã có mặt tại khu vực tuyển
              sinh của nhà trường để hoàn thiện các thủ tục sau khi đã đăng kí
              trực tuyến cho con thành công.
            </p>
            <Image
              src={anh15}
              alt=""
              className="w-100 mb-3"
              height={800}
              style={{ objectFit: "contain" }}
            />
          </div>
        )}
        {id == "4" && (
          <div className="row">
            <h3 className="mb-3 text-danger">
              KẾ HOẠCH TUYỂN SINH LỚP 1 – NĂM HỌC 2024 – 2025
            </h3>
            <p className="mb-4">
              Thực hiện Kế hoạch số 276/KH-GDĐT ngày 13/5/2024 của Phòng GDĐT
              quận Nam Từ Liêm về việc hướng dẫn tuyển sinh vào các trường Mầm
              non, lớp 1, lớp 6 – Năm học 2024-2025.
            </p>
            <p className="mb-4">
              Trường Tiểu học Xuân Phương trân trọng thông báo tới các bậc phụ
              huynh học sinh về Kế hoạch tuyển sinh lớp 1 – Năm học 2024-2025
              của nhà trường như sau:
            </p>
            <p className="mb-4">
              (Các bậc PHHS click vào link dưới đây để đọc thông báo.)
            </p>
            <Image
              src={anh16}
              alt=""
              className="w-100 mb-3"
              height={800}
              style={{ objectFit: "contain" }}
            />
          </div>
        )}
        {id == "5" && (
          <div className="row">
            <h3 className="mb-3 text-danger">
              LỄ RA TRƯỜNG VÀ CHIA TAY HỌC SINH LỚP 5 – NĂM HỌC 2023-2024
            </h3>
            <p className="mb-4">
              Vậy là một năm học nữa lại trôi qua, khi những tiếng ve kêu râm
              ran, những cánh phượng đỏ báo hiệu mùa hè đã tới cũng là lúc năm
              học 2023 – 2024 khép lại. Ngày 28/5/2024, trường Tiểu học Xuân
              Phương long trọng tổ chức lễ ra trường và chia tay học sinh lớp 5,
              niên khóa 2019 – 2024.
            </p>
            <Image
              src={anh17}
              alt=""
              className="w-100 mb-3"
              height={800}
              style={{ objectFit: "contain" }}
            />
            <Image
              src={anh18}
              alt=""
              className="w-100 mb-3"
              height={800}
              style={{ objectFit: "contain" }}
            />
            <p className="mb-4">
              Đây là quãng thời gian để thầy và trò nhìn lại những năm tháng gắn
              bó cùng nhau dưới mái trường Tiểu học Xuân Phương thân yêu. Buổi
              lễ có sự tham gia của Ban Giám hiệu nhà trường, Ban Đại diện cha
              mẹ học sinh, các bậc PHHS cùng toàn thể các thầy cô giáo và 247
              học sinh khối 5.
            </p>
            <Image
              src={anh19}
              alt=""
              className="w-100 mb-3"
              height={800}
              style={{ objectFit: "contain" }}
            />
            <Image
              src={anh20}
              alt=""
              className="w-100 mb-3"
              height={800}
              style={{ objectFit: "contain" }}
            />
            <p className="mb-4">
              Xúc động hơn cả là những lời nhắn nhủ, dặn dò của thầy giáo Nguyễn
              Hữu Hưng – Bí thư Chi bộ – Hiệu trưởng nhà trường gửi tới các em
              học sinh. Trước tiên là sự tự hào, phấn khởi vì những điều mà thầy
              và trò nỗ lực trong suốt năm qua, sau đó là sự nghẹn ngào với lời
              dặn dò thân tình của thầy gửi tới các em học sinh thân yêu.
            </p>
          </div>
        )}
        {id == "6" && (
          <div className="row">
            <h3 className="mb-3 text-danger">
              GIAO LƯU-TRẢI NGHIỆM &quot;EM LÀM HỌC SINH LỚP 1&quot;
            </h3>
            <p className="mb-4">
              Chuẩn bị tâm thế cho trẻ vào lớp 1 là việc làm quan trọng và cần
              thiết đối với các bé 6 tuổi. Để trẻ hào hứng, phấn khởi và khơi
              dậy mong muốn được học tập dưới mái trường Tiểu học, sáng nay,
              ngày 22/5/2024, trường Tiểu học Xuân Phương kết hợp với trường Mầm
              non Xuân Phương tưng bừng tổ chức &quot;Chương trình giao lưu trải
              nghiệm – Em là học sinh lớp 1&quot; để đón chào các bạn học sinh
              lớp Mẫu giáo lớn đến từ trường Mầm non Xuân Phương.
            </p>
            <Image
              src={anh21}
              alt=""
              className="w-100 mb-3"
              height={800}
              style={{ objectFit: "contain" }}
            />
            <Image
              src={anh22}
              alt=""
              className="w-100 mb-3"
              height={800}
              style={{ objectFit: "contain" }}
            />
            <p className="mb-4">
              Đến ngôi trường mới, các bé không tránh khỏi lạ lẫm. Sau phút bỡ
              ngỡ ban đầu, với sự thân thiện, nhiệt tình của thầy cô giáo trường
              Tiểu học Xuân Phương, các bạn nhỏ đã nhanh chóng hòa mình với
              không khí buổi giao lưu. Trong ánh nắng ban mai, những ánh mắt
              ngây thơ chăm chú hướng lên sân khấu để ngắm nhìn các bạn và các
              anh chị tự tin thể hiện các tiết mục văn nghệ đặc sắc mới đáng yêu
              làm sao!
            </p>
            <Image
              src={anh23}
              alt=""
              className="w-100 mb-3"
              height={800}
              style={{ objectFit: "contain" }}
            />
            <Image
              src={anh24}
              alt=""
              className="w-100 mb-3"
              height={800}
              style={{ objectFit: "contain" }}
            />
            <p className="mb-4">
              Xúc động hơn cả là những lời nhắn nhủ, dặn dò của thầy giáo Nguyễn
              Hữu Hưng – Bí thư Chi bộ – Hiệu trưởng nhà trường gửi tới các em
              học sinh. Trước tiên là sự tự hào, phấn khởi vì những điều mà thầy
              và trò nỗ lực trong suốt năm qua, sau đó là sự nghẹn ngào với lời
              dặn dò thân tình của thầy gửi tới các em học sinh thân yêu.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
