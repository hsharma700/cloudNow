import React from "react";
import "./Main3.scss";
import BoxSearch from"../assets/box-search 1.png"
import Empty from"../assets/empty-wallet 1.png"
import Code from"../assets/code-1 1.png"
import Char from"../assets/chart-square 1.png"
import Dot from "../assets/Dot Ornament.png";

function Main3() {
  return (
    <div className="main3">
        <div className="shape1"></div>
        <div className="shape2"></div>
        <img id="dot" src={Dot} alt="" />
      <div className="div1">
        <div className="content">
          <h5>How can we help your Business ?</h5>
          <p>
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
        </div>
      </div>
      <div className="div2">
        <div className="div2_c1">
            <div className="box1">
                <div className="shape">
                    <img src={BoxSearch} alt="" />
                </div>
                <h6>Business Idea Planning</h6>
                <p>We present you a proposal and discuss niffty-gritty like</p>
            </div>
            <div className="box1">
            <div className="shape">
                    <img src={Code} alt="" />
                </div>
                <h6>Business Idea Planning</h6>
                <p>We present you a proposal and discuss niffty-gritty like</p>
            </div>
        </div>
        <div className="div2_c2">
        <div className="box1">
            <div className="shape">
                    <img src={Empty} alt="" />
                </div>
                <h6>Business Idea Planning</h6>
                <p>We present you a proposal and discuss niffty-gritty like</p>
            </div>
            <div className="box1">
            <div className="shape">
                    <img src={Char} alt="" />
                </div>
                <h6>Business Idea Planning</h6>
                <p>We present you a proposal and discuss niffty-gritty like</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Main3;
