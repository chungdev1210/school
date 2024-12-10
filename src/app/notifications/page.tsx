import React from "react";

export default function Notifications() {
  return (
    <section id="page-notifications">
      <div className="container py-5">
        <div className="row">
          <table className="table">
            <thead className="table-light">
              <tr>
                <th scope="col">STT</th>
                <th scope="col">TIÊU ĐỀ</th>
                <th scope="col">NGÀY ĐĂNG</th>
                <th scope="col">CHI TIẾT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>THÔNG BÁO TUYỂN DỤNG GIÁO VIÊN, NHÂN VIÊN HỢP ĐỒNG</td>
                <td>26/08/2024</td>
                <td>
                  <button className="btn btn-danger btn-custom" type="button">
                    Chi tiết
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>
                  HÂN HOAN CHÀO ĐÓN CÁC CON HỌC SINH LỚP 1 NĂM HỌC 2024-2025
                </td>
                <td>30/07/2024</td>
                <td>
                  <button className="btn btn-danger btn-custom" type="button">
                    Chi tiết
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>TUYỂN SINH TRỰC TUYẾN NĂM HỌC 2024-2025</td>
                <td>01/07/2024</td>
                <td>
                  <button className="btn btn-danger btn-custom" type="button">
                    Chi tiết
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>KẾ HOẠCH TUYỂN SINH LỚP 1 – NĂM HỌC 2024 – 2025</td>
                <td> 07/06/2024</td>
                <td>
                  <button className="btn btn-danger btn-custom" type="button">
                    Chi tiết
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>
                  LỄ RA TRƯỜNG VÀ CHIA TAY HỌC SINH LỚP 5 – NĂM HỌC 2023-2024
                </td>
                <td>29/05/2024</td>
                <td>
                  <button className="btn btn-danger btn-custom" type="button">
                    Chi tiết
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>GIAO LƯU-TRẢI NGHIỆM “EM LÀM HỌC SINH LỚP 1</td>
                <td>22/05/2024</td>
                <td>
                  <button className="btn btn-danger btn-custom" type="button">
                    Chi tiết
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>NGÀY HỘI VĂN HÓA THỂ THAO, NĂM HỌC 2023 – 2024</td>
                <td>26/03/2024</td>
                <td>
                  <button className="btn btn-danger btn-custom" type="button">
                    Chi tiết
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
