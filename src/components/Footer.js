import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        <ul className="blockLeft">
          <li>
            <img
              src="img/logo.png"
              alt="logo"
              style={{ width: "129px", height: "41px" }}
            />
          </li>
          <li>
            <img
              src="img/faceBook.png"
              alg=""
              style={{ width: "19px", height: "26px" }}
            />
            <img
              src="img/instagram.png"
              alt=""
              style={{ width: "25px", height: "26px" }}
            />
            <img
              src="img/twitter.png"
              style={{ width: "25px", height: "26px" }}
            />
          </li>
        </ul>
        <div className="blockRight">
          <ul>
            <li>ABOUT</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Write for Us</li>
          </ul>
          <ul>
            <li>CONTACT</li>
            <li>Email hi@thalby.com</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <p style={{ textAlign: "center", color: "#fff" }}>Thalby LLC © 2021</p>
    </div>
  );
};

export default Footer;
