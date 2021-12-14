import React from "react";
import {Link} from "react-router-dom";
import './VideosOptions.css';

class VideosOptions extends React.Component{

    

    render(){
        let { searchResults } = this.props;
        let videoList = searchResults.map((video)=>{
            return (
                <Link to={`/videos/${video.id.videoId}`}>
                    <div className="videosOptions">
                        <img src={video.snippet.thumbnails.default.url} alt={video.snippet.description}/>
                        <div id="vidTitle">{video.snippet.title}</div>
                    </div>
                </Link>
            )
        })
        return (
            <div id="videoPlays">
                {videoList}
            </div>
        )
    }
}

export default VideosOptions;