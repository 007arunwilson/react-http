import React, { Component, Fragment } from 'react';
import axios from '../../axiosInstance';
import { Route, NavLink } from 'react-router-dom';

import Posts from './Posts/Posts';
import Newpost from './NewPost/NewPost';
import Fullpost from './FullPost/FullPost';
import Aboutblog from './AboutBlog/AboutBlog';
import './Blog.css';

class Blog extends Component {

    render() {

        return (
            <div className="Blog" >
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                             to="/"
                             exact
                             activeClassName="active-link"
                             >Home</NavLink></li>
                            <li><NavLink 
                            activeClassName="active-link"
                            to={{
                                pathname: '/new-post',
                                hash: '#_hash',
                                search: '?q_term=lorem',
                            }}>New post</NavLink></li>
                            <li><NavLink 
                            activeStyle={{textDecoration:'underline'}}
                            to={{
                                pathname:"/about-blog",
                            }}>About post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>

                {/* <Route path="/" exact render={()=><h1>Home base path</h1> } />
                <Route path="/" render={()=><h1>Home base 2nd one</h1> } /> */}

                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={Newpost} />
                <Route path="/about-blog" exact component={Aboutblog} />
                <Route path="/:postid" exact component={Fullpost} />

            </div>
        );
    }
}

export default Blog;