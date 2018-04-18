import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        post:null,
    }

    // shouldComponentUpdate(nextProps){

    //     return this.props.postid!=nextProps.postid;

    // }


    deletePostHandler =() => {

        axios.delete('/posts/'+this.props.postid)
        .then(response=>{
            console.log(response);
        });

    }

    componentDidUpdate(){

        console.log('[FullPost] Compoenent Did Update Triggered ...');
        console.log(this.props);
        if(this.props.postid)
        {

            if(this.state.post && ( this.state.post.id !== this.props.postid )|| !this.state.post  )
            {
    
                axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.postid)
                .then(response => {
                    this.setState({post:response.data});
                })
            }

        }



    }

    render () {
        let post = <p style={{textAlign:'center',color:'#9c9c9c'}} > - Please select a Post! - </p>;

        if(this.props.postid || (this.state.post && this.props.postid !== this.state.post.id ))
        {
            console.log('Loading new post ...');
            post = <p style={{textAlign:'center',color:'#ccc'}} >Loading post ....</p>

        }

        if(this.state.post && ( this.state.post.id == this.props.postid ))
        {


            post = (
                <div className="FullPost">
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>
    
            );

        }

        return post;
    }
}

export default FullPost;