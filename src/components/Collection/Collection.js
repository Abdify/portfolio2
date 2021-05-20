import React from 'react';
import loginImage from '../../images/Capture.PNG';
import './Collection.css';

const Collection = () => {
    return (
        <div className="collection">
            <h4>Some of my small components to build big DREAMS!</h4>
            <div className="collection-item">
                <img src={loginImage} alt="" />
                <div className="item">
                    <h2>Login Component</h2>
                    <ul>
                        <li>Secure</li>
                        <li>Pattern Recognition</li>
                        <li>Error Handling</li>
                        <li>Google Sign In Option</li>
                    </ul>
                    <button className="btn-brand effect04" data-text="View">
                        <span>View</span>
                    </button>
                </div>
            </div>
            <div className="collection-item">
                <img src={loginImage} alt="" />
                <div className="item">
                    <h2>Login Component</h2>
                    <ul>
                        <li>Secure</li>
                        <li>Pattern Recognition</li>
                        <li>Error Handling</li>
                        <li>Google Sign In Option</li>
                    </ul>
                    <button className="btn-brand effect04" data-text="View">
                        <span>View</span>
                    </button>
                </div>
            </div>
            <div className="collection-item">
                <img src={loginImage} alt="" />
                <div className="item">
                    <h2>Login Component</h2>
                    <ul>
                        <li>Secure</li>
                        <li>Pattern Recognition</li>
                        <li>Error Handling</li>
                        <li>Google Sign In Option</li>
                    </ul>
                    <button className="btn-brand effect04" data-text="View">
                        <span>View</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Collection;