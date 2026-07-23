import React from 'react';
import { Workflow, Layers, Cpu, Database, ShieldCheck, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Architecture() {
  const { architecture } = portfolioData;

  return (
    <section id="architecture" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Workflow size={14} /> Engineering Standards
          </div>
          <h2 className="section-title">
            Flutter <span className="gradient-text">Architecture Blueprint</span>
          </h2>
          <p className="section-subtitle">{architecture.subtitle}</p>
        </div>

        {/* Architecture Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            position: 'relative',
          }}
        >
          {architecture.layers.map((layer, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                position: 'relative',
                padding: '2rem',
                borderTop: '3px solid var(--accent-cyan)',
              }}
            >
              <div
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: 'rgba(0, 242, 254, 0.15)',
                  position: 'absolute',
                  top: '1rem',
                  right: '1.25rem',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                {layer.step}
              </div>

              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                {layer.name}
              </h3>
              <div
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--accent-cyan)',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {layer.tech}
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                {layer.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Recruiter Guarantee Banner */}
        <div
          style={{
            marginTop: '3rem',
            padding: '1.75rem',
            borderRadius: 'var(--radius-lg)',
            background: 'rgba(0, 242, 254, 0.04)',
            border: '1px solid rgba(0, 242, 254, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(0, 242, 254, 0.15)',
              color: 'var(--accent-cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <ShieldCheck size={22} />
          </div>
          <div style={{ flex: 1 }}>
            <h4 style={{ fontSize: '1.05rem', marginBottom: '0.2rem' }}>
              Built for Team Scalability & Production Maintainability
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              By enforcing clean separation between UI widgets and Riverpod/BLoC state providers, my codebase ensures high test coverage, effortless refactoring, zero UI race conditions, and rapid onboarding for new engineers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
