import React from 'react';
import { Users, Lightbulb, TrendingUp, Heart, ArrowRight, Briefcase } from 'lucide-react';
import { Button } from '../components/ui/button';
import PageLayout from '../components/PageLayout';
import { useNavigate } from 'react-router-dom';

const values = [
  {
    icon: <Lightbulb size={32} />,
    title: "Clarity Over Complexity",
    desc: "We distill complex problems into clear, actionable strategies. Simplicity is a form of sophistication."
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Growth Is a System",
    desc: "Sustainable growth isn't luck. It's built through deliberate systems, tested processes, and compounding actions."
  },
  {
    icon: <Users size={32} />,
    title: "Partnership Over Transactions",
    desc: "We invest in your success like it's our own. Long-term relationships create long-term results."
  },
  {
    icon: <Heart size={32} />,
    title: "Craft With Intention",
    desc: "Every deliverable is made with care. The quality of your brand reflects the quality of your business."
  }
];

const team = [
  {
    name: "Alex Rivera",
    role: "Founder & Strategy Lead",
    bio: "10+ years building brands that dominate markets. Former strategy director at top-tier consultancies.",
    initials: "AR",
    gradient: "linear-gradient(135deg, #5b5eea 0%, #7c3aed 100%)"
  },
  {
    name: "Mia Chen",
    role: "Creative Director",
    bio: "Award-winning designer who has shaped identities for 50+ global brands across tech, finance, and lifestyle.",
    initials: "MC",
    gradient: "linear-gradient(135deg, #e78fb3 0%, #f56b8a 100%)"
  },
  {
    name: "Jordan Lee",
    role: "Head of Growth",
    bio: "Growth strategist with a track record of 3x–10x revenue growth for B2B companies.",
    initials: "JL",
    gradient: "linear-gradient(135deg, #0891e9 0%, #06b6d4 100%)"
  }
];

const approach = [
  { num: "01", title: "Discovery & Audit", desc: "We start by understanding your business, market, competitors, and goals deeply before proposing any solution." },
  { num: "02", title: "Strategy & Roadmap", desc: "We craft a clear, customized growth roadmap with milestones, KPIs, and a prioritized action plan." },
  { num: "03", title: "Execution & Iteration", desc: "We move fast, test often, and iterate based on real data — ensuring every action moves the needle." },
  { num: "04", title: "Scale & Optimize", desc: "Once we find what works, we systematize, scale, and continuously optimize for compounding returns." }
];

const Company = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content animate-on-scroll">
            <span className="page-hero-label">The Company</span>
            <h1 className="page-hero-title">A Growth Partner, Not Just an Agency</h1>
            <p className="page-hero-subtitle">We work alongside you — as invested in your success as you are.</p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="process-section" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Our Approach</h2>
            <p className="section-subtitle">How we deliver consistent, transformative results</p>
          </div>
          <div className="process-grid">
            {approach.map((step, index) => (
              <div key={step.num} className="process-card animate-on-scroll" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="process-number">{step.num}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-description">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">What We Believe</h2>
            <p className="section-subtitle">The principles that guide every project</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={value.title} className="value-card animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }} data-testid={`value-card-${index}`}>
                <div className="value-card-icon">{value.icon}</div>
                <div>
                  <h3 className="value-card-title">{value.title}</h3>
                  <p className="value-card-desc">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">The Team</h2>
            <p className="section-subtitle">Experts who've seen what works — and what doesn't</p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={member.name} className="team-card animate-on-scroll" style={{ animationDelay: `${index * 0.15}s` }} data-testid={`team-card-${index}`}>
                <div className="team-card-avatar" style={{ background: member.gradient }}>
                  <span className="team-card-initials">{member.initials}</span>
                </div>
                <div className="team-card-info">
                  <h3 className="team-card-name">{member.name}</h3>
                  <p className="team-card-role">{member.role}</p>
                  <p className="team-card-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="careers-section">
        <div className="container">
          <div className="careers-content animate-on-scroll">
            <div className="careers-icon">
              <Briefcase size={40} />
            </div>
            <h2 className="careers-title">Join the Team</h2>
            <p className="careers-desc">
              We're always looking for exceptional talent who want to do the best work of their careers.
              If you're driven, curious, and love building things that matter — let's talk.
            </p>
            <Button
              className="btn-primary"
              onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}
              data-testid="careers-cta-btn"
            >
              Get in Touch <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Company;
