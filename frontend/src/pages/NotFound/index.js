import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';





import './style.css';

const NotFound = () => {
  return (
    <div>
    <Header />
    <main style={{ marginTop: 120 }} className="content">
      <h1>Pagina não encontrada</h1>
    </main>
    <div id="footer">
      <Footer />
    </div>
  </div>
  );
}

export default NotFound;
