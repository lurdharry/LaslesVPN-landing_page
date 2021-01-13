import React, { useState } from "react";

import "../styles/components/list.scss";
import { data } from "../data/details";

export const Usage = () => {
  const [details] = useState(data);
  return (
    <div id="usage">
      {details.map((item, index) => (
        <div className="item">
          <img src={item.image} alt={item.alt} />
          <div className="text_list">
            <span className="num">{item.title}</span>
            <span className="name">{item.subtitle}</span>
          </div>
          <div className={index > 1 ? "no" : "divider"} />
        </div>
      ))}
    </div>
  );
};
