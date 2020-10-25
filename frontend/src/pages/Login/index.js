import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header/index.js';
import Footer from '../components/Footer/index.js';

//images
import noImage from '../../images/noImage.png';

import './style.css';

function Login() {
  return (
    <div>
      <Header />
      <main style={{marginTop:120}} className="content">
          <div className="imageContainer">
            <img src={noImage} alt="Zarpar" className="image"/>
          </div>
          <div className="formContainer">
              <h1 className="formTitle">Login</h1>
              <form className="form">
                <input type="text" name="user" className="formInput" placeholder="CPF/CNPJ" />
                <br />
                <input type="password" name="password" className="formInput" placeholder="Senha" />
                <div className="textLinkPasswordContainer">
                    <Link to="/" className="textLinkPassword"><p>Esqueceu a senha?</p></Link>
                </div>
                <div className="sendButtonContainer">
                    <input type="submit" value="Entrar" className="sendButton"/>
                </div>
            </form>
            <Link to="/" className="textLinkRegister"><p>Ainda não tem um Cadastro? a gente já resolve isso</p></Link>
                              
          </div>
      </main>
      <Footer />
    </div>
  );
}

export default Login;