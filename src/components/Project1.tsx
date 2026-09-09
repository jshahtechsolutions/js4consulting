import React from "react";
import '../assets/styles/Project1.scss';
import projectsData from '../assets/data/projects.json';
import ProjectCard from './ProjectCard';
import ClientCarousel from './ClientCarousel';
/*<div id="projects">
            <ClientCarousel />
            <div className="items-container">
                <h1>Projects</h1>
                <section id="projects" className="projects-section">
                    <div className="projects-grid">
                        {projectsData.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </section>
            </div>
        </div>*/
function Project() {
    return (
        <div id="projects">
            <div className="projects-container">
                <h1>Projects</h1>
                <ClientCarousel />
                <section className="projects-section">
                    <div className="projects-grid">
                        {projectsData.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Project;
