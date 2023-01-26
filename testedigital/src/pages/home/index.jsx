import React, { useState } from "react";
import "./home.css";
import logo from "../../assets/logo.png";
import Button from "../../components/buttons";
import Card from "../../components/card";
import { FaRegListAlt } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";

import cardimage from "../../assets/image7.png";

const Home = () => {
  const [user] = useState("Usuário");
  const [title] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesettin..."
  );
  const [subtitle] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesettin."
  );

  return (
    <div className="containerHome">
      <div className="menu">
        <img className="logo" src={logo} alt="logo da empresa" />

        <div className="options">
          <a href="/">
            <div className="button">
              <FaSignal color="orange" />
              <h1 className="titleblack-category"> Inicio</h1>
            </div>
          </a>
          <a href="/">
            <Button title="Contatos" icon={<FaRegListAlt />} />
          </a>
          <a href="/">
            <Button title="Relatórios" icon={<FaRegListAlt />} />
          </a>
          <a href="/">
            <Button title="Contatos" icon={<FaRegListAlt />} />
          </a>
          <a href="/">
            <Button title="Contatos" icon={<FaRegListAlt />} />
          </a>
          <a href="/">
            <Button title="Contatos" icon={<FaRegListAlt />} />
          </a>
        </div>
      </div>
      <div className="complete-cars-section">
        <div className="title-home">
          {" "}
          Olá <b>{user}</b>
        </div>
        <div className="container-cards">
          <Card title={title} subtitle={subtitle} image={cardimage} />
          <Card title={title} subtitle={subtitle} image={cardimage} />
          <Card title={title} subtitle={subtitle} image={cardimage} />
          <Card title={title} subtitle={subtitle} image={cardimage} />
          <Card title={title} subtitle={subtitle} image={cardimage} />
          <Card title={title} subtitle={subtitle} image={cardimage} />
        </div>
      </div>
    </div>
  );
};

export default Home;
