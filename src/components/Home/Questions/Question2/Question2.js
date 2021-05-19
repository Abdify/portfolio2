import React from "react";
import image from "../../../../images/undraw_usability_testing_2xs4.svg";
import "./Question2.css";

const Question2 = () => {
    return (
        <div className="flow">
            <div className="stand"></div>

            <div className="questions question2">
                <div>
                    <h2>By my KEYBOARD!</h2>
                    <ul>
                        <li>One bowl magical MERN!</li>
                        <li>A drop of creativity</li>
                        <li>With all the passion I have</li>
                    </ul>
                </div>

                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Question2;
