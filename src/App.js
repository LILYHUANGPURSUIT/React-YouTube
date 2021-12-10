import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import VideosDisplay from "./components/VideosDisplay";
import Comments from "./components/Comments";
import AboutPage from "./components/AboutPage";
import SearchBar from './components/SearchBar';
import './App.css';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      searchResults: [],
      noSearch:""
    }

  }

      handleSearch =(e, userInput)=>{
        e.preventDefault();
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${userInput}&type=video&key=${process.env.REACT_APP_API_KEY}`)
        .then((res)=> res.json())
        .then((data) => {
            this.setState({
                searchResults: data.items,
                noSearch:""
            })
        })
        
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
    console.log(this.state.searchResults)
    return (
      <div className="App">
        
        <Router>
          <Navbar />
          
          
            <Switch>
              <Route exact path="/">
                <SearchBar handleSearch={this.handleSearch}/>
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
            </Switch>

            <VideosDisplay searchResults={this.state.searchResults} />
            <Comments />
          
        </Router>
      </div>
    );
  }
}

export default App;
