import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {


    render(){
        return (
            <div>
                <span>
                    <span>YouTube</span> <Link exact to="/">Home</Link> <Link to="/about">About</Link>
                </span>    
                
            </div>
        )
    }
}

export default Navbar;