import React from "react";
import "./button.css";

const Button = ({ title, icon }) => {
  return (
    <div>
      <div className="button-menu">
        {icon}
        <h1 className="title-category">{title}</h1>
      </div>
    </div>
  );
};

export default Button;
