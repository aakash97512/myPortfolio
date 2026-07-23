import React from 'react';
import { Smartphone, Download, ArrowRight, MapPin, Mail, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ openResumeModal }) {
  const { personal } = portfolioData;

  return (
    <section
      id="hero"
      style={{
        paddingTop: 'calc(var(--navbar-height) + 3rem)',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Orbs */}
      <div className="bg-glow bg-glow-right" />
      <div className="bg-glow bg-glow-left" />

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column Content */}
          <div>
            {/* Recruiter Status Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: '#10b981',
                fontSize: '0.85rem',
                fontWeight: '600',
                marginBottom: '1.5rem',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 10px #10b981',
                  display: 'inline-block',
                }}
                className="animate-pulse-glow"
              />
              <span>{personal.availability}</span>
            </div>

            {/* Main Greeting & Title */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                fontWeight: '800',
                lineHeight: '1.15',
                marginBottom: '1.25rem',
                letterSpacing: '-0.03em',
              }}
            >
              Building High-Performance <br />
              <span className="gradient-text">Flutter & iOS/Android</span> <br />
              Mobile Experiences.
            </h1>

            {/* Sub-headline */}
            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '2rem',
                maxWidth: '620px',
              }}
            >
              Hi, I'm <strong style={{ color: 'var(--text-primary)' }}>{personal.name}</strong>, a Senior Flutter Developer with{' '}
              <span style={{ color: 'var(--accent-cyan)', fontWeight: '700' }}>3.5+ years of experience</span> crafting scalable, production-ready mobile apps with Riverpod, BLoC, Clean Architecture, and BLE hardware connectivity.
            </p>

            {/* Location & Languages Quick Bar */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.25rem',
                marginBottom: '2.5rem',
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={16} color="var(--accent-cyan)" />
                <span>{personal.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Mail size={16} color="var(--accent-cyan)" />
                <span>{personal.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ShieldCheck size={16} color="var(--accent-green)" />
                <span>4+ Production App Releases</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
              <a href="#projects" className="btn btn-primary">
                Explore Projects <ArrowRight size={18} />
              </a>
              <button onClick={openResumeModal} className="btn btn-secondary">
                <Download size={18} /> Download Resume
              </button>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>

            {/* Fast Recruiter Impact Stats */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '1.25rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--card-border)',
              }}
            >
              {personal.metrics.map((m, idx) => (
                <div key={idx}>
                  <div style={{ fontSize: '1.8rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--accent-cyan)' }}>
                    {m.value}
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-primary)' }}>{m.label}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{m.highlight}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Visual Graphic */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '460px',
                borderRadius: 'var(--radius-lg)',
                padding: '8px',
                background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%)',
                boxShadow: 'var(--glow-shadow-strong)',
              }}
            >
              <div
                style={{
                  borderRadius: 'calc(var(--radius-lg) - 4px)',
                  overflow: 'hidden',
                  background: 'var(--bg-secondary)',
                  position: 'relative',
                }}
              >
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'cover',
                  }}
                />

                {/* Floating Tech Cards */}
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    background: 'rgba(10, 14, 23, 0.85)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 242, 254, 0.4)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.6rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                  }}
                  className="animate-float"
                >
                  <Smartphone size={20} color="var(--accent-cyan)" />
                  <div>
                    <span style={{ fontSize: '0.8rem', fontWeight: '700', display: 'block' }}>Flutter 3.x</span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>iOS & Android</span>
                  </div>
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                    background: 'rgba(10, 14, 23, 0.85)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(16, 185, 129, 0.4)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.6rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                  }}
                >
                  <Sparkles size={20} color="#10b981" />
                  <div>
                    <span style={{ fontSize: '0.8rem', fontWeight: '700', display: 'block' }}>Riverpod & BLoC</span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Clean Architecture</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
