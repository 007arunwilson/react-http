import React, { Component } from 'react';
import axios from '../../axiosInstance';
import {Route,Link} from 'react-router-dom';

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
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname:'/new-post',
                                hash:'#_hash',
                                search:'?q_term=lorem'
                            }}>New post</Link></li>
                        </ul>
                    </nav>
                </header>
                
                {/* <Route path="/" exact render={()=><h1>Home base path</h1> } />
                <Route path="/" render={()=><h1>Home base 2nd one</h1> } /> */}

                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={Newpost} />

            </div>
        );
    }
}

export default Blog;