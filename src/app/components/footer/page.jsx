import React from "react";

export default function Footer() {
  return (
    <footer id="footer">
      <hr className="m-0" />
      <div className="container">
        <div className="footer-bottom d-md-flex justify-content-between py-4">
          <p className=" mb-0">© 2024 HVAC - All rights reserved</p>
          <p className=" mb-0">
            HTML Templates by:{" "}
            <a
              href="https://templatesjungle.com/"
              target="_blank"
              className="text-decoration-underline fw-semibold "
            >
              {" "}
              TemplatesJungle
            </a>{" "}
            Distributed by:{" "}
            <a
              href="https://themewagon.com"
              target="blank"
              className="text-decoration-underline fw-semibold"
            >
              ThemeWagon
            </a>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
