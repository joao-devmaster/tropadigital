import React from "react";
import "./login.css";
import fundo from "../../assets/image6.png";
import logo from "../../assets/logo.png";

const Login = () => {
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
