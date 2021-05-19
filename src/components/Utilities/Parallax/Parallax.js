import React, { cloneElement, useState } from "react";
import "./Parallax.css";

const Parallax = ({ children }) => {
    const [scrollNumber, setScrollNumber] = useState(1);

    const handleScroll = (e) => {
        if (e.deltaY > 0) {
            scrollNumber < children.length &&
                setTimeout(() => {
                    setScrollNumber(scrollNumber + 1);
                }, 500);
        } else {
            scrollNumber > 1 &&
                setTimeout(() => {
                    setScrollNumber(scrollNumber - 1);
                }, 500);
        }
    };

    window.onscroll = (e) => {
        scrollNumber < children.length && window.scrollTo(0, 0);
    };


    // window.addEventListener(
    //     "wheel",
    //     (e) => {
    //         console.log(scrollNumber, children.length);
    //         scrollNumber < children.length && e.preventDefault();
    //     },
    //     { passive: false }
    // );



    return (
        <div className="parallax" onWheel={handleScroll}>
            {React.Children.map(children, (child, i, arr) => {
               return cloneElement(child, { scrollNumber });
            })}
        </div>
    );
};

export default Parallax;
