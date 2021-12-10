import React from "react";
import {Link, Route} from "react-router-dom";
import ViewPage from "./ViewPage";

class VideosOptions extends React.Component{

    render(){
        let { searchResults } = this.props;
        let videoList = searchResults.map((video)=>{
            return (
                <Link to={`/videos/${video.id.videoId}`}>
                    <div className="videosOptions">
                        <img src={video.snippet.thumbnails.default.url} />
                        <p>{video.snippet.title}</p>
                    </div>
                </Link>
            )
        })
        return (
            <div>
                {videoList}
                <Route path="/videos/:id">
                    <ViewPage />
                </Route>
            </div>
        )
    }
}

export default VideosOptions;