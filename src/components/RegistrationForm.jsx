import React, { useState, useRef } from 'react';
import useInView from '../hooks/useInView';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function RegistrationForm({
  heading,
  description,
  consentLabel,
  buttonLabel,
  successMessage,
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasShaked, setHasShaked] = useState(false);
  const [submittedAttendee, setSubmittedAttendee] = useState(null);
  const [activeField, setActiveField] = useState(null);

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const consentRef = useRef(null);

  const [sectionRef, isInView] = useInView({ threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  const validate = () => {
    const newErrors = {};
    const trimmedName = formData.fullName.trim();
    const trimmedEmail = formData.email.trim();

    if (!trimmedName) {
      newErrors.fullName = 'Full name is required.';
    } else if (trimmedName.length < 2 || trimmedName.length > 60) {
      newErrors.fullName = 'Full name must be between 2 and 60 characters.';
    }

    if (!trimmedEmail) {
      newErrors.email = 'Email address is required.';
    } else if (!EMAIL_REGEX.test(trimmedEmail)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to be contacted before submitting.';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const triggerShake = () => {
    setHasShaked(true);
    setTimeout(() => setHasShaked(false), 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
      triggerShake();

      // Automatically focus first invalid input
      if (validationErrors.fullName && fullNameRef.current) {
        fullNameRef.current.focus();
      } else if (validationErrors.email && emailRef.current) {
        emailRef.current.focus();
      } else if (validationErrors.consent && consentRef.current) {
        consentRef.current.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedAttendee({
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
      });
    }, 450);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      consent: false,
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmittedAttendee(null);
    setTimeout(() => {
      if (fullNameRef.current) {
        fullNameRef.current.focus();
      }
    }, 50);
  };

  return (
    <section
      ref={sectionRef}
      id="register"
      className="registration-section"
      aria-labelledby="registration-title"
    >
      <div className="container">
        <div
          className={`registration-card reveal-on-scroll ${
            isInView ? 'is-visible' : ''
          }`}
        >
          <div className="registration-info">
            <span className="registration-pill" aria-hidden="true">
              Reserve Your Spot
            </span>
            <h2 id="registration-title" className="registration-title">
              {heading}
            </h2>
            <p className="registration-description">{description}</p>
          </div>

          <div className="registration-form-area">
            {/* Accessible Live Region for Success Feedback */}
            <div
              role="status"
              aria-live="polite"
              aria-atomic="true"
              className={isSubmitted ? 'status-visible' : 'sr-only'}
            >
              {isSubmitted && (
                <div className="registration-success-box animate-pop-in">
                  <div className="success-icon-wrapper">
                    <svg
                      className="success-svg-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="success-content">
                    <p className="success-message">{successMessage}</p>
                    {submittedAttendee && (
                      <p className="success-details">
                        Recorded for <strong>{submittedAttendee.fullName}</strong> (
                        <span className="success-email">{submittedAttendee.email}</span>).
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn btn-secondary reset-btn"
                  >
                    Register another attendee
                  </button>
                </div>
              )}
            </div>

            {!isSubmitted && (
              <form
                noValidate
                onSubmit={handleSubmit}
                className={`registration-form ${hasShaked ? 'animate-shake' : ''}`}
                aria-label="Workshop registration interest form"
              >
                {/* Full Name */}
                <div className={`form-field ${errors.fullName ? 'has-error' : ''}`}>
                  <div className="field-header">
                    <label htmlFor="fullName" className="form-label">
                      Full name
                    </label>
                    {activeField === 'fullName' && (
                      <span className="char-count" aria-hidden="true">
                        {formData.fullName.length}/60
                      </span>
                    )}
                  </div>
                  <div className="input-wrap">
                    <input
                      ref={fullNameRef}
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      value={formData.fullName}
                      onChange={handleChange}
                      onFocus={() => setActiveField('fullName')}
                      onBlur={() => setActiveField(null)}
                      aria-required="true"
                      aria-invalid={errors.fullName ? 'true' : 'false'}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      className="form-input"
                      placeholder="e.g. Test Shopper"
                    />
                  </div>
                  {errors.fullName && (
                    <p id="fullName-error" className="error-message animate-slide-down" role="alert">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div className={`form-field ${errors.email ? 'has-error' : ''}`}>
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <div className="input-wrap">
                    <input
                      ref={emailRef}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setActiveField('email')}
                      onBlur={() => setActiveField(null)}
                      aria-required="true"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className="form-input"
                      placeholder="e.g. test@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p id="email-error" className="error-message animate-slide-down" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Consent Checkbox */}
                <div className={`form-field checkbox-field ${errors.consent ? 'has-error' : ''}`}>
                  <label className="checkbox-container">
                    <input
                      ref={consentRef}
                      id="consent"
                      name="consent"
                      type="checkbox"
                      checked={formData.consent}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={errors.consent ? 'true' : 'false'}
                      aria-describedby={errors.consent ? 'consent-error' : undefined}
                      className="form-checkbox"
                    />
                    <span className="checkbox-custom" aria-hidden="true" />
                    <span className="checkbox-label">{consentLabel}</span>
                  </label>
                  {errors.consent && (
                    <p id="consent-error" className="error-message animate-slide-down" role="alert">
                      {errors.consent}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="form-actions">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-primary btn-submit ${isSubmitting ? 'is-loading' : ''}`}
                  >
                    {isSubmitting ? (
                      <span className="btn-loading-content">
                        <span className="spinner" aria-hidden="true" />
                        <span>Submitting...</span>
                      </span>
                    ) : (
                      <span>{buttonLabel}</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
