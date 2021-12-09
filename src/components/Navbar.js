import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

class Navbar extends React.Component {


    render(){
        return (
            <div>
                <nav>
                    <h1>YouTube</h1>
                    <Link exact to ="/">Home</Link>
                    <Link to="/about">About</Link>
                </nav>
            </div>
        )
    }
}

export default Navbar;