import { Link } from 'react-router-dom';
import {
    Globe,
    AppWindow,
    MonitorSmartphone,
    PanelsTopLeft,
    Server,
    Network,
    Blocks,
    Palette,
    Database,
    Settings
} from 'lucide-react';
import './Services.css';

function Services() {
    return (
        <main className="services-page">

            {/* SERVICES HERO */}
            <section className="services-hero">
                <div className="services-hero-container">

                    <p className="services-eyebrow">
                        WHAT I CAN DO FOR YOU
                    </p>

                    <h1>
                        Services Designed to
                        <span> Bring Your Ideas to Life.</span>
                    </h1>

                    <p className="services-introduction">
                        From designing responsive websites to developing
                        functional web applications, I aim to create
                        practical digital solutions that help bring your
                        ideas and business goals to life.
                    </p>

                    <div className="services-hero-buttons">
                        <a href="#services-list" className="services-primary-button">
                            Explore My Services <span>→</span>
                        </a>

                        <Link to="/contact" className="services-secondary-button">
                            Let's Talk
                        </Link>
                    </div>

                </div>
            </section>

            {/* SERVICES OFFERED */}
            <section className="services-list-section" id="services-list">
                <div className="services-list-container">

                    <div className="services-section-heading">
                        <p className="services-eyebrow">WHAT I OFFER</p>

                        <h2>
                            Services I <span>Provide</span>
                        </h2>

                        <p>
                            Practical web development solutions designed to
                            help individuals and businesses establish and
                            improve their digital presence.
                        </p>
                    </div>

                    <div className="services-grid">

                        {/* WEBSITE DEVELOPMENT */}
                        <div className="service-card">
                            <div className="service-icon">
                                <Globe size={28} strokeWidth={1.8} />
                            </div>

                            <h3>Website Development</h3>

                            <p>
                                Developing informational and business websites
                                tailored to your goals, brand identity, and
                                content requirements.
                            </p>

                            <div className="service-technologies">
                                <span>
                                    <i className="devicon-html5-plain colored"></i>
                                    HTML
                                </span>

                                <span>
                                    <i className="devicon-css3-plain colored"></i>
                                    CSS
                                </span>

                                <span>
                                    <i className="devicon-javascript-plain colored"></i>
                                    JavaScript
                                </span>

                                <span>
                                    <i className="devicon-react-original colored"></i>
                                    React.js
                                </span>
                            </div>
                        </div>

                        {/* WEB APPLICATION DEVELOPMENT */}
                        <div className="service-card">
                            <div className="service-icon">
                                <AppWindow size={28} strokeWidth={1.8} />
                            </div>


                            <h3>Web Application Development</h3>

                            <p>
                                Development of interactive web applications designed to
                                simplify tasks, manage information, and support everyday
                                business operations.
                            </p>

                            <div className="service-technologies">
                                <span>
                                    <i className="devicon-react-original colored"></i>
                                    React.js
                                </span>

                                <span>
                                    <i className="devicon-nodejs-plain colored"></i>
                                    Node.js
                                </span>

                                <span>
                                    <i className="devicon-express-original"></i>
                                    Express.js
                                </span>

                                <span>
                                    <i className="devicon-mongodb-plain colored"></i>
                                    MongoDB
                                </span>

                            </div>
                        </div>

                        {/* RESPONSIVE WEB DESIGN */}
                        <div className="service-card">
                            <div className="service-icon">
                                <MonitorSmartphone size={28} strokeWidth={1.8} />
                            </div>

                            <h3>Responsive Web Design</h3>

                            <p>
                                Creating adaptable website layouts that provide
                                a consistent and user-friendly experience across
                                desktop, tablet, and mobile devices.
                            </p>

                            <div className="service-technologies">
                                
                                <span>
                                    <i className="devicon-css3-plain colored"></i>
                                    CSS
                                </span>

                            </div>
                        </div>

                        {/* FRONTEND DEVELOPMENT */}
                        <div className="service-card">
                            <div className="service-icon">
                                <PanelsTopLeft size={28} strokeWidth={1.8} />
                            </div>

                            <h3>Frontend Development</h3>

                            <p>
                                Building interactive user interfaces with
                                reusable components, functional features,
                                and intuitive navigation.
                            </p>

                            <div className="service-technologies">

                                <span>
                                    <i className="devicon-react-original colored"></i>
                                    React.js
                                </span>

                                <span>
                                    <i className="devicon-javascript-plain colored"></i>
                                    JavaScript
                                </span>

                                <span>
                                    <i className="devicon-react-original"></i>
                                    React Router
                                </span>

                            </div>
                        </div>

                        {/* BACKEND DEVELOPMENT */}
                        <div className="service-card">
                            <div className="service-icon">
                                <Server size={28} strokeWidth={1.8} />
                            </div>

                            <h3>Backend Development</h3>

                            <p>
                                Developing server-side functionality, REST APIs,
                                database connections, and CRUD operations
                                for web applications.
                            </p>

                            <div className="service-technologies">

                                <span>
                                    <i className="devicon-nodejs-plain colored"></i>
                                    Node.js
                                </span>

                                <span>
                                    <i className="devicon-express-original"></i>
                                    Express.js
                                </span>

                                <span>
                                    <i className="devicon-mongodb-plain colored"></i>
                                    MongoDB
                                </span>

                                <span>
                                    <i className="devicon-mysql-plain"></i>
                                    MySQL
                                </span>
                        
                            </div>
                        </div>

                        {/* API AND AI INTEGRATION */}
                        <div className="service-card">
                            <div className="service-icon">
                                <Network size={28} strokeWidth={1.8} />
                            </div>

                            <h3>API & AI Integration</h3>

                            <p>
                                Connecting web applications with external APIs
                                and exploring AI-powered features to extend
                                application functionality.
                            </p>

                            <div className="service-technologies">
                                <span>
                                    <i className="api-icon">
                                        <icon name="network" />
                                    </i>
                                    REST API
                                </span>

                                <span className="custom-tech">
                                    <img src="../src/assets/icons/openrouter-ai.svg" alt="OpenRouter" />
                                    OpenRouter AI
                                </span>
                                
                                <span className="custom-tech">
                                    <img src="../src/assets/icons/ollama-icon.svg" alt="Ollama" />
                                    Ollama
                                </span>
                            </div>
                        </div>

                        {/* WORDPRESS DEVELOPMENT */}
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="devicon-wordpress-plain"></i>
                            </div>

                            <h3>WordPress Development</h3>

                            <p>
                                Creating and customizing websites using
                                WordPress and Elementor, including page layouts,
                                content sections, and visual elements.
                            </p>

                            <div className="service-technologies">

                                <span>
                                    <i className="devicon-wordpress-plain"></i>
                                    WordPress
                                </span>

                                <span className="custom-tech">
                                    <img className='elementor' src="../src/assets/icons/elementor.svg" alt="Ollama" />
                                    Elementor
                                </span>
                                
                                <span>
                                    <i className="devicon-css3-plain colored"></i>
                                    CSS
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ADDITIONAL DIGITAL SERVICES */}
            <section className="additional-services-section" id="additional-services-list">
                <div className="additional-services-container">

                    {/* SECTION HEADING */}
                    <div className="additional-services-heading">

                        <h2>
                            Additional Digital <span>Services</span>
                        </h2>

                        <p>
                            Beyond web development, I also offer digital services
                            that help individuals and businesses manage their
                            online presence, organize information, and create
                            professional digital materials.
                        </p>
                    </div>

                    {/* SERVICE CARDS */}
                    <div className="additional-services-grid">

                        {/* WEBSITE DEPLOYMENT & MANAGEMENT */}
                        <div className="additional-service-card">
                            <div className="additional-service-icon">
                                <Server size={28} strokeWidth={1.8} />
                            </div>

                            <h3>Website Deployment & Management</h3>

                            <p>
                                Assistance with website deployment, configuration,
                                maintenance, and essential website communication
                                features to help keep websites accessible and functional.
                            </p>

                            <ul>
                                <li>Website hosting and deployment</li>
                                <li>Domain and DNS configuration</li>
                                <li>SSL certificate setup</li>
                                <li>Website maintenance and content updates</li>
                                <li>SMTP configuration and email integration</li>
                                <li>WordPress email configuration</li>
                                <li>Password reset and account verification emails</li>
                                <li>Basic website troubleshooting</li>
                            </ul>
                        </div>

                        {/* GRAPHIC DESIGN & VISUAL CONTENT */}
                        <div className="additional-service-card">
                            <div className="additional-service-icon">
                                <Palette size={28} strokeWidth={1.8} />
                            </div>

                            <h3>Graphic Design & Visual Content</h3>

                            <p>
                                Creation of visual materials for businesses,
                                organizations, and individuals using Canva.
                            </p>

                            <ul>
                                <li>Social media graphics</li>
                                <li>Presentation design</li>
                                <li>Posters and flyers</li>
                                <li>Brochures and promotional materials</li>
                                <li>Certificates</li>
                                <li>Simple document layouts</li>
                            </ul>
                        </div>

                        {/* DATA MANAGEMENT & ADMINISTRATIVE SUPPORT */}
                        <div className="additional-service-card">
                            <div className="additional-service-icon">
                                <Database size={28} strokeWidth={1.8} />
                            </div>

                            <h3>Data Management & Administrative Support</h3>

                            <p>
                                Organizing, encoding, and maintaining digital
                                information to help simplify administrative tasks.
                            </p>

                            <ul>
                                <li>Data entry and encoding</li>
                                <li>Spreadsheet management</li>
                                <li>Data organization and cleaning</li>
                                <li>Document digitization</li>
                                <li>PDF, Excel, and Word conversions</li>
                                <li>Digital record management</li>
                            </ul>
                        </div>

                        {/* WEBSITE & PLATFORM CUSTOMIZATION */}
                        <div className="additional-service-card">
                            <div className="additional-service-icon">
                                <Settings size={28} strokeWidth={1.8} />
                            </div>

                            <h3>Website & Platform Customization</h3>

                            <p>
                                Improving existing websites through visual
                                adjustments, content updates, and platform
                                customization.
                            </p>

                            <ul>
                                <li>WordPress and Elementor customization</li>
                                <li>Website content updates</li>
                                <li>Layout and styling adjustments</li>
                                <li>Basic plugin configuration</li>
                                <li>Existing website improvements</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* SERVICES CTA */}
            <section className="services-cta">
                <div className="services-cta-container">
                    <p className="services-eyebrow">LET'S WORK TOGETHER</p>

                    <h2>
                        Have a Project in <span>Mind?</span>
                    </h2>

                    <p>
                        Whether you need a website, a web application, or
                        help managing your digital presence, I'd be happy
                        to discuss how I can help.
                    </p>

                    <Link to="/contact" className="services-cta-button">
                        Get in Touch <span>→</span>
                    </Link>
                </div>
            </section>

        </main>
    );
}

export default Services;