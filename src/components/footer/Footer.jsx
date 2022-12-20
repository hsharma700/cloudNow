import React from "react";
import "./Footer.scss";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
function Footer() {
  return (
    <div className="footer">
        <hr />
      <div className="footerDiv">
        <div className="div1">
          <h5>
            A+&nbsp;<span>Studio</span>
          </h5>
          <div className="para">
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </div>
          <div className="icons">
            <BsFacebook id="i1" />
            <AiFillTwitterCircle id="i2" />
            <AiFillLinkedin id="i3" />
          </div>
        </div>
        <div className="div2">
          <div className="cDiv1">
            <h5>What We Do</h5>
            <div className="desc">
              <h6>Web Design </h6>
              <h6>App Design</h6>
              <h6>Social Media Manage</h6>
              <h6>Market Analysis Project</h6>
            </div>
          </div>
          <div className="cDiv1">
            <h5>Company</h5>
            <div className="desc">
              <h6>About Us</h6>
              <h6>Career</h6>
              <h6>Become Investor</h6>
            </div>
          </div>
          <div className="cDiv1">
            <h5>Support</h5>
            <div className="desc">
              <h6>FAQ</h6>
              <h6>Policy</h6>
              <h6>Business</h6>
            </div>
          </div>
          <div className="cDiv1">
            <h5>Contact</h5>
            <div className="desc">
              <h6>WhatsApp</h6>
              <h6>Support 24</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="copyRight">
      Copyright © 2022/2023 Himanshu Sharma
      </div>
    </div>
  );
}

export default Footer;
