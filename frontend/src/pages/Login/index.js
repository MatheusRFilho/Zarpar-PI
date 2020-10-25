import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header/index.js';
import Footer from '../components/Footer/index.js';

//images
import noImage from '../../images/noImage.png'

function Login() {
  return (
    <div>
      <Header />
      <main style={{marginTop:120}}>
          <div>
            <img src={noImage} alt="Zarpar" className="logo"/>
          </div>
          <div>
              <h1>Login</h1>
              <form>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Senha:
                    <input type="password" name="password" />
                </label>
                <Link to="/"><p>Esqueceu a senha?</p></Link>
                <input type="submit" value="Enviar" />
            </form>
            <Link to="/"><p>Ainda não tem um Cadastro? a gente já resolve isso</p></Link>
                              
          </div>
      </main>
      <Footer />
    </div>
  );
}

export default Login;