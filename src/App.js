import React from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import VideosOptions from "./components/VideosOptions";
import ViewPage from "./components/ViewPage";
import AboutPage from "./components/AboutPage";
import './App.css';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      searchResults: [],
      searchInput: "",
      noSearch: "No Search Results Yet! Please submit a search above!"
    }
  }
      handleInput =(e)=>{
        this.setState({
            searchInput: e.target.value,
        })
      }

      handleSearch =(e)=>{
        e.preventDefault();
        if(this.state.searchInput){
          this.handleFetch(this.state.searchInput);
          this.setState ({
            searchInput: "",
            noSearch: "",
           
          })
        } 
      
    }

      handleFetch = (userInput) => {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${userInput}&type=video&key=${process.env.REACT_APP_API_KEY}`)
        .then((res)=> res.json())
        .then((data) => {
            this.setState({
                searchResults: data.items,
            })
        })
      }

      handleClear = () => {
        this.setState ({
          searchResults : [],
          noSearch: "No Search Results Yet! Please submit a search above!"
        })
      }

  render(){
 
    return (
      <div className="App">
          <Navbar handleClear = {this.handleClear}/>
            <Switch>
              
              <Route exact path="/">
                <SearchBar searchInput={this.state.searchInput} handleInput = {this.handleInput} handleSearch={this.handleSearch} noSearch={this.state.noSearch}/>
                <VideosOptions searchResults={this.state.searchResults} />
              </Route>
              <Route path="/about">
                <AboutPage/>
              </Route>
              <Route path="/videos/:id" component={ViewPage} />
            </Switch>
      </div>
    );
  }
}

export default App;
