import React from 'react';
import { CheckCircle2, Zap, Shield, Target } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { mockServices, mockWorkProcess } from '../mock';
import PageLayout from '../components/PageLayout';

const differentiators = [
  {
    icon: <Zap size={32} />,
    title: "Speed Without Compromise",
    desc: "We move fast and ship faster — but never at the cost of quality. Our systems are built for velocity."
  },
  {
    icon: <Shield size={32} />,
    title: "Data Before Decisions",
    desc: "Every recommendation is backed by research. We don't guess; we analyze, then act with precision."
  },
  {
    icon: <Target size={32} />,
    title: "Obsessed With Results",
    desc: "We measure success by your outcomes, not our output. If you don't grow, we haven't done our job."
  }
];

const Services = () => {
  return (
    <PageLayout>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content animate-on-scroll">
            <span className="page-hero-label">What We Do</span>
            <h1 className="page-hero-title">Full-Spectrum Growth Solutions</h1>
            <p className="page-hero-subtitle">From brand identity to revenue systems — every service built to compound.</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div className="services-grid">
            {mockServices.map((service, index) => (
              <Card key={service.id} className="service-card animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }} data-testid={`service-card-${service.id}`}>
                <CardContent className="service-card-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="service-feature">
                        <CheckCircle2 size={18} className="feature-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why STARTON */}
      <section className="why-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Why STARTON</h2>
            <p className="section-subtitle">Not every agency is built the same</p>
          </div>
          <div className="why-grid">
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
      <section className="process-section" style={{ paddingBottom: '80px' }}>
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">How we turn strategy into results</p>
          </div>
          <div className="process-grid">
            {mockWorkProcess.map((step, index) => (
              <div key={step.id} className="process-card animate-on-scroll" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="process-number">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
