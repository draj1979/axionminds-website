import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const toggleBtnRef = useRef(null);

  const toggleMenu = () => setIsOpen((open) => !open);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'What We Do', path: '/#services' },
    { name: 'Why Axiominds', path: '/#why-us' },
    { name: 'How We Work', path: '/#process' },
    { name: 'About Us', path: '/#about' },
  ];

  // Body scroll lock + Escape + outside click + resize, only while open.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    const onClickOutside = (e) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };

    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClickOutside);
    window.addEventListener('resize', onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClickOutside);
      window.removeEventListener('resize', onResize);
    };
  }, [isOpen]);

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
            <Link key={link.name} to={link.path} className="nav-link">
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
          <Link to="/#contact" className="btn btn-primary">
            Partner With Us
          </Link>
        </div>

        {/* Mobile Controls (toggle + hamburger) */}
        <div className="mobile-controls">
          <ThemeToggle />
          <button
            ref={toggleBtnRef}
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="mobile-menu" id="mobile-menu" ref={mobileMenuRef}>
            <div className="mobile-menu-links">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="mobile-nav-link"
                  onClick={closeMenu}
                >
                  {link.name} <ChevronRight size={16} />
                </Link>
              ))}
              <Link
                to="/#contact"
                className="btn btn-primary mobile-cta"
                onClick={closeMenu}
              >
                Partner With Us
              </Link>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          background-color: var(--color-navbar-bg);
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
          color: var(--color-heading);
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

        .mobile-controls {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .mobile-menu-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          color: var(--color-heading);
        }

        .mobile-menu {
          position: absolute;
          top: 80px;
          left: 0;
          width: 100%;
          background-color: var(--color-mobile-menu-bg);
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
          border-bottom: 1px solid var(--color-border);
          font-weight: 500;
          color: var(--color-heading);
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
          .mobile-controls {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
