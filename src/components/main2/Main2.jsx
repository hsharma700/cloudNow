import React from "react";
import "./Main2.scss";
import Amazon from "../assets/Amazon Logo.png";
import Airbnb from "../assets/Airbnb Logo.png";
import Google from "../assets/Google Logo.png";
import Uber from "../assets/Uber Eats Logo.png";

function Main2() {
  return (
      <div className=".main2Div">
        <div className="main2">
            <div className="div1">
                
                    <h5>Our Client</h5>
                    <p>Several selected clients who already believe in our services</p>
            </div>
            <div className="div2">
               <img src={Google} alt="" />
               <img src={Airbnb} alt="" />
               <img src={Uber} alt="" />
               <img src={Amazon} alt="" />
            </div>
        </div>
      </div>
  );
}

export default Main2;
