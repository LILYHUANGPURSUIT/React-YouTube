import React from "react";
import { Link } from "react-router-dom"
import ViewPage from "./ViewPage";
// import Video from "./Video";

class VideosOptions extends React.Component{

    render(){
        let { searchResults } = this.props;
        let videoList = searchResults.map((video)=>{
            return (
                <Link to={`videos/${video.Id.videoId}`}>
                    <div className="videosOptions">
                        <img src={video.snippet.thumbnails.default.url} alt ="video image" />
                        <p>{video.snippet.title}</p>
                    </div>
                </Link>
            )
        })
        return (
            <div>
                {videoList}
                <ViewPage videoList={this.videoList} />
            </div>
        )
    }
}

export default VideosOptions;