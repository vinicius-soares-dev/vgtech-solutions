import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import "./config.css";
import { initMercadoPago } from '@mercadopago/sdk-react';

initMercadoPago("APP_USR-fd00da99-735d-4397-a3e4-0d2ae456ef9b");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
