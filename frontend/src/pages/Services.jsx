import React from 'react';
import { CheckCircle2, Zap, Shield, Target, ArrowRight, BarChart3, Layers, Rocket, PenTool, Globe, Megaphone, LineChart } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const services = [
  {
    id: 1,
    icon: <PenTool size={36} />,
    title: "Brand & Identity",
    tagline: "Be unforgettable.",
    description: "We build brands that resonate and endure. From naming to visual systems, we create identities that carve out space in crowded markets and make your competitors irrelevant.",
    features: [
      "Brand naming & storytelling",
      "Visual identity (logo, typography, color systems)",
      "Comprehensive brand guidelines",
      "Brand voice & messaging architecture",
      "Rebranding & brand evolution"
    ],
    metric: "4.2x avg brand recall improvement"
  },
  {
    id: 2,
    icon: <Globe size={36} />,
    title: "Web & Digital Experiences",
    tagline: "Websites that work as hard as you do.",
    description: "High-performance digital products that convert visitors into customers. We obsess over every millisecond of load time, every pixel of design, and every click in the user journey.",
    features: [
      "High-performance marketing sites",
      "Web applications & SaaS platforms",
      "UI/UX design & research",
      "Frontend & backend development",
      "CMS, e-commerce & scalable architecture"
    ],
    metric: "340% avg conversion rate increase"
  },
  {
    id: 3,
    icon: <Target size={36} />,
    title: "Business Strategy & Positioning",
    tagline: "Know exactly where you stand — and where you're going.",
    description: "Strategic clarity that drives growth. We analyze your market, define your positioning, and build a roadmap that turns competitive pressure into competitive advantage.",
    features: [
      "Market & competitor analysis",
      "Brand positioning frameworks",
      "Business model & pricing strategy",
      "Go-to-market planning",
      "Product-market fit validation"
    ],
    metric: "58% avg reduction in CAC"
  },
  {
    id: 4,
    icon: <Megaphone size={36} />,
    title: "Marketing Systems",
    tagline: "Marketing that compounds.",
    description: "Data-driven marketing that delivers predictable results. We don't run random campaigns — we build systems that generate, nurture, and convert leads at scale.",
    features: [
      "Digital marketing strategy",
      "Content & social media systems",
      "Performance marketing (paid ads & funnels)",
      "SEO & organic growth optimization",
      "Campaign planning & execution"
    ],
    metric: "2,800+ leads/month for top client"
  },
  {
    id: 5,
    icon: <LineChart size={36} />,
    title: "Sales Enablement",
    tagline: "Close more. Faster. Bigger.",
    description: "Convert interest into revenue. We build the tools, systems, and processes that turn your sales team into a deal-closing machine — from first touch to signed contract.",
    features: [
      "Sales funnel design & optimization",
      "CRM setup, automation & workflows",
      "Pitch decks & sales collateral",
      "Lead scoring & nurturing systems",
      "Conversion rate optimization"
    ],
    metric: "2.8x avg enterprise deal size increase"
  },
  {
    id: 6,
    icon: <Layers size={36} />,
    title: "Custom Solutions & Infrastructure",
    tagline: "The engine behind the experience.",
    description: "Powerful technology that works behind the scenes. We build the custom tools, integrations, and infrastructure that give you a competitive edge no one else can copy.",
    features: [
      "Custom design systems",
      "Internal tools & admin dashboards",
      "Automation & API integrations",
      "Scalable backend architecture",
      "Technical consulting & audits"
    ],
    metric: "98 avg performance score"
  }
];

const differentiators = [
  {
    icon: <Zap size={32} />,
    title: "Speed Without Compromise",
    desc: "We move fast and ship faster — but never at the cost of quality. Our systems are built for velocity. While other agencies are still writing proposals, we're already shipping v1."
  },
  {
    icon: <Shield size={32} />,
    title: "Data Before Decisions",
    desc: "Every recommendation is backed by research. We don't guess; we analyze, test, and validate. Then we act with precision. The result? Strategies that work from day one."
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Obsessed With Outcomes",
    desc: "We measure success by your outcomes, not our output. Revenue, retention, reach — those are the only metrics that matter. If you don't grow, we haven't done our job."
  }
];

const process = [
  {
    num: "01",
    title: "Discovery & Audit",
    desc: "We start by going deep — understanding your business, market, competitors, users, and goals before we propose a single solution. No templates. No assumptions."
  },
  {
    num: "02",
    title: "Strategy & Roadmap",
    desc: "We craft a clear, customized growth roadmap with milestones, KPIs, and a prioritized action plan. You'll know exactly what we're doing, why, and what success looks like."
  },
  {
    num: "03",
    title: "Design & Build",
    desc: "We bring the strategy to life with world-class design and engineering. Every deliverable is crafted with obsessive attention to detail and performance."
  },
  {
    num: "04",
    title: "Launch & Iterate",
    desc: "We move fast, ship often, and test relentlessly. Real data drives every iteration. Nothing goes live without passing our quality bar."
  },
  {
    num: "05",
    title: "Scale & Optimize",
    desc: "Once we find what works, we systematize, scale, and continuously optimize for compounding returns. Growth isn't a one-time event — it's a system."
  }
];

const engagementModels = [
  {
    title: "Project-Based",
    desc: "Defined scope, timeline, and deliverables. Ideal for specific initiatives — a rebrand, a new website, a go-to-market launch.",
    best: "Best for: Specific, well-defined projects"
  },
  {
    title: "Retainer Partnership",
    desc: "Ongoing strategic partnership with a dedicated team. We become an extension of your company and grow with you month over month.",
    best: "Best for: Scaling businesses needing continuous support"
  },
  {
    title: "Sprint Engagement",
    desc: "Intensive, time-boxed bursts focused on rapid delivery. Perfect for companies that need speed and momentum without long-term commitment.",
    best: "Best for: Fast-moving teams with urgent needs"
  }
];

const Services = () => {
  const navigate = useNavigate();

  const handleStartProject = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  return (
    <PageLayout>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content animate-on-scroll">
            <span className="page-hero-label" data-testid="services-hero-label">What We Do</span>
            <h1 className="page-hero-title" data-testid="services-hero-title">Full-Spectrum Growth Solutions</h1>
            <p className="page-hero-subtitle">From brand identity to revenue systems — every service is designed to compound. We don't do one-off projects. We build growth engines.</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-detail-section">
        <div className="container">
          <div className="services-detail-grid" data-testid="services-detail-grid">
            {services.map((service, index) => (
              <div key={service.id} className="service-detail-card animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }} data-testid={`service-detail-card-${service.id}`}>
                <div className="service-detail-header">
                  <div className="service-detail-icon">{service.icon}</div>
                  <div>
                    <h3 className="service-detail-title">{service.title}</h3>
                    <p className="service-detail-tagline">{service.tagline}</p>
                  </div>
                </div>
                <p className="service-detail-desc">{service.description}</p>
                <ul className="service-detail-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="service-detail-feature">
                      <CheckCircle2 size={16} className="feature-check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="service-detail-metric">
                  <Rocket size={16} />
                  <span>{service.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why STARTON */}
      <section className="why-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Why STARTON</h2>
            <p className="section-subtitle">Not every agency is built the same. Here's what makes us different.</p>
          </div>
          <div className="why-grid" data-testid="why-grid">
            {differentiators.map((item, index) => (
              <div key={item.title} className="why-card animate-on-scroll" style={{ animationDelay: `${index * 0.15}s` }} data-testid={`why-card-${index}`}>
                <div className="why-card-icon">{item.icon}</div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">Five phases. Zero guesswork. Repeatable results.</p>
          </div>
          <div className="process-grid" data-testid="process-grid">
            {process.map((step, index) => (
              <div key={step.num} className="process-card animate-on-scroll" style={{ animationDelay: `${index * 0.12}s` }} data-testid={`process-step-${step.num}`}>
                <div className="process-number">{step.num}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-description">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="engagement-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">How We Engage</h2>
            <p className="section-subtitle">Flexible models built around how you work</p>
          </div>
          <div className="engagement-grid" data-testid="engagement-grid">
            {engagementModels.map((model, index) => (
              <div key={model.title} className="engagement-card animate-on-scroll" style={{ animationDelay: `${index * 0.15}s` }} data-testid={`engagement-card-${index}`}>
                <h3 className="engagement-card-title">{model.title}</h3>
                <p className="engagement-card-desc">{model.desc}</p>
                <span className="engagement-card-best">{model.best}</span>
              </div>
            ))}
          </div>
          <div className="engagement-cta animate-on-scroll">
            <Button className="btn-primary" onClick={handleStartProject} data-testid="services-cta-btn">
              Discuss Your Project <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
