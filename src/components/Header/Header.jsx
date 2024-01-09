import React from "react";
import { dropdown, notification, question_circle, search_icon } from "../constants/constant";

function Header() {
    return (
        <div className="main-header">

            <div className="header-parts">
                <div>Payments</div>
                <div className="header-parts-subpart">
                    <div
                        dangerouslySetInnerHTML={{ __html: question_circle }}
                        style={{
                            width: "14px",
                            height: "14px",
                        }}
                    />
                    <span>How to use</span  >
                </div>
            </div>

            <div className="header-parts">
                <input placeholder={`🔍 Search features, tutorials, etc.`} />
            </div>

            <div className="horizontal" >
                <div dangerouslySetInnerHTML={{ __html: notification }} style={{
                    width: "40px",
                    height: '40px',
                }} />
                <div dangerouslySetInnerHTML={{ __html: dropdown }} style={{
                    width: "40px",
                    height: '40px',
                }}/>
            </div>

        </div>
    );
}

export default Header;
