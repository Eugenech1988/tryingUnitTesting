import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from 'containers/MainPage'

// if we'll need a routes

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={MainPage}/>
      </Switch>
    );
  }
}

export default Routes;
