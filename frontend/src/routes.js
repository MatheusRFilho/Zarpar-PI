import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Register} />
    </BrowserRouter>
  );
}

export default Routes;
