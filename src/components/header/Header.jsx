import React, { useState } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./Header.scss";

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="headerMain">
      <div className="header">
        <div className="titleDiv">
          {" "}
          <span>
            A+&nbsp;<span style={{ fontWeight: 400 }}>Studio</span>
          </span>
        </div>
        <div className="navDiv">
          <nav>
            <a href="#">Home</a>
            <a href="#">What We Do</a>
            <a href="#">Service</a>
            <a href="#">Project</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </div>
    </div>
  );
}
