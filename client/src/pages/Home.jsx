import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <main className="home">

            <section className="hero">
                <div className="hero-container">

                    <div className="hero-content">

                        <p className="hero-subtitle">
                            WELCOME TO MY PORTFOLIO
                        </p>

                        <h1>
                            Hi! I'm <span> Mark Aguilus Magno </span>
                        </h1>

                        <p className="hero-description">
                            I'm an aspiring full-stack developer passionate about 
                            building modern, responsive,
                            and functional websites and web applications.
                            I transform ideas into practical digital solutions
                            using modern web technologies..
                        </p>

                        <div className="hero-buttons">

                            <Link to="/about" className="btn-secondary">
                                Get to Know Me
                            </Link>

                            <Link to="/projects" className="btn-primary">
                                View My Projects
                            </Link>

                        </div>

                    </div>

                    <div className="hero-visual">
                        <div className="hero-card">
                            <span className="code-icon">&lt;/&gt;</span>
                            <h2>Developer</h2>
                            <p>Turning ideas into functional web experiences.</p>
                        </div>
                    </div>

                </div>
                
            </section>

        </main>
    );
}

export default Home;