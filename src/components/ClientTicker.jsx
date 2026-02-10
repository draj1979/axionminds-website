import React from 'react';

const clients = [
    'ZuperTech', 'StoryTent', 'APfactors', 'Litmus', 'Zutogo',
    'Eddeed', 'Artisau', 'ESX', 'Internorbit', 'Smartleads',
    'Scanly', 'Hirestack', 'Narriv', 'Lawgiq', 'Cliniq'
];

const ClientTicker = () => {
    return (
        <section className="ticker-section">
            <div className="container">
                <p className="ticker-label">Trusted by New-Age GCCs</p>
                <div className="ticker-wrap">
                    <div className="ticker">
                        {/* Duplicate the list to ensure seamless scrolling */}
                        {[...clients, ...clients].map((client, index) => (
                            <div key={index} className="ticker-item">
                                {client}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        .ticker-section {
          padding: 3rem 0;
          background-color: white;
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
          overflow: hidden;
        }

        .ticker-label {
          text-align: center;
          font-size: 0.875rem;
          color: var(--color-text-light);
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .ticker-wrap {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        /* Fade on sides */
        .ticker-wrap::before, .ticker-wrap::after {
          content: '';
          position: absolute;
          top: 0;
          width: 100px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .ticker-wrap::before {
          left: 0;
          background: linear-gradient(to right, white, transparent);
        }

        .ticker-wrap::after {
          right: 0;
          background: linear-gradient(to left, white, transparent);
        }

        .ticker {
          display: flex;
          gap: 4rem;
          width: fit-content;
          animation: ticker 40s linear infinite;
        }

        .ticker-item {
          font-size: 1.25rem;
          font-weight: 600;
          color: #94a3b8; /* Slate 400 */
          white-space: nowrap;
          transition: color 0.3s;
        }

        .ticker-item:hover {
            color: var(--color-primary);
        }

        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
          /* We move by 50% because we doubled the list */
        }
      `}</style>
        </section>
    );
};

export default ClientTicker;
