import React from 'react';
import { Router } from '@/routes/router';
import { GlobalStyles } from '@/styles/GlotalStyles';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
