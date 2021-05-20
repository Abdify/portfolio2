import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="wall">
                <p className="title-text">
                    Hello, I Build <br /> <span className="text-blur-out">Websites</span> <br />
                    <span className="text-focus-in">IDEAS</span>
                </p>
            </div>
        </div>
    );
};

export default Header;