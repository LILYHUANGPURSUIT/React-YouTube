import React from "react";
import Video from "./Video";

class VideosOptions extends React.Component{

    render(){
        let { searchResults } = this.props;
        let videoList = searchResults.map((video)=>{
            return (
                <div className="videosOptions">
                    <img src={video.snippet.thumbnails.default.url} />
                    <p>{video.snippet.title}</p>
                </div>
            )
        })
        return (
            <div>
                {videoList}
                {/* <Video videoList={this.videoList} /> */}
            </div>
        )
    }
}

export default VideosOptions;