import React from 'react';

const Process = () => {
    const steps = [
        {
            number: '01',
            title: 'Understand Vision',
            description: 'We dive deep into your product roadmap, tech stack, and long-term goals to define the right team structure.',
        },
        {
            number: '02',
            title: 'Define Capabilities',
            description: 'We identity the specific engineering and leadership capabilities needed, not just generic job descriptions.',
        },
        {
            number: '03',
            title: 'Rigorous Sourcing',
            description: 'Our domain experts interview and filter candidates to ensure you only see the top 1% of talent.',
        },
        {
            number: '04',
            title: 'Enable & Scale',
            description: 'We help onboard the team and set up operational frameworks for fast, sustainable growth.',
        },
    ];

    return (
        <section className="section" id="process">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">How We Work</h2>
                    <p className="section-subtitle">
                        A structured, strategic approach to building your GCC.
                    </p>
                </div>

                <div className="process-timeline">
                    {steps.map((step, index) => (
                        <div key={index} className="process-step">
                            <div className="step-number">{step.number}</div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                            {index < steps.length - 1 && <div className="step-connector"></div>}
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .process-timeline {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          position: relative;
        }

        .process-step {
          position: relative;
          text-align: center;
          padding: 1rem;
        }

        .step-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #e2e8f0; /* Light slate placeholder color */
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }
        
        /* Make the number overlap or interact */
        .process-step:hover .step-number {
            color: var(--color-accent);
        }

        .step-content h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: var(--color-primary);
        }

        .step-content p {
          color: var(--color-text-light);
          font-size: 0.95rem;
        }

        .step-connector {
          display: none;
        }

        @media (min-width: 768px) {
          .process-timeline {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .process-timeline {
            grid-template-columns: repeat(4, 1fr);
          }
          
          .step-connector {
            display: block;
            position: absolute;
            top: 2rem;
            right: -50%;
            width: 100%;
            height: 2px;
            background: var(--color-border);
            z-index: 0;
          }
          /* This connector logic is tricky with flex/grid. 
             Simplified approach: just clear separation 
          */
          .step-connector { display: none; } 
          
          .process-step::after {
            content: '';
            position: absolute;
            top: 2.5rem;
            right: -1rem;
            width: 2rem;
            height: 2px;
            background: var(--color-border);
          }
          
          .process-step:last-child::after {
            display: none;
          }
        }
      `}</style>
        </section>
    );
};

export default Process;
