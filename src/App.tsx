import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WebDevelopment from './components/WebDevelopment';
import MobileDevelopment from './components/MobileDevelopment';
import AIAgents from './components/AIAgents';
import DigitalMarketing from './components/DigitalMarketing';
import Footer from './components/Footer';

import ResponsiveDesignPage from './components/pages/responsive-desing';
import LightningFastPage from './components/pages/lightning-fast';
import ModernUIPage from './components/pages/modern-ui';
import SecureReliablePage from './components/pages/secure-reliable';

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
        <Route path="/web-development/responsive-design" element={<ResponsiveDesignPage />} />
        <Route path="/web-development/lightning-fast" element={<LightningFastPage />} />
        <Route path="/web-development/modern-ui" element={<ModernUIPage />} />
        <Route path="/web-development/secure-reliable" element={<SecureReliablePage />} />
      </Routes>
    </>
  );
}
