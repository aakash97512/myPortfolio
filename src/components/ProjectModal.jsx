import React from 'react';
import { X, CheckCircle2, Cpu, Layers, Workflow, ExternalLink, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--card-border)',
          borderRadius: 'var(--radius-lg)',
          width: '100%',
          maxWidth: '800px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2rem',
          position: 'relative',
          boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.08)',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Banner Image */}
        <div style={{ width: '100%', height: '260px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.5rem' }}>
          <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* Badge & Title */}
        <span className="badge badge-purple" style={{ marginBottom: '0.75rem' }}>
          {project.category}
        </span>

        <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
          {project.title}
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
          {project.overview}
        </p>

        {/* Impact Metric Banner */}
        <div
          style={{
            background: 'rgba(0, 242, 254, 0.08)',
            borderLeft: '4px solid var(--accent-cyan)',
            padding: '1rem 1.25rem',
            borderRadius: '0 var(--radius-md) var(--radius-md) 0',
            marginBottom: '1.75rem',
          }}
        >
          <strong style={{ color: 'var(--accent-cyan)', display: 'block', fontSize: '0.9rem', marginBottom: '0.2rem' }}>
            Measurable Project Outcome:
          </strong>
          <span style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>{project.impact}</span>
        </div>

        {/* Key Features List */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', fontWeight: '700' }}>
            Core Capabilities & Key Features
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {project.keyFeatures.map((feat, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architectural Approach */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h3 style={{ fontSize: '1.15rem', marginBottom: '0.6rem', fontWeight: '700', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Workflow size={18} /> Architectural Implementation
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
            {project.architectureNotes}
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--card-border)' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.6rem' }}>
            Technology Stack Utilized:
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.tags.map((tag, tIdx) => (
              <span key={tIdx} className="badge badge-cyan">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
