import React from 'react';
import './Projects.css';
const Projects = ({scrollNumber}) => {

    const handleScroll = e => {
    let element = e.target
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      console.log("end")
    }
  }

    return (
        scrollNumber >= 4 ? <div className="projects" onScroll={handleScroll}>
            <div className="project"></div>
            <div className="project"></div>
            <div className="project"></div>
            <div className="project"></div>
            <div className="project"></div>
            <div className="project">
                PB
            </div>
            <div className="project">
                PT
            </div>
            <div className="project"></div>
            <div className="project"></div>
            <div className="project"></div>
        </div>
        :
        <div></div>
    );
};

export default Projects;