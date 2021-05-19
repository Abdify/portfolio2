import React from 'react';
import img from '../../../../images/undraw_Progress_indicator_re_4o4n.svg';
import '../Questions.css';
import './question1.css';

const Question1 = () => {
    return (
        <div className="questions question1">
            <div>
                <h2>DIVIDE & RULE</h2>
                <ul>
                    <li>Divide into smaller components</li>
                    <li>Make every component perfect</li>
                    <li>Combine and Test the heck out of it!</li>
                </ul>
                <i>That's why I love React!</i>
            </div>
            <div>
                <img src={img} alt=""/>
            </div>
        </div>
    );
};

export default Question1;