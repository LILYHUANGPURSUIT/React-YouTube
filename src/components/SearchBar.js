import React from "react";


class SearchBar extends React.Component{
    constructor(){
        super();
        this.state={
            searchInput: "",
        }
    }

//function handleInput --> this.setState: input value
//function handleSearch --> display videos.

    handleInput =(e)=>{
        
        this.setState({
            searchInput: e.target.value,
        })
        
    }

    render(){
        let {handleSearch, noSearch} = this.props;
       
        return (
            <div>
                <form onSubmit={(e)=>handleSearch(e, this.state.searchInput)}>
                    <input type="text" placeholder="Search..." onChange={this.handleInput} value={this.state.searchInput}/>
                    <button type="submit" >Search</button>
                </form>
                <p id="no-search">{noSearch}</p>
                {/* {idList} */}
            </div>
        )
    }
}

export default SearchBar;