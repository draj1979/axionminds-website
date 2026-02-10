import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-wrapper">
            <Navbar />
            <main className="section bg-white">
                <div className="container">
                    <div className="legal-content">
                        <h1 className="legal-title">Terms of Service</h1>
                        <p className="legal-date">Last Updated: February 10, 2026</p>

                        <section className="legal-section">
                            <h2>1. Agreement to Terms</h2>
                            <p>
                                By accessing or using the Axiominds website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>2. Use of Services</h2>
                            <p>
                                Axiominds provides strategic advisory and hiring services for Global Capability Centers (GCCs). You agree to use our website and services only for lawful purposes and in accordance with these Terms.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>3. Intellectual Property</h2>
                            <p>
                                The content, features, and functionality of this website, including but not limited to text, graphics, logos, and software, are the exclusive property of Axiominds and are protected by international copyright, trademark, and other intellectual property laws.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>4. User Responsibilities</h2>
                            <p>
                                When using our contact forms or services, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of any communication and for all activities that occur under your engagement with us.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>5. Limitation of Liability</h2>
                            <p>
                                To the maximum extent permitted by law, Axiominds shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, resulting from your access to or use of our website or services.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>6. Disclaimer of Warranties</h2>
                            <p>
                                Our website and services are provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>7. Governing Law</h2>
                            <p>
                                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms shall be brought exclusively in the courts located in Bangalore, India.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>8. Changes to Terms</h2>
                            <p>
                                We reserve the right to modify or replace these Terms at any time. We will provide notice of any significant changes by posting the new Terms on this page. Your continued use of the website after such changes constitutes acceptance of the new Terms.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>9. Contact Us</h2>
                            <p>
                                If you have any questions about these Terms of Service, please contact us at hello@axiominds.com.
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
      `}</style>
        </div>
    );
};

export default TermsOfService;
