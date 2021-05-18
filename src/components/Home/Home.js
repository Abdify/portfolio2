import React from "react";
import Parallax from "../Utilities/Parallax/Parallax";
import ParallaxLayer from "../Utilities/Parallax/ParallaxLayer";
import Header from "./Header/Header";
import "./Home.css";
import Projects from "./Projects/Projects";
import Question1 from "./Questions/Question1";

const Home = () => {
    return (
        <Parallax>
            <ParallaxLayer pageNumber={1}>
                <Header />
            </ParallaxLayer>
            <ParallaxLayer pageNumber={2}>
                <Question1 />
            </ParallaxLayer>
            <ParallaxLayer pageNumber={3}>
                <h1>Ok</h1>
            </ParallaxLayer>
            <Projects />
            
        </Parallax>
    );
};

export default Home;
