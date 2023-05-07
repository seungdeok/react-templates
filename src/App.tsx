import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import { Router } from '@/routes/router';
import { store } from '@/redux/store';
import { GlobalStyles } from '@/styles/GlotalStyles';

function App() {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <Router />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
