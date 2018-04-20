import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import * as aboutMePageContents from './AboutBlogPages/AboutBlogPages';

import './about-blog.css';

const AboutBlog = (props) => {

    console.log('[AboutBlog] props : ',props);

    let route_location = props.location;
    let route_match = props.match;
    let location_hash = route_location.hash;

    console.log(route_match);
    

    let AboutMePageContent = aboutMePageContents.AboutUs;
    if(location_hash=='#history') AboutMePageContent = aboutMePageContents.History;
    else if(location_hash=='#team') AboutMePageContent = aboutMePageContents.Team;
    else if(location_hash=='#future-plans') AboutMePageContent = aboutMePageContents.FuturePlans;

    let aboutMePageContentRendered = <AboutMePageContent/>;

    return (<Fragment>
        <div className="about-blog-page">

            <div className="abp-sub-links" >
                <ul>
                    <li>
                        <Link to={{
                            pathname: route_match.url,
                            hash:'#history'
                        }} >
                            History
                        </Link>
                        <Link to={{
                            pathname: route_match.url,
                            hash:'#team'
                        }} >
                            Team
                        </Link>
                        <Link to={{
                            pathname: route_match.url,
                            hash:'#future-plans'
                        }} >
                            Future Plans
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="about-blog-content">
                {aboutMePageContentRendered}
            </div>

        </div>
    </Fragment>);

}


export default AboutBlog;
