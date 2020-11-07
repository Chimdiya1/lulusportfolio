import React from 'react';

import './body.scss'
import XD from '../../assets/xd.png'
import figma from '../../assets/figma.png'
import canva from '../../assets/Canva.png'
import wordpress from '../../assets/WordPress.png'
import design1 from '../../assets/design1.png'
import design2 from '../../assets/design2.png'
import behance from '../../assets/behance.png'
import dribble from '../../assets/dribble.png'
import mail from '../../assets/mail.png'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'


const Body = () => {
    return ( 
        <div className="body">
            <p className="about confortaa">
                Hello there! Welcome to my space on the internet.
                My name is Oluchi Nwenyi but almost everyone calls me Lulu.
                I’m a UI/UX Designer skilled in transforming your digital product ideas to visual designs and interactions
                on mobile and web platforms to provide amazing experience for users and meet their needs.
                I also design responsive blogs / websites using wordpress.
            </p>
            <h3 className="nunito">
                MAJOR SKILLS
            </h3>
            <div className="skills-section nunito">
                <span className="skill">User Research</span>
                <span className="skill">Content Writing</span>
                <span className="skill">Web Design</span>
                <span className="skill">User Experience Design</span>
                <span className="skill">User Interface Design</span>
                <span className="skill">Technical Writing</span>
                <span className="skill">Prototyping</span>
                <span className="skill">Wireframing</span>
            </div>
            <h3>
                TOOLS I USE
            </h3>
            <div className="tools-section">
                <div>
                    <span className="tool"><img src={figma} alt="figma" /> </span>
                    <p>Figma</p> 
                </div>
                <div>
                    <span className="tool"><img src={XD} alt="adobe XD"/></span>
                    <p>Adobe XD</p> 
                </div>
                <div>
                    <span className="tool"><img src={canva} alt="canva"/></span>
                    <p>Canva</p> 
                </div>
                <div>
                    <span className="tool"><img src={wordpress} alt="wordpress"/></span>
                    <p>WordPress</p> 
                </div>
                
                
                
            </div>
            <div className="my-designs">
                <h3>
                    MY DESIGNS
                </h3>
                <div className="design-cards-container">
                    <div className="design-card">
                        <img src={design1} alt="Nots" />
                        <p>NOTS- A mobile applicat..</p>
                    </div>
                    <div className="design-card">
                        <img src={design2} alt="Nots" />
                        <p>Wadajo- User Research re..</p>
                    </div>
                </div>
                <div className="works">
                <h4 className="confortaa">
                    See more of my works
                </h4>
                <ul>
                    <li><img src={behance} alt="linkedIn-link"/> Behance:{' '} <a href="/"> behance.net/luludesigna</a></li>
                    <li><img src={dribble} alt="linkedIn-link"/> Behance:{' '} <a href="/"> behance.net/luludesigna</a></li>
                </ul>
            </div>
            </div>
            
            <div className="opensource">
                <h3>
                    MY OPEN SOURCE CONTRIBUTION
                </h3>
                <p className="confortaa">
                    I create content as a Lifestyle Blogger and Technical Writer.
                    I enjoy writing articles for people to read and I hope you enjoy reading them too.
                </p>
                <ul>
                    <li>
                        <span>Read Design Articles:</span>
                        <div>
                            <a href="/">HASHNODE  </a>
                            <a href="/">MEDIUM  </a>
                        </div>
                    </li>
                    <li>
                        <span>Read Lifestyle Blog:</span>
                        <div>
                            <a href="/">LULUBLOGS.XYZ  </a>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="contact">
                <h3>
                    GET IN TOUCH WITH ME
                </h3>
                <p className="comfortaa">
                    I send nice reads to my online community. Subscribe to get them in your inbox.
                </p>
                <form action="">
                    <input type="text" name="name" id="name" placeholder="What Can I call you"/>
                    <input type="text" name="email" id="email" placeholder="Enter your email address" />
                    <input type="submit" value="Subscribe"/>
                </form>
                <h4>
                    Find me on Social media
                </h4>
                <ul>
                    <li><img src={mail} alt="mail -link"/> Mail:{' '} <a href="/"> mail@luludesigna.me</a></li>
                    <li><img src={linkedin} alt="linkedIn -link"/> LinkedIn:{' '} <a href="/"> linkedin.com/in/oluchi-nwenyi</a></li>
                    <li><img src={twitter} alt="twitter -link"/> Twitter:{' '} <a href="/"> twitter.com/lulunwenyi</a></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Body;