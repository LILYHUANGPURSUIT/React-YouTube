import React from "react";
import './SearchBar.css';


class SearchBar extends React.Component{
  

    render(){
        let {handleSearch, noSearch} = this.props;
       
        return (
            <div className="searchForm">
                    <form onSubmit={(e)=>handleSearch(e)} >
                        <input type="text" placeholder="Search..." onChange={this.props.handleInput} value={this.props.searchInput}/>
                        <button type="submit" >Search</button>
                        </form>  
                <p id="no-search">{noSearch}</p>
               
            </div>
        )
    }
}

export default SearchBar;