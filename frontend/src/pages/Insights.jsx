import React, { useState } from 'react';
import { ArrowRight, Clock, Calendar, ArrowUpRight } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import SEO from '../components/SEO';

const articles = [
  {
    id: 1,
    title: "Why Most Rebrands Fail (And How to Make Yours Succeed)",
    excerpt: "Rebranding is one of the highest-leverage moves a company can make — and one of the riskiest. After leading 30+ brand transformations, here's the framework we use to ensure every rebrand compounds into real business value.",
    category: "Branding",
    readTime: "8 min read",
    date: "Jan 2025",
    gradient: "linear-gradient(135deg, #5b5eea 0%, #7c3aed 100%)",
    featured: true
  },
  {
    id: 2,
    title: "The Compounding Content Strategy: How to Build a Content Engine That Scales",
    excerpt: "Most content strategies are built for volume. Ours is built for compounding returns. We break down the exact system we use to turn content into a predictable growth channel for B2B companies.",
    category: "Growth",
    readTime: "6 min read",
    date: "Dec 2024",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)"
  },
  {
    id: 3,
    title: "Speed vs. Quality: A False Tradeoff in Modern Web Development",
    excerpt: "The idea that you have to choose between shipping fast and shipping well is outdated. Here's how we build high-performance websites in weeks, not months — without cutting corners.",
    category: "Engineering",
    readTime: "5 min read",
    date: "Nov 2024",
    gradient: "linear-gradient(135deg, #0891e9 0%, #06b6d4 100%)"
  },
  {
    id: 4,
    title: "Positioning Is Strategy: How to Own a Category Before Your Competitors Do",
    excerpt: "Your positioning isn't a tagline — it's the single most important strategic decision your company will make. We share the positioning framework behind some of our most successful client engagements.",
    category: "Strategy",
    readTime: "10 min read",
    date: "Oct 2024",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)"
  },
  {
    id: 5,
    title: "The Anatomy of a High-Converting Landing Page in 2025",
    excerpt: "We've built and tested hundreds of landing pages. These are the 7 non-negotiable elements that separate pages that convert at 2% from pages that convert at 12%.",
    category: "Growth",
    readTime: "7 min read",
    date: "Sep 2024",
    gradient: "linear-gradient(135deg, #e78fb3 0%, #f56b8a 100%)"
  },
  {
    id: 6,
    title: "From Freelancer to Agency: Lessons from Scaling STARTON",
    excerpt: "Building STARTON from a solo operation to a multi-disciplinary agency taught us hard lessons about hiring, systems, pricing, and the difference between being busy and being effective.",
    category: "Strategy",
    readTime: "9 min read",
    date: "Aug 2024",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)"
  },
  {
    id: 7,
    title: "Design Systems That Scale: Building for Consistency Without Killing Creativity",
    excerpt: "A design system isn't a constraint — it's a superpower. Here's how we build systems flexible enough to inspire creativity while rigid enough to maintain brand coherence across every touchpoint.",
    category: "Branding",
    readTime: "6 min read",
    date: "Jul 2024",
    gradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)"
  },
  {
    id: 8,
    title: "Performance-First Architecture: Why Your Website's Speed Is a Revenue Problem",
    excerpt: "Every 100ms of load time costs you 1% in conversion. We break down the architecture patterns, tooling, and optimization strategies we use to build sites that score 95+ on Core Web Vitals.",
    category: "Engineering",
    readTime: "7 min read",
    date: "Jun 2024",
    gradient: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)"
  }
];

const categories = ['All', 'Strategy', 'Branding', 'Growth', 'Engineering'];

const Insights = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const featured = articles.find(a => a.featured);
  const filtered = activeFilter === 'All'
    ? articles.filter(a => !a.featured)
    : articles.filter(a => a.category === activeFilter && !a.featured);

  return (
    <PageLayout>
      <SEO
        title="Insights"
        description="Strategic thinking, tactical playbooks, and hard-won lessons from building brands and growing businesses. The STARTON blog."
        path="/insights"
      />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content animate-on-scroll">
            <span className="page-hero-label" data-testid="insights-hero-label">Insights</span>
            <h1 className="page-hero-title" data-testid="insights-hero-title">Ideas That Build Momentum</h1>
            <p className="page-hero-subtitle">Strategic thinking, tactical playbooks, and hard-won lessons from building brands and growing businesses.</p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featured && activeFilter === 'All' && (
        <section className="insights-featured-section">
          <div className="container">
            <div className="insights-featured-card animate-on-scroll" data-testid="featured-article">
              <div className="insights-featured-visual" style={{ background: featured.gradient }}>
                <div className="insights-featured-visual-inner">
                  <span className="insights-featured-badge">{featured.category}</span>
                </div>
              </div>
              <div className="insights-featured-info">
                <div className="insights-featured-meta">
                  <span className="insights-meta-item"><Calendar size={14} /> {featured.date}</span>
                  <span className="insights-meta-item"><Clock size={14} /> {featured.readTime}</span>
                </div>
                <h2 className="insights-featured-title">{featured.title}</h2>
                <p className="insights-featured-excerpt">{featured.excerpt}</p>
                <button className="insights-read-btn" data-testid="featured-read-btn">
                  Read Article <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter + Grid */}
      <section className="insights-grid-section">
        <div className="container">
          <div className="insights-filter-bar" data-testid="insights-filter-bar">
            {categories.map(cat => (
              <button
                key={cat}
                className={`work-filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
                data-testid={`insights-filter-${cat.toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="insights-grid" data-testid="insights-grid">
            {filtered.map((article, index) => (
              <article
                key={article.id}
                className="insights-card animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`article-card-${article.id}`}
              >
                <div className="insights-card-visual" style={{ background: article.gradient }}>
                  <div className="insights-card-visual-inner">
                    <span className="insights-card-badge">{article.category}</span>
                    <div className="insights-card-arrow">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
                <div className="insights-card-body">
                  <div className="insights-card-meta">
                    <span><Calendar size={13} /> {article.date}</span>
                    <span><Clock size={13} /> {article.readTime}</span>
                  </div>
                  <h3 className="insights-card-title">{article.title}</h3>
                  <p className="insights-card-excerpt">{article.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="insights-empty" data-testid="insights-empty">
              <p>No articles in this category yet. Check back soon.</p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Insights;
