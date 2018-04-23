import React, { Component, Fragment } from 'react';
import axios from '../../axiosInstance';
import { Route, NavLink,Switch,Redirect } from 'react-router-dom';

import Posts from './Posts/Posts';
import Newpost from './NewPost/NewPost';
import Aboutblog from './AboutBlog/AboutBlog';
import './Blog.css';

class Blog extends Component {

    state = {auth:false};

    render() {

        return (
            <div className="Blog" >
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                             to="/posts"
                             exact
                             activeClassName="active-link"
                             >Posts</NavLink></li>
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
                <Switch>
                    {this.state.auth==true?<Route path="/new-post" component={Newpost} />:null}
                    <Route path="/about-blog" exact component={Aboutblog} />
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                    {/* <Route path="/" exact component={Posts} /> */}
                </Switch>

                <button onClick={()=>{ this.setState({'auth':true}); }} >Set Auth</button>

            </div>
        );
    }
}

export default Blog;