import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import VideosOptions from "./components/VideosOptions";
// import Comments from "./components/Comments";
import AboutPage from "./components/AboutPage";
import SearchBar from './components/SearchBar';
import './App.css';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      searchResults: [],
      noSearch: "No Search Results Yet! Please submit a search above!"
    }
  }

      handleSearch =(e, userInput)=>{
        e.preventDefault();
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${userInput}&type=video&key=${process.env.REACT_APP_API_KEY}`)
        .then((res)=> res.json())
        .then((data) => {
            this.setState({
                searchResults: data.items,
                noSearch: ""
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
                <SearchBar handleSearch={this.handleSearch} noSearch={this.state.noSearch}/>
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
            </Switch>

            <VideosOptions searchResults={this.state.searchResults} />
            {/* <Comments /> */}
          
        </Router>
      </div>
    );
  }
}

export default App;
