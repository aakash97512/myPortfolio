import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Download, Smartphone } from 'lucide-react';

export default function Header({ theme, toggleTheme, openResumeModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        height: 'var(--navbar-height)',
        background: scrolled
          ? 'var(--card-bg)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--card-border)' : '1px solid transparent',
        transition: 'all var(--transition-normal)',
      }}
    >
      <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'var(--gradient-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#040914',
              boxShadow: 'var(--glow-shadow)',
            }}
          >
            <Smartphone size={24} />
          </div>
          <div>
            <span style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
              AAKASH<span className="gradient-text">.DEV</span>
            </span>
            <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--accent-cyan)', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Flutter Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          <ul style={{ display: 'flex', alignItems: 'center', gap: '1.75rem', listStyle: 'none' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: 'var(--text-secondary)',
                    transition: 'color var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--accent-cyan)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid var(--card-border)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all var(--transition-fast)',
              }}
            >
              {theme === 'dark' ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="#6366f1" />}
            </button>

            {/* Resume Action */}
            <button onClick={openResumeModal} className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>
              <Download size={16} /> Resume
            </button>
          </div>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="mobile-toggle-group">
          <button
            onClick={toggleTheme}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid var(--card-border)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {theme === 'dark' ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="#6366f1" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid var(--card-border)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'var(--navbar-height)',
            left: 0,
            right: 0,
            background: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--card-border)',
            padding: '1.5rem',
            boxShadow: '0 20px 30px rgba(0,0,0,0.5)',
          }}
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    display: 'block',
                    padding: '0.4rem 0',
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openResumeModal();
            }}
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            <Download size={16} /> View / Download Resume
          </button>
        </div>
      )}

      {/* Inline Responsive Styles for Mobile Navbar */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
        }
        @media (min-width: 901px) {
          .mobile-toggle-group { display: none !important; }
        }
      `}</style>
    </header>
  );
}
