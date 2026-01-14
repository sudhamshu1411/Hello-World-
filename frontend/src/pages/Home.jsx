import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, Users, Target, TrendingUp, Sparkles, Sun, Moon } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';
import { mockServices, mockWorkProcess, mockClients } from '../mock';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Home = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const parallaxRef = useRef(null);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Theme toggle
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.classList.toggle('dark-theme');
  };

  // Parallax mouse effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (parallaxRef.current) {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20;
        const yPos = (clientY / window.innerHeight - 0.5) * 20;
        parallaxRef.current.style.transform = `translate(${xPos}px, ${yPos}px)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Generate moderate-sized floating particles
  const generateParticles = () => {
    const particles = [];
    for (let i = 0; i < 30; i++) {
      const size = Math.random() * 8 + 6; // 6-14px
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const delay = Math.random() * 20;
      const duration = Math.random() * 10 + 15;
      particles.push(
        <div
          key={i}
          className="particle"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`
          }}
        />
      );
    }
    return particles;
  };

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
      {/* Loading Spinner */}
      <div className={`loading-spinner ${!isLoading ? 'hidden' : ''}`}>
        <div className="spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-center"></div>
        </div>
      </div>

      {/* Animated Background - Simplified */}
      <div className="animated-background">
        <div className="grid-pattern"></div>
        <div className="particles-container">
          {generateParticles()}
        </div>
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
      </div>

      {/* Header */}
      <header className={`starton-header ${scrolled ? 'scrolled' : ''}`}>
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
            src="https://customer-assets.emergentagent.com/job_scale-smart-1/artifacts/5vqsr75o_pexels-lii-chun-2154978145-35204301.jpg" 
            alt="Creative team collaboration"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content" ref={parallaxRef}>
            <h1 className="hero-title floating">Strategy That Builds Momentum.</h1>
            <p className="hero-subtitle">We don't just launch brands. We launch winners. Transform your vision into market-dominating reality with data-driven strategy and creative excellence.</p>
            <Button onClick={scrollToContact} className="btn-primary btn-hero">
              Start Your Journey <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">What We Do</h2>
            <p className="section-subtitle">Full-spectrum solutions that drive exponential growth</p>
          </div>
          <div className="services-grid">
            {mockServices.map((service, index) => (
              <Card key={service.id} className="service-card animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
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

      {/* How We Work Section */}
      <section id="process" className="process-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">How We Work</h2>
            <p className="section-subtitle">Our proven approach to transformative success</p>
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

      {/* Who We Work With Section */}
      <section className="clients-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Who We Work With</h2>
            <p className="section-subtitle">Partnering with ambitious businesses across industries</p>
          </div>
          <div className="clients-grid">
            {mockClients.map((client, idx) => (
              <div key={idx} className="client-card animate-on-scroll" style={{ animationDelay: `${idx * 0.1}s` }}>
                <Target className="client-icon" size={36} />
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
            <div className="contact-info animate-on-scroll">
              <h2 className="contact-title">Ready to Start?</h2>
              <p className="contact-subtitle">
                Let's discuss how we can help you build unstoppable momentum and achieve breakthrough results that transform your business.
              </p>
              <div className="contact-features">
                <div className="contact-feature">
                  <Sparkles className="contact-feature-icon" size={28} />
                  <div>
                    <h4>Strategic Approach</h4>
                    <p>Data-driven decisions that deliver measurable results</p>
                  </div>
                </div>
                <div className="contact-feature">
                  <TrendingUp className="contact-feature-icon" size={28} />
                  <div>
                    <h4>Scalable Growth</h4>
                    <p>Systems that evolve with your success and scale</p>
                  </div>
                </div>
                <div className="contact-feature">
                  <Users className="contact-feature-icon" size={28} />
                  <div>
                    <h4>Expert Team</h4>
                    <p>End-to-end execution excellence from start to finish</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper animate-on-scroll">
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
                    placeholder="Your name"
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
                    placeholder="your@email.com"
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
                    placeholder="Your company"
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
                    placeholder="Tell us about your project..."
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

      {/* Theme Toggle Button */}
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {isDarkTheme ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </div>
  );
};

export default Home;