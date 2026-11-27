import { useState } from 'react';
import axios from 'axios';
import { Mail, MapPin, Send } from 'lucide-react';
import { FaFacebookMessenger } from 'react-icons/fa';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setStatus({
            type: '',
            message: ''
        });

        try {
            const response = await axios.post(
                'http://localhost:3000/api/contact',
                formData
            );

            setStatus({
                type: 'success',
                message: response.data.message
            });

            // Clear the form after successful submission
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

        } catch (error) {
            setStatus({
                type: 'error',
                message: error.response?.data?.message ||
                    'Something went wrong. Please try again.'
            });

        } finally {
            setLoading(false);
        }
    };

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
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=markaguilusmagno@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        markaguilusmagno@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* MESSENGER */}
                            <div className="contact-info-card">
                                <div className="contact-info-icon">
                                    <FaFacebookMessenger size={24} />
                                </div>

                                <div>
                                    <h3>Messenger</h3>
                                    <a 
                                        href="https://www.facebook.com/markaguilus.magno" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Mark Aguilus Magno
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


                        <form className="contact-form" onSubmit={handleSubmit}>

                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    maxLength={100}
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
                                    value={formData.email}
                                    onChange={handleChange}
                                    maxLength={254}
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
                                    value={formData.subject}
                                    onChange={handleChange}
                                    maxLength={150}
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
                                    value={formData.message}
                                    onChange={handleChange}
                                    maxLength={5000}
                                    required
                                ></textarea>
                            </div>


                            <button
                                type="submit"
                                className="contact-submit-button"
                                disabled={loading}
                            >
                                {loading ? 'Sending Message...' : 'Send Message'}
                                <Send size={18} />
                            </button>

                            {status.message && (
                                <p className={`form-status ${status.type}`} role="status">
                                    {status.message}
                                </p>
                            )}

                        </form>

                    </div>

                </div>
            </section>

        </main>
    );
}

export default Contact;
