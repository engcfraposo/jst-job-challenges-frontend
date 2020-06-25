/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Reset } from '../styles';
import Menu from '../components/Menu';

import Stats from '../pages/Stats';
import About from '../pages/About';
import Contact from '../pages/Contact';

const Routes = () => {
  return (
    <>
      <Reset />
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path="/" exact component={Stats} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
