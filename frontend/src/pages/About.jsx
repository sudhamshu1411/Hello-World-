import React from 'react';
import { Star, Globe, Award, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import PageLayout from '../components/PageLayout';
import { useNavigate } from 'react-router-dom';

const milestones = [
  { year: "2019", title: "Founded", desc: "STARTON was founded with a single belief: strategy and creativity together can build unstoppable momentum." },
  { year: "2020", title: "First Major Win", desc: "Helped our first Series B startup grow from $2M to $18M ARR through brand repositioning and digital strategy." },
  { year: "2021", title: "Team Expansion", desc: "Grew to a team of specialists across brand, web, strategy, and growth marketing." },
  { year: "2022", title: "Global Reach", desc: "Began serving clients across 3 continents with projects spanning tech, finance, health, and consumer brands." },
  { year: "2023", title: "Recognition", desc: "Named among the top boutique growth agencies by two industry publications." },
  { year: "2024", title: "42+ Projects", desc: "96% client retention rate and $50M+ in revenue generated for clients across all verticals." }
];

const beliefs = [
  {
    icon: <Star size={28} />,
    title: "Craft Matters",
    desc: "Great work speaks for itself. We pour craft into every pixel, word, and strategy we create."
  },
  {
    icon: <Globe size={28} />,
    title: "Think Globally",
    desc: "The best ideas transcend borders. We bring global thinking to every local challenge."
  },
  {
    icon: <Award size={28} />,
    title: "Results Over Vanity",
    desc: "We care about metrics that matter — revenue, retention, reach — not awards or aesthetics alone."
  }
];

const About = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content animate-on-scroll">
            <span className="page-hero-label">About Us</span>
            <h1 className="page-hero-title">We Build Winners</h1>
            <p className="page-hero-subtitle">
              STARTON is a strategic creative agency on a mission to help ambitious brands achieve market-dominating growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content animate-on-scroll">
            <p className="mission-eyebrow">Our Mission</p>
            <h2 className="mission-statement">
              To turn ambitious visions into market-defining realities through the power of strategy, creativity, and relentless execution.
            </h2>
          </div>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="beliefs-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">What We Stand For</h2>
            <p className="section-subtitle">The beliefs that shape every decision we make</p>
          </div>
          <div className="beliefs-grid">
            {beliefs.map((belief, index) => (
              <div key={belief.title} className="belief-card animate-on-scroll" style={{ animationDelay: `${index * 0.15}s` }} data-testid={`belief-card-${index}`}>
                <div className="belief-card-icon">{belief.icon}</div>
                <h3 className="belief-card-title">{belief.title}</h3>
                <p className="belief-card-desc">{belief.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">From a small team with big ideas to a trusted growth partner</p>
          </div>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} animate-on-scroll`}
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`timeline-item-${index}`}
              >
                <div className="timeline-content">
                  <span className="timeline-year">{milestone.year}</span>
                  <h3 className="timeline-title">{milestone.title}</h3>
                  <p className="timeline-desc">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-content animate-on-scroll">
            <h2 className="about-cta-title">Ready to Work Together?</h2>
            <p className="about-cta-desc">Let's build something remarkable. Your vision, our execution.</p>
            <Button
              className="btn-primary"
              onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}
              data-testid="about-cta-btn"
            >
              Start a Project <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
