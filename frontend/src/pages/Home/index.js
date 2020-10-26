import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './styles.css';

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
      </div>
      <Footer />
    </div>
  );
}

export default Home;
