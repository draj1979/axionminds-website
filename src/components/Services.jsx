import React from 'react';
import { Users, Cpu, Briefcase, TrendingUp, ShieldCheck } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Briefcase size={32} />,
            title: 'GCC Hiring Support',
            description: 'End-to-end recruitment tailored for Global Capability Centers. We understand the nuances of GCC culture and expectations.',
        },
        {
            icon: <Users size={32} />,
            title: 'Engineering & AI Talent',
            description: 'Sourcing top-tier developers, data scientists, and AI engineers who can drive innovation, not just execution.',
        },
        {
            icon: <ShieldCheck size={32} />,
            title: 'Leadership & Niche Roles',
            description: 'Finding the right CXOs, VPs, and Architects to lead your India operations with global alignment.',
        },
        {
            icon: <TrendingUp size={32} />,
            title: 'Team Scaling',
            description: 'Strategies for rapid yet sustainable scaling for both early-stage setups and mature GCCs.',
        },
        {
            icon: <Cpu size={32} />,
            title: 'Capability Building',
            description: 'Moving beyond headcount to building genuine technical and operational capabilities in India.',
        },
    ];

    return (
        <section className="section bg-surface" id="services">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">What We Do</h2>
                    <p className="section-subtitle">
                        Comprehensive talent solutions designed for the modern GCC.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .bg-surface {
          background-color: var(--color-surface);
        }

        .section-header {
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2.25rem;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          color: var(--color-text-light);
          font-size: 1.125rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .service-card {
          background: white;
          padding: 2rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
          border: 1px solid var(--color-border);
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: var(--color-accent);
        }

        .service-icon {
          color: var(--color-accent);
          margin-bottom: 1.5rem;
          background: #f0f9ff;
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-md);
        }

        .service-title {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--color-primary);
        }

        .service-desc {
          color: var(--color-text-light);
          line-height: 1.6;
        }

        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          /* Center the last item if odd number? Or just let it flow. */
        }
      `}</style>
        </section>
    );
};

export default Services;
