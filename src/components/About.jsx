import React from 'react';

const About = () => {
    return (
        <section className="section" id="about">
            <div className="container">

                {/* Company Narrative */}
                <div className="about-narrative">
                    <div className="section-header">
                        <h2 className="section-title">About Axionmind</h2>
                        <p className="narrative-text">
                            Axionmind was born out of a critical gap in the GCC ecosystem: the disconnect between
                            transactional recruitment and strategic capability building.
                        </p>
                        <p className="narrative-text">
                            We realized that modern GCCs don't just need bodies in seats; they need product owners,
                            architects, and AI innovators who can drive global impact from India. Our philosophy is rooted
                            in ownership and execution—helping you build teams that are true extensions of your global engineering culture.
                        </p>
                    </div>
                </div>

                {/* Founder Profile */}
                <div className="founder-profile">
                    <div className="founder-image-placeholder">
                        {/* Placeholder for founder image */}
                        <div className="img-box">Founder Image</div>
                    </div>
                    <div className="founder-info">
                        <h3 className="founder-name">The Founder</h3>
                        <p className="founder-role">CEO & Founder, Axionmind</p>

                        <div className="founder-bio">
                            <p>
                                With over 20 years of experience in the software and technology industry, our founder brings deep engineering
                                expertise and a global perspective to talent strategy. An engineering graduate from Mumbai University,
                                he has led large-scale global technology and architecture initiatives for Fortune 500 companies.
                            </p>
                            <p>
                                Having formerly led teams of solution and enterprise architects across complex global programs,
                                he understands the intricacies of building high-performance technical teams. His journey includes
                                significant startup experience, blending enterprise rigor with entrepreneurial agility.
                            </p>
                            <p>
                                Based in Bangalore, he is now focused on Axionmind's mission: enabling GCCs to build AI-driven,
                                value-creating teams that set new global standards.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <style>{`
        .about-narrative {
          max-width: 800px;
          margin: 0 auto 5rem;
          text-align: center;
        }

        .narrative-text {
          color: var(--color-text);
          font-size: 1.125rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .founder-profile {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          background: var(--color-surface);
          border-radius: var(--radius-lg);
          padding: 3rem 2rem;
          align-items: center;
        }

        .founder-image-placeholder {
          display: flex;
          justify-content: center;
        }

        .img-box {
          width: 200px;
          height: 200px;
          background-color: #cbd5e1;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          font-weight: 600;
        }

        .founder-name {
          font-size: 1.75rem;
          color: var(--color-primary);
          margin-bottom: 0.25rem;
        }

        .founder-role {
          color: var(--color-accent);
          font-weight: 600;
          margin-bottom: 1.5rem;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .founder-bio p {
          margin-bottom: 1rem;
          color: var(--color-text);
          line-height: 1.7;
        }

        @media (min-width: 768px) {
          .founder-profile {
            grid-template-columns: 1fr 2fr;
            padding: 4rem;
          }
          .about-narrative {
            text-align: left;
          }
        }
      `}</style>
        </section>
    );
};

export default About;
