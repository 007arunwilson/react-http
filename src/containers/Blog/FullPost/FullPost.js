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

        axios.delete('/posts/'+this.props.match.params.postid)
        .then(response=>{
            console.log(response);
        });

    }

    // componentWillReceiveProps(nextProps,nextState){

    //     console.log('[FullPost] component will recieve props ... ',nextProps,nextState);

    // }

    componentDidUpdate(){

        console.log('[Full post] compoenent did update ... ');

    }

    componentDidMount(){

        console.log('[FullPost] Compoenent Did Mount Triggered ...');
        console.log('[FullPost] props ',this.props);

        if(this.props.match.params.postid)
        {

            if(this.state.post && ( this.state.post.id !== this.props.match.params.postid )|| !this.state.post  )
            {

                console.log('Fetching New Post Full Post');

                axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.postid)
                .then(response => {
                    this.setState({post:response.data});
                })
            }

        }

    }

    render () {

        console.log('[FullPost] render method');

        let post = <p style={{textAlign:'center',color:'#9c9c9c'}} > - Please select a Post! - </p>;

        if(this.props.match.params.postid || (this.state.post && this.props.match.params.postid !== this.state.post.id ))
        {
            post = <p style={{textAlign:'center',color:'#ccc'}} >Loading post ....</p>

        }

        if(this.state.post && ( this.state.post.id == this.props.match.params.postid ))
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