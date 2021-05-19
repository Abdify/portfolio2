import React from "react";
import Collection from "../Collection/Collection";
import Parallax from "../Utilities/Parallax/Parallax";
import ParallaxLayer from "../Utilities/Parallax/ParallaxLayer";
import Header from "./Header/Header";
import "./Home.css";
import Projects from "./Projects/Projects";
import Question1 from "./Questions/Question1/Question1";
import Question2 from "./Questions/Question2/Question2";

const Home = () => {
    return (
        <>
            <Parallax>
                <ParallaxLayer pageNumber={1}>
                    <Header />
                </ParallaxLayer>
                <ParallaxLayer pageNumber={2}>
                    <Question1 />
                </ParallaxLayer>
                <ParallaxLayer pageNumber={3}>
                    <Collection />
                </ParallaxLayer>
            </Parallax>
            
            <Projects />
            <Question2 />
        </>
    );
};

export default Home;
