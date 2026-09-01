import React, { useState } from "react";
import Chip from '@mui/material/Chip';

// 1. Define TypeScript interfaces matching your JSON structure
interface Screenshot {
    img: string;
    discription: string;
}

interface Project {
    id: number;
    title: string;
    description: string;
    role: string;
    technologies: string[];
    screenshots?: Screenshot[];
}

interface ProjectCardProps {
    project: Project; // Explicitly type the incoming prop
}

// 2. Pass the interface type to the functional component
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const slides = project.screenshots || [];
    const hasSlides = slides.length > 0;

    const nextSlide = (): void => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = (): void => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className="project-card">
            <div>
                <h3>{project.title}</h3>
                <p className="project-role"><strong>Role:</strong> {project.role}</p>
                <p className="project-description">{project.description}</p>

                <div className="tech-stack">
                    <strong>Tech Stack:</strong>
                    <div className="badge-container">
                        {project.technologies.map((tech, index) => (
                            //<span key={index} className="tech-badge">{tech}</span>
                            <Chip key={index} className='chip' label={tech} />

                        ))}
                    </div>
                </div>
            </div>

            {/* 🖼️ Slideshow Container */}
            {hasSlides && (
                <div className="slideshow-container">
                    <div className="slides-wrapper">
                        <img
                            src={slides[currentSlide].img}
                            alt={slides[currentSlide].discription || project.title}
                            className="slideshow-img"
                        />

                        {/* Slide Navigation Arrows */}
                        {slides.length > 1 && (
                            <>
                                <button className="nav-btn prev" onClick={nextSlide} aria-label="Previous image">‹</button>
                                <button className="nav-btn next" onClick={nextSlide} aria-label="Next image">›</button>
                            </>
                        )}
                    </div>

                    {/* Slide Description Caption & Micro-dots indicator */}
                    <div className="slide-footer">
                        <p className="slide-caption">{slides[currentSlide].discription}</p>
                        {slides.length > 1 && (
                            <div className="slide-dots">
                                {slides.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                                        onClick={() => setCurrentSlide(index)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
