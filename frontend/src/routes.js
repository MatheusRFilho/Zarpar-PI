import React from 'react';
<<<<<<< HEAD
import { Switch, Route } from 'react-router';
=======
import { BrowserRouter, Route } from 'react-router-dom';
>>>>>>> parent of 054ce226... Mensagens de validação e Checagem do login

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Register2 from './pages/Register2';
import NotFound from './pages/NotFound';

function Routes() {
  return (
<<<<<<< HEAD
    <BrowserRouter history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Register" exact component={Register} />
        <Route path="/EndRegister" exact component={Register2} />
        <Route path="/"  component={NotFound} />
      </Switch>
=======
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Register} />
      <Route path="/EndRegister" component={Register2} />
>>>>>>> parent of 054ce226... Mensagens de validação e Checagem do login
    </BrowserRouter>
  );
}

export default Routes;
