import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './styles.css';

const topicsLogo =
  'https://i.picsum.photos/id/599/200/200.jpg?hmac=2WLKs3sxIsaEQ-6WZaa6YMxgl6ZC4cNnid0aqupm2is';

const descImg =
  'https://i.picsum.photos/id/1047/400/200.jpg?hmac=Bj61XAq4JO4CibUVrxeSiIIbH4ZZtoDIWSkxNlXUvsQ';

const plan1 =
  'https://i.picsum.photos/id/391/200/300.jpg?hmac=3xP-y2PRN2E0__aPOCp1sja7XrimKgLQAMiSaNd0Cko';
const plan2 =
  'https://i.picsum.photos/id/203/200/300.jpg?hmac=mJaqsySlyEjr8fLBHytyVCUyqlfPSxqXePXEIhZZi_Y';
const plan3 =
  'https://i.picsum.photos/id/48/200/300.jpg?hmac=p1L57uKWk-HOLxkodQjf0Q4BpaqgWYhEgWyGaeIpG_k';

const contact =
  'https://i.picsum.photos/id/825/600/400.jpg?hmac=wpC-fUCy8oHcTKEfwBk0rFSWtQGPCFqcmG0atdbBBbU';

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
        <hr className="divisor" />
        <section className="aboutUs">
          <input className="searchInput" placeholder="Pesquisar" />
          <h1 className="containerTitle">Sobre nós</h1>
          <div className="topics">
            <div className="topic">
              <img src={topicsLogo} alt="Imagem do tópico1" />
              <h4>Lorem</h4>
            </div>
            <div className="topic">
              <img src={topicsLogo} alt="Imagem do tópico2" />
              <h4>Lorem</h4>
            </div>
            <div className="topic">
              <img src={topicsLogo} alt="Imagem do tópico3" />
              <h4>Lorem</h4>
            </div>
            <div className="topic">
              <img src={topicsLogo} alt="Imagem do tópico4" />
              <h4>Lorem</h4>
            </div>
          </div>
        </section>
        <hr className="divisor" />
        <section className="descriptionContainer">
          <section className="left-desc">
            <p className="desc-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iste
              nostrum maxime? Unde libero tenetur ut architecto, voluptas dolore
              inventore debitis nobis explicabo optio accusamus iure incidunt
              repellat, assumenda ipsa.
            </p>
            <img src={descImg} alt="Description" />
          </section>
          <section className="right-desc">
            <img src={descImg} alt="Description" />
            <p className="desc-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iste
              nostrum maxime? Unde libero tenetur ut architecto, voluptas dolore
              inventore debitis nobis explicabo optio accusamus iure incidunt
              repellat, assumenda ipsa.
            </p>
          </section>
        </section>
        <hr className="divisor" />
        <section className="plansContainer">
          <h1 className="containerTitle">Planos</h1>
          <section className="plans">
            <img src={plan1} alt="Plan 1" className="plan-img" />
            <img src={plan2} alt="Plan 2" className="plan-img plan-principal" />
            <img src={plan3} alt="Plan 3" className="plan-img" />
          </section>
        </section>
        <hr className="divisor" />
        <section className="contactFormContainer">
          <h1 className="containerTitle">Contato</h1>
          <section className="contact">
            <img src={contact} alt="Contato" />
            <form className="contact-form">
              <input placeholder="Seu nome" />
              <input placeholder="Seu email" />
              <textarea placeholder="Mensagem" rows="8" />
            </form>
          </section>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
