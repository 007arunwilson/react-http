import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {


    state = {
        posts:[],
        postid:null
    };

    componentDidMount(){

        console.log('Compoenent Did Mount executed ...');
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response.data);
            let resposne_data = response.data;
            let sliced_response = resposne_data.slice(0,6);
            let updated_posts = sliced_response.map(post=>{
                return {...post,author:'Max Corner'};
            })
            this.setState({posts:updated_posts});

        })

    }

    onPostSelectionHandler = (post_id) => {
        
        console.log('Post slected',post_id);
        this.setState({postid:post_id});

    }

    render () {

        let posts = this.state.posts.map(post=><Post 
            title={post.title}
            author={post.author}
            key={post.id}
            clicked={()=>{this.onPostSelectionHandler(post.id)}}
            />);

        return (
            <div>
                <section className="Posts">
                    {!posts.length?<span style={{color:'#ccc',margin:'20px'}} >Loading Post ...</span>:posts}
                </section>
                <section>
                    <FullPost postid={this.state.postid} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;