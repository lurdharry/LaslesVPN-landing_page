import React from "react";
import { features } from "../data/details";
import "../styles//components/list.scss";

export const List = () => {
  return (
    <div id="list">
      {features.map((item, index) => {
        return (
          <div className="item" key={index}>
            <div className="imgBox" />
            <span>{item.title}</span>
          </div>
        );
      })}
    </div>
  );
};
