import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import './i18n/i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Pricing from './pages/Pricing';
import CaseStudies from './pages/CaseStudies';
import QuickWins from './pages/QuickWins';
import { Toaster } from './components/ui/toaster';
import './App.css';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
};

const PageLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<PageLayout><Pricing /></PageLayout>} />
            <Route path="/case-studies" element={<PageLayout><CaseStudies /></PageLayout>} />
            <Route path="/services/quick-wins" element={<PageLayout><QuickWins /></PageLayout>} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </div>
    </LanguageProvider>
  );
}

export default App;
