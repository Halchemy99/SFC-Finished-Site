import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import './i18n/i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandSlider from './components/BrandSlider';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Pricing from './pages/Pricing';
import CaseStudies from './pages/CaseStudies';
import QuickWins from './pages/QuickWins';
import ExpertMatching from './pages/ExpertMatching';
import GrowthPartnership from './pages/GrowthPartnership';
import AmazonAcademy from './pages/AmazonAcademy';
import TikTokOffer from './pages/TikTokOffer';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import Team from './pages/Team';
import Blog from './pages/Blog';
import PaymentSuccess from './pages/PaymentSuccess';
import { Toaster } from './components/ui/toaster';
import './App.css';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BrandSlider />
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
            <Route path="/team" element={<PageLayout><Team /></PageLayout>} />
            <Route path="/blog" element={<PageLayout><Blog /></PageLayout>} />
            <Route path="/services/quick-wins" element={<PageLayout><QuickWins /></PageLayout>} />
            <Route path="/services/expert-matching" element={<PageLayout><ExpertMatching /></PageLayout>} />
            <Route path="/services/growth-partnership" element={<PageLayout><GrowthPartnership /></PageLayout>} />
            <Route path="/services/amazon-academy" element={<PageLayout><AmazonAcademy /></PageLayout>} />
            <Route path="/tiktok-offer" element={<PageLayout><TikTokOffer /></PageLayout>} />
            <Route path="/faq" element={<PageLayout><FAQ /></PageLayout>} />
            <Route path="/payment/success" element={<PageLayout><PaymentSuccess /></PageLayout>} />
            <Route path="/privacy" element={<PageLayout><Privacy /></PageLayout>} />
            <Route path="/terms" element={<PageLayout><Terms /></PageLayout>} />
            <Route path="/cookies" element={<PageLayout><Cookies /></PageLayout>} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </div>
    </LanguageProvider>
  );
}

export default App;
