import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import Work from './pages/Work';
import Services from './pages/Services';
import Company from './pages/Company';
import Careers from './pages/Careers';
import Insights from './pages/Insights';
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
              <Route path="/services" element={<Services />} />
              <Route path="/company" element={<Company />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/insights" element={<Insights />} />
            </Routes>
          </BrowserRouter>
          <Toaster />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;