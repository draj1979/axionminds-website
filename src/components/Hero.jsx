import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Build Your <span className="text-accent">Global Capability Center</span> with India's Best Talent
          </h1>
          <p className="hero-subtitle">
            Axiominds is your strategic partner for hiring, scaling, and operating high-quality engineering, AI, and product teams. We move beyond transactional staffing to build long-term capabilities.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Partner With Us
            </a>
            <a href="#why-us" className="btn btn-outline">
              Why Axiominds
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          {/* Abstract tech/team visual using CSS shapes or a placeholder for now */}
          <div className="hero-visual">
            <div className="visual-circle circle-1"></div>
            <div className="visual-circle circle-2"></div>
            <div className="visual-card">
              <div className="visual-card-header">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
              </div>
              <div className="visual-card-body">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          padding: 4rem 0 6rem;
          background: linear-gradient(to bottom, #f8fafc, #ffffff);
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-title {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          letter-spacing: -0.05em;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 1.125rem;
          color: var(--color-text-light);
          margin-bottom: 2.5rem;
          line-height: 1.6;
          max-width: 600px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .hero-image-container {
          display: none;
          position: relative;
          height: 400px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Visual Element Styles */
        .hero-visual {
          position: relative;
          width: 100%;
          height: 100%;
          display: none; /* Hidden on mobile */
        }

        @media (min-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr 1fr;
          }
          .hero-title {
            font-size: 3.5rem;
          }
          .hero-visual {
            display: block;
          }
        }

        /* Abstract shapes */
        .visual-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.2;
        }
        .circle-1 {
          width: 300px;
          height: 300px;
          background: var(--color-accent);
          top: -20px;
          right: -20px;
        }
        .circle-2 {
          width: 250px;
          height: 250px;
          background: var(--color-primary);
          bottom: -20px;
          left: 20px;
        }

        .visual-card {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 320px;
            height: 200px;
            background: white;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-lg);
            border: 1px solid var(--color-border);
            padding: 1.5rem;
            z-index: 10;
        }

        .visual-card-header {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 1.5rem;
        }

        .dot { width: 10px; height: 10px; border-radius: 50%; }
        .red { background: #fee2e2; }
        .yellow { background: #fef3c7; }
        .green { background: #dcfce7; }

        .line { height: 8px; background: #f1f5f9; border-radius: 4px; margin-bottom: 0.75rem; }
        .line-1 { width: 80%; }
        .line-2 { width: 60%; }
        .line-3 { width: 90%; }

      `}</style>
    </section>
  );
};

export default Hero;
