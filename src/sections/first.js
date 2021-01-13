import React from "react";
import { Header } from "../Components/header";
import "../styles/section/first.scss";
import main from "../assets/images/main.png";
import main2 from "../assets/images/Illust.png";
import { Usage } from "../Components/usage";
import { List } from "../Components/features";

export const First = () => {
  return (
    <section id="first">
      <Header />
      <div className="content">
        <div>
          <div className="topbox">
            Want anything to be easy with
            <span className="title"> LaslesVPN.</span>
          </div>

          <div className="desc">
            Provide a network for all your needs with ease and fun using
            LaslesVPN discover interesting features from us.
          </div>
          <button>Get Started</button>
        </div>
        <img src={main} alt="sjs" />
      </div>
      <Usage />
      <div className="content2">
        <img src={main2} alt="jjj" className="img2" />
        <div>
          <div className="textBox">
            <span>We Provide Many Features You Can Use</span>
          </div>
          <div className="desc">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </div>
          <List />
        </div>
      </div>
    </section>
  );
};
