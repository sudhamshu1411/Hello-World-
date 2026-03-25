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
│   ├── models/consultation.py
│   ├── routes/consultations.py
│   ├── .env
│   ├── requirements.txt
│   └── server.py
├── contracts.md
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── ui/
    │   │   ├── Header.jsx       # Nav with dropdowns, mobile menu
    │   │   ├── Footer.jsx       # Footer with links
    │   │   └── PageLayout.jsx   # Shared layout wrapper
    │   ├── context/
    │   │   └── ThemeContext.jsx  # Light/dark theme state
    │   ├── pages/
    │   │   ├── Home.jsx         # Landing page + contact form
    │   │   ├── Work.jsx         # Case studies, featured project, testimonials
    │   │   ├── Services.jsx     # Service cards, process, engagement models
    │   │   ├── Company.jsx      # Mission, values, team, timeline
    │   │   └── Careers.jsx      # Culture, perks, open roles
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

---

## What's Been Implemented

### Phase 1 - Landing Page (Session 1)
- Full landing page with glassmorphism design
- Light/dark theme toggle
- Premium sticky header with dropdown menus
- Premium footer with pre-footer CTA
- Animated background (grid, particles, glow orbs)
- Backend: POST /api/consultations endpoint with MongoDB storage

### Phase 2 - Multi-Page Scaffolding (Session 2)
- Extracted Header, Footer, PageLayout into reusable components
- Created ThemeContext for global theme state
- Added React Router routes
- 22/22 frontend tests passed

### Phase 3 - Bug Fixes & Content Enhancement (Session 3)
- Fixed mobile menu toggle (backdrop-filter containing block issue)
- **Enhanced Work page**: 8 detailed case studies with outcomes/metrics, featured case study section, client testimonials
- **Enhanced Services page**: 6 service cards with icons/taglines/feature lists/metrics, "Why STARTON" differentiators, 5-step process, 3 engagement models with CTA
- **Enhanced Company page**: Mission statement, company stats bar, 4 approach steps, 6 core values, 4 team members with bios, 6-milestone timeline, CTA
- **Created Careers page**: Culture section (3 cards), 6 perks, 4 open roles with Apply buttons, bottom CTA
- Removed About page, updated all navigation links
- Updated Header dropdowns (Company dropdown links to both /company and /careers)
- Updated Footer links
- 30+ frontend tests passed (100%)

---

## Key API Endpoints
- `POST /api/consultations` — submit contact form
- `GET /api/consultations` — retrieve all submissions

## Database Schema
- **consultations**: `{id, name, email, company, message, submitted_at}`

---

## Prioritized Backlog

### P1 (High value)
- "Start a Project" dedicated flow: multi-step form/modal
- Add real case study detail pages (/work/nexus-finance etc.)

### P2 (Enhancement)
- Blog/Insights page
- Animated page transitions between routes
- Testimonials/social proof on home page
- Analytics integration

### P3 (Future/Backlog)
- Refactor Home.jsx into smaller components
- Split App.css into component-specific CSS modules
- SEO optimization (meta tags, OG tags)
- CMS integration for blog and case studies
- Memoize particles generation in PageLayout
