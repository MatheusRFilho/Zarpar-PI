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
              name="logradouro"
              className="formInput"
              placeholder="Logradouro"
            />
            <br />
            <input
              type="text"
              name="bairro"
              className="formInput"
              placeholder="Bairro"
            />
            <br />
            <input
              type="text"
              name="cidade"
              className="formInput"
              placeholder="Cidade"
            />
            <br />
            <input
              type="password"
              name="password"
              className="formInput"
              placeholder="Senha"
            />
            <br />
            <input
              type="text"
              name="numero"
              className="formInputHalf"
              placeholder="Número"
            />
            <select name="select" className="formInputHalfSelect">
              <option value="uf" disabled selected hidden>UF</option> 
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
            </select>
            <div className="continueButtonContainer">
              <Link className="backButton" to='/Register'>Voltar</Link>
              <input type="submit" value="Finalizar" className="EndButton" />
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
