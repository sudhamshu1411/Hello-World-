import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Users, Target, TrendingUp, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';
import { mockServices, mockWorkProcess, mockClients, mockSubmitConsultation } from '../mock';

const Home = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await mockSubmitConsultation(formData);
      toast({
        title: "Success!",
        description: result.message,
      });
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="starton-page">
      {/* Header */}
      <header className="starton-header">
        <div className="container">
          <div className="header-content">
            <div className="logo">STARTON</div>
            <nav className="nav-links">
              <a href="#services" className="nav-link">Services</a>
              <a href="#process" className="nav-link">Process</a>
              <a href="#contact" className="nav-link">Contact</a>
            </nav>
            <Button onClick={scrollToContact} className="btn-primary">
              Book Consultation
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1758691736843-90f58dce465e" 
            alt="Creative team collaboration"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Strategy That Builds Momentum.</h1>
            <p className="hero-subtitle">We don't just launch brands. We launch winners.</p>
            <Button onClick={scrollToContact} className="btn-primary btn-hero">
              Start Your Journey <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What We Do</h2>
            <p className="section-subtitle">Full-spectrum solutions that drive growth</p>
          </div>
          <div className="services-grid">
            {mockServices.map((service) => (
              <Card key={service.id} className="service-card">
                <CardContent className="service-card-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="service-feature">
                        <CheckCircle2 size={16} className="feature-icon" />
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

      {/* How We Work Section */}
      <section id="process" className="process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How We Work</h2>
            <p className="section-subtitle">Our proven approach to success</p>
          </div>
          <div className="process-grid">
            {mockWorkProcess.map((step, index) => (
              <div key={step.id} className="process-card">
                <div className="process-number">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="clients-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Who We Work With</h2>
          </div>
          <div className="clients-grid">
            {mockClients.map((client, idx) => (
              <div key={idx} className="client-card">
                <Target className="client-icon" size={32} />
                <h3 className="client-name">{client}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2 className="contact-title">Ready to Start?</h2>
              <p className="contact-subtitle">
                Let's discuss how we can help you build momentum and achieve your goals.
              </p>
              <div className="contact-features">
                <div className="contact-feature">
                  <Sparkles className="contact-feature-icon" size={24} />
                  <div>
                    <h4>Strategic Approach</h4>
                    <p>Data-driven decisions</p>
                  </div>
                </div>
                <div className="contact-feature">
                  <TrendingUp className="contact-feature-icon" size={24} />
                  <div>
                    <h4>Scalable Growth</h4>
                    <p>Systems that evolve</p>
                  </div>
                </div>
                <div className="contact-feature">
                  <Users className="contact-feature-icon" size={24} />
                  <div>
                    <h4>Expert Team</h4>
                    <p>End-to-end execution</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company" className="form-label">Company</label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="form-input"
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="btn-primary btn-submit">
                  {isSubmitting ? 'Sending...' : 'Book Consultation'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="starton-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">STARTON</div>
              <p className="footer-tagline">Strategy That Builds Momentum.</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4 className="footer-heading">Services</h4>
                <a href="#services" className="footer-link">Brand & Identity</a>
                <a href="#services" className="footer-link">Web & Digital</a>
                <a href="#services" className="footer-link">Strategy</a>
              </div>
              <div className="footer-column">
                <h4 className="footer-heading">Company</h4>
                <a href="#process" className="footer-link">How We Work</a>
                <a href="#contact" className="footer-link">Contact</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 STARTON. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;