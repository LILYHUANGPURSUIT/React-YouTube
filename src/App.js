import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import SearchBar from './components/SearchBar';
import './App.css';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      searchInput: "",
      searchResults:[]
    }
  }


 handleSearch=(userInput)=>{
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${this.state.searchInput}&type=video&key=${process.env.REACT_APP_API_KEY}`)  
        .then((res)=> res.json())
        .then((data) => {
            console.log(data)
            this.setState({
                searchInput: userInput,
            })
        })
    }

  render(){
    
    return (
      <div className="App">
        
        <Router>
          <Navbar />
          <SearchBar searchInput={this.state.searchInput} handleSearch={this.handleSearch}/>
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
