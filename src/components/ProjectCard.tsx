import React, { useState } from "react";
import Chip from '@mui/material/Chip';
import ProjectModal from './ProjectModal';
// 1. Define TypeScript interfaces matching your JSON structure
interface Screenshot {
    img: string;
    discription: string;
}

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    screenshots?: Screenshot[];
    details?: string;
    features?: string[];
}

interface ProjectCardProps {
    project: Project; // Explicitly type the incoming prop
}

// 2. Pass the interface type to the functional component
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="project-card" onClick={() => setIsOpen(true)}>
            <div>
                {/* 🔗 Title & Icon linked together as an interactive row layout */}
                <div className="project-header-link" onClick={() => setIsOpen(true)}>
                <h3>{project.title}</h3>
                <svg
                    className="info-icon"
                    xmlns="http://w3.org"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                </div>
                <p className="project-description">{project.description}</p>

                <div className="tech-stack">
                <div className="badge-container">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                    <span className="tech-badge excess">+{project.technologies.length - 4}</span>
                    )}
                </div>
                </div>
            </div>

            <ProjectModal
                isOpen={isOpen}
                project={project}
                onClose={() => setIsOpen(false)}
            />

        </div>
    );
};

export default ProjectCard;
