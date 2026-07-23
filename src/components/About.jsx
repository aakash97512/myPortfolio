import React from 'react';
import { User, Cpu, Layers, Bluetooth, Zap, Award, CheckCircle2, Globe2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  const coreStrengths = [
    {
      title: 'Cross-Platform Mobile Engineering',
      desc: '3.5+ years building native-grade Android & iOS applications using Flutter SDK and Dart with strict adherence to Material Design & Cupertino guidelines.',
      icon: Cpu,
      color: 'var(--accent-cyan)',
    },
    {
      title: 'Architecture & State Management',
      desc: 'Expert in Riverpod, BLoC, Provider, and Clean Architecture patterns (MVVM, modularization, dependency injection via get_it).',
      icon: Layers,
      color: 'var(--accent-purple)',
    },
    {
      title: 'IoT & BLE Hardware Integration',
      desc: 'Specialized in interfacing Flutter apps with Bluetooth Low Energy (BLE) hardware, telemetry streaming, and SQLite offline persistence.',
      icon: Bluetooth,
      color: 'var(--accent-teal)',
    },
    {
      title: 'Performance & App Store Publishing',
      desc: 'Track record of 25% load speed reductions, eliminating frame drops, and successfully deploying 4+ apps to Play Store & App Store.',
      icon: Zap,
      color: '#10b981',
    },
  ];

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <User size={14} /> Professional Bio
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Aakash S</span>
          </h2>
          <p className="section-subtitle">
            Passionate Mobile Software Engineer dedicated to crafting high-performance, maintainable, and visually delightful cross-platform mobile apps.
          </p>
        </div>

        {/* Bio Narrative Card */}
        <div className="glass-card" style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--accent-cyan)' }}>
                Flutter Developer | 3.5+ Years Experience
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.25rem' }}>
                {personal.summary}
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1rem' }}>
                Currently working at <strong style={{ color: 'var(--text-primary)' }}>Medapps Dynamics Pvt Ltd</strong> in Chennai, I lead end-to-end mobile development workflows—from architecting clean data-parsing layers for complex RESTful APIs to implementing 60 FPS custom UI animations and managing CI/CD app store releases.
              </p>
            </div>
          </div>
        </div>

        {/* Core Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}
        >
          {coreStrengths.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="glass-card" style={{ padding: '1.75rem' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--card-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: s.color,
                    marginBottom: '1.25rem',
                  }}
                >
                  <Icon size={24} />
                </div>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>{s.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{s.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Recruiter Quick Facts Banner */}
        <div
          style={{
            background: 'var(--gradient-card)',
            border: '1px solid var(--card-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(0, 242, 254, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-cyan)',
              }}
            >
              <Globe2 size={24} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Languages & Location</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                English (Professional Working) & Tamil (Native) • Based in Chennai, India
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            <span className="badge badge-cyan">Open to Relocation</span>
            <span className="badge badge-green">Immediate Joiner Options</span>
            <span className="badge badge-purple">Full-Time / Hybrid</span>
          </div>
        </div>
      </div>
    </section>
  );
}
