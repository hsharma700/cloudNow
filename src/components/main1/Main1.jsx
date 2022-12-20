import React from "react";
import "./Main1.scss";
import Image8 from "../assets/image 8.png";
import Dot from "../assets/Dot Ornament.png";
function Main1() {
  return (
    <div className="main1Div">
      <div className="div1">
        <img src={Dot} alt="" />
        <div className="desc">
          <h5>A Digital Product Agency</h5>
          <p>
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>

          <button className="btn1">Contact Now</button>
        </div>
      </div>
      <div className="div2">
        <div className="shape1"></div>
        <div className="image">
          <img src={Image8} alt="" />
        </div>
        <div className="shape2"></div>
      </div>
    </div>
  );
}

export default Main1;
