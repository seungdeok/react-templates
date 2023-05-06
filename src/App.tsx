import React from 'react';
import { Global } from '@emotion/react';
import { Router } from '@/routes/router';
import { resetStyles } from '@/styles/reset';

function App() {
  return (
    <>
      <Global styles={resetStyles} />
      <Router />
    </>
  );
}

export default App;
