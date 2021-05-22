import React from 'react';
import pbImage from '../../../images/pbImage.png';
import ptImage from '../../../images/ptImage.png';
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
            <h3 className="head-text"> Some Of My Efforts</h3>
            <div className="project">
                <img src={pbImage} alt="" className="project-img" />
                <div className="project-description">
                    <button className="btn-brand">View</button>
                    <h3>Programming Babocched</h3>
                    <p>A Q/A website for programmers</p>
                </div>
            </div>
            <div className="project"></div>
            <div className="project">
                <img src={ptImage} alt="" />
                <div className="project-description">
                    <button className="btn-brand">View</button>
                    <h3>Pro Tutors</h3>
                    <p>An Online Tutoring System</p>
                </div>
            </div>
            <div className="project"></div>
            <div className="project"></div>

            <div className="project"></div>
            <div className="project-end"></div>
            <div className="project-end"></div>
        </div>
    );
};

export default Projects;