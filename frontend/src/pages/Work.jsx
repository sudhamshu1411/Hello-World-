import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const projects = [
  {
    id: 1,
    title: "Nexus Finance",
    category: "Branding",
    desc: "Complete brand overhaul for a Series A fintech startup. New identity, messaging, and design system.",
    tags: ["Identity", "Design System", "Messaging"],
    gradient: "linear-gradient(135deg, #5b5eea 0%, #7c3aed 100%)",
    year: "2024"
  },
  {
    id: 2,
    title: "Bloom Studio",
    category: "Web & UX",
    desc: "E-commerce platform redesign resulting in a 340% increase in conversion rate.",
    tags: ["UI/UX", "Frontend", "E-commerce"],
    gradient: "linear-gradient(135deg, #e78fb3 0%, #f56b8a 100%)",
    year: "2024"
  },
  {
    id: 3,
    title: "Atlas Ventures",
    category: "Strategy",
    desc: "Go-to-market strategy and brand positioning for a SaaS product launch across 3 markets.",
    tags: ["GTM", "Positioning", "Launch"],
    gradient: "linear-gradient(135deg, #0891e9 0%, #06b6d4 100%)",
    year: "2024"
  },
  {
    id: 4,
    title: "Pulse Health",
    category: "Marketing",
    desc: "Patient acquisition system generating 2,800+ qualified leads monthly through digital channels.",
    tags: ["Digital Marketing", "SEO", "Funnels"],
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    year: "2023"
  },
  {
    id: 5,
    title: "Nord Digital",
    category: "Branding",
    desc: "Full brand identity from scratch for a Nordic B2B software company entering global markets.",
    tags: ["Logo", "Voice", "Brand Guidelines"],
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    year: "2023"
  },
  {
    id: 6,
    title: "Summit Group",
    category: "Web & UX",
    desc: "Corporate web presence rebuild with a custom CMS and performance-first architecture.",
    tags: ["Web Dev", "CMS", "Performance"],
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
    year: "2023"
  }
];

const stats = [
  { num: '42+', label: 'Projects Delivered' },
  { num: '96%', label: 'Client Retention' },
  { num: '$50M+', label: 'Revenue Generated' },
  { num: '3x', label: 'Average ROI' },
];

const categories = ['All', 'Branding', 'Web & UX', 'Strategy', 'Marketing'];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <PageLayout>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content animate-on-scroll">
            <span className="page-hero-label">Our Work</span>
            <h1 className="page-hero-title">Results That Speak for Themselves</h1>
            <p className="page-hero-subtitle">42+ projects. 96% client retention. Businesses transformed.</p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="work-stats-section">
        <div className="container">
          <div className="work-stats-bar">
            {stats.map((stat) => (
              <div key={stat.label} className="work-stat animate-on-scroll">
                <div className="work-stat-number">{stat.num}</div>
                <div className="work-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="work-grid-section">
        <div className="container">
          <div className="work-filter-bar">
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
            {filtered.map((project, index) => (
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
                      <ArrowRight size={22} />
                    </div>
                  </div>
                </div>
                <div className="work-card-info">
                  <span className="work-card-category">{project.category}</span>
                  <h3 className="work-card-title">{project.title}</h3>
                  <p className="work-card-desc">{project.desc}</p>
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
    </PageLayout>
  );
};

export default Work;
