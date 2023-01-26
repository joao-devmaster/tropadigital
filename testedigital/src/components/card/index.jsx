import React, { useState } from "react";
import "./card.css";

const Card = ({ image, title, subtitle }) => {
  return (
    <div className="indivual-card">
      <div className="container-card">
        <img
          className="imagem-indivudual-card"
          src={image}
          alt="imagem do card "
        />
        <div className="text-contents">
          <p className="title">{title}</p>
          <p className="subtitle">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
