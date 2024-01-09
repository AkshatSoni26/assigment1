import React from "react";
import { sideBarData } from "../constants/constant.js";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function SideBar() {
  return (
    <div className="side-bar">
      <Header />
      <div className="menu-side-bar">
        {sideBarData.map((item, index) => {
          return (
            <div className={`item ${item.name == `Payments` ? `active-menu` : null}`} key={index}>
              <span
                className="svg-icon"
                dangerouslySetInnerHTML={{ __html: item.icon }}
              />
              <span className="side-bar-item">{item.name}</span>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default SideBar;
