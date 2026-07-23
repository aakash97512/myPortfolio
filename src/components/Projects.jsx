import React, { useState } from 'react';
import { FolderGit2, ExternalLink, ArrowRight, Sparkles, CheckCircle2, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects({ openProjectModal }) {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'IoT & Smart Mobility', label: 'IoT & Mobility' },
    { id: 'Medical IoT & Wearables', label: 'Medical & BLE' },
    { id: 'Healthcare & Telemedicine', label: 'Healthcare' },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} /> Case Studies
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Demonstrated engineering solutions spanning IoT mobility apps, Bluetooth BLE health wearables, and complex telemedicine platforms.
          </p>
        </div>

        {/* Project Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              style={{
                padding: '0.55rem 1.2rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontWeight: '600',
                transition: 'all var(--transition-fast)',
                background:
                  filter === cat.id ? 'var(--gradient-primary)' : 'rgba(255, 255, 255, 0.05)',
                color: filter === cat.id ? '#040914' : 'var(--text-secondary)',
                border: filter === cat.id ? 'none' : '1px solid var(--card-border)',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                padding: 0,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Project Image Banner */}
                <div style={{ width: '100%', height: '240px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform var(--transition-slow)',
                    }}
                    onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                    }}
                  >
                    <span className="badge badge-purple" style={{ backdropFilter: 'blur(8px)' }}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div style={{ padding: '1.75rem' }}>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.6rem', fontWeight: '800' }}>
                    {project.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {project.subtitle}
                  </p>

                  {/* Impact Highlight */}
                  <div
                    style={{
                      background: 'rgba(0, 242, 254, 0.05)',
                      borderLeft: '3px solid var(--accent-cyan)',
                      padding: '0.75rem 1rem',
                      borderRadius: '0 8px 8px 0',
                      marginBottom: '1.25rem',
                      fontSize: '0.85rem',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <strong style={{ color: 'var(--accent-cyan)', display: 'block', marginBottom: '0.2rem' }}>
                      Key Impact:
                    </strong>
                    {project.impact}
                  </div>

                  {/* Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="badge" style={{ fontSize: '0.75rem' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div style={{ padding: '0 1.75rem 1.75rem 1.75rem' }}>
                <button
                  onClick={() => openProjectModal(project)}
                  className="btn btn-secondary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  View Case Study & Architecture <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
