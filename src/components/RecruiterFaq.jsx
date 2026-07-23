import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, UserCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function RecruiterFaq() {
  const { recruiterFaq } = portfolioData;
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <UserCheck size={14} /> For Recruiters & Hiring Managers
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Quick answers regarding availability, work arrangements, notice period, and team culture fit.
          </p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {recruiterFaq.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.25rem 1.75rem',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  borderLeft: isOpen ? '4px solid var(--accent-cyan)' : '1px solid var(--card-border)',
                }}
                onClick={() => toggleFaq(idx)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: isOpen ? 'var(--accent-cyan)' : 'var(--text-primary)' }}>
                    {faq.q}
                  </h3>
                  <div style={{ color: 'var(--text-muted)' }}>
                    {isOpen ? <ChevronUp size={20} color="var(--accent-cyan)" /> : <ChevronDown size={20} />}
                  </div>
                </div>

                {isOpen && (
                  <p
                    style={{
                      marginTop: '1rem',
                      paddingTop: '0.8rem',
                      borderTop: '1px solid var(--card-border)',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6',
                      fontSize: '0.95rem',
                    }}
                  >
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
