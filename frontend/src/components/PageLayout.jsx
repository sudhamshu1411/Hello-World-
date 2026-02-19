import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Header from './Header';
import Footer from './Footer';

const PageLayout = ({ children }) => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('animated');
      }),
      { threshold: 0.1 }
    );
    const timeout = setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    }, 150);
    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  const generateParticles = () => {
    const particles = [];
    for (let i = 0; i < 30; i++) {
      const size = Math.random() * 8 + 6;
      particles.push(
        <div
          key={i}
          className="particle"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${Math.random() * 10 + 15}s`
          }}
        />
      );
    }
    return particles;
  };

  return (
    <div className="starton-page">
      <div className={`loading-spinner ${!isLoading ? 'hidden' : ''}`}>
        <div className="spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-center"></div>
        </div>
      </div>

      <div className="animated-background">
        <div className="grid-pattern"></div>
        <div className="particles-container">{generateParticles()}</div>
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
      </div>

      <Header />

      <main>{children}</main>

      <Footer />

      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme" data-testid="theme-toggle-btn">
        {isDarkTheme ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </div>
  );
};

export default PageLayout;
