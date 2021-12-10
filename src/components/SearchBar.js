import React from "react";


class SearchBar extends React.Component{
    constructor(){
        super();
        this.state={
            searchInput: "",
        }
    }

//function handleInput --> this.setState: input value
//function handleSearch --> display videos.

    handleInput =(e)=>{
        
        this.setState({
            searchInput: e.target.value,
        })
        
    }

    render(){
        console.log(this.state.searchInput)
        let {handleSearch} = this.props;
        // let idList = searchResults.map((video)=>{
        //     return (
        //         <div>
        //             <YouTube videoId={video.id.videoId} />
        //         </div>
        //     )
        // })
        return (
            <div>
                <form onSubmit={(e)=>handleSearch(e, this.state.searchInput)}>
                    <input type="text" placeholder="Search..." onChange={this.handleInput} value={this.state.searchInput}/>
                    <button type="submit" >Search</button>
                    
                </form>
                {/* {idList} */}
            </div>
        )
    }
}

export default SearchBar;