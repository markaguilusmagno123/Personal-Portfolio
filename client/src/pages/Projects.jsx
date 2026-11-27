
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import ProjectModal from '../components/ProjectModal';
import spendrHomepage from '../assets/projects/spendr/login.png';
import abieraHomepage from '../assets/projects/abiera-acupuncture/homepage.png'

function Projects() {

    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'Spendr',
            subtitle: 'Personal Expense Tracker',
            category: 'Full-Stack Development',
            description:
                'A personal finance management application designed to help users record, organize, and monitor their expenses.',
            thumbnail: spendrHomepage,
            technologies: [
                'React.js',
                'Node.js',
                'Express.js',
                'MongoDB',
                'Ollama AI',
                'OpenRouter AI'
            ],
            video: null,
            screenshots: [
                { title: 'Dashboard', image: null },
                { title: 'Transactions', image: null },
                { title: 'Reports', image: null }
            ],
            github: 'https://github.com/markaguilusmagno123/Spendr',
            demo: 'https://spendr-3b.vercel.app/'
        },
        {
            id: 2,
            title: 'Abiera Acupuncture',
            subtitle: 'Acupuncture & Traditional Chinese Medicine Clinic Website',
            category: 'Business Website Development',
            description:
                'A multi-page informational website developed for Abiera Acupuncture & Traditional Chinese Medicine Clinic in Cebu City. The website introduces the clinic, presents its acupuncture and traditional Chinese medicine services, showcases its environment through a photo gallery, and provides contact information to help potential clients connect with the business.',
            thumbnail: abieraHomepage,
            technologies: [
                'HTML',
                'CSS',
                'JavaScript'
            ],
            video: null,
            screenshots: [
                { title: 'Homepage', image: null },
                { title: 'About the Clinic', image: null },
                { title: 'Services', image: null },
                { title: 'Photo Gallery', image: null },
                { title: 'Contact Page', image: null }
            ],
            github: 'https://github.com/markaguilusmagno123/Preview-Website-for-Abiera-Acupuncture',
            demo: 'https://markaguilusmagno123.github.io/Preview-Website-for-Abiera-Acupuncture/'
        }
    ];

    return (
        <main className="projects-page">

            {/* SECTION 1: PAGE HEADING */}
            <section className="projects-hero">
                <div className="projects-container">

                    <p className="projects-eyebrow">
                        MY SELECTED WORK
                    </p>

                    <h1>
                        Projects I've <span>Built</span>
                    </h1>

                    <p className="projects-introduction">
                        A collection of academic, personal, and practical
                        development projects where I apply my knowledge
                        of web development, explore new technologies,
                        and turn ideas into functional digital solutions.
                    </p>

                </div>
            </section>


            {/* SECTION 2: FEATURED PROJECTS */}
            <section className="featured-projects">
                <div className="projects-container">

                    <div className="projects-section-heading">
                        <p className="projects-eyebrow">
                            FEATURED PROJECTS
                        </p>

                        <h2>
                            Things I've <span>Worked On</span>
                        </h2>

                        <p>
                            Explore some of my development projects
                            and the technologies behind them.
                        </p>
                    </div>


                    <div className="projects-grid">

                        {projects.map((project) => (

                            <div className="project-card" key={project.id}>

                                <div className="project-thumbnail">
                                    <img
                                        src={project.thumbnail}
                                        alt={`${project.title} homepage preview`}
                                    />
                                </div>

                                <div className="project-information">

                                    <p className="project-category">
                                        {project.category}
                                    </p>

                                    <h3>{project.title}</h3>

                                    <h4>{project.subtitle}</h4>

                                    <p className="project-description">
                                        {project.description}
                                    </p>

                                    <div className="project-tags">
                                        {project.technologies.map((tech) => (
                                            <span key={tech}>{tech}</span>
                                        ))}
                                    </div>

                                    <button
                                        className="project-view-button"
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        View Project Details
                                        <span>→</span>
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </section>

            {/* DEVELOPMENT HIGHLIGHTS */}
            <section className="development-highlights-section">
                <div className="development-highlights-container">

                    <div className="development-highlights-heading">
                        <p className="section-eyebrow">
                            WHAT I BRING TO MY PROJECTS
                        </p>

                        <h2>
                            Development <span>Highlights</span>
                        </h2>

                        <p>
                            A closer look at the development practices and
                            capabilities I've explored through academic,
                            personal, and practical projects.
                        </p>
                    </div>

                    <div className="development-highlights-grid">

                        <div className="highlight-card">
                            <div className="highlight-icon">↔</div>
                            <h3>Responsive Web Design</h3>
                            <p>
                                Creating websites that adapt to different screen
                                sizes, from desktop computers to mobile devices.
                            </p>
                        </div>

                        <div className="highlight-card">
                            <div className="highlight-icon">▤</div>
                            <h3>Database & CRUD Operations</h3>
                            <p>
                                Building applications that create, retrieve,
                                update, and delete records using databases.
                            </p>
                        </div>

                        <div className="highlight-card">
                            <div className="highlight-icon">⌘</div>
                            <h3>API Integration</h3>
                            <p>
                                Connecting frontend interfaces with backend
                                services and exploring third-party API integrations.
                            </p>
                        </div>

                        <div className="highlight-card">
                            <div className="highlight-icon">✦</div>
                            <h3>AI-Assisted Development</h3>
                            <p>
                                Exploring AI integrations and language models
                                to introduce intelligent features into web applications.
                            </p>
                        </div>

                    </div>
                </div>

                {/* DEVELOPMENT HIGHLIGHTS CTA */}
                <div className="highlights-cta">
                    <p>Want to know what I can offer for your next project?</p>

                    <Link to="/services" className="highlights-cta-button">
                        Explore My Services <span>→</span>
                    </Link>
                </div>

            </section>


            {/* PROJECT MODAL */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}

        </main>
    );
}

export default Projects;
