import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext'; // 👈 AGREGAR
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <LanguageProvider> {/* 👈 AGREGAR */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LanguageProvider> {/* 👈 AGREGAR */}
  </StrictMode>
);