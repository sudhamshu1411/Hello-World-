import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const projects = [
  {
    id: 1,
    title: "Nexus Finance",
    category: "Branding",
    desc: "Complete brand overhaul for a Series A fintech startup. We rebuilt Nexus from the ground up — new name, identity, messaging architecture, and a design system that scaled across 12 product touchpoints.",
    result: "4.2x increase in brand recall within 6 months. Series B closed at $38M with the new brand narrative.",
    tags: ["Identity", "Design System", "Messaging", "Pitch Deck"],
    gradient: "linear-gradient(135deg, #5b5eea 0%, #7c3aed 100%)",
    year: "2024",
    featured: true
  },
  {
    id: 2,
    title: "Bloom Studio",
    category: "Web & UX",
    desc: "End-to-end e-commerce platform redesign for a DTC beauty brand. We rethought the entire purchase journey — from discovery to checkout — with a performance-first architecture.",
    result: "340% increase in conversion rate. Average order value up 67%. Page load under 1.2s.",
    tags: ["UI/UX", "Frontend", "E-commerce", "Performance"],
    gradient: "linear-gradient(135deg, #e78fb3 0%, #f56b8a 100%)",
    year: "2024"
  },
  {
    id: 3,
    title: "Atlas Ventures",
    category: "Strategy",
    desc: "Go-to-market strategy and brand positioning for a B2B SaaS product launching across three new markets simultaneously. We built the positioning framework, competitive moat, and channel strategy.",
    result: "Achieved product-market fit in 4 months. 1,200+ enterprise signups in Q1. CAC reduced by 58%.",
    tags: ["GTM Strategy", "Positioning", "Market Entry", "SaaS"],
    gradient: "linear-gradient(135deg, #0891e9 0%, #06b6d4 100%)",
    year: "2024"
  },
  {
    id: 4,
    title: "Pulse Health",
    category: "Marketing",
    desc: "Built a patient acquisition engine for a telehealth platform. Designed the full funnel — from awareness campaigns to nurture sequences to booking optimization.",
    result: "2,800+ qualified leads per month. Cost per acquisition dropped 44%. Revenue grew 3.1x in 8 months.",
    tags: ["Digital Marketing", "SEO", "Funnels", "Healthcare"],
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    year: "2023"
  },
  {
    id: 5,
    title: "Nord Digital",
    category: "Branding",
    desc: "Built a complete brand identity from scratch for a Nordic B2B software company entering global markets. Created the brand architecture, visual language, and a voice system that translated across 5 languages.",
    result: "Brand awareness in target markets grew 8x. Inbound leads increased 220% within first quarter of launch.",
    tags: ["Logo", "Brand Voice", "Guidelines", "Global"],
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    year: "2023"
  },
  {
    id: 6,
    title: "Summit Group",
    category: "Web & UX",
    desc: "Corporate web presence rebuild for a $200M consulting firm. Custom CMS, performance-first architecture, and a design system that unified 4 business units under one digital experience.",
    result: "Page speed score jumped from 34 to 98. Inbound inquiries up 185%. Time on site increased 3.4x.",
    tags: ["Web Dev", "CMS", "Performance", "Enterprise"],
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
    year: "2023"
  },
  {
    id: 7,
    title: "Kinetic Labs",
    category: "Strategy",
    desc: "Product positioning and pricing strategy for a developer tools company. We redesigned their entire value proposition, pricing tiers, and sales narrative for the enterprise segment.",
    result: "Enterprise deal size increased 2.8x. Win rate improved from 12% to 31%. Annual revenue +$4.2M.",
    tags: ["Pricing", "Product Strategy", "Enterprise", "DevTools"],
    gradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
    year: "2023"
  },
  {
    id: 8,
    title: "Verdant Foods",
    category: "Marketing",
    desc: "Full-stack marketing system for an organic food brand scaling from regional to national. We built the content engine, performance campaigns, and retail partnership strategy.",
    result: "National retail distribution secured in 9 months. Social following grew 12x. Revenue doubled.",
    tags: ["Content", "Social", "Retail Strategy", "CPG"],
    gradient: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
    year: "2024"
  }
];

const stats = [
  { num: '42+', label: 'Projects Delivered' },
  { num: '96%', label: 'Client Retention' },
  { num: '$50M+', label: 'Revenue Generated' },
  { num: '3x', label: 'Average ROI' },
];

const categories = ['All', 'Branding', 'Web & UX', 'Strategy', 'Marketing'];

const testimonials = [
  {
    quote: "STARTON didn't just redesign our brand — they redefined how we think about our business. The ROI has been extraordinary.",
    name: "Sarah Kim",
    role: "CEO, Nexus Finance",
    gradient: "linear-gradient(135deg, #5b5eea 0%, #7c3aed 100%)"
  },
  {
    quote: "Working with STARTON felt like having an elite in-house team. They moved fast, thought deeply, and delivered beyond what we imagined.",
    name: "Marcus Webb",
    role: "Founder, Bloom Studio",
    gradient: "linear-gradient(135deg, #e78fb3 0%, #f56b8a 100%)"
  },
  {
    quote: "We evaluated 12 agencies. STARTON was the only one that understood strategy and execution at the same level. Rare combination.",
    name: "David Chen",
    role: "VP Growth, Atlas Ventures",
    gradient: "linear-gradient(135deg, #0891e9 0%, #06b6d4 100%)"
  }
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const featured = projects.find(p => p.featured);
  const grid = filtered.filter(p => !p.featured || activeFilter !== 'All');

  return (
    <PageLayout>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content animate-on-scroll">
            <span className="page-hero-label" data-testid="work-hero-label">Our Work</span>
            <h1 className="page-hero-title" data-testid="work-hero-title">Results That Speak for Themselves</h1>
            <p className="page-hero-subtitle">We don't show off deliverables. We show outcomes. Every project here moved a real business metric — revenue, retention, reach, or all three.</p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="work-stats-section">
        <div className="container">
          <div className="work-stats-bar" data-testid="work-stats-bar">
            {stats.map((stat) => (
              <div key={stat.label} className="work-stat animate-on-scroll">
                <div className="work-stat-number">{stat.num}</div>
                <div className="work-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      {activeFilter === 'All' && featured && (
        <section className="work-featured-section">
          <div className="container">
            <div className="section-header animate-on-scroll">
              <h2 className="section-title">Featured Case Study</h2>
              <p className="section-subtitle">A deep dive into one of our most impactful engagements</p>
            </div>
            <div className="work-featured-card animate-on-scroll" data-testid="featured-case-study">
              <div className="work-featured-visual" style={{ background: featured.gradient }}>
                <div className="work-featured-visual-inner">
                  <span className="work-card-year">{featured.year}</span>
                  <span className="work-featured-badge">Featured</span>
                </div>
              </div>
              <div className="work-featured-info">
                <span className="work-card-category">{featured.category}</span>
                <h3 className="work-featured-title">{featured.title}</h3>
                <p className="work-featured-desc">{featured.desc}</p>
                <div className="work-featured-result">
                  <span className="work-featured-result-label">The Result</span>
                  <p className="work-featured-result-text">{featured.result}</p>
                </div>
                <div className="work-card-tags">
                  {featured.tags.map(tag => (
                    <span key={tag} className="work-card-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter + Grid */}
      <section className="work-grid-section">
        <div className="container">
          <div className="work-filter-bar" data-testid="work-filter-bar">
            {categories.map(cat => (
              <button
                key={cat}
                className={`work-filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
                data-testid={`filter-btn-${cat.toLowerCase().replace(/[^a-z]/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="work-grid" data-testid="work-projects-grid">
            {grid.map((project, index) => (
              <div
                key={project.id}
                className="work-card animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`project-card-${project.id}`}
              >
                <div className="work-card-visual" style={{ background: project.gradient }}>
                  <div className="work-card-visual-inner">
                    <span className="work-card-year">{project.year}</span>
                    <div className="work-card-arrow">
                      <ArrowUpRight size={22} />
                    </div>
                  </div>
                </div>
                <div className="work-card-info">
                  <span className="work-card-category">{project.category}</span>
                  <h3 className="work-card-title">{project.title}</h3>
                  <p className="work-card-desc">{project.desc}</p>
                  <div className="work-card-result">
                    <p className="work-card-result-text">{project.result}</p>
                  </div>
                  <div className="work-card-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="work-card-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">What Clients Say</h2>
            <p className="section-subtitle">Direct words from the people we've partnered with</p>
          </div>
          <div className="testimonials-grid" data-testid="testimonials-grid">
            {testimonials.map((t, index) => (
              <div key={t.name} className="testimonial-card animate-on-scroll" style={{ animationDelay: `${index * 0.15}s` }} data-testid={`testimonial-card-${index}`}>
                <div className="testimonial-quote-icon">
                  <Quote size={28} />
                </div>
                <p className="testimonial-text">{t.quote}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" style={{ background: t.gradient }}>
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="testimonial-name">{t.name}</p>
                    <p className="testimonial-role">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Work;
