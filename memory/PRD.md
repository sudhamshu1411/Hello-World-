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
- Multi-page routing: Home, Work, Services, Company, About

---

## Architecture

```
/app
├── backend/
│   ├── models/
│   │   └── consultation.py     # Pydantic model for consultation data
│   ├── routes/
│   │   └── consultations.py    # FastAPI router for /consultations
│   ├── .env
│   ├── requirements.txt
│   └── server.py               # Main FastAPI app
├── contracts.md                # API contract
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── ui/             # Shadcn UI components
    │   │   ├── Header.jsx      # Reusable header with React Router Links
    │   │   ├── Footer.jsx      # Reusable footer with pre-footer CTA
    │   │   └── PageLayout.jsx  # Shared layout: animated bg + header + footer + theme toggle
    │   ├── context/
    │   │   └── ThemeContext.jsx # Global theme state (persisted to localStorage)
    │   ├── pages/
    │   │   ├── Home.jsx        # Landing page with contact form
    │   │   ├── Work.jsx        # Portfolio page with filter
    │   │   ├── Services.jsx    # Service offerings page
    │   │   ├── Company.jsx     # Approach, values, team, careers
    │   │   └── About.jsx       # Mission, beliefs, timeline
    │   ├── App.css             # All styles, themes, animations, new page CSS
    │   ├── App.js              # Router setup with ThemeProvider
    │   ├── index.css           # TailwindCSS base
    │   └── mock.js             # Static mock data (services, process, clients)
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
- Light/dark theme toggle (now persisted to localStorage)
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
- Built Work page: hero, stats bar (42+/96%/$50M+/3x), filter tabs, 6 project cards
- Built Services page: service cards, Why STARTON, process sections
- Built Company page: approach steps, values grid, team cards, careers CTA
- Built About page: mission statement, beliefs grid, timeline, CTA
- Updated all nav links to use React Router Link
- Theme persists across page navigation and refreshes
- 100% test pass rate (22/22 frontend tests)

---

## Key API Endpoints
- `POST /api/consultations` — submit contact form
- `GET /api/consultations` — retrieve all submissions

## Database Schema
- **consultations**: `{id, name, email, company, message, submitted_at}`
- **status_checks**: `{id, client_name, timestamp}` (template)

---

## Prioritized Backlog

### P0 (Must have - next session)
- None blocking

### P1 (High value)
- "Start a Project" dedicated flow: multi-step form/modal with project details
- Add real case study detail pages (/work/nexus-finance etc.)

### P2 (Enhancement)
- Blog/Insights page (linked in Company dropdown)
- Careers page with job listings
- Testimonials/social proof section on home page
- Analytics integration

### P3 (Future/Backlog)
- Refactor Home.jsx into smaller components (HeroSection, ServicesSection, etc.)
- Split App.css into component-specific CSS modules
- Add page transitions/animations between routes
- SEO optimization (meta tags, OG tags)
- CMS integration for blog and case studies
