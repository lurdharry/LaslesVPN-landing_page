import React from "react";
import "../styles/components/header.scss";
import applogo from "../assets/Icon/applogo.svg";

export const Header = () => {
  return (
    <div id="header">
      <div className="logo_title">
        <img src={applogo} alt="logo" />
        <span>LaslesVPN</span>
      </div>
      <div className="id_list">
        <span>About</span>
        <span>Features</span>
        <span>Pricing</span>
        <span>Testimonials</span>
        <span> Help</span>
      </div>
      <div className="signUp">
        <span>Sign In</span>
        <button>Sign Up</button>
      </div>
    </div>
  );
};
