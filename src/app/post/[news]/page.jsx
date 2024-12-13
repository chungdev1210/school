"use client";
import Image from "next/image";
import React from "react";
import anh1 from "../../../assets/images/20_11_1.jpg";
import anh2 from "../../../assets/images/20_11_2.jpg";
import anh3 from "../../../assets/images/20_11_3.jpg";
import anh4 from "../../../assets/images/20_11_4.jpg";
import anh5 from "../../../assets/images/20_11_5.jpg";
import anh6 from "../../../assets/images/anh6.jpg";
import anh7 from "../../../assets/images/anh7.jpg";
import anh8 from "../../../assets/images/anh8.jpg";
import { useParams } from "next/navigation";

export default function Post() {
  const { news } = useParams();
  const id = news.charAt(news.length - 1);

  return (
    <section id="page-post">
      <div className="container py-5">
        {id == "1" && (
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
              phấn khởi ấy, thầy và trò trường Tiểu học Xuân Phương long trọng
              tổ chức Chương trình chào mừng 70 năm thành lập ngành GD ĐT Thủ đô
              và 42 năm ngày Nhà giáo Việt Nam 20-11.
            </p>
            <Image
              src={anh1}
              alt=""
              className="w-100 mb-3"
              height={800}
              style={{ objectFit: "contain" }}
            />
            <p>
              Đến dự với buổi lễ, nhà trường rất vinh dự chào đón bà Lê Thị
              Thanh Huyền – UVBTV Đảng ủy, Chủ tịch MTTQ phường Xuân Phương; bà
              Nguyễn Hằng Nga – Đảng ủy viên, Bí thư Đoàn Thanh niên phường; Các
              ông bà là trưởng các ban ngành đoàn thể trên địa bàn phường Xuân
              Phương; các Nhà giáo lão thành; Đại diện các đơn vị hợp tác với
              nhà trường; Ban đại diện CMHS cùng đông đảo các thầy cô giáo và
              1374 em học sinh.
            </p>
            <Image
              src={anh2}
              alt=""
              className="w-100 mb-3"
              height={800}
              style={{ objectFit: "contain" }}
            />
            <Image
              src={anh3}
              alt=""
              className="w-100 mb-3"
              height={800}
              style={{ objectFit: "contain" }}
            />
            <Image
              src={anh4}
              alt=""
              className="w-100 mb-3"
              height={800}
              style={{ objectFit: "contain" }}
            />
            <Image
              src={anh5}
              alt=""
              className="w-100 mb-3"
              height={800}
              style={{ objectFit: "contain" }}
            />
          </div>
        )}
        {id == "2" && (
          <div className="row">
            <h3 className="mb-3 text-danger">
              TỔ CHỨC CHUYÊN ĐỀ CẤP QUẬN MÔN TIẾNG VIỆT LỚP 5
            </h3>
            <p className="mb-4">
              Được sự phân công của PGD, thực hiện kế hoạch chuyên môn tháng 10,
              hướng tới kỉ niệm 70 năm ngày Giải phóng Thủ đô
              (10/10/1954-10/10/2024) và 70 năm thành lập ngành Giáo dục Thủ đô,
              sáng ngày 03/10/2024, trường Tiểu học Xuân Phương đã tổ chức thành
              công Chuyên đề cấp Quận môn Tiếng Việt: Nói và nghe – Những điểm
              vui chơi lí thú (Tuần 4) do cô giáo Nguyễn Thu Ngân – Giáo viên
              Khối 5 thực hiện.
            </p>
            <p className="mb-4">
              ham dự chuyên đề có PGS-TS Trần Thị Hiền Lương, Chủ biên SGK Tiếng
              Việt, bộ sách Kết nối Tri thức với cuộc sống; Cô giáo Lê Thị Thanh
              Tâm – Phó trưởng phòng GD&ĐT phụ trách Tiểu học; các thầy cô giáo
              là chuyên viên Tổ Tiểu học; các thầy cô giáo là Hiệu trưởng, Phó
              Hiệu trưởng, Tổ trưởng Chuyên môn tổ 5 và đại diện giáo viên các
              nhà trường trên toàn Quận.
            </p>
            <p className="mb-4">
              Tiết học diễn ra sôi nổi, hào hứng. Dưới sự dẫn dắt nhịp nhàng của
              cô giáo, các em học sinh được chủ động bày tỏ ý kiến cá nhân, chủ
              động chuẩn bị các nội dung, chia sẻ theo nhóm. Qua phần thực hiện
              nhiệm vụ được giao, học sinh được phát huy năng lực giải quyết vấn
              đề, năng lực giao tiếp, trình bày, thuyết trình; chủ động, sáng
              tạo trong các hoạt động học tập. Việc ứng dụng công nghệ thông tin
              trong tiết dạy cũng phát huy được hiệu quả tích cực. Nhờ sự linh
              hoạt trong thiết kế, tổ chức các hoạt động mà tiết học sôi nổi,
              học sinh chủ động, tích cực hợp tác và tự tin thể hiện, hoàn thành
              tốt mục tiêu của bài, đồng thời phát huy được năng lực của từng
              học sinh theo đúng mục tiêu của Chương trình GDPT 2018.
            </p>
            <p className="mb-4">
              Sau tiết dạy đã diễn ra Hội nghị Thảo luận. Các đồng chí Lãnh đạo,
              chuyên viên Phòng giáo dục và Đào tạo Quận, Các đồng chí Cán bộ
              quản lý, Tổ trưởng Chuyên môn và các đồng chí giáo viên có mặt đã
              có những trao đổi, chia sẻ liên quan đến tiết dạy.
            </p>
            <p className="mb-4">
              Hội nghị cũng đã được lắng nghe những góp ý, trao đổi của PGS-TS
              Trần Thị Hiền Lương, Chủ biên SGK Tiếng Việt, bộ sách Kết nối Tri
              thức với cuộc sống về hình thức tổ chức tiết dạy cũng như những
              nội dung thiết thực liên quan đến chương trình môn Tiếng Việt lớp
              5.
            </p>
          </div>
        )}
        {id == "3" && (
          <div className="row">
            <h3 className="mb-3 text-danger">
              THAM QUAN TRUY XUẤT NGUỒN GỐC THỰC PHẨM
            </h3>
            <p className="mb-4">
              Căn cứ Công văn số 3123/SGDĐT-CTTT-KHCN ngày 13/9/2024 của Sở Giáo
              dục và Đào tạo Hà Nội về hướng dẫn thực hiện nhiệm vụ giáo dục thể
              chất, hoạt động thể thao và y tế trường học năm học 2024-2025;
              Công văn số 614/GDĐT ngày 18/9/2024 của phòng Giáo dục và Đào tạo
              Quận Nam Từ Liêm về hướng dẫn thực hiện nhiệm vụ giáo dục thể
              chất, hoạt động thể thao và y tế trường học năm học 2024-2025,
              trong đó có nội dung tăng cường kiểm tra, giám sát công tác đảm
              bảo an toàn thực phẩm tại các trường có tổ chức bếp ăn bán trú,
              căng tin, cơ sở cung cấp suất ăn cho học sinh.
            </p>
            <p className="mb-4">
              Thực hiện kế hoạch hợp tác giữa trường Tiểu học Xuân Phương và
              công ty TNHH Hương Việt Sinh (HVS) – đơn vị hiện đang cung cấp
              suất ăn Bán trú cho nhà trường, ngày 21/9/2024, Ban Giám hiệu, các
              thầy cô giáo đại diện cho các tổ chuyên môn, trưởng các đoàn thể
              trong nhà trường cùng Đại diện Ban phụ huynh các lớp đã tham gia
              chuyến đi thực tế tham quan truy xuất nguồn gốc thực phẩm cung cấp
              cho bữa ăn bán trú của học sinh.
            </p>
            <p className="mb-4">
              Trang trại trồng rau của công ty được đặt ở Bắc Ninh với diện tích
              gần 20 ha, trồng các loại rau theo tiêu chuẩn Vietgap và hệ thống
              nhà xưởng chế biến thực phẩm cung cấp cho các trường học trên địa
              bàn TP Hà Nội. Trang trại trồng rau được chia làm những khu trồng
              từng loại rau riêng biệt, có loại trồng ngoài trời như rau ngót,
              rau muống, mùng tơi, các loại cà và những khu nhà lưới trồng các
              loại rau ăn lá như cải xanh, cải ngọt…
            </p>
            <p className="mb-4">
              Do chịu ảnh hưởng nặng nề từ cơn bão số 3, các khu nhà lưới, nhà
              màng bị thiệt hại nặng, đoàn không nhìn thấy hết những luống rau
              xanh mát nhưng vẫn thấy được sự đồ sộ, quy mô trong cách bố trí.
              Hệ thống tưới rau tự động bằng nước sạch, quy trình chăm sóc được
              công nhân thực hiện nghiêm túc cùng với sự giám sát của các kỹ sư
              làm chúng tôi cảm thấy yên tâm rất nhiều.
            </p>
            <p className="mb-4">
              Sau khi tham quan trang trại rau, chúng tôi tiếp tục đi tham quan
              khu xưởng làm giá đỗ, khu xưởng làm đậu phụ, làm bánh phở và bún
              tươi. Công ty HVS sử dụng các hệ thống máy móc tự động nên các sản
              phẩm làm ra sạch sẽ, thơm ngon. Khu vực sản xuất đậu phụ thơm ngậy
              mùi sữa đậu, các bác công nhân với trang phục bảo hộ sạch sẽ thao
              tác nhịp nhàng để tạo ra thành phẩm. Dây chuyền sản xuất bún tạo
              ra những sợi bún mềm mại, thơm ngon làm các bữa ăn của các con
              thêm phần phong phú.
            </p>
            <p className="mb-4">
              Chúng tôi còn đi tham quan các khu chế biến giò chả, xúc xích, chế
              biến suất ăn… chỗ nào cũng sạch sẽ, ngăn nắp, gọn gàng. Nhân viên
              công ty rất nhiệt tình, thân thiện, giải thích kỹ càng những câu
              hỏi của chúng tôi về quy trình chế biến thực phẩm.
            </p>
            <p className="mb-4">
              Sau buổi tham quan chúng tôi đã có cuộc trao đổi với Chủ tịch, Ban
              lãnh đạo Công ty HVS về những vấn đề mà phụ huynh quan tâm như thu
              hoạch rau, bảo quản, vận chuyển đến các trường thế nào, cung cấp
              thực phẩm tươi sống ra sao….Chúng tôi cũng được lắng nghe những
              lời chia sẻ rất tâm huyết từ bà Vũ Lan Sinh – Chủ tịch Công ty về
              những vấn đề liên quan đến việc sản xuất, chế biến và đảm bảo dinh
              dưỡng, đảm bảo an toàn cho bữa ăn của các em HS.
            </p>
            <p className="mb-4">
              Đại điện PHHS cũng đã có những góp ý, đánh giá, động viên rất chân
              tình, cởi mở sau khi tham quan trải nghiệm và hi vọng sẽ có thêm
              một buổi tham quan trang trại nuôi gia súc và khu vực mổ, chế
              biến.
            </p>
            <Image
              src={anh6}
              alt=""
              className="w-100 mb-3"
              height={800}
              style={{ objectFit: "contain" }}
            />
          </div>
        )}
        {id == "4" && (
          <div className="row">
            <h3 className="mb-3 text-danger">TRUNG THU SẺ CHIA</h3>
            <p className="mb-4">
              Mùa Trung thu năm nay, thay vì những lễ hội tưng bừng, các hoạt
              động được tổ chức giản dị, tiết kiệm, tràn đầy ý nghĩa nhân văn.
            </p>
            <p className="mb-4">
              Ban Giám hiệu trường Tiểu học Xuân Phương cũng quyết định dừng tổ
              chức chương trình &quot;Vui Trung thu&quot; cho học sinh toàn
              trường vào ngày 16/9 như kế hoạch đã đề ra trước đó. Toàn bộ kinh
              phí tổ chức chương trình và kinh phí các lớp ủng hộ đã được gửi
              đến người dân đang bị ảnh hưởng bởi lũ lụt thông qua Ủy ban Mặt
              trận Tổ quốc Việt Nam quận Nam Từ Liêm (Tính đến hết ngày
              17/9/2024, tập thể CBGV_NV, Phụ huynh và các em học sinh trong
              toàn trường ủng hộ 100.115.000 đồng).
            </p>
            <p className="mb-4">
              Tại các lớp học, Các thầy cô giáo và BPH đã tổ chức những hoạt
              động phù hợp cho học sinh lớp mình. Với sự hướng dẫn tận tình của
              các thầy cô giáo, các em học sinh đã bắt tay vào cắt dán, tô vẽ và
              lắp ráp những món đồ chơi Trung thu; vẽ các sản phẩm sinh động và
              nhiều màu sắc bằng bột màu. Sự nhiệt tình và sáng tạo của các em
              không chỉ tạo ra những món quà độc đáo mà còn lan tỏa thông điệp
              về sự quan tâm, sẻ chia, tình yêu thương đến cộng đồng.
            </p>
            <Image
              src={anh7}
              alt=""
              className="w-100 mb-3"
              height={800}
              style={{ objectFit: "contain" }}
            />
            <p className="mb-4">
              Bên cạnh đó, nhà trường cùng với Ban đại diện CMHS đã trao những
              phần quà nhỏ đến 22 em học sinh có hoàn cảnh khó khăn trong trường
              để Trung thu của các em thêm phần ấm áp.
            </p>
            <Image
              src={anh8}
              alt=""
              className="w-100 mb-3"
              height={800}
              style={{ objectFit: "contain" }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
