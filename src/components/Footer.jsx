import React from 'react';
import { ArrowUp, Smartphone, Mail, Phone, Heart } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--card-border)',
        padding: '4rem 0 2rem 0',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid var(--card-border)',
          }}
        >
          {/* Left Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'var(--gradient-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#040914',
                }}
              >
                <Smartphone size={20} />
              </div>
              <span style={{ fontSize: '1.3rem', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>
                AAKASH S
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Senior Flutter Developer • 3.5+ Years Exp • Chennai, India
            </p>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--card-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-cyan)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--card-border)')}
            >
              <Mail size={18} />
            </a>

            <a
              href={`tel:${personal.phone.replace(/\s+/g, '')}`}
              aria-label="Phone"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--card-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-cyan)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--card-border)')}
            >
              <Phone size={18} />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--card-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-cyan)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--card-border)')}
            >
              <LinkedInIcon size={18} />
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--card-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-cyan)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--card-border)')}
            >
              <GitHubIcon size={18} />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="btn btn-secondary"
            style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>

        <div style={{ textAlign: 'center', paddingTop: '2rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Aakash S. Built with React, Vite & Modern CSS for Mobile Engineer Portfolio.
        </div>
      </div>
    </footer>
  );
}
