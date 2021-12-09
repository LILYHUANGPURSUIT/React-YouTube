import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import './App.css';


class App extends React.Component {
  constructor(){
    super();

  }

  

  render(){
    return (
      <div className="App">
        
        <Router>
          <Navbar />
          
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
            </Switch>
          
        </Router>
      </div>
    );
  }
}

export default App;
