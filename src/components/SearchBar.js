import React from "react";
// import YouTube from "react-youtube";

class SearchBar extends React.Component{


//function handleInput --> this.setState: input value
//function handleSearch --> display videos.



    render(){
        let {searchInput,handleSearch}= this.props;
        return (
            <div>
                <input type="text" placeholder="Search..." value={searchInput} onInput={}/>
                <button type="submit" onSubmit={()=>handleSearch(searchInput)}>Search</button>
                {/* <YouTube videoId="4wEO_JuON9E" /> */}
            </div>
        )
    }
}

export default SearchBar;