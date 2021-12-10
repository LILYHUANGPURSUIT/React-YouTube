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
            e.preventDedault();
            this.setState({
                commentsList: [...this.state.commentsList, {"name":this.state.userName, "comment":this.state.userComment}],
                userName: "",
                userComment: "",
            })
        }


    render(){
        let nameNcomments = this.state.commentsList.map((obj)=>{
            return(
                <ul>
                    <li>{obj.name}</li>
                    <li>{obj.comment}</li>
                </ul>
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

                
                   {nameNcomments}
                

            </div>
        )
    }
}

export default Comments;