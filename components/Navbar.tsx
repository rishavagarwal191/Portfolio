'use client';

import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleEmeraldTheme = () => {
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('theme-emerald');
    }
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar container">
        <a href="#hero" className="nav-logo" onClick={closeMenu}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Rishav</span>
          <span className="logo-dot">.</span>
          <span className="logo-accent">AI</span>
          <span className="logo-bracket">&gt;</span>
        </a>

        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} id="nav-links">
          <a href="#about" className="nav-link" onClick={closeMenu}>
            <i className="fa-solid fa-user-astronaut"></i> About
          </a>
          <a href="#skills" className="nav-link" onClick={closeMenu}>
            <i className="fa-solid fa-microchip"></i> Skills
          </a>
          <a href="#projects" className="nav-link" onClick={closeMenu}>
            <i className="fa-solid fa-layer-group"></i> Projects
          </a>
          <a href="#interactive-lab" className="nav-link" onClick={closeMenu}>
            <i className="fa-solid fa-flask-vial"></i> Live Labs
          </a>
          <a href="#journey" className="nav-link" onClick={closeMenu}>
            <i className="fa-solid fa-route"></i> Roadmap
          </a>
          <a href="#contact" className="nav-link nav-btn" onClick={closeMenu}>
            <i className="fa-solid fa-paper-plane"></i> Let&apos;s Connect
          </a>
        </div>

        <div className="nav-actions">
          <button
            id="theme-toggle"
            className="icon-btn"
            title="Toggle glow highlights"
            aria-label="Toggle theme"
            onClick={toggleEmeraldTheme}
          >
            <i className="fa-solid fa-wand-magic-sparkles"></i>
          </button>
          <button
            id="menu-toggle"
            className="icon-btn hamburger"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>
    </header>
  );
}
