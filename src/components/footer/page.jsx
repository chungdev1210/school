import Image from "next/image";
import React from "react";
import logoFooter from "../../assets/images/logo-footer.png";
import location from "../../assets/images/location.png";
import phone from "../../assets/images/phone.png";
import worldwide from "../../assets/images/worldwide.png";
import mail from "../../assets/images/mail.png";

export default function Footer() {
  return (
    <footer id="footer">
      <hr className="m-0" />
      <div className="container">
        <div className="footer-bottom d-md-flex align-items-center flex-column py-4">
          <Image src={logoFooter} alt="" width={100} />
          <p className="text-uppercase mt-2 title-footer">
            Trường Tiểu học Xuân Phương
          </p>
          <div className="footer-item d-flex align-items-center mb-3">
            <Image src={location} alt="" width={20} />
            <span>
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
              <span className="ms-2">phieuphieux@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
