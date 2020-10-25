import React from 'react';

import './style.css';
import { Link } from "react-router-dom";
// import { Container } from './styles';

//images
import logo from '../../../images/logo.png'

function Header() {
  return (
    
    <header className="navbar">
      <div className="logoContainer">
        <Link to='/'>
        <img src={logo} alt="Zarpar" className="logo"/>
        </Link>
      </div>
      <div className="navbarLinks">
        <Link to='/' className="navLink">Inicio</Link>
        <Link to='/' className="navLink">Sobre Nós</Link>
        <Link to='/' className="navLink">Serviços</Link>
        <Link to='/' className="navLink">Contato</Link>
      </div>
      <div className="loginButtonBox">
        <Link to='/Login' className="loginButton">Entrar</Link>
      </div>
    </header>
  );
}

export default Header;