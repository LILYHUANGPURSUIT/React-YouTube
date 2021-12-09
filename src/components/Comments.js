import React from "react";

class Comments extends React.Component{

    render(){

        //let list = data (array).map((info)=>{

        // })
        return (
            <div>
                <form>
                  <label for="name">Name</label>
                  <input type="text" id="name" name="name" value={""}/> 

                  <label for="comment">Comment</label>
                  <input type="text" id="comment" name="comment" value={""}/> 

                  <button type="submit">Submit</button>
                </form>

                {/* {list} */}
                <ul>
                    <li>
                        Name:
                        Comment:
                    </li>
                </ul>

            </div>
        )
    }
}

export default Comments;