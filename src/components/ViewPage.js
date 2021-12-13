import React from "react";
// import {Link} from "react-router-dom";
import YouTube from "react-youtube";
import Comments from "./Comments"


class ViewPage extends React.Component{

    render(){
        const {id} = this.props.match.params;

        return (
            <div>
                <YouTube videoId={id} />
                
                <Comments />
            </div>
        )
    }
}

export default ViewPage;