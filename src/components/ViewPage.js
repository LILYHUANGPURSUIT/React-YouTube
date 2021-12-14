import React from "react";
import YouTube from "react-youtube";
import Comments from "./Comments"


class ViewPage extends React.Component{

    render(){
        const {id} = this.props.match.params;

        return (
            <div id="videoAndComments">
                <section id="video-display">
                    <YouTube videoId={id} />
                </section>
                <section id="comments-section">
                    <Comments />
                </section>
            </div>
        )
    }
}

export default ViewPage;