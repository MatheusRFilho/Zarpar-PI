import React from 'react';
import { Switch, Route } from 'react-router';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Register2 from './pages/Register2';
import NotFound from './pages/NotFound';

import {history} from './history'
import { BrowserRouter } from 'react-router-dom';

function Routes() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Register" exact component={Register} />
        <Route path="/EndRegister" exact component={Register2} />
        <Route path="/"  component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
