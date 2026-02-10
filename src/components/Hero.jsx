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
          <div className="globe-visual">
            <div className="globe-atmosphere"></div>
            <div className="globe-grid"></div>
            <div className="globe-dots">
              {/* Representing key global hubs */}
              <div className="globe-dot dot-1"></div>
              <div className="globe-dot dot-2"></div>
              <div className="globe-dot dot-3"></div>
              <div className="globe-dot dot-india"></div>
            </div>
            <div className="globe-lines">
              <svg viewBox="0 0 500 500" className="connections-svg">
                <path d="M250 250 Q 350 150 400 200" className="connection-line line-1" />
                <path d="M250 250 Q 150 150 100 200" className="connection-line line-2" />
                <path d="M250 250 Q 250 100 250 50" className="connection-line line-3" />
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
          position: relative;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: -20%;
            right: -10%;
            width: 50%;
            height: 100%;
            background: radial-gradient(circle, rgba(2, 132, 199, 0.05) 0%, transparent 70%);
            z-index: 0;
            pointer-events: none;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
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
          perspective: 1000px;
        }
        
        /* Globe Visual Styles */
        .globe-visual {
            width: 400px;
            height: 400px;
            position: relative;
            border-radius: 50%;
            background: radial-gradient(circle at 30% 30%, #f8fafc, #e2e8f0);
            box-shadow: 
                inset 0 0 50px rgba(0,0,0,0.1),
                0 20px 50px rgba(0,0,0,0.1);
            animation: floatGlobe 6s ease-in-out infinite;
        }

        .globe-atmosphere {
            position: absolute;
            inset: -20px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(2, 132, 199, 0.1) 0%, transparent 70%);
            z-index: -1;
        }

        .globe-grid {
            position: absolute;
            inset: 0;
            border-radius: 50%;
            background-image: 
                linear-gradient(rgba(148, 163, 184, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(148, 163, 184, 0.2) 1px, transparent 1px);
            background-size: 40px 40px;
            background-position: center center;
            opacity: 0.5;
            mask-image: radial-gradient(circle, black 60%, transparent 100%);
            -webkit-mask-image: radial-gradient(circle, black 60%, transparent 100%);
            animation: rotateGrid 20s linear infinite;
        }

        @keyframes rotateGrid {
            0% { background-position: 0 0; }
            100% { background-position: 40px 0; }
        }

        .globe-dots {
            position: absolute;
            inset: 0;
            border-radius: 50%;
            animation: rotateDots 20s linear infinite;
        }

        .globe-dot {
            position: absolute;
            width: 12px;
            height: 12px;
            background: var(--color-primary);
            border-radius: 50%;
            box-shadow: 0 0 10px rgba(15, 23, 42, 0.5);
            z-index: 2;
        }

        .dot-1 { top: 30%; left: 30%; } /* Europe approx */
        .dot-2 { top: 40%; left: 70%; animation-delay: -5s; } /* Asia approx */
        .dot-3 { top: 60%; left: 20%; animation-delay: -2s; } /* Africa approx */
        
        .dot-india {
            width: 16px; 
            height: 16px;
            background: var(--color-accent);
            top: 45%; 
            left: 65%;
            box-shadow: 0 0 15px var(--color-accent);
            z-index: 3;
            animation: pulseIndia 2s infinite;
        }

        @keyframes rotateDots {
            0% { transform: rotateY(0deg); }
            100% { transform: rotateY(360deg); } 
            /* Simple 2D approximation of 3D rotation */
        }
        
        /* Better 3D simulation for dots requires recreating structure. 
           Let's stick to a simpler "orbiting" effect for dots or static placement on a rotating background 
           for stability in CSS-only approach. 
           Actually, let's make the "grid" move and keep dots static relative to grid? 
           CSS background animation is 2D. 
           Let's use a wrapper rotation. 
        */

        .globe-lines {
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: 1;
        }

        .connections-svg {
            width: 100%;
            height: 100%;
            overflow: visible;
        }

        .connection-line {
            fill: none;
            stroke: var(--color-accent);
            stroke-width: 2;
            stroke-dasharray: 10;
            opacity: 0.4;
            animation: dashLine 2s linear infinite;
        }

        @keyframes dashLine {
            to { stroke-dashoffset: -20; }
        }

        @keyframes pulseIndia {
            0% { transform: scale(1); box-shadow: 0 0 15px var(--color-accent); }
            50% { transform: scale(1.2); box-shadow: 0 0 25px var(--color-accent); }
            100% { transform: scale(1); box-shadow: 0 0 15px var(--color-accent); }
        }

        @keyframes floatGlobe {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }

        @media (max-width: 1023px) {
          .hero-image-container {
             display: none; 
             /* Or make it smaller/simpler for mobile */
          }
        }

        @media (min-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr 1fr;
          }
          .hero-title {
            font-size: 3.5rem;
          }
          .hero-image-container {
             display: flex;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
