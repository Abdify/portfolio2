import React, { cloneElement, useState } from "react";
import './Parallax.css';

const Parallax = ({children}) => {
    const [scrollNumber, setN] = useState(1);

    const handleScroll = (e) => {
        if (e.deltaY > 0) {
            scrollNumber < children.length+1 && setTimeout(() => {
                setN(scrollNumber + 1);
            }, 500);
        } else {
            scrollNumber > 1 && setTimeout(() => {
                setN(scrollNumber - 1);
            }, 500);
        }
    };
    return (
        <div className="parallax" onWheel={handleScroll}>
            {
                React.Children.map(children, child => {
                    return cloneElement(child, {scrollNumber})
                })
            }
        </div>
    );
};

export default Parallax;
