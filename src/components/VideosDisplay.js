import React from "react";

class VideosDisplay extends React.Component{

    render(){
        let { searchResults } = this.props;
        let videoList = searchResults.map((video)=>{
            return (
                <div>
                    <img src={video.snippet.thumbnails.default.url} />
                    <p>{video.snippet.title}</p>
                </div>
            )
        })
        return (
            <div>
                {videoList}
            </div>
        )
    }
}

export default VideosDisplay;