import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import {Landing} from './containers/Landing';
import { PostDetails } from "./containers/PostDetails";
import { Provider } from "react-redux";
import store from "./store";

function App(props) {
  const [selectedPost,updateSelectedPost] = useState(null);
  
  

  return (
    <Provider store={store}>
      <Router>
          <Switch>
          <Route exact path="/" component={()=><Landing history={props.history} selectedPost={(p)=>updateSelectedPost(p)}/> } />
          <Route  path="/postDetails" component={()=><PostDetails post={selectedPost}/>} /> 
          </Switch>
      </Router>
    </Provider>
  );
}

export default App;
