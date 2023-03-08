import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/home/Home';
import { GlobalStyle } from './styles/GlobalStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>
);