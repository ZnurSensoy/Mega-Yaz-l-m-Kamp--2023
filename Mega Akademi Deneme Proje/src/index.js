import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContextProvider } from './src/context/AppContext'; // AppContextProvider'ın ismini ve dosya yolunu kontrol edin
import App from './src/App'; // Ana uygulama bileşeni

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
