
import { useEffect, useState } from 'react';
import './ProjectModal.css';

function ProjectModal({ project, onClose }) {

    const [previewMode, setPreviewMode] = useState('video');
    const [currentSlide, setCurrentSlide] = useState(0);

    const screenshots = project.screenshots || [];

    useEffect(() => {
        function handleEscape(event) {
            if (event.key === 'Escape') {
                onClose();
            }
        }

        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    function nextSlide() {
        setCurrentSlide((previous) =>
            (previous + 1) % screenshots.length
        );
    }

    function previousSlide() {
        setCurrentSlide((previous) =>
            (previous - 1 + screenshots.length) % screenshots.length
        );
    }

    return (
        <div className="project-modal-overlay" onClick={onClose}>

            <div
                className="project-modal"
                onClick={(event) => event.stopPropagation()}
            >

                {/* MODAL HEADER */}
                <div className="modal-header">

                    <div>
                        <p>PROJECT PREVIEW</p>
                        <h2>{project.title}</h2>
                    </div>

                    <button
                        className="modal-close"
                        onClick={onClose}
                        aria-label="Close project details"
                    >
                        ×
                    </button>

                </div>


                {/* VIDEO / SCREENSHOT SWITCHER */}
                <div className="preview-switcher">

                    <button
                        className={previewMode === 'video' ? 'active' : ''}
                        onClick={() => setPreviewMode('video')}
                    >
                        Video Demo
                    </button>

                    <button
                        className={previewMode === 'screenshots' ? 'active' : ''}
                        onClick={() => setPreviewMode('screenshots')}
                    >
                        Screenshots
                    </button>

                </div>


                {/* PREVIEW CONTENT */}
                <div className="modal-preview">

                    {previewMode === 'video' ? (

                        <div className="video-placeholder">
                            <div className="placeholder-icon">▶</div>
                            <p>Video Demonstration</p>
                            <span>Your project recording will appear here.</span>
                        </div>

                    ) : (

                        <div className="screenshot-preview">

                            <div className="screenshot-placeholder">

                                <p>
                                    {screenshots[currentSlide]?.title}
                                </p>

                                <span>
                                    Screenshot Preview
                                </span>

                            </div>

                            {screenshots.length > 1 && (
                                <div className="slideshow-controls">

                                    <button onClick={previousSlide}>
                                        ← Previous
                                    </button>

                                    <span>
                                        {currentSlide + 1} / {screenshots.length}
                                    </span>

                                    <button onClick={nextSlide}>
                                        Next →
                                    </button>

                                </div>
                            )}

                        </div>

                    )}

                </div>


                {/* PROJECT INFORMATION */}
                <div className="modal-project-information">

                    <h3>{project.subtitle}</h3>

                    <p>{project.description}</p>

                    <h4>Technologies Used</h4>

                    <div className="project-tags">
                        {project.technologies.map((tech) => (
                            <span key={tech}>{tech}</span>
                        ))}
                    </div>

                    <div className="modal-project-links">

                        <button
                            className="modal-link-button"
                            onClick={() => window.open(project.github, '_blank')}
                        >
                            GitHub Repository →
                        </button>

                        <button
                            className="modal-link-button secondary"
                            onClick={() => window.open(project.demo, '_blank')}
                        >
                            Live Demo →
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ProjectModal;
