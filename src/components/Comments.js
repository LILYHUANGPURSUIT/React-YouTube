import React from "react";
import "./Comments.css";

class Comments extends React.Component{
    constructor(){
        super();
        this.state={
            userName: "",
            userComment: "",
            commentsList: []
        }    
    }

        handleNameInput=(e)=>{
            this.setState({
                userName: e.target.value,
            })
            console.log(this.state.userName)
        }

        handleCommentInput=(e)=>{
            this.setState({
                userComment: e.target.value,
            })
        }

        handleCommentSubmit =(e)=>{
            e.preventDefault();
            if(this.state.userName && this.state.userComment){
                this.setState({
                    commentsList: [...this.state.commentsList, {"name":this.state.userName, "comment":this.state.userComment}],
                    userName: "",
                    userComment: "",
                })
            }
        }


    render(){
        let nameNcomments = this.state.commentsList.map((obj)=>{
            return(
                <li className="each-output">
                    <div>Name: {obj.name}</div>
                    <br />
                    <div>Comment: {obj.comment}</div>
                </li>
            )
        })
        
        return (
            
            <div>
                <form onSubmit={this.handleCommentSubmit} id="input-container">
                    <div className="input">
                        <label htmlFor="name">Name: </label>
                        <input className="user-input" type="text" id="name" value={this.state.userName} onInput={this.handleNameInput}/> 
                    </div>

                    <div className="input">
                        <label htmlFor="comment">Comment:  </label>
                        <input className="user-input" type="text" id="comment" value={this.state.userComment} onInput={this.handleCommentInput}/> 
                    </div>
                
                    <button id="submit-Comments" type="submit" >Submit</button>
                </form>
                <h3>Thank you for your comments!</h3>
                <ul id="output-container">
                    {nameNcomments}
                </ul>
            </div>
        )
    }
}

export default Comments;