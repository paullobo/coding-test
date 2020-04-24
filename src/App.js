import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import {Landing} from './containers/Landing';
import { PostDetails } from "./containers/PostDetails";


function App() {
  return (
      <Router>
          <Switch>
          <Route exact path="/" component={Landing} />
          <Route  path="/postDetails" component={PostDetails} /> 
          </Switch>
      </Router>
  );
}

export default App;
