import { Link } from 'react-router-dom';
import './About.css';
import usePageTitle from '../usePageTitle';

function About() {

    usePageTitle('About Me | Mark Magno');

    return (
        <main className="about-page">

            {/* SECTION 1: ABOUT ME */}
            <section className="about-hero">
                <div className="about-container">

                    <div className="about-content">

                        <div className="about-text">
                            <p className="about-eyebrow">
                                GET TO KNOW ME
                            </p>

                            <h1>
                                About <span>Me</span>
                            </h1>

                            <p className="about-introduction">
                                I'm Mark Aguilus Magno, an aspiring
                                full-stack web developer passionate about
                                building modern, responsive, and functional
                                websites and web applications.

                                My interest in technology has grown through
                                academic projects, independent learning,
                                and hands-on experience with different
                                programming languages and development tools.
                            </p>
                        </div>

                        <div className="about-image">
                            <img
                                src="/images/profile.jpg"
                                alt="Mark Aguilus Magno"
                            />
                        </div>

                    </div>

                </div>
            </section>


            {/* SECTION 2: DEVELOPMENT JOURNEY */}
            <section className="journey-section">
                <div className="about-container">

                    <div className="journey-content">

                        <div className="journey-image">
                            <img
                                src="../public/images/demo.jpg"
                                alt="My web development learning journey"
                            />
                        </div>

                        <div className="journey-text">

                            <div className="about-section-heading">
                                <p className="about-eyebrow">
                                    MY DEVELOPMENT JOURNEY
                                </p>

                                <h2>
                                    Learning Through <span>Experience</span>
                                </h2>
                            </div>

                            <p>
                                My development journey has been shaped by
                                a combination of academic projects and
                                self-directed learning. Through different
                                school activities and programming projects,
                                I've had opportunities to explore various
                                technologies, understand development
                                concepts, and apply what I've learned
                                to practical applications.
                            </p>

                            <p>
                                Beyond the classroom, I continuously
                                expand my knowledge through different
                                learning resources, including AI-assisted
                                learning, YouTube tutorials, online
                                documentation, educational websites,
                                interactive coding platforms, and
                                hands-on experimentation.
                            </p>

                            <p>
                                These experiences allow me to explore
                                unfamiliar technologies, understand
                                different approaches to solving problems,
                                and gradually improve my development skills.
                            </p>

                        </div>

                    </div>

                </div>
            </section>


            {/* SECTION 3: TECHNICAL BACKGROUND */}
            <section className="technical-section">
                <div className="about-container">

                    <div className="about-section-heading">
                        <p className="about-eyebrow">
                            MY TECHNICAL BACKGROUND
                        </p>

                        <h2>
                            Technologies and <span>Tools</span>
                        </h2>

                        <p>
                            The technologies and development tools
                            I've explored and used throughout my
                            academic and personal projects.
                        </p>
                    </div>

                    <div className="technical-grid">

                        <div className="technical-card">
                            <h3>Frontend Development</h3>
                            <p>
                                Building responsive and interactive user interfaces
                                with attention to layout, design, and user experience.
                            </p>
                            <div className="technology-tags">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                                <span>React.js</span>
                            </div>
                        </div>

                        <div className="technical-card">
                            <h3>Backend Development</h3>
                            <p>
                                Exploring server-side development, API creation,
                                and application functionality.
                            </p>
                            <div className="technology-tags">
                                <span>Node.js</span>
                                <span>Express.js</span>
                                <span>PHP</span>
                            </div>
                        </div>

                        <div className="technical-card">
                            <h3>Database Management</h3>
                            <p>
                                Working with databases to store, organize,
                                retrieve, and manage application data.
                            </p>
                            <div className="technology-tags">
                                <span>MongoDB</span>
                                <span>MySQL</span>
                            </div>
                        </div>

                        <div className="technical-card">
                            <h3>CMS & Website Development</h3>
                            <p>
                                Building and customizing websites using content
                                management systems and visual page builders.
                            </p>

                            <div className="technology-tags">
                                <span>WordPress</span>
                                <span>Elementor</span>
                            </div>
                        </div>

                        <div className="technical-card">
                            <h3>AI & API Integration</h3>
                            <p>
                                Exploring AI-powered application features,
                                connecting external APIs, and configuring
                                API credentials for application integrations.
                            </p>

                            <div className="technology-tags">
                                <span>OpenRouter AI</span>
                                <span>REST API</span>
                                <span>API Keys</span>
                            </div>
                        </div>

                        <div className="technical-card">
                            <h3>Development Tools</h3>
                            <p>
                                Using development tools for coding, version control,
                                API testing, and project management.
                            </p>
                            <div className="technology-tags">
                                <span>Git</span>
                                <span>GitHub</span>
                                <span>VS Code</span>
                                <span>Thunder Client</span>
                            </div>
                        </div>

                    </div>

                    <div className="technical-cta">
                        <p>
                            Want to know how I can help with your next project?
                        </p>

                        <Link to="/services" className="technical-cta-button">
                            Explore My Services →
                        </Link>
                    </div>

                </div>
            </section>


            {/* SECTION 4: DEVELOPMENT APPROACH */}
            <section className="approach-section">
                <div className="about-container">

                    <div className="about-section-heading">
                        <p className="about-eyebrow">
                            MY DEVELOPMENT PHILOSOPHY
                        </p>

                        <h2>
                            My Approach to <span>Development</span>
                        </h2>
                    </div>

                    <div className="approach-grid">

                        <div className="approach-card">
                            <h3>Continuous Learning</h3>
                            <p>
                                Staying curious and continuously
                                exploring new technologies, concepts,
                                and development practices.
                            </p>
                        </div>

                        <div className="approach-card">
                            <h3>Problem-Solving</h3>
                            <p>
                                Understanding challenges, breaking
                                them into manageable tasks, and
                                finding practical solutions.
                            </p>
                        </div>

                        <div className="approach-card">
                            <h3>Practical Experience</h3>
                            <p>
                                Applying programming concepts through
                                hands-on projects and experimenting
                                with different approaches.
                            </p>
                        </div>

                        <div className="approach-card">
                            <h3>User-Focused Development</h3>
                            <p>
                                Creating functional and accessible
                                applications with an emphasis on
                                usability and user experience.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

        </main>
    );
}

export default About;