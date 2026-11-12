import React from 'react';
import content from './content.json';
import SiteHeader from './components/SiteHeader';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="page-wrapper">
      {/* Accessible skip link for keyboard navigation */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Semantic Site Header */}
      <SiteHeader brandName={content.brand} registerHref="#register" />

      {/* Main Content Region */}
      <main id="main-content">
        <Hero
          eyebrow={content.eyebrow}
          headline={content.headline}
          description={content.description}
          ctaText={content.cta}
          ctaHref="#register"
        />

        <Benefits
          heading={content.benefitsHeading}
          items={content.benefits}
        />

        <RegistrationForm
          heading={content.registrationHeading}
          description={content.registrationDescription}
          consentLabel={content.consentLabel}
          buttonLabel={content.buttonLabel}
          successMessage={content.successMessage}
        />
      </main>

      {/* Semantic Footer */}
      <Footer text={content.footer} />
    </div>
  );
}
