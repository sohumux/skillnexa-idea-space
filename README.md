# Idea Space — Responsive Marketing Landing Page

A responsive, high-performance, single-page React landing page for the **Idea Space** workshop, built with React 19, Vite, and mobile-first CSS according to the design specification and visual mockups.

---

## 📌 Project Overview

- **Project / Brand**: Idea Space
- **Workshop Eyebrow**: A practical creativity workshop
- **Headline**: Make space for your next idea.
- **Reference Mockups**: `Desktop_1440.svg` (1440px) & `Mobile_390.svg` (390px)
- **Job ID**: `TlSMB6eI9miuLSBB4WIr`

---

## 🏗️ Architecture & Component Structure

The application is structured into semantic, modular React components following the **Airbnb React/JSX Style Guide**:

```text
src/
├── main.jsx                      # Application entry point (React 19 root)
├── App.jsx                       # Root layout, skip navigation, and component composition
├── content.json                  # Single source of truth for marketing copy & labels
├── styles.css                    # Mobile-first CSS, custom design tokens, fluid layouts
└── components/
    ├── SiteHeader.jsx            # Semantic <header> with brand wordmark & navigation
    ├── Hero.jsx                  # Two-column hero with eyebrow, H1, description, and CTA
    ├── IdeaDiagram.jsx           # Scalable, accessible vector diagram (aria-hidden="true")
    ├── Benefits.jsx              # Responsive 3-card grid (1 col on mobile, 3 cols on tablet/desktop)
    ├── RegistrationForm.jsx      # Client-side form with real-time validation & accessible feedback
    └── Footer.jsx                # Semantic <footer> with tagline
```

### Component Details
1. **`SiteHeader`**: Semantic `<header>` containing a brand wordmark and anchor link to `#register`.
2. **`Hero`**: Features a fluid two-column layout on viewports $\ge 1024\text{px}$, transitioning to a stacked column layout on smaller screens. Features a prominent `<h1>` headline and primary CTA.
3. **`IdeaDiagram`**: A custom, lightweight SVG illustration matching the exact orbital lines, node coordinates (`#D9B46D` gold center, `#216C64` teal satellites), and floating caption pill badge (*"One idea. A first step."*). Marked with `aria-hidden="true"` to prevent screen reader noise.
4. **`Benefits`**: Renders 3 workshop benefit cards dynamically from `content.json`. Displays as 1 column on mobile (< 768px) and 3 columns on tablet/desktop ($\ge 768\text{px}$).
5. **`RegistrationForm`**:
   - Collects `fullName`, `email`, and a required `consent` checkbox.
   - Comprehensive client-side validation (full name 2–60 chars, trimmed email format, required consent).
   - Retains entered values on submission failure and automatically programmatically shifts keyboard focus to the first invalid field (`useRef.focus()`).
   - Accessible live region (`role="status"`, `aria-live="polite"`, `aria-atomic="true"`) presenting the success message without full page reloads.
6. **`Footer`**: Semantic footer displaying the tagline from `content.json`.

---

## 🎨 Design System & Specifications

| Token | Value | Usage |
| :--- | :--- | :--- |
| `--color-canvas` | `#F7F5EF` | Page background |
| `--color-ink` | `#193C42` | Primary text and headings |
| `--color-muted` | `#53686A` | Subtitles, descriptions, secondary copy |
| `--color-accent` | `#216C64` | Primary CTAs, active highlights |
| `--color-accent-hover` | `#19534D` | Hover states |
| `--color-pale-green` | `#DDECE2` | Container backgrounds (hero visual & form card) |
| `--color-gold` | `#D9B46D` | Central idea diagram highlight node |
| `--color-border` | `#708B87` | Form inputs and secondary borders |

- **Typography**: Arial / system sans-serif fallback.
- **Section Padding**: 72–80px on desktop, ~48px on mobile.
- **Max Content Width**: 1200px centered.
- **Accessibility**: Includes a hidden "Skip to main content" link, visible `:focus-visible` rings (`3px solid #216C64`), semantic heading hierarchy (`h1` -> `h2` -> `h3`), and screen reader status alerts.

---

## 🚀 Setup & Local Development

### Requirements
- **Node.js**: v20.x, v22.x, or v24.x
- **npm**: v10.x or v11.x

### Commands

1. **Install dependencies**:
   ```bash
   npm ci
   # or: npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```

3. **Create the production build**:
   ```bash
   npm run build
   ```

4. **Preview the production build locally**:
   ```bash
   npm run preview
   ```

---

## 🧪 Testing & Verification Results

### 1. Viewport & Responsive Checks
- **Mobile (390px × 844px)**: Single column flow, side padding 24px, stacked hero with diagram scaled cleanly, stacked benefit cards, single column registration card. No horizontal scrolling (`overflow-x: hidden`).
- **Tablet (768px × 1024px)**: 3-column benefits grid readable, fluid header, well-spaced typography.
- **Desktop (1440px × 900px)**: 1200px centered container, 2-column hero with 530px illustration, 3-column benefit cards, 2-column registration layout with 512px form column.

### 2. Form Validation Scenarios
- **Empty submission**: Flags all three fields (`fullName`, `email`, `consent`) with clear inline error labels. Focus automatically shifts to the `fullName` input.
- **Whitespace / short name**: Names with whitespace only or < 2 characters trigger `Full name must be between 2 and 60 characters.`
- **Invalid email**: Triggers `Please enter a valid email address.`
- **Missing consent**: Prompts `You must agree to be contacted before submitting.`
- **Successful submission** (e.g. `Test Shopper` / `test@example.com`): Displays polite success notification banner with recorded attendee summary and an option to reset/register another attendee.

### 3. Keyboard & Accessibility Verification
- `Tab` navigation flows logically: Skip Link -> Brand Home -> Header Register Link -> Hero CTA -> Form Name -> Form Email -> Form Consent -> Submit Button.
- Visible focus indicator (`3px solid #216C64`, `2px offset`) applies to all interactive elements.
- `aria-invalid` and `aria-describedby` dynamically link fields to their error messages for screen readers.

---

## 🌐 Deployment Instructions

To deploy on platforms like **Vercel**, **Netlify**, or **GitHub Pages**:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm ci`
