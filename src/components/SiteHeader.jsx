import React, { useState, useEffect } from 'react';
import { smoothScrollTo } from '../utils/scroll';

export default function SiteHeader({ brandName, registerHref = '#register' }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner container">
        <a
          href="#"
          onClick={(e) => smoothScrollTo(e, '')}
          className="brand-wordmark"
          aria-label={`${brandName} home`}
        >
          <span className="brand-dot" aria-hidden="true" />
          <span className="brand-text">{brandName}</span>
        </a>
        <nav aria-label="Main Navigation">
          <a
            href={registerHref}
            onClick={(e) => smoothScrollTo(e, registerHref)}
            className="nav-link btn-nav-cta"
          >
            Register
          </a>
        </nav>
      </div>
    </header>
  );
}
