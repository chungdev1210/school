import React from "react";
import location from "../../assets/images/location.png";
import phone from "../../assets/images/phone.png";
import worldwide from "../../assets/images/worldwide.png";
import mail from "../../assets/images/mail.png";
import Image from "next/image";

export default function Contacts() {
  return (
    <section id="page-contacts">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h3 className="mb-4">Liên hệ</h3>
            <h4 className="mb-4 page-title">Trường Tiểu học Xuân Phương</h4>
            <p className="page-desc">
              Trường Tiểu học Xuân Phương được tách ra từ trường Tiểu học Phương
              Canh. Trường được xây dựng trong khuôn viên rộng gần 9000 m2 thuộc
              khu đô thị Viglacera thuộc Tổ dân phố số 7 phường Xuân Phương –
              quận Nam Từ Liêm- Hà Nội
            </p>
            <div className="footer-item d-flex align-items-center mb-3">
              <Image src={location} alt="" width={20} />
              <span className="ms-2">
                Địa chỉ: Khu đô thị mới, Tổ dân phố số 7, P. Xuân Phương, Q. Nam
                Từ Liêm, TP. Hà Nội
              </span>
            </div>
            <div className="footer-item d-flex align-items-center gap-3 mb-3">
              <div className="d-flex align-items-center">
                <Image src={phone} alt="" width={20} />
                <span className="ms-2">0988 995 259</span>
              </div>
              <div className="d-flex align-items-center">
                <Image src={phone} alt="" width={20} />
                <span className="ms-2">Phone: 0908 566 633</span>
              </div>
            </div>
            <div className="footer-item d-flex align-items-center gap-3 mb-3">
              <div className="d-flex align-items-center">
                <Image src={worldwide} alt="" width={20} />
                <span className="ms-2">tieuhocxuanphuong.edu.vn</span>
              </div>
              <div className="d-flex align-items-center">
                <Image src={mail} alt="" width={20} />
                <span className="ms-2"> c1xuanphuong-ntl@hanoiedu.vn</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29793.288210029477!2d105.738731!3d21.026242!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345486fa234f13%3A0xe2e72ccc535ecf00!2zVHLGsOG7nW5nIFRp4buDdSBI4buNYyBYdcOibiBQaMawxqFuZw!5e0!3m2!1svi!2sus!4v1733839088143!5m2!1svi!2sus"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
