import React from "react";
import VideosDisplay from "./VideosDisplay";
import Comments from "./Comments";


class HomePage extends React.Component{
    constructor(){
        super();
        // we need the data (videoInfo) from HomePage. --->fetch 
        // this.state --> videoInfo default : "No search yet"
        // this.state --> searchInput default : ""
        this.state={
            videoInfo: [],
        }
    }

    



    render(){
        return (
            <div>
                
                {/* <SearchBar /> */}
                <VideosDisplay />
                <Comments />
            </div>
        )
    }
}

export default HomePage;