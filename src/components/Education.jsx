import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} /> Background
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Strong academic engineering foundation in electronics, embedded hardware, and software development.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="edu-grid">
          {/* Left Column: Degrees */}
          <div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <GraduationCap size={22} color="var(--accent-cyan)" /> Academic Qualifications
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {education.map((edu, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: '800' }}>{edu.degree}</h4>
                  </div>

                  <div style={{ fontSize: '1rem', color: 'var(--accent-teal)', fontWeight: '600', marginBottom: '0.5rem' }}>
                    {edu.institution}
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Calendar size={14} /> {edu.period}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <MapPin size={14} /> {edu.location}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    {edu.highlights}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Competencies */}
          <div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Award size={22} color="var(--accent-purple)" /> Specializations & Credentials
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {certifications.map((cert, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(139, 92, 246, 0.12)',
                      color: 'var(--accent-purple)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.2rem' }}>
                      {cert.title}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      {cert.issuer} • Issued {cert.year}
                    </p>
                  </div>
                </div>
              ))}

              {/* Languages Highlight Card */}
              <div className="glass-card" style={{ padding: '1.5rem', marginTop: '0.5rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.8rem', color: 'var(--accent-cyan)' }}>
                  Language Proficiency
                </h4>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} color="#10b981" /> English (Professional)
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} color="#10b981" /> Tamil (Native)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 850px) {
          .edu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
