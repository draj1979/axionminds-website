import React from 'react';
import { Target, Zap, Globe, Award } from 'lucide-react';

const WhyUs = () => {
    const features = [
        {
            icon: <Globe size={24} />,
            title: 'India as a Strategic Destination',
            description: 'Access to a deep talent pool of engineers, AI experts, and product leaders who build valid global IP.',
        },
        {
            icon: <Target size={24} />,
            title: 'Deep Understanding',
            description: 'We align candidates not just with skills, but with your product roadmap and company culture.',
        },
        {
            icon: <Award size={24} />,
            title: 'Quality Over Volume',
            description: 'We prioritize precision hiring. Every candidate is rigorously vetted for domain expertise and problem-solving.',
        },
        {
            icon: <Zap size={24} />,
            title: 'Ownership & Execution',
            description: 'We help you build teams that take ownership of products, reducing the management overhead on your onshore teams.',
        },
    ];

    return (
        <section className="section bg-primary text-white" id="why-us">
            <div className="container">
                <div className="split-layout">
                    <div className="split-content">
                        <h2 className="section-title text-white">Why India. Why Axionmind.</h2>
                        <p className="section-subtitle text-slate-300">
                            Building a GCC is not about cost arbitrage anymore. It's about access to world-class talent and innovation. We bridge the gap between global expectations and on-ground execution.
                        </p>
                        <div className="stats-grid">
                            <div className="stat-item">
                                <span className="stat-number">20+</span>
                                <span className="stat-label">Years Leadership</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Product Focus</span>
                            </div>
                        </div>
                    </div>

                    <div className="features-list">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-item">
                                <div className="feature-icon">{feature.icon}</div>
                                <div>
                                    <h3 className="feature-title">{feature.title}</h3>
                                    <p className="feature-desc">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        .bg-primary {
          background-color: var(--color-primary);
        }
        .text-white { color: white; }
        .text-slate-300 { color: #cbd5e1; }

        .split-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: start;
        }

        .stats-grid {
          display: flex;
          gap: 3rem;
          margin-top: 3rem;
          border-top: 1px solid #334155;
          padding-top: 2rem;
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--color-accent);
        }

        .stat-label {
          font-size: 0.9rem;
          color: #94a3b8;
        }

        .features-list {
          display: grid;
          gap: 2rem;
        }

        .feature-item {
          display: flex;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: background 0.2s;
        }

        .feature-item:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .feature-icon {
          color: var(--color-accent);
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .feature-title {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: white;
        }

        .feature-desc {
          color: #cbd5e1;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        @media (min-width: 1024px) {
          .split-layout {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default WhyUs;
