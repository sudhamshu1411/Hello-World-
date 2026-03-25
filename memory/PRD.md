# STARTON Agency Website - PRD

## Original Problem Statement
Build a highly-polished, animated landing page and multi-page website for "STARTON" — a strategic creative agency. The design follows a "new age glassmorphism" aesthetic with a purple/blue palette, supporting both light and dark themes.

## Target Audience
- Startup founders
- Growing businesses seeking branding/strategy/web services
- Companies looking for a full-spectrum growth agency

## Core Requirements
- Glassmorphism design with animated background (particles, grid, glow orbs)
- Light/dark theme toggle (persisted to localStorage)
- Premium sticky header with dropdown menus
- Premium footer with pre-footer CTA
- Fully responsive (mobile, tablet, desktop)
- Functional contact/consultation form
- Multi-page routing: Home, Work, Services, Company, Careers

---

## Architecture

```
/app
├── backend/
│   ├── models/
│   │   └── consultation.py
│   ├── routes/
│   │   └── consultations.py
│   ├── .env
│   ├── requirements.txt
│   └── server.py
├── contracts.md
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── ui/
    │   │   ├── Header.jsx
    │   │   ├── Footer.jsx
    │   │   └── PageLayout.jsx
    │   ├── context/
    │   │   └── ThemeContext.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Work.jsx
    │   │   ├── Services.jsx
    │   │   ├── Company.jsx
    │   │   └── About.jsx (to be replaced with Careers.jsx)
    │   ├── App.css
    │   ├── App.js
    │   ├── index.css
    │   └── mock.js
    ├── .env
    └── package.json
```

## Tech Stack
- **Frontend**: React, React Router v6, Tailwind CSS, custom CSS (glassmorphism)
- **Backend**: FastAPI, Pydantic, Motor (async MongoDB)
- **Database**: MongoDB
- **Styling**: CSS variables for theming, keyframe animations, backdrop-filter
- **Forms**: React Hook Form (available), manual state used in Home.jsx

---

## What's Been Implemented

### Phase 1 - Landing Page (Session 1)
- Full landing page with glassmorphism design
- Light/dark theme toggle (persisted to localStorage)
- Premium sticky header with dropdown menus (Services, Company)
- Premium footer with pre-footer CTA and hover animations
- Animated background (grid, particles, glow orbs)
- Loading spinner animation
- Backend: POST /api/consultations endpoint with MongoDB storage
- Frontend contact form connected to backend

### Phase 2 - Multi-Page Website (Session 2)
- Extracted Header, Footer, PageLayout into reusable components
- Created ThemeContext for global theme state
- Added React Router routes for /work, /services, /company, /about
- Built Work page: hero, stats bar, filter tabs, 6 project cards
- Built Services page: service cards, Why STARTON, process sections
- Built Company page: approach steps, values grid, team cards, careers CTA
- Built About page: mission statement, beliefs grid, timeline, CTA
- Updated all nav links to use React Router Link
- Theme persists across page navigation and refreshes
- 100% test pass rate (22/22 frontend tests)

### Phase 3 - Bug Fixes (Session 3)
- Fixed mobile menu toggle not working (menu panel had 0px height)
  - Root cause: Header's `backdrop-filter` created new containing block for fixed-position children
  - Fix: Moved `.mobile-menu` div outside `<header>` element in Header.jsx
  - Bumped mobile menu z-index to 101 (above header's 100)

---

## Key API Endpoints
- `POST /api/consultations` — submit contact form
- `GET /api/consultations` — retrieve all submissions

## Database Schema
- **consultations**: `{id, name, email, company, message, submitted_at}`

---

## Prioritized Backlog

### P0 (Must have - next)
- Enhance Work, Services, Company pages with detailed content per user brief
- Create Careers page (Careers.jsx) with culture, why work here, open roles
- Remove About page, add /careers route
- Update Header/Footer navigation links

### P1 (High value)
- "Start a Project" dedicated flow: multi-step form/modal with project details
- Add real case study detail pages (/work/nexus-finance etc.)

### P2 (Enhancement)
- Blog/Insights page
- Animated page transitions between routes
- Testimonials/social proof section on home page
- Analytics integration

### P3 (Future/Backlog)
- Refactor Home.jsx into smaller components
- Split App.css into component-specific CSS modules
- SEO optimization (meta tags, OG tags)
- CMS integration for blog and case studies
