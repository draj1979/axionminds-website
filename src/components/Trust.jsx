import React from 'react';
import { Shield, Users, Lock, Star } from 'lucide-react';

const Trust = () => {
    const values = [
        {
            icon: <Users size={28} />,
            title: 'Long-term Partnership',
            description: 'We don’t just fill seats. We are invested in your long-term success and capability roadmap.',
        },
        {
            icon: <Star size={28} />,
            title: 'Selective Engagement',
            description: 'We work with a limited number of high-potential partners to ensure dedicated focus and quality.',
        },
        {
            icon: <Lock size={28} />,
            title: 'Confidentiality & Professionalism',
            description: 'Your strategic plans and IP are safe with us. We operate with the highest standards of integrity.',
        },
    ];

    return (
        <section className="section bg-surface">
            <div className="container">
                <div className="trust-wrapper">
                    <div className="section-header text-center">
                        <h2 className="section-title">Built on Trust & Excellence</h2>
                        <p className="section-subtitle">
                            Enterprise-grade standards for world-class organizations.
                        </p>
                    </div>

                    <div className="trust-grid">
                        {values.map((val, index) => (
                            <div key={index} className="trust-card">
                                <div className="trust-icon">{val.icon}</div>
                                <h3 className="trust-title">{val.title}</h3>
                                <p className="trust-desc">{val.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        .trust-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .trust-card {
            text-align: center;
            padding: 2rem;
            background: transparent;
        }

        .trust-icon {
            display: inline-flex;
            padding: 1rem;
            background: white;
            border-radius: 50%;
            color: var(--color-primary);
            margin-bottom: 1rem;
            box-shadow: var(--shadow-sm);
        }

        .trust-title {
            font-size: 1.125rem;
            margin-bottom: 0.5rem;
            color: var(--color-primary);
        }

        .trust-desc {
            color: var(--color-text-light);
            font-size: 0.95rem;
            line-height: 1.5;
        }
            
        @media (min-width: 768px) {
            .trust-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }
      `}</style>
        </section>
    );
};

export default Trust;
