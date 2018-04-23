import React, { Component, Fragment } from 'react';
import axios from '../../axiosInstance';
import { Route, NavLink,Switch,Redirect } from 'react-router-dom';

import Posts from './Posts/Posts';
//import Newpost from './NewPost/NewPost';
import Aboutblog from './AboutBlog/AboutBlog';
import './Blog.css';
import asyncComponent from '../../hoc/asyncComponent';


const AsyncNewPost = asyncComponent(()=>{

    console.log('Importing New Post .....');
    return import('../../containers/Blog/NewPost/NewPost');

})

class Blog extends Component {

    state = {auth:true};

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
                    <Route path="/new-post" render={((props)=><AsyncNewPost {...props} auth={this.state.auth} />)}/>
                    <Route path="/about-blog" exact component={Aboutblog} />
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" exact to="/posts" />
                    <Route render={()=>(
                        <p style={{color:'red',textAlign:'center',fontSize:'26px'}} >Oops, we lost somewhere together ...</p>
                    )} />
                    {/* <Route path="/" exact component={Posts} /> */}
                </Switch>

                {/* <button onClick={()=>{ this.setState({'auth':true}); }} >Set Auth</button> */}

            </div>
        );
    }
}

export default Blog;