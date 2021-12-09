import React from "react";
import SearchBar from "./SearchBar";
import VideosDisplay from "./VideosDisplay";
import Comments from "./Comments";


class HomePage extends React.Component{
    constructor(){
        super();
        // we need the data (videoInfo) from HomePage. --->fetch 
        // this.state --> videoInfo default : "No search yet"
        // this.state --> searchInput default : ""
        this.state={
            videoInfo: "",
        }
    }

    

    // componentDidMount(){
    //     fetch("https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}")
        
    //     .then((res)=> res.json())
    //     .then((data) => {
    //         console.log(data)
    //         this.setState({
    //             videoInfo: data,
    //         })
    //     })
    // }

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