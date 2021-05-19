import React from 'react';
import './Projects.css';
const Projects = () => {

    const handleScroll = e => {
    let element = e.target
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      console.log("end")
    }
  }

    return (
        <div className="projects" onScroll={handleScroll}>
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
    );
};

export default Projects;