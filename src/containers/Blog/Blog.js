import React, { Component, Fragment } from 'react';
import axios from '../../axiosInstance';
import { Route, Link } from 'react-router-dom';

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
                                pathname: '/new-post',
                                hash: '#_hash',
                                search: '?q_term=lorem'
                            }}>New post</Link></li>
                            <li><Link to={{
                                pathname:"/about-blog",
                                hash:"#somehash"
                            }}>About post</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                {/* <Route path="/" exact render={()=><h1>Home base path</h1> } />
                <Route path="/" render={()=><h1>Home base 2nd one</h1> } /> */}

                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={Newpost} />
                <Route path="/about-blog" render={() => {

                    return (<Fragment>
                        <div style={{ textAlign: 'center' }}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </Fragment>);

                }} />

            </div>
        );
    }
}

export default Blog;