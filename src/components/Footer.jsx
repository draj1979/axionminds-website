import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-branding">
            <h3 className="footer-logo">Axiominds</h3>
            <p className="footer-desc">
              Strategic talent and capability partner for Global Capability Centers (GCCs).
              Building high-quality engineering, AI, and product teams in India.
            </p>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <a href="/#about">About Us</a>
            <a href="/#services">Services</a>
            <a href="/#why-us">Why Axiominds</a>
          </div>

          <div className="footer-links">
            <h4>Legal</h4>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>Bangalore, India</p>
            <a href="mailto:hello@axiominds.com">hello@axiominds.com</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Axiominds. All rights reserved.</p>
          <p className="disclaimer">
            Axiominds is a strategic advisory and hiring partner, not a staffing agency.
          </p>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--color-primary);
          color: white;
          padding: 4rem 0 2rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-logo {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: white;
        }

        .footer-desc {
          color: #94a3b8; /* Slate 400 */
          line-height: 1.6;
          max-width: 300px;
        }

        .footer-links h4, .footer-contact h4 {
          color: white;
          margin-bottom: 1.25rem;
          font-size: 1.1rem;
        }

        .footer-links a, .footer-contact p, .footer-contact a {
          display: block;
          color: #94a3b8;
          margin-bottom: 0.75rem;
          transition: color 0.2s;
        }

        .footer-links a:hover, .footer-contact a:hover {
          color: white;
        }

        .footer-bottom {
          border-top: 1px solid #334155; /* Slate 700 */
          padding-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          color: #64748b; /* Slate 500 */
          font-size: 0.875rem;
          text-align: center;
        }

        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }

        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1fr;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
