import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const getInitialTheme = () => {
  if (typeof document === 'undefined') return 'light';
  return document.documentElement.getAttribute('data-theme') || 'light';
};

const ThemeToggle = ({ className = '' }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch (e) { /* ignore quota / private mode */ }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      className={`theme-toggle ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}

      <style>{`
        .theme-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: var(--radius-full);
          color: var(--color-heading);
          background: transparent;
          border: 1px solid var(--color-border);
          transition: background var(--transition-fast), color var(--transition-fast), border-color var(--transition-fast), transform var(--transition-fast);
        }

        .theme-toggle:hover {
          background: var(--color-surface);
          color: var(--color-accent);
          border-color: var(--color-accent);
          transform: rotate(12deg);
        }

        .theme-toggle:focus-visible {
          outline: 2px solid var(--color-accent);
          outline-offset: 2px;
        }
      `}</style>
    </button>
  );
};

export default ThemeToggle;
