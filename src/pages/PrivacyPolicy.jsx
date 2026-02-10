import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-wrapper">
            <Navbar />
            <main className="section bg-white">
                <div className="container">
                    <div className="legal-content">
                        <h1 className="legal-title">Privacy Policy</h1>
                        <p className="legal-date">Last Updated: February 10, 2026</p>

                        <section className="legal-section">
                            <h2>1. Introduction</h2>
                            <p>
                                Axiominds ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our services.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>2. Information We Collect</h2>
                            <p>
                                We may collect personal information such as your name, email address, phone number, and professional details when you contact us through our website or express interest in our services.
                            </p>
                            <ul>
                                <li>Contact Information (Name, Email, Phone)</li>
                                <li>Professional Information (Company, Job Title)</li>
                                <li>Usage Data (IP address, browser type, pages visited)</li>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <h2>3. How We Use Your Information</h2>
                            <p>
                                We use the information we collect to:
                            </p>
                            <ul>
                                <li>Provide and maintain our services</li>
                                <li>Communicate with you regarding your inquiries</li>
                                <li>Improve our website and service offerings</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <h2>4. Data Protection</h2>
                            <p>
                                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or misuse. However, no method of transmission over the internet is 100% secure.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>5. Sharing Your Information</h2>
                            <p>
                                We do not sell your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website or conducting our business, provided they agree to keep this information confidential.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>6. Your Rights</h2>
                            <p>
                                Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or delete your information. To exercise these rights, please contact us at hello@axiominds.com.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>7. Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>8. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at hello@axiominds.com.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />

            <style>{`
        .legal-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem 0;
        }
        .legal-title {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }
        .legal-date {
          color: var(--color-text-light);
          margin-bottom: 3rem;
          font-style: italic;
        }
        .legal-section {
          margin-bottom: 2.5rem;
        }
        .legal-section h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--color-primary);
        }
        .legal-section p {
          margin-bottom: 1rem;
          color: var(--color-text);
          line-height: 1.7;
        }
        .legal-section ul {
          margin-left: 1.5rem;
          margin-bottom: 1rem;
          color: var(--color-text);
        }
        .legal-section li {
          margin-bottom: 0.5rem;
        }
      `}</style>
        </div>
    );
};

export default PrivacyPolicy;
