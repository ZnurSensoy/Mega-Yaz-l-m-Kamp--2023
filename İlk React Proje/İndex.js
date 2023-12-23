import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from ".";

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);