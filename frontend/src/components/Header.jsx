import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const servicesTimeoutRef = useRef(null);
  const companyTimeoutRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStartProject = () => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: 'contact' } });
    }
  };

  const handleServicesMouseEnter = () => {
    clearTimeout(servicesTimeoutRef.current);
    setServicesDropdownOpen(true);
  };
  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => setServicesDropdownOpen(false), 300);
  };
  const handleCompanyMouseEnter = () => {
    clearTimeout(companyTimeoutRef.current);
    setCompanyDropdownOpen(true);
  };
  const handleCompanyMouseLeave = () => {
    companyTimeoutRef.current = setTimeout(() => setCompanyDropdownOpen(false), 300);
  };

  const serviceItems = [
    { title: 'Brand Identity', desc: 'Logo, visual systems & voice' },
    { title: 'Web & UX', desc: 'High-performance work' },
    { title: 'Business Strategy', desc: 'Market positioning & planning' },
    { title: 'Marketing Systems', desc: 'Content, SEO & campaigns' },
    { title: 'Sales Enablement', desc: 'Funnels, CRM & automation' },
  ];

  const companyItems = [
    { title: 'Approach', desc: 'How we work with clients' },
    { title: 'Careers', desc: 'Join our team' },
    { title: 'Insights', desc: 'Our latest thinking' },
  ];

  return (
    <header className={`premium-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="header-logo" data-testid="header-logo">STARTON</Link>

          <nav className="header-nav">
            <Link to="/work" className="nav-item" data-testid="nav-work">Work</Link>

            <div className="nav-item-dropdown" onMouseEnter={handleServicesMouseEnter} onMouseLeave={handleServicesMouseLeave}>
              <button className="nav-item" data-testid="nav-services">
                Services <ChevronDown size={16} className="chevron" />
              </button>
              {servicesDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-header">Our Services</div>
                  {serviceItems.map(item => (
                    <Link key={item.title} to="/services" className="dropdown-item" onClick={() => setServicesDropdownOpen(false)}>
                      <div className="dropdown-item-content">
                        <span className="dropdown-item-title">{item.title}</span>
                        <span className="dropdown-item-desc">{item.desc}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="nav-item-dropdown" onMouseEnter={handleCompanyMouseEnter} onMouseLeave={handleCompanyMouseLeave}>
              <button className="nav-item" data-testid="nav-company">
                Company <ChevronDown size={16} className="chevron" />
              </button>
              {companyDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-header">About Us</div>
                  {companyItems.map(item => (
                    <Link key={item.title} to="/company" className="dropdown-item" onClick={() => setCompanyDropdownOpen(false)}>
                      <div className="dropdown-item-content">
                        <span className="dropdown-item-title">{item.title}</span>
                        <span className="dropdown-item-desc">{item.desc}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className="nav-item" data-testid="nav-about">About</Link>
          </nav>

          <Button className="btn-header-cta" onClick={handleStartProject} data-testid="header-start-project-btn">
            Start a Project
          </Button>

          <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} data-testid="mobile-menu-toggle">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <Link to="/work" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>Work</Link>
          <Link to="/services" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link to="/company" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>Company</Link>
          <Link to="/about" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Button onClick={handleStartProject} className="btn-primary btn-mobile-cta">Start a Project</Button>
          <div className="mobile-menu-footer">
            <p>&copy; STARTON</p>
            <p className="mobile-tagline">Strategy That Builds Momentum.</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
