import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleStartProject = () => {
    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: 'contact' } });
    }
  };

  return (
    <>
      <section className="pre-footer-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-heading">Have a serious project in mind? Let's talk</h2>
            <Button onClick={handleStartProject} className="btn-primary btn-cta" data-testid="footer-start-project-btn">
              Start a Project <ArrowRight className="ml-0" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <footer className="premium-footer">
        <div className="container">
          <div className="footer-brand-section">
            <div className="footer-logo-large">STARTON</div>
            <p className="footer-tagline-large">Strategy That Builds Momentum.</p>
          </div>

          <div className="footer-nav-grid">
            <div className="footer-column">
              <h4 className="footer-column-title">Work</h4>
              <Link to="/work" className="footer-link">Our Projects</Link>
              <span className="footer-link" onClick={handleStartProject} style={{ cursor: 'pointer' }}>Start a Project</span>
            </div>
            <div className="footer-column">
              <h4 className="footer-column-title">Services</h4>
              <Link to="/services" className="footer-link">Brand Identity</Link>
              <Link to="/services" className="footer-link">Web & UX</Link>
              <Link to="/services" className="footer-link">Business Strategy</Link>
              <Link to="/services" className="footer-link">Marketing Systems</Link>
              <Link to="/services" className="footer-link">Sales Enablement</Link>
            </div>
            <div className="footer-column">
              <h4 className="footer-column-title">Company</h4>
              <Link to="/company" className="footer-link">About Us</Link>
              <Link to="/company" className="footer-link">Approach</Link>
              <Link to="/insights" className="footer-link">Insights</Link>
              <Link to="/careers" className="footer-link">Careers</Link>
            </div>
            <div className="footer-column">
              <h4 className="footer-column-title">Connect</h4>
              <a href="mailto:hello@starton.agency" className="footer-link">Email</a>
              <a href="#" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="#" className="footer-link" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="#" className="footer-link" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>

          <div className="footer-divider"></div>
          <div className="footer-close">
            <p className="footer-copyright">&copy; 2025 STARTON.</p>
            <p className="footer-statement">Not Just an Agency. A Growth Partner.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
