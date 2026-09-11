import React, { useState,useEffect,useRef } from 'react';
import '../assets/styles/Modal.scss'; // We will create this stylesheet next

interface Screenshot {
  img: string;
  discription: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  details?: string;
  features?: string[];
  screenshots?: Screenshot[];
}

interface ProjectModalProps {
  isOpen: boolean;
  project: Project;
  onClose: () => void;
}


const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, project, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slides = project.screenshots || [];
  const hasSlides = slides.length > 0;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Helper functions to change slides
  const nextSlide = () => setCurrentSlide((p) => (p === slides.length - 1 ? 0 : p + 1));
  const prevSlide = () => setCurrentSlide((p) => (p === 0 ? slides.length - 1 : p - 1));

  // 🔄 1. Automatic Sliding Timer Loop Setup
  const startTimer = () => {
    stopTimer(); // Clear any existing intervals first
    if (isOpen && slides.length > 1) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 4000); // ⏱️ Slideloop intervals set to trigger every 4 seconds
    }
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // Start timer on load or slide length configuration changes
  useEffect(() => {
    if (isOpen) {
      startTimer();
    } else {
      stopTimer();
    }
    return () => stopTimer();
  }, [isOpen, slides.length]);

  // Restart timer when a user interacts manually (prevents immediate double-skipping)
  const handleManualNext = () => { stopTimer(); nextSlide(); startTimer(); };
  const handleManualPrev = () => { stopTimer(); prevSlide(); startTimer(); };
  const handleDotClick = (idx: number) => { stopTimer(); setCurrentSlide(idx); startTimer(); };

  // 2. Prevent background scrolling mechanics
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentSlide(0);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // 3. Handle Keyboard Event Listeners
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && slides.length > 1) handleManualNext();
      if (e.key === 'ArrowLeft' && slides.length > 1) handleManualPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, slides.length]);

  if (!isOpen) return null;

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      {/* 🌟 1. Outer Frame: Holds the true border radius and clips content */}
      <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close modal">×</button>

        {/* 🌟 2. Inner Frame: Safely holds the scrollbar away from parent borders */}
        <div className="modal-scroll-body">
          <h2>{project.title}</h2>
          {/* 📝 Sequential Top-to-Bottom Info Section */}
          <div className="modal-text-content">
            {project.details && (
              <div className="info-block">
                <h4>Project Details</h4>
                <p>{project.details}</p>
              </div>
            )}

            {project.features && project.features.length > 0 && (
              <div className="info-block">
                <h4>Key Features</h4>
                <ul className="stylized-features">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="info-block">
              <h4>Technologies Used</h4>
              <div className="modal-tech-badges">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="m-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="modal-full-width-carousel">
            {hasSlides && (
              <div className="modal-slideshow">
                <h4>Project Gallery</h4>
                <div className="image-wrapper">
                  <img src={`/${slides[currentSlide].img}`} alt={slides[currentSlide].discription} />
                  {slides.length > 1 && (
                    <>
                      <button className="slide-arrow prev" onClick={handleManualPrev}>‹</button>
                      <button className="slide-arrow next" onClick={handleManualNext}>›</button>
                    </>
                  )}
                </div>
                <p className="image-caption">{slides[currentSlide].discription}</p>

                {slides.length > 1 && (
                  <div className="carousel-dots">
                    {slides.map((_, idx) => (
                      <span
                        key={idx}
                        className={`dot ${idx === currentSlide ? 'active' : ''}`}
                        onClick={() => handleDotClick(idx)}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
