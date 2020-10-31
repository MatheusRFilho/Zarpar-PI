import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './style.css';

import image from '../../images/noImage.png';


function Register2() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="bannerContainer">
            <img className="banner" src={image} alt="banner"/>
        </div>
       <div className="RegisterformContainer">
           <h1 className="registertitle">Cadastro</h1>
        </div>
        <form className="registerForm">
            <input
              type="text"
              name="name"
              className="formInput"
              placeholder="Nome Fantasia"
            />
            <br />
            <input
              type="text"
              name="cpf"
              className="formInput"
              placeholder="CPF/CNPJ"
            />
            <br />
            <input
              type="email"
              name="email"
              className="formInput"
              placeholder="E-mail"
            />
            <br />
            <input
              type="password"
              name="password"
              className="formInput"
              placeholder="Senha"
            />
            <br />
            <br />
            <hr className="line"/>
            <input
              type="text"
              name="celular"
              className="formInput"
              placeholder="Celular"
            />
            <br />
            <input
              type="text"
              name="celular2"
              className="formInput"
              placeholder="Celular (Emergência)"
            />
            <div className="continueButtonContainer">
              <input type="submit" value="Continuar" className="continueButton" />
            </div>
        </form>
        <Link to="/Login" className="textLinkLogin">
            <p>Era pra ser Login? Então entra aqui para fazer</p>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Register2;
