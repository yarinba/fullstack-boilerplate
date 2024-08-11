import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import axios from 'axios';

import App from './app/app';
import { StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@theme';

import './styles.css';

axios.defaults.baseURL = 'http://localhost:3333/api';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider mode="dark">
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>
);
