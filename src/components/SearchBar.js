import React from "react";
import YouTube from "react-youtube";

class SearchBar extends React.Component{


//function handleInput --> this.setState: input value
//function handleSearch --> display videos.


    render(){
        return (
            <div>
                <input type="text" placeholder="Search..." />
                <button type="submit">Search</button>
                <YouTube videoId="4wEO_JuON9E" />
            </div>
        )
    }
}

export default SearchBar;