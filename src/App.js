import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import {Landing} from './containers/Landing';

function App() {
  return (
    <Router>
        <Switch>
        <Route exact path="/" component={Landing} />
          {/* <Route  path="/details" component={Register} /> */}
        </Switch>
    </Router>
  );
}

export default App;
