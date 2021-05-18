import React from 'react';

const ParallaxLayer = ({scrollNumber, pageNumber, children}) => {

return (
    <div
        className={scrollNumber === pageNumber ? "parallax-layer active-layer" : "parallax-layer"}
        
    >
        {children}
    </div>
);
};

export default ParallaxLayer;