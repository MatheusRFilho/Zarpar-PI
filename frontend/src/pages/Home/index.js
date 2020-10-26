import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './styles.css';

const topicsLogo =
  'https://i.picsum.photos/id/599/200/200.jpg?hmac=2WLKs3sxIsaEQ-6WZaa6YMxgl6ZC4cNnid0aqupm2is';

function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <section className="presentationBanner">
          <div>
            <h1>Quer usar o Zarpar?</h1>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              voluptas neque itaque in cumque dignissimos
            </p>
          </div>
          <div>
            <Link to="/Signup" className="signUpButton">
              Sou Empresa
            </Link>
            <Link to="/Signup" className="signUpButtonOutline">
              Sou Autônomo
            </Link>
          </div>
        </section>
        <hr />
        <section className="aboutUs">
          <input className="searchInput" placeholder="Pesquisar" />
          <h1 className="titleAboutUs">Sobre nós</h1>
          <div className="topics">
            <div className="topic">
              <img src={topicsLogo} alt="Imagem do tópico" />
              <h4>Lorem</h4>
            </div>
            <div className="topic">
              <img src={topicsLogo} alt="Imagem do tópico" />
              <h4>Lorem</h4>
            </div>
            <div className="topic">
              <img src={topicsLogo} alt="Imagem do tópico" />
              <h4>Lorem</h4>
            </div>
            <div className="topic">
              <img src={topicsLogo} alt="Imagem do tópico" />
              <h4>Lorem</h4>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
