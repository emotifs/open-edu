import React from "react";

import HomeMain from "./home/HomeMain";
import School from "./study/School";
import Univer from "./study/Univer";

import {
    BrowserRouter, 
    Switch, 
    Route
} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Switch>
          <Route exact path="/" component={HomeMain}/>
           <Route path="/School" component={School}/>
           <Route path="/Univer" component={Univer}/>
          </Switch>
        </div>    
    </BrowserRouter>
    
  );
}

export default App;
