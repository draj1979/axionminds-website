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
          <div className="hero-visual-enhanced">
            <div className="mesh-gradient"></div>
            <div className="floating-elements">
              <div className="float-box glass-1">
                <div className="data-line w-20"></div>
                <div className="data-line w-40"></div>
                <div className="data-circles">
                  <div className="circle sm accent"></div>
                  <div className="circle sm primary"></div>
                </div>
              </div>
              <div className="float-box glass-2">
                <div className="title-placeholder">GCC STRATEGY</div>
                <div className="data-grid">
                  <div className="grid-cell"></div>
                  <div className="grid-cell"></div>
                  <div className="grid-cell"></div>
                  <div className="grid-cell"></div>
                </div>
              </div>
              <div className="float-box glass-3">
                <div className="progress-bar"><div className="progress-fill"></div></div>
              </div>
            </div>
            <div className="connection-lines">
              <svg width="100%" height="100%" viewBox="0 0 400 400">
                <path d="M50 100 Q 200 50 350 150" stroke="rgba(2, 132, 199, 0.2)" strokeWidth="2" fill="none" />
                <path d="M100 300 Q 250 250 300 50" stroke="rgba(15, 23, 42, 0.1)" strokeWidth="1" fill="none" />
              </svg>
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
          position: relative;
          height: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-visual-enhanced {
          position: relative;
          width: 100%;
          height: 100%;
          max-width: 500px;
          display: block;
        }

        .mesh-gradient {
          position: absolute;
          inset: -20px;
          background: 
            radial-gradient(at 0% 0%, rgba(2, 132, 199, 0.15) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(15, 23, 42, 0.1) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(2, 132, 199, 0.1) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(15, 23, 42, 0.05) 0px, transparent 50%);
          filter: blur(60px);
          z-index: 0;
          animation: meshFlow 20s ease-infinite;
        }

        @keyframes meshFlow {
          0%, 100% { transform: scale(1) translate(0, 0); }
          33% { transform: scale(1.1) translate(20px, -20px); }
          66% { transform: scale(0.9) translate(-20px, 20px); }
        }

        .floating-elements {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
        }

        .float-box {
          position: absolute;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: var(--radius-lg);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
          padding: 1.5rem;
          animation: float 6s ease-in-out infinite;
        }

        .glass-1 {
          top: 10%;
          left: 10%;
          width: 200px;
          animation-delay: 0s;
        }

        .glass-2 {
          top: 40%;
          right: 10%;
          width: 240px;
          animation-delay: -2s;
        }

        .glass-3 {
          bottom: 15%;
          left: 20%;
          width: 160px;
          padding: 1rem;
          animation-delay: -4s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }

        .data-line {
          height: 6px;
          background: #f1f5f9;
          border-radius: 3px;
          margin-bottom: 0.75rem;
        }
        .w-20 { width: 20%; }
        .w-40 { width: 40%; }
        
        .data-circles {
          display: flex;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        
        .circle.sm { width: 12px; height: 12px; border-radius: 50%; }
        .circle.accent { background: var(--color-accent); opacity: 0.6; }
        .circle.primary { background: var(--color-primary); opacity: 0.4; }

        .title-placeholder {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-text-light);
          margin-bottom: 1rem;
          letter-spacing: 0.1em;
        }

        .data-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.5rem;
        }

        .grid-cell {
          height: 30px;
          background: var(--color-surface);
          border-radius: 4px;
        }

        .progress-bar {
          height: 4px;
          background: #f1f5f9;
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          width: 70%;
          background: var(--color-accent);
          border-radius: 2px;
        }

        .connection-lines {
          position: absolute;
          inset: 0;
          z-index: 1;
          opacity: 0.5;
        }

        @media (max-width: 1023px) {
          .hero-image-container {
            display: none;
          }
        }

        @media (min-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr 1fr;
          }
          .hero-title {
            font-size: 3.5rem;
          }
        }

      `}</style>
    </section>
  );
};

export default Hero;
