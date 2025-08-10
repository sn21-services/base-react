import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd-mobile';
import enUS from 'antd-mobile/es/locales/en-US';

import './index.css';
import App from './App.tsx';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <ConfigProvider locale={enUS}>
        <App />
      </ConfigProvider>
    </ErrorBoundary>
  </StrictMode>
);
