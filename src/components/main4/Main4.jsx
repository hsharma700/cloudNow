import React from "react";
import "./Main4.scss";

function Main4() {
  return (
    <div className="main4">
      <div className="div1">
      <div className="shape1"></div>

        <div className="videoPlayer">
        <iframe
          width="600"
          height="450"
          src="https://www.youtube.com/embed/P90X9xxm1gc?start=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        </div>
      </div>
      <div className="div2">
      <div className="shape2"></div>

        <h5>Great Digital Product Agency since 2016 </h5>
        <p>
          Our Business Plan is a written document describing a company's core
          business activites, Objectives, and how it plans to achieve its goals.
          Our goal is to provide our client high quality Product with modern
          idea accordingly their budgets and according thir reuirements.
        </p>
      </div>
    </div>
  );
}

export default Main4;
