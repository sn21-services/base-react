import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd-mobile';
import enUS from 'antd-mobile/es/locales/en-US';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import './index.css';
import App from './App.tsx';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider locale={enUS}>
          <App />
        </ConfigProvider>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </ErrorBoundary>
  </StrictMode>
);
