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
- Multi-page routing: Home, Work, Services, Company, Careers, Insights

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
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── ui/
    │   │   ├── Header.jsx       # Nav with dropdowns, mobile menu
    │   │   ├── Footer.jsx       # Footer with links
    │   │   ├── PageLayout.jsx   # Shared layout wrapper
    │   │   └── SEO.jsx          # Reusable meta tags component
    │   ├── context/
    │   │   └── ThemeContext.jsx  # Light/dark theme state
    │   ├── pages/
    │   │   ├── Home.jsx         # Landing page + contact form + JSON-LD
    │   │   ├── Work.jsx         # Case studies, featured project, testimonials
    │   │   ├── Services.jsx     # Service cards, process, engagement models
    │   │   ├── Company.jsx      # Mission, values, team, timeline
    │   │   ├── Careers.jsx      # Culture, perks, open roles
    │   │   └── Insights.jsx     # Blog: featured article, category filters, article grid
    │   ├── App.css
    │   ├── App.js               # HelmetProvider + routes
    │   ├── index.css
    │   └── mock.js
    ├── .env
    └── package.json
```

## Tech Stack
- **Frontend**: React, React Router v6, react-helmet-async, Tailwind CSS, custom CSS
- **Backend**: FastAPI, Pydantic, Motor (async MongoDB)
- **Database**: MongoDB

---

## What's Been Implemented

### Phase 1 - Landing Page (Session 1)
- Full glassmorphism landing page with light/dark theme
- Animated background, premium header/footer
- Backend: POST /api/consultations with MongoDB

### Phase 2 - Multi-Page Scaffolding (Session 2)
- Extracted Header, Footer, PageLayout, ThemeContext
- React Router with 5 routes; 22/22 tests passed

### Phase 3 - Bug Fixes & Content Enhancement (Session 3)
- Fixed mobile menu (backdrop-filter containing block issue)
- Enhanced Work (8 case studies, featured, testimonials), Services (6 detailed cards, 5-step process, engagement models), Company (mission, stats, values, team, timeline)
- Created Careers page (culture, perks, 4 open roles)
- 30+ tests passed

### Phase 4 - Blog & SEO (Session 4)
- **Insights page**: Hero, featured article, 8 articles with category filters (All/Strategy/Branding/Growth/Engineering), gradient article cards with dates/read times
- **SEO**: react-helmet-async on all 6 pages — unique titles, meta descriptions, OG tags, Twitter cards
- **JSON-LD**: Organization schema on homepage
- **Navigation**: Insights added to Company dropdown, Footer, and mobile menu
- **index.html**: Updated default meta description
- 20+ tests passed (100%)

---

## Key API Endpoints
- `POST /api/consultations` — submit contact form

## Database Schema
- **consultations**: `{id, name, email, company, message, submitted_at}`

---

## Prioritized Backlog

### P1 (High value)
- "Start a Project" dedicated flow: multi-step form/modal
- Individual case study detail pages (/work/nexus-finance etc.)
- Individual blog article detail pages (/insights/article-slug)

### P2 (Enhancement)
- Animated page transitions between routes
- Testimonials/social proof on home page
- Analytics integration

### P3 (Future/Backlog)
- Refactor Home.jsx into smaller components
- Split App.css into component-specific CSS modules
- CMS integration for blog and case studies
- Memoize particles generation in PageLayout
