import React, { useState } from 'react';
import {
  Code2,
  Smartphone,
  Cpu,
  Apple,
  Zap,
  Layers,
  Boxes,
  Activity,
  GitFork,
  Workflow,
  Database,
  Flame,
  Bluetooth,
  Globe,
  MapPin,
  Bell,
  CheckCircle2,
  ShieldAlert,
  GitBranch,
  Gauge,
  Sliders,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');

  const iconMap = {
    Code2,
    Smartphone,
    Cpu,
    Apple,
    Zap,
    Layers,
    Boxes,
    Activity,
    GitFork,
    Workflow,
    Database,
    Flame,
    Bluetooth,
    Globe,
    MapPin,
    Bell,
    CheckCircle2,
    ShieldAlert,
    GitBranch,
    Gauge,
  };

  const filteredSkills =
    activeCategory === 'all'
      ? skills.items
      : skills.items.filter((item) => item.category === activeCategory);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Sliders size={14} /> Tech Stack & Tools
          </div>
          <h2 className="section-title">
            Technical <span className="gradient-text">Proficiency</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my mobile development stack, state management expertise, and engineering tools.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3rem',
          }}
        >
          {skills.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.9rem',
                fontWeight: '600',
                transition: 'all var(--transition-fast)',
                background:
                  activeCategory === cat.id
                    ? 'var(--gradient-primary)'
                    : 'rgba(255, 255, 255, 0.05)',
                color: activeCategory === cat.id ? '#040914' : 'var(--text-secondary)',
                border:
                  activeCategory === cat.id
                    ? 'none'
                    : '1px solid var(--card-border)',
                boxShadow: activeCategory === cat.id ? 'var(--glow-shadow)' : 'none',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {filteredSkills.map((skill, idx) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.8rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '8px',
                          background: 'rgba(0, 242, 254, 0.1)',
                          color: 'var(--accent-cyan)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <IconComponent size={20} />
                      </div>
                      <span style={{ fontWeight: '700', fontSize: '1rem' }}>{skill.name}</span>
                    </div>
                    <span className="badge badge-cyan" style={{ fontSize: '0.75rem' }}>
                      {skill.level}
                    </span>
                  </div>

                  {/* Progress Meter Bar */}
                  <div
                    style={{
                      width: '100%',
                      height: '6px',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(255, 255, 255, 0.08)',
                      overflow: 'hidden',
                      marginTop: '0.6rem',
                    }}
                  >
                    <div
                      style={{
                        width: `${skill.proficiency}%`,
                        height: '100%',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--gradient-primary)',
                        transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    marginTop: '0.8rem',
                  }}
                >
                  <span>Proficiency Rating</span>
                  <span style={{ color: 'var(--accent-cyan)', fontWeight: '600' }}>
                    {skill.proficiency}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
