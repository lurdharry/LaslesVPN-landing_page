import React from "react";
import "../styles/section/plan.scss";
import logo from "../assets/Icon/pack.svg";
import { plans } from "../data/details";

export const PlanSection = () => {
  return (
    <section id="plan">
      <div className="text-holder">
        <span className="choose">Choose Your Plan</span>
        <span className="detail">
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </span>
      </div>
      <div className="item-holder">
        {plans.map((item, index) => (
          <div className="package-item">
            <img src={logo} alt="" />
            <span className="name">{item.name}</span>
            <div className="list-container">
              {item.list.map(item => (
                <div className="bene">
                  <div className="icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="bottom">
              <span>{item.time}</span>
              <button>Select</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
