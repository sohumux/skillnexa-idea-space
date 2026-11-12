import React, { useState } from 'react';

export default function IdeaDiagram() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`hero-diagram-container ${isHovered ? 'is-diagram-hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-hidden="true"
    >
      {/* Pure, spacious diagram canvas without overlapping badge */}
      <div className="diagram-canvas-card">
        <svg
          className="hero-diagram-svg dynamic-idea-diagram"
          viewBox="0 0 530 330"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="presentation"
        >
          <defs>
            {/* Smooth radial aura for the center ideation node */}
            <radialGradient
              id="centerGoldGlow"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop offset="0%" stopColor="#D9B46D" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#D9B46D" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#D9B46D" stopOpacity="0" />
            </radialGradient>

            {/* Background subtle atmospheric gradient */}
            <linearGradient id="diagramBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E6F2EB" />
              <stop offset="50%" stopColor="#DFEFE6" />
              <stop offset="100%" stopColor="#D6E8DC" />
            </linearGradient>

            {/* Node drop-glow filters */}
            <filter id="softGoldGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <filter id="softTealGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Rounded Canvas Background */}
          <rect
            width="530"
            height="330"
            rx="18"
            fill="url(#diagramBgGrad)"
            className="diagram-canvas-bg"
          />

          {/* Ambient background ideation sparkles */}
          <g className="sparkle-particles">
            <circle cx="95" cy="75" r="2.5" fill="#216C64" className="sparkle-dot sparkle-1" />
            <circle cx="435" cy="80" r="3" fill="#D9B46D" className="sparkle-dot sparkle-2" />
            <circle cx="75" cy="255" r="2" fill="#D9B46D" className="sparkle-dot sparkle-3" />
            <circle cx="455" cy="250" r="2.5" fill="#216C64" className="sparkle-dot sparkle-4" />
          </g>

          {/* Cross Grid Lines (Solid Base) */}
          <line
            x1="148.4"
            y1="165"
            x2="381.6"
            y2="165"
            stroke="#216C64"
            strokeWidth="2"
            strokeOpacity="0.45"
            className="grid-line"
          />
          <line
            x1="265"
            y1="48.4"
            x2="265"
            y2="281.6"
            stroke="#216C64"
            strokeWidth="2"
            strokeOpacity="0.45"
            className="grid-line"
          />

          {/* Cross Grid Lines (Dynamic subtle flowing energy) */}
          <line
            x1="148.4"
            y1="165"
            x2="381.6"
            y2="165"
            stroke="#216C64"
            strokeWidth="2.5"
            strokeDasharray="14 26"
            className="energy-line energy-h"
          />
          <line
            x1="265"
            y1="48.4"
            x2="265"
            y2="281.6"
            stroke="#216C64"
            strokeWidth="2.5"
            strokeDasharray="14 26"
            className="energy-line energy-v"
          />

          {/* Primary Orbital Circle Track */}
          <circle
            cx="265"
            cy="165"
            r="116.6"
            stroke="#216C64"
            strokeWidth="2"
            strokeOpacity="0.85"
            className="main-orbit-track"
          />

          {/* Outer subtle secondary orbit ring */}
          <circle
            cx="265"
            cy="165"
            r="132"
            stroke="#216C64"
            strokeWidth="1"
            strokeDasharray="4 10"
            strokeOpacity="0.25"
            className="secondary-orbit-track"
          />

          {/* Slowly rotating dashed constellation ring */}
          <circle
            cx="265"
            cy="165"
            r="116.6"
            stroke="#216C64"
            strokeWidth="2"
            strokeDasharray="10 18"
            strokeOpacity="0.45"
            className="orbit-rotating-dashed"
          />

          {/* Smooth Orbiting Traveling Satellite Beacon */}
          <g className="orbit-traveler-carrier">
            <circle
              cx="381.6"
              cy="165"
              r="8"
              fill="#216C64"
              fillOpacity="0.25"
              className="traveler-trail"
            />
            <circle
              cx="381.6"
              cy="165"
              r="5.5"
              fill="#216C64"
              filter="url(#softTealGlow)"
              className="traveler-dot"
            />
          </g>

          {/* Expanding organic gold ripple waves from the core */}
          <circle
            cx="265"
            cy="165"
            r="13"
            stroke="#D9B46D"
            strokeWidth="1.5"
            fill="none"
            className="gold-ripple-wave wave-1"
          />
          <circle
            cx="265"
            cy="165"
            r="13"
            stroke="#D9B46D"
            strokeWidth="1.5"
            fill="none"
            className="gold-ripple-wave wave-2"
          />
          <circle
            cx="265"
            cy="165"
            r="13"
            stroke="#D9B46D"
            strokeWidth="1.5"
            fill="none"
            className="gold-ripple-wave wave-3"
          />

          {/* Ambient gold aura backing */}
          <circle
            cx="265"
            cy="165"
            r="50"
            fill="url(#centerGoldGlow)"
            className="center-gold-aura"
          />

          {/* Static Milestone Satellite Nodes (per Design Spec) */}
          {/* Left Node */}
          <g className="static-node node-left-group">
            <circle
              cx="148.4"
              cy="165"
              r="17"
              fill="#216C64"
              fillOpacity="0.18"
              className="node-soft-halo"
            />
            <circle
              cx="148.4"
              cy="165"
              r="13"
              fill="#216C64"
              filter="url(#softTealGlow)"
              className="node-circle"
            />
          </g>

          {/* Top Node */}
          <g className="static-node node-top-group">
            <circle
              cx="265"
              cy="48.4"
              r="17"
              fill="#216C64"
              fillOpacity="0.18"
              className="node-soft-halo"
            />
            <circle
              cx="265"
              cy="48.4"
              r="13"
              fill="#216C64"
              filter="url(#softTealGlow)"
              className="node-circle"
            />
          </g>

          {/* Center Primary Node (Gold Idea Anchor) */}
          <g className="center-anchor-group">
            <circle
              cx="265"
              cy="165"
              r="13"
              fill="#D9B46D"
              filter="url(#softGoldGlow)"
              className="center-gold-node"
            />
            <circle
              cx="265"
              cy="165"
              r="6"
              fill="#FFFFFF"
              fillOpacity="0.8"
              className="center-inner-pin"
            />
          </g>
        </svg>
      </div>

      {/* Text Box cleanly placed BELOW the diagram as requested */}
      <div className="diagram-caption-badge-below">
        <span className="caption-badge-dot" aria-hidden="true" />
        <span className="caption-badge-text">One idea. A first step.</span>
      </div>
    </div>
  );
}
