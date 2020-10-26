import React from 'react';

import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin } from 'react-feather';

import './style.css';
// import { Container } from './styles';

// images
import logo from '../../../images/logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="contactContainer">
        <p className="contactTitle">Contato</p>
        <p className="contactDescription">contato@zarpar.com.br</p>
        <p className="contactDescription">Rua Avenida, 000 - Cidade/UF</p>
      </div>
      <div className="middleContainer">
        <img src={logo} alt="Zarpar" className="logoFooter" />
        <div className="navbarLinksFooter">
          <Link to="/" className="navLinkFooter">
            Inicio
          </Link>
          <Link to="/" className="navLinkFooter">
            Sobre Nós
          </Link>
          <Link to="/" className="navLinkFooter">
            Contato
          </Link>
        </div>
      </div>
      <div className="socialsContainer">
        <p className="socialsTitle">Redes Sociais</p>
        <ul className="socialsList">
          <li>
            <Instagram color="#293845" size={35} />
          </li>
          <li>
            <Facebook color="#293845" size={35} />
          </li>
          <li>
            <Linkedin color="#293845" size={35} />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
