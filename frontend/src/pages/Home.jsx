import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, Users, Target, TrendingUp, Sparkles, Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const parallaxRef = useRef(null);
  const servicesTimeoutRef = useRef(null);
  const companyTimeoutRef = useRef(null);

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
          }} />

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
      const response = await axios.post(`${BACKEND_URL}/api/consultations`, formData);

      if (response.data.success) {
        toast({
          title: "Success!",
          description: response.data.message
        });
        setFormData({ name: '', email: '', company: '', message: '' });
      }
    } catch (error) {
      console.error('Form submission error:', error);

      let errorMessage = "Something went wrong. Please try again.";

      if (error.response?.data?.detail) {
        if (typeof error.response.data.detail === 'string') {
          errorMessage = error.response.data.detail;
        } else if (error.response.data.detail.message) {
          errorMessage = error.response.data.detail.message;
        }
      } else if (error.message) {
        errorMessage = error.message;
      }

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 300);
  };

  const handleCompanyMouseEnter = () => {
    if (companyTimeoutRef.current) {
      clearTimeout(companyTimeoutRef.current);
    }
    setCompanyDropdownOpen(true);
  };

  const handleCompanyMouseLeave = () => {
    companyTimeoutRef.current = setTimeout(() => {
      setCompanyDropdownOpen(false);
    }, 300);
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

      {/* Premium Header */}
      <header className={`premium-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="header-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              STARTON
            </div>

            {/* Desktop Navigation */}
            <nav className="header-nav">
              <a href="digitalProducts.html" className="nav-item">Digitl Products</a>
              
              {/* Services Dropdown */}
              <div 
                className="nav-item-dropdown"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <a href="services.html">
                <button className="nav-item">
                  Services <ChevronDown size={16} className="chevron" />
                </button></a>
                {servicesDropdownOpen && (
                  <div className="dropdown-menu">
                    <div className="dropdown-header">Our Services</div>
                    <a href="brandIdentity.html" className="dropdown-item" onClick={() => setServicesDropdownOpen(false)}>
                      <div className="dropdown-item-content">
                        <span className="dropdown-item-title">Brand Identity</span>
                        <span className="dropdown-item-desc">Logo, visual systems & voice</span>
                      </div>
                    </a>
                    <a href="web&UX.html" className="dropdown-item" onClick={() => setServicesDropdownOpen(false)}>
                      <div className="dropdown-item-content">
                        <span className="dropdown-item-title">Web & UX</span>
                        <span className="dropdown-item-desc">High-performance digital products</span>
                      </div>
                    </a>
                    <a href="BusinessStrategy.html" className="dropdown-item" onClick={() => setServicesDropdownOpen(false)}>
                      <div className="dropdown-item-content">
                        <span className="dropdown-item-title">Business Strategy</span>
                        <span className="dropdown-item-desc">Market positioning & planning</span>
                      </div>
                    </a>
                    <a href="marketingSystem.html" className="dropdown-item" onClick={() => setServicesDropdownOpen(false)}>
                      <div className="dropdown-item-content">
                        <span className="dropdown-item-title">Marketing Systems</span>
                        <span className="dropdown-item-desc">Content, SEO & campaigns</span>
                      </div>
                    </a>
                    <a href="salesEnablement" className="dropdown-item" onClick={() => setServicesDropdownOpen(false)}>
                      <div className="dropdown-item-content">
                        <span className="dropdown-item-title">Sales Enablement</span>
                        <span className="dropdown-item-desc">Funnels, CRM & automation</span>
                      </div>
                    </a>
                  </div>
                )}
              </div>

              {/* Company Dropdown */}
              <div 
                className="nav-item-dropdown"
                onMouseEnter={handleCompanyMouseEnter}
                onMouseLeave={handleCompanyMouseLeave}
              >
                <a href="company.html">
                <button className="nav-item">
                  Company <ChevronDown size={16} className="chevron" />
                </button></a>
                {companyDropdownOpen && (
                  <div className="dropdown-menu">
                    <div className="dropdown-header">About Us</div>
                    <a href="#process" className="dropdown-item" onClick={() => setCompanyDropdownOpen(false)}>
                      <div className="dropdown-item-content">
                        <span className="dropdown-item-title">Approach</span>
                        <span className="dropdown-item-desc">How we work with clients</span>
                      </div>
                    </a>
                    <a href="#" className="dropdown-item" onClick={() => setCompanyDropdownOpen(false)}>
                      <div className="dropdown-item-content">
                        <span className="dropdown-item-title">Careers</span>
                        <span className="dropdown-item-desc">Join our team</span>
                      </div>
                    </a>
                    <a href="#" className="dropdown-item" onClick={() => setCompanyDropdownOpen(false)}>
                      <div className="dropdown-item-content">
                        <span className="dropdown-item-title">Insights</span>
                        <span className="dropdown-item-desc">Our latest thinking</span>
                      </div>
                    </a>
                  </div>
                )}
              </div>

              <a href="about.html" className="nav-item">About</a>
            </nav>

            {/* CTA Button */}
            <a href="cta.html">    
            <Button className="btn-header-cta">
              Start a Project
            </Button></a>

            {/* Mobile Menu Toggle */}
            <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <a href="#" className="mobile-nav-item" onClick={closeMobileMenu}>Work</a>
            <a href="#services" className="mobile-nav-item" onClick={closeMobileMenu}>Services</a>
            <a href="#process" className="mobile-nav-item" onClick={closeMobileMenu}>Company</a>
            <a href="#" className="mobile-nav-item" onClick={closeMobileMenu}>About</a>
            
            <Button onClick={scrollToContact} className="btn-primary btn-mobile-cta">
              Start a Project
            </Button>

            <div className="mobile-menu-footer">
              <p>&copy; STARTON</p>
              <p className="mobile-tagline">Strategy That Builds Momentum.</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img
            src="https://customer-assets.emergentagent.com/job_scale-smart-1/artifacts/677upf7b_pexels-julian-v-293152-860227.jpg"
            alt="Creative team collaboration"
            className="hero-image" />

          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content" ref={parallaxRef}>
            <h1 className="hero-title floating">Strategy That Builds Momentum.</h1>
            <p className="hero-subtitle">We don't just launch brands. We launch winners. Transform your vision into market-dominating reality with data-driven strategy and creative excellence.</p>
            <a href="cta.html"> 
            <Button className="btn-primary btn-hero">
              Start Your Journey <ArrowRight className="ml-2" size={20} />
            </Button> </a>
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
            {mockServices.map((service, index) =>
            <Card key={service.id} className="service-card animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="service-card-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) =>
                  <li key={idx} className="service-feature">
                        <CheckCircle2 size={18} className="feature-icon" />
                        <span>{feature}</span>
                      </li>
                  )}
                  </ul>
                </CardContent>
              </Card>
            )}
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
            {mockWorkProcess.map((step, index) =>
            <div key={step.id} className="process-card animate-on-scroll" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="process-number">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-description">{step.description}</p>
              </div>
            )}
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
            {mockClients.map((client, idx) =>
            <div key={idx} className="client-card animate-on-scroll" style={{ animationDelay: `${idx * 0.1}s` }}>
                <Target className="client-icon" size={36} />
                <h3 className="client-name">{client}</h3>
              </div>
            )}
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
                    placeholder="Your name" />

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
                    placeholder="your@email.com" />

                </div>
                <div className="form-group">
                  <label htmlFor="company" className="form-label">Company</label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Your company" />

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
                    placeholder="Tell us about your project..." />

                </div>
                <Button type="submit" disabled={isSubmitting} className="btn-primary btn-submit">
                  {isSubmitting ? 'Sending...' : 'Book Consultation'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section Above Footer */}
      <section className="pre-footer-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-heading">Have a serious project in mind? Let's talk</h2>
            <Button onClick={scrollToContact} className="btn-primary btn-cta">
            Start a Project   <ArrowRight className="ml-0" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="premium-footer">
        <div className="container">
          {/* Brand Anchor */}
          <div className="footer-brand-section">
            <div className="footer-logo-large">STARTON</div>
            <p className="footer-tagline-large">Strategy That Builds Momentum.</p>
          </div>

          {/* Footer Navigation Grid */}
          <div className="footer-nav-grid">
            {/* Column 1 - Work */}
            <div className="footer-column">
              <h4 className="footer-column-title">Work</h4>
              <a href="#contact" className="footer-link">Start a Project</a>
              <a href="#" className="footer-link">Case Studies</a>
            </div>

            {/* Column 2 - Services */}
            <div className="footer-column">
              <h4 className="footer-column-title">Services</h4>
              <a href="#services" className="footer-link">Brand Identity</a>
              <a href="#services" className="footer-link">Web & UX</a>
              <a href="#services" className="footer-link">Business Strategy</a>
              <a href="#services" className="footer-link">Marketing Systems</a>
              <a href="#services" className="footer-link">Sales Enablement</a>
            </div>

            {/* Column 3 - Company */}
            <div className="footer-column">
              <h4 className="footer-column-title">Company</h4>
              <a href="#" className="footer-link">About</a>
              <a href="#process" className="footer-link">Approach</a>
              <a href="#" className="footer-link">Insights</a>
              <a href="#" className="footer-link">Careers</a>
            </div>

            {/* Column 4 - Connect */}
            <div className="footer-column">
              <h4 className="footer-column-title">Connect</h4>
              <a href="mailto:hello@starton.agency" className="footer-link">Email</a>
              <a href="#" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="#" className="footer-link" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="#" className="footer-link" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>

          {/* Footer Divider */}
          <div className="footer-divider"></div>

          {/* Footer Close */}
          <div className="footer-close">
            <p className="footer-copyright">&copy; 2025 STARTON.</p>
            <p className="footer-statement">Not Just an Agency. A Growth Partner.</p>
          </div>
        </div>
      </footer>

      {/* Theme Toggle Button */}
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme">

        {isDarkTheme ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </div>);

};

export default Home;