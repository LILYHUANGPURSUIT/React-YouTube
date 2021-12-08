import React from "react";
import SearchBar from "./SearchBar";
import VideosDisplay from "./VideosDisplay";
import Comments from "./Comments";

class HomePage extends React.Component{

    render(){
        return (
            <div>
                
                <SearchBar />
                <VideosDisplay />
                <Comments />
            </div>
        )
    }
}

export default HomePage;