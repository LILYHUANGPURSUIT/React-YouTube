import React from "react";
import "./ViewPage.css"
import {Link} from "react-router-dom";

class VideosOptions extends React.Component{

    

    render(){
        let { searchResults } = this.props;
        let videoList = searchResults.map((video)=>{
            return (
                <Link to={`/videos/${video.id.videoId}`}>
                    <div className="videosOptions">
                        <img src={video.snippet.thumbnails.default.url} alt={video.snippet.description}/>
                        <p>{video.snippet.title}</p>
                    </div>
                </Link>
            )
        })
        return (
            <div>
                {videoList}
            </div>
        )
    }
}

export default VideosOptions;