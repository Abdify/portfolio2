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
                <div>
                <p className="">
                    Hello, I Build <br /> <del className="text-blur-out">Websites</del> <br />
                    <span className="text-focus-in">IDEAS</span>
                </p>
            </div>
                <div className="skill-cloud">
                    <ul className="cloud" role="navigation" aria-label="Webdev word cloud">
                    
                        <li><a href="#" data-weight="4">HTML</a></li>
                        <li><a href="#" data-weight="4">CSS</a></li>
                        <li><a href="#" data-weight="3">FlexBox</a></li>
                        <li><a href="#" data-weight="3">Sass</a></li>
                        <li><a href="#" data-weight="3">Bootstrap</a></li>
                        <li><a href="#" data-weight="6">JavaScript</a></li>
                        <li><a href="#" data-weight="6">React</a></li>
                        <li><a href="#" data-weight="5">Routing</a></li>
                        <li><a href="#" data-weight="3">Material UI</a></li>
                        <li><a href="#" data-weight="4">Git</a></li>
                        <li><a href="#" data-weight="4">HTTP</a></li>
                        <li><a href="#" data-weight="4">Rest API</a></li>
                    
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;