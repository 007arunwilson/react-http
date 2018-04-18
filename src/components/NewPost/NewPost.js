import React, { Component } from 'react';
import axios from 'axios';

import './NewPost.css';

class NewPost extends Component {

    state = {
        title: '',
        content: '',
        author: ''
    }

    componentDidMount(){
        
        console.log('[NewPost] componentDidMount ')
        console.log(this.state);
        this.initialStateValue = {...this.state};

    }

    savePost = () =>{

        const new_post_object = {...this.state};
        this.setState(this.initialStateValue);
        axios.post('/posts',new_post_object)
        .then(response=>{
            console.log(response);
        });

    }

    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option  value="">Select a Value</option>
                    <option  value="Max">Max</option>
                    <option  value="Manu">Manu</option>
                </select>
                <button  onClick={this.savePost} >Add Post</button>
            </div>
        );
    }
}

export default NewPost;