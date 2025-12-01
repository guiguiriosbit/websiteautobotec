import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WebDevelopment from './components/WebDevelopment';
import MobileDevelopment from './components/MobileDevelopment';
import AIAgents from './components/AIAgents';
import DigitalMarketing from './components/DigitalMarketing';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <WebDevelopment />
              <MobileDevelopment />
              <AIAgents />
              <DigitalMarketing />
              <Footer />
            </>
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </>
  );
}
