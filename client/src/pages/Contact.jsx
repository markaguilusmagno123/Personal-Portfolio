
import { Mail, Code, MapPin, Send } from 'lucide-react';
import './Contact.css';

function Contact() {
    return (
        <main className="contact-page">

            {/* CONTACT HERO */}
            <section className="contact-hero">
                <div className="contact-hero-container">

                    <p className="contact-eyebrow">
                        GET IN TOUCH
                    </p>

                    <h1>
                        Let's Start a <span>Conversation.</span>
                    </h1>

                    <p>
                        Have a project in mind, a question, or an opportunity
                        to collaborate? Feel free to reach out. I'd be happy
                        to hear from you.
                    </p>

                </div>
            </section>


            {/* CONTACT CONTENT */}
            <section className="contact-content-section">
                <div className="contact-container">

                    {/* CONTACT INFORMATION */}
                    <div className="contact-information">

                        <div className="contact-section-heading">
                            <p className="contact-eyebrow">
                                CONTACT INFORMATION
                            </p>

                            <h2>
                                Let's Connect <span>!</span>
                            </h2>

                            <p>
                                You can reach me through the following
                                channels. I'm open to discussing projects,
                                opportunities, and collaborations.
                            </p>
                        </div>


                        <div className="contact-info-list">

                            {/* EMAIL */}
                            <div className="contact-info-card">
                                <div className="contact-info-icon">
                                    <Mail size={24} />
                                </div>

                                <div>
                                    <h3>Email</h3>
                                    <a href="mailto:markaguilusmagno@gmail.com">
                                        markaguilusmagno@gmail.com
                                    </a>
                                </div>
                            </div>


                            {/* GITHUB */}
                            <div className="contact-info-card">
                                <div className="contact-info-icon">
                                    <i className="devicon-github-original"></i>
                                </div>

                                <div>
                                    <h3>GitHub</h3>
                                    <a
                                        href="https://github.com/markaguilusmagno123"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Visit my GitHub profile
                                    </a>
                                </div>
                            </div>

                            {/* LOCATION */}
                            <div className="contact-info-card">
                                <div className="contact-info-icon">
                                    <MapPin size={24} />
                                </div>

                                <div>
                                    <h3>Location</h3>
                                    <p>Philippines</p>
                                </div>
                            </div>

                        </div>

                    </div>


                    {/* CONTACT FORM */}
                    <div className="contact-form-container">

                        <div className="contact-form-heading">
                            <h2>Send Me a Message</h2>

                            <p>
                                Fill out the form below and tell me a
                                little about what you're looking for.
                            </p>
                        </div>


                        <form className="contact-form">

                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>


                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>


                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="What is this about?"
                                    required
                                />
                            </div>


                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    placeholder="Tell me about your project or inquiry..."
                                    required
                                ></textarea>
                            </div>


                            <button type="submit" className="contact-submit-button">
                                Send Message
                                <Send size={18} />
                            </button>

                        </form>

                    </div>

                </div>
            </section>

        </main>
    );
}

export default Contact;
