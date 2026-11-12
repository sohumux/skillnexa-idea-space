import React from 'react';
import IdeaDiagram from './IdeaDiagram';
import { smoothScrollTo } from '../utils/scroll';
import useInView from '../hooks/useInView';

export default function Hero({ eyebrow, headline, description, ctaText, ctaHref = '#register' }) {
  const [heroRef, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={heroRef} className="hero-section" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className={`hero-content ${isInView ? 'is-visible' : ''}`}>
          <p className="hero-eyebrow reveal-on-scroll reveal-stagger-1">
            <span className="eyebrow-badge" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 id="hero-title" className="hero-headline reveal-on-scroll reveal-stagger-2">
            {headline}
          </h1>
          <p className="hero-description reveal-on-scroll reveal-stagger-3">
            {description}
          </p>
          <div className="hero-actions reveal-on-scroll reveal-stagger-4">
            <a
              href={ctaHref}
              onClick={(e) => smoothScrollTo(e, ctaHref)}
              className="btn btn-primary hero-cta-btn interactive-cta"
            >
              <span className="cta-label">{ctaText}</span>
              <svg
                className="cta-arrow-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
        <div className={`hero-visual reveal-scale ${isInView ? 'is-visible' : ''}`}>
          <IdeaDiagram />
        </div>
      </div>
    </section>
  );
}
