import React from 'react';
import './styles/main.scss';
import './styles/animation.scss';
import HomeMain from './home/HomeMain';
import School from './study/School';
import Univer from './study/Univer';
import AllProjects from './projects/AllProjects';
import Volunteering from './projects/Volunteering';
import MyPortfolio from './projects/MyPortfolio';
import Opportunities from './opportunities/Oppotunities';
import LogIn from './user/LogIn';
import SignUp from './user/SignUp';
import Center from './study/Center';
import Mit from './study/Mit';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Routing() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeMain} />
        <Route path="/School" component={School}/>
        <Route path="/Univer" component={Univer}/>
        <Route path="/all-projects" component={AllProjects}/>
        <Route path="/volunteering" component={Volunteering}/>
        <Route path="/portfolio" component={MyPortfolio}/>
        <Route path="/opportunities" component={Opportunities}/>
        <Route path="/log-in" component={LogIn}/>
        <Route path="/sign-up" component={SignUp}/>
        <Route path="/center" component={Center}/>
        <Route path="/mit" component={Mit}/>
      </Switch>
    </Router>
  );
}

export default Routing;