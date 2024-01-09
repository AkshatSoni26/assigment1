import React from "react";
import { wallet } from "../constants/constant";

export default function Footer() {
  return (
    <div className="footer-side-bar">
      <div dangerouslySetInnerHTML={{__html:wallet}} className="footer-wallet" style={{
        width: '24px',
        height: '24px',
      }}/>
      <div className="footer-wallet-balance-layout">
        <div className="footer-wallet-heading">Available credits</div>
        <div className="footer-wallet-balance">222.10</div>
      </div>
    </div>
  );
}
