import React from 'react';
import loginImage from '../../../images/Capture.PNG';
import filterImage from '../../../images/collection-filter.PNG';
import searchImage from '../../../images/collection-serach.PNG';
import './Collection.css';

const Collection = () => {
    return (
        <div className="collection">
            <h3 className="head-text">Some of my small components to build big DREAMS!</h3>
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
                <img src={searchImage} alt="" />
                <div className="item">
                    <h2>Search Component</h2>
                    <ul>
                        <li>Fast</li>
                        <li>Not case sensitive</li>
                        <li>Result Limit applied</li>
                    </ul>
                    <button className="btn-brand effect04" data-text="View">
                        <span>View</span>
                    </button>
                </div>
            </div>
            <div className="collection-item">
                <img src={filterImage} alt="" />
                <div className="item">
                    <h2>Filter Component</h2>
                    <ul>
                        <li>Multiple Filter Option</li>
                        <li>URL Encoding Used</li>
                        <li>Fast</li>
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