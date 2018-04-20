import React from 'react';
import { withRouter } from 'react-router-dom';

import './Post.css';

const post = (props) => {

    console.log('[post] compoenents props consoling ... ',props);

    return (
        <article onClick={props.clicked} className="Post">
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
    );
}

export default withRouter(post);