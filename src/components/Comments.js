import React from "react";

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
                <li>
                    <h3>{obj.name}</h3>
                    <div>{obj.comment}</div>
                </li>
            )
        })
        
        return (
            
            <div>
                <form onSubmit={this.handleCommentSubmit}>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" value={this.state.userName} onInput={this.handleNameInput}/> 

                  <label htmlFor="comment">Comment:</label>
                  <input type="text" id="comment" value={this.state.userComment} onInput={this.handleCommentInput}/> 

                  <button type="submit" >Submit</button>
                </form>
                <ul>
                    {nameNcomments}
                </ul>
            </div>
        )
    }
}

export default Comments;