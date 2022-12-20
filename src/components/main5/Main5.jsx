import React from "react";
import "./Main5.scss";
import ImgD1 from "../assets/img5.png"
import Dot from "../assets/Dot Ornament.png"
import Img1 from "../assets/main5img2.png";
import Img2 from "../assets/main5img3.png";
import Img3 from "../assets/main5img4.png";
import Img4 from "../assets/main5img5.png";
import Img5 from "../assets/main5img6.png";
import Img6 from "../assets/main5img7.png";
import Img7 from "../assets/main5img8.png";
import Img8 from "../assets/main5img9.png";

function Main5() {
  return (
    <div className="main5">
      <div className="div1">
        <h5>What our happy client say</h5>
        <p>Several selected clients, who already believe in our service.</p>
      </div>
      <div className="div2">
        <div className="cdiv1">
            <div className="shape1"></div>
            <img className="shape2" src={Dot} alt="" />
            <img src={ImgD1} alt="" />
        </div>
        <div className="cdiv2">
          <h5>Matthew Paul</h5>
          <p>
            Perfect, very good job! Thank you for the amazing design and work.
            Really impressed with the high quality and quick turnaround time.
            Highly recommend.
          </p>
          <div className="dots">
            <div style={{backgroundColor:'blue'}} className="dot1"></div>
            <div className="dot1"></div>
            <div className="dot1"></div>
            <div className="dot1"></div>
            <div className="dot1"></div>
          </div>
        </div>
        <div className="cdiv3">
            <div className="shape3"></div>
            <img className="img1" src={Img1} alt="" />
            <img className="imgA img2" src={Img2} alt="" />
            <img className="imgA img3" src={Img3} alt="" />
            <img className="imgA img4" src={Img4} alt="" />
            <img className="imgA img5" src={Img5} alt="" />
            <img className="imgA img6" src={Img6} alt="" />
            <img className="imgA img7" src={Img7} alt="" />
            <img className="imgA img8" src={Img8} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Main5;
