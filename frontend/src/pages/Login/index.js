import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { ErrorMessage, Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import axios from 'axios'

// images
import noImage from '../../images/noImage.png';




import './style.css';

const Login = () => {

  const handleSubmit = values => console.log(values);

  const validations =  yup.object().shape({
    email: yup.string().email('O campo deve ser um Email').required('O campo é obrigatório'),
    password: yup.string().required('O campo é obrigatório')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Teste de força 8 carecteres + 1 letra minuscula + 1 letra maiuscula + 1 NUMERO + 1 CARACTERE ESPERCIAL"
    )
  

  })

  return (
    <div>
      <Header />
      <main style={{ marginTop: 120 }} className="content">
        <div className="imageContainer">
          <img src={noImage} alt="Zarpar" className="image" />
        </div>
        
        <div className='formContainer'>
        <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validations}>
          <Form className="Login">
            <h1 className="formTitle">Login</h1>
            <div className="Login-Group">
              <Field name="email" className="Login-Field" placeholder="Email"/>
              <div className="Login-Error-Container">
              <ErrorMessage component="span" name="email" className="Login-error"/>
              </div>
            </div>
            <div className="Login-Group">
              <Field name="password" className="Login-Field" placeholder="Senha"/>
              <div className="Login-Error-Container">
              <ErrorMessage component="span" name="password" className="Login-error"/>
              </div>
              
            </div>
            <div className="textLinkPasswordContainer">
              <Link to="/" className="textLinkPassword">
                <p>Esqueceu a senha?</p>
              </Link>
            </div>
            
            <button className="Login-Btn" type="submit">Entrar</button>
          </Form>
        </Formik>
        <Link to="/Register" className="textLinkRegister">
          <p>Ainda não tem um Cadastro? a gente já resolve isso</p>
        </Link>

        </div>

      </main>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Login;
