import React, { Component } from 'react';
import axios from '../../../axiosInstance';
import {Link} from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {

    state = {
        posts: [],
    };

    componentDidMount() {

        console.log('[Posts] props', this.props);

        axios.get('/posts')
            .then(response => {
                let resposne_data = response.data;
                let sliced_response = resposne_data.slice(0, 6);
                let updated_posts = sliced_response.map(post => {
                    return { ...post, author: 'Max Corner' };
                })
                this.setState({ posts: updated_posts });

            })
            .catch(error => {

                console.log(error);
                // this.setState({ error: true })

            })

    }


    onPostSelectionHandler = (post_id) => {

        console.log('Post slected', post_id);
        this.setState({ postid: post_id });

    }


    render() {

        let posts = this.state.posts.map(post => <Link key={post.id} to={'/'+post.id} >
            <Post
                title={post.title}
                author={post.author}
                clicked={() => { this.onPostSelectionHandler(post.id) }}
            />
        </Link>);

        return (
            <section className="Posts">
                {this.state.error ? <p style={{ textAlign: 'center', color: 'red' }}  >Something went wrong!</p> : (!posts.length ? <span style={{ color: '#ccc', margin: '20px' }} >Loading Post ...</span> : posts)}
            </section>
        );


    }


}

export default Posts;