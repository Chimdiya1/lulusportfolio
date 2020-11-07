import React from 'react';
import './navigation.scss';

const Navigation = () => {
    return ( 
        <div className="navigation">
            <a href="/" className="nav-link">ABOUT ME</a>
            <a href="/" className="nav-link">PROJECTS</a>
            <a href="/" className="nav-link">WRITING</a>
            <a href="/" className="nav-link">CONTACT</a>
        </div>
     );
}
 
export default Navigation;