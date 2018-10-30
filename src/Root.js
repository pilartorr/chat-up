import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Start from './components/Start';
import App from './App';

const Root = () =>

  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path='/' component={Start}/>
        <Route path='/app' component={App}/>
      </Switch>
    </Fragment>
  </BrowserRouter>

export default Root;
