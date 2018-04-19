import React, { Component } from 'react';
import axios from '../../axiosInstance';
import {Route} from 'react-router-dom';

import Posts from './Posts/Posts';
import Newpost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    render() {

        return (
            <div className="Blog" >
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                
                {/* <Route path="/" exact render={()=><h1>Home base path</h1> } />
                <Route path="/" render={()=><h1>Home base 2nd one</h1> } /> */}

                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={Newpost} />

            </div>
        );
    }
}

export default Blog;