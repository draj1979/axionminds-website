import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'What We Do', path: '/#services' },
    { name: 'Why Axiominds', path: '/#why-us' },
    { name: 'How We Work', path: '/#process' },
    { name: 'About Us', path: '/#about' },
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Axiominds Logo" className="logo-icon" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
          <span className="logo-text">Axiominds</span>
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          {navLinks.map((link) => (
            <a key={link.name} href={link.path} className="nav-link">
              {link.name}
            </a>
          ))}
          <a href="/#contact" className="btn btn-primary">
            Partner With Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-links">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="mobile-nav-link"
                  onClick={toggleMenu}
                >
                  {link.name} <ChevronRight size={16} />
                </a>
              ))}
              <a
                href="/#contact"
                className="btn btn-primary mobile-cta"
                onClick={toggleMenu}
              >
                Partner With Us
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--color-border);
          height: 80px;
          display: flex;
          align-items: center;
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-primary);
          letter-spacing: -0.025em;
        }

        .logo-icon {
          flex-shrink: 0;
        }

        .logo-text {
          line-height: 1;
        }

        .desktop-menu {
          display: none;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          font-weight: 500;
          color: var(--color-text);
          font-size: 0.95rem;
          transition: color 0.2s;
        }

        .nav-link:hover {
          color: var(--color-accent);
        }

        .mobile-menu-btn {
          display: block;
          color: var(--color-primary);
        }

        .mobile-menu {
          position: absolute;
          top: 80px;
          left: 0;
          width: 100%;
          background-color: white;
          border-bottom: 1px solid var(--color-border);
          padding: 1rem 0;
          animation: slideDown 0.3s ease-out;
        }

        .mobile-menu-links {
          display: flex;
          flex-direction: column;
          padding: 0 1rem;
        }

        .mobile-nav-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          border-bottom: 1px solid var(--color-surface);
          font-weight: 500;
          color: var(--color-primary);
        }

        .mobile-cta {
          margin-top: 1rem;
          width: 100%;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (min-width: 1024px) {
          .desktop-menu {
            display: flex;
          }
          .mobile-menu-btn {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
