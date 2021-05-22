import React from 'react';
import './Header.css';

const Header = () => {
    document.querySelectorAll("ul.cloud a").forEach((i) => {
        i.style.setProperty("--size", i.dataset.weight);
    });
    
    return (
        <div className="header">
            <div>
                <p className="title-text">
                    Hello, I Build <br /> <del className="text-blur-out">Websites</del> <br />
                    <span className="text-focus-in">IDEAS</span>
                </p>
            </div>
            <div className="wall">

                <div className="skill-cloud">
                    <ul className="cloud" role="navigation" aria-label="Webdev word cloud">
                    
                        <li><a href="#" data-weight="4">HTTP</a></li>
                        <li><a href="#" data-weight="5">Sass</a></li>
                        <li><a href="#" data-weight="8">HTML</a></li>
                        <li><a href="#" data-weight="7">FlexBox</a></li>
                        <li><a href="#" data-weight="4">API</a></li>
                        <li><a href="#" data-weight="5">Grid</a></li>
                        <li><a href="#" data-weight="2">Rest</a></li>
                        <li><a href="#" data-weight="8">JavaScript</a></li>
                        <li><a href="#" data-weight="3">Animation</a></li>
                        <li><a href="#" data-weight="9">React</a></li>
                        <li><a href="#" data-weight="8">CSS</a></li>
                    
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;