import React from "react";
import { backdrop_arrow } from "../constants/constant";
import Card from "./Card";
import OrderSearch from "./OrderSearch";
import Filter from "./Filter";
import Buttons from "./Buttons";

function Main() {
  const cards = [
    {
      name: "Online orders",
      number: "231",
    },
    {
      name: "Amount received",
      number: "₹23,92,312.19",
    },
  ];

  const list = {
    order_id:`#281209`,
    order_date:`7 July, 2023`,
    order_amount: `₹1,278.23`,
    fee: `₹22`
}

  return (
    <div style={{ padding: "32px" }}>
      <div className="overview-layout">
        <div className="overview">Overview</div>
        <div className="last-month-layout">
          <span className="last-month">Last Month</span>
          <span
            className="last-month-arrow"
            dangerouslySetInnerHTML={{ __html: backdrop_arrow }}
          />
        </div>
      </div>

      <div className="cards">
        {cards.map((item, key) => {
          return <Card head={item.name} num={item.number} />;
        })}
      </div>

      <div className="transition">Transactions | This Month</div>

      <div className="order-details">
        <OrderSearch />
        <Filter />
        
        <div className="Filter" style={{flexDirection:'column', gap:'10px'}}>
            {
                [...Array(15)].map(
                    (i) => {
                        return(
                            <div style={{display:'flex', flexDirection:'column', width:'100%',gap:"8px", }}>
                            <div style={{width:'100%', display:'flex', justifyContent:'space-between'}}>
                                <div className="order_id">{list.order_id}</div>
                                <div>{list.order_date}</div>
                                <div>{list.order_amount}</div>
                                <div>{list.fee}</div>
                            </div>
                            <hr style={{color:'black',opacity:'0.4' }} />
                            </div>
                        )
                    }
                )
            }
        </div>

        <Buttons />

      </div>
    </div>
  );
}

export default Main;
