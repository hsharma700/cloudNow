import React from "react";
import "./Main6.scss";
import Dot from "../assets/Dot Ornament.png"
function Main6() {
  return (
    <div className="main6">
              <div className="m6shape1"></div>
              <img className="shape2" src={Dot} alt="" />

      <div className="main6Div">
        <div className="div1">
          <h5>Subscribe Newsletter</h5>
          <p>I will update good news and promotion service not spam</p>
        </div>
        <div className="div2">
            <div className="cdiv1">
                <input type="text" placeholder="Enter your email address.."/>
                <button>Contact Now</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Main6;
