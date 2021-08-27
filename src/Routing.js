import React from 'react';
import './styles/main.scss';
import './styles/animation.scss';
import HomeMain from './home/HomeMain';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Routing() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeMain} />
      </Switch>
    </Router>
  );
}

export default Routing;