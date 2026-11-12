import React from 'react';

export default function Footer({ text }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-text">{text}</p>
      </div>
    </footer>
  );
}
