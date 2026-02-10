import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section bg-primary text-white" id="contact">
      <div className="container">
        <div className="cta-content text-center">
          <h2 className="cta-title">Ready to Build Your GCC?</h2>
          <p className="cta-subtitle">
            Let's discuss your vision and how Axiominds can help you build a world-class team in India.
          </p>
          <div className="cta-actions">
            <a href="mailto:hello@axiominds.com" className="btn btn-accent">
              Let's Talk <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .bg-primary {
          background-color: var(--color-primary);
        }
        .text-white { color: white; }

        .cta-content {
          max-width: 700px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .cta-title {
          font-size: 2.5rem;
          color: white;
          margin-bottom: 1.5rem;
        }

        .cta-subtitle {
          font-size: 1.25rem;
          color: #cbd5e1;
          margin-bottom: 3rem;
          line-height: 1.6;
        }

        .cta-actions {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </section>
  );
};

export default CTA;
