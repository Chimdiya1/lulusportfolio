import React from 'react';
import './header.scss'
import logo from '../../assets/logo.png'
import linkedin from '../../assets/linkedin.png'
import behance from '../../assets/behance.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import dribble from '../../assets/dribble.png'

const Header = () => {
    return ( 
        <div className="header">
            <img src={logo} alt="Lulu-logo" />
            <ul className="social-links">
                <li className="link-icon"><a href="/"><img src={linkedin} alt="linkedIn-link"/></a></li>
                <li className="link-icon"><a href="/"><img src={behance} alt="behance-link"/></a></li>
                <li className="link-icon"><a href="/"><img src={instagram} alt="instagram-link"/></a></li>
                <li className="link-icon"><a href="/"><img src={twitter} alt="twitter-link"/></a></li>
                <li className="link-icon"><a href="/"><img src={dribble} alt="dribble-link"/></a></li>
            </ul>
        </div>
     );
}
 
export default Header;