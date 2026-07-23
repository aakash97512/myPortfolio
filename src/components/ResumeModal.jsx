import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  const { personal, skills, experience, projects, education, certifications } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="resume-printable"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--card-border)',
          borderRadius: 'var(--radius-lg)',
          width: '100%',
          maxWidth: '900px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2.5rem',
          position: 'relative',
          boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
        }}
      >
        {/* Modal Header Actions (Hidden when printing) */}
        <div
          className="no-print"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '2rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid var(--card-border)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="badge badge-cyan">Recruiter Resume Viewer</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>PDF Ready</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button onClick={handlePrint} className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
              <Printer size={16} /> Print / Save as PDF
            </button>
            <button
              onClick={onClose}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* --- PRINTABLE RESUME CONTENT START --- */}
        <div style={{ color: 'var(--text-primary)' }}>
          {/* Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              paddingBottom: '1.5rem',
              borderBottom: '2px solid var(--accent-cyan)',
              marginBottom: '1.5rem',
            }}
          >
            <div>
              <h1 style={{ fontSize: '2.4rem', fontWeight: '800', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
                AAKASH S
              </h1>
              <h2 style={{ fontSize: '1.3rem', color: 'var(--accent-cyan)', fontWeight: '700', marginTop: '0.2rem' }}>
                Flutter Developer
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>
                3.5+ Years Experience • Cross-Platform iOS & Android Specialist
              </p>
            </div>

            <div style={{ textAlign: 'right', fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <div>{personal.phone}</div>
              <div>{personal.email}</div>
              <div>{personal.location}</div>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-cyan)', marginBottom: '0.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.3rem' }}>
              Summary
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
              {personal.summary}
            </p>
          </div>

          {/* Professional Experience */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-cyan)', marginBottom: '0.8rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.3rem' }}>
              Professional Experience
            </h3>

            {experience.map((exp, idx) => (
              <div key={idx} style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                  <strong style={{ fontSize: '1.05rem' }}>{exp.role} — {exp.company}</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{exp.period} | {exp.location}</span>
                </div>
                <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-cyan)', marginBottom: '0.8rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.3rem' }}>
              Featured Projects
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {projects.map((proj) => (
                <div key={proj.id}>
                  <strong style={{ fontSize: '0.95rem' }}>{proj.title}</strong>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                    Technologies: {proj.tags.join(', ')}
                  </div>
                  <ul style={{ paddingLeft: '1.25rem', fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    {proj.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Breakdown */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-cyan)', marginBottom: '0.6rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.3rem' }}>
              Skills & Technical Stack
            </h3>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <div><strong>Languages:</strong> Dart, Kotlin, SQL</div>
              <div><strong>Mobile Frameworks:</strong> Flutter SDK (Android & iOS)</div>
              <div><strong>State Management:</strong> Riverpod, BLoC, Provider, GetX</div>
              <div><strong>Databases & Storage:</strong> SQLite, Firebase Firestore, Shared Preferences</div>
              <div><strong>Hardware & APIs:</strong> Bluetooth Low Energy (BLE), Google Maps API, RESTful APIs, Firebase Auth, FCM Push Notifications</div>
              <div><strong>Architecture & Testing:</strong> Clean Architecture, MVVM, Modularization, get_it, Unit & Widget Testing, Sentry, Crashlytics</div>
            </div>
          </div>

          {/* Education & Languages */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-cyan)', marginBottom: '0.6rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.3rem' }}>
                Education
              </h3>
              {education.map((edu, idx) => (
                <div key={idx} style={{ marginBottom: '0.6rem', fontSize: '0.88rem' }}>
                  <strong>{edu.institution}</strong>
                  <div style={{ color: 'var(--text-secondary)' }}>{edu.degree} ({edu.period})</div>
                </div>
              ))}
            </div>

            <div>
              <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-cyan)', marginBottom: '0.6rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.3rem' }}>
                Languages
              </h3>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                English (Professional Working Proficiency)<br />
                Tamil (Native / Full Professional Proficiency)
              </div>
            </div>
          </div>
        </div>
        {/* --- PRINTABLE RESUME CONTENT END --- */}
      </div>
    </div>
  );
}
