import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Building2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} /> Career History
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            A track record of engineering production-grade cross-platform apps, optimizing performance, and delivering business value.
          </p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {experience.map((exp, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '2.25rem', position: 'relative' }}>
              {/* Timeline Header Badge */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  marginBottom: '1.25rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--card-border)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
                    <Building2 size={20} color="var(--accent-cyan)" />
                    <h3 style={{ fontSize: '1.4rem', fontWeight: '800' }}>{exp.company}</h3>
                  </div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-teal)', fontWeight: '600' }}>
                    {exp.role}
                  </h4>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                  <div className="badge badge-cyan" style={{ fontSize: '0.85rem' }}>
                    <Calendar size={14} /> {exp.period}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <MapPin size={14} /> {exp.location}
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem', fontSize: '1rem' }}>
                {exp.description}
              </p>

              {/* Accomplishments Bullets */}
              <h5 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={18} color="var(--accent-cyan)" /> Key Engineering Accomplishments
              </h5>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.75rem' }}>
                {exp.highlights.map((item, hIdx) => (
                  <li key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    <span style={{ marginTop: '0.2rem', color: 'var(--accent-green)', flexShrink: 0 }}>
                      <CheckCircle2 size={18} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Applied Skills Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '1rem', borderTop: '1px solid var(--card-border)' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginRight: '0.5rem', alignSelf: 'center', fontWeight: '600' }}>
                  Technologies & Frameworks:
                </span>
                {exp.skillsUsed.map((skill, sIdx) => (
                  <span key={sIdx} className="badge" style={{ background: 'rgba(0, 242, 254, 0.08)', borderColor: 'rgba(0, 242, 254, 0.2)', color: 'var(--accent-cyan)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
