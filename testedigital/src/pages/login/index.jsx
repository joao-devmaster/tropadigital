import React from "react";
import "./login.css";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

import fundo from "../../assets/image6.png";
import logo from "../../assets/logo.png";
import retangle from "../../assets/Rectangle3.png";

const Login = () => {
  const [showElement, setShowElement] = useState(true);
  const showOrHide = () => setShowElement(false);

  return (
    <>
      <div className="complete-login">
        <div className="container-formulario">
          <div className="form">
            <img className="image-logo" src={logo} alt="" />
            <div className="formulario-complete">
              <p>
                Bem Vindo ao <strong className="painel-name">painel</strong>
              </p>
              <input className="imputs" placeholder="Digite seu email"></input>
              <input className="imputs" placeholder="Digite sua senha"></input>
              <button type="submit" className="button-acessar">
                <a href="/home">Acessar</a>
              </button>
            </div>
          </div>
          <div className="imageForm">
            <img className="fundoblack" src={fundo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
