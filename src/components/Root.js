import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import App from './App';

function Root() {
  return <ThemeProvider>
    <App />
  </ThemeProvider>;
}

export default Root;
