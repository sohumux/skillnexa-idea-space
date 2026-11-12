import React from 'react';
import useInView from '../hooks/useInView';

export default function Benefits({ heading, items = [] }) {
  const [sectionRef, isInView] = useInView({
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px',
  });

  return (
    <section ref={sectionRef} className="benefits-section" aria-labelledby="benefits-title">
      <div className="container">
        <div className={`section-header-wrap reveal-on-scroll ${isInView ? 'is-visible' : ''}`}>
          <h2 id="benefits-title" className="section-title">
            {heading}
          </h2>
        </div>
        <div className="benefits-grid">
          {items.map((benefit, index) => (
            <article
              key={benefit.id}
              className={`benefit-card benefit-card-slide-in benefit-card-stagger-${index + 1} ${
                isInView ? 'is-visible' : ''
              }`}
              tabIndex={0}
            >
              <div className="benefit-card-top">
                <span className="benefit-index" aria-hidden="true">
                  0{index + 1}
                </span>
                <span className="benefit-indicator" aria-hidden="true" />
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-text">{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
