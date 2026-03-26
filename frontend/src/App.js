import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import Work from './pages/Work';
import CaseStudy from './pages/CaseStudy';
import Services from './pages/Services';
import Company from './pages/Company';
import Careers from './pages/Careers';
import Insights from './pages/Insights';
import ArticleDetail from './pages/ArticleDetail';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/work/:slug" element={<CaseStudy />} />
              <Route path="/services" element={<Services />} />
              <Route path="/company" element={<Company />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:slug" element={<ArticleDetail />} />
            </Routes>
          </BrowserRouter>
          <Toaster />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;